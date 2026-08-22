import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, FileText, ShoppingBag, Coffee, BarChart3, AlertOctagon } from 'lucide-react';

// 1. Contract Risk Analyzer Visual (GenAI / Legal Tech)
export const ContractRiskVisual: React.FC = () => {
  const [selectedClause, setSelectedClause] = useState<number>(0);

  const clauses = [
    {
      id: 'CLAUSE_04',
      title: 'INDEMNIFICATION & LIABILITY',
      risk: 'HIGH RISK (84%)',
      riskColor: 'bg-rose-500/20 text-rose-700 border-rose-400',
      note: 'Unlimited indemnification liability without cap on third-party damage claims.'
    },
    {
      id: 'CLAUSE_12',
      title: 'TERMINATION FOR CONVENIENCE',
      risk: 'MEDIUM RISK (42%)',
      riskColor: 'bg-amber-500/20 text-amber-700 border-amber-400',
      note: '30-day notice period with unrecouped setup fees.'
    },
    {
      id: 'CLAUSE_19',
      title: 'GOVERNING JURISDICTION',
      risk: 'VERIFIED LOW RISK',
      riskColor: 'bg-emerald-500/20 text-emerald-700 border-emerald-400',
      note: 'Standard Delaware corporate law jurisdiction clause.'
    }
  ];

  return (
    <div className="w-full min-h-[240px] bg-editorial-card border border-editorial-border p-5 rounded-none space-y-4 font-mono relative bg-grid-pattern">
      
      {/* UI Top Window Bar */}
      <div className="flex items-center justify-between border-b border-editorial-border/60 pb-2 text-[10px] text-editorial-muted uppercase">
        <div className="flex items-center gap-1.5 font-bold text-editorial-dark">
          <FileText className="w-3.5 h-3.5 text-editorial-green" />
          <span>LEGAL_RAG_ANALYZER_v1.0</span>
        </div>
        <span className="px-2 py-0.5 bg-rose-500/10 text-rose-700 font-bold border border-rose-300 rounded-[2px]">
          HIGH RISK DETECTED
        </span>
      </div>

      {/* Clause Selector Tabs */}
      <div className="space-y-2">
        {clauses.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setSelectedClause(idx)}
            className={`w-full text-left p-2.5 border transition-all flex items-center justify-between text-xs ${
              selectedClause === idx
                ? 'bg-editorial-bg border-editorial-dark font-bold shadow-xs'
                : 'bg-editorial-card/60 border-editorial-border/60 text-editorial-muted hover:border-editorial-dark/40'
            }`}
          >
            <div className="flex items-center gap-2">
              <AlertTriangle className={`w-3.5 h-3.5 ${idx === 0 ? 'text-rose-600' : idx === 1 ? 'text-amber-600' : 'text-emerald-600'}`} />
              <span>{item.id}: {item.title}</span>
            </div>
            <span className={`text-[9px] px-2 py-0.5 border rounded-[2px] font-mono ${item.riskColor}`}>
              {item.risk}
            </span>
          </button>
        ))}
      </div>

      {/* Extracted RAG Detail Note Box */}
      <div className="p-3 bg-editorial-dark text-white text-[11px] rounded-none border border-editorial-dark space-y-1 font-sans">
        <div className="font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>LLM EXTRACTED CLAUSE SUMMARY</span>
        </div>
        <p className="text-white/80 leading-snug">
          "{clauses[selectedClause].note}"
        </p>
      </div>

    </div>
  );
};

// 2. News Credibility Analyzer Visual (GenAI / NLP)
export const NewsCredibilityVisual: React.FC = () => {
  return (
    <div className="w-full min-h-[240px] bg-editorial-card border border-editorial-border p-5 rounded-none space-y-4 font-mono relative bg-grid-pattern">
      
      {/* Window Header */}
      <div className="flex items-center justify-between border-b border-editorial-border/60 pb-2 text-[10px] text-editorial-muted uppercase">
        <div className="flex items-center gap-1.5 font-bold text-editorial-dark">
          <AlertOctagon className="w-3.5 h-3.5 text-editorial-green" />
          <span>NEWS_CREDIBILITY_EVALUATOR</span>
        </div>
        <span className="text-editorial-green font-bold">92/100 CREDIBLE</span>
      </div>

      {/* Authenticity Gauge Bar */}
      <div className="p-4 bg-editorial-bg border border-editorial-border space-y-3">
        <div className="flex justify-between text-xs font-bold text-editorial-dark">
          <span>AUTHENTICITY SCORE</span>
          <span className="text-emerald-700">92% (HIGH CONFIDENCE)</span>
        </div>
        
        <div className="w-full h-3 bg-editorial-border/40 rounded-none overflow-hidden flex">
          <div className="h-full bg-emerald-600 w-[92%]"></div>
          <div className="h-full bg-rose-500 w-[8%]"></div>
        </div>

        {/* NLP Signals Breakdown */}
        <div className="grid grid-cols-3 gap-2 pt-1 text-[10px] text-center">
          <div className="p-1.5 border border-editorial-border bg-editorial-card">
            <span className="text-editorial-muted block">BIAS INDEX</span>
            <span className="font-bold text-editorial-dark">BALANCED (0.12)</span>
          </div>
          <div className="p-1.5 border border-editorial-border bg-editorial-card">
            <span className="text-editorial-muted block">FACT DENSITY</span>
            <span className="font-bold text-editorial-dark">88% HIGH</span>
          </div>
          <div className="p-1.5 border border-editorial-border bg-editorial-card">
            <span className="text-editorial-muted block">CLICKBAIT</span>
            <span className="font-bold text-emerald-700">LOW (4%)</span>
          </div>
        </div>
      </div>

      {/* Signal Status */}
      <div className="flex items-center justify-between text-[10px] text-editorial-muted border-t border-editorial-border/60 pt-2 uppercase">
        <span>NLP_TRANSFORMER_MODEL</span>
        <span>VERIFIED SOURCE CROSS-REF</span>
      </div>

    </div>
  );
};

// 3. StudyStuff E-Commerce Visual (Full Stack)
export const StudyStuffVisual: React.FC = () => {
  return (
    <div className="w-full min-h-[240px] bg-editorial-dark text-white p-5 rounded-none space-y-4 font-mono relative overflow-hidden shadow-md">
      
      {/* Top Terminal Bar */}
      <div className="flex items-center justify-between border-b border-white/15 pb-2 text-[10px] text-white/60 uppercase">
        <div className="flex items-center gap-1.5 font-bold text-white">
          <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
          <span>STUDYSTUFF_CHECKOUT_API</span>
        </div>
        <span className="text-emerald-400 font-bold">200 OK</span>
      </div>

      {/* Cart & API Trace Content */}
      <div className="space-y-2 text-xs">
        <div className="p-3 bg-white/5 border border-white/10 space-y-1.5">
          <div className="text-[10px] text-white/50 uppercase">CURRENT ORDER STATE</div>
          <div className="flex justify-between font-bold text-white">
            <span>DSA & System Design Masterclass</span>
            <span className="text-emerald-400">$49.00</span>
          </div>
          <div className="text-[10px] text-white/70">Cart Items: 2 | Inventory Verified | Stripe Auth Ready</div>
        </div>

        {/* Backend API Snippet */}
        <div className="p-3 bg-black/60 border border-white/10 text-[11px] text-white/80 space-y-1">
          <div><span className="text-purple-400">POST</span> /api/v1/orders/checkout</div>
          <div className="text-emerald-400 font-semibold">→ Response: {`{ status: "SUCCESS", transactionId: "tx_94812" }`}</div>
        </div>
      </div>

      {/* Footer Stack Info */}
      <div className="flex justify-between items-center text-[9px] text-white/50 border-t border-white/10 pt-2 uppercase">
        <span>NODE.JS / EXPRESS / MONGODB</span>
        <span>REST API ENDPOINT</span>
      </div>

    </div>
  );
};

// 4. Brewcraft Visual (Frontend / Coffee Recipe)
export const BrewcraftVisual: React.FC = () => {
  const [ratioIndex, setRatioIndex] = useState<number>(1);
  const ratios = [
    { ratio: '1:15', coffee: '20g', water: '300ml', note: 'Strong Bold Roast' },
    { ratio: '1:16.6', coffee: '18g', water: '300ml', note: 'Balanced Editorial Pour' },
    { ratio: '1:18', coffee: '16.5g', water: '300ml', note: 'Light Subtle Notes' },
  ];

  return (
    <div className="w-full min-h-[240px] bg-editorial-card border border-editorial-border p-5 rounded-none space-y-4 font-mono relative bg-grid-pattern">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-editorial-border/60 pb-2 text-[10px] text-editorial-muted uppercase">
        <div className="flex items-center gap-1.5 font-bold text-editorial-dark">
          <Coffee className="w-3.5 h-3.5 text-amber-700" />
          <span>BREWCRAFT_RECIPE_BUILDER</span>
        </div>
        <span className="text-amber-700 font-bold uppercase">POUR OVER PRO</span>
      </div>

      {/* Ratio Selector Buttons */}
      <div className="grid grid-cols-3 gap-2">
        {ratios.map((item, idx) => (
          <button
            key={item.ratio}
            onClick={() => setRatioIndex(idx)}
            className={`p-2 border text-center transition-colors text-xs ${
              ratioIndex === idx
                ? 'bg-editorial-dark text-white font-bold border-editorial-dark'
                : 'bg-editorial-bg text-editorial-dark border-editorial-border hover:border-editorial-dark'
            }`}
          >
            <div>{item.ratio}</div>
            <div className="text-[9px] text-editorial-muted">{item.coffee}</div>
          </button>
        ))}
      </div>

      {/* Brewing Controls Display Box */}
      <div className="p-3.5 bg-editorial-bg border border-editorial-border space-y-2 text-xs">
        <div className="flex justify-between items-baseline">
          <span className="font-bold text-editorial-dark">EXTRACTION PARAMETERS</span>
          <span className="text-[10px] text-amber-700 font-bold">{ratios[ratioIndex].note}</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-[10px] text-center pt-1 font-mono">
          <div className="p-1.5 border border-editorial-border bg-editorial-card">
            <span className="text-editorial-muted block">COFFEE</span>
            <span className="font-bold text-editorial-dark">{ratios[ratioIndex].coffee}</span>
          </div>
          <div className="p-1.5 border border-editorial-border bg-editorial-card">
            <span className="text-editorial-muted block">WATER</span>
            <span className="font-bold text-editorial-dark">{ratios[ratioIndex].water}</span>
          </div>
          <div className="p-1.5 border border-editorial-border bg-editorial-card">
            <span className="text-editorial-muted block">TIME</span>
            <span className="font-bold text-editorial-dark">02:45 MIN</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-[9px] text-editorial-muted border-t border-editorial-border/60 pt-2 uppercase">
        <span>INTERACTIVE FRONTEND UI</span>
        <span>NETLIFY LIVE PREVIEW</span>
      </div>

    </div>
  );
};

// 5. StayWise Hotel Analytics Visual (Data & Analytics)
export const StayWiseVisual: React.FC = () => {
  const drivers = [
    { name: 'Lead Time (>90 Days)', pct: 34 },
    { name: 'ADR / Pricing Spike', pct: 28 },
    { name: 'Non-Refundable Policy', pct: 22 },
    { name: 'OTA Channel Source', pct: 16 },
  ];

  return (
    <div className="w-full min-h-[240px] bg-editorial-card border border-editorial-border p-5 rounded-none space-y-4 font-mono relative bg-grid-pattern">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-editorial-border/60 pb-2 text-[10px] text-editorial-muted uppercase">
        <div className="flex items-center gap-1.5 font-bold text-editorial-dark">
          <BarChart3 className="w-3.5 h-3.5 text-editorial-green" />
          <span>STAYWISE_CANCELLATION_ANALYTICS</span>
        </div>
        <span className="text-emerald-700 font-bold">27.4% CANCEL RATE</span>
      </div>

      {/* Cancellation Drivers Bar Graph */}
      <div className="p-3.5 bg-editorial-bg border border-editorial-border space-y-2.5">
        <div className="text-[10px] font-bold text-editorial-dark uppercase tracking-wider">
          PRIMARY CANCELLATION DRIVERS
        </div>

        <div className="space-y-2 text-[11px]">
          {drivers.map((d) => (
            <div key={d.name} className="space-y-1">
              <div className="flex justify-between text-[10px] text-editorial-dark">
                <span>{d.name}</span>
                <span className="font-bold">{d.pct}%</span>
              </div>
              <div className="w-full h-2 bg-editorial-border/40 overflow-hidden">
                <div className="h-full bg-editorial-dark" style={{ width: `${d.pct * 2.5}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-[9px] text-editorial-muted border-t border-editorial-border/60 pt-2 uppercase">
        <span>PYTHON / PANDAS / MATPLOTLIB</span>
        <span>OPTIMIZED REVENUE STRATEGY</span>
      </div>

    </div>
  );
};

// 6. Road Traffic Accidents Visual (Data & Analytics)
export const TrafficAccidentsVisual: React.FC = () => {
  const hotspots = [
    { zone: 'SECTOR_A4 INTERSECTION', severity: 'HIGH (42 ACCIDENTS)', peak: '18:00 - 21:00' },
    { zone: 'HIGHWAY_12 EXPRESS', severity: 'MEDIUM (24 ACCIDENTS)', peak: '07:00 - 09:00' },
  ];

  return (
    <div className="w-full min-h-[240px] bg-editorial-card border border-editorial-border p-5 rounded-none space-y-4 font-mono relative bg-grid-pattern">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-editorial-border/60 pb-2 text-[10px] text-editorial-muted uppercase">
        <div className="flex items-center gap-1.5 font-bold text-editorial-dark">
          <BarChart3 className="w-3.5 h-3.5 text-rose-600" />
          <span>ROAD_TRAFFIC_HOTSPOT_ANALYTICS</span>
        </div>
        <span className="text-rose-600 font-bold uppercase">SAFETY INTERVENTION</span>
      </div>

      {/* Hotspots Card Box */}
      <div className="space-y-2">
        {hotspots.map((item, idx) => (
          <div key={idx} className="p-3 bg-editorial-bg border border-editorial-border space-y-1 text-xs">
            <div className="flex justify-between items-center">
              <span className="font-bold text-editorial-dark">{item.zone}</span>
              <span className="text-[9px] px-2 py-0.5 bg-rose-500/10 text-rose-700 border border-rose-300 font-bold">
                {item.severity}
              </span>
            </div>
            <div className="text-[10px] text-editorial-muted">
              Peak Temporal Risk: <span className="text-editorial-dark font-semibold">{item.peak}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center text-[9px] text-editorial-muted border-t border-editorial-border/60 pt-2 uppercase">
        <span>STATISTICAL RISK PATTERNS</span>
        <span>GEOGRAPHIC HOTSPOT MODEL</span>
      </div>

    </div>
  );
};
