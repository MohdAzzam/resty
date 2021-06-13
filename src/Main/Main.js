import React , {useState,useEffect} from "react";
import './Main.scss';

// useForm 
// useContext
// redex
export default function Main(){
    const [method , setMethod] = useState();
    const [url , setUrl] = useState();
    const [data , setData] = useState(false);

    useEffect(()=>{
       console.log("on load"); 
    },[])

    useEffect(()=>{
        console.log(method);
    },[method])

    function handleSubmit(e){
       e.preventDefault();
        setData({
            url : [...url],
            method : [...method]
        });
    }

    return (<main className='main'>
    <form className='form'>
        <label>URL:</label>
        <input name="url" onChange={(e)=>setUrl(e.target.value)} placeholder='url gose here ...' required/>
        <div onChange={(e)=>setMethod(e.target.value)}>
            <input type='radio' value='GET' name='method' required />GET
            <input type='radio' value='POST' name='method' required />POST
            <input type='radio' value='PUT' name='method' required />PUT
            <input type='radio' value='DELETE' name='method' required />DELETE
        </div>
        <button onClick={handleSubmit}>Go!</button>
    </form>
    {data ? (
    <section>
        <label className="font-size-lg-2 title font-size-sm-o875">{data.method}</label>
        <label className="font-size-lg-2 title test font-size-sm-o875">{data.url}</label>
    </section>
    ) : []}
</main>);
}


