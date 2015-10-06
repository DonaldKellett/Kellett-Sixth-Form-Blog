/*
  post.js
  The JS File responsible for Post Requesting on the Blog.
  (c) Kellett School Sixth Form. All rights reserved.
  NOTICE: YOU MAY NOT, IN ANY CIRCUMSTANCES, COPY ANY PORTION OF THE CODE USED IN THIS BLOG FOR YOUR OWN USE WITHOUT THE CONSENT OF (c) Kellett School Sixth Form AND ITS ADMINISTRATOR, Donald Leung.  IF YOU ARE FOUND VIOLATING THIS COPYRIGHT NOTICE, YOU WILL BE ASKED TO REMOVE SAID CODE WITHIN 7 DAYS OF NOTICE, AND IF YOU FAIL TO COMPLY, (c) Kellett School Sixth Form AND Donald Leung HAVE THE RIGHT TO BRING THIS ISSUE TO A LOCAL COURT.
*/

if (localStorage.getItem("loggedIn") === "true" && parseInt(localStorage.getItem("status")) >= 3) {
  function post() {
    window.location = "mailto:kellett6formblog@gmail.com?subject=Kellett Sixth Form University Blog - Post an Article&body=Post an Article%0D%0A%0D%0A-----------------------------------------------------------------------------------------------------%0D%0A%0D%0AName: " + localStorage.getItem("name") + "%0D%0A%0D%0AUsername: " + localStorage.getItem("username") + "%0D%0A%0D%0ATitle of Blog Post: " + document.getElementById("articletitle").value + "%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0AContent of Blog Post: " + "%0D%0A%0D%0A" + document.getElementById("article").value;
  }
} else {
  alert("You are not authorised to use this service.  You will be returned to the homepage.");
  window.location = "index.html";
}

/*
  HTML to include:
  
  <input type="text" id="articletitle" placeholder="Enter the title of your article here ... " />
  <textarea id="article" placeholder="Type up your blog post here ... "></textarea>
*/
