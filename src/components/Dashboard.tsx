import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, Target, TrendingUp, Clock, Zap } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Brain, label: 'Neural Score', value: '87', change: '+5%', color: 'text-blue-400' },
    { icon: Activity, label: 'Focus Time', value: '4.2h', change: '+12%', color: 'text-green-400' },
    { icon: Target, label: 'Goals Met', value: '8/10', change: '+2', color: 'text-purple-400' },
    { icon: TrendingUp, label: 'Improvement', value: '23%', change: '+8%', color: 'text-orange-400' },
  ];

  const recentSessions = [
    { type: 'Focus Session', duration: '45 min', score: 92, time: '2 hours ago' },
    { type: 'Meditation', duration: '20 min', score: 88, time: '4 hours ago' },
    { type: 'Learning', duration: '60 min', score: 85, time: '6 hours ago' },
    { type: 'Creative Work', duration: '90 min', score: 91, time: '1 day ago' },
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
          <h1 className="text-4xl font-bold gradient-text mb-2">Dashboard</h1>
          <p className="text-gray-300">Your cognitive performance overview</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="glass-effect p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Neural Activity Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Activity className="h-5 w-5 text-blue-400 mr-2" />
              Neural Activity
            </h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {[65, 78, 82, 71, 89, 94, 87, 92, 85, 88, 91, 86].map((height, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t flex-1"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>12 AM</span>
              <span>6 AM</span>
              <span>12 PM</span>
              <span>6 PM</span>
              <span>12 AM</span>
            </div>
          </motion.div>

          {/* Recent Sessions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-effect p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Clock className="h-5 w-5 text-green-400 mr-2" />
              Recent Sessions
            </h3>
            <div className="space-y-4">
              {recentSessions.map((session, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div>
                    <div className="text-white font-medium">{session.type}</div>
                    <div className="text-gray-400 text-sm">{session.time}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{session.duration}</div>
                    <div className="text-blue-400 text-sm">Score: {session.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <button className="glass-effect p-6 rounded-xl hover:bg-white/20 transition-all group">
            <Zap className="h-8 w-8 text-yellow-400 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-semibold text-white mb-2">Start Focus Session</h4>
            <p className="text-gray-300 text-sm">Begin a targeted focus enhancement session</p>
          </button>
          
          <button className="glass-effect p-6 rounded-xl hover:bg-white/20 transition-all group">
            <Brain className="h-8 w-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-semibold text-white mb-2">Neural Calibration</h4>
            <p className="text-gray-300 text-sm">Calibrate your neural monitoring settings</p>
          </button>
          
          <button className="glass-effect p-6 rounded-xl hover:bg-white/20 transition-all group">
            <Target className="h-8 w-8 text-green-400 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-semibold text-white mb-2">Set New Goal</h4>
            <p className="text-gray-300 text-sm">Define your next cognitive improvement target</p>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;