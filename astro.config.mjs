import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://premix-labs.github.io',
	base: '/revit-plugin-tutorial-guide',
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
						{ label: 'เครื่องมือคู่ใจนักพัฒนา', slug: 'setup/developer-tools' },
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
					label: 'Selection & Interaction',
					items: [
						{ label: 'การเลือกชิ้นส่วนโครงสร้าง (Selection API)', slug: 'api/selection-api' },
					],
				},
				{
					label: 'Parameters & Data Management',
					items: [
						{ label: 'พารามิเตอร์ขั้นสูง (Parameters API)', slug: 'api/parameters-advanced' },
						{ label: 'การฝังข้อมูล (Extensible Storage)', slug: 'api/extensible-storage' },
					],
				},
				{
					label: 'Advanced Collaboration',
					items: [
						{ label: 'การดึงโมเดลข้ามลิงก์ (Linked Models)', slug: 'api/linked-models' },
						{ label: 'การจัดการ Worksets (Workset API)', slug: 'api/worksets' },
					],
				},
				{
					label: 'Structural Takeoffs',
					items: [
						{ label: 'ตารางถอดแบบและปริมาณ (Schedule API)', slug: 'api/schedule-api' },
					],
				},
				{
					label: 'Structural Detailing (Rebar)',
					items: [
						{ label: 'การจัดการเหล็กเสริม (Rebar API)', slug: 'api/rebar-api' },
					],
				},
				{
					label: 'Structural Analysis',
					items: [
						{ label: 'Analytical Model API (Revit 2023+)', slug: 'api/analytical-model' },
					],
				},
				{
					label: 'Geometry & Spatial API',
					items: [
						{ label: 'พิกัดและตำแหน่ง (XYZ & BoundingBox)', slug: 'api/geometry-api' },
						{ label: 'รูปทรง Solid และเส้นโค้ง', slug: 'api/solid-and-curves' },
						{ label: 'การสร้างก้อนวัตถุฟรีฟอร์ม (DirectShape)', slug: 'api/directshape-api' },
						{ label: 'ระบบตรวจจับการชน (Clash Detection)', slug: 'api/clash-detection' },
					],
				},
				{
					label: 'Family & Element Creation',
					items: [
						{ label: 'Family, Type & Instance API', slug: 'api/family-api' },
					],
				},
				{
					label: 'Events & Automation',
					items: [
						{ label: 'Events, Updaters & Hooks', slug: 'api/events-and-updaters' },
						{ label: 'การจัดการแจ้งเตือน (Failure API)', slug: 'api/failures-api' },
					],
				},
				{
					label: 'Views, Sheets & Annotation',
					items: [
						{ label: 'จัดการ Views และ Sheets', slug: 'api/views-and-sheets' },
						{ label: 'Annotation & Tagging อัตโนมัติ', slug: 'api/annotation-api' },
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
					label: 'Advanced Topics',
					items: [
						{ label: 'Unit Testing', slug: 'advanced/unit-testing' },
						{ label: 'CI/CD Pipeline', slug: 'advanced/cicd-pipeline' },
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
