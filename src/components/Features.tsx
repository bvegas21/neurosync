import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Headphones, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Target,
  Shield,
  Smartphone
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Neural Monitoring',
      description: 'Real-time brainwave analysis and cognitive state tracking using advanced EEG technology.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Headphones,
      title: 'Adaptive Soundscapes',
      description: 'AI-generated binaural beats and ambient sounds tailored to your cognitive goals.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Smart Affirmations',
      description: 'Personalized positive reinforcement based on your psychological profile and goals.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive insights into your cognitive performance patterns and improvements.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Focus Enhancement',
      description: 'Targeted exercises and techniques to improve concentration and mental clarity.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and monitor cognitive improvement goals with precision metrics.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your neural data is encrypted and stored locally with zero-knowledge architecture.',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Seamless experience across desktop, mobile, and wearable devices.',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Advanced Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology meets practical application in our comprehensive 
            cognitive optimization suite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl hover:bg-white/20 transition-all group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;