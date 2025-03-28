// Menu Toggle para dispositivos móveis
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Fecha o menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Ano atual no footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

function abrirWhatssap() {
    let name = document.getElementById('name').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let formulario = document.getElementById('formulario')

    if(!name || !subject || !message){
        alert('Preencha todos os campos');
        return;
    }

    let mensagem = `Olá me chamo ${name}!%0A`;
    mensagem += `Preciso da sua ajuda com: *${subject}*.%0A`;
    mensagem += `Detalhes: ${message}.`;

    const numeroWhatssap = "558899144483";
    const url = `https://wa.me/${numeroWhatssap}/?text=${mensagem}`;
    formulario.reset();
    window.open(url,"_blank");
}