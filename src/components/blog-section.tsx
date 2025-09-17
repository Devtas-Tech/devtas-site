import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of Decentralized AI: A Technical Deep Dive",
      excerpt: "Exploring how blockchain technology can create trustless AI systems that preserve privacy while enabling global collaboration.",
      author: "Maya Rodriguez",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "AI & Blockchain",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY2lyY3VpdHxlbnwxfHx8fDE3NTgxMDQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-[#00ffff] to-[#0066ff]",
      featured: true
    },
    {
      title: "Quantum-Resistant Cryptography in Practice",
      excerpt: "As quantum computing advances, we explore practical implementations of post-quantum cryptographic protocols.",
      author: "Jordan Kim",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1720962158937-7ea890052166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGRhcmt8ZW58MXx8fHwxNzU4MTA0NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-[#39ff14] to-[#00ff80]",
      featured: false
    },
    {
      title: "Building User-Centric DeFi Experiences",
      excerpt: "Design principles and technical considerations for creating intuitive interfaces for complex blockchain applications.",
      author: "Sam Taylor",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1695199360616-cbc493367bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwbmV0d29yayUyMGFic3RyYWN0fGVufDF8fHx8MTc1ODEwNDc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-[#ff00ff] to-[#8a2be2]",
      featured: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f] relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(-45deg, rgba(57,255,20,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#39ff14]/20 to-[#00ffff]/20 border border-[#39ff14]/30 backdrop-blur-sm mb-6">
            <span className="text-[#39ff14] text-sm font-medium">📝 Latest Insights</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#39ff14] to-[#00ffff] bg-clip-text text-transparent mb-6">
            Research & Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dives into emerging technologies, research findings, and practical insights from our team
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className={`group bg-gradient-to-br from-[#1a1a2e]/90 to-[#2d2d44]/50 border border-[#2d2d44]/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#00ffff]/10 ${
                  post.featured ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${post.featured ? 'h-80' : 'h-48'}`}>
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 via-[#1a1a2e]/30 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${post.gradient} text-black font-medium shadow-lg`}>
                      {post.category}
                    </Badge>
                  </div>

                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-[#ff00ff]/20 to-[#8a2be2]/20 text-[#ff00ff] border border-[#ff00ff]/30 backdrop-blur-sm">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`p-6 ${post.featured ? 'flex flex-col justify-between h-full' : ''}`}>
                  <div>
                    <h3 className={`font-bold text-white mb-4 group-hover:text-[#00ffff] transition-colors duration-300 ${
                      post.featured ? 'text-2xl md:text-3xl leading-tight' : 'text-xl'
                    }`}>
                      {post.title}
                    </h3>
                    
                    <p className={`text-gray-300 leading-relaxed mb-6 ${
                      post.featured ? 'text-lg' : 'text-base'
                    }`}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    {/* Meta Information */}
                    <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                      <div className="flex items-center space-x-2">
                        <CalendarDays className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Author & CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-300 text-sm">by </span>
                        <span className={`font-medium bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent`}>
                          {post.author}
                        </span>
                      </div>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        className="group/btn border-[#2d2d44]/60 text-gray-300 hover:border-[#00ffff]/30 hover:text-[#00ffff] hover:bg-[#00ffff]/5 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-[#39ff14] to-[#00ffff] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#39ff14]/20 hover:shadow-xl hover:shadow-[#39ff14]/30"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}