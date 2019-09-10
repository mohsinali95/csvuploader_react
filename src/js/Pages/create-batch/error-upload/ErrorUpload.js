import React, { Component } from 'react'
import './error-upload.css'
import ErrorTable from './ErrorTable'

class ErrorUpload extends Component {
    render() {
        return (
            <div className="error-upload">
                <div className='m-4 error-card'>
                    <div className="error-heading ml-3">
                        <h4>Uploaded CSV</h4>
                    </div>
                    <div className="error-table">
                        <ErrorTable></ErrorTable>
                    </div>
                    <div className='error-btn-row row justify-content-center'>
                        <button className="btn btn-success error-btn mr-3" >Download CSV with errors</button>
                        <button className="btn btn-outline-danger error-btn ml-3">Upload Again</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorUpload;