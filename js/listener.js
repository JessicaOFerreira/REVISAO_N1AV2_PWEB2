let formularios = document.querySelectorAll("#msform fieldset");
let progresso = document.querySelectorAll("#msform #progressbar li");
let btnN = document.getElementsByClassName("next action-button");
let btnP = document.getElementsByClassName("previous action-button");
let btnSubmit = document.querySelector(".submit");

//----------------------------------------------------------------------------------------------

function validar(i){
    // procurar os campos de um determinado (enesimo) fieldset que está dentro de um form
    //a crase(``)serve para declarar uma string, assim como uma variavel qlq
    //na variavel $({}) esta sendo passado (paramentro da função) o numero do fieldset que desejo pegar e depois quais tipos de inputs não quero pegar
    //no caso i+1, pois no css a contagem começa a partir de 1
    
    let campos = document.querySelectorAll(`form fieldset:nth-of-type(${i + 1}) input:not([type='button']):not([type='submit'])`);
    
    for(let c = 0 ; c < campos.length ; c++){
        // conversão do conteudo para string e comparando se esta vazio
        if(String(campos[c].value) == "" && campos[c].type != "password" && i != 1){ 
            
            alert("Campo Obrigatório!");
            campos[c].style.borderColor = "red";
            
            campos[c].addEventListener("focus", function(){
                campos[c].style.borderColor = "#ccc";
            });
            return false;
        }
    }

    if (i == 0){
        if(String(campos[1].value.length) < 8 ){
            alert("Senha deve conter pelo menos 8 caracteres!");
            campos[1].style.borderColor = "red";
            
            campos[1].addEventListener("focus", function(){
                campos[1].style.borderColor = "#ccc";
            });
            return false;
        };

        if(String(campos[1].value) != String(campos[2].value) ){
            alert("Confirmação de senha inválida!");
            campos[2].style.borderColor = "red";
            
            campos[2].addEventListener("focus", function(){
                campos[2].style.borderColor = "#ccc";
            });
            return false;
        };
    };

    
    return true;
};

//--------------------------------------------------------------------------------

function proxForm(i){
    if(validar(i)){
        formularios[i].style.display="none";
        formularios[i + 1].style.display="block";
        progresso[i].classList.remove("active");
        progresso[i+1].classList.add("active");
    }
};

function PrevForm(i){
    formularios[i].style.display = "none";
    formularios[i - 1].style.display = "block";
    progresso[i].classList.remove("active");
    progresso[i-1].classList.add("active");
};

//---------------------------------------------------------------------------------

for(let i = 0 ; i < btnN.length; i++){

    btnN[i].addEventListener("click", function(e){
        e.preventDefault();

        proxForm(i);

    });

};

for(let i = 0 ; i < btnP.length; i++){

    btnP[i].addEventListener("click", function(e){
        e.preventDefault();

        PrevForm(i + 1);

    });

};

btnSubmit.addEventListener("click", function(e){
    if(validar(0) && validar(1) && validar(2)){

    } else{
        e.preventDefault();
    }
});