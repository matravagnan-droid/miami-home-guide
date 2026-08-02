import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { LanguageProvider } from './i18n/LanguageContext';

export const metadata = {
  title: {
    default: 'Miami Home Guide | Miami-Dade & Broward Real Estate',
    template: '%s',
  },
  description: 'Neighborhood guides, mortgage and property tax calculators, and relocation resources for Miami-Dade and Broward County, from a local licensed Miami real estate agent.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
