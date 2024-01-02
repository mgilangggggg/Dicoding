// Membuat variabel untuk setiap elemen view
const loginFormElement = document.querySelector("#loginForm");
const inputEmailElement = document.querySelector("#inputEmail");
const inputPasswordElement = document.querySelector("#inputPassword");

// Membuat variabel untuk menyimpan informasi email dan password
const expectedEmail = "admin@dicoding.com";
const expectedPassword = "superpassword";

// Menambah aksi klik pada button.
loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  // Mendapatkan nilai dari masing - masing input (email dan password) ketika tombol ditekan.
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  // Memastikan bahwa email dan password sesuai dengan nilai yang tersimpan.
  if (email == expectedEmail && password == expectedPassword) {
    // Jika sesuai maka program akan berpindah ke halaman home.
    goToHome();
    // Namun jika tidak sesuai maka akan menampilkan PopUp bahwa input salah.
  } else {
    showPopUp();
  }
});
