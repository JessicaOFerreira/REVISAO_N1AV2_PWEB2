let formularios = document.querySelectorAll("#msform fieldset");
let progresso = document.querySelectorAll("#msform #progressbar li");
let btnN = document.getElementsByClassName("next action-button");
let btnP = document.getElementsByClassName("previous action-button");
let campos = document.querySelectorAll("#msform input:not([type=button]):not([type=submit])");
let quebra = document.createElement("br");

// variaveis verificação
let verVazio = false;
let verTamSenha = false;
let verConfSenha = false;

//---------------------------------------------------------
function createValid(){
    let verificacao = document.createElement("span");
    verificacao.id = "verif";

    return verificacao;
}

function agregValid(campo,texto){
    let verificacao = createValid();

    verificacao.append(texto);
    campo.after(verificacao);
    verificacao.after(quebra);

    campo.addEventListener("focus", function (e) {
        e.preventDefault;
        verificacao.remove(texto);
    });
}

function validVazio(campo){
    
    campo.addEventListener("blur", function (e) {

        if (campo.value == "" && campo.type != "password") {
            
            let textVali = document.createTextNode("Campo Obrigatório!");
            agregValid(campo, textVali);

            return false;
        }
        return true;
    });
};

function validTamSenha(campo){
    campo.addEventListener("blur", function (e) {
        e.preventDefault();
        
            if (campo.value.length < 8) {
                let textVali = document.createTextNode("Senha com pelo menos 8 caracteres");
                agregValid(campo, textVali);

                return false;
            }   
        return true; 
    }); 
};

function validConfSenha (campo1, campo2){
    campo2.addEventListener("blur", function (e) {
        e.preventDefault();
        
            if (campo1.value != campo2.value) {
                let textVali = document.createTextNode("Confirmação de senha inválida!");
                agregValid(campo2, textVali);

                return false;
            }  
            return true; 
    });
};

//-------------------------------------------------------------------------------------------
for (let i = 0; i < campos.length; i++) {

    campos[i].addEventListener("blur", function () {

        verVazio = validVazio(campos[i]);
    });
};
 
verTamSenha = validTamSenha(campos[1]);
verConfSenha = validConfSenha(campos[1], campos[2]);

console.log(verVazio);
console.log(verTamSenha);
console.log(verConfSenha);

if(verVazio == true && verTamSenha == true && verConfSenha == true){
    console.log("teste");
}