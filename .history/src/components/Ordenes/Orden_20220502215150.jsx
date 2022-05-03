import React from "react";
import Badge from 'react-bootstrap/Badge'


const Orden = ({ orden }) => {

    return (
        <>
            <div
                as="li"
                className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">

                        {orden}
                    </div>
                    {orden}
                </div>
                <Badge bg="primary" pill>
                    $ {orden}
                </Badge>
            </div>

        </>
    );
}
export default Orden;