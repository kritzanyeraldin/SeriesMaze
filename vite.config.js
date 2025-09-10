import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		tailwindcss(),
		react({
			jsxRuntime: 'automatic'
		})
	],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './setupTests.js'
	}
})
