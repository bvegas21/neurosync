import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import NeuralMonitor from './components/NeuralMonitor';
import Soundscapes from './components/Soundscapes';
import Affirmations from './components/Affirmations';
import Analytics from './components/Analytics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Hero />
              <Features />
            </motion.div>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/neural-monitor" element={<NeuralMonitor />} />
          <Route path="/soundscapes" element={<Soundscapes />} />
          <Route path="/affirmations" element={<Affirmations />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;