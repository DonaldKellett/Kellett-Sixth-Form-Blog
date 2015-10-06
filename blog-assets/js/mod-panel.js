/*
  mod-panel.js
  The JS File behind the functionality of the Moderator Panel
  (c) Kellett School Sixth Form. All rights reserved.
  NOTICE: YOU MAY NOT, IN ANY CIRCUMSTANCES, COPY ANY PORTION OF THE CODE USED IN THIS BLOG FOR YOUR OWN USE WITHOUT THE CONSENT OF (c) Kellett School Sixth Form AND ITS ADMINISTRATOR, Donald Leung.  IF YOU ARE FOUND VIOLATING THIS COPYRIGHT NOTICE, YOU WILL BE ASKED TO REMOVE SAID CODE WITHIN 7 DAYS OF NOTICE, AND IF YOU FAIL TO COMPLY, (c) Kellett School Sixth Form AND Donald Leung HAVE THE RIGHT TO BRING THIS ISSUE TO A LOCAL COURT.
*/

if (localStorage.getItem("loggedIn") === "true" && parseInt(localStorage.getItem("status")) >= 4) {
  function reportUser() {
    window.location = "mailto:kellett6formblog@gmail.com?subject=Kellett Sixth Form University Blog - Moderator Panel - Report User&body=Request User Ban%0D%0A%0D%0A-----------------------------------------------------------------------------------------------------------------%0D%0A%0D%0AModerator Name: " + localStorage.getItem("name") + "%0D%0A%0D%0AModerator Username: " + localStorage.getItem("username") + "%0D%0A%0D%0AName of User to be Banned: " + document.getElementById("name").value + "%0D%0A%0D%0ASummary: " + document.getElementById("summary").value + "%0D%0A%0D%0AReport: " + document.getElementById("report").value;
  }
} else {
  alert("You do not have permission to use this tool.  You will be returned to the homepage.");
  window.location = "index.html";
}

/*
  HTML to include:

  <input type="text" id="name" placeholder="Enter name of person to be banned ... " />
  <input type="text" id="summary" placeholder="Summary of Reason" />
  <textarea id="report" placeholder="Detailed Report of Reason This User Should be Banned"></textarea>
*/
