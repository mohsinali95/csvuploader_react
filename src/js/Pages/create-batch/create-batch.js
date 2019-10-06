import React from 'react';
import { connect } from 'react-redux';
import Table from './table/table';
import "./create-batch.css"
import SuccessUpload from './success-upload/SuccessUpload';
import ErrorUpload from './error-upload/ErrorUpload';
import { postPromise } from '../../commons/service/services';

class CreateBatch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uploadSuccess: false,
            uploadError: false,
            uploadedFile: {},
            isFileUploaded: false
        }
    }
    changeUploadStatus(value) {
        this.setState({
            uploadSuccess: value,
            uploadError: value,
            isFileUploaded: false
        })
    }
    onChangeFile(event) {
        this.setState({
            uploadedFile: event.target.files[0],
            isFileUploaded: true
        })
    }

    submitCsv() {
        let { uploadedFile } = this.state
        const data = new FormData()
        data.append('file', uploadedFile)
        postPromise('csv/upload',data)
            .then(response => {
                this.setState({ uploadSuccess: true, uploadError: false });
            }).catch(error => {

            })
    }

    render() {
        let { uploadSuccess, uploadError, uploadedFile, isFileUploaded } = this.state

        if (uploadSuccess) {
            return (
                <SuccessUpload onViewClick={this.changeUploadStatus.bind(this)}></SuccessUpload>
            )
        } else if (uploadError) {
            return (
                <ErrorUpload></ErrorUpload>
            )
        } else {
            return (
                <div className="d-flex justify-content-center create-batch"  >

                    <div className="bg-white rounded d-flex flex-row mt-3 mb-3 cardShadow" style={{ width: '95%' }}>
                        <div className="w-50 d-flex flex-column border border-top-0 border-left-0 border-bottom-0 m-3 align-items-center  justify-content-center">
                            <span className="row"><h2>Upload a CSV</h2><i class="fa fa-question-circle p-2" style={{ color: '#d0d0d0', fontSize: 20 }}></i></span>
                            <p>You can also download a sample template <a className="stretched-link text-success" >here</a>.</p>
                            <div className="text-center cursor-pointer upload-btn-wrapper">
                                <button className="btn btn-success btnWidth">
                                    <i className="fa fa-cloud-upload mr-2" style={{ fontSize: 25 }} ></i>SELECT FROM COMPUTER
                                    </button>
                                <input type="file" onChange={this.onChangeFile.bind(this)} name="file"></input>
                            </div>
                            {
                                isFileUploaded ?
                                    <button onClick={this.submitCsv.bind(this)} className="btn btn-outline-success btnWidth mt-3">
                                        SUBMIT
                                    </button>
                                    :
                                    null
                            }

                        </div>
                        <div className="w-50 d-flex flex-column justify-content-around  p-2">
                            <h3>Instructions</h3>
                            <p className="lead">
                                1) Fields Marked * are mandatory in all situations
                                </p>
                            <p className="lead">
                                2) If CNIC is selected in Transfer to, additional mandatory fields are: CNIC
                                </p>
                            <p className="lead">
                                3) If Bank is selected in Transfer to, additional mandatory fields are: Bank Name & IBAN
                                </p>
                            <Table></Table>
                        </div>
                    </div>

                </div>
            );
        }
    }
}
const mapStateToProps = (state) => {
    return {
        test: state.root.testText,
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         isGetItems: (obj) => {
//             dispatch(GetItems(obj))
//         }
//     }
// }
export default connect(mapStateToProps, null)(CreateBatch);