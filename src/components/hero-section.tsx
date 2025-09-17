import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0a0a0f] to-[#1a1a2e] px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1587569087747-addba755bda6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVjaCUyMGNpcmN1aXQlMjBib2FyZCUyMG5lb258ZW58MXx8fHwxNzU4MTA4MjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Dark Circuit Board Technology Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f]/90 via-[#0a0a0f]/70 to-[#1a1a2e]/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated particles/orbs - responsive sizes */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-[#00ffff]/20 to-[#39ff14]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-[#8a2be2]/20 to-[#ff00ff]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-[#39ff14]/15 to-[#00ffff]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '500ms'}}></div>
        
        {/* Tech grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px sm:50px sm:50px'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#00ffff]/20 to-[#39ff14]/20 border border-[#00ffff]/30 backdrop-blur-sm mb-6 sm:mb-8 shadow-lg shadow-[#00ffff]/10">
            <span className="text-[#00ffff] font-medium text-sm sm:text-base">🚀 Crafting Tomorrow with AI & Blockchain</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-[#00ffff] to-[#39ff14] bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight tracking-tight">
            DEVTAS
          </h1>
          
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-300 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed px-4">
            Where Emerging Tech Meets Bold Ideas
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            We're not your typical tech company. We break boundaries in blockchain, AI, and emerging technologies, 
            creating products that push the limits of what's possible.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-[#00ffff] to-[#39ff14] hover:from-[#00ffff]/90 hover:to-[#39ff14]/90 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#00ffff]/20 hover:shadow-xl hover:shadow-[#00ffff]/30 w-full sm:w-auto text-sm sm:text-base"
          >
            Explore Our Innovations 
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="group border-2 border-[#8a2be2]/60 text-[#8a2be2] hover:bg-[#8a2be2]/10 hover:border-[#8a2be2] px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#8a2be2]/10 hover:shadow-xl hover:shadow-[#8a2be2]/20 w-full sm:w-auto text-sm sm:text-base"
          >
            <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" /> 
            Get in Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#00ffff]/60 rounded-full flex justify-center bg-gradient-to-b from-transparent to-[#00ffff]/10">
            <div className="w-1 h-2 sm:h-3 bg-[#00ffff] rounded-full mt-1.5 sm:mt-2 animate-pulse shadow-sm shadow-[#00ffff]/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}