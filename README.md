# DeepNet

> Proyek Kelompok 5 — Pengkaderan BLUG (Batam Linux User Group), Politeknik Negeri Batam.

<!-- Ganti badge di bawah sesuai stack yang dipakai -->
![Status](https://img.shields.io/badge/status-dalam%20pengembangan-yellow)
![Lisensi](https://img.shields.io/badge/lisensi-MIT-blue)
![Kelompok](https://img.shields.io/badge/kelompok-5-informational)

---

## 📖 Tentang Proyek

Mau pindah ke Linux tapi masih bingung mulai dari distro mana, download-nya di mana, atau takut salah pas install?

Datang lah DeepNet, website yang dapat membantu pengguna untuk transisi ke distro yang paling cocok dengan kebutuhan dan prefrensi mereka, dengan menjawaban beberapa pertanyaan simple pengguna akan dapat saranan yang paling cocok untuk mereka dari distro-distro yang popular, serta mereka juga langsung di kasih car installnya dengan panduan yang "risau free"

website ini menentukan hanya dari 6 distro terpopular saat ini(kecuali unbuntu)

## ✨ Fitur

- Quiz interaktif — _yang kasih saran distro popular terbaik_
- panduan install — _panduan yang lengakap untuk install distro pilihan_

## 🐧 Distro yang Tersedia

- **Linux Mint**
- **Debian**
- **Arch Linux**
- **Pop!_OS**
- **CachyOS**
- **Kali Linux**

## 🧱 Teknologi

| Kategori     | Teknologi          |
| ------------ | ------------------ |
| Bahasa       | html   |
| Tools lain   | _contoh: Git_      |

## 📂 Struktur Proyek

```text
DeepNet/
├── docs/            # Dokumentasi tambahan
├── src/             # Kode sumber utama
├── tests/           # Unit test
├── .gitignore
├── LICENSE
└── README.md
```

> Sesuaikan struktur di atas dengan isi repo yang sebenarnya.

## ⚙️ Prasyarat

Pastikan sudah terpasang:

- [Git](https://git-scm.com/)
- _[contoh: Python 3.10+](https://www.python.org/)_
- _[contoh: Node.js 18+](https://nodejs.org/)_

## 🚀 Instalasi

```bash
# 1. Clone repository
git clone https://github.com/Batam-Linux-User-Group/DeepNet.git
cd DeepNet

# 2. Buat virtual environment (contoh Python)
python -m venv .venv
source .venv/bin/activate        # Linux / macOS
# .venv\Scripts\activate         # Windows

# 3. Install dependency
pip install -r requirements.txt  # sesuaikan dengan stack proyek
```

## 🌐 Deployment & Akses Website

Proyek ini sudah di-deploy dan bisa langsung diakses secara online melalui **Vercel**:

- **Link Website:** [https://deepnet-alpha.vercel.app/](https://deepnet-alpha.vercel.app/)

Jika ingin menjalankannya secara lokal setelah clone repository:
- Buka folder proyek `DeepNet` menggunakan **Visual Studio Code**, lalu jalankan file `index.html` di folder `src/` menggunakan ekstensi **Live Server**, atau buka langsung file `index.html` melalui browser.

## 🤝 Kontribusi

Proyek ini dikerjakan secara internal oleh anggota kelompok, namun masukan tetap terbuka.

1. Buat branch baru: `git checkout -b feat/nama-fitur`
2. Commit perubahan: `git commit -m "feat: menambahkan fitur X"`
3. Push branch: `git push origin feat/nama-fitur`
4. Ajukan Pull Request ke branch `main`

Gunakan [Conventional Commits](https://www.conventionalcommits.org/id/) agar riwayat commit mudah dibaca.

## 👥 Anggota Kelompok 5

| No | Nama                | Peran            | GitHub                                     |
| -- | ------------------- | ---------------- | ------------------------------------------ |
| 1  | Abid Aryasatya      | Ketua / frontend uiux  | [@aboom124](https://github.com/aboom124)   |
| 2  | Cakra Yudhistira Prasetya    | pembuatan panduan arch       | [@cakray](https://github.com/cakray)   |
| 3  | Nurul Ainna Naftalya    | pembuatan panduan debian          | [@ainnanaftalya-source](https://github.com/ainnanaftalya-source)   |
| 4  | Putri Jasmine Hasya Sholihah    | pembuatan panduan debian      | [@minteaac](https://github.com/minteaac)   |
| 5  | rizky    | pembuatan panduan mint / uiux      | [@username](https://github.com/username)   |
| 5  | Irsyad Haziq Alghifari    | dokumentasi     | [@tebasrumput](https://github.com/tebasrumput)   |

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

<p align="center">
  Dibuat dengan ❤️ oleh Kelompok 5 Pengkaderan BLUG
  <br />
  <a href="https://blug.polibatam.ac.id/">blug.polibatam.ac.id</a>
</p>
