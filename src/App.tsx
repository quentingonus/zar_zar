import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import WorkModal from './components/WorkModal';
import About from './components/About';
import Footer from './components/Footer';
import { workGroups, WorkItem } from './data/workGroups';



export default function App() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedWork ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedWork]);

  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <Gallery workGroups={workGroups} onSelect={setSelectedWork} />
      <WorkModal selectedWork={selectedWork} workGroups={workGroups} onClose={() => setSelectedWork(null)} />
      <About />
      <Footer />
    </div>
  );
}
