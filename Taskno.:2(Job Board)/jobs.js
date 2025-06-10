// Load job details on detail page
if (document.querySelector('.job-detail')) {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id');
    const job = jobs.find(j => j.id == jobId);
    
    if (job) {
        document.getElementById('jobTitle').textContent = job.title;
        document.getElementById('jobCompany').textContent = job.company;
        document.getElementById('jobLocation').textContent = job.location;
        document.getElementById('jobDescription').textContent = job.description;
        document.getElementById('jobSalary').textContent = job.salary;
        document.getElementById('jobType').textContent = job.type;
        document.getElementById('jobPosted').textContent = job.posted;
    }
}

// Load all jobs on listings page
if (document.getElementById('allJobs')) {
    const container = document.getElementById('allJobs');
    
    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job-card';
        jobElement.innerHTML = `
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
        container.appendChild(jobElement);
    });
}
