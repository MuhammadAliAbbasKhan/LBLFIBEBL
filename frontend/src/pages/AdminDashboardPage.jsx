import React, { useState, useEffect } from 'react';
import { Shield, Lock, Users, CreditCard, RefreshCw, Key, Database, Sparkles, CheckCircle, AlertTriangle } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import apiService from '../services/api';

export const AdminDashboardPageComponent = () => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [analytics, setAnalytics] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await apiService.getAdminAnalytics(passcode);
    setLoading(false);

    if (res.success) {
      setIsAuthenticated(true);
      setAnalytics(res.data);
      addToast('Executive Admin Access Granted 🛡️', 'success');
      fetchUsers(passcode);
    } else {
      addToast(res.message || 'Invalid Executive Admin Passcode', 'error');
    }
  };

  const fetchUsers = async (code) => {
    const userRes = await apiService.getAdminUsers(code || passcode);
    if (userRes.success) {
      setUsers(userRes.users || []);
    }
  };

  const handlePlanUpdate = async (email, newPlan) => {
    const res = await apiService.updateUserPlan(passcode, { email, plan_tier: newPlan });
    if (res.success) {
      addToast(`Updated ${email} plan to ${newPlan}`, 'success');
      fetchUsers(passcode);
    } else {
      addToast(res.message || 'Failed to update plan', 'error');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl space-y-6 text-gray-100">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Shield className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">LBLFIBEBL Admin Console 🛡️</h2>
            <p className="text-xs text-gray-400">Restricted Executive Management Portal</p>
          </div>
        </div>

        <form onSubmit={handleAdminLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              Executive Admin Passcode
            </label>
            <div className="relative">
              <Key className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter secret passcode..."
                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-bold rounded-xl shadow-lg shadow-amber-600/25 transition-all flex items-center justify-center gap-2"
          >
            {loading ? 'Authenticating...' : 'Authorize Executive Console'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Top Console Bar */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
              LBLFIBEBL Executive Admin Console
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ACTIVE
              </span>
            </h1>
            <p className="text-xs text-gray-400">Dual Database Synchronization: SQLite + MongoDB Atlas Cloud</p>
          </div>
        </div>

        <button
          onClick={() => fetchUsers(passcode)}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-xl text-xs font-semibold border border-gray-700 flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Refresh Analytics
        </button>
      </div>

      {/* Analytics KPI Grid */}
      {analytics && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Registered Users</span>
            <div className="text-3xl font-extrabold text-cyan-400 mt-2">{analytics.total_users || 0}</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Active Paid Licenses</span>
            <div className="text-3xl font-extrabold text-emerald-400 mt-2">{analytics.active_subscriptions || 0}</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Evaluation Requests</span>
            <div className="text-3xl font-extrabold text-amber-400 mt-2">{analytics.trial_requests || 0}</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">CAD Spec Submissions</span>
            <div className="text-3xl font-extrabold text-indigo-400 mt-2">{analytics.service_requests || 0}</div>
          </div>
        </div>
      )}

      {/* User Subscription Manager Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-cyan-400" /> User Subscription & License Tier Manager
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-300">
            <thead className="bg-gray-800/80 uppercase text-[10px] text-gray-400 font-semibold tracking-wider">
              <tr>
                <th className="p-3">User Email</th>
                <th className="p-3">Full Name</th>
                <th className="p-3">Plan Tier</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {users.length > 0 ? (
                users.map((u, i) => (
                  <tr key={i} className="hover:bg-gray-800/40 transition-colors">
                    <td className="p-3 font-semibold text-white">{u.email}</td>
                    <td className="p-3">{u.full_name || 'Dr. Hans Weber'}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded font-bold uppercase text-[10px] bg-cyan-500/20 text-cyan-300">
                        {u.plan_tier || 'standard'}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-emerald-500/20 text-emerald-300">
                        Active
                      </span>
                    </td>
                    <td className="p-3 space-x-1">
                      <button
                        onClick={() => handlePlanUpdate(u.email, 'basic')}
                        className="px-2 py-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-300"
                      >
                        Basic
                      </button>
                      <button
                        onClick={() => handlePlanUpdate(u.email, 'standard')}
                        className="px-2 py-1 rounded bg-blue-600/30 hover:bg-blue-600 text-blue-200"
                      >
                        Standard
                      </button>
                      <button
                        onClick={() => handlePlanUpdate(u.email, 'premium')}
                        className="px-2 py-1 rounded bg-amber-600/30 hover:bg-amber-600 text-amber-200"
                      >
                        Premium
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-gray-500">
                    No user records synced yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const AdminDashboardPage = AdminDashboardPageComponent;
export default AdminDashboardPageComponent;
