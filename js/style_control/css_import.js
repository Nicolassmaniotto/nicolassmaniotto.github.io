function css_import(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    if(windowWidth>=windowHeight){
        var local = "desktop";
    }else{
        var local = "mobile";
    }
    var style = `<link rel="stylesheet" href="css/${local}/conteudo/conteudo_elemento.css"></link>`;
    console.log(style);
    document.head.innerHTML  += style;
}