import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Items from "./Items";

export default function Orden(orden) {
    return (
        <>
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">
                         {/*    {orden.buyer.nombre} */}
                            {orden.buyer.email}
                            {orden.buyer.dir}
                            {orden.buyer.cel}
                            {orden.buyer.dias}</div>
                        {orden.items.map((order) => <Items key={order.id} ordenes={order} />)}
                    </div>
                    <Badge bg="primary" pill>
                        $ {orden.total}
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}
