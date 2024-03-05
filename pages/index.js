import Image from "next/image";
import { Inter } from "next/font/google";
import ContactForm from "@/components/ContactForm";
import { ModeToggle } from "@/components/ui/toggle-mode";
import Layout from "../components/Layout";
import NavigationBar from "@/components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        
          <NavigationBar />
        
        <main className={`flex justify-center items-center p-24`}>
          <div className="contact-page">
            <h1 className="mb-20 text-5xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
              Contact Us
            </h1>
            <ContactForm />
          </div>
        </main>
      </div>
    </Layout>
  );
}
