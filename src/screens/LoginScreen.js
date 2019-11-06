// import React, { Component } from "react";
// import { StyleSheet, View, TouchableOpacity, Modal } from "react-native";
// import { Container } from "native-base";
// import InsertInfo_1 from "./InsertInfoScreen_1";
// import InsertInfo_2 from "./InsertInfoScreen_2";

// // import { connect } from "react-redux";
// // import { bindActionCreators } from "redux";
// // import { actionCreators as altongActions } from "../reducer";

// class LoginScreen extends Component {
//   static navigationOptions = {
//     header: null
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       pressing: false
//     };
//   }

//   handleCreate = data => {
//     console.log(data);
//   };

//   render() {
//     const { navigate } = this.props.navigation;
//     const { pressing, onPress } = this.props;

//     return (
//       <Container>
//         {!pressing ? <InsertInfo_1 onPress={this.handleCreate} /> : null}
//         {pressing ? <InsertInfo_2 onPress={() => navigate("Main")} /> : null}
//       </Container>
//     );
//   }
// }

// // function mapStateToProps(state) {
// //   const { pressing } = state;
// //   return {
// //     pressing
// //   };
// // }

// // function mapDispatchToProps(dispatch) {
// //   return {
// //     setPressing: bindActionCreators(altongActions.setPressing, dispatch)
// //   };
// // }

// // export default connect(
// //   mapStateToProps,
// //   mapDispatchToProps
// // )(LoginScreen);

// export default LoginScreen;
