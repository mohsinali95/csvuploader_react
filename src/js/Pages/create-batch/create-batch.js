import React from 'react';
import { connect } from 'react-redux';

class CreateBatch extends React.Component {
    render() {
        return (
            <div>
                create batchs
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