import React from "react";
import NavBar from "./component/NavBar";
import axios from "axios";

//top level component of this web app
class App extends React.Component {
  state = {
    users: [
      {
        email: "renee@123.com",
        name: "renee",
        password: "aaa"
      },
      {
        email: "tom@123.com",
        name: "tom",
        password: "zzz"
      }
    ], //randomly makeup user information
    loginStatus: false, //current user login status
    user: {} //current user information
  };

  handleLogin = (email, password) => {
    // const currentUser = this.state.users.find(
    //   user => user.email === email && user.password === password
    // );
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
    handleLogout =()=>{
      this.setState({ loginStatus: false, user: {} });
    }

  //   if (currentUser) {
  //     this.setState({ loginStatus: true, user: currentUser });
  //   } else {
  //     alert("Check your email address or password");
  //   }
  // };

  render() {
    return (
      <div className="App">
        {/*the navigation panel, user status is passed down */}
        <NavBar
          handleLogin={this.handleLogin}
          loginStatus={this.state.loginStatus}
          handleLogout={this.handleLogout}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;
