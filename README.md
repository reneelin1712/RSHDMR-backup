

# Client Side:
The front end is built using React, a JavaScript library. 

1. File structure: 
*The index.html is under public folder.
*All the JS and CSS code is in src folder.
React allows developers to divide the web pages into several reusable components. The root component is App.js, the others are all in the  src/component folder.
*All the dependencies are listed in Package.json file
*Highlight dependencies:
###Material-UI: an React base UI framework, similar to BootStrap
###Axios: a javascript library used to make HTTP request

2. Components Brief:
* NavBar.js
As this is a single page app, there is no links to different pages. This NavBar includes top navigation tabs and below corresponding tab panels. There are "Home", "Analysis", "Help" and "About" panels.

*Login.js
A dialog will pop out if user click the login button on the right corner of the page. Put in correct Email and password to login. If loged in, the user name will render on the right corner.

*Upload.js
CSV file can be upload here, user can click or drag and drop the file. User click the upload button will trigger event: sending file to server, and page loading status is set to true, so the loading/waiting component will render telling user waiting for the result.
After data is sent back from server, the data will be save to the state of this component and pass down to Report.js

*Report.js
The data received from server will be rendered in this component and shows on the right of the web page.

*Loading.js
A simple roating circle, this component will be shown when waiting for the result from server

*Paper.js
This component will be used on "Home",  "Help" and "About" panels  giving detail introduction and explanation to users

*ChangeParam.js
A expensionable component, if user want to change some parameter of the algorithm, they can click and open the form section

*DetailParam.js 
The form section itself, parameters are kept here, when user click "change and upload" the file and the parameters will be sent to server together.

3. Comment Format
 // -- A JS comment
 {/* */} -- A JSX comment

#Server Side
Our client write his programme which is the core of the server side analysise. 
We implement the "rshdmr.py" to set up flask server

1. File structure: 
*rshdmr.py
the API endpoits/routes are create here, like upload, login, signup.

*templates and static folder
these two files are generated from client side, since flask can not hold our client side codes directly. "npm run build" will generate these files for server to host

*programme from our client
All the rest are from our client, we only create three variables in "hdmr.py", [data,data1,data2] since those results are devided into three parts

*Highlight packages
###json, allow to transform data to json format
###send_file, allow to handle files
###pymongo, allow to connect MongoDB

