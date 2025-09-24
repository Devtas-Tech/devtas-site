import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MessageCircle, Send, Github, Linkedin, Twitter, MapPin } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-[#00ffff]/10 to-[#39ff14]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-[#8a2be2]/10 to-[#ff00ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#8a2be2]/20 to-[#ff00ff]/20 border border-[#8a2be2]/30 backdrop-blur-sm mb-4 sm:mb-6">
              <span className="text-[#8a2be2] text-sm font-medium">🚀 Let's Build Together</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#8a2be2] to-[#ff00ff] bg-clip-text text-transparent mb-4 sm:mb-6">
              Partner With Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Ready to revolutionize your industry? Let's explore how DEVTAS can accelerate your next breakthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#1a1a2e]/90 to-[#2d2d44]/50 p-6 sm:p-8 rounded-2xl border border-[#2d2d44]/50 backdrop-blur-sm order-2 lg:order-1">
              <div className="flex items-start mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#00ffff] to-[#39ff14] p-2.5 sm:p-3 mr-3 sm:mr-4 shadow-lg flex-shrink-0">
                  <MessageCircle className="w-full h-full text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Start a Conversation</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Tell us about your project or challenge</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <Input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-[#2d2d44]/30 border-[#2d2d44]/60 text-white placeholder-gray-400 focus:border-[#00ffff]/50 focus:ring-[#00ffff]/20 h-10 sm:h-11"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-[#2d2d44]/30 border-[#2d2d44]/60 text-white placeholder-gray-400 focus:border-[#00ffff]/50 focus:ring-[#00ffff]/20 h-10 sm:h-11"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company / Organization
                  </label>
                  <Input
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-[#2d2d44]/30 border-[#2d2d44]/60 text-white placeholder-gray-400 focus:border-[#00ffff]/50 focus:ring-[#00ffff]/20 h-10 sm:h-11"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-[#2d2d44]/30 border-[#2d2d44]/60 text-white placeholder-gray-400 focus:border-[#00ffff]/50 focus:ring-[#00ffff]/20 min-h-[100px] sm:min-h-[120px] resize-y"
                    placeholder="Tell us about your project, timeline, and how we can help..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full group bg-gradient-to-r from-[#00ffff] to-[#39ff14] text-black font-semibold py-2.5 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#00ffff]/20 hover:shadow-xl hover:shadow-[#00ffff]/30 text-sm sm:text-base"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>

            {/* Contact Info & Quick Links */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#2d2d44]/30 p-5 sm:p-6 rounded-2xl border border-[#2d2d44]/40 backdrop-blur-sm">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Direct Contact</h4>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#ff00ff] to-[#8a2be2] p-2 sm:p-2.5 flex-shrink-0">
                      <Mail className="w-full h-full text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-300 text-xs sm:text-sm">Email</p>
                      <p className="text-white font-medium text-sm sm:text-base truncate">contact@devtas.tech</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#39ff14] to-[#00ff80] p-2 sm:p-2.5 flex-shrink-0">
                      <MapPin className="w-full h-full text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-300 text-xs sm:text-sm">Location</p>
                      <p className="text-white font-medium text-sm sm:text-base">Hyderabad, India</p>
                      <p className="text-white font-medium text-sm sm:text-base">Bangalore, India</p>
                      <p className="text-white font-medium text-sm sm:text-base">Mumbai, India</p>


                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#2d2d44]/30 p-5 sm:p-6 rounded-2xl border border-[#2d2d44]/40 backdrop-blur-sm">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Follow Our Journey</h4>
                
                <div className="flex space-x-3 sm:space-x-4">
                  {[
                    { icon: Linkedin, label: "LinkedIn", color: "from-[#ff00ff] to-[#8a2be2]", link: "https://www.linkedin.com/in/mohit-rakhade/" },
                    { icon: Twitter, label: "Twitter", color: "from-[#39ff14] to-[#00ff80]", link: "https://x.com/mohitrakhade20" }
                  ].map((social, index) => (
                    <div
                      key={index}
                      className={`group w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${social.color} p-2.5 sm:p-3 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg flex-shrink-0`}
                    >
                      <social.icon className="w-full h-full text-white" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#2d2d44]/30 p-5 sm:p-6 rounded-2xl border border-[#2d2d44]/40 backdrop-blur-sm">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Quick Actions</h4>
                
                <div className="space-y-2 sm:space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-[#2d2d44]/60 text-gray-300 hover:border-[#00ffff]/30 hover:text-[#00ffff] hover:bg-[#00ffff]/5 transition-all duration-300 h-10 sm:h-11 text-sm sm:text-base"
                  >
                    📄 View Case Studies
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start border-[#2d2d44]/60 text-gray-300 hover:border-[#39ff14]/30 hover:text-[#39ff14] hover:bg-[#39ff14]/5 transition-all duration-300 h-10 sm:h-11 text-sm sm:text-base"
                  >
                    💼 Partnership Opportunities
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start border-[#2d2d44]/60 text-gray-300 hover:border-[#ff00ff]/30 hover:text-[#ff00ff] hover:bg-[#ff00ff]/5 transition-all duration-300 h-10 sm:h-11 text-sm sm:text-base"
                  >
                    🎓 Join Our Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}