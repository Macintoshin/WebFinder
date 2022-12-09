function googleSearch()
{
    var text=document.getElementById("searchbar").value;
    var cleanQuery = text.replace(" ","+",text);
    var url='http://www.google.com/search?q='+cleanQuery;

    window.location.href=url;
}
function search_func(){
address=document.getElementById("searchbar").value;
}

function handle(e){
address=document.getElementById("searchbar").value;
if(e.keyCode === 13){
var text=document.getElementById("searchbar").value;
    var cleanQuery = text.replace(" ","+",text);
    var url='http://www.google.com/search?q='+cleanQuery;

    window.location.href=url;
}
return false;
}
var input = document.getElementById("searchbar");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    var text=document.getElementById("searchbar").value;
    var cleanQuery = text.replace(" ","+",text);
    var url='http://www.google.com/search?q='+cleanQuery;

    window.location.href=url;
  }
});
function website()
{
    var url='https://github.com/Macintoshin';

    window.location.href=url;
}
