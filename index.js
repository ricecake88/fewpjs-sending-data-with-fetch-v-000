// Add your code here
<<<<<<< HEAD
function handleJson(userObject) {
  p = document.createElement("p")
  console.log(userObject.id)
  p.textContent = userObject.id;
  outputArea = document.getElementById("outputId");
  outputArea.appendChild(p)
  
  
}

=======
>>>>>>> a8e554408cebb32d8b66bafba2831cab0fe97395
function submitData(username, userEmail) {
  let userData = {
    'name': username,
    'email': userEmail
  };
  let configObject = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "POST",
    body: JSON.stringify(userData)
  };
<<<<<<< HEAD
  
   return fetch("http://localhost:3000/users", configObject)
=======

  function handleJson(userObject) {
    li = document.createElement(li)
    li.textContent = userObject.id.value
    outputArea = document.getElementById("outputId");
    outputArea.appendChild(li)


  }

  return fetch("http://localhost:3000/users", configObject)
>>>>>>> a8e554408cebb32d8b66bafba2831cab0fe97395
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
<<<<<<< HEAD
      handleJson(object)
=======
      alert(object);
      handleJson(object);
>>>>>>> a8e554408cebb32d8b66bafba2831cab0fe97395
    })
    .catch(function(error) {
      error = document.createElement("p")
      error.textContent = error.message;
      errorOutputArea = document.getElementById("error");
      errorOutputArea.appendChild(error);
    })
}
