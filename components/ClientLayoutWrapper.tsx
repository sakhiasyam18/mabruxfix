// D:\mabruxxxx\mabruxfix\components\ClientLayoutWrapper.tsx
'use client'; // WAJIB ada di baris paling atas

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar'; // Import komponen Sidebar
import React from 'react'; // Pastikan React diimpor

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
  userRole: string | null; // Menerima userRole dari RootLayout (Server Component)
}

export default function ClientLayoutWrapper({ children, userRole }: ClientLayoutWrapperProps) {
  const pathname = usePathname();

  // Daftar path di mana sidebar TIDAK BOLEH MUNCUL
  const pathsWithoutSidebar = ['/login', '/forbidden', '/'];

  // Tentukan apakah sidebar harus ditampilkan
  const showSidebar = !pathsWithoutSidebar.includes(pathname);

  return (
    <div className="flex min-h-screen"> {/* Pastikan flex ada di sini untuk layout utama */}
      {showSidebar && <Sidebar userRole={userRole} />}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}