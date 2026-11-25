/**
 * Hebil Ege Coşkun - CV Website
 * Main JavaScript file for interactivity
 */

(function() {
  'use strict';

  // ==========================================================================
  // DOM Elements
  // ==========================================================================
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  const navLinks = document.querySelectorAll('.nav__link');
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const animatedElements = document.querySelectorAll('[data-animate]');
  const statNumbers = document.querySelectorAll('[data-count]');
  const skillBars = document.querySelectorAll('.skill-item__progress');
  const contactForm = document.querySelector('.contact__form');

  // ==========================================================================
  // Theme Management
  // ==========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeToggle(theme);
  }

  function updateThemeToggle(theme) {
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', isDark);
    themeToggle.setAttribute('aria-label', isDark ? 'Açık temaya değiştir' : 'Koyu temaya değiştir');
  }

  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  }

  // ==========================================================================
  // Mobile Navigation
  // ==========================================================================
  function toggleNav() {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeNav() {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // ==========================================================================
  // Header Scroll Effect
  // ==========================================================================
  let lastScrollY = window.scrollY;
  let ticking = false;

  function handleHeaderScroll() {
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
      header.style.background = 'rgba(var(--color-bg-alt), 0.95)';
      header.style.boxShadow = '0 4px 20px var(--color-shadow)';
    } else {
      header.style.background = 'rgba(var(--color-bg-alt), 0.9)';
      header.style.boxShadow = 'none';
    }
    
    lastScrollY = scrollY;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(handleHeaderScroll);
      ticking = true;
    }
  }

  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================
  function handleAnchorClick(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        closeNav();
      }
    }
  }

  // ==========================================================================
  // Intersection Observer for Animations
  // ==========================================================================
  function initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Trigger counter animation for stats
          if (entry.target.querySelector('[data-count]')) {
            animateCounters(entry.target);
          }
          // Trigger skill bar animations
          if (entry.target.querySelector('.skill-item__progress')) {
            animateSkillBars(entry.target);
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
  }

  // ==========================================================================
  // Counter Animation
  // ==========================================================================
  function animateCounters(container) {
    const counters = container.querySelectorAll('[data-count]');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'), 10);
      const duration = 2000;
      const startTime = performance.now();
      
      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const current = Math.floor(easedProgress * target);
        counter.textContent = current;
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }
      
      requestAnimationFrame(updateCounter);
    });
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  // ==========================================================================
  // Skill Bar Animation
  // ==========================================================================
  function animateSkillBars(container) {
    const bars = container.querySelectorAll('.skill-item__progress');
    bars.forEach((bar, index) => {
      setTimeout(() => {
        const width = bar.style.width;
        bar.style.width = '0';
        requestAnimationFrame(() => {
          bar.style.transition = 'width 1s ease-out';
          bar.style.width = width;
        });
      }, index * 100);
    });
  }

  // ==========================================================================
  // Active Navigation Link on Scroll
  // ==========================================================================
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + header.offsetHeight + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
        });
      }
    });
  }

  // ==========================================================================
  // Contact Form Handling
  // ==========================================================================
  function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path></svg> Gönderiliyor...';
    
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        showToast('Mesajınız başarıyla gönderildi!', 'success');
        contactForm.reset();
      } else {
        throw new Error('Form gönderilemedi');
      }
    })
    .catch(() => {
      showToast('Bir hata oluştu. Lütfen tekrar deneyin.', 'error');
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    });
  }

  // ==========================================================================
  // Toast Notification
  // ==========================================================================
  function showToast(message, type = 'info') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = message;
    
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      padding: '1rem 1.5rem',
      borderRadius: 'var(--radius-md)',
      background: type === 'success' ? 'var(--color-success)' : 
                  type === 'error' ? 'var(--color-error)' : 'var(--color-primary)',
      color: 'white',
      fontWeight: '500',
      boxShadow: '0 10px 30px var(--color-shadow-hover)',
      zIndex: 'var(--z-toast)',
      transform: 'translateY(100px)',
      opacity: '0',
      transition: 'transform 0.3s ease, opacity 0.3s ease'
    });
    
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });
    
    setTimeout(() => {
      toast.style.transform = 'translateY(100px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // ==========================================================================
  // Keyboard Navigation
  // ==========================================================================
  function handleKeydown(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      closeNav();
      navToggle.focus();
    }
    
    // Tab trapping in mobile menu
    if (e.key === 'Tab' && navMenu.classList.contains('is-open')) {
      const focusableElements = navMenu.querySelectorAll('a, button');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  // ==========================================================================
  // Performance: Debounce
  // ==========================================================================
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ==========================================================================
  // Initialize Everything
  // ==========================================================================
  function init() {
    // Theme
    initTheme();
    themeToggle.addEventListener('click', toggleTheme);
    
    // Navigation
    navToggle.addEventListener('click', toggleNav);
    navLinks.forEach(link => link.addEventListener('click', handleAnchorClick));
    
    // Scroll effects
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scroll', debounce(updateActiveNavLink, 100), { passive: true });
    
    // Animations
    initScrollAnimations();
    
    // Form
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Keyboard
    document.addEventListener('keydown', handleKeydown);
    
    // Handle resize for mobile menu
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('is-open')) {
        closeNav();
      }
    });
    
    // Focus visible polyfill behavior
    document.addEventListener('mousedown', () => {
      document.body.classList.add('using-mouse');
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.remove('using-mouse');
      }
    });
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();