import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const roadmapItems = [
  {
    quarter: 'Q1 2026',
    status: 'completed',
    title: 'Platform Launch',
    items: [
      'Core trading engine deployment',
      'Mobile app release (iOS & Android)',
      'Initial token listings (50+ tokens)',
      'Community governance framework'
    ]
  },
  {
    quarter: 'Q2 2026',
    status: 'in-progress',
    title: 'Advanced Features',
    items: [
      'Margin trading capabilities',
      'Advanced charting tools',
      'API for institutional traders',
      'Staking rewards program'
    ]
  },
  {
    quarter: 'Q3 2026',
    status: 'planned',
    title: 'Ecosystem Expansion',
    items: [
      'NFT marketplace integration',
      'Cross-chain bridge support',
      'Decentralized exchange (DEX) launch',
      'Mobile wallet with DeFi features'
    ]
  },
  {
    quarter: 'Q4 2026',
    status: 'planned',
    title: 'Global Scale',
    items: [
      'Multi-language support (20+ languages)',
      'Fiat on-ramp in 100+ countries',
      'Institutional custody solutions',
      'Advanced AI trading tools'
    ]
  }
];

export default function RoadmapTimeline() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-primary" />;
      default:
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">Completed</Badge>;
      case 'in-progress':
        return <Badge variant="default" className="bg-primary/10 text-primary hover:bg-primary/20">In Progress</Badge>;
      default:
        return <Badge variant="outline">Planned</Badge>;
    }
  };

  return (
    <section id="roadmap" className="relative py-20 md:py-32 bg-card/30">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display">Product Roadmap</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our vision for the future of digital asset trading
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold text-primary">{item.quarter}</div>
                  {getStatusIcon(item.status)}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <div className="pt-2">
                  {getStatusBadge(item.status)}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {item.items.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              {/* Connector line for desktop */}
              {index < roadmapItems.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-px bg-gradient-to-r from-border to-transparent" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
