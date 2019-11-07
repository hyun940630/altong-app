import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as altongActions } from "../../reducers/reducer";
import InsertUserInfo from "./presenter"; //presenter 안에 있는 InsertUserInfo 클래스를 불러온다.

// state를 반환하는 함수를 등록
function mapStateToProps(state) {
  return {
    ...state
  };
}

const mapDispatchToProps = dispatch => {
  return {
    insertUsername: bindActionCreators(altongActions.insertUsername, dispatch),
    insertUserworkplace: bindActionCreators(
      altongActions.insertUserworkplace,
      dispatch
    )
  };
};

console.log(this.state, ": console.log(this.state)"); // TODO: 삭제해라~~!!

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsertUserInfo);
