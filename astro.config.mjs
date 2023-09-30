import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Cara Skodev',
			social: {
				github: 'https://github.com/hilmanski/cara-skodev',
			},
			sidebar: [
				{
					label: 'Perkenalan',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Hello World', link: '/hello-world/' },
						{ label: 'Kontributor', link: '/kontributor/' },
					],
				},
				{
					label: 'Kenapa Mengajar',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Alasan mengajar', link: '/alasan-mengajar/' },
						{ label: 'Mendapat uang', link: '/mendapatkan-uang/' },
						{ label: 'Menciptakan Brand', link: '/menciptakan-brand/' },
						{ label: 'Membantu orang lain', link: '/membantu-orang-lain/' },
						{ label: 'Membantu diri sendiri', link: '/membantu-diri-sendiri/' },
						{ label: 'Membantu karirmu', link: '/membantu-karirmu/' },
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
