import Favicon from "/public/images/favicon.png";
import ClientRootLayout from "../components/ClientRootLayout";

export const metadata = {
  metadataBase: new URL(''),
  title: {
    default: "Cory Kolvinsky | Software Engineer",
    template: "%s | CK"
  },
  description: "",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
    "chakra",
    "hashnode",
    "best portfolio",
    "best portfolio website",
    "software engineer",
    "web development",
    "frontend developer",
    "full stack developer",
    "javascript",
    "typescript",
    "react developer",
    "nextjs developer",
    "portfolio website",
    "developer portfolio"
  ],
  authors: [{ name: "Cory Kolvinsky" }],
  creator: "",
  publisher: "",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '',
    title: 'Cory K | Software Engineer',
    description: '',
    siteName: '',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaheed Shaik | Software Engineer',
    description: 'Welcome to Vaheed\'s Software Engineering Portfolio. Explore a diverse range of projects and see how I can bring your ideas to life.',
    images: ['/images/og-image.jpg'],
    creator: '@vaheedshaik',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: [{
    rel: 'icon',
    url: Favicon.src,
  }],
  verification: {
    google: 'Dz2xp2RtP9GiXlS5Wj_tzIm0QeRcbzKILqVNJAUAd5w',
    yandex: '827e25c6099be3b0',
    yahoo: 'EAF9D5ED84139FFD4C2CE4429F37BC3B',
  },
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}
