import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			night: '#f4f4f1',
  			'night-2': '#e9eae6',
  			paper: '#15181b',
  			mute: '#555b62',
  			line: '#cfd2cd',
  			hairline: '#cfd2cd',
  			glass: '#555b62',
  			lamp: '#9b5520',
  			'lamp-soft': '#d9a574',
  			'lamp-ink': '#ffffff',
  			'dark-sec': '#15181b',
  			'dark-sec-ink': '#e9eae6',
  			stone: {50:'#f7f5f2',100:'#ece8e2',200:'#d9d3ca',300:'#bdb5a8',400:'#9a9181',500:'#776e61',600:'#564e44',700:'#3d362e',800:'#2a231c',900:'#251d17',950:'#18130f'},
  			amber: {50:'#fbf3ea',100:'#f6e3cf',200:'#eecba6',300:'#e6b380',400:'#d9975a',500:'#c6803a',600:'#a96831',700:'#865126',800:'#663e1f',900:'#4a2d18',950:'#2a190c'},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			none: '0',
  			sm: '0',
  			DEFAULT: '0',
  			md: '0',
  			lg: '0',
  			xl: '0',
  			'2xl': '0',
  			'3xl': '0',
  			full: '0'
  		},
  		fontFamily: {
  			sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
  			display: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
  			serif: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			'fade-in-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '-200% 0'
  				},
  				'100%': {
  					backgroundPosition: '200% 0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			marquee: 'marquee 25s linear infinite',
  			'fade-in-up': 'fade-in 0.2s ease-out forwards',
  			'fade-in': 'fade-in 0.2s ease-out forwards',
  			shimmer: 'shimmer 2s linear infinite'
  		},
  		boxShadow: {
  			glass: 'none',
  			glow: 'none',
  			'2xs': 'none',
  			xs: 'none',
  			sm: 'none',
  			DEFAULT: 'none',
  			md: 'none',
  			lg: 'none',
  			xl: 'none',
  			'2xl': 'none'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;