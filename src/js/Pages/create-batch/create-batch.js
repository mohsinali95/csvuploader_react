import React from 'react';
import { connect } from 'react-redux';

class CreateBatch extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-around align-items-center" style={{ height: "100vh"}} >
                <div className="bg-white rounded d-flex flex-row align-items-center" style={{ height: "60%", width: '95%'}}>
                    <div className="w-50">
asdasdasd
                    </div>
                    <div className="w-50  d-flex flex-column  align-items-center  justify-content-between">
                        <div className="media-body d-flex flex-column  justify-content-around">
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
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Transfer To*</th>
                                <th scope="col">Mobile Wallet</th>
                                <th scope="col">Category*</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>
                                <tr>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>
                                <tr>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
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