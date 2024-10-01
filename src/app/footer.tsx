import { Icons } from "@/components/icons"; // Assuming your icons are imported here
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} hi..aziz. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/aziez"
              aria-label="GitHub"
              target="_blank"
            >
              <Icons.github className="h-6 w-6 fill-current text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aziez13/"
              aria-label="LinkedIn"
              target="_blank"
            >
              <Icons.linkedin className="h-6 w-6 fill-current text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link
              href="https://wa.me/6281514415436"
              aria-label="WhatsApp"
              target="_blank"
            >
              <Icons.whatsapp className="h-6 w-6 fill-current text-gray-400 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
