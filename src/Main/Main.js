import React from "react";
import './Main.scss';

const state={};
const go = (e) => {
    e.preventDefault();
    
   document.getElementById('method').innerHTML=state.selectedOpt;
   document.getElementById('url').innerHTML=state.value;
}

const handelChange = (e) => {
    const value = e.target.value;
    console.log(value);
    state.value=value;
}
const radioValue = (e) => {
    const selectedOpt = e.target.value;
    state.selectedOpt = selectedOpt;
}
const Main = () => {
    return (
        <main className='main'>
            <form className='form'>
                <label>URL:</label>
                <input onChange={handelChange} placeholder='url gose here ...' required/>
                <div onChange={radioValue}>
                    <input type='radio' value='GET' name='method' required />GET
                    <input type='radio' value='POST' name='method' required />POST
                    <input type='radio' value='PUT' name='method' required />PUT
                    <input type='radio' value='DELETE' name='method' required />DELETE
                </div>
                <button onClick={go}>Go!</button>
            </form>
            <section>
               <label id='method'></label> <label id='url'></label> 
            </section>
        </main>
    )
}

export default Main;


