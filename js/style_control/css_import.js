function css_import(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    if(windowWidth>=windowHeight){
        var local = "desktop";
    }else{
        var local = "mobile";
    }
    var style = `@import "css/${local}/conteudo/conteudo_elemento.css"`;
    console.log(style);
    document.getElementById('STYLE_IMPORT').innerHTML  = style;
}