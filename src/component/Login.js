import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

//Login function, a dialog will pop out if click
export default function Login({ handleLogin, loginStatus, user }) {
  const [open, setOpen] = React.useState(false);

  //receive user Email and Password
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseLogin() {
    setAnchorEl(null);
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function login() {
    setOpen(false);
    handleLogin(userEmail, userPassword);
    setUserEmail("");
    setUserPassword("");
  }

  return (
    <div>
      {/*check login status, if not render "Login" button
         if yes render the name of the user */}
      {loginStatus ? (
        <>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            variant="outlined"
            style={{ color: "white", marginTop: 5 }}
            onClick={handleClick}
          >
            {user.name}
          </Button>

          {/*after login, user can check profile, account and log out*/}
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseLogin}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <Button
            variant="outlined"
            style={{ color: "white", marginTop: 5 }}
            onClick={handleClickOpen}
          >
            login
          </Button>

         {/*pop out dialog asking for login information(Email and password) */}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                value={userEmail}
                onChange={({ target }) => setUserEmail(target.value)}
              />

              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                value={userPassword}
                onChange={({ target }) => setUserPassword(target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={login} color="primary">
                Login
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </div>
  );
}
