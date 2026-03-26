/* ============================================
   DREAMHOUSE — Visual Effects
   Custom cursor, sparkles, ambient animations
   ============================================ */

(function () {
  'use strict';

  // === Custom Cursor ===
  const cursor = document.getElementById('cursor');
  const cursorTrail = document.getElementById('cursorTrail');
  let mouseX = 0, mouseY = 0;
  let trailX = 0, trailY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  // Smooth trail follow
  function updateTrail() {
    trailX += (mouseX - trailX) * 0.15;
    trailY += (mouseY - trailY) * 0.15;
    cursorTrail.style.left = trailX + 'px';
    cursorTrail.style.top = trailY + 'px';
    requestAnimationFrame(updateTrail);
  }
  updateTrail();

  // Cursor hover states
  const hoverTargets = 'a, button, .room-cell, .room-object, .room-object-secondary, .gallery-item, .about-card, .contact-link, [role="button"]';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.add('hovering');
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.remove('hovering');
    }
  });

  // Hide system cursor everywhere
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorTrail.style.opacity = '0.5';
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorTrail.style.opacity = '0';
  });

  // === Sparkle Effects ===
  const sparkleContainer = document.getElementById('sparkles');
  const sparkleChars = ['✦', '✧', '⋆', '✶', '✷', '✸', '✹', '❋'];

  function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = (8 + Math.random() * 12) + 'px';

    const colors = ['#FFD700', '#FF69B4', '#FF00FF', '#E6E6FA', '#87CEEB'];
    sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 800);
  }

  // Sparkle on click
  document.addEventListener('click', e => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const offsetX = (Math.random() - 0.5) * 40;
        const offsetY = (Math.random() - 0.5) * 40;
        createSparkle(e.clientX + offsetX, e.clientY + offsetY);
      }, i * 50);
    }
  });

  // Subtle sparkle trail on hover over interactive elements
  let sparkleThrottle = false;
  document.addEventListener('mousemove', e => {
    if (sparkleThrottle) return;
    if (!e.target.closest('.room-cell, .room-object')) return;

    sparkleThrottle = true;
    setTimeout(() => { sparkleThrottle = false; }, 200);

    if (Math.random() > 0.5) {
      createSparkle(e.clientX + (Math.random() - 0.5) * 20, e.clientY + (Math.random() - 0.5) * 20);
    }
  });

  // === Ambient floating particles (house view only) ===
  function createFloatingParticle() {
    const houseView = document.getElementById('houseView');
    if (!houseView || !houseView.classList.contains('active')) return;

    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${2 + Math.random() * 4}px;
      height: ${2 + Math.random() * 4}px;
      background: ${Math.random() > 0.5 ? 'rgba(255, 105, 180, 0.3)' : 'rgba(230, 230, 250, 0.4)'};
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      bottom: -10px;
      pointer-events: none;
      z-index: 1;
    `;

    const duration = 8000 + Math.random() * 8000;
    particle.animate([
      { transform: 'translateY(0) translateX(0)', opacity: 0 },
      { transform: `translateY(-${window.innerHeight}px) translateX(${(Math.random() - 0.5) * 100}px)`, opacity: 0.6 },
      { transform: `translateY(-${window.innerHeight * 1.5}px) translateX(${(Math.random() - 0.5) * 150}px)`, opacity: 0 }
    ], {
      duration: duration,
      easing: 'ease-out'
    });

    houseView.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, duration);
  }

  // Spawn particles periodically
  setInterval(createFloatingParticle, 800);

  // === Preload entrance animation ===
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Slight delay for dramatic effect
    setTimeout(() => {
      const houseView = document.getElementById('houseView');
      if (houseView) {
        houseView.style.opacity = '1';
      }
    }, 100);
  });

})();
