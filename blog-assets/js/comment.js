/*
  comment.js
  The JS file responsible for handling commenting requests on the 'comment.html' page
  (c) Kellett School Sixth Form. All rights reserved.
  NOTICE: YOU MAY NOT, IN ANY CIRCUMSTANCES, COPY ANY PORTION OF THE CODE USED IN THIS BLOG FOR YOUR OWN USE WITHOUT THE CONSENT OF (c) Kellett School Sixth Form AND ITS ADMINISTRATOR, Donald Leung.  IF YOU ARE FOUND VIOLATING THIS COPYRIGHT NOTICE, YOU WILL BE ASKED TO REMOVE SAID CODE WITHIN 7 DAYS OF NOTICE, AND IF YOU FAIL TO COMPLY, (c) Kellett School Sixth Form AND Donald Leung HAVE THE RIGHT TO BRING THIS ISSUE TO A LOCAL COURT.
*/

if (localStorage.getItem("loggedIn") === "true" && parseInt(localStorage.getItem("status")) >= 2) {
  function comment() {
    window.location = "mailto:kellett6formblog@gmail.com?subject=Kellett Sixth Form University Blog - Commenting Request&body=Commenting Request%0A%0D%0A%0D------------------------------------------------------------------------------------------------------%0A%0D%0A%0DName: " + localStorage.getItem("name") + "%0A%0D%0A%0DUsername: " + localStorage.getItem("username") + "%0A%0D%0A%0DTitle of Post to be Commented On: " + document.getElementById("posttitle").value + "%0A%0D%0A%0D%0A%0D%0A%0DContent of Comment:%0A%0D%0A%0D" + document.getElementById("comment").value;
  }
} else {
  alert("You are not authorised to use this service.  You will be returned to the homepage.");
  window.location = "index.html";
}

/*
  HTML to include:
  <input type="text" id="posttitle" placeholder="Enter the title of the post you want to comment on ... " />
  <textarea id="comment" placeholder="Type in the comment you want to add here.  HTML tags are supported."></textarea>
*/
