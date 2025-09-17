import { useState } from "react";
import { Database, Cpu, Network, Shield, ArrowRight } from "lucide-react";

export function ArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      id: 0,
      title: "User Interface Layer",
      description: "Intuitive interfaces that bridge complex technology with seamless user experiences",
      icon: Network,
      color: "from-[#00ffff] to-[#0066ff]",
      details: ["React/Next.js Frontend", "Mobile Applications", "API Gateway", "Real-time Analytics Dashboard"]
    },
    {
      id: 1,
      title: "AI Processing Engine",
      description: "Advanced machine learning models that power intelligent decision-making and automation",
      icon: Cpu,
      color: "from-[#ff00ff] to-[#8a2be2]",
      details: ["Neural Networks", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      id: 2,
      title: "Blockchain Infrastructure",
      description: "Secure, decentralized foundation ensuring trust and transparency across all operations",
      icon: Shield,
      color: "from-[#39ff14] to-[#00ff80]",
      details: ["Smart Contracts", "Consensus Mechanisms", "Cross-chain Protocols", "Cryptographic Security"]
    },
    {
      id: 3,
      title: "Data Storage & Management",
      description: "Distributed data architecture optimized for performance, security, and scalability",
      icon: Database,
      color: "from-[#8a2be2] to-[#ff00ff]",
      details: ["IPFS Storage", "Encrypted Databases", "Data Indexing", "Backup & Recovery"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-[#00ffff]/5 to-[#39ff14]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-[#8a2be2]/5 to-[#ff00ff]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#39ff14]/20 to-[#00ffff]/20 border border-[#39ff14]/30 backdrop-blur-sm mb-4 sm:mb-6">
            <span className="text-[#39ff14] text-sm font-medium">⚡ System Architecture</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#39ff14] to-[#00ffff] bg-clip-text text-transparent mb-4 sm:mb-6">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A multi-layered architecture designed for scalability, security, and seamless integration
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Architecture Diagram */}
            <div className="relative order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4">
                {layers.map((layer, index) => {
                  const IconComponent = layer.icon;
                  const isActive = activeLayer === index;
                  
                  return (
                    <div
                      key={index}
                      className={`relative group cursor-pointer transition-all duration-300 ${
                        isActive ? 'scale-105' : 'hover:scale-102'
                      }`}
                      onClick={() => setActiveLayer(index)}
                    >
                      <div 
                        className={`p-4 sm:p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                          isActive 
                            ? `bg-gradient-to-r ${layer.color} bg-opacity-10 border-opacity-60` 
                            : 'bg-[#1a1a2e]/60 border-[#2d2d44]/40 hover:border-[#2d2d44]/60'
                        }`}
                        style={{
                          borderColor: isActive ? `var(--color-${layer.color.split('[')[1].split(']')[0].replace('#', '')})` : undefined
                        }}
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${layer.color} p-2.5 sm:p-3 shadow-lg flex-shrink-0`}>
                            <IconComponent className="w-full h-full text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className={`font-bold text-base sm:text-lg transition-colors duration-300 truncate ${
                              isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                            }`}>
                              {layer.title}
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1 line-clamp-2">{layer.description}</p>
                          </div>
                          <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 flex-shrink-0 ${
                            isActive ? 'text-[#00ffff] rotate-90' : 'text-gray-500 group-hover:text-gray-300'
                          }`} />
                        </div>
                      </div>

                      {/* Connection lines */}
                      {index < layers.length - 1 && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-px h-3 sm:h-4 bg-gradient-to-b from-[#2d2d44] to-transparent"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Layer Details */}
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-[#1a1a2e]/90 to-[#2d2d44]/50 p-6 sm:p-8 rounded-2xl border border-[#2d2d44]/50 backdrop-blur-sm sticky top-24">
                <div className="flex items-start mb-4 sm:mb-6">
                  {(() => {
                    const IconComponent = layers[activeLayer].icon;
                    return (
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${layers[activeLayer].color} p-3 sm:p-4 mr-3 sm:mr-4 shadow-lg flex-shrink-0`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                    );
                  })()}
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                      {layers[activeLayer].title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {layers[activeLayer].description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Key Components:</h4>
                  {layers[activeLayer].details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${layers[activeLayer].color} flex-shrink-0`}></div>
                      <span className="text-gray-300 text-sm sm:text-base">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Animated glow effect */}
                <div 
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${layers[activeLayer].color} opacity-5 pointer-events-none transition-opacity duration-500`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tech flow visualization */}
        <div className="mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00ffff] shadow-lg shadow-[#00ffff]/50"></div>
              <span className="text-gray-300 text-sm sm:text-base">User Request</span>
            </div>
            
            <ArrowRight className="text-gray-500 rotate-90 sm:rotate-0 w-4 h-4 sm:w-5 sm:h-5" />
            
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff00ff] shadow-lg shadow-[#ff00ff]/50"></div>
              <span className="text-gray-300 text-sm sm:text-base">AI Processing</span>
            </div>
            
            <ArrowRight className="text-gray-500 rotate-90 sm:rotate-0 w-4 h-4 sm:w-5 sm:h-5" />
            
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#39ff14] shadow-lg shadow-[#39ff14]/50"></div>
              <span className="text-gray-300 text-sm sm:text-base">Blockchain Validation</span>
            </div>
            
            <ArrowRight className="text-gray-500 rotate-90 sm:rotate-0 w-4 h-4 sm:w-5 sm:h-5" />
            
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#8a2be2] shadow-lg shadow-[#8a2be2]/50"></div>
              <span className="text-gray-300 text-sm sm:text-base">Secure Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}