import React, { useEffect, useState } from "react";
import './Home.scss';
import ReactJson from 'react-json-view';
import Form from "../Form/Form";
import Loader from "../../components/loading/loading";
import History from "../History/History";
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router';

export default function Home() {
    const reactHistory = useHistory();
    const [responseData, setResponseData] = useState();
    const [url, setUrl] = useState();
    const [method, setMethod] = useState();
    const [body, setBody] = useState();
    const [showloading, setShowLoading] = useState(false);
    const [displayData, setDisplayData] = useState();
    const [requestData, setRequestData] = useState();
    const [reponseHeaders, setReponseHeaders] = useState();
    const [enableFetchData, setEnableFetchData] = useState(false);
    
    const search = useLocation().search;
    const fetchData = new URLSearchParams(search).get('fetchData');

    useEffect(() => {
        if (fetchData) {

            let targetHistory = localStorage.getItem('target-history-item');
            if (targetHistory) {
                targetHistory = JSON.parse(targetHistory);
                setUrl(targetHistory.url);
                setMethod(targetHistory.method);
                setBody(targetHistory.body);
                setEnableFetchData(true);
                localStorage.removeItem('target-history-item');
                reactHistory.replace(window.location.url, { fetchData: 0 });
            }
        }
    }, [fetchData])

    useEffect(() => {
        if (responseData) {
            setDisplayData(responseData);
            setResponseData(false);
        }
    }, [responseData])

    useEffect(() => {
        if (responseData && url && method) {
            setRequestData({
                body: body ? [...body] : false,
                url: [...url],
                method: [...method]

            });
            let temporaryHisroty = localStorage.getItem('history');
            temporaryHisroty = temporaryHisroty ? JSON.parse(temporaryHisroty) : [];
            let isFind = false;
            temporaryHisroty.forEach((item) => {
                if (item.url === url && (!item.body || item.body === body) && item.method === method) {
                    isFind = true;
                    return;
                }
            });

            if (isFind) {
                return;
            }

            temporaryHisroty.push({
                body: body,
                url: url,
                method: method
            });
            localStorage.setItem("history", JSON.stringify(temporaryHisroty));

        }
    }, [responseData, url, method, body])


    return (
        <>
            <section className={"main " + (showloading ? "hold-body" : '')} id='main'>
                {showloading ? (<Loader />) : (
                    <div>
                        <Form
                            setResponseData={setResponseData}
                            url={url}
                            method={method}
                            body={body}
                            setUrl={setUrl}
                            setMethod={setMethod}
                            setBody={setBody}
                            setShowLoading={setShowLoading}
                            setReponseHeaders={setReponseHeaders}
                            enableFetchData={enableFetchData}
                            setEnableFetchData={setEnableFetchData}
                        />
                        <History />
                        {displayData && requestData ? (
                            <div>
                                <RequestData requestData={requestData} />
                                <Resaults result={displayData} headers={reponseHeaders} />
                            </div>
                        ) : []}
                    </div>
                )}
            </section>
        </>
    )
}

function RequestData({ requestData }) {
    if (!requestData) return [];

    return (
        <div>
            <label>Request : </label>
            <br />
            <br />
            <label>Url : {requestData.url}</label>
            <br />
            <label>Method : {requestData.method}</label>
            <br />
            {requestData.body ? (
                <label>Body : {requestData.body}</label>
            ) : []}
        </div>
    )
}

function Resaults({ result, headers }) {
    if (!result) return [];

    return (
        <div>
            <hr />
            <label>Response Headers</label>
            <ReactJson src={headers} />
            <hr />
            <label>Response</label>
            <ReactJson src={result} />
        </div>
    );
}