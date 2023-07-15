import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Hello from './Hello.svelte';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});

	it('render hello into the document', () => {
		document.body.innerHTML = '<h1>Hello, world!</h1>';
		expect(document.body).toHaveTextContent('Hello, world!');
	});

	it('render hello, svelte', () => {
		render(Hello, {
			props: { name: 'Svelte' }
		});
		expect(document.body).toHaveTextContent('Hello, Svelte!');
	});
});
