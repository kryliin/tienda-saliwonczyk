import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Items from "./Items";

export default function Orden(orden) {
    return (
        <>
             {orden.buyer}
             {orden.items}
             {orden.total}
            {/* <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">
                            {orden.buyer.map((buyer) => <Items key={buyer.id} ordenes={buyer} />)}
                        </div>
                        {orden.items}

                    </div>
                    <Badge bg="primary" pill>
                        $ {orden.total}
                    </Badge>
                </ListGroup.Item>
            </ListGroup> */}
        </>
    );
}
