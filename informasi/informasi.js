// Tombol scroll ke profil
document.getElementById('btnProfil').addEventListener('click', () => {
    document.getElementById('profil').scrollIntoView({behavior: 'smooth'});
});

// Modal jurusan & fasilitas
function openModal(title, desc) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('modal').style.display = 'flex';
}

// Tutup modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Tutup modal kalau klik di luar box
window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        closeModal();
    }
});
