/* ============================================
   DREAMHOUSE — Navigation & State
   House → Room → Project → Back
   ============================================ */

(function () {
  'use strict';

  // State
  let currentView = 'house';
  let currentRoom = null;
  let isTransitioning = false;

  // Room → Project mapping (which room each project returns to)
  const projectToRoom = {
    gillette: 'bathroom',
    kerastase: 'beauty',
    nike: 'studio',
    about: 'living',
    oatly: 'office',
    spotify: 'lounge'
  };

  // DOM cache
  const views = {
    house: document.getElementById('houseView')
  };

  // Cache room and project views
  ['bathroom', 'beauty', 'studio', 'living', 'office', 'lounge'].forEach(room => {
    views['room-' + room] = document.getElementById('roomView-' + room);
  });

  ['gillette', 'kerastase', 'nike', 'about', 'oatly', 'spotify'].forEach(project => {
    views['project-' + project] = document.getElementById('projectView-' + project);
  });

  /**
   * Switch between views with smooth transitions
   */
  function navigateTo(viewKey) {
    if (isTransitioning) return;
    isTransitioning = true;

    const currentViewEl = getActiveView();
    const nextViewEl = views[viewKey];

    if (!nextViewEl || currentViewEl === nextViewEl) {
      isTransitioning = false;
      return;
    }

    // Fade out current
    currentViewEl.classList.add('exiting');
    currentViewEl.classList.remove('active');

    // After fade out, show new
    setTimeout(() => {
      currentViewEl.classList.remove('exiting');

      // Reset scroll on the new view
      nextViewEl.scrollTop = 0;

      // Fade in new
      nextViewEl.classList.add('entering');
      nextViewEl.classList.add('active');

      // Force reflow for transition
      void nextViewEl.offsetWidth;

      requestAnimationFrame(() => {
        // Clean up entering class after animation
        setTimeout(() => {
          nextViewEl.classList.remove('entering');
          isTransitioning = false;
        }, 500);
      });
    }, 350);

    // Update state
    if (viewKey === 'house') {
      currentView = 'house';
      currentRoom = null;
    } else if (viewKey.startsWith('room-')) {
      currentView = 'room';
      currentRoom = viewKey.replace('room-', '');
    } else if (viewKey.startsWith('project-')) {
      currentView = 'project';
    }
  }

  /**
   * Get the currently active view element
   */
  function getActiveView() {
    return document.querySelector('.view.active');
  }

  // === Room Cell Clicks (House → Room) ===
  document.querySelectorAll('.room-cell').forEach(cell => {
    const room = cell.dataset.room;

    const handleClick = () => {
      navigateTo('room-' + room);
    };

    cell.addEventListener('click', handleClick);
    cell.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    });
  });

  // === Object Clicks (Room → Project) ===
  document.querySelectorAll('.room-object').forEach(obj => {
    const project = obj.dataset.project;
    if (!project) return;

    const handleClick = () => {
      navigateTo('project-' + project);
    };

    obj.addEventListener('click', handleClick);
    obj.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    });
  });

  // === Secondary Objects (also link to projects) ===
  document.querySelectorAll('.room-object-secondary').forEach(obj => {
    const project = obj.dataset.project;
    if (!project) return;

    obj.addEventListener('click', () => {
      navigateTo('project-' + project);
    });
  });

  // === Back Buttons ===
  document.querySelectorAll('.back-btn').forEach(btn => {
    const target = btn.dataset.back;

    btn.addEventListener('click', () => {
      if (target === 'house') {
        navigateTo('house');
      } else {
        navigateTo('room-' + target);
      }
    });
  });

  // === Keyboard Navigation ===
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (currentView === 'project') {
        // Go back to room
        const activeProject = document.querySelector('.view--project.active');
        if (activeProject) {
          const backBtn = activeProject.querySelector('.back-btn');
          if (backBtn) {
            const target = backBtn.dataset.back;
            navigateTo('room-' + target);
          }
        }
      } else if (currentView === 'room') {
        navigateTo('house');
      }
    }
  });

  // === Initialize ===
  // Mark house view as active on load
  views.house.classList.add('active');

})();
