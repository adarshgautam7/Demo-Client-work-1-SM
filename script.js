/**
 * SMRITI - Civil Engineering Portfolio
 * Interactive Functionality & Dynamic Modal Management
 */

// Project Data for Case Studies
const projectData = {
  1: {
    badge: "01",
    category: "Structural Design",
    title: "Residential Building Design (G+3)",
    image: "assets/images/project_residential.jpg",
    overview: "Comprehensive structural and architectural design of a G+3 modern multi-family residential building. The design optimizes space utilization, seismic resistance, and material efficiency adhering strictly to Indian Standard Codes.",
    highlights: [
      "Dead load, Live load, and Wind load calculations as per IS 875 (Part 1, 2, 3)",
      "Reinforced Concrete (RCC) frame analysis and member sizing using Limit State Design",
      "Detailed drafting of structural column grid, beam framing plans, and foundation layouts in AutoCAD",
      "Preparation of Bar Bending Schedules (BBS) for foundation footings and shear walls"
    ],
    codes: "IS 456:2000, IS 875 (Parts 1-3), IS 1893:2016",
    tools: "AutoCAD 2024, STAAD.Pro, MS Excel",
    deliverables: "Architectural Plans, Structural Framings, BBS, Cost Estimation"
  },
  2: {
    badge: "02",
    category: "Structural Engineering",
    title: "G+5 Building Structural Analysis & Seismic Evaluation",
    image: "assets/images/project_structural.jpg",
    overview: "3D finite element structural modeling and dynamic response spectrum analysis of a G+5 commercial multi-story building located in Seismic Zone IV.",
    highlights: [
      "Generated 3D node and beam-column wireframe geometry in STAAD.Pro with rigid diaphragm behavior",
      "Conducted static equivalent and dynamic response spectrum analysis for earthquake forces",
      "Evaluated critical bending moments, shear forces, story drifts, and torsional irregularities",
      "Optimized column cross-sections and reinforcement percentage to minimize total steel tonnage by 12%"
    ],
    codes: "IS 1893:2016, IS 13920:2016 (Ductile Detailing), IS 456:2000",
    tools: "STAAD.Pro Connect Edition, MS Excel, AutoCAD",
    deliverables: "Analysis Output Reports, Bending Moment Diagrams, Column Schedules"
  },
  3: {
    badge: "03",
    category: "AutoCAD Drafting",
    title: "Comprehensive Architectural Drawing Set",
    image: "assets/images/project_blueprint.jpg",
    overview: "Full set of working drawings for a contemporary 2-storey residential villa, including master floor plans, longitudinal cross-sections, elevation treatments, and electrical/plumbing layouts.",
    highlights: [
      "Precise dimensioning, standard architectural hatchings, and layer organization adhering to AIA CAD standards",
      "Integrated door and window schedules, staircase detailing with riser-tread calculations",
      "Site layout and setback clearance compliance as per municipal building bylaws",
      "Exported high-resolution print layouts with title blocks and scale ratios (1:50, 1:100)"
    ],
    codes: "National Building Code (NBC) 2016, Municipal Bylaws",
    tools: "AutoCAD 2024 (2D & 3D Drafting)",
    deliverables: "Complete 14-Sheet Working Drawing Set, Print Layouts (PDF)"
  },
  4: {
    badge: "04",
    category: "BIM Modeling",
    title: "BIM Model & Clash Detection &ndash; Academic Building",
    image: "assets/images/project_bim.jpg",
    overview: "LOD 300 Building Information Modeling (BIM) for a multi-functional academic university facility. The model unifies architectural envelopes, structural framing, and MEP ductwork for seamless coordination.",
    highlights: [
      "Parametric modeling of concrete waffle slabs, curtain walls, and central multi-level atrium in Revit",
      "Coordinated MEP HVAC routing and plumbing shafts with structural beams",
      "Conducted automated clash detection in Autodesk Navisworks, identifying and resolving 38 interferences prior to construction",
      "Generated automated quantity takeoffs (QTO) and bill of materials directly from Revit schedules"
    ],
    codes: "ISO 19650 BIM Standards, NBC 2016",
    tools: "Autodesk Revit 2024, Navisworks Manage, BIM 360",
    deliverables: "Federated 3D BIM Model (.rvt / .nwc), Clash Matrix Report, QTO Schedule"
  },
  5: {
    badge: "05",
    category: "Quantity Surveying",
    title: "Quantity Estimation & Costing for Multi-Storey Project",
    image: "assets/images/project_costing.jpg",
    overview: "Accurate Bill of Quantities (BOQ) preparation and item-rate cost estimation for a residential civil construction project based on standard Schedule of Rates (DSR / CPWD).",
    highlights: [
      "Calculated quantities for Earthwork, Substructure (PCC, RCC Footings), Superstructure, and Finishing works",
      "Formulated dynamic MS Excel spreadsheets for Bar Bending Schedules (BBS) and steel weight calculations",
      "Performed detailed Rate Analysis for M25/M30 concrete, formwork shuttering, and Fe500 reinforcement steel",
      "Prepared contractor billing abstract and cumulative cost curves for project budget tracking"
    ],
    codes: "CPWD Specifications, IS 1200 (Methods of Measurement)",
    tools: "Microsoft Excel (Advanced Macros & Formulas), AutoCAD (Takeoffs)",
    deliverables: "BOQ Excel Sheet, Material Reconciliation Abstract, Cost Summary Report"
  }
};

// Open Case Study Modal
function openCaseStudy(id) {
  const data = projectData[id];
  if (!data) return;

  document.getElementById('modal-badge').textContent = data.badge;
  document.getElementById('modal-category').textContent = data.category;
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-image').src = data.image;
  document.getElementById('modal-image').alt = data.title;
  document.getElementById('modal-overview').textContent = data.overview;
  
  const highlightsList = document.getElementById('modal-highlights');
  highlightsList.innerHTML = '';
  data.highlights.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    highlightsList.appendChild(li);
  });

  document.getElementById('modal-codes').textContent = data.codes;
  document.getElementById('modal-tools').textContent = data.tools;
  document.getElementById('modal-deliverables').textContent = data.deliverables;

  const modal = document.getElementById('case-study-modal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Close Case Study Modal
function closeModal() {
  const modal = document.getElementById('case-study-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Open Certificate Modal
function openCertModal(title, issuer, year, desc) {
  document.getElementById('cert-modal-title').textContent = title;
  document.getElementById('cert-modal-issuer').textContent = `Issued by ${issuer} • ${year}`;
  document.getElementById('cert-modal-desc').textContent = desc;

  const modal = document.getElementById('cert-modal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Close Certificate Modal
function closeCertModal() {
  const modal = document.getElementById('cert-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Handle Form Submission with Web3Forms
async function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '<span>Send Message</span>';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    showToast("Please fill out all required fields.");
    return;
  }

  const accessKey = form.access_key ? form.access_key.value : '';
  if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
    showToast("⚠️ Add your Web3Forms Access Key to index.html to receive emails.");
    return;
  }

  // Button loading state
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span>';
  }

  try {
    const formData = new FormData(form);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      showToast(`Thank you, ${name}! Your message has been sent successfully.`);
      form.reset();
    } else {
      showToast(data.message || "Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error('Web3Forms Error:', error);
    showToast("Network error. Please try again or email directly.");
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }
  }
}

// Toast Notification System
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Theme Toggle (Light Drafting vs Dark Blueprint)
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('smriti_theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'blueprint' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('smriti_theme', newTheme);
    showToast(`Switched to ${newTheme === 'blueprint' ? 'Dark Blueprint' : 'Drafting Light'} view.`);
  });
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('mobile-open');
    });
  });
}

// Scroll Spy for Navigation Links
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Global Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupMobileMenu();
  setupScrollSpy();

  // Close modals when clicking outside container
  window.addEventListener('click', (e) => {
    const caseModal = document.getElementById('case-study-modal');
    const certModal = document.getElementById('cert-modal');
    if (e.target === caseModal) closeModal();
    if (e.target === certModal) closeCertModal();
  });

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeCertModal();
    }
  });
});
