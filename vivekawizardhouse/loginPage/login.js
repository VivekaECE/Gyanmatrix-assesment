const a = localStorage.getItem('email');
const b = localStorage.getItem('pass');

function verify() {
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    if (email.value === a && pass.value === b) {
        location.href = "/homePage/home.html?students"
    } else {
        const errorMessage = document.createElement('div');
        errorMessage.id = "error"
        errorMessage.innerHTML = "INVALID CREDENTIALS"
        errorMessage.style.color = "white"
        errorMessage.style.paddingLeft = '20px'
        document.querySelector('form').appendChild(errorMessage)
    }
}