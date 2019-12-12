function validasi() {
    var email = document.forms["login"]["email"].value;
    var password = document.forms["login"]["password"].value;
    if ((email == "ayti@gmail.com") && (password == "wakwaw")) {
        return true;
    } else {
        alert("email atau password yang anda masukkan salah")
        return false;
    }

}