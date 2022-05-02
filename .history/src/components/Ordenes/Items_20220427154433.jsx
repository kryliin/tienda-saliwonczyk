import React from "react";

export default function Items(order) {
    return (
        <>
        {order.nombre}
        {order.cel}
        {order.email}
        {order.dir}
        {order.dias}
        </>
    );
}
