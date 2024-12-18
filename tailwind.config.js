/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/index.html", "./frontend/script.js", "./frontend/*/index.html", "./frontend/*/script.js"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans'],
        'raleway': ['Raleway', 'sans'],
      },
      animation: {
        'text-slide': 'text-slide 13s cubic-bezier(0.68, -0.6, 0.32, 1.6) infinite',
        'bounce-right': 'bounce-right cubic-bezier(0.16, 1, 0.3, 1) 0.6s infinite',
        'fade-in-1': 'fade-in-1 ease-in-out 0.8s 1',
        'fade-in-2': 'fade-in-2 ease-in-out 0.9s 1',
        'fade-in-3': 'fade-in-3 ease-in-out 0.9s 1',
        'spin-border': 'spin-border 5s linear infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 16%': {
              transform: 'translateY(0%)',
          },
          '20%, 36%': {
              transform: 'translateY(-16.66%)',
          },
          '40%, 56%': {
              transform: 'translateY(-33.33%)',
          },
          '60%, 76%': {
              transform: 'translateY(-50%)',
          },
          '80%, 96%': {
              transform: 'translateY(-66.66%)',
          },
          '100%': {
              transform: 'translateY(-83.33%)',
          },
        },
        'bounce-right': {
          '0%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(3px)',
          },
          '100%': {
            transform: 'translateX(0)',
          }
        },
        'fade-in-1': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-5%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },
        'fade-in-2': {
          '0%, 30%': {
            opacity: '0',
            transform: 'translateY(-5%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },
        'fade-in-3': {
          '0%, 50%': {
            opacity: '0',
            transform: 'translateY(-5%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },
        'spin-border': {
          '100%': {'transform': 'rotate(360deg)'},
        }
      }
    },
  },
  plugins: [],
}

