const signupBtn = document.getElementById("signup-form");

signupBtn.addEventListener("submit", (event) => {
    event.preventDefault();
    // Retrieve the values of the input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const msg = document.getElementById("msg");
    // other user details

    // Create a user object with these values
    const user = {
        name,
        email,
        password,
        accessToken: generateAccessToken()
       
    };

    // generate token
    function generateAccessToken() {
        var alpha = "0123456789ABCDEFGHIJabcdefghij";
        var token = "";
        for (var i = 0; i < 16; i++) {
            token += alpha.charAt(Math.floor(Math.random() * 30));
        }
        return token;
    }



    // Validating the form.
  
    if(user.name === "" || user.email === "" || user.password === "") {
        msg.innerHTML = "Error: All the fields are mandatory";
        msg.style.display = "block";
        msg.style.color = "red";
        return;
    } else if(user.password !== confirmPassword) {
        msg.innerHTML = "Password and Confirm password not matched.";
        msg.style.display = "block";
        msg.style.color = "red";
        return;
    } else {
        msg.innerHTML = "Signup successful!";
        msg.style.display = "block";
        msg.style.color = "green";
        // Store the user's state in the local storage
        localStorage.setItem("user", JSON.stringify(user));

        // Show success message and redirect to profile page
        
        setTimeout(() => {
            window.location.href = "./profile.html";
        }, 1000); // redirect after 1 second

    }


});

        


// redirection the page according to user in database
const profile = document.getElementById('profile');
profile.addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem('user')) || false;
    if(user) {
        window.location.href = "./profile.html";
    } else {
        window.location.href = "./index.html";
    }
}); 


