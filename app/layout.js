import './globals.css';
import { LanguageProvider } from './i18n/LanguageContext';
import SiteAnalytics from './components/SiteAnalytics';

export const metadata = {
  metadataBase: new URL('https://miami-home-guide.vercel.app'),
  title: {
    default: 'Miami Home Guide | Miami-Dade & Broward Real Estate',
    template: '%s',
  },
  description: 'Neighborhood guides, mortgage and property tax calculators, and relocation resources for Miami-Dade and Broward County, from a local licensed Miami real estate agent.',
  openGraph: {
    siteName: 'Miami Home Guide',
    locale: 'en_US',
    type: 'website',
    images: ['/images/hero-skyline-panorama.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero-skyline-panorama.jpg'],
  },
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
        <SiteAnalytics />
      </body>
    </html>
  );
}
