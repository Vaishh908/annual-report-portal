const reports = {
    research: [],
    sports: [],
    environment: [],
    education: [],
  };
  
  document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const reportType = document.getElementById('reportType').value;
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
  
    if (reportType && file && file.type === 'application/pdf') {
      // Add the report to the appropriate category
      reports[reportType].push({
        name: file.name,
        url: URL.createObjectURL(file),
      });
  
      alert(`Report uploaded successfully under category: ${reportType}`);
      fileInput.value = '';
    } else {
      alert('Please select a category and upload a valid PDF file.');
    }
  });
  
  // Function to show reports of a selected category
  function showReports(category) {
    const container = document.getElementById('reports-container');
    const title = document.getElementById('category-title');
  
    // Update the title
    title.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Reports`;
  
    // Clear previous content
    container.innerHTML = '';
  
    // Display reports if they exist
    if (reports[category].length > 0) {
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
  