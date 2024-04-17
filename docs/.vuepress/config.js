import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-GB',

  title: 'Documentation',
  description: 'ClearDebit',

  theme: defaultTheme({
    logo: 'https://irp.cdn-website.com/2b60cfa3/dms3rep/multi/ClearDebit+Logo+Light.svg',

    navbar: ['/', /*'/mosaic-submit/README.md',*/ '/mosaic-managed/README.md', /*'/filemaker/README.md',*/ '/cdd-bureau/README.md'],
	
	sidebar: {
	
		'/mosaic-submit/': [
			{
				text: 'Mosaic Submit'
			},
		],
		
		'/mosaic-managed/': [
			{
				text: 'Mosaic Managed',
				children: [
					{
						text: 'User Guide',
						link: '/mosaic-managed/user-guide.md',
						children: [
							'/mosaic-managed/user-guide/creating-a-new-account-paper.md'
						]
					},
					'/mosaic-managed/installation-guide.md',
					'/mosaic-managed/faqs.md',
					
					{
						text: 'Releases',
						link: '/mosaic-managed/releases.md',
						children: [
							'/mosaic-managed/releases/244.md',
							'/mosaic-managed/releases/242.md',
							'/mosaic-managed/releases/2344.md',
							'/mosaic-managed/releases/2342.md'
						]
					},
					{
						text: 'Knowledgebase',
						children: [
							'/mosaic-managed/knowledge-base/enabling-fetchify-within-mosaic-managed.md'
						]
					},
					
					{
						text: 'BACS Information',
						children: [
							'/bacs-information.md',
							'/bacs-response-codes.md'
						]
					}
				]
			},
		],
		
		/*'/filemaker/': [
			{
				text: 'Mosaic Filemaker'
			},
		],*/
		
		'/cdd-bureau/': [
			{
				text: 'ClearDebit Bureau',
				children: [
					{
						text: 'Bureau Integration',
						children: [
							'/cdd-bureau/api-documentation.md',
							'/cdd-bureau/sftp-documentation.md'
						]
					},
					
					{
						text: 'BACS Information',
						children: [
							'/bacs-information.md',
							'/bacs-response-codes.md'
						]
					}
				]
			},
		],
	},
  }),

  bundler: viteBundler(),
})
