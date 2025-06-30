import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Settings, Headphones } from 'lucide-react';

const Soundscapes = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const soundscapes = [
    {
      id: 1,
      name: 'Focus Flow',
      description: 'Binaural beats for enhanced concentration',
      frequency: '40Hz Gamma',
      duration: '30 min',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Deep Meditation',
      description: 'Theta waves for profound relaxation',
      frequency: '6Hz Theta',
      duration: '45 min',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Creative Boost',
      description: 'Alpha waves for enhanced creativity',
      frequency: '10Hz Alpha',
      duration: '25 min',
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Memory Palace',
      description: 'Optimized for learning and retention',
      frequency: '15Hz Beta',
      duration: '35 min',
      color: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      name: 'Stress Relief',
      description: 'Calming frequencies for anxiety reduction',
      frequency: '8Hz Alpha',
      duration: '20 min',
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      name: 'Power Nap',
      description: 'Delta waves for restorative rest',
      frequency: '2Hz Delta',
      duration: '15 min',
      color: 'from-gray-500 to-slate-500',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const handlePlay = (track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold gradient-text mb-2">Adaptive Soundscapes</h1>
          <p className="text-gray-300">AI-generated binaural beats and ambient sounds for cognitive enhancement</p>
        </motion.div>

        {/* Current Playing */}
        {currentTrack && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect p-6 rounded-xl mb-8"
          >
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src={currentTrack.image}
                  alt={currentTrack.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{currentTrack.name}</h3>
                <p className="text-gray-300 mb-2">{currentTrack.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{currentTrack.frequency}</span>
                  <span>•</span>
                  <span>{currentTrack.duration}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handlePlay(currentTrack)}
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1" />
                  )}
                </button>
                <Volume2 className="w-6 h-6 text-gray-400" />
                <Settings className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: isPlaying ? '35%' : '0%' }}
                  transition={{ duration: 2 }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>7:23</span>
                <span>{currentTrack.duration}</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Soundscape Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soundscapes.map((soundscape, index) => (
            <motion.div
              key={soundscape.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl overflow-hidden hover:bg-white/20 transition-all group"
            >
              <div className="relative">
                <img
                  src={soundscape.image}
                  alt={soundscape.name}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${soundscape.color} opacity-60`}></div>
                <button
                  onClick={() => handlePlay(soundscape)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    {currentTrack?.id === soundscape.id && isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </div>
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{soundscape.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{soundscape.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-400 font-medium">{soundscape.frequency}</span>
                  <span className="text-gray-400">{soundscape.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Audio Controls Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 glass-effect p-6 rounded-xl"
        >
          <div className="flex items-center mb-4">
            <Headphones className="h-6 w-6 text-blue-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">Optimal Listening</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="text-white font-medium mb-2">Headphone Recommendation</h4>
              <p className="text-gray-300">Use high-quality headphones for best binaural beat effectiveness</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Volume Setting</h4>
              <p className="text-gray-300">Keep volume at comfortable level - effects work at low volumes</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Session Duration</h4>
              <p className="text-gray-300">Start with shorter sessions and gradually increase duration</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Soundscapes;