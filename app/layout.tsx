// D:\mabruxxxx\mabruxfix\app\layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";
// import Sidebar from '../components/Sidebar'; // Hapus impor Sidebar langsung di sini
import ClientLayoutWrapper from '../components/ClientLayoutWrapper'; // Impor ClientLayoutWrapper
import { Inter } from "next/font/google"; // Contoh import font jika ada

// Asumsi untuk mengambil userRole - ini bisa jadi lebih kompleks tergantung implementasi auth Anda
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

// Definisikan bentuk data yang ada di dalam token
interface DecodedToken {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

// PERINGATAN PENTING KEAMANAN:
// 'your-super-secret-key' adalah nilai default yang SANGAT TIDAK AMAN.
// Untuk produksi, pastikan process.env.JWT_SECRET selalu diatur
// dengan kunci yang kuat dan rahasia yang dihasilkan secara acak!
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your-super-secret-key');

async function getUserRoleFromToken(): Promise<string | null> {
  const cookieStore = await cookies(); // Sudah benar: ada 'await' di sini
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload.role as string;
  } catch (error) {
    console.error("Failed to verify token in layout:", error);
    return null;
  }
}

export const metadata: Metadata = {
  title: "Aplikasi Mabrux",
  description: "Manajemen Travel",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const userRole = await getUserRoleFromToken();

  return (
    <html lang="en">
      <body>
        {/* Konten utama sekarang dibungkus oleh ClientLayoutWrapper */}
        <ClientLayoutWrapper userRole={userRole}>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}