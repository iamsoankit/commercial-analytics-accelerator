import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function App() {
  const [profitCubeData] = useState([
    { segment: 'Enterprise SaaS', revenue: 620000, margin: 34.5 },
    { segment: 'Mid-Market FinTech', revenue: 410000, margin: 28.1 },
    { segment: 'DeepTech / AI', revenue: 290000, margin: 19.4 },
  ]);

  const [dealIntelligence] = useState([
    { id: 1, target: 'Nexus Data Systems', type: 'M&A Acquisition', value: '$78M', confidence: 'Verified (99%)' },
    { id: 2, target: 'Aura Health Solutions', type: 'Series C Growth', value: '$34M', confidence: 'Ambiguous (Resolved)' },
    { id: 3, target: 'Vanguard Logistics', type: 'Corporate Buyout', value: '$110M', confidence: 'Audited (95%)' },
  ]);

  return (
    <div className="p-8 bg-slate-950 text-slate-100 min-h-screen font-sans">
      <header className="mb-8 border-b border-slate-800 pb-4 flex justify-between items-center">
        <div>
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Preqin Ecosystem Intelligence</span>
          <h1 className="text-3xl font-bold tracking-tight mt-1">Commercial Analytics & Deal Engine</h1>
        </div>
        <div className="text-right text-xs text-slate-400 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
          <p>System Status: <span className="text-emerald-400 font-semibold">Live Pipeline Active</span></p>
          <p>Confidence Threshold: 95.2%</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-blue-400">Profit Cube: Multi-Dimensional Margin Analysis</h2>
            <span className="text-xs bg-blue-950 text-blue-300 px-2.5 py-1 rounded">EBITDA Breakdown</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={profitCubeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="segment" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }} />
                <Bar dataKey="margin" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-emerald-400">MoneyMap: Private Market Deal Flow</h2>
              <span className="text-xs bg-emerald-950 text-emerald-300 px-2.5 py-1 rounded">Ownership Linked</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="border-b border-slate-800 text-slate-400 uppercase text-xs">
                  <tr>
                    <th className="pb-3">Company Target</th>
                    <th className="pb-3">Deal Type</th>
                    <th className="pb-3">Valuation</th>
                    <th className="pb-3">Audit State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {dealIntelligence.map((deal) => (
                    <tr key={deal.id} className="hover:bg-slate-850">
                      <td className="py-3 font-medium text-white">{deal.target}</td>
                      <td className="py-3 text-slate-400">{deal.type}</td>
                      <td className="py-3 text-emerald-400 font-semibold">{deal.value}</td>
                      <td className="py-3">
                        <span className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {deal.confidence}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between">
            <span>Entity Disambiguation Engine: Operational</span>
            <span>Cross-Source Comparison: Enabled</span>
          </div>
        </div>
      </div>
    </div>
  );
}