# Revit 2026 Plugin Guide

เว็บไซต์เอกสารนี้ใช้ `Astro + Starlight` สำหรับสอนการสร้าง `Revit 2026 plugin` ตั้งแต่ setup จนถึง debug ให้รันได้จริง

## Run

```powershell
cd docs
npm install
npm run dev
```

เปิดเบราว์เซอร์ที่ `http://localhost:4321`

## Build

```powershell
cd docs
npm run build
```

## หมายเหตุเรื่อง dependency

โปรเจ็กต์นี้ล็อก `astro` เป็น `5.6.1` และใช้ dependency set ที่ `npm install` แล้ว build ผ่านกับ `Starlight` ใน environment นี้

## เอกสารหลักในไซต์

- `src/content/docs/index.mdx`
- `src/content/docs/quick-start.mdx`
- `src/content/docs/project-convention.mdx`
- `src/content/docs/setup/*`
- `src/content/docs/development/*`
- `src/content/docs/troubleshooting.mdx`
- `src/content/docs/appendix/*`
