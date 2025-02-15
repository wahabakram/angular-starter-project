/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import aspectRatio from '@tailwindcss/aspect-ratio';
import { Config } from 'tailwindcss';
// const colors = require('tailwindcss/colors');

export default {
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontSize: {
        '5xs': '8px',
        '4xs': '9px',
        '3xs': '10px',
        '2xs': '11px',
        tiny: '13px',
        md: '15px'
      },
      fontFamily: {
        serif: ['Lato', ...defaultTheme.fontFamily.serif]
      },
      borderColor: {
        DEFAULT: 'var(--border)'
      },
      colors: {
        background: 'var(--background)',
        'on-background': 'var(--on-background)',
        neutral: {
          DEFAULT: 'var(--neutral)',
          0: 'var(--neutral-0)',
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          450: 'var(--neutral-450)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          650: 'var(--neutral-650)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
          950: 'var(--neutral-950)',
          1000: 'var(--neutral-1000)'
        },
        'neutral-variant': {
          DEFAULT: 'var(--neutral-variant)',
          0: 'var(--neutral-variant-0)',
          50: 'var(--neutral-variant-50)',
          100: 'var(--neutral-variant-100)',
          200: 'var(--neutral-variant-200)',
          300: 'var(--neutral-variant-300)',
          400: 'var(--neutral-variant-400)',
          450: 'var(--neutral-variant-450)',
          500: 'var(--neutral-variant-500)',
          600: 'var(--neutral-variant-600)',
          650: 'var(--neutral-variant-650)',
          700: 'var(--neutral-variant-700)',
          800: 'var(--neutral-variant-800)',
          900: 'var(--neutral-variant-900)',
          950: 'var(--neutral-variant-950)',
          1000: 'var(--neutral-variant-1000)'
        },
        primary: {
          DEFAULT: 'var(--sys-primary)',
          0: 'var(--primary-0)',
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          450: 'var(--primary-450)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          650: 'var(--primary-650)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
          950: 'var(--primary-950)',
          1000: 'var(--primary-1000)'
        },
        secondary: {
          DEFAULT: 'var(--sys-secondary)',
          0: 'var(--secondary-0)',
          50: 'var(--secondary-50)',
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          450: 'var(--secondary-450)',
          500: 'var(--secondary-500)',
          600: 'var(--secondary-600)',
          650: 'var(--secondary-650)',
          700: 'var(--secondary-700)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)',
          950: 'var(--secondary-950)',
          1000: 'var(--secondary-1000)'
        },
        tertiary: {
          DEFAULT: 'var(--sys-tertiary)',
          0: 'var(--tertiary-0)',
          50: 'var(--tertiary-50)',
          100: 'var(--tertiary-100)',
          200: 'var(--tertiary-200)',
          300: 'var(--tertiary-300)',
          400: 'var(--tertiary-400)',
          450: 'var(--tertiary-450)',
          500: 'var(--tertiary-500)',
          600: 'var(--tertiary-600)',
          650: 'var(--tertiary-650)',
          700: 'var(--tertiary-700)',
          800: 'var(--tertiary-800)',
          900: 'var(--tertiary-900)',
          950: 'var(--tertiary-950)',
          1000: 'var(--tertiary-1000)'
        },
        error: {
          DEFAULT: 'var(--sys-error)',
          0: 'var(--error-0)',
          50: 'var(--error-50)',
          100: 'var(--error-100)',
          200: 'var(--error-200)',
          300: 'var(--error-300)',
          400: 'var(--error-400)',
          450: 'var(--error-450)',
          500: 'var(--error-500)',
          600: 'var(--error-600)',
          650: 'var(--error-650)',
          700: 'var(--error-700)',
          800: 'var(--error-800)',
          900: 'var(--error-900)',
          950: 'var(--error-950)',
          1000: 'var(--error-1000)'
        },

        // primary
        'on-primary': 'var(--sys-on-primary)',
        'primary-container': 'var(--sys-primary-container)',
        'on-primary-container': 'var(--sys-on-primary-container)',
        'primary-fixed': 'var(--sys-primary-fixed)',
        'primary-fixed-dim': 'var(--sys-primary-fixed-dim)',
        'on-primary-fixed': 'var(--sys-on-primary-fixed)',
        'on-primary-fixed-variant': 'var(--sys-on-primary-fixed-variant)',

        // secondary
        'on-secondary': 'var(--sys-on-secondary)',
        'secondary-container': 'var(--sys-secondary-container)',
        'on-secondary-container': 'var(--sys-on-secondary-container)',
        'secondary-fixed': 'var(--sys-secondary-fixed)',
        'secondary-fixed-dim': 'var(--sys-secondary-fixed-dim)',
        'on-secondary-fixed': 'var(--sys-on-secondary-fixed)',
        'on-secondary-fixed-variant': 'var(--sys-on-secondary-fixed-variant)',

        // tertiary
        'on-tertiary': 'var(--sys-on-tertiary)',
        'tertiary-container': 'var(--sys-tertiary-container)',
        'on-tertiary-container': 'var(--sys-on-tertiary-container)',
        'tertiary-fixed': 'var(--sys-tertiary-fixed)',
        'tertiary-fixed-dim': 'var(--sys-tertiary-fixed-dim)',
        'on-tertiary-fixed': 'var(--sys-on-tertiary-fixed)',
        'on-tertiary-fixed-variant': 'var(--sys-on-tertiary-fixed-variant)',

        'on-error': 'var(--sys-on-error)',
        'error-container': 'var(--sys-error-container)',
        'on-error-container': 'var(--sys-on-error-container)',

        surface: 'var(--sys-surface)',
        'surface-dim': 'var(--sys-surface-dim)',
        'surface-tint': 'var(--sys-surface-tint)',
        'surface-variant': 'var(--sys-surface-variant)',
        'surface-bright': 'var(--sys-surface-bright)',
        'surface-container-lowest': 'var(--sys-surface-container-lowest)',
        'surface-container-low': 'var(--sys-surface-container-low)',
        'surface-container': 'var(--sys-surface-container)',
        'surface-container-high': 'var(--sys-surface-container-high)',
        'surface-container-highest': 'var(--sys-surface-container-highest)',
        'on-surface': 'var(--sys-on-surface)',
        'on-surface-variant': 'var(--sys-on-surface-variant)',

        outline: 'var(--sys-outline)',
        'outline-variant': 'var(--sys-outline-variant)',

        'inverse-surface': 'var(--sys-inverse-surface)',
        'inverse-on-surface': 'var(--sys-inverse-on-surface)',
        'inverse-primary': 'var(--sys-inverse-primary)',

        scrim: 'var(--sys-scrim)',
        shadow: 'var(--sys-shadow)',

        accent: 'var(--accent)',
        warn: 'var(--warn)',
        dark: '#303030'
      }
    }
  },
  plugins: [typography, containerQueries, aspectRatio]
} as Partial<Config>;
