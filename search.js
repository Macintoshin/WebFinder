function googleSearch()
{
    var text=document.getElementById("Query").value;
    var cleanQuery = text.replace(" ","+",text);
    var url='http://www.google.com/search?q='+cleanQuery;

    window.location.href=url;
}
function wibySearch()
{
    var text=document.getElementById("Query").value;
    var cleanQuery = text.replace(" ","+",text);
    var url='https://wiby.me/?q='+cleanQuery;

    window.location.href=url;
}
function classicSearch()
{
    var url='classicindex.html';

    window.location.href=url;
}
function modernSearch()
{
    var url='index.html';

    window.location.href=url;
}
function search_func(){
address=document.getElementById("Query").value;
}
function changeBackground() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

// using inline variable
      document.getElementById("logo").style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
      document.getElementById("logo").style.border = "solid 2px #636498"
      document.getElementById("mac").style.padding = "1vmin 1vmin 1vmin 1vmin"

      document.getElementById("name").style.padding = "1vmin 1vmin 1vmin 1vmin"
      

    // using local variable
// uncomment to see how it works

      // let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    //   document.body.style.background = bgColor;

    }
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");}

function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[0];
    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'style.css') {
        theme.setAttribute('href', 'styledark.css');
    } else {
        theme.setAttribute('href', 'style.css');
    }
    }