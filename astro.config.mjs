import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://revittoolkit.local',
	server: {
		host: true,
	},
	integrations: [
		starlight({
			title: 'Revit 2026 Plugin Guide',
			description: 'คู่มือภาษาไทยสำหรับสร้าง Revit 2026 plugin ด้วย Astro Starlight',
			disable404Route: true,
			sidebar: [
				{
					label: 'เริ่มต้น',
					items: [
						{ label: 'ภาพรวม', slug: '' },
						{ label: 'Quick Start', slug: 'quick-start' },
						{ label: 'Project Convention', slug: 'project-convention' },
					],
				},
				{
					label: 'Setup',
					items: [
						{ label: 'เตรียมเครื่อง', slug: 'setup/prerequisites' },
						{ label: 'ตั้งค่าโปรเจ็กต์', slug: 'setup/project-setup' },
					],
				},
				{
					label: 'Development',
					items: [
						{ label: 'เขียน Command แรก', slug: 'development/first-command' },
						{ label: 'สร้าง Ribbon (UI)', slug: 'development/create-ribbon' },
						{ label: 'ลงทะเบียน .addin', slug: 'development/addin-registration' },
						{ label: 'Deploy Workflow', slug: 'development/deploy-workflow' },
						{ label: 'Debugging', slug: 'development/debugging' },
						{ label: 'ทดสอบใน Revit', slug: 'development/testing-in-revit' },
					],
				},
				{
					label: 'Core API Concepts',
					items: [
						{ label: 'การดึงข้อมูลโมเดล', slug: 'guides/filter-elements' },
						{ label: 'การแก้ไขโมเดล (Transaction)', slug: 'guides/transactions' },
					],
				},
				{
					label: 'Advanced UI & Deployment',
					items: [
						{ label: 'WPF UI แบบมืออาชีพ', slug: 'guides/wpf-ui' },
						{ label: 'MVVM & Event Handler', slug: 'guides/mvvm-pattern' },
						{ label: 'รองรับหลายเวอร์ชัน (2024-2026)', slug: 'guides/multi-version' },
						{ label: 'ทำตัวติดตั้ง (Build Installer)', slug: 'guides/installers' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Troubleshooting', slug: 'troubleshooting' },
						{ label: 'Examples', slug: 'appendix/examples' },
						{ label: 'Checklist', slug: 'appendix/checklist' },
					],
				},
			],
		}),
	],
});
