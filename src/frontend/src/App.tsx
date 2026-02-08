import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import MarketingNavbar from './components/MarketingNavbar';
import { Hero, Features, HowItWorks, Footer } from './components/Sections';
import RoadmapTimeline from './components/RoadmapTimeline';
import FAQAccordion from './components/FAQAccordion';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-background">
        <MarketingNavbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <RoadmapTimeline />
          <FAQAccordion />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
