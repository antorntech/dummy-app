import React, { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Wallet,
  Settings,
  Bell,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  MoreVertical,
  CreditCard,
  Plus,
  LogOut,
  ChevronDown,
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sample data for key metrics
  const metrics = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      isPositive: true,
      icon: Wallet,
    },
    {
      title: "Active Users",
      value: "+2,350",
      change: "+180.1%",
      isPositive: true,
      icon: Users,
    },
    {
      title: "Sales Count",
      value: "+12,234",
      change: "-19%",
      isPositive: false,
      icon: BarChart3,
    },
    {
      title: "Active Subscriptions",
      value: "+573",
      change: "+201",
      isPositive: true,
      icon: CreditCard,
    },
  ];

  // Sample recent transactions
  const transactions = [
    {
      id: "TX-9021",
      customer: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+$1,999.00",
      status: "Completed",
      date: "Today, 2:34 PM",
    },
    {
      id: "TX-9022",
      customer: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "+$39.00",
      status: "Completed",
      date: "Today, 1:15 PM",
    },
    {
      id: "TX-9023",
      customer: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+$299.00",
      status: "Pending",
      date: "Yesterday",
    },
    {
      id: "TX-9024",
      customer: "William Kim",
      email: "will@email.com",
      amount: "+$99.00",
      status: "Completed",
      date: "23 Oct 2024",
    },
    {
      id: "TX-9025",
      customer: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: "+$39.00",
      status: "Failed",
      date: "22 Oct 2024",
    },
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between hidden md:flex">
        <div>
          {/* Logo */}
          <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-800">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
              A
            </div>
            <span className="font-bold text-lg tracking-wide text-white">
              ApexUI
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {[
              { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
              { id: "analytics", label: "Analytics", icon: BarChart3 },
              { id: "customers", label: "Customers", icon: Users },
              { id: "wallet", label: "Wallet", icon: Wallet },
              { id: "settings", label: "Settings", icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                      : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User / Logout Section */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/40">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center font-medium text-slate-200 border border-slate-600">
                JD
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-white">John Doe</p>
                <p className="text-[10px] text-slate-400">admin@apexui.com</p>
              </div>
            </div>
            <button className="text-slate-400 hover:text-rose-400 transition-colors p-1.5 cursor-pointer">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md px-6 flex items-center justify-between">
          <div className="relative w-64 md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full bg-slate-800/50 border border-slate-700/60 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 text-slate-400 hover:text-slate-200 bg-slate-800/40 border border-slate-700/60 rounded-xl hover:bg-slate-800 transition-all cursor-pointer">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            </button>

            <button className="hidden sm:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-medium shadow-md shadow-indigo-600/20 transition-all cursor-pointer">
              <Plus className="w-4 h-4" />
              New Report
            </button>
          </div>
        </header>

        {/* Scrollable Main View */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Welcome Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Dashboard Overview
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Here's what is happening with your store today.
              </p>
            </div>
            <button className="flex items-center gap-2 text-xs bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-slate-300 hover:text-white transition-colors cursor-pointer w-fit">
              <span>Last 30 Days</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 relative overflow-hidden backdrop-blur-sm hover:border-slate-700/80 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">
                      {metric.title}
                    </span>
                    <div className="p-2 bg-slate-800/60 border border-slate-700/40 rounded-xl text-slate-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-2xl font-bold text-white">
                      {metric.value}
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span
                        className={`inline-flex items-center text-xs font-medium ${
                          metric.isPositive
                            ? "text-emerald-400"
                            : "text-rose-400"
                        }`}
                      >
                        {metric.isPositive ? (
                          <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                        ) : (
                          <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />
                        )}
                        {metric.change}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        from last month
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Analytics & Activity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Graphic Simulation */}
            <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Revenue Analytics
                  </h3>
                  <p className="text-xs text-slate-400">
                    Monthly overview & income chart
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +12.5% Growth
                </div>
              </div>

              {/* Dummy Bar Chart */}
              <div className="h-48 flex items-end justify-between gap-2 pt-6">
                {[40, 65, 30, 80, 55, 90, 75, 45, 95, 60, 85, 70].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center gap-2 group"
                    >
                      <div className="w-full bg-slate-800 rounded-t-lg h-full relative overflow-hidden flex items-end">
                        <div
                          style={{ height: `${height}%` }}
                          className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg group-hover:from-indigo-500 group-hover:to-purple-400 transition-all duration-300"
                        />
                      </div>
                      <span className="text-[10px] text-slate-500">
                        {
                          [
                            "J",
                            "F",
                            "M",
                            "A",
                            "M",
                            "J",
                            "J",
                            "A",
                            "S",
                            "O",
                            "N",
                            "D",
                          ][index]
                        }
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Quick Stats / Info Widget */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">
                  Target Progress
                </h3>
                <p className="text-xs text-slate-400">
                  Quarterly financial goal
                </p>
              </div>

              <div className="my-6 text-center">
                <div className="inline-flex items-center justify-center relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="52"
                      stroke="currentColor"
                      strokeWidth="10"
                      className="text-slate-800"
                      fill="transparent"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="52"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeDasharray="326.7"
                      strokeDashoffset="80"
                      className="text-indigo-500 stroke-round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-white">75%</span>
                    <span className="text-[10px] text-slate-400">
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Targeted Revenue</span>
                  <span className="text-slate-200 font-medium">$60,000</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Achieved</span>
                  <span className="text-slate-200 font-medium">$45,231</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transactions Table Section */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">
                  Recent Transactions
                </h3>
                <p className="text-xs text-slate-400">
                  You have {transactions.length} recent transactions
                </p>
              </div>
              <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors cursor-pointer">
                View all
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-900/40">
                    <th className="py-3 px-6">Customer</th>
                    <th className="py-3 px-6">Status</th>
                    <th className="py-3 px-6">Date</th>
                    <th className="py-3 px-6 text-right">Amount</th>
                    <th className="py-3 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-xs text-slate-300">
                  {transactions.map((tx) => (
                    <tr
                      key={tx.id}
                      className="hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-medium text-white">
                            {tx.customer}
                          </p>
                          <p className="text-[11px] text-slate-500">
                            {tx.email}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${
                            tx.status === "Completed"
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                              : tx.status === "Pending"
                                ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                          }`}
                        >
                          {tx.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-400">{tx.date}</td>
                      <td className="py-4 px-6 text-right font-medium text-white">
                        {tx.amount}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <button className="text-slate-400 hover:text-slate-200 transition-colors p-1 cursor-pointer">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
