import {useState} from "react";
import {useEffect} from "react";
import Quotes from "./Quote";
import { v4 as uuid } from 'uuid';

const Home=()=>{
    const unique_id = uuid();
    const small_id = unique_id.slice(0,8)
    const [quotes,setQuotes]=useState([]);
    useEffect(()=>{
        fetch(`https://strangerthings-quotes.vercel.app/api/quotes/50`)
            .then(response=>response.json())
            .then(data=>setQuotes(data))
    },[])



    console.log(quotes)
    let  id = 10;
    return(
        <div className="accordion" id="accordionExample">
            {quotes.map(rez=>(<Quotes id={id++} quote={rez.quote} author={rez.author}/>))}
        </div>
    )}


    export default Home