import { createClient } from '@supabase/supabase-js';

/* ===== SUPABASE ===== */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

/* ===== NAVBAR — glassmorphism ao rolar ===== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
    });
});

/* ===== ANIMAÇÕES DE SCROLL (AOS customizado) ===== */
const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-visible');
            observer.unobserve(entry.target); // anima apenas uma vez
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

/* ===== FAQ ACORDEÃO ===== */
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');

        // Fecha todos os outros
        document.querySelectorAll('.faq-item.open').forEach(openItem => {
            if (openItem !== item) {
                openItem.classList.remove('open');
                openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            }
        });

        // Abre/fecha o atual
        item.classList.toggle('open', !isOpen);
        btn.setAttribute('aria-expanded', !isOpen);
    });
});

/* ===== FORMATAÇÃO DE TELEFONE ===== */
const phoneInput = document.getElementById('leadPhone');
phoneInput?.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);
    if (val.length > 6) {
        val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    } else if (val.length > 2) {
        val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    } else if (val.length > 0) {
        val = `(${val}`;
    }
    e.target.value = val;
});

/* ===== VALIDAÇÃO DO FORMULÁRIO ===== */
function validateField(id, errorId, condition, message) {
    const field = document.getElementById(id);
    const error = document.getElementById(errorId);
    if (!field || !error) return true;

    if (condition(field.value)) {
        field.classList.add('error');
        error.textContent = message;
        return false;
    } else {
        field.classList.remove('error');
        error.textContent = '';
        return true;
    }
}

function validateForm() {
    const nameOk = validateField('leadName', 'nameError',
        v => v.trim().length < 3,
        'Por favor, informe seu nome completo.'
    );

    const emailOk = validateField('leadEmail', 'emailError',
        v => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
        'Informe um e-mail válido.'
    );

    const phoneOk = validateField('leadPhone', 'phoneError',
        v => v.replace(/\D/g, '').length < 10,
        'Informe um WhatsApp válido com DDD.'
    );

    return nameOk && emailOk && phoneOk;
}

/* ===== ENVIO DE LEAD PARA SUPABASE ===== */
const form = document.getElementById('leadForm');
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    const leadData = {
        name: document.getElementById('leadName').value.trim(),
        email: document.getElementById('leadEmail').value.trim().toLowerCase(),
        phone: document.getElementById('leadPhone').value.trim(),
        interest: document.getElementById('leadInterest').value || 'Não informado',
        status: 'Novo',
    };

    try {
        const { error } = await supabase.from('leads').insert([leadData]);

        if (error) {
            console.error('Erro Supabase:', error);
            throw new Error(error.message);
        }

        // Sucesso: esconde form, mostra mensagem de sucesso
        form.style.display = 'none';
        formSuccess.style.display = 'block';

        // Scroll para o formulário de sucesso
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

    } catch (err) {
        console.error('Erro ao enviar lead:', err);
        alert('Ocorreu um problema ao enviar. Por favor, tente novamente ou entre em contato pelo WhatsApp.');
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
});

// Validação ao sair do campo (blur)
['leadName', 'leadEmail', 'leadPhone'].forEach(id => {
    document.getElementById(id)?.addEventListener('blur', () => {
        if (id === 'leadName') {
            validateField('leadName', 'nameError', v => v.trim().length < 3, 'Por favor, informe seu nome completo.');
        }
        if (id === 'leadEmail') {
            validateField('leadEmail', 'emailError', v => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), 'Informe um e-mail válido.');
        }
        if (id === 'leadPhone') {
            validateField('leadPhone', 'phoneError', v => v.replace(/\D/g, '').length < 10, 'Informe um WhatsApp válido com DDD.');
        }
    });
});

/* ===== SMOOTH SCROLL para âncoras ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = 80; // Compensa a navbar fixa
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});
