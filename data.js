// FAIL: data.js

const profileData = {
    name: "Syafiq Hakimi",
    subtitle: "Optometry Lecturer | Content Creator",
    logo: "logo.png" // Pastikan fail gambar ada
};

// BAHAGIAN 1: BUTANG UTAMA (Tengah)
const linkList = [
    // --- LINK PUBLIC (Tak perlu password) ---
    {
        title: "Amsler Grid with Report",
        url: "https://syafiqhakimi95-design.github.io/amsler-grid-app1/",
        icon: "fa-solid fa-table-cells" // Ikon Grid
    },
    {
        title: "Ametropia Simulator (+Presbyopia)",
        url: "https://syafiqhakimi95-design.github.io/Ametropia2/",
        icon: "fa-solid fa-eye" // Ikon Mata
    },
    {
        title: "Astigmatism Simulator",
        url: "https://mshoapps.github.io/astigmatism-simulator/",
        icon: "fa-solid fa-eye-low-vision" // Ikon Kabur
    },
    {
        title: "Prism Simulator",
        url: "https://mshoapps.github.io/prism/",
        icon: "fa-solid fa-play" // Bentuk segitiga (Prism)
    },
    {
        title: "Manual Lensometer Simulator",
        url: "https://syafiqhakimi95-design.github.io/lensometer-apps/",
        icon: "fa-solid fa-crosshairs" // Ikon Target Lensometer
    },

    // --- LINK RAHSIA (Encrypted - Kena Password) ---
    {
        title: "Dichoptic Therapy Games",
        // Kod rahsia yang Cikgu bagi:
        encryptedUrl: "U2FsdGVkX1/8Dm4n9Y9PmD0w78VHupSu6ZWj958XQlAptIxrwzEQgjI8iP3LFKwymx2YnvD2eekt0wHZVXYbG1VmT9jTg3OPNXpKvaf5D44=",
        icon: "fa-solid fa-gamepad" // Ikon Game
    },
    {
        title: "Chess DT Games",
        // Kod rahsia yang Cikgu bagi:
        encryptedUrl: "U2FsdGVkX1/WugJqKl49UoztT2vTNPQAFobOQrSjMI3hWgzEqqtnx/svg2lB4ZTk5NznwXI96RgrkxKSK7fxr+mIn/hmNVvNxnlOKFc8W2E=",
        icon: "fa-solid fa-chess-knight" // Ikon Chess
    }
];

// BAHAGIAN 2: MEDIA SOSIAL (Icon Kecil di Bawah)
const socialList = [
    {
        url: "https://www.tiktok.com/@syafiqkimiii",
        icon: "fa-brands fa-tiktok"
    },
    {
        url: "https://www.linkedin.com/in/syafiqhakimiii/",
        icon: "fa-brands fa-linkedin"
    }
];

export { profileData, linkList, socialList };