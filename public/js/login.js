const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/'); 
      console.log(response)
    } else {
      alert('Failed to log in.');
    }
  }
};



document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);





































// // Define an asynchronous function that handles login form submissions
// const loginFormHandler = async (event) => {

//   // Prevent the default form submission behavior, which is to reload the page
//   event.preventDefault();

//   // Get the values of the email and password input fields and trim any leading or trailing whitespace
//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   // If both email and password have values, send an HTTP POST request to the server
//   if (email && password) {

//     // Send a fetch request to the server with the email and password data in the request body
//     const response = await fetch('/api/users/login', {
//       method: 'POST', // Specify that the request is a POST request
//       body: JSON.stringify({ email, password }), // Convert the email and password data to a JSON string and include it in the request body
//       headers: { 'Content-Type': 'application/json' }, // Set the Content-Type header to indicate that the request body is in JSON format
//     });

//     // If the response status is OK (i.e., the status code is between 200 and 299), redirect the user to the home page
//     if (response.ok) {
//       document.location.replace('/');
//     } else { // If the response status is not OK, display an alert with an error message
//       alert('Failed to log in');
//     }
//   }
// };

// // Add an event listener to the login form that calls the loginFormHandler function when the form is submitted
// document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
