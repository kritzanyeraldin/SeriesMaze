import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [
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
