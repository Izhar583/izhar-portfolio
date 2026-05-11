import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Izhar Ul Haq — Front-End Developer & SEO Specialist',
  description: 'Building performant web apps & search-optimized digital experiences from Lahore, Pakistan.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
