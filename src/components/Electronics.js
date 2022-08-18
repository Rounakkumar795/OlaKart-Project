import React, { useEffect, useState } from "react";
import ProductList from "./ProuductList";
const Electronics = () => {

    // useEffect(() => {
    //     getProducts();
    // })
    
    // const getProducts =() => {
    //     // e.preventDefault();
    //     let url_person = "http://18.188.19.80:2020/getproductbycat"
    //     async function checkLogin(){
    //         let response = await fetch(url_person,
    //             {
    //                 method : 'POST',
    //                 body: JSON.stringify({
    //                   "category_id": 2
    //                 }),
    //                 headers: {
    //                     'Content-type': 'application/json; charset=UTF-8',
    //                   }
    //             }).then(function(response){
    //                 return response.json()
    //             }).then(function(data){
                    
    //                 console.log(data[1].product_name)
    //             }).catch(error => console.error("Error:", error));
    //     }
    //     checkLogin();
    //   }

    return(
       <div>
        <ProductList/>
       </div>
    )
}

export default Electronics;