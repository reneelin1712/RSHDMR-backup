import React from "react";
import NavBar from "./component/NavBar";
import axios from "axios";

//top level component of this web app
class App extends React.Component {
  state = {
    users: [], //fetched user data will be updated here
    loginStatus: false, //current user login status
    user: {} //current user information
  };

  //send login request to server
  handleLogin = (email, password) => {
    const data = {
      email: email,
      password: password
    }

    axios.post('http://ec2-52-193-188-87.ap-northeast-1.compute.amazonaws.com/login',data)
      .then(response =>  {
        console.log(response.data)
        if (response.data) {
          this.setState({ loginStatus: true, user: {name:response.data} });
        } else {
          alert("Check your email address or password");
        }
      })
      
    }

    //log out
    handleLogout =()=>{
      this.setState({ loginStatus: false, user: {} });
    }

  ifSignup=(username)=>{
    this.setState({ loginStatus: true, user: {name:username} })
    console.log(this.state.user.name)
  }

  render() {
    return (
      <div className="App">
        {/*the navigation panel, user status is passed down */}
        <NavBar
          handleLogin={this.handleLogin}
          loginStatus={this.state.loginStatus}
          handleLogout={this.handleLogout}
          ifSignup={this.ifSignup}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;
