function carrega_XMLHttpRequest(url,pos){
    document.getElementById(pos).innerHTML = "";
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            document.getElementById(pos).innerHTML = "Carregando" ;
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById(pos).innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", url, false);
        xmlhttp.send();
    

}