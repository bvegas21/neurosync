import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, Zap, Waves, AlertCircle } from 'lucide-react';

const NeuralMonitor = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [brainwaves, setBrainwaves] = useState({
    alpha: 45,
    beta: 32,
    theta: 18,
    delta: 5
  });

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(() => {
        setBrainwaves({
          alpha: Math.floor(Math.random() * 30) + 35,
          beta: Math.floor(Math.random() * 25) + 25,
          theta: Math.floor(Math.random() * 15) + 10,
          delta: Math.floor(Math.random() * 10) + 2
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring]);

  const waveTypes = [
    { name: 'Alpha', value: brainwaves.alpha, color: 'bg-blue-500', description: 'Relaxed awareness' },
    { name: 'Beta', value: brainwaves.beta, color: 'bg-green-500', description: 'Active thinking' },
    { name: 'Theta', value: brainwaves.theta, color: 'bg-purple-500', description: 'Deep meditation' },
    { name: 'Delta', value: brainwaves.delta, color: 'bg-orange-500', description: 'Deep sleep' }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold gradient-text mb-2">Neural Monitor</h1>
          <p className="text-gray-300">Real-time brainwave analysis and cognitive state tracking</p>
        </motion.div>

        {/* Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect p-6 rounded-xl mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Brain className={`h-8 w-8 ${isMonitoring ? 'text-green-400 neural-pulse' : 'text-gray-400'}`} />
              <div>
                <h3 className="text-xl font-semibold text-white">Neural Interface</h3>
                <p className="text-gray-300 text-sm">
                  {isMonitoring ? 'Actively monitoring neural activity' : 'Neural monitoring offline'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsMonitoring(!isMonitoring)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                isMonitoring
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white neural-glow'
              }`}
            >
              {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Brainwave Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Waves className="h-5 w-5 text-blue-400 mr-2" />
              Brainwave Activity
            </h3>
            
            <div className="space-y-6">
              {waveTypes.map((wave, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{wave.name} Waves</span>
                    <span className="text-gray-300">{wave.value}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full ${wave.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${wave.value}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <p className="text-gray-400 text-xs">{wave.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Real-time Waveform */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-effect p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Activity className="h-5 w-5 text-green-400 mr-2" />
              Live Waveform
            </h3>
            
            <div className="h-64 bg-black/30 rounded-lg p-4 relative overflow-hidden">
              {isMonitoring ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <motion.path
                      d="M0,100 Q100,50 200,100 T400,100"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.path
                      d="M0,120 Q100,80 200,120 T400,120"
                      stroke="#10B981"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                    <motion.path
                      d="M0,80 Q100,40 200,80 T400,80"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    />
                  </svg>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <AlertCircle className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-400">Start monitoring to view waveform</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Cognitive State Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-effect p-6 rounded-xl text-center">
            <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Focus Level</h4>
            <div className="text-3xl font-bold text-yellow-400 mb-1">
              {isMonitoring ? '87%' : '--'}
            </div>
            <p className="text-gray-300 text-sm">High concentration detected</p>
          </div>
          
          <div className="glass-effect p-6 rounded-xl text-center">
            <Brain className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Cognitive Load</h4>
            <div className="text-3xl font-bold text-purple-400 mb-1">
              {isMonitoring ? '64%' : '--'}
            </div>
            <p className="text-gray-300 text-sm">Optimal processing state</p>
          </div>
          
          <div className="glass-effect p-6 rounded-xl text-center">
            <Activity className="h-8 w-8 text-green-400 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Stress Level</h4>
            <div className="text-3xl font-bold text-green-400 mb-1">
              {isMonitoring ? '23%' : '--'}
            </div>
            <p className="text-gray-300 text-sm">Low stress detected</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NeuralMonitor;