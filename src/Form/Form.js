import React from 'react';
import './Form.scss';
class Form extends React.Component {
 
    go = async (e) => {
        e.preventDefault();
        const url = e.target.url.value;
        const method = e.target.method.value;
        const raw = await fetch(url, {
            method: method,
            mode: 'cors'
        });
        const data = await raw.json();
        this.props.handler(url, method, data);
    }
    render() {
        return (
            <form className='form' onSubmit={this.go}>
                <label>URL:</label>
                <input placeholder='url gose here ...' required name='url' />
                <div>
                    <input type='radio' value='GET' name='method' required />GET
                    <input type='radio' value='POST' name='method' required />POST
                    <input type='radio' value='PUT' name='method' required />PUT
                    <input type='radio' value='DELETE' name='method' required />DELETE
                </div>
                <button>Go</button>
            </form>
        )
    }
}

export default Form;

