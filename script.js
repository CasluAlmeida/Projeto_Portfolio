document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA PARA O MODAL DA GALERIA ---
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const closeButton = document.querySelector('.close-button');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            modal.style.display = 'block';
            modalImg.src = imgSrc;
        });
    });

    // Função para fechar o modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Fechar ao clicar no botão 'X' ou no fundo do modal
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fechar ao pressionar a tecla 'Escape'
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });


    // --- 2. LÓGICA PARA MARCAR O LINK ATIVO NO MENU DURANTE A ROLAGEM ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a');

    const observerOptions = {
        root: null, // Observa em relação ao viewport
        rootMargin: '0px',
        threshold: 0.6 // A seção precisa estar 60% visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

});