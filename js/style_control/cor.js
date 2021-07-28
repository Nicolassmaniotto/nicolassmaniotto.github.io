function cor_css($i){
    var cor_1,cor_2,cor_3,type,text;
    var var_arr = [0,'Noturno','Water']
    
    // var button = document.getElementById('estilo_button');
    // console.log($i);
    if($i == 0){
        text = 'Rand'
        let rand = Math.floor(Math.random() * 250);
         type = `linear-gradient(${rand}deg, var(--cor-a),var(--cor-b))`;
         cor_1 = `rgb(${Math.floor(Math.random() * 240-100)+100},${Math.floor(Math.random() * 60)},${rand})`; 
         cor_2 = `rgb(${Math.floor(Math.random() * 60-10)+10},0,${rand*0.2})`; 
         cor_3 = `rgb(${Math.floor(Math.random() * 10)},${Math.floor(Math.random() * 20)},${rand*0.1})`; 
        
    }else if($i == 1){
         text = 'Noturno';
        //  type = 'rgb(29, 28, 28)';
        //  cor_1 = 'rgb(29,28,28)';
        //  cor_2 = 'rgb(29,28,28)';
        
        type  = 'black';
        cor_1 = 'black';
        cor_2 = 'black';
        cor_3 = 'rgb(99, 233, 22)';
    }else if($i == 2){
        text = 'Water';
        type =  'url(../../img/water.jpg) repeat';
        document.documentElement.style.setProperty('--size-bk','110vw 110vh' );
        document.documentElement.style.setProperty('--time-bk','30s' );
        cor_3 = 'rgb(99, 233, 22)';
        
    }else if($i == 3){
        text = 'Claro';
        type = 'rgb(240,240,240)';
        cor_1 = 'rgb(29,28,28)';
        cor_2 = 'rgb(29,28,28)';
        cor_3 = 'rgb(99, 233, 22)';
   }else{
        // console.log('else');
        cor_css(0);
        $i = 0;
        return;

    }
    localStorage.setItem("bk-style", $i);
    var $i =parseInt($i)+1;
    // var styles = getComputedStyle(document.documentElement);
    document.documentElement.style.setProperty('--background-type', type);
    document.documentElement.style.setProperty('--cor-a', cor_1);
    document.documentElement.style.setProperty('--cor-b', cor_2);
    document.documentElement.style.setProperty('--cor-c', cor_3);
    document.getElementById('estilo_button').value = $i;
    document.getElementById('estilo_button').innerText = text;
    return;
}