"use strict";
/*
  global.js
  Global JS file
  To be used in every page
  (c) Kellett School Sixth Form. All rights reserved.
  NOTICE: YOU MAY NOT, IN ANY CIRCUMSTANCES, COPY ANY PORTION OF THE CODE USED IN THIS BLOG FOR YOUR OWN USE WITHOUT THE CONSENT OF (c) Kellett School Sixth Form AND ITS ADMINISTRATOR, Donald Leung.  IF YOU ARE FOUND VIOLATING THIS COPYRIGHT NOTICE, YOU WILL BE ASKED TO REMOVE SAID CODE WITHIN 7 DAYS OF NOTICE, AND IF YOU FAIL TO COMPLY, (c) Kellett School Sixth Form AND Donald Leung HAVE THE RIGHT TO BRING THIS ISSUE TO A LOCAL COURT.
*/

// Global Assets

// Rank (@type [Array])
// 8 "Ranks":
// 0 - Banned (viewing rights only)
// 1 - Visitor (viewing rights only)
// 2 - Commenter (viewing rights and commenting rights)
// 3 - Blogger (viewing rights, commenting rights and posting rights)
// 4 - Moderator (viewing rights, commenting rights, posting rights PLUS Moderator Panel)
// 5 - Supermoderator (viewing rights, commenting rights, posting rights PLUS Moderator Panel)
// 6 - Developer (viewing rights, commenting rights, posting rights PLUS Moderator Panel and right to edit website content after consent by Administrator)
// 7 - Administrator (viewing rights, commenting rights, posting rights PLUS Moderator Panel and right to edit website content freely at any time)
// NOTE: ALL RANKS CAN VIEW THEIR OWN USER PROFILE
var rank = ["<span style='color: red;'>Banned</span>", "Visitor", "Commenter", "Blogger", "Moderator", "Supermoderator", "<strong>Developer</strong>", "<strong>Administrator</strong>"];

// Navigation Panel (Global Feature)
var loggedIn = localStorage.getItem("loggedIn");
var status = localStorage.getItem("status");
if (loggedIn === "true") {
  document.getElementById("loguser").href = "logout.html";
  document.getElementById("loguser").innerHTML = "Logout";
  switch (status) {
    case "0":
    case "1":
    document.getElementById("otherfuncs").innerHTML = "<li><a href='index.html'>Home</a></li>" + "<li><a href='profile.html'>View Profile</a></li>";
    break;
    case "2":
    document.getElementById("otherfuncs").innerHTML = "<li><a href='index.html'>Home</a></li>" + "<li><a href='profile.html'>View Profile</a></li>" + "<li><a href='comment.html'>Request Comment</a></li>";
    break;
    case "3":
    document.getElementById("otherfuncs").innerHTML = "<li><a href='index.html'>Home</a></li>" + "<li><a href='profile.html'>View Profile</a></li>" + "<li><a href='comment.html'>Request Comment</a></li>" + "<li><a href='post.html'>Request Post</a></li>";
    break;
    case "4":
    case "5":
    case "6":
    case "7":
    document.getElementById("otherfuncs").innerHTML = "<li><a href='index.html'>Home</a></li>" + "<li><a href='profile.html'>View Profile</a></li>" + "<li><a href='comment.html'>Request Comment</a></li>" + "<li><a href='post.html'>Request Post</a></li>" + "<li><a href='mod-panel.html'>Moderator Panel</a></li>";
    break;
    default:
    document.getElementById("otherfuncs").innerHTML = "<li><a href='index.html'>Home</a></li>";
  }
} else {
  document.getElementById("loguser").href = "login.html";
  document.getElementById("loguser").innerHTML = "Login";
  document.getElementById("otherfuncs").innerHTML = "<li><a href='index.html'>Home</a></li>";
}

// User Database (@type [Array])

var database = [
  {
    username: "dleung",
    password: "dl6900",
    status: 7, // Administrator of the Blog
    name: "Donald",
    profilePic: "blog-images/admin.png"
  },
  {
    username: "tmartin",
    password: "tm1200",
    status: 5,
    name: "Ms. Martin",
    profilePic: "blog-images/no-pic.jpg"
  },
  {
    username: "jhills",
    password: "jh2100",
    status: 5,
    name: "Ms. Hills",
    profilePic: "blog-images/no-pic.jpg"
  },
  {
    username: "lcheng",
    password: "lc1690",
    status: 1,
    name: "Lincoln",
    profilePic: "blog-images/no-pic.jpg"
  },
  // Student Account Details - Change Status when necessary
  {
    username: "jbell",
    password: "jb0010",
    status: 1, // Unconfirmed Status
    name: "Jack",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "csching",
    password: "cs0020",
    status: 1, // Unconfirmed Status
    name: "Siu Ching",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "cfisher",
    password: "cf0030",
    status: 1, // Unconfirmed Status
    name: "Catherine",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "mgkirchen",
    password: "mg0040",
    status: 1, // Unconfirmed Status
    name: "Max",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "hginns",
    password: "hg0050",
    status: 1, // Unconfirmed Status
    name: "Harry",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "jgordon",
    password: "jg0060",
    status: 1, // Unconfirmed Status
    name: "Joshua",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "ahasan",
    password: "ah0070",
    status: 1, // Unconfirmed Status
    name: "Ayesha",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "pawinj",
    password: "pj0080",
    status: 1, // Unconfirmed Status
    name: "Pawin",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "cmaddren",
    password: "cm0090",
    status: 1, // Unconfirmed Status
    name: "Cathy",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "smansi",
    password: "sm0100",
    status: 1, // Unconfirmed Status
    name: "Simone",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "smascia",
    password: "sm0110",
    status: 1, // Unconfirmed Status
    name: "Sofia-Marie",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "jshepherd",
    password: "js0130",
    status: 1, // Unconfirmed Status
    name: "Jakob",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "aturner",
    password: "at0140",
    status: 1, // Unconfirmed Status
    name: "Anisha",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "cweir",
    password: "cw0150",
    status: 1, // Unconfirmed Status
    name: "Christina",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  {
    username: "twu",
    password: "tw0160",
    status: 1, // Unconfirmed Status
    name: "Tiffany",
    profilePic: "blog-images/no-pic.jpg" // No Profile Picture
  },
  // End of Student Account Details
  // Employed Moderators and Developers
  {
    username: "tlaxton",
    password: "tl7070",
    status: 4,
    name: "Mr. Laxton",
    profilePic: "blog-images/no-pic.jpg"
  }
];

/*
  HTML to include:

  <a href="#" id="loguser">Log User</a>
  <span id="otherfuncs"></span>
*/
