// import type { Config } from "tailwindcss";

// export default {
//   darkMode: ["class"],
//   content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
      
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//           glow: "hsl(var(--primary-glow))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//       backgroundImage: {
//         'gradient-hero': 'var(--gradient-hero)',
//         'gradient-card': 'var(--gradient-card)',
//       },
//       boxShadow: {
//         'glow': 'var(--shadow-glow)',
//         'card': 'var(--shadow-card)',
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: {
//             height: "0",
//           },
//           to: {
//             height: "var(--radix-accordion-content-height)",
//           },
//         },
//         "accordion-up": {
//           from: {
//             height: "var(--radix-accordion-content-height)",
//           },
//           to: {
//             height: "0",
//           },
//         },
//         "fade-in": {
//           from: {
//             opacity: "0",
//             transform: "translateY(20px)",
//           },
//           to: {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         "slide-up": {
//           from: {
//             opacity: "0",
//             transform: "translateY(40px)",
//           },
//           to: {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         "fade-scale-in": {
//           "0%": {
//             opacity: "0",
//             transform: "scale(0.8) translateY(30px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "scale(1) translateY(0)",
//           },
//         },
//         "float-subtle": {
//           "0%, 100%": {
//             transform: "translateY(0px)",
//           },
//           "50%": {
//             transform: "translateY(-6px)",
//           },
//         },
//         "glow-pulse": {
//           "0%, 100%": {
//             opacity: "0.5",
//           },
//           "50%": {
//             opacity: "1",
//           },
//         },
//         "tilt-3d": {
//           "0%": {
//             transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
//           },
//           "50%": {
//             transform: "perspective(1000px) rotateX(5deg) rotateY(5deg)",
//           },
//           "100%": {
//             transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
//           },
//         },
//         "shine": {
//           "0%": {
//             backgroundPosition: "-200% center",
//           },
//           "100%": {
//             backgroundPosition: "200% center",
//           },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         "fade-in": "fade-in 0.6s ease-out",
//         "slide-up": "slide-up 0.6s ease-out",
//         "fade-scale-in": "fade-scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
//         "float-subtle": "float-subtle 4s ease-in-out infinite",
//         "glow-pulse": "glow-pulse 2s ease-in-out infinite",
//         "tilt-3d": "tilt-3d 6s ease-in-out infinite",
//         "shine": "shine 3s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;



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
        border: "hljs(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // ─────────────────────────────────────
        // NextCore Technologies Official Palette
        // ─────────────────────────────────────
        primary: {
          DEFAULT: "hsl(210, 40%, 98%)",        // Very light blue-gray (used for text on dark)
          foreground: "hsl(222, 47%, 11%)",     // Deep navy (main dark text)
          50: "#f8fafc",
          100: "#f1f5f9",
          500: "#0ea5e9",                        // Bright cyan (buttons, accents)
          600: "#0284c7",
          700: "#0369a1",
          800: "#1e40af",                        // Deep blue (background sections)
          900: "#1e293b",
          glow: "#0ea5e9",                       // Electric cyan glow
        },
        secondary: {
          DEFAULT: "#1e293b",                    // Slate navy (cards, secondary bg)
          foreground: "#e2e8f0",
        },
        accent: {
          DEFAULT: "#0ea5e9",                    // Main vibrant cyan accent
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "hsl(210, 20%, 20%)",
          foreground: "hsl(210, 20%, 70%)",
        },

        // Custom NextCore brand colors
        "nextcore-navy": "#0f172a",              // Almost black navy (hero bg)
        "nextcore-blue": "#1e40af",              // Rich blue
        "nextcore-cyan": "#0ea5e9",              // Electric cyan (primary brand color)
        "nextcore-teal": "#06b6d4",
        "nextcore-gradient-start": "#0ea5e9",
        "nextcore-gradient-end": "#06b6d4",
      },

      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0ea5e9 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(6,182,212,0.05) 100%)",
        "gradient-radial": "radial-gradient(circle at top left, #0ea5e9, transparent 70%)",
        "gradient-accent": "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)",
      },

      boxShadow: {
        glow: "0 0 40px rgba(14, 165, 233, 0.4)",
        "glow-lg": "0 0 80px rgba(14, 165, 233, 0.6)",
        card: "0 10px 30px rgba(0, 0, 0, 0.3)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "slide-up": { from: { opacity: "0", transform: "translateY(40px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(14,165,233,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(14,165,233,0.8)" },
        },
        "shine": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "shine": "shine 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;