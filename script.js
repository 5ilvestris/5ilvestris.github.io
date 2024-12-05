function explodb()
{
var searchadress = 'https://www.google.com/search?q=inurl:"exploit-db.com" %26 intext:"';
var syl = document.getElementById("word").value;
if (syl=="") {window.location.href = "https://exploit-db.com";
} else {
var adress = searchadress+ syl+ '"';
window.location.href = adress;
}
}
function rapid7()
{
var searchadress = 'https://www.google.com/search?q=inurl:"rapid7.com" %26 intext:"';
var syl = document.getElementById("word").value;
if (syl=="") {window.location.href = "https://rapid7.com";
} else {
var adress = searchadress+ syl+ '"';
window.location.href = adress;
}
}
function secmatter()
{
var searchadress = 'https://www.google.com/search?q=inurl:"infosecmatter.com" %26 intext:"';
var syl = document.getElementById("word").value;
if (syl=="") {window.location.href = "https://infosecmatter.com";
} else {
var adress = searchadress+ syl+ '"';
window.location.href = adress;
}
}
function keydown(e) 
{
e = e || window.event;
var tus = e.keyCode || e.which;
if (tus == 13) 
{
return;
}
}