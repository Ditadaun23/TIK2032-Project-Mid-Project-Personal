window.addEventListener('load', () => {
  const modal = document.getElementById('welcome-modal');
  const closeBtn = document.querySelector('.close-button');

  // Tampilkan modal setelah 1 detik
  setTimeout(() => {
    modal.style.display = 'block';
  }, 1000);

  // Tombol tutup
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Klik di luar modal untuk menutup
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcome-modal");
  const closeButton = document.querySelector(".close-button");
  const resumeBtn = document.querySelector(".btn");

  // Tampilkan modal setelah delay
  setTimeout(() => {
    modal.classList.add("show");
  }, 1500);

  // Tombol close modal
  closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // Klik di luar modal menutup modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

  // Alert saat klik "Download Resume"
  resumeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Resume sedang disiapkan. Fitur ini belum aktif ya :)");
  });
});

document.addEventListener("DOMContentLoaded", () => {
const introScreen = document.getElementById("intro-screen");
const nameTarget = document.getElementById("typing-name");
const nameText = "Dita Ramadani Daun";
let index = 0;

// Efek ketik nama
function typeName() {
  if (index < nameText.length) {
    nameTarget.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeName, 100); // kecepatan ketik
  }
}

// Setelah intro selesai, mulai ketik nama
setTimeout(() => {
  introScreen.style.display = "none"; // pastikan splash screen hilang
  typeName();
}, 2500); // delay lebih dari fadeOut
});
