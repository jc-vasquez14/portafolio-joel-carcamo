// Cursor personalizado
      const cursor = document.querySelector(".cursor");
      document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      });

      // Partículas de fondo
      function createParticles() {
        const particles = document.querySelector(".particles");
        for (let i = 0; i < 50; i++) {
          const particle = document.createElement("div");
          particle.className = "particle";
          particle.style.left = Math.random() * 100 + "%";
          particle.style.top = Math.random() * 100 + "%";
          particle.style.width = Math.random() * 4 + 2 + "px";
          particle.style.height = particle.style.width;
          particle.style.animationDelay = Math.random() * 6 + "s";
          particles.appendChild(particle);
        }
      }

      // Animación de barras de habilidades
      function animateSkillBars() {
        const skillBars = document.querySelectorAll(".skill-progress");
        skillBars.forEach((bar) => {
          const width = bar.getAttribute("data-width");
          bar.style.width = width;
        });
      }

      // Animación de scroll
      function handleScrollAnimations() {
        const elements = document.querySelectorAll(".fade-in");
        elements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;

          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add("visible");
          }
        });
      }

      // Navegación suave
      function smoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
              target.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          });
        });
      }

      // Header transparente en scroll
      function handleHeaderScroll() {
        const header = document.querySelector("header");
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            header.style.background = "rgba(10, 10, 10, 0.98)";
          } else {
            header.style.background = "rgba(10, 10, 10, 0.95)";
          }
        });
      }

      // Formulario de contacto
      function handleContactForm() {
        const form = document.querySelector(".contact-form");
        form.addEventListener("submit", (e) => {
          e.preventDefault();

          // Simulación de envío
          const submitBtn = form.querySelector(".submit-btn");
          const originalText = submitBtn.textContent;

          //submitBtn.textContent = "Enviando...";
          //submitBtn.disabled = true;

          //setTimeout(() => {
          //submitBtn.textContent = "¡Mensaje Enviado!";
          //setTimeout(() => {
          //submitBtn.textContent = originalText;
          //submitBtn.disabled = false;
          //form.reset();
          //}, 2000);
          //}, 1500);
        });
      }

      // Efectos de hover en tarjetas de proyecto
      function addProjectCardEffects() {
        const cards = document.querySelectorAll(".project-card");
        cards.forEach((card) => {
          card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px) scale(1.02)";
          });

          card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
          });
        });
      }

      // Inicialización
      document.addEventListener("DOMContentLoaded", () => {
        createParticles();
        smoothScroll();
        handleHeaderScroll();
        handleContactForm();
        addProjectCardEffects();

        // Animar barras de habilidades cuando sean visibles
        const skillsSection = document.querySelector("#skills");
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateSkillBars();
            }
          });
        });
        observer.observe(skillsSection);
      });

      // Event listeners
      window.addEventListener("scroll", handleScrollAnimations);
      window.addEventListener("load", handleScrollAnimations);

      // Efecto de typing en el hero
      function typeWriter() {
        const text = "Desarrollador Full Stack";
        const subtitle = document.querySelector(".hero .subtitle");
        let i = 0;

        subtitle.textContent = "";

        function type() {
          if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, 70);
          }
        }

        setTimeout(type, 50);
      }

      // Iniciar efecto de typing
      setTimeout(typeWriter, 2000);