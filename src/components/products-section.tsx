import { Button } from "./ui/button";
import { ArrowRight, BarChart3, Brain, Shield, ExternalLink } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductsSection() {
  const products = [
    {
      id: "solido",
      title: "Solido Money",
      subtitle: "Blockchain Intelligence Platform",
      description: "The HyperApp on Move unlocking on-chain yield & liquidity. A decentralized, trustless, and non-custodial protocol that enables users to earn yield on their crypto assets while maintaining full control and liquidity.",
      image: "https://images.unsplash.com/photo-1660836814985-8523a0d713b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMG5ldHdvcmslMjBkYXJrfGVufDF8fHx8MTc1ODEwODIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: BarChart3,
      color: "from-[#00ffff] to-[#0066ff]",
      features: [
        "Meet $SOLID: The Token Powering AutoFi's Liquidity Brain",
        "Solido Raised $800K in Funding from Top Investors",
        "Solido Flow is Live: Stake $SUPRA Without Losing Liquidity",
        "Gateway to AutoFi on Supra"
      ],
      metrics: { transactions: "50M+", networks: "15+", accuracy: "99.7%" }
    },
    {
      id: "neuraflow",
      title: "Mixion ",
      subtitle: "Shape Sound. Remix Ideas. Launch Tracks.", 
      description: "You’re methodical, detail-oriented, and proactive — exactly what this idea needs. When you’re ready, I can help write early outreach DMs, build your roadmap in Notion, or even review your wireframes. Just say the word and I’m on it.",
      image: "https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NTgwMjE0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Brain,
      color: "from-[#ff00ff] to-[#8a2be2]",
      features: [
        "AI-Powered Music Creation",
        "Collaborative Remixing Platform",
        "Vast Library of Sound Samples",
        "Seamless Integration with DAWs"
      ],
      metrics: { models: "500+", accuracy: "94.8%", speed: "<50ms" }
    },
    {
      id: "quantumsync",
      title: "Brock",
      subtitle: "",
      description: "Bitcoin Runes and Ordinals on Click is a decentralized launchpad protocol that democratizes the creation and trading of Bitcoin Runes (fungible tokens) and Ordinals (NFTs) with a seamless, one-click experience",      
      image: "https://i.postimg.cc/sDg6SwC6/Screenshot-2025-09-24-at-10-04-20-PM.png'",
      icon: Shield,
      color: "from-[#39ff14] to-[#00ff80]",
      features: [
       "One-Click Bitcoin Runes & Ordinals Launchpad",
        "Decentralized & Trustless Protocol",
        "Low Fees with Lightning Network",
        "Community Governance & DAO Integration"
      ],
      metrics: { encryption: "2048-bit", nodes: "1000+", latency: "<10ms" }
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f] relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-[#ff00ff]/5 to-[#8a2be2]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-[#00ffff]/5 to-[#39ff14]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#ff00ff]/20 to-[#8a2be2]/20 border border-[#ff00ff]/30 backdrop-blur-sm mb-4 sm:mb-6">
            <span className="text-[#ff00ff] text-sm font-medium">🔮 Flagship Products</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#ff00ff] to-[#8a2be2] bg-clip-text text-transparent mb-4 sm:mb-6">
            Innovation in Action
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Discover our cutting-edge products that are reshaping industries and defining the future of technology
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const isReverse = index % 2 === 1;
            
            return (
              <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${isReverse ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 sm:space-y-8 ${isReverse ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${product.color} p-2.5 sm:p-3 mr-3 sm:mr-4 shadow-lg`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{product.title}</h3>
                        <p className={`text-sm sm:text-base font-medium bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                          {product.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-white text-base sm:text-lg">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${product.color} flex-shrink-0`}></div>
                          <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-br from-[#1a1a2e]/60 to-[#2d2d44]/30 rounded-xl border border-[#2d2d44]/40">
                    {Object.entries(product.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className={`text-lg sm:text-2xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-gray-400 text-xs sm:text-sm capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button 
                      className={`group bg-gradient-to-r ${product.color} text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex-1 sm:flex-none text-sm sm:text-base`}
                    >
                      Learn More 
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="border-[#2d2d44]/60 text-gray-300 hover:border-opacity-80 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 flex-1 sm:flex-none text-sm sm:text-base"
                    >
                      View Demo
                      <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${isReverse ? 'lg:col-start-1' : ''}`}>
                  <div className="relative group overflow-hidden rounded-2xl">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${product.color} p-2 sm:p-2.5 shadow-lg backdrop-blur-sm`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${product.color} p-3 sm:p-4 mx-auto mb-3 sm:mb-4 shadow-xl`}>
                          <ExternalLink className="w-full h-full text-white" />
                        </div>
                        <p className="text-white font-medium text-sm sm:text-base">Explore Product</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className={`absolute -z-10 top-4 sm:top-8 -right-4 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${product.color} opacity-20 rounded-full blur-xl`}></div>
                  <div className={`absolute -z-10 -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br ${product.color} opacity-15 rounded-full blur-xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-[#1a1a2e]/60 to-[#2d2d44]/30 p-6 sm:p-8 rounded-2xl border border-[#2d2d44]/40 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base px-4">
              Join leading organizations already leveraging our cutting-edge solutions to drive innovation and growth.
            </p>
            <a href="https://calendly.com/mohitrakhade20/30min" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#00ffff] to-[#39ff14] text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00ffff]/20 hover:shadow-xl hover:shadow-[#00ffff]/30 text-sm sm:text-base"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-[#2d2d44]/60 text-gray-300 hover:border-[#00ffff]/30 hover:text-[#00ffff] hover:bg-[#00ffff]/5 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base"
              >
                View All Products
              </Button>
            </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}