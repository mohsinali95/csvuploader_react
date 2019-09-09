import React from 'react';
import './success-upload.css'

function SuccessUpload(props) {
    let { onViewClick } = props
    return (
        <div className="d-flex flex-column align-items-center justify-content-center success-upload" >
            <div className="bg-white rounded d-flex flex-column align-items-center justify-content-around mt-3 mb-3 cardShadow cardDiminsions" >
                <i className="fa fa-check-circle text-success" style={{ fontSize: 150 }} ></i>
                <h6>CSV Successfully Uploaded</h6>
                <button onClick={() => { onViewClick(false) }} className="btn btn-success btnWidth">
                    VIEW
                        </button>
            </div>
        </div>
    );
}

export default SuccessUpload;