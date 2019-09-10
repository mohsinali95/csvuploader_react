import React from 'react';
import { connect } from 'react-redux';
import Card from './card/card';
import Datatable from './data-table/data-table';
import "./dashboard.css"

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard" >
                <div className='cardDiv m-4'>
                    <div className="card-deck">
                        <Card title={"Completed"} number={"2529"}></Card>
                        <Card title={"Auditor Review"} number={"15"}></Card>
                        <Card title={"Authority Review"} number={"02"}></Card>
                        <Card title={"Disapproved"} number={"50"}></Card>
                    </div>
                </div>
                <div className=" m-2 datatableShadow ">
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