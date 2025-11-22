



// import type { Config } from "tailwindcss";

// export default {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//   ],
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
//         border: "hljs(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",

//         // ─────────────────────────────────────
//         // NextCore Technologies Official Palette
//         // ─────────────────────────────────────
//         primary: {
//           DEFAULT: "hsl(210, 40%, 98%)",        // Very light blue-gray (used for text on dark)
//           foreground: "hsl(222, 47%, 11%)",     // Deep navy (main dark text)
//           50: "#f8fafc",
//           100: "#f1f5f9",
//           500: "#0ea5e9",                        // Bright cyan (buttons, accents)
//           600: "#0284c7",
//           700: "#0369a1",
//           800: "#1e40af",                        // Deep blue (background sections)
//           900: "#1e293b",
//           glow: "#0ea5e9",                       // Electric cyan glow
//         },
//         secondary: {
//           DEFAULT: "#1e293b",                    // Slate navy (cards, secondary bg)
//           foreground: "#e2e8f0",
//         },
//         accent: {
//           DEFAULT: "#0ea5e9",                    // Main vibrant cyan accent
//           foreground: "#ffffff",
//         },
//         muted: {
//           DEFAULT: "hsl(210, 20%, 20%)",
//           foreground: "hsl(210, 20%, 70%)",
//         },

//         // Custom NextCore brand colors
//         "nextcore-navy": "#0f172a",              // Almost black navy (hero bg)
//         "nextcore-blue": "#1e40af",              // Rich blue
//         "nextcore-cyan": "#0ea5e9",              // Electric cyan (primary brand color)
//         "nextcore-teal": "#06b6d4",
//         "nextcore-gradient-start": "#0ea5e9",
//         "nextcore-gradient-end": "#06b6d4",
//       },

//       backgroundImage: {
//         "gradient-hero": "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0ea5e9 100%)",
//         "gradient-card": "linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(6,182,212,0.05) 100%)",
//         "gradient-radial": "radial-gradient(circle at top left, #0ea5e9, transparent 70%)",
//         "gradient-accent": "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)",
//       },

//       boxShadow: {
//         glow: "0 0 40px rgba(14, 165, 233, 0.4)",
//         "glow-lg": "0 0 80px rgba(14, 165, 233, 0.6)",
//         card: "0 10px 30px rgba(0, 0, 0, 0.3)",
//       },

//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },

//       keyframes: {
//         "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
//         "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
//         "fade-in": { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
//         "slide-up": { from: { opacity: "0", transform: "translateY(40px)" }, to: { opacity: "1", transform: "translateY(0)" } },
//         "glow-pulse": {
//           "0%, 100%": { boxShadow: "0 0 20px rgba(14,165,233,0.4)" },
//           "50%": { boxShadow: "0 0 40px rgba(14,165,233,0.8)" },
//         },
//         "shine": {
//           "0%": { backgroundPosition: "-200% center" },
//           "100%": { backgroundPosition: "200% center" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         "fade-in": "fade-in 0.6s ease-out",
//         "slide-up": "slide-up 0.8s ease-out",
//         "glow-pulse": "glow-pulse 3s ease-in-out infinite",
//         "shine": "shine 3s linear infinite",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;


import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
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

        // ─────────────────────────────────────
        // NextCore Technologies Official Palette (ERPNext Academy Inspired)
        // ─────────────────────────────────────
        // Deep navy theme with indigo-blue accents for a professional academy look
        primary: {
          DEFAULT: "hsl(232, 45%, 55%)",        // Indigo-blue (buttons, accents – like ERPNext highlights)
          foreground: "hsl(0, 0%, 98%)",        // White text on primary
          50: "#e8eaf6",
          100: "#c5cae9",
          500: "#3f51b5",                       // Main accent blue (ERPNext-style)
          600: "#303f9f",
          700: "#283593",                       // Deeper blue for hovers
          800: "#1a237e",                       // Deep navy (sections/cards)
          900: "#0d1425",
          glow: "#3f51b5",                      // Subtle indigo glow
        },
        secondary: {
          DEFAULT: "#1a237e",                    // Deep navy (cards, secondary BG – core ERPNext vibe)
          foreground: "#e8eaf6",                 // Light gray text
        },
        accent: {
          DEFAULT: "#3f51b5",                    // Vibrant indigo accent
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "hsl(232, 20%, 20%)",
          foreground: "hsl(232, 20%, 70%)",
        },

        // Custom NextCore brand colors (updated for ERPNext-inspired navy/indigo)
        "nextcore-navy": "#1a237e",              // Deep navy (main/hero BG)
        "nextcore-blue": "#3f51b5",              // Indigo primary
        "nextcore-cyan": "#7986cb",              // Lighter blue-purple accent (subtle ERPNext purple hint)
        "nextcore-teal": "#5c6bc0",
        "nextcore-gradient-start": "#1a237e",
        "nextcore-gradient-end": "#3f51b5",
      },

      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #1a237e 0%, #283593 50%, #3f51b5 100%)",  // Navy to indigo gradient (ERPNext hero style)
        "gradient-card": "linear-gradient(135deg, rgba(63,81,181,0.15) 0%, rgba(121,134,203,0.08) 100%)",  // Subtle indigo overlay
        "gradient-radial": "radial-gradient(circle at top left, #3f51b5, transparent 70%)",
        "gradient-accent": "linear-gradient(90deg, #3f51b5 0%, #5c6bc0 100%)",  // Blue-purple shift
      },

      boxShadow: {
        glow: "0 0 40px rgba(63, 81, 181, 0.4)",    // Indigo glow (updated for new palette)
        "glow-lg": "0 0 80px rgba(63, 81, 181, 0.6)",
        card: "0 10px 30px rgba(0, 0, 0, 0.3)",     // Darker shadow for depth on navy BG
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(63,81,181,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(63,81,181,0.8)" },
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