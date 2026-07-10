import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://ife-website.netlify.app";
const siteTitle = "Immunization for Everyone (IFE)";
const siteDescription =
  "Equitable Immunization, Healthier Communities. IFE is a Malawi-based NGO advancing equitable access to immunization through advocacy, education, and community outreach.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s",
  },
  description: siteDescription,
  applicationName: siteTitle,
  keywords: [
    "immunization",
    "vaccination",
    "Malawi NGO",
    "public health",
    "vaccine equity",
    "Lilongwe",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/images/logo-full.png",
        width: 524,
        height: 477,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ife-paper text-ife-ink">
        <Navbar />
        {children}
        <Footer />
        <Script id="chatbase-widget" strategy="afterInteractive">
          {`
            (function(){
              if(!window.chatbase || window.chatbase("getState") !== "initialized"){
                window.chatbase = (...arguments) => {
                  if(!window.chatbase.q){ window.chatbase.q = [] }
                  window.chatbase.q.push(arguments)
                };
                window.chatbase = new Proxy(window.chatbase, {
                  get(target, prop){
                    if(prop === "q"){ return target.q }
                    return (...args) => target(prop, ...args)
                  }
                })
              }
              const onLoad = function(){
                const script = document.createElement("script");
                script.src = "https://www.chatbase.co/embed.min.js";
                script.id = "mopTRXJ9xKJTHMM_EF2f5";
                script.domain = "www.chatbase.co";
                document.body.appendChild(script)
              };
              if(document.readyState === "complete"){
                onLoad()
              } else {
                window.addEventListener("load", onLoad)
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
