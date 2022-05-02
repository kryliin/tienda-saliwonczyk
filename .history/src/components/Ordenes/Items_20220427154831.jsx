import React from "react";

export default function Items(buyer) {
    return (
        <>
        {buyer.nombre}
        {buyer.cel}
        {buyer.email}
        {buyer.dir}
        {buyer.dias}
        </>
    );
}
