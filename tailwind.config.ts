import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#E94E1B',
          'orange-50': '#FFF1EC',
          'orange-100': '#FFD9CC',
          'orange-600': '#D04212',
          'orange-700': '#A8340D',
          purple: '#3D1F47',
          'purple-50': '#F5EFF7',
          'purple-100': '#E2D2E8',
          'purple-700': '#2A1532',
          'purple-900': '#1A0D20',
        },
        ink: '#0F1115',
        muted: '#6B7280',
        line: '#E5E7EB',
        surface: '#FAFAFA',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(15,17,21,0.06)',
        'soft-lg': '0 20px 50px rgba(15,17,21,0.10)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(180deg, #3D1F47 0%, #4A2050 35%, #8A2F2F 70%, #E94E1B 100%)',
        'hero-radial':
          'radial-gradient(80% 60% at 50% 0%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 1.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
