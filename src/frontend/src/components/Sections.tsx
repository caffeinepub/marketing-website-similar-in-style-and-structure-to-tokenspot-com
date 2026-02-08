import { ArrowRight, Shield, Zap, Eye, Users, Gift, BarChart3 } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiGithub } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/assets/generated/bg-pattern.dim_1600x1600.png)',
          backgroundSize: '800px 800px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="section-container relative py-20 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-display">
                The Future of{' '}
                <span className="gradient-text">Digital Assets</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Discover, trade, and manage your digital tokens with confidence. 
                Built on cutting-edge blockchain technology for maximum security and transparency.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base shadow-glow hover:shadow-glow-lg transition-shadow">
                Start Trading
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold gradient-text">$2.5B+</div>
                <div className="text-sm text-muted-foreground">Trading Volume</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold gradient-text">500K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <img 
              src="/assets/generated/hero-illustration.dim_1400x900.png" 
              alt="Digital tokens and blockchain visualization" 
              className="w-full h-auto max-w-2xl drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Multi-layer security protocols and cold storage ensure your assets are protected 24/7.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Execute trades in milliseconds with our optimized infrastructure and smart routing.'
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'Every transaction is recorded on-chain with complete audit trails and real-time verification.'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join a thriving community of traders and developers shaping the future of finance.'
  },
  {
    icon: Gift,
    title: 'Rewards Program',
    description: 'Earn tokens through trading, staking, and participating in governance decisions.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Professional-grade charts, indicators, and market insights to inform your decisions.'
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-20 md:py-32 bg-card/30">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display">Why Choose TokenFlow</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in the digital asset economy
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: '01',
    title: 'Create Your Account',
    description: 'Sign up in seconds with just your email. No complex verification required to get started.'
  },
  {
    number: '02',
    title: 'Fund Your Wallet',
    description: 'Deposit funds using your preferred payment method. We support cards, bank transfers, and crypto.'
  },
  {
    number: '03',
    title: 'Start Trading',
    description: 'Browse thousands of tokens, analyze markets, and execute trades with confidence.'
  },
  {
    number: '04',
    title: 'Grow Your Portfolio',
    description: 'Track performance, earn rewards, and optimize your strategy with our advanced tools.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-32">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our simple, streamlined process
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="space-y-4">
                <div className="text-6xl font-bold text-primary/20 font-display">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="shadow-glow">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Pricing', href: '#' }
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press Kit', href: '#' }
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Support', href: '#' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Disclaimer', href: '#' }
  ]
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="section-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <img 
              src="/assets/generated/brand-logo.dim_512x160.png" 
              alt="TokenFlow Logo" 
              className="h-10 w-auto"
            />
            <p className="text-muted-foreground max-w-sm">
              The next generation platform for digital asset trading. 
              Secure, fast, and built for the future.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="GitHub"
              >
                <SiGithub className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026. Built with ❤️ using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline focus:outline-none focus:underline"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.legal.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
