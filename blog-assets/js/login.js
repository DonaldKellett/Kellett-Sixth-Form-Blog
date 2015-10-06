/*
  login.js
  The JS file responsible for account logins
  (c) Kellett School Sixth Form. All rights reserved.
  NOTICE: YOU MAY NOT, IN ANY CIRCUMSTANCES, COPY ANY PORTION OF THE CODE USED IN THIS BLOG FOR YOUR OWN USE WITHOUT THE CONSENT OF (c) Kellett School Sixth Form AND ITS ADMINISTRATOR, Donald Leung.  IF YOU ARE FOUND VIOLATING THIS COPYRIGHT NOTICE, YOU WILL BE ASKED TO REMOVE SAID CODE WITHIN 7 DAYS OF NOTICE, AND IF YOU FAIL TO COMPLY, (c) Kellett School Sixth Form AND Donald Leung HAVE THE RIGHT TO BRING THIS ISSUE TO A LOCAL COURT.
*/

// Variables already declared:
// 1. loggedIn
// 2. status
// 3. database

if (loggedIn === "true") {
  alert("You are already logged in to your account.");
  window.location = "index.html";
}

function login() {
  var loop;
  for (loop = 0; loop < database.length; loop++) {
    // If a username and password matches, log in as that user
    if (document.getElementById("username").value === database[loop].username && document.getElementById("password").value === database[loop].password) {
      document.getElementById("invalid-login").style.display = "none";
      localStorage.setItem("username", database[loop].username);
      localStorage.setItem("password", database[loop].password);
      localStorage.setItem("status", database[loop].status);
      localStorage.setItem("name", database[loop].name);
      localStorage.setItem("profilePic", database[loop].profilePic);
      localStorage.setItem("loggedIn", true); // User is logged in
      // test();
      window.location = "index.html";
    } else {
      document.getElementById("invalid-login").style.display = "inline";
    }
  }
}

function test() {
  alert("You are now logged in with:\n\nUsername: " + localStorage.getItem("username") + "\n\nPassword: " + localStorage.getItem("password") + "\n\nRank: " + rank[parseInt(localStorage.getItem("status"))] + "\n\nName: " + localStorage.getItem("name") + "\n\nLogged In: " + localStorage.getItem("loggedIn"));
}

/*
  HTML to include:

  <input type="text" id="username" placeholder="Username" />
  <input type="password" id="password" placeholder="Password" />
  <span id="invalid-login">Sorry, the username or password you have entered is incorrect.  Please try again.</span>
*/
