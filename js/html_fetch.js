
function get_html_fetch(url,pos){
    fetch (url,{mode:'no-cors'})
    .then(res => res.text())
    .then(data => document.getElementById(pos).innerHTML = `<p>${data}</p>`);
}
