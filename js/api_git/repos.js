function json_repo(data,pos){
    //percorre ate o item comic do json

    //limpa o o component a ser prenchido
    document.getElementById(pos).innerHTML = '';

    let ptbr = Object;
    ptbr.linkName = "Ir ao Github";
    ptbr.description = "Descrição:";
    ptbr.readmeButton= "Readme:";
    //percorre o json
    document.getElementById(pos).innerHTML = `
        <div class="div_repo" class='conteudo; min_box;'>
        <br>
        <a href="https://github.com/Nicolassmaniotto" class='conteudo_elemento_link'><h1>VER NO GITHUB</h1></a>
        `;
    data.forEach(element => {
        //constroe os items encontrados
        document.getElementById(pos).innerHTML +=`
        <div id='${element.id}'>
        <a href='${element.html_url}' class='conteudo_elemento_link conteudo_box'><h1>Github:  ${element.name}</h1></a>
        <div class='conteudo_elemento conteudo_box'>
        <h2>${ptbr.description}</h2>
        <p>${element.description}</p>
        </div>
            <div class='conteudo_elemento conteudo_box conteudo_readme'>
            <a onclick="chamada_readme('${element.name}','${element.id}')"><h2>> ${ptbr.readmeButton}</h2></a>
                <div id='conteudo_${element.id}' class='conteudo_2tab'>

                </div>
            </div>
        </div>
        <hr>
        `;
        // console.log(element);
                                                    
    });
    document.getElementById(pos).innerHTML += `</div>`;
}