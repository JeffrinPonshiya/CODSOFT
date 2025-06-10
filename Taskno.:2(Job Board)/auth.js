// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real app, you would validate and send to server
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // For demo, just store in localStorage
    localStorage.setItem('user', JSON.stringify({
        email,
        role: 'employer' // or 'candidate'
    }));
    
    // Redirect to dashboard
    window.location.href = '../employer/dashboard.html';
});

// Handle logout
document.getElementById('logout')?.addEventListener('click', function() {
    localStorage.removeItem('user');
    window.location.href = '../index.html';
});