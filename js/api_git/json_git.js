function json_git(data,pos){
    // apaga o elemento pos a cada requisição
    document.getElementById(pos).innerHTML = "" ;


    //percorre os itens
    // data.forEach(element => {
        //retorna os valores de construção dos items dos
        document.getElementById(pos).innerHTML +=  `
        <h1>
         ${data.name}
        </h1>
        <h2>
         ${data.id}
        </h2>
        <a href='${data.html_url}'>
        <img src="${data.avatar_url}"/>
        </a>
        <p>
        ${data.bio}
        </p>


        `;


    // });
}