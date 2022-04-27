import React from "react";

export default function Items(orden) {
    return (
        <>
        {orden.id}
        {orden.nombre}
        {orden.precio}
        </>
    );
}
