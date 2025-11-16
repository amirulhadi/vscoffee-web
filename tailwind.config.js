/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Tech Blend Palette
        'espresso': '#1E1A16',
        'charcoal': '#221F1B',
        'vs-blue': '#0078D7',
        'sky-blue': '#3399FF',
        'coffee-beige': '#C6A27E',
        'latte-cream': '#F3E3C4',
        'caramel': '#B5835A',
        'text-white': '#EAEAEA',
        'warm-gray': '#2A2520',
        'soft-brown': '#3D3429',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #1E1A16 0%, #0F1D2E 100%)',
        'accent-glow': 'radial-gradient(circle at top left, #C6A27E20 0%, transparent 60%)',
        'button-gradient': 'linear-gradient(90deg, #0078D7 0%, #005B99 100%)',
        'hero-gradient': 'linear-gradient(135deg, #1E1A16 0%, #221F1B 50%, #0F1D2E 100%)',
        'card-glow': 'linear-gradient(135deg, rgba(198,162,126,0.1) 0%, rgba(51,153,255,0.1) 100%)',
      },
      boxShadow: {
        'warm-glow': '0px 4px 20px rgba(198,162,126,0.3)',
        'blue-glow': '0px 4px 20px rgba(0,120,215,0.3)',
        'card-hover': '0px 8px 30px rgba(198,162,126,0.2)',
        'button-glow': '0px 4px 10px rgba(198,162,126,0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'warm-glow': 'warmGlow 3s ease-in-out infinite alternate',
        'steam': 'steam 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        warmGlow: {
          '0%': { boxShadow: '0 0 20px rgba(198,162,126,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(198,162,126,0.6), 0 0 60px rgba(198,162,126,0.3)' },
        },
        steam: {
          '0%': { opacity: '0.3', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.8', transform: 'translateY(-10px) scale(1.1)' },
          '100%': { opacity: '0', transform: 'translateY(-20px) scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(51,153,255,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(51,153,255,0.6), 0 0 30px rgba(51,153,255,0.3)' },
        },
      },
    },
  },
  plugins: [],
}
