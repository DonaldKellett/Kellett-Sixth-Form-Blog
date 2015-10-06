/*
  profile.js
  The JS file responsible for displaying the user's profile in the Profile Page
  (c) Kellett School Sixth Form. All rights reserved.
  NOTICE: YOU MAY NOT, IN ANY CIRCUMSTANCES, COPY ANY PORTION OF THE CODE USED IN THIS BLOG FOR YOUR OWN USE WITHOUT THE CONSENT OF (c) Kellett School Sixth Form AND ITS ADMINISTRATOR, Donald Leung.  IF YOU ARE FOUND VIOLATING THIS COPYRIGHT NOTICE, YOU WILL BE ASKED TO REMOVE SAID CODE WITHIN 7 DAYS OF NOTICE, AND IF YOU FAIL TO COMPLY, (c) Kellett School Sixth Form AND Donald Leung HAVE THE RIGHT TO BRING THIS ISSUE TO A LOCAL COURT.
*/

if (localStorage.getItem("loggedIn") === "true") {
  document.getElementById("profile").innerHTML = "<p><img src='" + localStorage.getItem("profilePic") + "' style='width: 100%; height: 100%;' /></p>" + "<p><strong style='font-size: 24px;'>" + localStorage.getItem("name") + "</strong></p>" + "<p>" + rank[parseInt(localStorage.getItem("status"))] + "</p>";
} else {
  alert("You are not logged in.  Please login to view your profile.");
  window.location = "index.html";
}

/*
  HTML to include:
  <span id="profile"></span>
*/
