function mostrarInfo(secao) {
    const div = document.getElementById(`info-${secao}`);
    
    // Alterna entre as classes 'oculto' e 'visivel'
    if (div.classList.contains('visivel')) {
        div.classList.remove('visivel');
        setTimeout(() => div.style.display = 'none', 300); // Delay para ocultar após a animação
    } else {
        div.style.display = 'block'; // Mostra a div antes de aplicar a animação
        setTimeout(() => div.classList.add('visivel'), 10); // Garante a transição
    }
}