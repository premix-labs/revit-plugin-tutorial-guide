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

โปรเจ็กต์นี้ได้รับการอัปเดตระบบและใช้ `astro` เวอร์ชันล่าสุด `^6.3.7` ร่วมกับ `@astrojs/starlight` เวอร์ชันล่าสุด `^0.39.2` ซึ่งคอมไพล์ผ่านอย่างสมบูรณ์แบบใน environment นี้

## เอกสารหลักในไซต์

- `src/content/docs/index.mdx`
- `src/content/docs/quick-start.mdx`
- `src/content/docs/project-convention.mdx`
- `src/content/docs/setup/*`
- `src/content/docs/development/*`
- `src/content/docs/troubleshooting.mdx`
- `src/content/docs/appendix/*`
