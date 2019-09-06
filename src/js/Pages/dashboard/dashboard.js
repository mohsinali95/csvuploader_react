import React from 'react';
import { connect } from 'react-redux';
import Card from './card/card';
import Datatable from './data-table/data-table';
import "./dashboard.css"

class Dashboard extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column justify-content-around align-items-center dashboard" style={{ height: "100vh" }} >
                <div className='cardDiv'>
                    <div className="card-deck">
                        <Card title={"Completed"} number={"2529"}></Card>
                        <Card title={"Auditor Review"} number={"15"}></Card>
                        <Card title={"Authority Review"} number={"02"}></Card>
                        <Card title={"Disapproved"} number={"50"}></Card>
                    </div>
                </div>
                <div className="datatableShadow d-flex flex-column pl-3 pr-3 justify-content-center">
                    <Datatable></Datatable>
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
export default connect(mapStateToProps, null)(Dashboard);