/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
    },
    extend: {
      colors: {
        // Primary brand blue (#1656C4) and its supporting family.
        brand: {
          blue: '#1656C4',
          bluedark: '#0F3E92',
          navy: '#0B2A63',
          navy2: '#081F49',
          sky: '#3E82E0',
          skysoft: '#E8F0FC',
          gold: '#C9A227',
        },
        'blue-cta': '#1656C4',
        // Neutral ink scale for text.
        ink: {
          900: '#0C1524',
          700: '#28324A',
          600: '#4A5468',
          400: '#8A92A6',
          200: '#C9CEDA',
        },
        // Off-white surfaces for section banding.
        surface: {
          soft: '#F5F8FD',
          muted: '#EEF2F8',
          line: '#E6EAF2',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Sora"', '"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(12,21,36,0.04), 0 8px 24px -12px rgba(12,21,36,0.10)',
        card: '0 1px 2px rgba(12,21,36,0.04), 0 12px 32px -18px rgba(12,21,36,0.14)',
        cardhover: '0 2px 4px rgba(12,21,36,0.05), 0 24px 48px -20px rgba(22,86,196,0.28)',
        pill: '0 6px 20px -6px rgba(22,86,196,0.45)',
      },
      transitionTimingFunction: {
        // Signature easings used across interactive surfaces.
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',   // ease-out-expo — calm, premium
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // gentle overshoot for pops
      },
      transitionDuration: {
        400: '400ms',
      },
      maxWidth: {
        'container': '1240px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
