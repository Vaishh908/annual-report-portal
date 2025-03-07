// Simulating database storage with an array
const reports = [];

// Handle file upload
document.getElementById('uploadForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file && file.type === 'application/pdf') {
    reports.push({
      name: file.name,
      url: URL.createObjectURL(file), // Creates a temporary URL for the uploaded file
    });

    document.getElementById('uploadMessage').textContent = 'Report uploaded successfully!';
    fileInput.value = ''; // Clear the file input
  } else {
    document.getElementById('uploadMessage').textContent = 'Please upload a valid PDF file.';
  }
});

// Show all reports
document.getElementById('showReportsBtn').addEventListener('click', function () {
  const reportList = document.getElementById('reportList');
  reportList.innerHTML = ''; // Clear previous entries

  if (reports.length > 0) {
    reports.forEach(report => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="${report.url}" target="_blank">${report.name}</a>`;
      reportList.appendChild(listItem);
    });
  } else {
    reportList.innerHTML = '<li>No reports available</li>';
  }
});
