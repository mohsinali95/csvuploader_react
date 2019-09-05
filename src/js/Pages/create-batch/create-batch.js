import React from 'react';
import { connect } from 'react-redux';
import Table from './table/table';
import "./create-batch.css"

class CreateBatch extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center" style={{ height: "100vh" }} >
                <div className="bg-white rounded d-flex flex-row mt-3 mb-3 cardShadow" style={{ width: '95%' }}>
                    <div className="w-50 d-flex flex-column border border-top-0 border-left-0 border-bottom-0 m-3 align-items-center  justify-content-center">
                        <span className="row"><h2>Upload a CSV</h2><i class="fa fa-question-circle p-2" style={{color: '#d0d0d0',fontSize: 20}}></i></span>
                        <p>You can also download a sample template <a className="stretched-link text-success" >here</a>.</p>
                        <button className="btn btn-success btnWidth">
                            <i className="fa fa-cloud-upload mr-2" style={{ fontSize: 25 }} ></i>SELECT FROM COMPUTER
                        </button>
                        <button className="btn btn-outline-success btnWidth mt-3">
                            SUBMIT
                        </button>
                    </div>
                    <div className="w-50 d-flex flex-column justify-content-around  p-2">
                        <h3>Instructions</h3>
                        <h5>
                            1) Fields Marked * are mandatory in all situations
                            </h5>
                        <h5>
                            2) If CNIC is selected in Transfer to, additional mandatory fields are: CNIC
                            </h5>
                        <h5>
                            2) If Bank is selected in Transfer to, additional mandatory fields are: Bank Name & IBAN
                            </h5>
                        <Table></Table>
                    </div>
                </div>
            </div>
        );
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