document.addEventListener('DOMContentLoaded', () => {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 75,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.4,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.5,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: ["grab", "repulse"]
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1
          }
        },
        repulse: {
          distance: 100
        },
        push: {
          particles_nb: 2
        },
        attract: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    retina_detect: true
  });


  // Popup für Bugfixes
  document.querySelectorAll('.bugfix').forEach(function(el) {
    el.addEventListener('click', function() {
      var description = this.querySelector('.description');
      var popupContent = document.getElementById('popup-content');
      var popup = document.getElementById('popup');
      var overlay = document.getElementById('overlay');
      var content = document.getElementById('content');

      if (description && popupContent && popup && overlay) {
        popupContent.innerHTML = description.innerHTML;
        popup.style.display = 'block';
        popup.classList.add('show');
        overlay.style.display = 'block';
        if (content) {
          content.classList.add('blur');
        }
      } else {
        console.error('Fehler: Ein oder mehrere Popup-Elemente nicht gefunden!');
      }
    });
  });

  // Popup schließen
  var closePopup = document.getElementById('close-popup');
  if (closePopup) {
    closePopup.addEventListener('click', function() {
      var popup = document.getElementById('popup');
      var overlay = document.getElementById('overlay');
      var content = document.getElementById('content');
      if (popup) {
        popup.classList.remove('show');
        setTimeout(() => {
          if (popup && overlay) {
            popup.style.display = 'none';
            overlay.style.display = 'none';
          }
          if (content) {
            content.classList.remove('blur');
          }
        }, 300);
      }
    });
  }

  // Suche für Bugfixes
  const searchInput = document.getElementById('search-input');
  const bugfixes = document.querySelectorAll('.bugfix');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      bugfixes.forEach(function(bugfix) {
        const title = bugfix.querySelector('h2').textContent.toLowerCase();
        bugfix.style.display = title.includes(searchTerm) ? 'block' : 'none';
      });
    });
  }
});