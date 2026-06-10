document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DEL SELECTOR DE TEMAS ---
    
    // Función para cambiar el tema
    window.cambiarTema = function(tema) {
        // Le pone el atributo al HTML (ej. <html data-tema="claro">)
        document.documentElement.setAttribute('data-tema', tema);
        
        // Guarda la preferencia en la memoria del navegador
        localStorage.setItem('temaPreferido', tema);
    };

    // Al cargar la página, revisar si el usuario ya tenía un tema guardado
    const temaGuardado = localStorage.getItem('temaPreferido') || 'oscuro'; // 'oscuro' es el default
    cambiarTema(temaGuardado);

// =========================================
    // 2. INICIALIZAR AOS (Animaciones al hacer scroll)
    // =========================================
    AOS.init({
        duration: 800,       // Duración de la animación (en milisegundos)
        once: true,          // Si es 'true', la animación solo ocurre una vez al bajar
        offset: 100,         // Distancia (en px) antes de que el elemento se anime
    });

    // =========================================
    // 3. EFECTO TYPEWRITER (Máquina de escribir)
    // =========================================
    const typeTarget = document.getElementById('typewriter');
    
    if (typeTarget) {
        // Detectar en qué idioma estamos para cambiar los textos
        const esIngles = window.location.pathname.includes('englishindex');
        
        const textos = esIngles 
            ? [
                'Jr. Java Full Stack Developer',  
                'Analytical Problem Solver', 
                'Clean Code Enthusiast'
              ]
            : [
                'Desarrollador Java Full Stack Jr.',  
                'Solucionador de Problemas Analíticos', 
                'Entusiasta del Código Limpio'
              ];

        const typewriter = new Typewriter(typeTarget, {
            loop: true,
            delay: 50,         // Velocidad de escritura
            deleteSpeed: 30    // Velocidad de borrado
        });

        typewriter
            .typeString(textos[0])
            .pauseFor(2500)
            .deleteAll()
            .typeString(textos[1])
            .pauseFor(2000)
            .deleteAll()
            .typeString(textos[2])
            .pauseFor(2000)
            .deleteAll()
            .typeString(textos[3])
            .pauseFor(2000)
            .start();
    }

});