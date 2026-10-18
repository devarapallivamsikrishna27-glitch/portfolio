// ==========================================================================
// VAMSI KRISHNA — MAIN INTERACTIVE JAVASCRIPT CONTROLLER
// Handles dynamic rendering, filters, modals, form validation, and scrollspy
// ==========================================================================

import { personalData } from './data/personal.js';
import { skillCategories, skillsData } from './data/skills.js';
import { journeyData } from './data/journey.js';
import { projectCategories, projectsData } from './data/projects.js';

document.addEventListener('DOMContentLoaded', () => {
  initScrollEffects();
  initNavigation();
  initSkillsSection();
  initJourneySection();
  initProjectsSection();
  initContactForm();
  initModals();
  initDynamicYear();
  initCustomCursor();
});

/* ==========================================================================
   1. Scroll Effects (Progress Bar, Back-To-Top, Scrollspy)
   ========================================================================== */
function initScrollEffects() {
  const progressBar = document.getElementById('scrollProgressBar');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / docHeight) * 100;

    // Progress Bar
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    // Back-To-Top Button Visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scrollspy for active section link
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   2. Navigation Bar & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileToggleBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('mobileDrawerOverlay');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
}

/* ==========================================================================
   3. Skills Section (Interactive Category Filter & Rendering)
   ========================================================================== */
function initSkillsSection() {
  const filterTabsContainer = document.getElementById('skillsFilterTabs');
  const skillsGrid = document.getElementById('skillsGrid');

  if (!filterTabsContainer || !skillsGrid) return;

  // Render category buttons
  filterTabsContainer.innerHTML = skillCategories.map((cat, idx) => `
    <button type="button" class="filter-tab-btn ${idx === 0 ? 'active' : ''}" data-category="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  // Render skill items
  function renderSkills(filterCategory = 'all') {
    const filtered = filterCategory === 'all'
      ? skillsData
      : skillsData.filter(s => s.category === filterCategory);

    skillsGrid.innerHTML = filtered.map(skill => `
      <div class="skill-pill-card" data-category="${skill.category}">
        ${skill.isLearning ? '<span class="skill-learning-badge">Learning</span>' : ''}
        <div class="skill-icon-wrap" style="color: ${skill.iconColor};">
          ${skill.svg}
        </div>
        <div class="skill-info">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-meta">${skill.type}</span>
        </div>
      </div>
    `).join('');
  }

  renderSkills('all');

  // Filter button clicks
  filterTabsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-tab-btn');
    if (!btn) return;

    filterTabsContainer.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');
    renderSkills(category);
  });
}

/* ==========================================================================
   4. Journey Section (Two Columns & Certificate Preview Modals)
   ========================================================================== */
function initJourneySection() {
  const trainingContainer = document.getElementById('trainingJourneyList');
  const educationContainer = document.getElementById('educationJourneyList');

  if (trainingContainer) {
    trainingContainer.innerHTML = journeyData.trainingAndInternships.map(item => `
      <div class="journey-card ${item.isPlaceholder ? '' : 'featured-card'}">
        <div class="journey-period">${item.period}</div>
        <h4 class="journey-title">${item.title}</h4>
        <div class="journey-institution">${item.organization}</div>
        ${item.isPlaceholder ? '<span class="placeholder-badge">Awaiting Certificate Documentation</span>' : ''}
        <ul class="journey-bullets">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        ${item.certificate && item.certificate.hasCertificate ? `
          <button type="button" class="btn-certificate view-cert-trigger" data-cert-id="${item.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            View Certificate
          </button>
        ` : ''}
      </div>
    `).join('');
  }

  if (educationContainer) {
    const educationItemsHtml = journeyData.education.map(edu => `
      <div class="journey-card featured-card">
        <div class="journey-period">${edu.period}</div>
        <h4 class="journey-title">${edu.title}</h4>
        <div class="journey-institution">${edu.institution} • <strong>${edu.grade}</strong></div>
        <ul class="journey-bullets">
          ${edu.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    const workshopsHtml = journeyData.workshopsAndCertifications.map(ws => `
      <div class="journey-card">
        <div class="journey-period">${ws.period}</div>
        <h4 class="journey-title">${ws.title}</h4>
        <div class="journey-institution">${ws.organization}</div>
        <ul class="journey-bullets">
          ${ws.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        ${ws.certificate && ws.certificate.hasCertificate ? `
          <button type="button" class="btn-certificate view-cert-trigger" data-cert-id="${ws.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            View Certificate
          </button>
        ` : ''}
      </div>
    `).join('');

    educationContainer.innerHTML = educationItemsHtml + workshopsHtml;
  }
}

/* ==========================================================================
   5. Projects Section (Filtering, Cards, and Demo Modal Triggers)
   ========================================================================== */
function initProjectsSection() {
  const filterContainer = document.getElementById('projectsFilterTabs');
  const projectsGrid = document.getElementById('projectsGrid');

  if (!filterContainer || !projectsGrid) return;

  filterContainer.innerHTML = projectCategories.map((cat, idx) => `
    <button type="button" class="filter-tab-btn ${idx === 0 ? 'active' : ''}" data-category="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  function renderProjects(filterCategory = 'all') {
    const filtered = filterCategory === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === filterCategory || (filterCategory === 'uiux' && p.hasDemoModal));

    projectsGrid.innerHTML = filtered.map(proj => `
      <article class="project-card" data-project-id="${proj.id}">
        <div class="project-media-wrap">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy">
          <span class="project-status-badge">${proj.status}</span>
          <span class="project-category-badge">${proj.categoryLabel}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-description">${proj.shortDescription}</p>
          ${proj.disclaimer ? `<div class="project-disclaimer">${proj.disclaimer}</div>` : ''}
          <div class="project-tech-badges">
            ${proj.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('')}
          </div>
          <div class="project-footer-actions">
            <button type="button" class="btn btn-secondary view-project-details-btn" data-project-id="${proj.id}">
              <span>View Details</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </button>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" title="View Source Code">
              <span>GitHub</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  renderProjects('all');

  filterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-tab-btn');
    if (!btn) return;

    filterContainer.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.getAttribute('data-category');
    renderProjects(cat);
  });
}

/* ==========================================================================
   6. Contact Form (Templates, Validation & Feedback)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const templateBtns = document.querySelectorAll('.template-pill-btn');
  const feedbackBox = document.getElementById('formFeedback');
  const subjectInput = document.getElementById('formSubject');
  const messageInput = document.getElementById('formMessage');
  const submitBtn = document.getElementById('formSubmitBtn');

  // Quick message template presets
  const templates = {
    job: {
      subject: "Internship / Entry-Level Opportunity for Vamsi Krishna",
      message: "Hi Vamsi,\n\nI reviewed your portfolio and would like to discuss an internship / entry-level opportunity for a Full-Stack / AI role at our organization. Let's schedule a brief conversation."
    },
    collab: {
      subject: "Project Collaboration Proposal",
      message: "Hi Vamsi,\n\nI came across your work in web development and machine learning. I'm building an exciting application and would love to collaborate with you on technical architecture."
    },
    hello: {
      subject: "Hello from a Fellow Tech Enthusiast!",
      message: "Hi Vamsi,\n\nJust wanted to reach out and say hello! Great work on your portfolio and projects. Wishing you the best in your engineering journey!"
    }
  };

  templateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-template');
      if (templates[type]) {
        subjectInput.value = templates[type].subject;
        messageInput.value = templates[type].message;
        messageInput.focus();
      }
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      // Client-side validations
      if (!name || !email || !subject || !message) {
        showFeedback("Please complete all required fields.", "error");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFeedback("Please provide a valid email address.", "error");
        return;
      }

      if (message.length < 10) {
        showFeedback("Your message should be at least 10 characters long.", "error");
        return;
      }

      // Simulate sending with loading state
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        showFeedback(`Thank you, ${name}! Your message was successfully recorded. (Ready to connect with Formspree or EmailJS in personal.js)`, "success");
        form.reset();
      }, 1000);
    });
  }

  function showFeedback(text, type) {
    if (!feedbackBox) return;
    feedbackBox.textContent = text;
    feedbackBox.className = `form-feedback ${type}`;
    feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* ==========================================================================
   7. Modals: Certificate Preview & Project Deep-Dive
   ========================================================================== */
function initModals() {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openModal(html) {
    modalContent.innerHTML = html;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Certificate Modal Trigger
  document.addEventListener('click', (e) => {
    const certBtn = e.target.closest('.view-cert-trigger');
    if (certBtn) {
      const certId = certBtn.getAttribute('data-cert-id');
      const allCerts = [
        ...journeyData.trainingAndInternships,
        ...journeyData.workshopsAndCertifications
      ];
      const match = allCerts.find(c => c.id === certId);

      if (match && match.certificate) {
        const cert = match.certificate;
        openModal(`
          <div class="certificate-preview-box">
            <div class="cert-seal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h3 class="cert-doc-title">${cert.title}</h3>
            <p class="cert-details-text">Issued to verify completion of curriculum by:</p>
            <div class="cert-student-name">${personalData.name}</div>
            <p class="cert-details-text">
              Authorized by <strong>${cert.issuer}</strong><br>
              Date: ${cert.date}
            </p>
            <div class="cert-credential-tag">Credential ID: ${cert.credentialId}</div>
            <div style="margin-top: 1.5rem;">
              <button class="btn btn-primary" onclick="window.print()">
                <span>Print / Save Copy</span>
              </button>
            </div>
          </div>
        `);
      }
    }

    // Project Details Modal Trigger
    const projBtn = e.target.closest('.view-project-details-btn');
    if (projBtn) {
      const projId = projBtn.getAttribute('data-project-id');
      const proj = projectsData.find(p => p.id === projId);

      if (proj) {
        openModal(`
          <div class="project-modal-details">
            <div style="border-radius: 18px; overflow: hidden; margin-bottom: 1.5rem; max-height: 280px; background: #000;">
              <img src="${proj.image}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <span class="project-status-badge" style="position: static; display: inline-block; margin-bottom: 0.8rem;">${proj.status}</span>
            <h2 style="font-size: 1.8rem; font-weight: 800; color: #171717; margin-bottom: 0.5rem;">${proj.title}</h2>
            <div style="font-size: 0.92rem; color: #FFB92E; font-weight: 700; margin-bottom: 1rem;">${proj.categoryLabel}</div>
            <p style="font-size: 1.05rem; line-height: 1.7; color: #66615C; margin-bottom: 1.5rem;">${proj.fullDescription}</p>

            ${proj.disclaimer ? `<div class="project-disclaimer" style="margin-bottom: 1.5rem;">${proj.disclaimer}</div>` : ''}

            <h4 style="font-size: 1.1rem; font-weight: 800; color: #171717; margin-bottom: 0.6rem;">Key Technical Features</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem;">
              ${proj.features.map(f => `
                <li style="font-size: 0.94rem; color: #66615C; padding-left: 1.2rem; position: relative;">
                  <span style="position: absolute; left: 0; color: #FFB92E; font-weight: 800;">✓</span>
                  ${f}
                </li>
              `).join('')}
            </ul>

            <h4 style="font-size: 1.1rem; font-weight: 800; color: #171717; margin-bottom: 0.6rem;">Technology Stack</h4>
            <div class="project-tech-badges" style="margin-bottom: 2rem;">
              ${proj.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
                <span>View on GitHub</span>
              </a>
              <button class="btn btn-secondary" onclick="document.getElementById('modalCloseBtn').click();">
                <span>Close</span>
              </button>
            </div>
          </div>
        `);
      }
    }
  });
}

/* ==========================================================================
   8. Dynamic Copyright Year
   ========================================================================== */
function initDynamicYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   9. Custom Premium Animated Cursor (Desktop Only)
   ========================================================================== */
function initCustomCursor() {
  // Only enable on desktop with fine mouse pointer
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  const cursorDot = document.getElementById('cursorDot');
  const cursorFollower = document.getElementById('cursorFollower');

  if (!cursorDot || !cursorFollower) return;

  let mouseX = -100;
  let mouseY = -100;
  let followerX = -100;
  let followerY = -100;
  let isVisible = false;
  let moveTimeout = null;

  // Move exact position dot instantly on mousemove & shrink follower while in motion
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      followerX = mouseX;
      followerY = mouseY;
      cursorDot.classList.add('is-visible');
      cursorFollower.classList.add('is-visible');
    }

    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

    // Make follower AND dot shrink in size while actively moving
    cursorFollower.classList.add('is-moving');
    cursorDot.classList.add('is-moving');
    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(() => {
      cursorFollower.classList.remove('is-moving');
      cursorDot.classList.remove('is-moving');
    }, 150);
  }, { passive: true });

  // Smooth 60FPS fluid follower animation loop with linear interpolation (lerp)
  function renderCursor() {
    if (isVisible) {
      // Easing speed for follower (0.2 = fluid, responsive trailing)
      followerX += (mouseX - followerX) * 0.2;
      followerY += (mouseY - followerY) * 0.2;

      cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hide when leaving window, show when entering
  document.addEventListener('mouseleave', () => {
    isVisible = false;
    cursorDot.classList.remove('is-visible');
    cursorFollower.classList.remove('is-visible');
  });

  document.addEventListener('mouseenter', () => {
    isVisible = true;
    cursorDot.classList.add('is-visible');
    cursorFollower.classList.add('is-visible');
  });

  // Click Animation: Shrink and glow on mousedown, restore on mouseup
  window.addEventListener('mousedown', () => {
    cursorDot.classList.add('is-clicking');
    cursorFollower.classList.add('is-clicking');
  });

  window.addEventListener('mouseup', () => {
    cursorDot.classList.remove('is-clicking');
    cursorFollower.classList.remove('is-clicking');
  });

  // Hover state detection across all interactive elements via event delegation
  const interactiveSelector = `
    a, 
    button, 
    input, 
    textarea, 
    select, 
    [role="button"], 
    .btn, 
    .nav-link, 
    .filter-tab-btn, 
    .template-pill-btn, 
    .pill-tag, 
    .skill-pill-card, 
    .project-card, 
    .card-glass, 
    .fact-card, 
    .journey-card, 
    .deco-target-dot, 
    .nav-social-btn, 
    .nav-resume-btn, 
    .modal-close-btn, 
    .view-cert-trigger, 
    .view-project-details-btn
  `;

  document.addEventListener('mouseover', (e) => {
    if (e.target && e.target.closest && e.target.closest(interactiveSelector)) {
      cursorDot.classList.add('is-hovering');
      cursorFollower.classList.add('is-hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target && e.target.closest && e.target.closest(interactiveSelector)) {
      cursorDot.classList.remove('is-hovering');
      cursorFollower.classList.remove('is-hovering');
    }
  });
}

