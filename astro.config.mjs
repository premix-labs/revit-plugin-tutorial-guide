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
					label: 'Getting Started',
					items: [
						{ label: 'Overview (ภาพรวม)', slug: '' },
						{ label: 'Quick Start (เริ่มต้นด่วน)', slug: 'quick-start' },
						{ label: 'Project Convention (ข้อกำหนดโปรเจ็กต์)', slug: 'project-convention' },
					],
				},
				{
					label: 'Setup',
					items: [
						{ label: 'Prerequisites (เตรียมเครื่อง)', slug: 'setup/prerequisites' },
						{ label: 'Project Setup (ตั้งค่าโปรเจ็กต์)', slug: 'setup/project-setup' },
						{ label: 'Developer Tools (เครื่องมือคู่ใจนักพัฒนา)', slug: 'setup/developer-tools' },
					],
				},
				{
					label: 'Development',
					items: [
						{ label: 'First Command (เขียน Command แรก)', slug: 'development/first-command' },
						{ label: 'Create Ribbon UI (สร้างริบบอนเมนู)', slug: 'development/create-ribbon' },
						{ label: 'Addin Registration (ลงทะเบียน .addin)', slug: 'development/addin-registration' },
						{ label: 'Deploy Workflow (กระบวนการ Deploy)', slug: 'development/deploy-workflow' },
						{ label: 'Debugging (การตรวจจับบั๊ก)', slug: 'development/debugging' },
						{ label: 'Testing in Revit (ทดสอบใน Revit)', slug: 'development/testing-in-revit' },
					],
				},
				{
					label: 'Core API Concepts',
					items: [
						{ label: 'Element Retrieval (การดึงข้อมูลโมเดล)', slug: 'guides/filter-elements' },
						{ label: 'Transactions (การแก้ไขโมเดล)', slug: 'guides/transactions' },
					],
				},
				{
					label: 'Selection & Interaction',
					items: [
						{ label: 'Selection API (การเลือกชิ้นส่วนโครงสร้าง)', slug: 'api/selection-api' },
					],
				},
				{
					label: 'Parameters & Data Management',
					items: [
						{ label: 'Parameters API (พารามิเตอร์ขั้นสูง)', slug: 'api/parameters-advanced' },
						{ label: 'Extensible Storage (การฝังข้อมูล)', slug: 'api/extensible-storage' },
					],
				},
				{
					label: 'Advanced Collaboration',
					items: [
						{ label: 'Linked Models (การดึงโมเดลข้ามลิงก์)', slug: 'api/linked-models' },
						{ label: 'Workset API (การจัดการ Worksets)', slug: 'api/worksets' },
					],
				},
				{
					label: 'Structural Takeoffs',
					items: [
						{ label: 'Schedule API (ตารางถอดแบบและปริมาณ)', slug: 'api/schedule-api' },
					],
				},
				{
					label: 'Structural Detailing (Rebar)',
					items: [
						{ label: 'Rebar API (การจัดการเหล็กเสริม)', slug: 'api/rebar-api' },
					],
				},
				{
					label: 'Structural Analysis',
					items: [
						{ label: 'Analytical Model API (การวิเคราะห์โครงสร้าง)', slug: 'api/analytical-model' },
					],
				},
				{
					label: 'Geometry & Spatial API',
					items: [
						{ label: 'XYZ & BoundingBox (พิกัดและตำแหน่ง)', slug: 'api/geometry-api' },
						{ label: 'Solid & Curves (รูปทรงและเส้นโค้ง)', slug: 'api/solid-and-curves' },
						{ label: 'DirectShape API (การสร้างวัตถุอิสระ)', slug: 'api/directshape-api' },
						{ label: 'Clash Detection (ระบบตรวจการชน)', slug: 'api/clash-detection' },
					],
				},
				{
					label: 'Family & Element Creation',
					items: [
						{ label: 'Family & Type API (การสร้างวัตถุชนิดใหม่)', slug: 'api/family-api' },
					],
				},
				{
					label: 'Events & Automation',
					items: [
						{ label: 'Events & Updaters (ระบบดักจับเหตุการณ์)', slug: 'api/events-and-updaters' },
						{ label: 'Failure API (การจัดการข้อความแจ้งเตือน)', slug: 'api/failures-api' },
					],
				},
				{
					label: 'Views, Sheets & Annotation',
					items: [
						{ label: 'Views & Sheets API (การจัดการวิวและแผ่นงาน)', slug: 'api/views-and-sheets' },
						{ label: 'Annotation & Tagging (การใส่ข้อความกำกับ)', slug: 'api/annotation-api' },
					],
				},
				{
					label: 'Advanced UI & Deployment',
					items: [
						{ label: 'WPF UI (หน้าต่างกราฟิกแบบโปร)', slug: 'guides/wpf-ui' },
						{ label: 'MVVM Pattern (การเขียนแยกโค้ดคุมหน้าจอ)', slug: 'guides/mvvm-pattern' },
						{ label: 'Multi-Version Support (การรองรับหลายเวอร์ชัน)', slug: 'guides/multi-version' },
						{ label: 'Build Installer (การทำตัวติดตั้ง)', slug: 'guides/installers' },
					],
				},
				{
					label: 'Advanced Topics',
					items: [
						{ label: 'Unit Testing (การเขียนสคริปต์ตรวจความถูกต้อง)', slug: 'advanced/unit-testing' },
						{ label: 'CI/CD Pipeline (ระบบจัดเก็บโค้ดอัตโนมัติ)', slug: 'advanced/cicd-pipeline' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Troubleshooting (การแก้ปัญหาทั่วไป)', slug: 'troubleshooting' },
						{ label: 'Examples (ตัวอย่างโค้ดที่เกี่ยวข้อง)', slug: 'appendix/examples' },
						{ label: 'Checklist (รายการตรวจสอบความพร้อม)', slug: 'appendix/checklist' },
					],
				},
			],
		}),
	],
});
