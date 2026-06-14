/* =============================================
   NAYEPANKH FOUNDATION — script.js
   ============================================= */

// =============================================
// LOADER
// =============================================
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 2000);
});

// =============================================
// DARK MODE TOGGLE
// =============================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved preference
if (localStorage.getItem('theme') === 'light') {
  body.classList.remove('dark-mode');
}

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// =============================================
// STICKY NAVBAR + SCROLL EFFECTS
// =============================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  // Navbar shrink
  if (window.scrollY > 60) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }

  // Active section highlight
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// =============================================
// HAMBURGER MENU
// =============================================
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksEl?.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    navLinksEl?.classList.remove('open');
  });
});

// =============================================
// SCROLL REVEAL
// =============================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger animation for grid children
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  revealObserver.observe(el);
});

// Add stagger to grid cards
document.querySelectorAll('.programs-grid .program-card, .features-grid .feature-card').forEach((card, i) => {
  card.style.transitionDelay = `${(i % 3) * 0.1}s`;
  revealObserver.observe(card);
});

// =============================================
// COUNTER ANIMATION
// =============================================
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start).toLocaleString();
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.stat-num');
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        animateCounter(counter, target);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObserver.observe(heroStats);

// =============================================
// VISION SLIDER
// =============================================
let currentSlide = 0;
const slides = document.querySelectorAll('.vision-slide');
const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  slides[currentSlide]?.classList.remove('active');
  dots[currentSlide]?.classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide]?.classList.add('active');
  dots[currentSlide]?.classList.add('active');
}

document.getElementById('prevSlide')?.addEventListener('click', () => goToSlide(currentSlide - 1));
document.getElementById('nextSlide')?.addEventListener('click', () => goToSlide(currentSlide + 1));
dots.forEach(dot => dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.slide))));

// Auto-advance
let sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
document.querySelector('.vision-section')?.addEventListener('mouseenter', () => clearInterval(sliderInterval));
document.querySelector('.vision-section')?.addEventListener('mouseleave', () => {
  sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
});

// =============================================
// CONTACT FORM
// =============================================
function submitForm() {
  const name = document.getElementById('fname')?.value.trim();
  const email = document.getElementById('femail')?.value.trim();
  const msg = document.getElementById('fmsg')?.value.trim();

  if (!name || !email || !msg) {
    alert('Please fill in all required fields.');
    return;
  }
  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}

// =============================================
// AI CHATBOT
// =============================================
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const clearChat = document.getElementById('clearChat');

// ---- Knowledge Base ----
const knowledgeBase = [
  // About NayePankh
  {
    keywords: ['what is nayepankh', 'about nayepankh', 'ngo', 'foundation', 'who are you', 'tell me about'],
    response: `**NayePankh Foundation** 🕊️ is one of India's biggest student-led NGOs, with operations in Kanpur, Ghaziabad, and multiple other cities.\n\n**Key facts:**\n- Registered under UP Government\n- 80G & 12A certified (donations are tax-deductible)\n- Founded by **Prashant Shukla** (Founder & President)\n- Mission: Create a society where every child can prosper\n\nWe work in education, skill development, health awareness, and community service.`
  },
  // Volunteering
  {
    keywords: ['volunteer', 'join team', 'how to join', 'be part', 'contribute', 'help'],
    response: `🙋 **How to Volunteer at NayePankh Foundation:**\n\n1. **Fill the form** — Go to our Contact section and select "Volunteer"\n2. **Choose your area** — Education, health, events, social media, tech\n3. **Get onboarded** — Our team will reach out within 48 hours\n4. **Start making a difference!**\n\n**Benefits:**\n✅ Official certificate of volunteering\n✅ Real-world NGO experience\n✅ Network of 200+ passionate students\n✅ Skill development opportunities\n\nWould you like to know more about a specific role?`
  },
  // Internships
  {
    keywords: ['internship', 'intern', 'work experience', 'placement', 'job', 'career opportunity'],
    response: `💼 **Internship Opportunities at NayePankh:**\n\nWe offer internships in:\n- 📱 **Social Media Management** — Create content, grow our presence\n- 💻 **Web Development** — Build and maintain our digital platforms\n- ✍️ **Content Writing** — Blogs, campaigns, grant proposals\n- 📊 **Data & Research** — Impact measurement, surveys\n- 🎨 **Graphic Design** — Posters, brochures, visual campaigns\n- 📣 **Event Management** — Plan and execute ground events\n\n**Duration:** 1–3 months | **Mode:** Remote & On-site\n**Certificate:** Yes, government-registered NGO certificate\n\nApply via the Contact section — select "Internship"!`
  },
  // Web Development
  {
    keywords: ['web development', 'learn coding', 'html', 'css', 'javascript', 'programming', 'developer', 'frontend', 'backend'],
    response: `💻 **Web Development Roadmap for Beginners:**\n\n**Start here (Month 1–2):**\n→ HTML — Structure of web pages\n→ CSS — Styling and layout\n→ JavaScript — Interactivity\n\n**Intermediate (Month 3–4):**\n→ React.js or Vue.js (frontend frameworks)\n→ Git & GitHub (version control)\n\n**Advanced (Month 5–6):**\n→ Node.js / Express (backend)\n→ Databases: MongoDB or MySQL\n\n**Free Resources:**\n📚 freeCodeCamp.org\n📚 The Odin Project\n📚 MDN Web Docs\n📺 YouTube: Traversy Media, Kevin Powell\n\nAt NayePankh, we also accept web dev interns! Interested?`
  },
  // Career guidance
  {
    keywords: ['career', 'future', 'guidance', 'advice', 'what to do', 'path', 'goal', 'study', 'college'],
    response: `🎯 **Career Guidance for Students:**\n\n**Step 1 — Know yourself**\nIdentify what you enjoy: tech, design, writing, management, social work?\n\n**Step 2 — Build skills early**\nStart learning in-demand skills: coding, digital marketing, data analysis\n\n**Step 3 — Get real experience**\nInternships (like at NayePankh!), freelance projects, college fests\n\n**Step 4 — Network**\nLinkedIn profile, attend events, connect with mentors\n\n**Step 5 — Stay consistent**\nSmall daily actions compound into great careers.\n\n💡 *"If we all do something, then together there is no problem we cannot solve!"* — Prashant Shukla, NayePankh`
  },
  // Donation
  {
    keywords: ['donate', 'donation', 'money', 'fund', 'contribute financially', 'payment', 'tax'],
    response: `💛 **How to Donate to NayePankh Foundation:**\n\nYour donation helps us:\n📚 Buy books & stationery for underprivileged children\n🩺 Conduct health & hygiene awareness drives\n🌳 Plant trees in local communities\n🎓 Fund skill development workshops\n\n**Tax Benefits:**\n✅ We are **80G certified** — your donation is **tax-deductible**!\n✅ 12A registered — transparent fund utilization\n\n**How to donate:**\nFill the Contact form, select "Donate", and our team will connect you with secure payment options.\n\nEvery rupee makes a real difference. 🙏`
  },
  // Programs
  {
    keywords: ['program', 'initiative', 'activity', 'work', 'what do you do', 'projects'],
    response: `🌟 **NayePankh Foundation Programs:**\n\n1. 📚 **Education Support** — Free tutoring, books, stationery for underprivileged kids\n2. 🛠️ **Skill Development** — Vocational training, digital literacy workshops\n3. 📢 **Awareness Campaigns** — Health, hygiene, menstrual health education + pad distribution\n4. 🌳 **Community Service** — Tree plantation, cleanliness drives\n5. 🙋 **Volunteer Programs** — 200+ active student volunteers\n6. 💻 **Internship Programs** — For college students in various fields\n\nWhich program interests you the most?`
  },
  // Greeting
  {
    keywords: ['hello', 'hi', 'hey', 'namaste', 'good morning', 'good afternoon', 'howdy', 'hola'],
    response: `👋 **Namaste! Hello!**\n\nWelcome to NayePankh Foundation's AI Assistant! I'm here to help you with:\n\n🎓 Career guidance\n💼 Internship opportunities\n🙋 Volunteering\n📚 Learning resources\n🏛️ Info about our foundation\n\nWhat would you like to explore today?`
  },
  // Thank you
  {
    keywords: ['thank', 'thanks', 'great', 'awesome', 'helpful', 'good', 'nice'],
    response: `😊 You're very welcome! It's a pleasure to help.\n\n*"Service to mankind is the service to god."* — NayePankh Foundation\n\nIf you have more questions, feel free to ask anytime. And if you'd like to make a difference, consider volunteering or donating — every bit helps! 🙏`
  },
  // Certificates / recognition
  {
    keywords: ['certificate', 'recognition', 'newspaper', 'media', 'award', 'registered', '80g', '12a'],
    response: `🏆 **NayePankh Foundation — Credentials:**\n\n✅ **UP Government Registered** NGO\n✅ **80G Certified** — Donor tax exemption available\n✅ **12A Registered** — Legally recognized nonprofit\n✅ **Newspaper Recognition** — Featured in multiple regional and national media outlets\n✅ **Volunteer Certificates** — Issued to all active volunteers\n\nOur certificates and official documents are available for verification. We believe in full transparency!`
  }
];

// Default fallback
const fallbackResponse = `🤔 That's a great question! I don't have a specific answer for that right now, but here's how I can help:\n\n- 🙋 **Volunteering** — Ask "How can I volunteer?"\n- 💼 **Internships** — Ask "Tell me about internships"\n- 💻 **Web Development** — Ask "How to learn web development?"\n- ℹ️ **About us** — Ask "What is NayePankh Foundation?"\n- 💛 **Donate** — Ask "How to donate?"\n\nOr fill out our **Contact Form** and a team member will personally get back to you! 😊`;

function getBotResponse(userMsg) {
  const lower = userMsg.toLowerCase();
  for (const entry of knowledgeBase) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      return entry.response;
    }
  }
  return fallbackResponse;
}

function formatMarkdown(text) {
  // Bold **text**
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Newlines
  text = text.replace(/\n/g, '<br>');
  // Arrow bullets
  text = text.replace(/→ /g, '&rarr; ');
  return text;
}

function appendMessage(content, role) {
  const msg = document.createElement('div');
  msg.className = `msg ${role}`;

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = role === 'bot' ? '🤖' : '👤';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.innerHTML = formatMarkdown(content);

  msg.appendChild(avatar);
  msg.appendChild(bubble);
  chatMessages?.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
  const msg = document.createElement('div');
  msg.className = 'msg bot';
  msg.id = 'typingIndicator';

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = '🤖';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';

  msg.appendChild(avatar);
  msg.appendChild(bubble);
  chatMessages?.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTyping() {
  document.getElementById('typingIndicator')?.remove();
}

function sendMessage(text) {
  const userText = text || chatInput?.value.trim();
  if (!userText) return;

  // Clear input
  if (chatInput) chatInput.value = '';

  // Add user message
  appendMessage(userText, 'user');

  // Show typing animation
  showTyping();

  // Simulate AI thinking delay
  const thinkTime = 800 + Math.random() * 600;
  setTimeout(() => {
    removeTyping();
    const response = getBotResponse(userText);
    appendMessage(response, 'bot');
  }, thinkTime);
}

// Global function for suggestion buttons
window.sendSuggestion = function(text) {
  sendMessage(text);
  // Hide suggestions after first use
  document.getElementById('chatSuggestions').style.display = 'none';
};

chatSend?.addEventListener('click', () => sendMessage());
chatInput?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

clearChat?.addEventListener('click', () => {
  if (chatMessages) {
    chatMessages.innerHTML = '';
    appendMessage('Chat cleared! How can I help you? 😊', 'bot');
    document.getElementById('chatSuggestions').style.display = 'flex';
  }
});

// =============================================
// SMOOTH SCROLL for anchors
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

// =============================================
// BACK TO TOP button
// =============================================
document.querySelector('.back-top')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

console.log('🕊️ NayePankh Foundation — Website Loaded Successfully');