import React, { useEffect, useState } from "react";
import ProductList from "./ProuductList";
const Mobile = () => {

    // useEffect(() => {
    //     getProducts();
    // })
    // const [practice,setPractice]=useState('');
    // const [data,setData]=useState({});
    // const getProducts =() => {
    //     // e.preventDefault();
    //     let url_person = "http://18.188.19.80:2020/getproductbycat"
    //     async function checkLogin(){
    //         let response = await fetch(url_person,
    //             {
    //                 method : 'POST',
    //                 body: JSON.stringify({
    //                   "category_id": 1
    //                 }),
    //                 headers: {
    //                     'Content-type': 'application/json; charset=UTF-8',
    //                   }
    //             }).then(function(response){
    //                 return response.json()
    //             }).then(function(data){
    //                 setData(data);
    //                 console.log(data)
    //                setPractice( (data[0].product_name))
    //                setPractice( (data[0].product_description))
    //                 console.log(data[0].product_img_url)
    //                 console.log(data[0].rating)
    //                 console.log(data.length)
    //             }).catch(error => console.error("Error:", error));
    //     }
    //     checkLogin();
    //   }

    return(
        <div>
        <ProductList/>
{/*         
        {data.map(e=>{
            return(
                <div>
                    <h1>hey</h1>
                    {e.product_name}
                </div>
            );
        })} */}
        {/* <h1>{practice}</h1> */}
        </div>
    )
}

export default Mobile;