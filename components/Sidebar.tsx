// D:\mabruxxxx\mabruxfix\components\Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuData } from '../lib/menuData'; // Impor data menu dari D:\mabruxxxx\mabruxfix\lib\menuData.ts
import React from 'react';

// --- Komponen Ikon Sederhana (Contoh) ---
// Anda bisa mengganti ini dengan ikon dari library seperti react-icons (disarankan!)
// Jika menggunakan react-icons:
// 1. Install: npm install react-icons
// 2. Import di sini: import { FaHome, FaUsers, FaUserCircle } from 'react-icons/fa';
// 3. Sesuaikan IconComponents di bawah.

const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7m7-7v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
);
const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857m7.5 1.857H17m-7.5 0a3 3 0 00-5.356-1.857M10 12a3 3 0 11-6 0 3 3 0 016 0zm7.5 0a3 3 0 11-6 0 3 3 0 016 0zm-3.5-6a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);
const ProfileIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);
// Contoh ikon lain jika Anda pakai react-icons:
// const ForbiddenIcon = () => <FaExclamationTriangle className="w-5 h-5" />;

// Map string nama ikon ke komponen React yang sebenarnya
const IconComponents: { [key: string]: React.FC } = {
  DashboardIcon, // atau FaHome jika pakai react-icons
  UsersIcon,     // atau FaUsers jika pakai react-icons
  ProfileIcon,   // atau FaUserCircle jika pakai react-icons
  // ForbiddenIcon, // jika ada
};

interface SidebarProps {
  userRole: string | null; // Bisa null jika belum login
}

export default function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname(); // Hook untuk mendapatkan jalur URL saat ini

  // Filter menu berdasarkan peran pengguna
  const filteredMenu = menuData.filter(item =>
    item.roles.includes("public") || (userRole && item.roles.includes(userRole))
  );

  return (
    <aside className="w-64 bg-gray-800 text-white p-4 min-h-screen">
      <div className="text-2xl font-bold mb-6">Mabrux App</div>
      <nav>
        <ul>
          {filteredMenu.map((item) => {
            const Icon = IconComponents[item.icon]; // Dapatkan komponen ikon
            const isActive = pathname === item.link; // Tentukan apakah menu aktif

            return (
              <li key={item.id} className="mb-2">
                <Link
                  href={item.link}
                  className={`flex items-center p-2 rounded-md ${
                    isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                  }`}
                >
                  {Icon && <Icon />} {/* Render ikon jika ada */}
                  <span className="ml-3">{item.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}