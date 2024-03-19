import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-GB',

  title: 'Documentation',
  description: 'ClearDebit',

  theme: defaultTheme({
    logo: 'https://irp.cdn-website.com/2b60cfa3/dms3rep/multi/ClearDebit+Logo+Light.svg',

    navbar: ['/', '/bacs-information.md', '/bacs-response-codes.md', /*'/mosaic-submit/README.md',*/ '/mosaic-managed/README.md', /*'/filemaker/README.md',*/ '/cdd-bureau/README.md'],
	
	sidebar: {
		
		'/bacs-information.md': [
			{
				text: 'BACS Information'
			},
		],
		
		'/bacs-response-codes.md': [
			{
				text: 'BACS Response Codes'
			},
		],
	
		'/mosaic-submit/': [
			{
				text: 'Mosaic Submit'
			},
		],
		
		'/mosaic-managed/': [
			{
				text: 'Mosaic Managed',
				children: [
					'/mosaic-managed/user-guide.md',
					'/mosaic-managed/installation-guide.md',
					'/mosaic-managed/faqs.md',
					'/mosaic-managed/releases.md',
					{
						'/mosaic-managed/releases.md': [
						{
							text: 'Releases',
							children: [
								'/mosaic-managed/releases/242.md',
								'/mosaic-managed/releases/2344.md',
								'/mosaic-managed/releases/2342.md'
							]
						}
					]},
					{
						text: 'Knowledgebase',
						children: [
							'/mosaic-managed/knowledge-base/enabling-fetchify-within-mosaic-managed.md'
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
					'/cdd-bureau/api-documentation.md',
					'/cdd-bureau/sftp-documentation.md'
				]
			},
		],
	},
  }),

  bundler: viteBundler(),
})
