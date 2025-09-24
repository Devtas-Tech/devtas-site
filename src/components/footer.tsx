import { Github, Linkedin, Twitter, Mail, MapPin, ExternalLink } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Solido Money", href: "https://app.solido.money" },
        { name: "NeuraFlow AI", href: "#" },
        { name: "QuantumSync Protocol", href: "#" },
        { name: "Custom Development", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#team" },
        { name: "Careers", href: "#" },
        { name: "Research", href: "#research" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "White Papers", href: "#" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Discord", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "Developer Forum", href: "#" },
        { name: "Newsletter", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-[#0a0a0f] to-[#1a1a2e] relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-[#00ffff]/5 to-[#39ff14]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-[#8a2be2]/5 to-[#ff00ff]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-12 sm:pt-16 pb-6 sm:pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Logo size="lg" className="mb-4 sm:mb-6" />
            
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Pioneering the future of technology through blockchain, AI, and emerging tech innovations. 
              We build tomorrow's solutions today.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center text-gray-300">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-[#00ffff] flex-shrink-0" />
                <span className="text-xs sm:text-sm truncate">contact@devtas.tech</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-[#39ff14] flex-shrink-0" />
                <span className="text-xs sm:text-sm">Hyderabad, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { icon: Github, color: "from-[#00ffff] to-[#0066ff]", label: "GitHub" },
                { icon: Linkedin, color: "from-[#ff00ff] to-[#8a2be2]", label: "LinkedIn" },
                { icon: Twitter, color: "from-[#39ff14] to-[#00ff80]", label: "Twitter" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`group w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${social.color} p-2 sm:p-2.5 transition-all duration-300 hover:scale-110 hover:shadow-lg flex-shrink-0`}
                  aria-label={social.label}
                >
                  <social.icon className="w-full h-full text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="min-w-0">
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#00ffff] transition-colors duration-300 text-xs sm:text-sm flex items-center group"
                    >
                      <span className="truncate">{link.name}</span>
                      {link.href.startsWith('http') && (
                        <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-[#2d2d44]/50 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="bg-gradient-to-r from-[#1a1a2e]/60 to-[#2d2d44]/30 p-4 sm:p-6 rounded-2xl border border-[#2d2d44]/40 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-white mb-2 text-base sm:text-lg">Stay Updated</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Get the latest insights on blockchain, AI, and emerging technologies delivered to your inbox.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[280px] xl:min-w-[320px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 bg-[#2d2d44]/30 border border-[#2d2d44]/60 rounded-lg text-white placeholder-gray-400 focus:border-[#00ffff]/50 focus:outline-none focus:ring-2 focus:ring-[#00ffff]/20 text-sm h-10 sm:h-11"
                />
                <button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-[#00ffff] to-[#39ff14] text-black font-medium rounded-lg hover:shadow-lg hover:shadow-[#00ffff]/20 transition-all duration-300 whitespace-nowrap text-sm h-10 sm:h-11">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2d2d44]/50 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-xs sm:text-sm">
              © 2024 DEVTAS. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-[#00ffff] transition-colors duration-300 whitespace-nowrap">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#00ffff] transition-colors duration-300 whitespace-nowrap">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#00ffff] transition-colors duration-300 whitespace-nowrap">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}