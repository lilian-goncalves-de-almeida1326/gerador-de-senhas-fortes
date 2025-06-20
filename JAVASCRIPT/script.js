const letrasMin = "abcdefghijklmnopqrstuvwxyz";
const letrasMai = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const syms = "!@#$%^&*()_+{}[]<>?/";

const rangeSlide = document.getElementById("char-range");

const mostraForcaSenha = document.querySelector("h3");

var password = "";

var charList="";

var tamSenha = 0;

var senhasSalvas = [];
var senhasSalvasTexto = localStorage.getItem('senhas');
senhasSalvas = senhasSalvasTexto.split("¡");

recuperarSenhasSalvas();
function recuperarSenhasSalvas(){
    if (senhasSalvas) {
        adicionarSenhasSalvasAtela();
    }
}
function adicionarSenhasSalvasAtela(){
    for (let i = 0; i < senhasSalvas.length; i++) {
        document.querySelector("ul").innerHTML+=`<li>${senhasSalvas[i]}</li>` ;
    }
}

function salvarSenhasEmString(){
    senhasSalvasTexto = "";
    for (let i = 0; i < senhasSalvas.length; i++) {
        senhasSalvasTexto += senhasSalvas[i]+"¡";
    }
}

console.log(senhasSalvas+",  "+ senhasSalvasTexto);

rangeSlide.oninput = function() {
    document.getElementById("range-value").innerHTML = this.value;
}

function copiarSenha(){
    navigator.clipboard.writeText(password).then(() => {
        console.log("Senha copiada!");
    }).catch(err => {
        console.error("Erro ao copiar:", err);
    });
}


function salvarSenha(){
    if(senhasSalvas.length >= 3){
        document.querySelector("ul").removeChild(document.querySelector("li"));
        document.querySelector("ul").innerHTML+=`<li>${password}</li>`;
        senhasSalvas.shift();
        senhasSalvas.push(password);
        salvarSenhaMemoriaLocal();
        salvarSenhasEmString();
    }else{
        document.querySelector("ul").innerHTML+=`<li>${password}</li>`;
        senhasSalvas.push(password);
        salvarSenhaMemoriaLocal();
        salvarSenhasEmString();
    }
    
}


function gerarSenha(){
    password = "";
    pegarCaracteresEscolhidos();
    pegarTamanhoSenha();
    avaliaForcaDaSenha();
    
    for (let i = 0; i < tamSenha; i++) {
        password+= charList.charAt(Math.floor(Math.random() * charList.length));
    }
    document.querySelector(".password-label").textContent = password;
    opcoesSenhaVazias();
}


function salvarSenhaMemoriaLocal(){
    salvarSenhasEmString();
    if (senhasSalvas) {
        localStorage.setItem('senhas', senhasSalvasTexto);
    }
}


function pegarCaracteresEscolhidos(){
    charList="";
    var checkboxMin = document.getElementById("char-min");
    var checkboxMai = document.getElementById("char-mai");
    var checkboxNum = document.getElementById("char-num");
    var checkboxEsp = document.getElementById("char-esp");

    if(checkboxMin.checked){
        charList+=letrasMin;
    }
    if(checkboxMai.checked){
        charList+=letrasMai;
    }
    if(checkboxNum.checked){
        charList+=nums;
    }
    if(checkboxEsp.checked){
        charList+=syms;
    }
}

function avaliaForcaDaSenha(){
    var segurancaSenha = 0;

    var checkboxMin = document.getElementById("char-min");
    var checkboxMai = document.getElementById("char-mai");
    var checkboxNum = document.getElementById("char-num");
    var checkboxEsp = document.getElementById("char-esp");

    if(checkboxMin.checked){
        segurancaSenha+=5;
    }
    if(checkboxMai.checked){
        segurancaSenha+=10;
    }
    if(checkboxNum.checked){
        segurancaSenha+=5;
    }
    if(checkboxEsp.checked){
        segurancaSenha+=10;
    }
    segurancaSenha += parseInt(rangeSlide.value);

    if(segurancaSenha<=30){
        mostraForcaSenha.innerHTML="Fraca";
        document.getElementById("lv-1").classList.add("levels-password");
        document.getElementById("lv-2").classList.remove("levels-password");
        document.getElementById("lv-3").classList.remove("levels-password");
    }else if(segurancaSenha<=60){
        mostraForcaSenha.innerHTML="Média";
        document.getElementById("lv-1").classList.add("levels-password");
        document.getElementById("lv-2").classList.add("levels-password");
        document.getElementById("lv-3").classList.remove("levels-password");
    }else{
        mostraForcaSenha.innerHTML="Forte";
        document.getElementById("lv-1").classList.add("levels-password");
        document.getElementById("lv-2").classList.add("levels-password");
        document.getElementById("lv-3").classList.add("levels-password");

    }
}

function baixarSenha(){
    const blob = new Blob([password], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "senha-segura.txt";

    link.click();

    URL.revokeObjectURL(link.href);
}

function opcoesSenhaVazias(){
    if(charList==""){
        document.querySelector(".password-label").textContent = "Nenhuma opção foi seleciona, selecione alguma opção de caracteres";
    }
}

function pegarTamanhoSenha(){
    tamSenha = parseInt(rangeSlide.value);
}
