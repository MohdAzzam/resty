import React, { useEffect, useState } from "react";
import './Main.scss';
import ReactJson from 'react-json-view';
import Form from "../Form/Form";
import Loader from '../loading/loading';

export default function Main() {
    const [history, setHisroty] = useState(false);
    const [responseData, setResponseData] = useState();
    const [url, setUrl] = useState();
    const [method, setMethod] = useState();
    const [body, setBody] = useState();
    const [showloading, setShowLoading] = useState(false);
    const [displayData, setDisplayData] = useState();
    const [requestData, setRequestData] = useState();
    const [reponseHeaders, setReponseHeaders] = useState();

    useEffect(() => {
        if (responseData) {
            setDisplayData(responseData);
            setResponseData(false);
        }
    }, [responseData])

    useEffect(() => {
        let temporaryHisroty = localStorage.getItem('response-history');
        temporaryHisroty = temporaryHisroty ? JSON.parse(temporaryHisroty) : [];

        setHisroty(temporaryHisroty)
    }, [])

    useEffect(() => {
        if (responseData && url && method) {
            setRequestData({
                body: body ? [...body] : false,
                url: [...url],
                method: [...method]

            });
            let temporaryHisroty = localStorage.getItem('response-history');
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
            setHisroty(temporaryHisroty);
            localStorage.setItem("response-history", JSON.stringify(temporaryHisroty));

        }
    }, [responseData, url, method, body])


    function handlefilForm(item) {
        setUrl(item.url);
        setMethod(item.method);
        setBody(item.body);
    }

    return (
        <>
            <section className={"main " + (showloading ? "hold-body" : '')} id='main'>
                {showloading ? (<Loader />) : []}
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
                />
                <HistoryList list={history} handlefilForm={handlefilForm} />
                {displayData && requestData ? (
                    <div>
                        <RequestData requestData={requestData} />
                        <Resaults result={displayData} headers={reponseHeaders} />
                    </div>
                ) : []}
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


function HistoryList({ list, handlefilForm }) {
    if (list && Array.isArray(list) && list.length) {
        return (
            <div>
                <label>History : </label>
                {list.map((item, index) => (
                    <div className="history-block" key={index} >
                        <div className={item.method === "GET" ? 'get-button' : item.method === "POST" ? 'post-button' : item.method === "DELETE" ? 'delete-button' : 'put-button'}
                            onClick={() => handlefilForm(item)}
                        >
                            {item.method}
                        </div>
                        <label>{item.url}</label>
                        <br />

                    </div>
                ))}
            </div>);
    }

    return [];
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