// D:\mabruxxxx\mabruxfix\lib\menuData.ts

interface MenuItem {
  id: string;
  text: string;
  icon: string; // Nama komponen ikon (menggunakan ikon yang sudah ada di Sidebar.tsx)
  link: string;
  roles: string[]; // Peran pengguna yang diizinkan melihat menu ini
}

export const menuData: MenuItem[] = [
  {
    id: "home",
    text: "Home",
    icon: "DashboardIcon", // Menggunakan ikon yang sudah ada
    link: "/",
    roles: ["public"], // Terlihat untuk semua orang
  },
  {
    id: "our-division",
    text: "Our Division",
    icon: "UsersIcon", // Menggunakan ikon yang sudah ada
    link: "#", // Mengubah link kosong menjadi # karena submenu tidak diimplementasikan
    roles: ["public"],
  },
  {
    id: "company-profile",
    text: "Company Profile",
    icon: "ProfileIcon", // Menggunakan ikon yang sudah ada
    link: "#", // Mengubah link kosong menjadi #
    roles: ["public"],
  },
  {
    id: "join-us",
    text: "Join Us",
    icon: "ProfileIcon", // Menggunakan ikon yang sudah ada
    link: "#", // Mengubah link kosong menjadi #
    roles: ["public"],
  },
  {
    id: "blog-news",
    text: "Blog & News",
    icon: "DashboardIcon", // Menggunakan ikon yang sudah ada
    link: "news/latest",
    roles: ["public"],
  },
  {
    id: "gallery",
    text: "Gallery",
    icon: "UsersIcon", // Menggunakan ikon yang sudah ada
    link: "gallery",
    roles: ["public"],
  },
  {
    id: "contact-us",
    text: "Contact Us",
    icon: "ProfileIcon", // Menggunakan ikon yang sudah ada
    link: "contact-us",
    roles: ["public"],
  },
  {
    id: "language-switcher", // ID untuk menu "globe" (pemilih bahasa)
    text: "Language", // Teks untuk ikon globe
    icon: "DashboardIcon", // Placeholder, Anda bisa membuat ikon globe khusus atau pakai react-icons
    link: "#", // Biasanya pemilih bahasa tidak mengarah ke link baru, tapi membuka modal/dropdown
    roles: ["public"],
  },
  {
    id: "admin-dashboard", // ID untuk menu "user" (admin dashboard)
    text: "Admin Dashboard", // Teks untuk ikon user
    icon: "ProfileIcon", // Placeholder, Anda bisa membuat ikon user khusus atau pakai react-icons
    link: "admin/dashboard",
    roles: ["Admin"], // Mengasumsikan ada peran 'Admin' baru untuk ini
  },
  // Catatan: Jika Anda ingin kembali ke menu Dashboard PPIH/Travel yang sebelumnya,
  // Anda harus menambahkannya kembali ke daftar ini dan menyesuaikan roles-nya.
  // Contoh:
  // {
  //   id: "dashboard-ppih",
  //   text: "Dashboard PPIH",
  //   icon: "DashboardIcon",
  //   link: "/ppih/dashboard",
  //   roles: ["PPIH"],
  // },
  // {
  //   id: "dashboard-travel",
  //   text: "Dashboard Travel",
  //   icon: "DashboardIcon",
  //   link: "/travel/dashboard",
  //   roles: ["Travel"],
  // },
];