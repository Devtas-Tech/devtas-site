import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./logo";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      label: "Solutions", 
      href: "#solutions",
      submenu: [
        { label: "Solido Money", href: "https://app.solido.money" },
        { label: "NeuraFlow AI", href: "#neuraflow" },
        { label: "QuantumSync Protocol", href: "#quantumsync" }
      ]
    },
    { label: "Architecture", href: "#architecture" },
    { label: "Research", href: "#research" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0a0a0f]/95 backdrop-blur-lg border-b border-[#2d2d44]/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center text-gray-300 hover:text-[#00ffff] transition-colors duration-300 py-2 text-sm font-medium"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="ml-1 h-3 w-3" />}
                </a>
                
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[#1a1a2e]/95 backdrop-blur-lg rounded-xl border border-[#2d2d44]/50 shadow-lg shadow-[#00ffff]/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-[#00ffff] hover:bg-[#2d2d44]/30 rounded-lg transition-all duration-200"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Button 
              variant="outline" 
              size="sm"
              className="border-[#2d2d44]/60 text-gray-300 hover:border-[#00ffff]/30 hover:text-[#00ffff] hover:bg-[#00ffff]/5 transition-all duration-300"
            >
              Sign In
            </Button> */}
            <Button 
              size="sm"
              className="bg-gradient-to-r from-[#00ffff] to-[#39ff14] text-black font-medium hover:shadow-lg hover:shadow-[#00ffff]/20 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-300 hover:text-[#00ffff]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0f]/98 backdrop-blur-lg border-b border-[#2d2d44]/50">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="block text-gray-300 hover:text-[#00ffff] transition-colors duration-300 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block text-sm text-gray-400 hover:text-[#00ffff] transition-colors duration-300 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-[#2d2d44]/50 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-[#2d2d44]/60 text-gray-300 hover:border-[#00ffff]/30 hover:text-[#00ffff] hover:bg-[#00ffff]/5"
                >
                  Sign In
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-[#00ffff] to-[#39ff14] text-black font-medium hover:shadow-lg hover:shadow-[#00ffff]/20"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}