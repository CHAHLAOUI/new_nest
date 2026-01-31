import React, { useState } from "react";
import {
  FiMail,
  FiLock,
  // FiLogIn,
  FiUsers,
  FiBarChart2,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";
import { MdOutlineLocalActivity } from "react-icons/md";

// Image de fond moderne - changez selon vos préférences
const backgroundUrl =
  "https://images.unsplash.com/photo-1552084162-ec07b3f162dc?auto=format&fit=crop&w=1920&q=80";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="h-screen w-full overflow-hidden relative">
      {/* Background animé avec parallax */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient de base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Image de fond avec animation de zoom subtle */}
        <div className="absolute inset-0 animate-ken-burns">
          <img
            src={backgroundUrl}
            alt="background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Overlay avec gradient radial */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/50 to-slate-950/90" />

        {/* Effet de grille animée */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,193,7,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,193,7,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px] animate-grid-flow" />

        {/* Particules lumineuses animées */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFC107]/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD54F]/10 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#FFC107]/5 rounded-full blur-[100px] animate-pulse-slow" />

        {/* Lignes lumineuses diagonales */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#FFC107]/20 to-transparent transform -skew-x-12 animate-slide-vertical" />
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-[#FFD54F]/10 to-transparent transform -skew-x-12 animate-slide-vertical-delayed" />
        </div>
      </div>

      {/* Header moderne avec glassmorphism - plus compact */}
      <header className="relative z-30 px-6 lg:px-8 xl:px-12 h-14 lg:h-16 flex items-center backdrop-blur-xl bg-slate-900/30 border-b border-white/5 shadow-lg shadow-black/20">
        <div className="flex items-center gap-2 lg:gap-3 animate-slide-down">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107] to-[#FFD54F] rounded-lg blur-md opacity-50 animate-pulse-glow" />
            <div className="relative bg-gradient-to-br from-[#FFC107] to-[#FFD54F] p-2 rounded-lg shadow-lg">
              <MdOutlineLocalActivity className="text-slate-900 text-lg" />
            </div>
          </div>
          <div>
            <span className="font-black text-lg tracking-tight text-white">
              Activity<span className="text-[#FFC107]">Hub</span>
            </span>
            <p className="text-xs text-gray-400 hidden lg:block">
              Votre plateforme sociale d'aventures
            </p>
          </div>
        </div>
      </header>

      {/* Contenu principal - hauteur optimisée */}
      <div className="relative z-10 h-[calc(100vh-3.5rem)] lg:h-[calc(100vh-4rem)] overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-6 lg:px-8 xl:px-12 py-4 lg:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-10 items-center h-full">
            {/* Section gauche - Features animées - Compacte */}
            <div className="hidden lg:flex flex-col justify-center space-y-6 animate-slide-in-left">
              <div>
                <h1 className="text-3xl xl:text-5xl 2xl:text-6xl font-black text-white mb-3 leading-tight">
                  <span className="inline-block animate-fade-in-up">
                    Connectez-vous à
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FFD54F] to-[#FFC107] animate-gradient-x inline-block animate-fade-in-up-delayed">
                    l'aventure
                  </span>
                </h1>
                <p className="text-base xl:text-lg text-gray-300 max-w-md animate-fade-in-up-more-delayed">
                  Rejoignez une communauté dynamique et découvrez des activités
                  qui vous ressemblent
                </p>
              </div>

              {/* Cards des features avec hover 3D - Plus compactes */}
              <div className="grid grid-cols-2 gap-3 xl:gap-4">
                {[
                  {
                    icon: FiCalendar,
                    title: "Événements",
                    desc: "Explorez des activités",
                    delay: "0s",
                  },
                  {
                    icon: FiUsers,
                    title: "Communauté",
                    desc: "Rejoignez des groupes",
                    delay: "0.1s",
                  },
                  {
                    icon: MdOutlineLocalActivity,
                    title: "Créativité",
                    desc: "Créez vos activités",
                    delay: "0.2s",
                  },
                  {
                    icon: FiBarChart2,
                    title: "Statistiques",
                    desc: "Suivez vos progrès",
                    delay: "0.3s",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl xl:rounded-2xl p-3 xl:p-4 hover:bg-white/10 hover:border-[#FFC107]/50 transition-all duration-500 cursor-pointer animate-scale-in hover:scale-105 hover:-translate-y-1"
                    style={{ animationDelay: feature.delay }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/0 to-[#FFC107]/0 group-hover:from-[#FFC107]/5 group-hover:to-[#FFD54F]/5 rounded-xl xl:rounded-2xl transition-all duration-500" />
                    <div className="relative">
                      <div className="bg-[#FFC107]/10 w-10 h-10 xl:w-12 xl:h-12 rounded-lg xl:rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <feature.icon className="text-[#FFC107] text-lg xl:text-xl" />
                      </div>
                      <h3 className="text-white font-semibold text-sm xl:text-base mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs xl:text-sm text-gray-400">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Titre mobile uniquement */}
            <div className="lg:hidden text-center mb-4 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 leading-tight">
                Connectez-vous à
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FFD54F] to-[#FFC107] animate-gradient-x">
                  l'aventure
                </span>
              </h1>
              <p className="text-base text-gray-300">
                Rejoignez notre communauté
              </p>
            </div>

            {/* Formulaire de connexion - Plus compact */}
            <div className="w-full max-w-md xl:max-w-lg mx-auto lg:mx-0 flex items-center animate-slide-in-right">
              <div className="relative group w-full">
                {/* Glow effect autour du formulaire */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFC107]/20 via-[#FFD54F]/20 to-[#FFC107]/20 rounded-2xl xl:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl xl:rounded-3xl p-5 sm:p-6 xl:p-8 shadow-2xl shadow-black/40">
                  <div className="text-center mb-4 xl:mb-6">
                    <h2 className="text-xl xl:text-2xl font-black text-white mb-1 animate-fade-in">
                      Bienvenue ! 👋
                    </h2>
                    <p className="text-sm text-gray-400 animate-fade-in-delayed">
                      Connectez-vous pour continuer
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email avec animation au focus */}
                    <div
                      className="space-y-1.5 animate-fade-in-up"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <label className="text-xs xl:text-sm font-medium text-gray-300 block">
                        Adresse email
                      </label>
                      <div className="group/input relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/0 via-[#FFC107]/0 to-[#FFC107]/0 group-focus-within/input:from-[#FFC107]/10 group-focus-within/input:via-[#FFD54F]/10 group-focus-within/input:to-[#FFC107]/10 rounded-xl transition-all duration-500" />
                        <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-[#FFC107] transition-all duration-300 text-sm z-10" />
                        <input
                          type="email"
                          className="relative w-full bg-white/5 border border-white/10 rounded-xl px-10 py-2.5 xl:py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFC107] focus:bg-white/10 focus:shadow-lg focus:shadow-[#FFC107]/20 transition-all duration-300"
                          placeholder="nom@exemple.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div
                      className="space-y-1.5 animate-fade-in-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <div className="flex items-center justify-between">
                        <label className="text-xs xl:text-sm font-medium text-gray-300">
                          Mot de passe
                        </label>
                        <button
                          type="button"
                          className="text-xs text-[#FFC107] hover:text-[#FFD54F] transition-colors relative group/forgot"
                        >
                          <span className="relative z-10">Oublié ?</span>
                          <span className="absolute inset-0 bg-[#FFC107]/0 group-hover/forgot:bg-[#FFC107]/10 rounded transition-all duration-300" />
                        </button>
                      </div>
                      <div className="group/input relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/0 via-[#FFC107]/0 to-[#FFC107]/0 group-focus-within/input:from-[#FFC107]/10 group-focus-within/input:via-[#FFD54F]/10 group-focus-within/input:to-[#FFC107]/10 rounded-xl transition-all duration-500" />
                        <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-[#FFC107] transition-all duration-300 text-sm z-10" />
                        <input
                          type="password"
                          className="relative w-full bg-white/5 border border-white/10 rounded-xl px-10 py-2.5 xl:py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFC107] focus:bg-white/10 focus:shadow-lg focus:shadow-[#FFC107]/20 transition-all duration-300"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Remember me */}
                    <div
                      className="flex items-center animate-fade-in-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <input
                        type="checkbox"
                        id="remember"
                        className="w-4 h-4 rounded border-white/10 bg-white/5 text-[#FFC107] focus:ring-[#FFC107] focus:ring-offset-0 cursor-pointer transition-all"
                      />
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm text-gray-300 cursor-pointer select-none hover:text-white transition-colors"
                      >
                        Se souvenir de moi
                      </label>
                    </div>

                    {/* Submit Button avec animation */}
                    <button
                      type="submit"
                      className="group/btn relative w-full py-3 xl:py-3.5 rounded-xl font-bold text-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] animate-fade-in-up"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107] via-[#FFD54F] to-[#FFC107] animate-gradient-x" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                      <span className="relative text-slate-900 flex items-center justify-center gap-2">
                        Se connecter
                        <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </form>

                  {/* Inscription */}
                  <div
                    className="mt-4 xl:mt-5 text-center animate-fade-in-up"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <p className="text-gray-400 text-xs xl:text-sm">
                      Pas encore de compte ?{" "}
                      <button className="text-[#FFC107] font-semibold hover:text-[#FFD54F] transition-colors relative inline-block group/signup">
                        <span className="relative z-10">Créer un compte</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC107] group-hover/signup:w-full transition-all duration-300" />
                      </button>
                    </p>
                  </div>

                  {/* Divider animé */}
                  <div
                    className="relative my-4 xl:my-5 animate-fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-4 bg-slate-900/50 text-gray-400 backdrop-blur-sm">
                        ou continuer avec
                      </span>
                    </div>
                  </div>

                  {/* Social Login avec effets */}
                  <div
                    className="grid grid-cols-2 gap-3 animate-fade-in-up"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <button className="group/social relative flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-2.5 hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/social:translate-x-full transition-transform duration-1000" />
                      <svg className="relative w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <span className="relative text-white text-xs xl:text-sm font-medium">
                        Google
                      </span>
                    </button>
                    <button className="group/social relative flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-2.5 hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/social:translate-x-full transition-transform duration-1000" />
                      <svg
                        className="relative w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span className="relative text-white text-xs xl:text-sm font-medium">
                        Facebook
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features mobiles avec animations décalées */}
            <div className="lg:hidden grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: FiCalendar, title: "Événements", delay: "0s" },
                { icon: FiUsers, title: "Communauté", delay: "0.1s" },
                {
                  icon: MdOutlineLocalActivity,
                  title: "Créativité",
                  delay: "0.2s",
                },
                { icon: FiBarChart2, title: "Stats", delay: "0.3s" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: feature.delay }}
                >
                  <feature.icon className="text-[#FFC107] text-2xl mx-auto mb-2" />
                  <p className="text-xs text-gray-300 font-medium">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations CSS */}
      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1) translateX(0); }
          50% { transform: scale(1.1) translateX(-20px); }
          100% { transform: scale(1) translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(30px) translateX(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes grid-flow {
          0% { transform: translateY(0); }
          100% { transform: translateY(80px); }
        }
        @keyframes slide-vertical {
          0% { transform: translateY(-100%) skewX(-12deg); }
          100% { transform: translateY(100%) skewX(-12deg); }
        }
        @keyframes slide-vertical-delayed {
          0% { transform: translateY(-100%) skewX(-12deg); }
          100% { transform: translateY(100%) skewX(-12deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-delayed {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up-delayed {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up-more-delayed {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-ken-burns { animation: ken-burns 40s ease-in-out infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-grid-flow { animation: grid-flow 20s linear infinite; }
        .animate-slide-vertical { animation: slide-vertical 8s linear infinite; }
        .animate-slide-vertical-delayed { animation: slide-vertical-delayed 10s linear infinite; }
        .animate-gradient-x { background-size: 200% auto; animation: gradient-x 3s ease infinite; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-slide-down { animation: slide-down 0.6s ease-out; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-fade-in-delayed { animation: fade-in-delayed 0.8s ease-out 0.2s both; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out both; }
        .animate-fade-in-up-delayed { animation: fade-in-up-delayed 0.8s ease-out 0.2s both; }
        .animate-fade-in-up-more-delayed { animation: fade-in-up-more-delayed 1s ease-out 0.4s both; }
        .animate-scale-in { animation: scale-in 0.5s ease-out both; }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }

        @media (max-width: 1024px) {
          html { scroll-behavior: smooth; }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
