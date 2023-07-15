import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{js,ts}'],
		setupFiles: ['src/vitest/cleanupDom.js', 'src/vitest/registerMatchers.js'],
		reporters: 'verbose',
		restoreMocks: true
	}
});
