// app/layout.jsx
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nithish - Software Developer',
  description: 'Personal portfolio of Nithish, a passionate software developer shining on Upwork and FOSS lover',
};

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}