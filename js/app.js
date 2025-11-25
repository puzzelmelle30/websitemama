// Single Page Application for Susanne Silvertant website
// Handles routing and dynamic content loading from separate HTML files

const app = {
  // Page configuration with titles and file paths
  pages: {
    home: {
      title: 'Susanne Silvertant – Keramiek',
      file: 'pages/home.html'
    },
    introductie: {
      title: 'Introductie – Susanne Silvertant',
      file: 'pages/introductie.html'
    },
    werk: {
      title: 'Werk – Susanne Silvertant',
      file: 'pages/werk.html'
    },
    monumentaal: {
      title: 'Monumentaal – Susanne Silvertant',
      file: 'pages/monumentaal.html'
    },
    inopdracht: {
      title: 'In Opdracht – Susanne Silvertant',
      file: 'pages/inopdracht.html'
    },
    kleinwerk: {
      title: 'Klein Werk – Susanne Silvertant',
      file: 'pages/kleinwerk.html'
    },
    werkwijze: {
      title: 'Werkwijze – Susanne Silvertant',
      file: 'pages/werkwijze.html'
    },
    cv: {
      title: 'CV – Susanne Silvertant',
      file: 'pages/cv.html'
    },
    actueel: {
      title: 'Actueel – Susanne Silvertant',
      file: 'pages/actueel.html'
    },
    media: {
      title: 'In de Media – Susanne Silvertant',
      file: 'pages/media.html'
    },
    docentschap: {
      title: 'Docentschap – Susanne Silvertant',
      file: 'pages/docentschap.html'
    },
    workshop: {
      title: 'Workshop – Susanne Silvertant',
      file: 'pages/workshop.html'
    },
    contact: {
      title: 'Contact – Susanne Silvertant',
      file: 'pages/contact.html'
    }
  },
  
  // Load a page by fetching its HTML file
  loadPage: async function(pageName) {
    const page = this.pages[pageName] || this.pages.home;
    const contentDiv = document.getElementById('content');
    
    try {
      // Fetch the HTML file
      const response = await fetch(page.file);
      
      if (!response.ok) {
        throw new Error(`Failed to load page: ${response.status}`);
      }
      
      const html = await response.text();
      
      // Update content
      contentDiv.innerHTML = html;
      
      // Update page title
      document.title = page.title;
      
      // Update active nav state
      this.updateActiveNav(pageName);
      
      // Scroll to top
      window.scrollTo(0, 0);
      
      // Re-attach click handlers for dynamic links (like werk categories)
      this.attachDynamicLinks();
      
      // Initialize slideshow if on home page
      if (pageName === 'home') {
        // Small delay to ensure DOM is ready
        setTimeout(() => this.initSlideshow(), 100);
      }
      
    } catch (error) {
      console.error('Error loading page:', error);
      contentDiv.innerHTML = '<div class="prose"><p>Sorry, de pagina kon niet worden geladen.</p></div>';
    }
  },
  
  // Update active navigation item
  updateActiveNav: function(pageName) {
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('data-page');
      
      // Check if this link should be active
      // Also mark 'werk' as active for monumentaal, inopdracht, kleinwerk
      const isActive = linkPage === pageName || 
                       (linkPage === 'werk' && ['monumentaal', 'inopdracht', 'kleinwerk'].includes(pageName)) ||
                       (pageName === 'home' && !linkPage);
      
      if (isActive) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },
  
  // Attach click handlers to dynamically loaded links
  attachDynamicLinks: function() {
    const dynamicLinks = document.querySelectorAll('#content a[data-page]');
    dynamicLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        window.location.hash = page;
      });
    });
  },
  
  // Initialize the app
  init: function() {
    // Handle navigation clicks
    document.querySelectorAll('.main-nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page') || 'home';
        window.location.hash = page;
      });
    });
    
    // Handle logo click
    document.querySelector('.site-logo a').addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = 'home';
    });
    
    // Handle hash changes (for browser back/forward)
    window.addEventListener('hashchange', () => {
      const page = window.location.hash.slice(1) || 'home';
      this.loadPage(page);
    });
    
    // Load initial page
    const initialPage = window.location.hash.slice(1) || 'home';
    this.loadPage(initialPage);
    
    // Set current year in footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  },
  
  // Initialize slideshow when home page is loaded
  initSlideshow: function() {
    const slides = document.querySelectorAll('.slideshow-slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    const showSlide = (index) => {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    };
    
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
  }
};

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
