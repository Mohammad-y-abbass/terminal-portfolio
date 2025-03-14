'use client';

import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });
import './globals.css';
import { AppProvider } from '@/context/CmdHistoryContext';



export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang='en'>
        <body className={`${sourceCodePro.className}`}>{children}</body>
      </html>
    </AppProvider>
  );
}
