/*
  blog.js
  The JS file that powers the main Blog page
  (c) Kellett School Sixth Form. All rights reserved.
  NOTICE: YOU MAY NOT, IN ANY CIRCUMSTANCES, COPY ANY PORTION OF THE CODE USED IN THIS BLOG FOR YOUR OWN USE WITHOUT THE CONSENT OF (c) Kellett School Sixth Form AND ITS ADMINISTRATOR, Donald Leung.  IF YOU ARE FOUND VIOLATING THIS COPYRIGHT NOTICE, YOU WILL BE ASKED TO REMOVE SAID CODE WITHIN 7 DAYS OF NOTICE, AND IF YOU FAIL TO COMPLY, (c) Kellett School Sixth Form AND Donald Leung HAVE THE RIGHT TO BRING THIS ISSUE TO A LOCAL COURT.
*/

// Variables already declared include:
// 1. loggedIn
// 2. status

if (loggedIn === "true") {
  document.getElementById("public-message").style.display = "none";
  document.getElementById("blog").style.display = "block";
} else {
  document.getElementById("public-message").style.display = "block";
  document.getElementById("blog").style.display = "none";
}

/*
  HTML to include:
  <span id="public-message"></span>
  <span id="blog"></span>
*/

var loop, loop2;

for (loop = 0; loop < database.length; loop++) {
  for (loop2 = 0; loop2 < document.getElementsByClassName(database[loop].username).length; loop2++) {
    document.getElementsByClassName(database[loop].username)[loop2].innerHTML = "<img src='" + database[loop].profilePic + "' style='width: 30%; height: 30%;' /><p><strong><span style='font-size: 24px;'>" + database[loop].name + "</span></strong></p><p>" + rank[database[loop].status] + "</p>";
  }
}
