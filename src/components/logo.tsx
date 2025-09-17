interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export function Logo({ className = "", size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { logo: 'w-6 h-6 sm:w-8 sm:h-8', text: 'text-lg sm:text-xl' },
    md: { logo: 'w-8 h-8 sm:w-10 sm:h-10', text: 'text-xl sm:text-2xl' },
    lg: { logo: 'w-10 h-10 sm:w-12 sm:h-12', text: 'text-2xl sm:text-3xl' },
    xl: { logo: 'w-12 h-12 sm:w-16 sm:h-16', text: 'text-3xl sm:text-4xl' }
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Geometric Logo */}
      <div className={`${sizes[size].logo} rounded-lg bg-gradient-to-br from-[#00ffff] to-[#39ff14] p-1.5 sm:p-2 mr-2 sm:mr-3 relative overflow-hidden shadow-lg shadow-[#00ffff]/30`}>
        {/* Neural Network Pattern */}
        <div className="w-full h-full relative">
          {/* Main "D" shape */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              className="w-full h-full text-black"
              fill="currentColor"
            >
              <path d="M2 2h8c5.5 0 10 4.5 10 10s-4.5 10-10 10H2V2zm4 4v12h4c3.3 0 6-2.7 6-6s-2.7-6-6-6H6z"/>
            </svg>
          </div>
          
          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 opacity-30">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <g stroke="currentColor" strokeWidth="0.5" fill="none" className="text-black">
                <circle cx="4" cy="4" r="0.5"/>
                <circle cx="20" cy="4" r="0.5"/>
                <circle cx="4" cy="20" r="0.5"/>
                <circle cx="20" cy="20" r="0.5"/>
                <path d="M4 4h4m4 0h8M4 20h8m4 0h4"/>
                <path d="M4 4v8m0 4v8M20 4v8m0 4v8"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Company Name */}
      {showText && (
        <span className={`${sizes[size].text} font-bold bg-gradient-to-r from-[#00ffff] to-[#39ff14] bg-clip-text text-transparent tracking-tight`}>
          DEVTAS
        </span>
      )}
    </div>
  );
}

export function LogoMark({ className = "", size = 'md' }: Omit<LogoProps, 'showText'>) {
  return <Logo className={className} size={size} showText={false} />;
}