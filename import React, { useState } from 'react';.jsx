import React, { useState } from 'react';
import { Target, Circle, Zap, BookOpen, Shapes, Scale, Maximize2, Activity } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('formules'); // 'concept' ou 'formules'
  
  // States pour les interactifs
  const [nConcept, setNConcept] = useState(1);
  const [conceptLevel, setConceptLevel] = useState(1); // NOUVEAU: Pour l'étape 3 du concept
  const [speedF1, setSpeedF1] = useState(50); // Formule 1: Vitesse de 0 à 100
  const [radiusN, setRadiusN] = useState(1);  // Formule 2: Rayon N (1-4)
  const [energyN, setEnergyN] = useState(1);  // Formule 3: Energie N (1-5)

  const layerNames = ['K', 'L', 'M', 'N', 'O'];

  // Fonction utilitaire pour SVG Formule 1
  const getOrbitStatus = () => {
    if (speedF1 < 45) return 'crash';
    if (speedF1 > 55) return 'fly';
    return 'stable';
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      
      {/* NAVBAR */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-xl border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
            <div className="flex items-center gap-3 font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-sm">
              <Shapes size={32} className="text-blue-400" />
              <span>AtomeFacile</span>
            </div>
            <div className="flex bg-slate-800 rounded-xl p-1 shadow-inner border border-slate-700">
              <button 
                onClick={() => setActiveTab('concept')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold transition-all duration-300 ${activeTab === 'concept' ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-900/50 scale-105' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
              >
                <Target size={18} /> L'Histoire en Images
              </button>
              <button 
                onClick={() => setActiveTab('formules')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold transition-all duration-300 ${activeTab === 'formules' ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg shadow-amber-900/50 scale-105' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
              >
                <BookOpen size={18} /> Décodeur de Formules
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTENU PRINCIPAL */}
      <main className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          
          {/* ========================================== */}
          {/* ONGLET 1 : LES IMAGES */}
          {/* ========================================== */}
          {activeTab === 'concept' && (
             <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <header className="text-center space-y-4 mb-16">
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                  L'Atome, sans prise de tête.
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                  Découvrons ensemble comment fonctionne un atome d'hydrogène avec des concepts simples.
                </p>
              </header>

              {/* Étape 1, 2, 3 (Simplifiées ici pour se concentrer sur l'onglet 2) */}
              <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-3 text-blue-600 font-bold text-lg bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                    <Target size={20} /> Étape 1 : Le système solaire miniature
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">Un Soleil et une Planète</h2>
                  <p className="text-lg leading-relaxed text-slate-600">
                    L'atome d'hydrogène ressemble à notre système solaire. Le noyau (positif) attire l'électron (négatif), mais la vitesse de l'électron l'empêche de s'écraser.
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative w-64 h-64 bg-slate-900 rounded-full shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] border-4 border-slate-800 flex items-center justify-center overflow-hidden">
                    <div className="absolute w-8 h-8 bg-red-500 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.6)] z-10 animate-pulse"></div>
                    <div className="absolute w-48 h-48 border border-slate-600 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute w-full h-full animate-[spin_3s_linear_infinite]">
                      <div className="absolute top-8 left-1/2 -ml-3 w-6 h-6 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(96,165,250,0.8)]"></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* NOUVELLE ÉTAPE 3 : L'ACCUMULATION INFINIE */}
              <section className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 border-b border-amber-600 text-white flex items-center gap-3">
                   <Zap size={28} className="text-amber-100" />
                   <h2 className="text-2xl font-bold">Étape 2 & 3 : L'Embouteillage des Couches (K, L, M...)</h2>
                </div>
                
                <div className="p-8 grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Ton cours dit : <em className="bg-amber-100 px-2 rounded text-amber-900">"les couches de nombre N élevé s'accumulent juste en dessous de l'énergie zéro"</em>. Qu'est-ce que ça veut dire ?
                    </p>
                    
                    <ul className="space-y-4 text-slate-600">
                      <li className="flex gap-3">
                        <span className="font-bold text-amber-600 w-8">1.</span> 
                        <div>Les physiciens ont donné des lettres aux marches : <strong>K pour N=1</strong>, <strong>L pour N=2</strong>, <strong>M pour N=3</strong>, etc.</div>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-amber-600 w-8">2.</span> 
                        <div>La marche <strong>K</strong> est le fond du trou (<strong>-13.6 eV</strong>). Pour monter à <strong>L</strong>, il faut faire un bond géant !</div>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-amber-600 w-8">3.</span> 
                        <div>Mais plus tu montes, plus les marches deviennent petites. Juste avant la liberté (<strong>0 eV</strong>), il y a une <strong>infinité de marches écrasées</strong> les unes sur les autres !</div>
                      </li>
                    </ul>

                    {/* Contrôleur de l'électron */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-6 shadow-inner text-center space-y-4">
                      <div className="font-bold text-slate-700 uppercase tracking-widest text-sm">Contrôle de l'Électron</div>
                      <div className="text-3xl font-extrabold text-amber-600">
                        N = {conceptLevel} <span className="text-slate-400 text-2xl font-normal">(Couche {layerNames[Math.min(conceptLevel - 1, 4)] || '...'})</span>
                      </div>
                      <div className="text-lg font-mono bg-white inline-block px-4 py-2 rounded-lg border border-slate-300">
                        Énergie : {(-13.6 / (conceptLevel * conceptLevel)).toFixed(3)} eV
                      </div>
                      
                      <div className="flex gap-2 justify-center pt-4">
                        <button 
                          onClick={() => setConceptLevel(Math.max(1, conceptLevel - 1))}
                          className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold transition-colors"
                        >
                          Descendre d'une marche
                        </button>
                        <button 
                          onClick={() => setConceptLevel(Math.min(20, conceptLevel + 1))}
                          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold transition-colors shadow-md"
                        >
                          Propulser vers le haut 🚀
                        </button>
                      </div>
                      <p className="text-xs text-slate-500">
                        Clique sur "Propulser" pour voir l'électron monter et observer l'embouteillage près du 0 !
                      </p>
                    </div>
                  </div>

                  {/* Le Puits Infini (Visualisation Interactive) */}
                  <div className="bg-slate-900 rounded-3xl p-6 relative flex justify-center border-4 border-slate-800 shadow-2xl h-[500px]">
                    <div className="absolute top-4 left-4 text-emerald-400 font-bold bg-emerald-900/40 px-3 py-1 rounded-full border border-emerald-800/50 backdrop-blur-sm z-10 flex items-center gap-2">
                       LIBERTÉ (0 eV) <Zap size={16} />
                    </div>

                    <svg width="100%" height="100%" viewBox="0 0 300 450" preserveAspectRatio="xMidYMid meet">
                      {/* Ligne de liberté 0 eV */}
                      <line x1="20" y1="50" x2="280" y2="50" stroke="#34d399" strokeWidth="3" strokeDasharray="5,5" />
                      <rect x="0" y="0" width="300" height="50" fill="#34d399" opacity="0.1" />

                      {/* Générer les niveaux 1 à 20 pour montrer l'accumulation */}
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20].map((n) => {
                         const val = -13.6 / (n * n);
                         // Mapping : -13.6 eV = 400px, 0 eV = 50px
                         const y = 50 + (val / -13.6) * 350;
                         const isCurrent = n === conceptLevel;
                         const isKnownLetter = n <= 5;
                         
                         return (
                           <g key={`acc-${n}`}>
                             <line 
                               x1="50" y1={y} x2="250" y2={y} 
                               stroke={isCurrent ? "#f59e0b" : "#475569"} 
                               strokeWidth={isCurrent ? "3" : (n > 5 ? "0.5" : "1.5")} 
                               opacity={n > 5 && !isCurrent ? 0.5 : 1}
                             />
                             {/* Lettre/N à gauche */}
                             {(isKnownLetter || isCurrent) && (
                               <text x="40" y={y + 4} textAnchor="end" fill={isCurrent ? "#f59e0b" : "#94a3b8"} fontSize={n > 5 ? "10" : "12"} fontWeight="bold">
                                 {isKnownLetter ? layerNames[n-1] : `N=${n}`}
                               </text>
                             )}
                             {/* Energie à droite */}
                             {(isKnownLetter || isCurrent) && (
                               <text x="260" y={y + 4} textAnchor="start" fill={isCurrent ? "#f59e0b" : "#64748b"} fontSize={n > 5 ? "10" : "12"} className="font-mono">
                                 {val.toFixed(2)}
                               </text>
                             )}
                           </g>
                         )
                      })}

                      {/* L'électron animé */}
                      <g style={{
                        transform: `translate(150px, ${50 + ((-13.6 / (conceptLevel * conceptLevel)) / -13.6) * 350}px)`,
                        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}>
                         <circle cx="0" cy="0" r="12" fill="#3b82f6" stroke="#fff" strokeWidth="2" className="shadow-lg" />
                         <circle cx="0" cy="0" r="20" fill="#3b82f6" opacity="0.3" className="animate-ping" />
                      </g>

                      {/* Flèche illustrative "Le grand saut K -> L" */}
                      {conceptLevel === 1 && (
                         <g className="animate-pulse">
                           <path d="M 120 400 Q 100 280 120 145" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4,4" />
                           <polygon points="120,135 115,145 125,145" fill="#fbbf24" />
                           <text x="100" y="270" fill="#fbbf24" fontSize="12" fontWeight="bold" transform="rotate(-70 100 270)">Saut Géant !</text>
                         </g>
                      )}
                      
                      {/* Accolade illustrative "L'embouteillage" */}
                      <path d="M 270 50 Q 285 50 285 65 L 285 70 Q 295 75 285 80 L 285 85 Q 285 100 270 100" fill="none" stroke="#ef4444" strokeWidth="2" />
                      <text x="290" y="80" fill="#ef4444" fontSize="12" fontWeight="bold" transform="rotate(90 290 80)">Infinité de couches</text>

                    </svg>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* ========================================== */}
          {/* ONGLET 2 : LE DÉCODEUR DE FORMULES (LABO PRO) */}
          {/* ========================================== */}
          {activeTab === 'formules' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              <header className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-amber-700 tracking-tight">
                  Laboratoire des Formules
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  On prend les formules compliquées de ta feuille, et on les transforme en expériences interactives.
                </p>
              </header>

              {/* -------------------------------------------------- */}
              {/* LABORATOIRE 1 : L'ÉQUILIBRE                        */}
              {/* -------------------------------------------------- */}
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 border-b border-slate-700 text-white flex items-center justify-between">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <Scale className="text-blue-400" size={28} /> Labo 1 : L'Équilibre Parfait
                  </h2>
                  <span className="text-sm font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Formule ligne 1</span>
                </div>
                
                <div className="p-8 grid lg:grid-cols-2 gap-12">
                  
                  {/* Partie Gauche : Explication */}
                  <div className="space-y-6">
                    <div className="flex flex-col items-center bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner">
                      <div className="text-2xl md:text-3xl font-serif text-slate-800 flex items-center gap-6 font-bold">
                        <div className="flex flex-col items-center text-red-600">
                          <span>e²</span>
                          <div className="w-full h-[2px] bg-red-600 my-1"></div>
                          <span>4πε₀ r²</span>
                        </div>
                        <span className="text-slate-400 text-4xl">=</span>
                        <div className="flex flex-col items-center text-blue-600">
                          <span>M v²</span>
                          <div className="w-full h-[2px] bg-blue-600 my-1"></div>
                          <span>r</span>
                        </div>
                      </div>
                      <div className="flex w-full justify-between mt-4 text-sm font-bold uppercase tracking-wider">
                        <span className="text-red-500">Attraction (Aimant)</span>
                        <span className="text-blue-500">Force Centrifuge (Manège)</span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Pour que l'électron ne s'écrase pas sur le noyau, sa vitesse de rotation (force centrifuge) doit compenser exactement la force d'attraction du noyau. <strong>Joue avec la vitesse de l'électron dans le simulateur à droite.</strong>
                    </p>
                  </div>

                  {/* Partie Droite : Simulateur */}
                  <div className="bg-slate-900 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border-4 border-slate-800 shadow-2xl">
                    <div className="text-center text-white font-bold mb-4 uppercase tracking-widest text-sm text-slate-400">
                      Simulateur d'Orbite
                    </div>
                    
                    {/* Ecran de simulation */}
                    <div className="h-48 w-full bg-black rounded-2xl border border-slate-700 mb-6 relative overflow-hidden flex justify-center items-center">
                      <div className="absolute w-8 h-8 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)]"></div>
                      
                      {/* L'orbite théorique (pointillée) */}
                      <div className="absolute w-32 h-32 border border-slate-600 rounded-full border-dashed"></div>

                      {/* L'électron et son animation selon la vitesse */}
                      <div className={`absolute w-full h-full flex justify-center items-center ${
                          getOrbitStatus() === 'stable' ? 'animate-[spin_2s_linear_infinite]' : 
                          getOrbitStatus() === 'crash' ? 'animate-[spin_4s_linear_infinite]' : 'animate-[spin_0.5s_linear_infinite]'
                        }`}
                        style={{
                           transform: getOrbitStatus() === 'crash' ? 'scale(0.1)' : getOrbitStatus() === 'fly' ? 'scale(5)' : 'scale(1)',
                           transition: 'transform 1s ease-in-out'
                        }}
                      >
                         <div className="absolute top-8 w-6 h-6 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]"></div>
                      </div>

                      {/* Messages d'état */}
                      <div className="absolute bottom-3 text-center w-full font-bold">
                        {getOrbitStatus() === 'crash' && <span className="text-red-500 bg-red-950/80 px-3 py-1 rounded">⚠️ Vitesse insuffisante : Écrasement !</span>}
                        {getOrbitStatus() === 'stable' && <span className="text-green-400 bg-green-950/80 px-3 py-1 rounded">✅ Vitesse parfaite : Orbite stable</span>}
                        {getOrbitStatus() === 'fly' && <span className="text-blue-400 bg-blue-950/80 px-3 py-1 rounded">🚀 Vitesse excessive : L'électron s'échappe !</span>}
                      </div>
                    </div>

                    {/* Contrôleur */}
                    <div className="space-y-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                      <div className="flex justify-between text-white font-bold">
                        <span>Manette de Vitesse (v)</span>
                        <span className="text-blue-400">{speedF1} %</span>
                      </div>
                      <input 
                        type="range" min="0" max="100" value={speedF1} 
                        onChange={(e) => setSpeedF1(parseInt(e.target.value))}
                        className="w-full h-3 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <div className="flex justify-between text-xs font-bold text-slate-500">
                        <span>0 (Lent)</span>
                        <span className="text-green-500">50 (Idéal)</span>
                        <span>100 (Rapide)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* -------------------------------------------------- */}
              {/* LABORATOIRE 2 : LE RAYON (LA TAILLE)                 */}
              {/* -------------------------------------------------- */}
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 p-6 border-b border-emerald-700 text-white flex items-center justify-between">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <Maximize2 className="text-emerald-400" size={28} /> Labo 2 : La Taille de l'Orbite (Le Rayon)
                  </h2>
                  <span className="text-sm font-mono text-emerald-200 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">Formule r = ...</span>
                </div>
                
                <div className="p-8 grid lg:grid-cols-2 gap-12 items-center">
                  
                  <div className="space-y-6">
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
                      <div className="text-xl text-center text-slate-700 mb-2">Formule simplifiée de ta feuille :</div>
                      <div className="text-3xl text-center font-serif font-bold text-emerald-900">
                        Rayon = <span className="bg-emerald-200 px-2 rounded">N²</span> × 0.0529 nm
                      </div>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      L'astuce magique ! Toutes les lettres bizarres de la formule donnent toujours <strong>0.0529</strong> (on appelle ça le rayon de Bohr). 
                      <br/><br/>
                      La seule chose qui change, c'est la marche de l'escalier (<strong>N</strong>). Et attention, ce n'est pas N tout court, c'est <strong>N au carré (N × N)</strong> ! L'orbite grandit donc très, très vite.
                    </p>
                    
                    {/* Contrôleur interactif */}
                    <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 space-y-4">
                      <label className="font-bold text-slate-700 uppercase tracking-wide text-sm flex justify-between">
                        <span>Choisis la Couche (N)</span>
                        <span className="text-emerald-600 text-lg">N = {radiusN}</span>
                      </label>
                      <input 
                        type="range" min="1" max="4" value={radiusN} 
                        onChange={(e) => setRadiusN(parseInt(e.target.value))}
                        className="w-full h-3 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">
                        <span className="text-slate-500 font-bold">Calcul en direct :</span>
                        <span className="font-mono text-lg font-bold text-emerald-700">
                          {radiusN}² × 0.0529 = <span className="text-2xl ml-2">{(radiusN * radiusN * 0.0529).toFixed(4)} nm</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Visuel du Microscope (SVG) */}
                  <div className="bg-[#0f172a] rounded-3xl p-6 relative flex flex-col items-center justify-center border-4 border-slate-800 shadow-2xl overflow-hidden h-[450px]">
                    <div className="absolute top-4 left-4 text-emerald-500 font-mono text-sm border border-emerald-900 bg-emerald-950/50 px-2 py-1 rounded">
                      MICROSCOPE QUANTIQUE_
                    </div>
                    
                    <svg width="300" height="300" viewBox="0 0 300 300" className="mt-4">
                      <defs>
                        <radialGradient id="core" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#ef4444" />
                          <stop offset="100%" stopColor="#7f1d1d" />
                        </radialGradient>
                      </defs>
                      
                      {/* Noyau */}
                      <circle cx="150" cy="150" r="4" fill="url(#core)" />
                      
                      {/* Grille de fond pour montrer l'échelle */}
                      <line x1="150" y1="150" x2="300" y2="150" stroke="#1e293b" strokeWidth="1" />
                      <line x1="150" y1="150" x2="150" y2="0" stroke="#1e293b" strokeWidth="1" />
                      
                      {/* Orbites dynamiques */}
                      {[1, 2, 3, 4].map(n => {
                         // Rayon visuel exponentiel (N^2). Base rayon = 8px.
                         const r = n * n * 8; 
                         const isActive = n === radiusN;
                         return (
                           <g key={`orb-${n}`}>
                             <circle 
                               cx="150" cy="150" r={r} 
                               fill="none" 
                               stroke={isActive ? "#34d399" : "#1e293b"} 
                               strokeWidth={isActive ? "2" : "1"}
                               strokeDasharray={isActive ? "none" : "4,4"}
                             />
                             {isActive && (
                               <circle cx={150 + r} cy="150" r="4" fill="#10b981" className="animate-pulse" />
                             )}
                           </g>
                         )
                      })}
                      
                      {/* Règle de mesure visuelle */}
                      <line x1="150" y1="150" x2={150 + (radiusN * radiusN * 8)} y2="150" stroke="#10b981" strokeWidth="2" />
                    </svg>

                    {/* Explication visuelle en bas */}
                    <div className="absolute bottom-6 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700 text-center backdrop-blur-sm">
                      <span className="text-slate-300 text-sm">Le rayon est <strong className="text-emerald-400">{radiusN * radiusN} fois</strong> plus grand qu'à N=1 !</span>
                    </div>
                  </div>
                </div>
              </div>


              {/* -------------------------------------------------- */}
              {/* LABORATOIRE 3 : L'ÉNERGIE (LE PUITS)               */}
              {/* -------------------------------------------------- */}
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="bg-gradient-to-r from-purple-800 to-indigo-900 p-6 border-b border-purple-700 text-white flex items-center justify-between">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <Activity className="text-purple-400" size={28} /> Labo 3 : Le Puits d'Énergie
                  </h2>
                  <span className="text-sm font-mono text-purple-200 bg-purple-950 px-3 py-1 rounded-full border border-purple-800">Formule E = ...</span>
                </div>
                
                <div className="p-8 grid lg:grid-cols-2 gap-12 items-center">
                  
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                      <div className="text-xl text-center text-slate-700 mb-2">Formule simplifiée de ta feuille :</div>
                      <div className="text-3xl text-center font-serif font-bold text-purple-900">
                        Énergie = <span className="text-red-600">-13.6</span> ÷ <span className="bg-purple-200 px-2 rounded">N²</span>
                      </div>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Comme le dit ton cours : <em>"Les niveaux d'énergie s'accumulent juste en dessous du zéro"</em>. 
                      <br/><br/>
                      L'électron est piégé (donc énergie <strong>négative</strong>). La profondeur max est <strong>-13.6 eV</strong>. Pour l'aider à s'échapper vers le 0, on divise cette profondeur par <strong>N²</strong>.
                    </p>
                    
                    {/* Contrôleur interactif */}
                    <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 space-y-4 shadow-inner">
                      <label className="font-bold text-slate-700 uppercase tracking-wide text-sm flex justify-between">
                        <span>Fais remonter l'électron (N)</span>
                        <span className="text-purple-600 text-lg">Couche {layerNames[energyN-1]} (N={energyN})</span>
                      </label>
                      <input 
                        type="range" min="1" max="5" value={energyN} 
                        onChange={(e) => setEnergyN(parseInt(e.target.value))}
                        className="w-full h-4 bg-slate-300 rounded-full appearance-none cursor-pointer accent-purple-600 shadow-inner"
                      />
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center text-lg">
                        <span className="text-slate-500 font-bold">Calcul :</span>
                        <span className="font-mono font-bold text-slate-800">
                          -13.6 ÷ {energyN * energyN} = 
                          <span className="text-3xl ml-2 text-purple-700 py-1 px-3 bg-purple-100 rounded-lg ml-3">
                            {(-13.6 / (energyN * energyN)).toFixed(2)} eV
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Visuel du Puits (SVG Haute Fidélité) */}
                  <div className="bg-slate-900 rounded-3xl p-6 relative flex justify-center border-4 border-slate-800 shadow-2xl h-[450px]">
                    <div className="absolute top-4 right-4 text-slate-400 text-sm font-bold flex items-center gap-2">
                      0 eV = LIBERTÉ <Zap size={16} className="text-yellow-400" />
                    </div>
                    
                    <svg width="100%" height="100%" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid meet">
                      {/* Ciel / Liberté */}
                      <rect x="0" y="0" width="300" height="60" fill="url(#skyGradient)" />
                      <line x1="0" y1="60" x2="300" y2="60" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6,4" />
                      
                      <defs>
                        <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="pitGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1e293b" />
                          <stop offset="100%" stopColor="#020617" />
                        </linearGradient>
                      </defs>

                      {/* Le Puits profond */}
                      <path d="M 60 60 L 60 380 Q 150 400 240 380 L 240 60" fill="url(#pitGradient)" stroke="#334155" strokeWidth="4" />

                      {/* Génération des niveaux d'énergie */}
                      {[1, 2, 3, 4, 5].map((n) => {
                         const val = -13.6 / (n * n);
                         // Mapping: -15eV = y:360, 0eV = y:60. 
                         // Ratio = 300px pour 15eV (soit 20px par eV).
                         const y = 60 + (val / -15) * 300;
                         const isActive = n === energyN;
                         
                         return (
                           <g key={`energy-${n}`}>
                             {/* Ligne d'étagère */}
                             <line 
                               x1="60" y1={y} x2="240" y2={y} 
                               stroke={isActive ? "#c084fc" : "#475569"} 
                               strokeWidth={isActive ? "3" : "1"} 
                             />
                             {/* Etiquette Gauche (N) */}
                             <text x="45" y={y + 5} textAnchor="end" fill={isActive ? "#c084fc" : "#64748b"} fontSize="14" fontWeight="bold">
                               N={n}
                             </text>
                             {/* Etiquette Droite (eV) */}
                             <text x="255" y={y + 5} textAnchor="start" fill={isActive ? "#c084fc" : "#64748b"} fontSize="14" fontWeight="bold" className="font-mono">
                               {val.toFixed(2)}
                             </text>

                             {/* Electron actif */}
                             {isActive && (
                               <g transform={`translate(150, ${y})`}>
                                 <circle cx="0" cy="-15" r="25" fill="#a855f7" opacity="0.2" className="animate-pulse" />
                                 <circle cx="0" cy="-15" r="10" fill="#a855f7" stroke="#fff" strokeWidth="2" />
                                 {/* Flèches pour indiquer l'effort de remontée */}
                                 {n < 5 && (
                                    <path d="M -8 -35 L 0 -45 L 8 -35" fill="none" stroke="#e9d5ff" strokeWidth="2" opacity="0.6" className="animate-bounce" />
                                 )}
                               </g>
                             )}
                           </g>
                         )
                      })}
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </main>
    </div>
  );
}