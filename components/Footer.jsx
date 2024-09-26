"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission logic here
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Socials and Contact Email */}
        <div className="flex flex-col justify-start">
          <div className="flex mb-4 space-x-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Go to the Facebook page">
              <FaFacebook size={24} />
            </Link>
            <Link href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Go to the X (Twitter) page">
              <FaTwitter size={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Go to the Instagram page">
              <FaInstagram size={24} />
            </Link>
          </div>
          <p className="mb-4">Contact us: <a href="mailto:info@example.com" className="underline">info@example.com</a></p>
        </div>

        {/* Right Section: Newsletter Form */}
        <div className="flex flex-col justify-start">
          <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
          <form onSubmit={handleNewsletterSubmit} className="flex">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mr-2 flex-grow"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>

      <p className="mt-6 text-sm text-center">&copy; {new Date().getFullYear()} Grand Music Fest. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
