import { Source_Code_Pro } from "next/font/google";
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });
import "./globals.css";
import ContextProvider from "@/context/ContextProvider";

export const metadata = {
  title: "Mohammad Abbass | Full Stack Developer Developer",
  description:
    "Portfolio of Mohammad Abbass, a Software developer specializing in React, Next.js, and modern web technologies.",
  keywords:
    "Mohammad Abbass, Software Engineer, Web Developer, React, Next.js, JavaScript, TypeScript, MERN, Spring Boot",
  openGraph: {
    title: "Mohammad Abbass | Software Engineer",
    description:
      "Explore my portfolio showcasing web applications, projects, and skills in modern web development.",
    url: "https://mohammad-abbas.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <ContextProvider>
      <html lang="en">
        <body className={`${sourceCodePro.className}`}>{children}</body>
      </html>
    </ContextProvider>
  );
}
