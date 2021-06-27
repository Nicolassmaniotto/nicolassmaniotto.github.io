function json_repo(data,pos){
    //percorre ate o item comic do json

    //limpa o o component a ser prenchido
    document.getElementById(pos).innerHTML = '';

    let ptbr = Object;
    ptbr.linkName = "Ir ao Github";
    ptbr.description = "Descrição:";
    ptbr.readmeButton= "Readme:";
    //percorre o json
    document.getElementById(pos).innerHTML = `<div class="div_repo">`;
    data.forEach(element => {
        //constroe os items encontrados
        document.getElementById(pos).innerHTML +=`
        <center>
        
        <div id='${element.id}'>
        <a href='${element.html_url}'><h1>${element.name}</h1></a>
        <h2>${ptbr.description}</h2>
        <ul><li><p>${element.description}</p></li></ul>
        <button onclick="chamada_readme('${element.name}','${element.id}')"> ${ptbr.readmeButton} </button>
        </div>
        <hr>
        </center>
        `;
        console.log(element);
                                                    
    });
    document.getElementById(pos).innerHTML += `</div>`;
}