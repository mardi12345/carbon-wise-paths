# 🌍 EcoTrack – Personal Carbon Footprint Tracker  

## 📌 Project Title  
EcoTrack – A Personal Carbon Footprint Tracker Web Application  

---

## 📝 Description  
EcoTrack adalah aplikasi web modern untuk membantu individu melacak, menganalisis, dan mengurangi **jejak karbon pribadi**.  
Pengguna dapat mencatat aktivitas harian seperti transportasi, makanan, dan konsumsi energi, lalu sistem menghitung estimasi emisi CO2.  

Aplikasi ini dilengkapi dengan **dashboard interaktif**, **gamifikasi**, **leaderboard komunitas**, serta **rekomendasi personal** untuk gaya hidup lebih ramah lingkungan.  

---

## 🛠️ Technologies Used  
- **Frontend Framework**: [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)  
- **UI Components**: [shadcn-ui](https://ui.shadcn.com/) + [Tailwind CSS](https://tailwindcss.com/)  
- **Database & Auth**: [Supabase](https://supabase.com/) (PostgreSQL + Auth)  
- **Visualization**: [Recharts](https://recharts.org/) / Chart.js  
- **Deployment**: [Vercel](https://vercel.com/)  

---

## 🌟 Features  
- **Authentication & Profil User** → Register/Login dengan Supabase Auth.  
- **Dynamic Routing** → Halaman `/dashboard`, `/activities`, `/community`.  
- **Activity Logging** → Input aktivitas transportasi, makanan, energi.  
- **State Management** → Menggunakan React Context / Zustand / Redux.  
- **Carbon Footprint Calculator** → API atau kalkulasi internal berbasis data emisi.  
- **Dashboard Analytics** → Grafik mingguan & bulanan progres emisi.  
- **Gamifikasi & Leaderboard** → Poin reward, badge, tantangan komunitas.  
- **Community & Challenge** → Join challenge lingkungan, share progress ke sosial media.  
- **Rekomendasi Personal** → Tips pengurangan emisi berbasis data user.  
- **UI/UX Modern** → shadcn-ui + Tailwind, animasi ringan, tema hijau & biru.  

---

## ⚙️ Setup Instructions  

### 1. Clone Repository  
```bash
git clone https://github.com/yourusername/ecotrack.git
cd ecotrack
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

```
VITE_SUPABASE_URL=https://jwexzhfzqbeppuobvqnk.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3ZXh6aGZ6cWJlcHB1b2J2cW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5Njg4NTgsImV4cCI6MjA3MTU0NDg1OH0.JZfzELig6U4ElDM-RGEYUOgSE-73OopnZRAwclTL2dw
```

> Dapatkan **Project URL** dan **Anon Key** dari dashboard Supabase.

### 4. Run Development Server

```bash
npm run dev
```

### 5. Build & Deploy to Vercel

* Push project ke GitHub.
* Buka [Vercel Dashboard](https://vercel.com/dashboard).
* Import project dari GitHub.
* Tambahkan Environment Variables di **Project Settings > Environment Variables** (isi `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY`).
* Deploy → aplikasi siap online 🚀

---

## 🤖 AI Support Explanation

Walaupun inti project berbasis database, **AI dapat mendukung fitur EcoTrack** dengan cara:

* **Rekomendasi personal**: AI memberi tips berbasis aktivitas user (contoh: “Kurangi motor 2x/minggu → hemat 5 kg CO₂”).
* **Pengkategorian otomatis**: Jika user menulis aktivitas bebas (“jalan kaki ke kampus 2 km”), AI bisa otomatis kategorikan ke *transportasi*.
* **Future roadmap**: Chatbot ramah lingkungan yang menjawab pertanyaan seputar gaya hidup hijau.

---

## 📸 Screenshots (Dummy Data Example)

Tambahkan screenshot:

* Dashboard user (grafik progress)
![alt text](image.png)
* Form input aktivitas
![alt text](image-1.png)
* Halaman komunitas & leaderboard
![alt text](image-2.png)

---

## 📄 License

MIT License – bebas digunakan & dimodifikasi untuk keperluan belajar.

```
Project ini sengaja gue buat untuk Capstone Project By Hacktive & IBM.
---
