// client.js

// This code runs in the browser (client-side)
document.addEventListener('DOMContentLoaded', () => {
  // Fetch data from the server for the first container
  fetch('/api/data')
    .then((response) => response.json())
    .then((data) => {
      // Update the first container with the data
      const dataContainer = document.getElementById('data-container');
      dataContainer.innerHTML = `<p>${data.message}</p>`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  // Fetch data from the server for the second container
  fetch('/api/second-data')
    .then((response) => response.json())
    .then((data) => {
      // Update the second container with the data
      const secondDataContainer = document.getElementById('second-data-container');
      secondDataContainer.innerHTML = `<p>${data.secondMessage}</p>`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
