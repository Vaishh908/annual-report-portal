const reports = {
    research: [
      { name: 'Research Paper 1', url: 'files/research-paper-1.pdf' },
      { name: 'Research Paper 2', url: 'files/research-paper-2.pdf' },
    ],
    sports: [
      { name: 'Sports Report 1', url: 'files/sports-report-1.pdf' },
      { name: 'Sports Report 2', url: 'files/sports-report-2.pdf' },
    ],
    environment: [
      { name: 'Environment Report 1', url: 'files/environment-report-1.pdf' },
      { name: 'Environment Report 2', url: 'files/environment-report-2.pdf' },
    ],
    education: [
      { name: 'Education Report 1', url: 'files/education-report-1.pdf' },
      { name: 'Education Report 2', url: 'files/education-report-2.pdf' },
    ],
  };
  
  // Function to display reports based on category
  function showReports(category) {
    const container = document.getElementById('reports-container');
    const title = document.getElementById('category-title');
  
    // Update the title
    title.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Reports`;
  
    // Clear previous content
    container.innerHTML = '';
  
    // Display reports if they exist
    if (reports[category] && reports[category].length > 0) {
      reports[category].forEach((report, index) => {
        const reportItem = document.createElement('div');
        reportItem.classList.add('report-item');
        reportItem.innerHTML = `
          <p><strong>${index + 1}. ${report.name}</strong></p>
          <a href="${report.url}" target="_blank">View Report</a>
        `;
        container.appendChild(reportItem);
      });
    } else {
      container.innerHTML = '<p>No reports available for this category.</p>';
    }
  }
  