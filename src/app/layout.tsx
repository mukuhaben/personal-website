
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Benson Mukuha Ngatia | Software Engineer",
  description:
    "Software Engineer, ICT Systems Officer, and Technical Educator building scalable systems and delivering practical ICT solutions.",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-neutral-200 antialiased">
        <Navbar />

        <main className="pt-24">
          {children}
        </main>

        <footer id= "Reach Me">
          Phone:0707501094 <br></br>
          Email:mukuhabenson@gmail.com
        </footer>
      </body>
    </html>
  );
}
