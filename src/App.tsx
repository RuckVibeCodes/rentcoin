import { useEffect, useRef, useState } from 'react';
import './App.css';
import { 
  Wallet, 
  TrendingUp, 
  Flame, 
  Percent, 
  ArrowRight, 
  Home, 
  PiggyBank, 
  Coins,
  Twitter,
  MessageCircle,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const contractAddress = "RENTxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePos({ x: x * 15, y: y * -15 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-rent-dark overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-rent-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img 
                src="/rentcoin-logo.png" 
                alt="Rentcoin" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl text-white">$RENT</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#tokenomics" className="text-gray-400 hover:text-rent-green transition-colors">Tokenomics</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-rent-green transition-colors">How It Works</a>
              <a href="#community" className="text-gray-400 hover:text-rent-green transition-colors">Community</a>
            </div>
            <a 
              href="https://raydium.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-rent-green hover:bg-rent-darkgreen text-black font-bold px-4 py-2 rounded-lg transition-all hover:shadow-glow"
            >
              Buy $RENT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${50 + mousePos.x}% ${50 - mousePos.y}%, rgba(0, 208, 132, 0.15) 0%, transparent 50%)`
          }}
        />
        
        {/* Floating Money Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-rent-green/10 animate-fall"
              style={{
                left: `${15 + i * 15}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${8 + i * 2}s`,
              }}
            >
              <Coins size={40 + i * 10} />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo with 3D tilt */}
          <div className="perspective-1000 mb-8">
            <img
              ref={logoRef}
              src="/rentcoin-logo.png"
              alt="Rentcoin Logo"
              className="w-64 h-64 md:w-80 md:h-80 mx-auto animate-bounce-in animate-float preserve-3d transition-transform duration-200"
              style={{
                transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
              }}
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
            The only rent that{' '}
            <span className="text-gradient">pays YOU.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 font-semibold">
            $RENT is a building that pays you.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Every trade on $RENT sends <span className="text-rent-green font-bold">7%</span> to all holders and burns{' '}
            <span className="text-rent-red font-bold">1%</span> permanently. No staking. No lockup. No claiming.{' '}
            <span className="text-white font-semibold">You hold, you collect rent.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://raydium.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-rent-green hover:bg-rent-darkgreen text-black font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-glow-lg flex items-center justify-center gap-2"
            >
              <Wallet size={20} />
              Buy $RENT
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rent-card hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all border border-white/10 flex items-center justify-center gap-2"
            >
              <TrendingUp size={20} />
              View Chart
            </a>
          </div>

          {/* Contract Address */}
          <div className="inline-flex items-center gap-3 bg-rent-card rounded-xl px-4 py-3 border border-white/10">
            <span className="text-gray-400 text-sm hidden sm:inline">Contract:</span>
            <code className="text-rent-green font-mono text-sm truncate max-w-[200px] sm:max-w-xs">
              {contractAddress}
            </code>
            <button
              onClick={copyToClipboard}
              className="text-gray-400 hover:text-rent-green transition-colors"
            >
              {copied ? <Check size={18} className="text-rent-green" /> : <Copy size={18} />}
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-rent-green rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              Tokenomics
            </h2>
            <p className="text-xl text-gray-400">
              Simple. Transparent. Profitable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Reflection Card */}
            <div className="group bg-rent-card rounded-2xl p-8 border border-white/5 hover:border-rent-green/50 transition-all hover:shadow-glow hover:-translate-y-2">
              <div className="w-16 h-16 bg-rent-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PiggyBank className="text-rent-green" size={32} />
              </div>
              <h3 className="text-5xl font-black text-rent-green mb-2">7%</h3>
              <h4 className="text-xl font-bold text-white mb-3">Reflection Rate</h4>
              <p className="text-gray-400">
                Holders earn passive income from every trade. The more you hold, the more rent you collect.
              </p>
            </div>

            {/* Burn Card */}
            <div className="group bg-rent-card rounded-2xl p-8 border border-white/5 hover:border-rent-red/50 transition-all hover:shadow-[0_0_40px_rgba(255,71,87,0.2)] hover:-translate-y-2">
              <div className="w-16 h-16 bg-rent-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Flame className="text-rent-red" size={32} />
              </div>
              <h3 className="text-5xl font-black text-rent-red mb-2">1%</h3>
              <h4 className="text-xl font-bold text-white mb-3">Burn Rate</h4>
              <p className="text-gray-400">
                Supply decreases forever with every transaction. Deflationary by design.
              </p>
            </div>

            {/* Total Fee Card */}
            <div className="group bg-rent-card rounded-2xl p-8 border border-white/5 hover:border-rent-gold/50 transition-all hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] hover:-translate-y-2">
              <div className="w-16 h-16 bg-rent-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Percent className="text-rent-gold" size={32} />
              </div>
              <h3 className="text-5xl font-black text-rent-gold mb-2">8%</h3>
              <h4 className="text-xl font-bold text-white mb-3">Total Fee</h4>
              <p className="text-gray-400">
                On every trade. 7% to holders, 1% burned. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rent-green/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400">
              Three simple steps to become a landlord
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-rent-card rounded-2xl p-8 border border-white/5 h-full hover:border-rent-green/30 transition-all group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-rent-green rounded-full flex items-center justify-center text-black font-black text-xl">
                  1
                </div>
                <div className="w-20 h-20 bg-rent-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Wallet className="text-rent-green" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Buy $RENT</h3>
                <p className="text-gray-400">
                  Get tokens on Raydium or Jupiter. Connect your Solana wallet and swap SOL for $RENT.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 text-rent-green/30">
                <ArrowRight size={32} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-rent-card rounded-2xl p-8 border border-white/5 h-full hover:border-rent-green/30 transition-all group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-rent-green rounded-full flex items-center justify-center text-black font-black text-xl">
                  2
                </div>
                <div className="w-20 h-20 bg-rent-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Home className="text-rent-green" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Hold</h3>
                <p className="text-gray-400">
                  No staking needed. No lockup periods. Just hold $RENT in your wallet and watch the rent roll in.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 text-rent-green/30">
                <ArrowRight size={32} />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-rent-card rounded-2xl p-8 border border-white/5 h-full hover:border-rent-green/30 transition-all group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-rent-green rounded-full flex items-center justify-center text-black font-black text-xl">
                  3
                </div>
                <div className="w-20 h-20 bg-rent-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Coins className="text-rent-green" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Collect Rent</h3>
                <p className="text-gray-400">
                  Earn 7% from every trade automatically. The more people trade, the more rent you collect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Taglines Ticker Section */}
      <section id="community" className="py-16 overflow-hidden">
        {/* Ticker Row 1 - Left to Right */}
        <div className="relative mb-4">
          <div className="flex animate-ticker-left whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center">
                <span className="text-4xl sm:text-6xl md:text-8xl font-black text-stroke text-rent-green/30 mx-8">
                  can't afford a house? collect rent anyway
                </span>
                <span className="text-rent-green mx-4">★</span>
                <span className="text-4xl sm:text-6xl md:text-8xl font-black text-stroke text-rent-green/30 mx-8">
                  hold and collect. you're the landlord now.
                </span>
                <span className="text-rent-green mx-4">★</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ticker Row 2 - Right to Left */}
        <div className="relative">
          <div className="flex animate-ticker-right whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center">
                <span className="text-4xl sm:text-6xl md:text-8xl font-black text-rent-green/20 mx-8">
                  the only rent that goes into your wallet
                </span>
                <span className="text-rent-green/50 mx-4">★</span>
                <span className="text-4xl sm:text-6xl md:text-8xl font-black text-rent-green/20 mx-8">
                  HOUSE sits there. $RENT pays you.
                </span>
                <span className="text-rent-green/50 mx-4">★</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem / Solution Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem */}
            <div className="bg-rent-card rounded-2xl p-8 border border-white/5">
              <h3 className="text-2xl font-bold text-rent-red mb-6 flex items-center gap-2">
                <Flame size={24} />
                The Housing Market is Broken
              </h3>
              <ul className="space-y-4">
                {[
                  "You can't afford a down payment",
                  "Your rent goes up every year",
                  "Your landlord does nothing and gets paid",
                  "You're trapped in the renter cycle"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="text-rent-red mt-1">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-rent-card rounded-2xl p-8 border border-rent-green/30 shadow-glow">
              <h3 className="text-2xl font-bold text-rent-green mb-6 flex items-center gap-2">
                <Coins size={24} />
                Now It's Your Turn
              </h3>
              <ul className="space-y-4">
                {[
                  "Hold $RENT and earn passive income",
                  "Earn from every single trade",
                  "Supply shrinks with every transaction",
                  "You are the landlord now"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-rent-green mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-rent-green/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8">
            You're the{' '}
            <span className="text-gradient">landlord</span>{' '}
            now.
          </h2>
          
          <a
            href="https://raydium.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-rent-green hover:bg-rent-darkgreen text-black font-black px-10 py-5 rounded-2xl text-xl transition-all animate-pulse-glow hover:shadow-glow-lg"
          >
            <Wallet size={24} />
            Buy $RENT on Raydium
            <ExternalLink size={20} />
          </a>

          <p className="mt-6 text-gray-400">
            Join thousands of landlords collecting rent on Solana
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/rentcoin-logo.png" 
                alt="Rentcoin" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl text-white">$RENT</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rent-green transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rent-green transition-colors"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rent-green transition-colors"
              >
                <TrendingUp size={24} />
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              © 2024 Rentcoin. Not financial advice. DYOR.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
