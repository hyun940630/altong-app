import React from "react";
import { AsyncStorage } from "react-native";
import HomeTab from "../Components/AppTabNavigator/HomeTab";
import { connect } from "react-redux";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersalary: 0
    };
  }

  componentDidMount = () => {
    // Getting data in the AsyncStorage
    AsyncStorage.getItem("usersalary").then(value =>
      this.setState({ usersalary: value })
    );
  };

  render() {
    return (
      <HomeTab name={this.props.formData.name} wage={this.state.usersalary} />
    );
  }
}

const mapStateToProps = state => {
  return {
    formData: state.formData
  };
};

export default connect(
  mapStateToProps,
  null
)(HomeContainer);
