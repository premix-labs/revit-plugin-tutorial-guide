# 🏗️ คู่มือพัฒนา Revit Plugin (2026-2027)

คู่มือภาษาไทยสำหรับวิศวกรโครงสร้างและนักพัฒนา สอนสร้าง **Revit Plugin** ตั้งแต่ระดับพื้นฐาน (Setup & Debug) ไปจนถึงระดับโปร (CI/CD, API เจาะลึก, WPF UI) โดยใช้ `C#` และ `.NET 8` (สำหรับ Revit 2026) / `.NET 10` (สำหรับ Revit 2027)

เว็บไซต์นี้ถูกสร้างและคอมไพล์ด้วยโครงสร้างของ `Astro + Starlight` (เวอร์ชันล่าสุด) ทำให้ได้เว็บไซต์เอกสารที่โหลดเร็วและสวยงาม

## 🚀 ฟีเจอร์หลักในคู่มือ

- **Setup & Tools:** แนะนำเครื่องมือหากินอย่าง RevitLookup และ Add-In Manager 
- **Core API:** เจาะลึกการใช้ Transaction, การ Filter วัตถุ, จัดการ Worksets, และ Parameter
- **Structural Focus:** บทเรียนเจาะลึกการดึงข้อมูลเหล็กเสริม (Rebar API) และ Analytical Model
- **Advanced UI:** การออกแบบหน้าต่างด้วย WPF และการเชื่อมต่อแบบ MVVM
- **Professional Workflow:** การทำ Unit Testing และการทำ CI/CD Pipeline สำหรับแจกจ่ายไฟล์ปลั๊กอิน

## 💻 การติดตั้งเพื่อรันเอกสาร (Local Development)

```powershell
# ติดตั้ง dependencies
npm install

# รันเซิร์ฟเวอร์จำลอง
npm run dev
```

เปิดเบราว์เซอร์ไปที่ `http://localhost:4321`

## 🛠️ การคอมไพล์ (Build)

```powershell
npm run build
```
ไฟล์เว็บไซต์ตัวเต็มจะถูกสร้างออกมาที่โฟลเดอร์ `dist/`

## 📚 โครงสร้างเนื้อหา (Content Structure)
เนื้อหาของหนังสือเล่มนี้ถูกเขียนด้วยไฟล์ `.mdx` และจัดเก็บอย่างเป็นระเบียบในโฟลเดอร์ `src/content/docs/`:
- `/setup/` : การตั้งค่าโปรเจ็กต์
- `/development/` : โฟลว์การเขียนโค้ดและ Debug
- `/api/` : เจาะลึก API หมวดต่างๆ (Rebar, Geometry, Document)
- `/guides/` : เทคนิคเฉพาะทาง (WPF, Installer, Multi-Version)
- `/advanced/` : ระดับสถาปัตยกรรมซอฟต์แวร์ (Unit Test, CI/CD)
- `/appendix/` : โค้ดตัวอย่างพร้อมใช้และเช็กลิสต์
