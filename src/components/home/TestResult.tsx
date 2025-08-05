import React from 'react';

const TestResult = () => {
  // Mock data for the dashboard
  const topPerformers = [
    {
      rank: 1,
      name: "Rahul Sharma",
      score: 98,
      subject: "Mathematics",
      testDate: "2024-01-15",
      improvement: "+12%"
    },
    {
      rank: 2,
      name: "Priya Patel",
      score: 96,
      subject: "Mathematics",
      testDate: "2024-01-15",
      improvement: "+8%"
    },
    {
      rank: 3,
      name: "Amit Kumar",
      score: 94,
      subject: "Mathematics",
      testDate: "2024-01-15",
      improvement: "+15%"
    },
    {
      rank: 4,
      name: "Neha Singh",
      score: 92,
      subject: "Mathematics",
      testDate: "2024-01-15",
      improvement: "+6%"
    },
    {
      rank: 5,
      name: "Vikram Verma",
      score: 90,
      subject: "Mathematics",
      testDate: "2024-01-15",
      improvement: "+10%"
    }
  ];

  const monthlyStats = [
    {
      month: "January 2024",
      totalTests: 45,
      avgScore: 78,
      topScore: 98,
      participants: 32
    },
    {
      month: "December 2023",
      totalTests: 42,
      avgScore: 75,
      topScore: 96,
      participants: 30
    },
    {
      month: "November 2023",
      totalTests: 38,
      avgScore: 72,
      topScore: 94,
      participants: 28
    }
  ];

  const recentTests = [
    {
      testName: "JEE Mains Mock Test 1",
      date: "2024-01-15",
      participants: 25,
      avgScore: 76,
      highestScore: 98
    },
    {
      testName: "CBSE 12th Practice Test",
      date: "2024-01-12",
      participants: 18,
      avgScore: 82,
      highestScore: 96
    },
    {
      testName: "JAC 10th Sample Test",
      date: "2024-01-10",
      participants: 22,
      avgScore: 79,
      highestScore: 94
    }
  ];

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 2: return "bg-gray-100 text-gray-800 border-gray-200";
      case 3: return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return "🥇";
      case 2: return "🥈";
      case 3: return "🥉";
      default: return "🏆";
    }
  };

  return (
    <section className="py-20 px-6 lg:px-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-200 text-sm font-medium rounded-full mb-6 border border-blue-400/30">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Live Performance Dashboard
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Last Month Class Test Results
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Track student progress, view leaderboards, and monitor performance analytics in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Top Performers Leaderboard */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">🏆 Top Performers</h3>
              <div className="text-sm text-blue-200">Latest Test Results</div>
            </div>
            
            <div className="space-y-4">
              {topPerformers.map((performer) => (
                <div key={performer.rank} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${getRankColor(performer.rank)}`}>
                      {getRankIcon(performer.rank)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{performer.name}</div>
                      <div className="text-sm text-blue-200">{performer.subject}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{performer.score}%</div>
                    <div className="text-sm text-green-300">{performer.improvement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Analytics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Last three months results</h3>
            
            <div className="space-y-6">
              {monthlyStats.map((stat, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">{stat.month}</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-blue-200">Tests</div>
                      <div className="text-white font-semibold">{stat.totalTests}</div>
                    </div>
                    <div>
                      <div className="text-blue-200">Avg Score</div>
                      <div className="text-white font-semibold">{stat.avgScore}%</div>
                    </div>
                    <div>
                      <div className="text-blue-200">Top Score</div>
                      <div className="text-green-400 font-semibold">{stat.topScore}%</div>
                    </div>
                    <div>
                      <div className="text-blue-200">Students</div>
                      <div className="text-white font-semibold">{stat.participants}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestResult;

