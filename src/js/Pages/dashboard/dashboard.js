import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                asdasd
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