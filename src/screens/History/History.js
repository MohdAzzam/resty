import React, { useEffect, useState } from 'react';
import './History.scss';
import { useHistory } from 'react-router';

export default function History() {
    const reactHistory = useHistory();
    const [hisroty, setHisroty] = useState();


    useEffect(() => {
        let temporaryHisroty = localStorage.getItem('history');
        temporaryHisroty = temporaryHisroty ? JSON.parse(temporaryHisroty) : [];

        setHisroty(temporaryHisroty)
    }, [])

    /**
     * Get item ,
     * save localstorage : target item 
     * go to home page
     * @param {Object} item 
     */
    function handlefilForm(item) {
        localStorage.setItem('target-history-item', JSON.stringify(item));
        reactHistory.push({
            "pathname": "/",
            "search": "?fetchData=1"
        });
    }

    return (
        <div className="history-wrapper">
            <label className="title">History : </label>
            {hisroty && Array.isArray(hisroty) && hisroty.length ?
                (<>{
                    hisroty.map((item, index) => (
                        <div className="history-block" key={index} >
                            <div className={item.method === "GET" ? 'get-button' : item.method === "POST" ? 'post-button' : item.method === "DELETE" ? 'delete-button' : 'put-button'}
                                onClick={() => handlefilForm(item)}
                            >
                                {item.method}
                            </div>
                            <label>{item.url}</label>
                            <br />

                        </div>
                    ))
                }</>) : (<div>No History Found !!</div>)
            }

        </div>);

}