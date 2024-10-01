import { Icons } from "@/components/icons"; // Import your icons
import Link from "next/link";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 bg-gray-950 text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
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

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mnnaeway" // Replace with your Formspree form ID
          method="POST"
          className="max-w-2xl mx-auto space-y-6 bg-gray-800 p-6 rounded-xl shadow-md"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              className="w-full"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="_replyto"
              required
              className="w-full"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              className="w-full"
              placeholder="Write your message..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
