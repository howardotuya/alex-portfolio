import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Alex Oyebade", 
    template: "%s - Alex Oyebade",
  },
  description:
    "Endearing users to a product through simple and delightful designs.",
  keywords: [
    "Alex Oyebade",
    "Oyebade Alex",
    "Senior Product Designer",
    "Product Design Portfolio",
    "UX/UI Designer",
    "User Experience Design",
    "User Interface Design",
    "Product Design Expert",
    "Design Process",
    "Design Thinking",
    "Interaction Design",
    "Visual Design",
    "Prototyping",
    "Human-Centered Design",
    "User-Centered Design",
    "Design Portfolio",
    "Creative Design Solutions",
    "Innovative Product Design",
    "Design Case Studies",
    "User Research",
    "Design Prototypes",
    "Design Strategy",
    "Portfolio Projects",
    "Design Prototyping Tools",
    "Usability Testing",
    "Product Development",
    "Design Thinking Process",
    "Design Portfolio Showcase",
    "Design Principles",
    "User-Centric Solutions",
    "Design Trends",
    "Design for Digital Products",
    "Product Design Expertise",
    "Design Prototyping Techniques",
    "UI/UX Design Portfolio",
    "Mobile App Design",
    "Web App Design",
    "Visual Branding",
    "Responsive Design",
    "Wireframing",
    "Design Sketching",
    "Design for Accessibility",
    "User Interface Prototyping",
    "Design Portfolio Examples",
    "Creative Design Process",
    "Design Innovation",
    "Product Development Expert",
    "Design Prototyping Best Practices",
    "Designing for User Delight",
    "Design Portfolio Presentation",
    "Design Portfolio Inspiration",
    "Design Prototyping Software",
    "Mobile App UX Design",
    "Web App UI/UX",
    "Product Design Case Studies",
    "Creative Design Solutions Showcase",
    "Design Thinking Methodology",
    "Design Prototyping Workflow",
    "Digital Product Design",
    "Portfolio Design Trends",
    "Design for E-commerce",
    "Design for SaaS Products",
    "Design for Mobile Devices",
    "Responsive Web Design Examples",
    "User-Centered Design Philosophy",
    "Innovative Design Solutions",
    "Visual Design Excellence",
    "Design for Brand Identity",
    "Designing for User Engagement",
    "Design Strategy Insights",
    "Design Prototyping Tips",
    "Human-Centered Design Approach",
    "Usability Testing Best Practices",
    "Design Portfolio Review",
    "Creative Design Process Breakdown",
    "Design Innovation Showcase",
    "Design Portfolio Critique",
    "Award-Winning Product Design",
    "Design Thinking Workshops",
    "Design Prototyping Tutorials",
    "Design Prototyping Tools Comparison",
    "A/B Testing in Design",
    "Design Portfolio Redesign",
    "Design Challenges and Solutions",
    "User Persona Creation",
    "Wireframe to Prototype",
    "Design Mockups",
    "Designing for Cross-Platform Experiences",
    "Design Portfolio Evaluation",
    "Design Portfolio Tips",
    "User-Centric Design Examples",
  ],
  themeColor: "#f5f5f5",
  openGraph: {
    title: {
      default: "Alex Oyebade",
      template: "%s - Alex Oyebade",
    },
    description:
      "Endearing users to a product through simple and delightful designs.",
    url: "https://alexoyebade.xyz",
    siteName: "Alex Oyebade",
    images: [
      {
        url: "https://alexoyebade.xyz/og-alt2.png",
        width: 1480,
        height: 1132,
      },
      {
        url: "https://alexoyebade.xyz/og-alt2.png",
        width: 1480,
        height: 1132,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,              // Allow search engines to index this page.
    follow: true,             // Allow search engines to follow links on this page.
    nocache: false,           // Allow search engines to cache this page.
    googleBot: {
      index: true,            // Allow Googlebot to index this page.
      follow: true,           // Allow Googlebot to follow links on this page.
      noimageindex: false,    // Allow Googlebot to index images on this page.
      'max-video-preview': 'auto', // Let Google determine video preview lengths.
      'max-image-preview': 'large', // Suggest using large image previews in search results.
      'max-snippet': -1,      // Allow Google to display longer snippets if needed.
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    <Script
        strategy="afterInteractive"
        src={"https://www.googletagmanager.com/gtag/js?id=G-KBZWRXTEHS"}
      />
      <Script strategy="afterInteractive" id="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KBZWRXTEHS');`}
      </Script>
    </html>
  );
}
