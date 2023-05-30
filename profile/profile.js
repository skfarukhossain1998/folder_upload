// getting the user details from the local storage.
const user = JSON.parse(localStorage.getItem('user')) || {};

// displaying the user in UI
function displayUser() {
    const userName = document.getElementById('userFullName');
    const userEmail = document.getElementById('userEmail');
    const userPassword = document.getElementById('userPassword');

    userName.innerHTML = `Full Name : ${user.name}`;
    userEmail.innerHTML = `Email : ${user.email}`;
    userPassword.innerHTML = `Password : ${user.password}`;
}
displayUser();

const msg=document.getElementById('success-msg');
const logout=document.getElementById('logout');
logout.addEventListener("click",()=>{
localStorage.removeItem('user');
msg.style.display="block";
setTimeout(()=>{
    window.location.href="./index.html";
},1000);
});


const signup = document.getElementById('signup');
signup.addEventListener('click', () => {
    if(JSON.parse(localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).accessToken!="")){
        window.location.href='./profile.html';
    }
    else{
        window.location.href='./index.html'
    }

});
