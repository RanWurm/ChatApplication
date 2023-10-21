
const users = {};
users["test"] = "test";

function signUp(username, password) {
    if (users[username]) {
        return "Username already exists. Please choose another one.";
    } else {
        users[username] = password;
        return "Sign-up successful!";
    }
}

function signIn(username, password) {
    if (users[username] === password) {
        return "Sign-in successful!";
    }
    return "Invalid username or password. Please try again.";
}
function main() {

}



const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const signInResult = signInCheck(username, password);
    if (signInResult === "Sign-in successful!") {
        console.log("Sign-in successful!");

    }
    else {
        event.preventDefault();
        alert("Invalid username or password. Please try again.");
    }
});
