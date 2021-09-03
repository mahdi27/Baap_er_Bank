document.getElementById("login-submit").addEventListener("click", function () {
    // get user name
    const userField = document.getElementById("get-user");
    const userEmail = userField.value;
    // get password
    const passwordField = document.getElementById("get-password");
    const userPassword = passwordField.value;
    // cheking
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'bank-index.html';
    }
    else { alert("Not valid"); }
});
