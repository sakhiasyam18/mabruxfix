// D:\mabruxxxx\mabruxfix\components\Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuData } from '../lib/menuData'; // Pastikan ini mengimpor menuData.ts terbaru
import React from 'react';

// --- Komponen Ikon Sederhana (SVG In-line) ---
// SANGAT DISARANKAN: Untuk UI/UX yang lebih baik dan skalabel,
// instal 'react-icons' (npm install react-icons) dan gunakan ikon dari sana.
// Contoh penggunaan react-icons:
// import { FaHome, FaUsers, FaBuilding, FaGlobe, FaNewspaper, FaImages, FaPhone, FaUserAlt, FaHandshake } from 'react-icons/fa';
// Kemudian di IconComponents, Anda bisa mapping:
// DashboardIcon: FaHome, UsersIcon: FaUsers, ProfileIcon: FaUserAlt, dll.

const HomeIcon = () => (
  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7m7-7v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
);
const UsersIcon = () => ( // Bisa untuk "Our Division" atau "List Jemaah"
  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857m7.5 1.857H17m-7.5 0a3 3 0 00-5.356-1.857M10 12a3 3 0 11-6 0 3 3 0 016 0zm7.5 0a3 3 0 11-6 0 3 3 0 016 0zm-3.5-6a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);
const BuildingIcon = () => ( // Untuk "Company Profile"
  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
);
const NewsIcon = () => ( // Untuk "Blog & News"
  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v14M3 6l9 6 9-6m-9 6V4"></path></svg> // <--- PERBAIKAN DI SINI: Dihapus satu tag </path> yang berlebih
);
const ImageIcon = () => ( // Untuk "Gallery"
  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);
const PhoneIcon = () => ( // Untuk "Contact Us"
  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
);
const GlobeIcon = () => ( // Untuk "Language"
  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M3 12h18M3 19h18M1 10h22M1 14h22M11 1a9 9 0 019 9c0 5.17-6 11-9 11s-9-5.83-9-11a9 9 0 019-9z"></path></svg>
);
const UserIcon = () => ( // Untuk "Admin Dashboard" dan "Login"
  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);
const HandshakeIcon = () => ( // Untuk "Join Us"
  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l3-3m0 0l3-3m-3 3l-3-3m3 3V4m-6 0H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-6m-6 0h.01"></path></svg>
);


// Mapping string nama ikon dari menuData.ts ke komponen React SVG yang sesuai
const IconComponents: { [key: string]: React.FC } = {
  // Pastikan nama di sini sesuai dengan string 'icon' di menuData.ts terakhir Anda
  // (misalnya, yang berasal dari menu.txt)
  DashboardIcon: HomeIcon,    // Digunakan untuk "Home" atau "Dashboard"
  UsersIcon: UsersIcon,       // Digunakan untuk "Our Division", "List Jemaah", "Gallery"
  ProfileIcon: UserIcon,      // Digunakan untuk "Company Profile", "Join Us", "Contact Us", "Language", "Admin Dashboard", "Login"

  // Tambahan jika Anda ingin mapping lebih spesifik untuk ikon lain dari menu.txt:
  // CompanyIcon: BuildingIcon,
  // NewsIcon: NewsIcon,
  // GalleryIcon: ImageIcon,
  // ContactIcon: PhoneIcon,
  // GlobeIcon: GlobeIcon,
  // UserIcon: UserIcon,
  // HandshakeIcon: HandshakeIcon, // Contoh jika ada ikon ini di menuData.ts
};

interface SidebarProps {
  userRole: string | null;
}

export default function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname();

  const filteredMenu = menuData.filter(item =>
    item.roles.includes("public") || (userRole && item.roles.includes(userRole))
  );

  return (
    <aside className="w-64 bg-gray-900 text-gray-100 p-5 min-h-screen shadow-lg flex flex-col transition-all duration-300 ease-in-out">
      {/* Header Sidebar: Logo/Nama Aplikasi */}
      <div className="flex items-center mb-8 px-2 py-2">
        {/* Anda bisa menambahkan logo di sini */}
        <span className="text-2xl font-extrabold text-blue-400">Mabrux</span>
        <span className="text-lg font-light ml-1 text-gray-400">App</span>
      </div>

      {/* Navigasi Utama */}
      <nav className="flex-1 space-y-2"> {/* space-y-2 untuk jarak antar menu group */}
        <ul>
          {filteredMenu.map((item) => {
            const Icon = IconComponents[item.icon];
            const isActive = pathname === item.link;

            return (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={`group flex items-center p-3 rounded-lg transition-all duration-200 ease-in-out
                    ${isActive
                      ? 'bg-blue-700 text-white shadow-md transform scale-105' // Lebih menonjol saat aktif
                      : 'hover:bg-gray-700 hover:text-white'}
                  `}
                >
                  {Icon && <Icon className={`${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'} transition-colors duration-200`} />}
                  <span className="ml-3 text-sm font-medium">{item.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Sidebar (Opsional) */}
      <div className="mt-auto pt-6 border-t border-gray-700 text-xs text-gray-500 text-center">
        &copy; 2025 Mabrux App.
      </div>
    </aside>
  );
}