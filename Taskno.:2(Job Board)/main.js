// Sample job data - in a real app, this would come from an API
const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp",
        location: "San Francisco, CA",
        salary: "$90,000 - $120,000",
        type: "Full-time",
        description: "We're looking for an experienced frontend developer...",
        posted: "2 days ago",
        featured: true
    },
    // Add more job objects...
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load featured jobs on home page
    if (document.getElementById('featuredJobs')) {
        loadFeaturedJobs();
    }
});

function loadFeaturedJobs() {
    const container = document.getElementById('featuredJobs');
    const featured = jobs.filter(job => job.featured);
    
    featured.forEach(job => {
        container.appendChild(createJobCard(job));
    });
}

function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.innerHTML = `
        <h3>${job.title}</h3>
        <p class="company">${job.company}</p>
        <p class="location">${job.location}</p>
        <p class="salary">${job.salary}</p>
        <div class="job-meta">
            <span class="type">${job.type}</span>
            <span class="posted">${job.posted}</span>
        </div>
        <a href="detail.html?id=${job.id}" class="btn">View Details</a>
    `;
    return card;
}