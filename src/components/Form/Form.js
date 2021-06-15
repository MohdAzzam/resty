import React, { useState } from 'react';
import './Form.scss';

/**
 * 
 * @param {*} setResponseData 
 * @returns 
 */
export default function Form({
    setResponseData,
    url,
    method,
    body,
    setUrl,
    setBody,
    setMethod,
    setShowLoading
}) {
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const methods = [
        {
            "value": "GET",
            "label": "GET"
        },
        {
            "value": "POST",
            "label": "POST"
        },
        {
            "value": "PUT",
            "label": "PUT"
        },
        {
            "value": "DELETE",
            "label": "DELETE"
        }
    ];

    function handleSubmit(event) {
        event.preventDefault();
        setShowLoading(true);
        setShowErrorMessage(false);
        setResponseData(false);

        let config = {
            method: method,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (method === "POST" || method === "PUT") {
            config['body'] = body;
        }

        fetch(url, config).then((response) => {
            console.log(response.headers);
            response.json().then((result) => {
                setResponseData(result);
                setShowLoading(false);
            })

        }).catch((err) => {
            setShowLoading(false);
            setShowErrorMessage(true);
        })
    }

    return (
        <div className="form-wapper">

            <form className='form'>
                {showErrorMessage ? (
                    <div className="error-message-block">
                        <label className="error-message">Url not valid !</label>
                    </div>
                ) : []}
                <label>URL:</label>
                <input onChange={(e) => setUrl(e.target.value)} value={url} placeholder='url gose here ...' required name='url' />
                <div>
                    {methods.map((item, index) => (
                        <div key={index}>
                            <input type='radio' checked={method === item.value ? 'selected' : false} onChange={(e) => setMethod(e.target.value)} value={item.value} name='method' required />{item.label}
                        </div>
                    ))}
                </div>
                <textarea className='data' value={body} name='body' onChange={(e) => setBody(e.target.value)}>

                </textarea>
                <button onClick={handleSubmit} disabled={!url || !method || (method !== "GET" && !body)} >Go</button>
            </form>
        </div>
    );
}
