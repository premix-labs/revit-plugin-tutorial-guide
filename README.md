<div align="center">
  <h1>🏗️ Revit Plugin Tutorial Guide</h1>
  <p><b>คู่มือภาษาไทยสำหรับวิศวกรโครงสร้างและนักพัฒนา สอนสร้าง Revit Plugin (2026-2027) ด้วย C# และ .NET 8/10 แบบจับมือทำตั้งแต่ศูนย์จนถึงระบบ CI/CD</b></p>
  
  <a href="https://premix-labs.github.io/revit-plugin-tutorial-guide/">
    <img src="https://img.shields.io/badge/📖_Read_Online-Click_Here-blue?style=for-the-badge" alt="Read the Guide" />
  </a>
  <br/><br/>

  <img src="https://img.shields.io/badge/Revit-2026%20%7C%202027-1E88E5?style=flat-square&logo=autodesk" alt="Revit Version" />
  <img src="https://img.shields.io/badge/.NET-8.0%20%7C%2010.0-512BD4?style=flat-square&logo=dotnet" alt=".NET Version" />
  <img src="https://img.shields.io/badge/Language-C%23-239120?style=flat-square&logo=csharp" alt="C#" />
  <img src="https://img.shields.io/badge/Framework-Astro_Starlight-FF5D01?style=flat-square&logo=astro" alt="Astro" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</div>

<br/>

## 🌟 เกี่ยวกับโปรเจ็กต์ (About)

โปรเจ็กต์นี้เป็น Open-Source คู่มือสอนเขียนโปรแกรมเสริม (Add-in/Plugin) สำหรับโปรแกรม Autodesk Revit โดยเน้นไปที่เนื้อหาสำหรับ **วิศวกรโครงสร้าง (Structural Engineers)** หรือนักพัฒนา BIM ที่ต้องการต่อยอดการทำงานอัตโนมัติ

เนื้อหาครอบคลุมตั้งแต่การตั้งค่าโปรเจ็กต์, พื้นฐาน Revit API, การสร้าง User Interface (WPF), ไปจนถึงการทำ Unit Testing และการตั้งค่าระบบ CI/CD Pipeline สำหรับการแจกจ่ายซอฟต์แวร์

## 🚀 ฟีเจอร์หลัก (Key Features)

*   🛠️ **Setup & Developer Tools:** แนะนำเครื่องมือระดับโปร เช่น RevitLookup และ Add-In Manager (Hot Reload)
*   🧱 **Core & Structural API:** เจาะลึก Element Filtering, Parameters, Worksets และ Rebar API สำหรับงานโครงสร้าง
*   🎨 **Advanced UI (WPF):** สอนการสร้างหน้าต่างโต้ตอบผู้ใช้งานที่สวยงามและทันสมัยด้วยสถาปัตยกรรม MVVM
*   ⚙️ **Professional Workflow:** ยกระดับโค้ดด้วย Unit Testing ภายใน Revit และระบบ CI/CD Pipeline (GitHub Actions)

## 💻 การรันเอกสารในเครื่อง (Local Development)

เว็บไซต์คู่มือเล่มนี้ถูกสร้างขึ้นด้วย [Astro](https://astro.build/) ร่วมกับธีม [Starlight](https://starlight.astro.build/) คุณสามารถรันเซิร์ฟเวอร์จำลองเพื่อช่วยแก้ไขหรืออ่านเอกสารแบบ Offline ได้:

### สิ่งที่ต้องมี
*   [Node.js](https://nodejs.org/) (แนะนำเวอร์ชัน 18 ขึ้นไป)

### วิธีการรัน
```powershell
# 1. ติดตั้ง dependencies ทั้งหมด
npm install

# 2. รันเซิร์ฟเวอร์จำลอง
npm run dev
```
เบราว์เซอร์จะถูกเปิดขึ้นมาที่ `http://localhost:4321`

### วิธีการคอมไพล์ (Build)
```powershell
npm run build
```
ไฟล์เว็บไซต์ตัวเต็มสำหรับนำไป Host จะถูกสร้างไว้ที่โฟลเดอร์ `dist/`

## 📚 โครงสร้างเนื้อหา (Repository Structure)

เนื้อหาบทความทั้งหมดถูกเขียนด้วยไฟล์ `.mdx` ซึ่งจะอยู่ในไดเร็กทอรี `src/content/docs/`:

| โฟลเดอร์ | รายละเอียด |
| :--- | :--- |
| 📁 `setup/` | การเตรียมเครื่องมือและโปรเจ็กต์สำหรับ Revit 2026/2027 |
| 📁 `development/` | โฟลว์การเขียนโค้ด (IExternalCommand), การลงทะเบียน Add-in และ Debug |
| 📁 `api/` | เจาะลึก Revit API หมวดต่างๆ (Rebar, Geometry, DirectShape ฯลฯ) |
| 📁 `guides/` | เทคนิคขั้นสูง (WPF UI, Multi-Version, Installers) |
| 📁 `advanced/` | ระดับสถาปัตยกรรมซอฟต์แวร์ (Unit Testing, CI/CD Pipeline) |
| 📁 `appendix/` | โค้ดตัวอย่างพร้อมนำไปประยุกต์ใช้งานและ Checklist สำหรับตรวจสอบ |

## 🤝 การมีส่วนร่วม (Contributing)

ยินดีต้อนรับนักพัฒนาทุกท่านที่ต้องการเพิ่มเนื้อหา, แก้ไขคำผิด, หรือแนะนำเทคนิคใหม่ๆ สามารถทำได้โดย:
1. Fork โปรเจ็กต์นี้
2. สร้าง Branch ใหม่ (`git checkout -b feature/AmazingFeature`)
3. Commit สิ่งที่เปลี่ยนแปลง (`git commit -m 'Add some AmazingFeature'`)
4. Push ไปยัง Branch (`git push origin feature/AmazingFeature`)
5. เปิด Pull Request แจ้งให้เราทราบ!

## 📄 ลิขสิทธิ์ (License)

โปรเจ็กต์นี้ใช้สัญญาอนุญาตแบบ [MIT License](LICENSE) - คุณสามารถนำโค้ดและเนื้อหาไปใช้, ดัดแปลง, หรือแจกจ่ายต่อได้ฟรีโดยเสรี
