import { buildLegacyTheme } from 'sanity';

const props = {
	'--my-white': '#F4FAFF',
	'--my-black': '#1E1E24',
	'--brand-color': '#f7ab0a',
	'--my-red': '#8C1C13',
	'--my-green': '#2a9d8f',
	'--my-yellow': '#ffc300',
	'--my-blue': '#1e90ff',
	'--my-gray': '#666',
};

export const myTheme = buildLegacyTheme({
	// Base theme colors
	'--black': props['--my-black'],
	'--white': props['--my-white'],

	'--gray': props['--my-gray'],
	'--gray-base': props['--my-gray'],

	'--component-bg': props['--my-black'],
	'--component-text-color': props['--my-white'],

	// brand
	'--brand-primary': props['--brand-color'],

	// default button
	'--default-button-color': props['--my-gray'],
	'--default-button-primary-color': props['--brand-color'],
	'--default-button-success-color': props['--my-green'],
	'--default-button-warning-color': props['--my-yellow'],
	'--default-button-danger-color': props['--my-red'],

	// state
	'--state-info-color': props['--brand-color'],
	'--state-success-color': props['--my-green'],
	'--state-warning-color': props['--my-yellow'],
	'--state-danger-color': props['--my-red'],

	// navbar
	'--main-navigation-color': props['--my-black'],
	'--main-navigation-color--inverted': props['--my-white'],

	'--focus-color': props['--brand-color'],
});
