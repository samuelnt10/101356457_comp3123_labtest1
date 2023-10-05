// Function to create a resolved Promise after a timeout
function resolvedPromise(message) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message);
      }, 500);
    });
  }
  
  // Function to create a rejected Promise after a timeout
  function rejectedPromise(errorMessage) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(errorMessage));
      }, 500);
    });
  }
  
  // Calling the resolvedPromise and handling the result
  resolvedPromise("Promise resolved successfully")
    .then(result => {
      console.log("Resolved Promise Result:", result);
    })
    .catch(error => {
      console.error("Error in Resolved Promise:", error);
    });
  
  // Calling the rejectedPromise and handling the result
  rejectedPromise("Promise rejected with an error")
    .then(result => {
      console.log("Resolved Promise Result:", result); // This will not execute
    })
    .catch(error => {
      console.error("Error in Rejected Promise:", error.message);
    });
  