// data.js

const profileData = {
    name: "Syafiq Hakimi",
    subtitle: "Optometry Lecturer | Content Creator",
    logo: "logo.png" // Pastikan fail gambar 'logo.png' ada dalam folder
};

// BAHAGIAN 1: SENARAI BUTANG (Tengah)
const linkList = [
    // --- LINK PUBLIC (Tak perlu password) ---
    {
        title: "Amsler Grid with Report",
        url: "https://syafiqhakimi95-design.github.io/amsler-grid-app1/",
        icon: "fa-solid fa-table-cells" 
    },
    {
        title: "Ametropia Simulator (+Presbyopia)",
        url: "https://syafiqhakimi95-design.github.io/Ametropia2/",
        icon: "fa-solid fa-eye"
    },
    {
        title: "Astigmatism Simulator",
        url: "https://mshoapps.github.io/astigmatism-simulator/",
        icon: "fa-solid fa-eye-low-vision"
    },
    {
        title: "Prism Simulator",
        url: "https://mshoapps.github.io/prism/",
        icon: "fa-solid fa-play"
    },
    {
        title: "Manual Lensometer Simulator",
        url: "https://syafiqhakimi95-design.github.io/lensometer-apps/",
        icon: "fa-solid fa-crosshairs"
    },
    {
        title: "Aberration Simulator", // Link baru ditambah
        url: "https://syafiqhakimi95-design.github.io/abberation/",
        icon: "fa-solid fa-glasses"
    },

    // --- LINK RAHSIA (Encrypted - Kena Password) ---
    {
        title: "Dichoptic Therapy Games",
        encryptedUrl: "U2FsdGVkX1/8Dm4n9Y9PmD0w78VHupSu6ZWj958XQlAptIxrwzEQgjI8iP3LFKwymx2YnvD2eekt0wHZVXYbG1VmT9jTg3OPNXpKvaf5D44=",
        icon: "fa-solid fa-gamepad"
    },
    {
        title: "Chess DT Games",
        encryptedUrl: "U2FsdGVkX1/WugJqKl49UoztT2vTNPQAFobOQrSjMI3hWgzEqqtnx/svg2lB4ZTk5NznwXI96RgrkxKSK7fxr+mIn/hmNVvNxnlOKFc8W2E=",
        icon: "fa-solid fa-chess-knight"
    },
    {
        title: "JSU generator Table 4",
        encryptedUrl: "U2FsdGVkX18mLPRHGAdpX3JAl4/8M51YrZ8FcoSH3IfQa9yq/7M2bYR6/Wnuv7ySm1+eToTEAN2J1d2ia1secA==",
        icon: "fa-solid fa-table"
    },
    {
        title: "Thesis Citator",
        encryptedUrl: "U2FsdGVkX1/bwNdyqmF/liWwCNpKRIIYn0bIUmyT+7QwPmvOFm654o4pQBtcC6fPuqRDjTk33801oabAOi3G5QujGELGLvJBbIdXTPQkfKY=",
        icon: "fa-solid fa-book-open"
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
