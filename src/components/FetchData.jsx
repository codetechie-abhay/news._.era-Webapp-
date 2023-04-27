import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const FetchData = ({cat}) => {
    const [Data,setData]=useState("");
    const fetchdata = async()=>{
        await axios
        .get(
            cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=a4f38075bc0441fd85dc21dbbb2da58b` :
                  `https://newsapi.org/v2/top-headlines?country=in&apiKey=a4f38075bc0441fd85dc21dbbb2da58b`
        )
         .then((res) => setData(res.data.articles));
    };
    useEffect(()=>{
        fetchdata();
    });
    
    
    return (
        <>
        <div className="container my-4">
            <h3><u>TOP HEADLINES</u></h3>
            <div style={{fontFamily:"monospace",minHeight:"100vh"}} className="container d-flex justify-content-center align-items-center flex-column my-3">
                {Data ? Data.map((items,index)=> <> 
                
                <div className="container my-3 p-3" style={{width:"600px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"10px" }}>

                <h5 className="my-1"> {items.title} </h5> 
                <div className="container d-flex my-2 justify-content-center align-items-center"><img alt="Not Found 😭!" src={items.urlToImage} className="img-fluid " style={{width:"100%",height:"300px",objectFit:"cover"}} /></div>
                
                <p className="my-1">{items.description}</p>
                <a href={items.url} target="blank">View More</a>
                </div>
                 
                </>) :"LOADING...." }
            </div>

            </div>
            </>
    )
}

export default FetchData;