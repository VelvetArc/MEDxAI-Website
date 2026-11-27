/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // --- MEDxAI Refined Brand Palette ---
      colors: {
        // Core dark backgrounds
        'bg-canvas':  '#020013',
        'bg-surface': '#070020',
        'bg-elevated':'rgba(15, 10, 50, 0.75)',
        'bg-glass':   'rgba(10, 5, 35, 0.60)',

        // Brand Accents (Modernized)
        'brand-gold':   '#f7c95b',
        'brand-gold-dim':'rgba(247, 201, 91, 0.15)',
        'brand-red':    '#c0392b',
        'brand-red-dim':'rgba(192, 57, 43, 0.15)',
        'brand-violet': '#6366f1',
        'brand-cyan':   '#38bdf8',

        // Typography
        'text-primary':   '#f8fafc',
        'text-secondary': '#94a3b8',
        'text-muted':     '#64748b',

        // Borders
        'border-subtle': 'rgba(255, 255, 255, 0.07)',
        'border-focus':  'rgba(247, 201, 91, 0.45)',
      },

      fontFamily: {
        sans: [
          'var(--font-inter)',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'var(--font-montserrat)',
          '"SF Pro Display"',
          'system-ui',
          'sans-serif',
        ],
      },

      // 8pt harmonic spacing scale (multiples of 8)
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '7': '64px',
        '8': '96px',
        '9': '128px',
        '10': '192px',
      },

      // Type scale using clamp for fluid responsiveness
      fontSize: {
        'display-2xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        'display-xl':  ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.1',  letterSpacing: '-0.03em' }],
        'display-lg':  ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        'body-lg':     ['1.125rem', { lineHeight: '1.75' }],
        'body-md':     ['1rem',     { lineHeight: '1.7'  }],
      },

      // Spring physics motion curves
      transitionTimingFunction: {
        'spring':      'cubic-bezier(0.16, 1, 0.3, 1)',
        'decelerate':  'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
        'accelerate':  'cubic-bezier(0.3, 0, 0.8, 0.15)',
      },

      transitionDuration: {
        'fast':   '150ms',
        'normal': '320ms',
        'slow':   '550ms',
      },

      backdropBlur: {
        'glass': '20px',
      },

      boxShadow: {
        // Specular top highlight (Big Tech standard)
        'specular':    'inset 0 1px 0 rgba(255, 255, 255, 0.10)',
        'gold-glow':   '0 0 24px rgba(247, 201, 91, 0.20)',
        'glass-card':  '0 4px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
        'hero-glow':   '0 0 120px rgba(247, 201, 91, 0.08)',
      },

      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        'border-beam': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
      },

      animation: {
        'fade-up':     'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':     'fade-in 0.5s ease-out forwards',
        'scroll-bounce':'scroll-bounce 1.6s ease-in-out infinite',
        'border-beam': 'border-beam 4s ease infinite',
        'pulse-gold':  'pulse-gold 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
