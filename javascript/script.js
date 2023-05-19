function alertaBotaoCadastro(){
    alert("Seja bem vindo(a)!")
}

function alertaBotaoLogin(){
    alert("Enviamos um e-mail para redefinir sua senha")
}

const paraScrollar = document.getElementById('scroll');
const secaoAlvo = document.getElementById('conteudoHome');

paraScrollar.addEventListener('click', function() {
    secaoAlvo.scrollIntoView({ behavior: 'smooth', duration:1.8});
});