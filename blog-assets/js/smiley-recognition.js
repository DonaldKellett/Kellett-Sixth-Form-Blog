/*
  smiley-recognition.js
  Recognising smiley face characters (:D, :), ;), :p, etc.) and replacing them with smiley images
  (c) Kellett School Sixth Form. All rights reserved.
  NOTICE: YOU MAY NOT, IN ANY CIRCUMSTANCES, COPY ANY PORTION OF THE CODE USED IN THIS BLOG FOR YOUR OWN USE WITHOUT THE CONSENT OF (c) Kellett School Sixth Form AND ITS ADMINISTRATOR, Donald Leung.  IF YOU ARE FOUND VIOLATING THIS COPYRIGHT NOTICE, YOU WILL BE ASKED TO REMOVE SAID CODE WITHIN 7 DAYS OF NOTICE, AND IF YOU FAIL TO COMPLY, (c) Kellett School Sixth Form AND Donald Leung HAVE THE RIGHT TO BRING THIS ISSUE TO A LOCAL COURT.
*/

var string = document.getElementById("html").innerHTML;
var array = string.split("");
var i;
for (i = 0; i < array.length - 1; i++) {
  if (array[i] === ":" && array[i + 1] === ")") {
    // :)
    array[i] = "<img src='blog-images/smileys/colon-endbracket.jpg' style='width: 16px; height: 16px;' />";
    array[i + 1] = "";
  } else if (array[i] === ":" && array[i + 1] === "D") {
    // :D
    array[i] = "<img src='blog-images/smileys/colon-D.png' style='width: 16px; height: 16px;' />";
    array[i + 1] = "";
  } else if (array[i] === ":" && array[i + 1] === "p") {
    // :p
    array[i] = "<img src='blog-images/smileys/colon-p.png' style='width: 16px; height: 16px;' />";
    array[i + 1] = "";
  } else if (array[i] === ";" && array[i + 1] === ")") {
    // ;)
    array[i] = "<img src='blog-images/smileys/semicolon-endbracket.png' style='width: 16px; height: 16px;' />";
    array[i + 1] = "";
  } else if (array[i] === ":" && array[i + 1] === "(") {
    // :(
    array[i] = "<img src='blog-images/smileys/colon-startbracket.png' style='width: 16px; height: 16px;' />";
    array[i + 1] = "";
  } else if (array[i] === ":" && array[i + 1] === "o") {
    // :o
    array[i] = "<img src='blog-images/smileys/colon-o.png' style='width: 16px; height: 16px;' />";
    array[i + 1] = "";
  } else {
    void(0);
  }
}
var newString;

for (i = 0; i < array.length; i++) {
  newString += array[i];
}

document.getElementById("html").innerHTML = newString;

/* Fixing Disrupted CSS */

for (i = 0; i < document.getElementsByClassName("blogpost").length; i++) {
  document.getElementsByClassName("blogpost")[i].style.backgroundColor = "rgb(5, 34, 35)";
  document.getElementsByClassName("blogpost")[i].style.padding = "5px";
  document.getElementsByClassName("blogpost")[i].style.borderRadius = "20px";
  document.getElementsByClassName("blogpost")[i].style.border = "1px solid #232";
}

for (i = 0; i < document.getElementsByClassName("closed").length; i++) {
  document.getElementsByClassName("closed")[i].style.backgroundColor = "#112";
  document.getElementsByClassName("closed")[i].style.border = "1px solid #113";
}
