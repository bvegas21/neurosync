import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Calendar, Brain, Target, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const performanceData = [
    { date: 'Mon', focus: 85, memory: 78, creativity: 82, stress: 25 },
    { date: 'Tue', focus: 88, memory: 82, creativity: 79, stress: 22 },
    { date: 'Wed', focus: 92, memory: 85, creativity: 88, stress: 18 },
    { date: 'Thu', focus: 87, memory: 80, creativity: 85, stress: 28 },
    { date: 'Fri', focus: 94, memory: 88, creativity: 91, stress: 15 },
    { date: 'Sat', focus: 89, memory: 84, creativity: 87, stress: 20 },
    { date: 'Sun', focus: 91, memory: 86, creativity: 89, stress: 17 },
  ];

  const sessionData = [
    { name: 'Focus Sessions', value: 45, color: '#3B82F6' },
    { name: 'Meditation', value: 28, color: '#8B5CF6' },
    { name: 'Learning', value: 32, color: '#10B981' },
    { name: 'Creative Work', value: 25, color: '#F59E0B' },
  ];

  const weeklyGoals = [
    { goal: 'Daily Focus Sessions', current: 6, target: 7, percentage: 86 },
    { goal: 'Meditation Minutes', current: 180, target: 210, percentage: 86 },
    { goal: 'Learning Hours', current: 12, target: 15, percentage: 80 },
    { goal: 'Stress Reduction', current: 22, target: 20, percentage: 90 },
  ];

  const insights = [
    {
      icon: TrendingUp,
      title: 'Performance Trend',
      value: '+12%',
      description: 'Overall cognitive performance improved this week',
      color: 'text-green-400'
    },
    {
      icon: Brain,
      title: 'Peak Hours',
      value: '10-12 AM',
      description: 'Your highest focus periods consistently occur mid-morning',
      color: 'text-blue-400'
    },
    {
      icon: Target,
      title: 'Goal Achievement',
      value: '85%',
      description: 'Weekly targets met across all cognitive domains',
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      title: 'Session Duration',
      value: '38 min',
      description: 'Average session length increased by 8 minutes',
      color: 'text-orange-400'
    }
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">Performance Analytics</h1>
              <p className="text-gray-300">Comprehensive insights into your cognitive performance</p>
            </div>
            <div className="glass-effect p-2 rounded-lg">
              <div className="flex space-x-2">
                {['7d', '30d', '90d'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      timeRange === range
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : '90 Days'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {insights.map((insight, index) => (
            <div key={index} className="glass-effect p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <insight.icon className={`h-8 w-8 ${insight.color}`} />
                <span className={`text-2xl font-bold ${insight.color}`}>{insight.value}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{insight.title}</h3>
              <p className="text-gray-300 text-sm">{insight.description}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Performance Trends */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <BarChart3 className="h-5 w-5 text-blue-400 mr-2" />
              Cognitive Performance Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Line type="monotone" dataKey="focus" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="memory" stroke="#8B5CF6" strokeWidth={2} />
                <Line type="monotone" dataKey="creativity" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Session Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-effect p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Calendar className="h-5 w-5 text-green-400 mr-2" />
              Session Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sessionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {sessionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Weekly Goals Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-effect p-6 rounded-xl mb-8"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Target className="h-5 w-5 text-purple-400 mr-2" />
            Weekly Goals Progress
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeklyGoals.map((goal, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{goal.goal}</span>
                  <span className="text-gray-300 text-sm">{goal.current}/{goal.target}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${goal.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <div className="text-right">
                  <span className="text-blue-400 text-sm font-medium">{goal.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass-effect p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Detailed Metrics</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left text-gray-300 pb-3">Metric</th>
                  <th className="text-left text-gray-300 pb-3">Current</th>
                  <th className="text-left text-gray-300 pb-3">Previous</th>
                  <th className="text-left text-gray-300 pb-3">Change</th>
                  <th className="text-left text-gray-300 pb-3">Trend</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  { metric: 'Average Focus Score', current: '89.2', previous: '84.7', change: '+5.3%', trend: 'up' },
                  { metric: 'Session Completion Rate', current: '94%', previous: '91%', change: '+3%', trend: 'up' },
                  { metric: 'Stress Reduction', current: '22%', previous: '28%', change: '-21%', trend: 'down' },
                  { metric: 'Memory Retention', current: '84.5', previous: '81.2', change: '+4.1%', trend: 'up' },
                  { metric: 'Creative Output', current: '87.8', previous: '85.1', change: '+3.2%', trend: 'up' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-3 text-white">{row.metric}</td>
                    <td className="py-3 text-white font-medium">{row.current}</td>
                    <td className="py-3 text-gray-400">{row.previous}</td>
                    <td className={`py-3 font-medium ${row.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                      {row.change}
                    </td>
                    <td className="py-3">
                      <TrendingUp className={`h-4 w-4 ${row.trend === 'up' ? 'text-green-400' : 'text-red-400 rotate-180'}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;