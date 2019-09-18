import React from "react";
import NavBar from "./component/NavBar";

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
    const currentUser = this.state.users.find(
      user => user.email === email && user.password === password
    );
    if (currentUser) {
      this.setState({ loginStatus: true, user: currentUser });
    } else {
      alert("Check your email address or password");
    }
  };

  render() {
    return (
      <div className="App">
        {/*the navigation panel, user status is passed down */}
        <NavBar
          handleLogin={this.handleLogin}
          loginStatus={this.state.loginStatus}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;
