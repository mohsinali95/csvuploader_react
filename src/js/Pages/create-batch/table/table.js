import React, { Component } from 'react';
import "./table.css"
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="border border-light tableBorder">


                <table className="table">
                    <tr className="bg-light" >
                        <td colSpan="3" className="text-center">
                            Below Columns should only contains following items in their field
                        </td>
                    </tr>

                    <tr className="bg-light">
                        <th scope="col">Transfer To*</th>
                        <th scope="col">Mobile Wallet</th>
                        <th scope="col">Category*</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>Bank</td>
                            <td>Jazz Wallet</td>
                            <td>Vendor</td>
                        </tr>
                        <tr>
                            <td>CNIN</td>
                            <td>Sim Sim Wallet</td>
                            <td>Partner</td>
                        </tr>
                        <tr>
                            <td>Bank</td>
                            <td>Fone Pay</td>
                            <td>Customer</td>
                        </tr>
                        <tr>
                            <td>Mobile Wallet</td>
                            <td>Easy Paisa</td>
                            <td>Other</td>
                        </tr>
                        <tr>
                            <td>Bank</td>
                            <td>UBL Omni</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>




            </div>

        );
    }
}

export default Table;