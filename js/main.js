"use strict";

/*
  NOTE for your final writeup:
  This file was initially scaffolded with help from ChatGPT and then
  customized and extended by David Vargas.
*/

// Data sources
const projects = [
  {
    title: "Fisco-Chat",
    role: "Developer",
    period: "2024",
    description:
      "Chatbot for client assistance in the finance sector, built for an Italian company.",
    tech: ["LangChain", "RAG", "FastText", "Pinecone", "Docker", "GPT-4"],
    link: "https://github.com/fizcochat/RAG_chatbot"
  },
  {
    title: "Ping.Me Personal Assistant Chatbot",
    role: "Developer",
    period: "2025",
    description:
      "WhatsApp-based personal assistant for reminders and everyday tasks.",
    tech: ["GCP", "Node.js", "Twilio", "Stripe", "LangChain", "GPT-4.5"],
    link: "https://github.com/DavidVart/Ping_Me_Code"
  }
  // Add more projects as you go
];

const experience = [
  {
    title: "Co-Founder, Ping (Start-Up)",
    location: "London (Remote)",
    period: "Apr 2025 – Present",
    description:
      "Leading technical architecture and product decisions for a parental assistant startup with 50+ beta users.",
    bullets: [
      "Built and launched MVP in under 3 months.",
      "Led a senior development team of 3 developers across time zones.",
      "Translated investor vision into engineering execution."
    ]
  },
  {
    title: "Robotics Engineer, Robotics & AI Lab",
    location: "Madrid, Spain",
    period: "Oct 2024 – Present",
    description:
      "Developing motion control systems for a quadruped robot using C++ and Python.",
    bullets: [
      "Improved positional accuracy by 15% through iterative tuning.",
      "Delivered multiple hardware iterations with >30% functionality gains."
    ]
  },
  {
    title: "Software Engineer Intern, Axonius",
    location: "Tel Aviv, Israel",
    period: "Jun 2024 – Aug 2024",
    description:
      "Built data visualization tools and monitoring dashboards for clients.",
    bullets: [
      "Cut time-to-insight by 20% with new Python/SQL dashboards.",
      "Developed two code tests integrated into the main repository."
    ]
  }
];

const leadership = [
  {
    title: "Taglit Excel Fellow",
    period: "10-week program",
    description:
      "Selected for a highly competitive leadership program, working with Israeli startups and global executives."
  },
  {
    title: "Google Developer Student Club Officer",
    period: "Ongoing",
    description:
      "Organized technical workshops and hackathons; led campus-wide project initiatives."
  },
  {
    title: "Young Corporate Program (Telefónica + KPMG)",
    period: "Completed",
    description:
      "Immersive program combining strategy consulting with digital innovation case studies."
  }
];

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Helpers to render cards
function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = project.title;
  card.appendChild(title);

  const meta = document.createElement("p");
  meta.className = "card-meta";
  meta.textContent = `${project.role} • ${project.period}`;
  card.appendChild(meta);

  const desc = document.createElement("p");
  desc.textContent = project.description;
  card.appendChild(desc);

  if (project.tech && project.tech.length > 0) {
    const tags = document.createElement("div");
    tags.className = "card-tags";
    project.tech.forEach((t) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = t;
      tags.appendChild(span);
    });
    card.appendChild(tags);
  }

  if (project.link) {
    const link = document.createElement("a");
    link.href = project.link;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "View on GitHub";
    link.className = "btn secondary";
    link.style.marginTop = "0.75rem";
    card.appendChild(link);
  }

  return card;
}

function createExperienceCard(exp) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = exp.title;
  card.appendChild(title);

  const meta = document.createElement("p");
  meta.className = "card-meta";
  meta.textContent = `${exp.location} • ${exp.period}`;
  card.appendChild(meta);

  const desc = document.createElement("p");
  desc.textContent = exp.description;
  card.appendChild(desc);

  if (exp.bullets && exp.bullets.length > 0) {
    const list = document.createElement("ul");
    exp.bullets.forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      list.appendChild(li);
    });
    card.appendChild(list);
  }

  return card;
}

function createLeadershipCard(item) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = item.title;
  card.appendChild(title);

  const meta = document.createElement("p");
  meta.className = "card-meta";
  meta.textContent = item.period;
  card.appendChild(meta);

  const desc = document.createElement("p");
  desc.textContent = item.description;
  card.appendChild(desc);

  return card;
}

function renderSections() {
  const projectsGrid = document.getElementById("projects-grid");
  const experienceGrid = document.getElementById("experience-grid");
  const leadershipGrid = document.getElementById("leadership-grid");

  if (projectsGrid) {
    projects.forEach((p, index) => {
      const card = createProjectCard(p);
      card.style.transitionDelay = `${index * 0.1}s`;
      projectsGrid.appendChild(card);
    });
  }

  if (experienceGrid) {
    experience.forEach((e, index) => {
      const card = createExperienceCard(e);
      card.style.transitionDelay = `${index * 0.1}s`;
      experienceGrid.appendChild(card);
    });
  }

  if (leadershipGrid) {
    leadership.forEach((l, index) => {
      const card = createLeadershipCard(l);
      card.style.transitionDelay = `${index * 0.1}s`;
      leadershipGrid.appendChild(card);
    });
  }
}

function setupNavToggle() {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-navigation");
  const header = document.querySelector(".site-header");

  if (!navToggle || !nav) return;

  function setNavOpen(isOpen) {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-open", isOpen);
    
    // Trap focus when menu is open on mobile
    if (isOpen) {
      // Store the element that opened the menu
      navToggle.dataset.returnFocus = "true";
    }
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setNavOpen(!isOpen);
  });

  // Close menu when link is clicked (on mobile)
  nav.addEventListener("click", (evt) => {
    if (evt.target instanceof HTMLAnchorElement) {
      setNavOpen(false);
    }
  });

  // Close menu with Escape key
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      setNavOpen(false);
      navToggle.focus();
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", (evt) => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    if (isOpen && !nav.contains(evt.target) && !navToggle.contains(evt.target)) {
      setNavOpen(false);
    }
  });
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const messageCounter = document.getElementById("message-counter");

  if (!form || !feedback) return;

  // Helper function to show field error
  function showFieldError(input, message) {
    const formGroup = input.closest(".form-group");
    const errorElement = document.getElementById(`${input.id}-error`);
    
    if (formGroup && errorElement) {
      formGroup.classList.add("has-error");
      formGroup.classList.remove("is-valid");
      errorElement.textContent = message;
    }
  }

  // Helper function to clear field error
  function clearFieldError(input) {
    const formGroup = input.closest(".form-group");
    const errorElement = document.getElementById(`${input.id}-error`);
    
    if (formGroup && errorElement) {
      formGroup.classList.remove("has-error");
      errorElement.textContent = "";
    }
  }

  // Helper function to mark field as valid
  function markFieldValid(input) {
    const formGroup = input.closest(".form-group");
    if (formGroup) {
      formGroup.classList.remove("has-error");
      formGroup.classList.add("is-valid");
    }
  }

  // Validate name field
  function validateName() {
    const value = nameInput.value.trim();
    if (!value) {
      showFieldError(nameInput, "Please enter your name.");
      return false;
    }
    if (value.length < 2) {
      showFieldError(nameInput, "Name must be at least 2 characters.");
      return false;
    }
    markFieldValid(nameInput);
    return true;
  }

  // Validate email field
  function validateEmail() {
    const value = emailInput.value.trim();
    if (!value) {
      showFieldError(emailInput, "Please enter your email.");
      return false;
    }
    if (!EMAIL_REGEX.test(value)) {
      showFieldError(emailInput, "Please enter a valid email address.");
      return false;
    }
    markFieldValid(emailInput);
    return true;
  }

  // Validate message field
  function validateMessage() {
    const value = messageInput.value.trim();
    if (!value) {
      showFieldError(messageInput, "Please enter a message.");
      return false;
    }
    if (value.length < 10) {
      showFieldError(messageInput, "Message must be at least 10 characters.");
      return false;
    }
    markFieldValid(messageInput);
    return true;
  }

  // Update character counter
  function updateCharacterCounter() {
    const length = messageInput.value.length;
    const maxLength = 1000;
    messageCounter.textContent = `${length} / ${maxLength}`;
    
    // Update counter styling based on length
    messageCounter.classList.remove("near-limit", "at-limit");
    if (length >= maxLength) {
      messageCounter.classList.add("at-limit");
    } else if (length >= maxLength * 0.9) {
      messageCounter.classList.add("near-limit");
    }
  }

  // Real-time validation on blur
  nameInput.addEventListener("blur", validateName);
  emailInput.addEventListener("blur", validateEmail);
  messageInput.addEventListener("blur", validateMessage);

  // Clear errors on input
  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim().length > 0) {
      clearFieldError(nameInput);
    }
  });

  emailInput.addEventListener("input", () => {
    if (emailInput.value.trim().length > 0) {
      clearFieldError(emailInput);
    }
  });

  messageInput.addEventListener("input", () => {
    updateCharacterCounter();
    if (messageInput.value.trim().length > 0) {
      clearFieldError(messageInput);
    }
  });

  // Initialize character counter
  updateCharacterCounter();

  // Form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Clear previous feedback
    feedback.textContent = "";

    // Validate all fields
    const nameValid = validateName();
    const emailValid = validateEmail();
    const messageValid = validateMessage();

    if (!nameValid || !emailValid || !messageValid) {
      feedback.textContent = "Please correct the errors above.";
      feedback.style.color = "#b91c1c";
      
      // Focus first invalid field
      if (!nameValid) nameInput.focus();
      else if (!emailValid) emailInput.focus();
      else if (!messageValid) messageInput.focus();
      
      return;
    }

    // Success
    feedback.textContent = "Thank you! Your message has been recorded.";
    feedback.style.color = "#047857";
    
    // Reset form and clear all validations
    form.reset();
    updateCharacterCounter();
    
    // Clear all validation states
    document.querySelectorAll(".form-group").forEach(group => {
      group.classList.remove("has-error", "is-valid");
    });
  });
}

function setCurrentYear() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
}

// Intersection Observer for fade-in animations
function setupIntersectionObserver() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  if (prefersReducedMotion) {
    // Make all sections and cards visible immediately
    document.querySelectorAll(".section, .card").forEach(el => {
      el.classList.add("is-visible");
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll(".section").forEach(section => {
    observer.observe(section);
  });

  // Observe all cards
  document.querySelectorAll(".card").forEach(card => {
    observer.observe(card);
  });
}

// Scroll spy for navigation
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".site-nav a[href^='#']");
  
  const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
  const offset = headerHeight + 50;

  function updateActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop - offset && 
          window.scrollY < sectionTop + sectionHeight - offset) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
      
      const href = link.getAttribute("href");
      if (href === `#${currentSection}`) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // Initial call
}

// Smooth scroll with offset
function setupSmoothScroll() {
  const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      
      // Don't prevent default for skip link
      if (href === "#main-content") {
        return;
      }
      
      e.preventDefault();
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update focus for accessibility
        targetElement.setAttribute("tabindex", "-1");
        targetElement.focus();
        targetElement.addEventListener("blur", () => {
          targetElement.removeAttribute("tabindex");
        }, { once: true });
      }
    });
  });
}

// Back to top button
function setupBackToTop() {
  const backToTopBtn = document.querySelector(".back-to-top");
  
  if (!backToTopBtn) return;

  // Show/hide button based on scroll position
  function toggleBackToTopButton() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("is-visible");
    } else {
      backToTopBtn.classList.remove("is-visible");
    }
  }

  window.addEventListener("scroll", toggleBackToTopButton);
  toggleBackToTopButton(); // Initial check

  // Scroll to top on click
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
    // Focus skip link after scrolling to top
    setTimeout(() => {
      const skipLink = document.querySelector(".skip-link");
      if (skipLink) {
        skipLink.focus();
      }
    }, 500);
  });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  renderSections();
  setupNavToggle();
  setupContactForm();
  setCurrentYear();
  setupIntersectionObserver();
  setupScrollSpy();
  setupSmoothScroll();
  setupBackToTop();
});
