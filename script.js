// Function to store the user's theme preference in localStorage
function storeUserPreference(preference) {
    localStorage.setItem('theme', preference);
  }
  
  // Function to get the user's theme preference from localStorage
  function getUserPreference() {
    return localStorage.getItem('theme');
  }
  
  // Function to apply the theme from localStorage
  function applyStoredTheme() {
    const theme = getUserPreference();
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }
  
  // Apply stored theme when the page loads
  applyStoredTheme();
  
  // Handle dark mode toggle button click
  document.getElementById('toggleThemeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Store the new theme preference
    if (document.body.classList.contains('dark-mode')) {
      storeUserPreference('dark');
    } else {
      storeUserPreference('light');
    }
  });
  
  // Handle the animation of the box
  document.getElementById('animatedBox').addEventListener('click', function() {
    this.classList.add('animated');
    // Remove the animation class after it finishes to allow retriggering
    setTimeout(() => {
      this.classList.remove('animated');
    }, 1000);
  });
  