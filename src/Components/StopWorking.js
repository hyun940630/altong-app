// import React, { Component } from "react";
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   AsyncStorage
// } from "react-native";

// export default class BeforeGotoLeave extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       start: true,
//       isWorking: true,
//       balance: 0,
//       username
//     };
//   }

//   componentDidMount = async () => {
//     // Getting data in the AsyncStorage
//     AsyncStorage.getItem("username").then(value =>
//       this.setState({ username: value })
//     );
//     AsyncStorage.getItem("userworkplace").then(value =>
//       this.setState({ userworkplace: value })
//     );
//     AsyncStorage.getItem("recordSalary").then(value =>
//         this.setState({ recordSalary: value })
//       );
//   };

//   render() {
//     const { name, onPress, balance, timer } = this.props;

//     return (
//       <View style={styles.container}>
//         <View style={styles.content}>
//           <View style={{ flexDirection: "row" }}>
//             <Text style={styles.textBold}>{name}</Text>
//             <Text style={styles.text}>님</Text>
//           </View>
//           <Text style={styles.text}>오늘 출근해서</Text>

//           <View
//             style={{
//               justifyContent: "center",
//               alignItems: "flex-end"
//             }}
//           >
//             <Text style={styles.textBold}>{balance}원</Text>
//             <Text style={styles.text}>벌었어요.</Text>

//             <TouchableOpacity>
//               <Text
//                 style={{
//                   height: 45,
//                   fontSize: 34,
//                   color: "#DDDDDD",
//                   fontFamily: "noto-sans-bold",
//                   marginTop: 50,
//                   marginBottom: 50
//                 }}
//                 // 바로간편출금 스크린으로 연결할 것!!
//                 onPress={() => alert("준비중입니다.")}
//               >
//                 바로간편출금
//               </Text>
//             </TouchableOpacity>

//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "center",
//                 marginBottom: 40
//               }}
//             >
//               <Text style={styles.smallText}>현재 </Text>
//               <Text style={[styles.smallText, { fontWeight: "bold" }]}>
//                 {timer}
//               </Text>
//               <Text style={styles.smallText}> 근무하고 있어요.</Text>
//             </View>
//           </View>
//           {this.props.isWorking ? (
//             <TouchableOpacity
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "center"
//               }}
//               onPress={onPress}
//             >
//               <Text style={styles.gotoLeaveBtn}>퇴근하기</Text>
//             </TouchableOpacity>
//           ) : (
//             <TouchableOpacity
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "center"
//               }}
//               onPress={onPress}
//             >
//               <Text style={styles.gotoLeaveBtn}>퇴근하기</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "#ffffff"
//   },
//   content: {
//     height: 400,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "flex-end",
//     paddingRight: 24
//   },
//   textBold: {
//     color: "#333",
//     fontSize: 34,
//     color: "#3250AE", // identity color
//     fontFamily: "noto-sans-bold"
//   },
//   text: {
//     color: "#333",
//     fontFamily: "noto-sans",
//     fontSize: 34
//   },
//   smallText: {
//     color: "#333",
//     fontFamily: "noto-sans",
//     fontSize: 16
//   },
//   gotoLeaveBtn: {
//     fontSize: 34,
//     padding: 5,
//     color: "#3250AE",
//     fontFamily: "noto-sans-bold"
//   }
// });
