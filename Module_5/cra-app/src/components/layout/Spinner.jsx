import React from "react";

function Spinner() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="spinner-border text-primary">
            </div>
            <div className="spinner-border text-secondary">
            </div>
            <div className="spinner-border text-success">
            </div>
        </div>
    )
}

export default Spinner;