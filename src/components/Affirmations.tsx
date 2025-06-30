import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, RefreshCw, Heart, Star, Target, Zap } from 'lucide-react';

const Affirmations = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Star, color: 'text-yellow-400' },
    { id: 'focus', name: 'Focus', icon: Target, color: 'text-blue-400' },
    { id: 'confidence', name: 'Confidence', icon: Zap, color: 'text-purple-400' },
    { id: 'wellness', name: 'Wellness', icon: Heart, color: 'text-green-400' },
  ];

  const affirmations = [
    {
      text: "My mind is sharp, focused, and capable of achieving extraordinary things.",
      category: 'focus',
      author: 'Neural Optimization Protocol'
    },
    {
      text: "I embrace challenges as opportunities to expand my cognitive abilities.",
      category: 'confidence',
      author: 'Cognitive Enhancement Series'
    },
    {
      text: "My brain creates new neural pathways with every positive thought I think.",
      category: 'wellness',
      author: 'Neuroplasticity Affirmations'
    },
    {
      text: "I am in complete control of my attention and direct it with precision.",
      category: 'focus',
      author: 'Attention Mastery Collection'
    },
    {
      text: "My confidence grows stronger with each successful cognitive task I complete.",
      category: 'confidence',
      author: 'Self-Efficacy Builders'
    },
    {
      text: "I nourish my mind with positive thoughts and watch my potential unfold.",
      category: 'wellness',
      author: 'Mental Wellness Series'
    },
    {
      text: "My memory is powerful, and I easily recall information when I need it.",
      category: 'focus',
      author: 'Memory Enhancement Protocol'
    },
    {
      text: "I trust in my ability to learn, grow, and adapt to any situation.",
      category: 'confidence',
      author: 'Growth Mindset Affirmations'
    }
  ];

  const filteredAffirmations = selectedCategory === 'all' 
    ? affirmations 
    : affirmations.filter(a => a.category === selectedCategory);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentAffirmation((prev) => 
          prev === filteredAffirmations.length - 1 ? 0 : prev + 1
        );
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, filteredAffirmations.length]);

  const nextAffirmation = () => {
    setCurrentAffirmation((prev) => 
      prev === filteredAffirmations.length - 1 ? 0 : prev + 1
    );
  };

  const currentAff = filteredAffirmations[currentAffirmation];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold gradient-text mb-2">Smart Affirmations</h1>
          <p className="text-gray-300">Personalized positive reinforcement for cognitive enhancement</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="glass-effect p-2 rounded-xl">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setCurrentAffirmation(0);
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <category.icon className={`h-4 w-4 ${category.color}`} />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Affirmation Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect p-12 rounded-2xl mb-8 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentAffirmation}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <MessageSquare className="h-12 w-12 text-blue-400 mx-auto mb-6 neural-pulse" />
              <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-6">
                "{currentAff?.text}"
              </blockquote>
              <cite className="text-gray-400 text-sm">— {currentAff?.author}</cite>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center space-x-6 mb-8"
        >
          <button
            onClick={nextAffirmation}
            className="flex items-center space-x-2 px-6 py-3 glass-effect rounded-lg hover:bg-white/20 transition-all"
          >
            <RefreshCw className="h-5 w-5 text-blue-400" />
            <span className="text-white">Next Affirmation</span>
          </button>
          
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              isAutoPlay
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'glass-effect text-white hover:bg-white/20'
            }`}
          >
            {isAutoPlay ? 'Stop Auto-Play' : 'Start Auto-Play'}
          </button>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-effect p-4 rounded-xl"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">
              {currentAffirmation + 1} of {filteredAffirmations.length}
            </span>
            <span className="text-gray-300 text-sm capitalize">
              {selectedCategory === 'all' ? 'All Categories' : selectedCategory}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentAffirmation + 1) / filteredAffirmations.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 glass-effect p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Maximizing Affirmation Effectiveness</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="text-white font-medium mb-2">Repetition</h4>
              <p className="text-gray-300">Repeat affirmations daily for neural pathway strengthening</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Visualization</h4>
              <p className="text-gray-300">Visualize yourself embodying the affirmation's message</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Emotion</h4>
              <p className="text-gray-300">Feel the positive emotions associated with each statement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Affirmations;