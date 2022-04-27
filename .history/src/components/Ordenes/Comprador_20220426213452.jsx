import React from "react";


export default function Comprador(buyer) {


    return (

        <>
        {buyer.nombre}
        {buyer.email}
        {buyer.dir}
        {buyer.cel}
        {buyer.dias}
    
        </>

    );
}