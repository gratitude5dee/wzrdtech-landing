import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        jatt: {
          gold: "#DAA520",
          dark: "#1A1F2C",
          darker: "#000000e6",
          neon: {
            blue: "#00ffff",
            purple: "#b700ff",
            green: "#00ff9d"
          }
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "glow": {
          "0%": { 
            opacity: "1",
            boxShadow: "0 0 20px rgba(236,72,153,0.7)"
          },
          "50%": { 
            opacity: "0.6",
            boxShadow: "0 0 40px rgba(236,72,153,0.9)"
          },
          "100%": {
            opacity: "1",
            boxShadow: "0 0 20px rgba(236,72,153,0.7)"
          }
        },
        "draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" }
        },
        "tilt": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "card-float": {
          "0%": { 
            transform: "perspective(1000px) rotateX(0) rotateY(0)",
            boxShadow: "0 25px 50px -12px rgba(155, 135, 245, 0.15)"
          },
          "50%": { 
            transform: "perspective(1000px) rotateX(2deg) rotateY(-2deg)",
            boxShadow: "0 35px 60px -15px rgba(155, 135, 245, 0.25)"
          },
          "100%": { 
            transform: "perspective(1000px) rotateX(0) rotateY(0)",
            boxShadow: "0 25px 50px -12px rgba(155, 135, 245, 0.15)"
          }
        },
        "text-shimmer": {
          "0%": { 
            backgroundPosition: "-200% center",
          },
          "100%": { 
            backgroundPosition: "200% center",
          }
        }
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "glow": "glow 2s ease-in-out infinite",
        "draw": "draw 2s ease-out forwards",
        "tilt": "tilt 10s ease-in-out infinite",
        "card-float": "card-float 6s ease-in-out infinite",
        "text-shimmer": "text-shimmer 8s ease-in-out infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;