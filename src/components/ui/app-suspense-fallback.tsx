import { motion, useReducedMotion } from "framer-motion";

const AppSuspenseFallback = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff6e8] via-[#ffffff] to-[#ebf3ff] text-accent">
      <div className="absolute h-[640px] w-[640px] -translate-y-1/3 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,132,0,0.18)_0%,_rgba(255,132,0,0)_65%)] blur-3xl" />
      <div className="absolute bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(12,45,94,0.18)_0%,_rgba(12,45,94,0)_70%)] blur-3xl" />

      <div className="relative flex flex-col items-center">
        <div className="relative flex h-40 w-40 items-center justify-center">
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-white/70 shadow-[0_18px_45px_rgba(12,45,94,0.16)] backdrop-blur-sm"
            animate={
              prefersReducedMotion
                ? { opacity: 0.85 }
                : { opacity: [0.8, 1, 0.8], scale: [1, 1.04, 1] }
            }
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 160 160"
            animate={
              prefersReducedMotion
                ? { rotate: 0 }
                : { rotate: 360 }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <linearGradient id="beOrbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff8400" />
                <stop offset="45%" stopColor="#0c2d5e" />
                <stop offset="100%" stopColor="#ff8400" />
              </linearGradient>
            </defs>
            <circle
              cx="80"
              cy="80"
              r="74"
              fill="none"
              stroke="url(#beOrbitGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="12 28"
              strokeOpacity="0.9"
            />
          </motion.svg>

          <motion.div
            aria-hidden="true"
            className="absolute inset-[18%] rounded-full bg-gradient-to-br from-[#ffddb8] via-white to-[#dce8ff] blur-2xl opacity-60"
            animate={
              prefersReducedMotion
                ? { opacity: 0.6 }
                : { opacity: [0.35, 0.6, 0.35] }
            }
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-3xl border border-white/70 bg-white/90 shadow-[0_18px_40px_rgba(12,45,94,0.15)] backdrop-blur">
            <img
              src="/be-logo.png"
              alt="Buildora Engineers"
              className="h-16 w-16 object-contain"
              width="64"
              height="64"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppSuspenseFallback;

