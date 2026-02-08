import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is TokenFlow and how does it work?',
    answer: 'TokenFlow is a next-generation digital asset trading platform built on blockchain technology. We provide a secure, fast, and transparent marketplace where users can buy, sell, and trade various digital tokens. Our platform uses advanced smart contracts and multi-layer security protocols to ensure your assets are always protected.'
  },
  {
    question: 'How do I get started with trading?',
    answer: 'Getting started is simple! First, create your account by signing up with your email. Then, complete the quick verification process and fund your wallet using your preferred payment method (credit card, bank transfer, or cryptocurrency). Once your account is funded, you can start browsing and trading thousands of available tokens immediately.'
  },
  {
    question: 'What fees does TokenFlow charge?',
    answer: 'We believe in transparent pricing. Trading fees start at 0.1% per transaction and decrease based on your 30-day trading volume. There are no hidden fees for deposits or withdrawals. Premium features like margin trading and advanced analytics are available through our subscription tiers, starting at $9.99/month.'
  },
  {
    question: 'Is my money safe on TokenFlow?',
    answer: 'Security is our top priority. We use bank-grade encryption, multi-signature wallets, and store 95% of user funds in cold storage offline. Our platform undergoes regular security audits by leading cybersecurity firms. Additionally, we maintain insurance coverage for digital assets stored on our platform.'
  },
  {
    question: 'Can I use TokenFlow on mobile devices?',
    answer: 'Yes! TokenFlow is available on iOS and Android devices. Our mobile apps offer the full functionality of the web platform, including real-time trading, portfolio tracking, price alerts, and secure wallet management. Download the app from the App Store or Google Play to trade on the go.'
  },
  {
    question: 'What tokens can I trade on TokenFlow?',
    answer: 'We support over 500 digital tokens including major cryptocurrencies like Bitcoin and Ethereum, as well as emerging tokens and DeFi projects. Our team continuously evaluates and adds new tokens based on security, liquidity, and community demand. You can view the complete list of supported tokens in your dashboard.'
  },
  {
    question: 'How do I withdraw my funds?',
    answer: 'Withdrawals are processed quickly and securely. Navigate to your wallet, select the asset you want to withdraw, enter the amount and destination address, and confirm the transaction. Most withdrawals are processed within 15 minutes. For fiat withdrawals to your bank account, processing typically takes 1-3 business days.'
  },
  {
    question: 'Does TokenFlow offer customer support?',
    answer: 'We provide 24/7 customer support through multiple channels. You can reach our support team via live chat, email, or phone. Our comprehensive help center includes detailed guides, video tutorials, and FAQs. Premium users also get access to dedicated account managers for personalized assistance.'
  }
];

export default function FAQAccordion() {
  return (
    <section id="faq" className="relative py-20 md:py-32">
      <div className="section-container max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about TokenFlow
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold text-base">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="#" 
            className="text-primary hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm px-2 py-1"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
}
