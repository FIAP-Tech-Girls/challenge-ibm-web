function alertaBotaoLogin(){
    alert("Enviamos um e-mail para redefinir sua senha")
}

const paraScrollar = document.getElementById('scroll');
const secaoAlvo = document.getElementById('conteudoHome');

paraScrollar.addEventListener('click', function() {
    secaoAlvo.scrollIntoView({ behavior: 'smooth', duration:1.8});
});

function validacaoLogin(){

    let emailUsuarioLogin = document.getElementById('emailUsuarioLogin').value
    let senhaUsuarioLogin = document.getElementById('senhaUsuarioLogin').value

    if (emailUsuarioLogin == "" || senhaUsuarioLogin == ""){
        alert('Preencha todos campos antes de prosseguir')
    } else {
        alert("Seja bem vindo(a)!")
    }
}