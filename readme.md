# Secure Messaging Hybrid Cryptography (RSA + AES + WebSocket)

Aplikasi ini merupakan simulasi **pengiriman pesan aman (secure messaging)** menggunakan **Hybrid Cryptography**, yaitu kombinasi **RSA (asymmetric)** dan **AES (symmetric)** dengan komunikasi **real-time berbasis WebSocket**.

Aplikasi dibuat untuk keperluan **tugas akhir mata kuliah Kriptografi**.

---

## 📁 Struktur Folder Project

```
secure-messaging/
│
├── server.js            # WebSocket server (Node.js)
├── sender.html          # Client pengirim pesan
├── receiver.html        # Client penerima pesan
└── README.md            # Dokumentasi running aplikasi
```

---

## ⚙️ Kebutuhan Sistem

Sebelum menjalankan aplikasi, pastikan:

* **Node.js** sudah terinstall

  ```bash
  node -v
  ```
* Browser modern (Chrome / Edge / Firefox)
* Koneksi internet **tidak diperlukan** (local only)

---

## 📦 Instalasi Dependency

Masuk ke folder project, lalu jalankan:

```bash
npm install ws
```

Library `ws` digunakan untuk membuat **WebSocket server**.

---

## ▶️ Cara Menjalankan Aplikasi

### 1️⃣ Jalankan WebSocket Server

Buka terminal di folder project, lalu jalankan:

```bash
node server.js
```

Jika berhasil, akan muncul:

```
WebSocket server running on ws://localhost:8080
```

⚠️ **Jangan tutup terminal ini selama aplikasi berjalan.**

---

### 2️⃣ Jalankan Client (Sender & Receiver)

Gunakan **Live Server / Go Live** atau server lokal lainnya.

Jika menggunakan **VS Code Live Server**:

* Klik kanan folder project
* Pilih **Open with Live Server**

Aplikasi akan berjalan di port, contoh:

```
http://127.0.0.1:5500
```

---

### 3️⃣ Buka Halaman Receiver

Buka di browser:

```
http://127.0.0.1:5500/receiver.html
```

Langkah:

1. Klik **Generate RSA Key**
2. Salin **Public Key** yang dihasilkan
3. Biarkan halaman tetap terbuka

📌 *Private key disimpan aman di browser receiver.*

---

### 4️⃣ Buka Halaman Sender

Buka tab browser baru:

```
http://127.0.0.1:5500/sender.html
```

Langkah:

1. Paste **Public Key Receiver**
2. Masukkan pesan
3. Klik **Send Secure Message**

---

### 5️⃣ Proses Penerimaan Pesan

Di halaman **Receiver**:

* Pesan diterima dalam keadaan **terenkripsi**
* Klik atau hover pada area pesan untuk melihat **ciphertext (Base64)**
* Klik tombol **Dekrip Pesan** untuk membuka pesan asli

---

## 🔐 Alur Kerja Sistem (Flow)

1. Receiver menghasilkan pasangan **RSA key**
2. Public key dikirim ke Sender
3. Sender menghasilkan **AES key**
4. Pesan dienkripsi menggunakan AES
5. AES key dienkripsi menggunakan RSA
6. Ciphertext dikirim melalui WebSocket
7. Receiver melakukan dekripsi **secara manual**

---

## 🎓 Catatan Akademik

* Aplikasi menerapkan konsep **Hybrid Cryptography**
* Proses dekripsi tidak otomatis untuk mensimulasikan **kontrol akses private key**
* Ciphertext dapat dilihat sebelum dekripsi untuk membedakan data terenkripsi dan plaintext

---

## ✅ Kesimpulan

Aplikasi ini menunjukkan implementasi nyata:

* RSA untuk pertukaran kunci
* AES untuk enkripsi data
* WebSocket untuk komunikasi real-time
* Web Crypto API untuk keamanan sisi client

Cocok digunakan sebagai **projek akhir mata kuliah Kriptografi**.

---

© 2025 – Secure Messaging Hybrid Cryptography
