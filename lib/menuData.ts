// D:\mabruxxxx\mabruxfix\lib\menuData.ts

interface MenuItem {
  id: string;
  text: string;
  icon: string; // Nama komponen ikon
  link: string;
  roles: string[]; // Peran pengguna yang diizinkan melihat menu ini
}

export const menuData: MenuItem[] = [
  {
    id: "dashboard-ppih",
    text: "Dashboard PPIH", // Sesuai dengan "Dashboard" untuk PPIH
    icon: "DashboardIcon",
    link: "/ppih/dashboard",
    roles: ["PPIH"],
  },
  {
    id: "dashboard-travel",
    text: "Dashboard Travel", // Sesuai dengan "Dashboard" untuk Travel
    icon: "DashboardIcon",
    link: "/travel/dashboard",
    roles: ["Travel"],
  },
  {
    id: "list-jemaah", // ID baru, lebih deskriptif
    text: "List Jemaah", // Teks menu sesuai permintaan
    icon: "UsersIcon", // Menggunakan ikon Users, bisa diganti jika ada ikon spesifik Jemaah
    link: "/dashboard/users", // Asumsi ini adalah halaman yang menampilkan daftar pengguna/jemaah
    roles: ["PPIH", "Travel"], // Hanya PPIH dan Travel yang bisa melihat list jemaah
  },
  {
    id: "add-jemaah", // ID baru
    text: "Tambah Jemaah", // Teks menu sesuai permintaan
    icon: "ProfileIcon", // Contoh ikon, bisa diganti
    link: "/dashboard/add-user", // Asumsi ini adalah rute ke halaman untuk menambah pengguna/jemaah baru
    roles: ["PPIH", "Travel"], // Hanya PPIH dan Travel yang bisa menambah jemaah
  },
  {
    id: "login",
    text: "Login",
    icon: "ProfileIcon",
    link: "/login",
    roles: ["public"], // Tetap terlihat untuk umum
  },
  // Jika ada menu lain yang relevan untuk Pilgrim atau Mutawali (misalnya Profil Saya), tambahkan di sini
  // {
  //   id: "my-profile",
  //   text: "Profil Saya",
  //   icon: "ProfileIcon",
  //   link: "/profile",
  //   roles: ["Pilgrim", "Mutawali"], // Contoh: hanya terlihat untuk Pilgrim/Mutawali
  // },
];