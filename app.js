/* ============================================================
   DREAMHOUSE — Navigation & Interactions
   ============================================================ */

(function () {
  'use strict';

  // State
  let currentView = 'house';
  let currentRoom = null;
  let currentProject = null;

  const roomNames = {
    bathroom: 'Bathroom',
    beauty: 'Beauty Room',
    studio: 'Studio',
    living: 'Living Room',
    office: 'Office',
    lounge: 'Lounge'
  };

  const projectToRoom = {
    gillette: 'bathroom',
    kerastase: 'beauty',
    sunset: 'studio',
    vogue: 'living',
    aboutus: 'office',
    midnight: 'lounge'
  };

  // Elements
  const houseView = document.getElementById('house-view');
  const roomView = document.getElementById('room-view');
  const projectView = document.getElementById('project-view');
  const roomBackBtn = document.getElementById('room-back-btn');
  const projectBackBtn = document.getElementById('project-back-btn');
  const roomNameBanner = document.getElementById('room-name-banner');

  // --- Core display functions (no history manipulation) ---

  function displayView(viewName) {
    [houseView, roomView, projectView].forEach(function (v) {
      v.classList.remove('active');
    });

    if (viewName === 'house') {
      houseView.classList.add('active');
      currentView = 'house';
      currentRoom = null;
    } else if (viewName === 'room') {
      roomView.classList.add('active');
      currentView = 'room';
    } else if (viewName === 'project') {
      projectView.classList.add('active');
      currentView = 'project';
    }

    window.scrollTo(0, 0);
  }

  function displayRoom(roomId) {
    document.querySelectorAll('.room-detail').forEach(function (r) {
      r.classList.remove('active');
    });

    var roomEl = document.getElementById('room-' + roomId);
    if (roomEl) {
      roomEl.classList.add('active');
      currentRoom = roomId;
      roomNameBanner.textContent = roomNames[roomId] || roomId;
      displayView('room');
    }
  }

  function displayProject(projectId) {
    document.querySelectorAll('.project-detail').forEach(function (p) {
      p.classList.remove('active');
    });

    var projectEl = document.getElementById('project-' + projectId);
    if (projectEl) {
      projectEl.classList.add('active');
      currentProject = projectId;
      displayView('project');
    }
  }

  // --- Navigation functions (with history) ---

  function navigateToHouse() {
    displayView('house');
    history.pushState({ view: 'house' }, '', window.location.pathname);
  }

  function navigateToRoom(roomId) {
    displayRoom(roomId);
    history.pushState({ view: 'room', room: roomId }, '', '#' + roomId);
  }

  function navigateToProject(projectId) {
    displayProject(projectId);
    history.pushState({ view: 'project', project: projectId }, '', '#project-' + projectId);
  }

  // --- Event Listeners ---

  // Room cells
  document.querySelectorAll('.room-cell').forEach(function (cell) {
    cell.addEventListener('click', function () {
      var roomId = this.dataset.room;
      if (roomId) navigateToRoom(roomId);
    });
  });

  // Clickable objects
  document.querySelectorAll('.clickable-object').forEach(function (obj) {
    obj.addEventListener('click', function (e) {
      e.stopPropagation();
      var projectId = this.dataset.project;
      if (projectId) navigateToProject(projectId);
    });
  });

  // Back: room → house
  roomBackBtn.addEventListener('click', function () {
    navigateToHouse();
  });

  // Back: project → room
  projectBackBtn.addEventListener('click', function () {
    var roomId = projectToRoom[currentProject];
    if (roomId) {
      navigateToRoom(roomId);
    } else {
      navigateToHouse();
    }
  });

  // Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (currentView === 'project') {
        var roomId = projectToRoom[currentProject];
        if (roomId) navigateToRoom(roomId);
        else navigateToHouse();
      } else if (currentView === 'room') {
        navigateToHouse();
      }
    }
  });

  // Browser back/forward — use display functions (no pushState)
  window.addEventListener('popstate', function (e) {
    if (e.state) {
      if (e.state.view === 'project' && e.state.project) {
        displayProject(e.state.project);
      } else if (e.state.view === 'room' && e.state.room) {
        displayRoom(e.state.room);
      } else {
        displayView('house');
      }
    } else {
      displayView('house');
    }
  });

  // Handle initial hash on page load
  (function handleInitialHash() {
    var hash = window.location.hash.slice(1);
    if (hash.startsWith('project-')) {
      var projectId = hash.replace('project-', '');
      displayProject(projectId);
    } else if (hash && roomNames[hash]) {
      displayRoom(hash);
    }
  })();

  // --- Sparkle effect ---
  document.querySelectorAll('.clickable-object').forEach(function (obj) {
    obj.addEventListener('mouseenter', function () {
      createSparkles(this);
    });
  });

  function createSparkles(element) {
    var rect = element.getBoundingClientRect();
    for (var i = 0; i < 5; i++) {
      var sparkle = document.createElement('div');
      sparkle.textContent = '✦';
      sparkle.style.cssText =
        'position:fixed;' +
        'left:' + (rect.left + Math.random() * rect.width) + 'px;' +
        'top:' + (rect.top + Math.random() * rect.height) + 'px;' +
        'color:#FFD700;' +
        'font-size:' + (8 + Math.random() * 12) + 'px;' +
        'pointer-events:none;' +
        'z-index:1000;' +
        'animation:sparkleFloat 0.8s ease-out forwards;';
      document.body.appendChild(sparkle);
      setTimeout(function () { sparkle.remove(); }, 800);
    }
  }

  // Inject sparkle animation
  var style = document.createElement('style');
  style.textContent =
    '@keyframes sparkleFloat {' +
    '  0% { opacity: 1; transform: translateY(0) scale(1); }' +
    '  100% { opacity: 0; transform: translateY(-30px) scale(0.3); }' +
    '}';
  document.head.appendChild(style);

})();
