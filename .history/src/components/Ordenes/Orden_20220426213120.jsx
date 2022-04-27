import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

export default function Ordenen(orden) {


    return (

        <>
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{orden.buyer.name}</div>
                        {orden.items.map}
                    </div>
                    <Badge bg="primary" pill>
                        $ {orden.total}
                    </Badge>
                </ListGroup.Item>

            </ListGroup>
        </>

    );
}
