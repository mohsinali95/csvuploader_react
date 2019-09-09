import React, { Component } from 'react'
import './report.css'
import ReportCard from './report-card/ReportCard'
import { Modal } from 'antd';

class Report extends Component {

    constructor(props) {
        super(props)
        this.state = {
            approvedModal: false,
            disApprovedModal: false
        }
    }

    handleApprovedOk() {
        this.setState({
            approvedModal: false
        })
    }

    handleApprovedCancel() {
        this.setState({
            approvedModal: false
        })
    }
  
    handleDisApprovedOk() {
        this.setState({
            disApprovedModal: false
        })
    }

    handleDisApprovedCancel() {
        this.setState({
            disApprovedModal: false
        })
    }


    render() {
        return (
            <div className='report'>
                <div className='m-4'>
                    <h2>Feb 26, 2019 <span className='text-success'>(25,000 PKR)</span></h2>
                </div>
                <div className='report-card-row row ml-2 mr-2'>
                    <ReportCard name={'Syed Razal Iqbal'} date={'Feb 26,2019'} byText={'Created By'} isLast={false}></ReportCard>
                    <ReportCard name={'Adil Akber Ali'} date={'Feb 26,2019'} byText={'Auditor'} isLast={false}></ReportCard>
                    <ReportCard name={'Ishap Kothawala'} date={'Feb 27,2019'} byText={'Authority'} isLast={true}></ReportCard>
                </div>
                <div className='report-card-table-view m-4'>

                </div>
                <div className='report-btn-view row m-4'>
                    <div className='col-md-4'>

                    </div>
                    <div className='col-md-4 text-center'>
                        <button className='btn btn-success btn-width mr-2' onClick={() => { this.setState({ approvedModal: true }) }}>Approved</button>
                        <button className='btn btn-outline-danger btn-width ml-2' onClick={() => { this.setState({ disApprovedModal: true }) }}>Disapproved</button>
                    </div>
                    <div className='col-md-4'>

                    </div>
                    <Modal
                        centered
                        footer={null}
                        visible={this.state.approvedModal}
                    >
                        <div className="approved-modal d-flex flex-column align-items-center justify-content-around">
                            <h2>Approved?</h2>
                            <div className='row'>
                                <button className='btn btn-success modal-btn mr-2' onClick={this.handleApprovedOk.bind(this)}>Approved</button>
                                <button className='btn btn-outline-danger modal-btn ml-2' onClick={this.handleApprovedCancel.bind(this)}>Cancel</button>
                            </div>
                        </div>
                    </Modal>
                    <Modal
                        centered
                        footer={null}
                        visible={this.state.disApprovedModal}
                    >
                        <div className="disapproved-modal d-flex flex-column align-items-center justify-content-around">
                            <h2>Disapproved?</h2>
                            <textarea class="form-control" placeholder="Leave a comment (Optional)" rows="4"></textarea>
                            <div className='d-flex justify-content-between w-100'>
                                <button className='btn btn-success modal-btn' onClick={this.handleDisApprovedOk.bind(this)}>Disapproved</button>
                                <button className='btn btn-outline-danger modal-btn' onClick={this.handleDisApprovedCancel.bind(this)}>Cancel</button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Report;