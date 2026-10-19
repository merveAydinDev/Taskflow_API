## TASKFLOW - Görev ve Proje Yönetim Sistemi API

Bu proje, Node.js ve Express.js kullanılarak geliştirilmiş bir Görev ve Proje Yönetim Sistemi REST API'sidir. Kurgusal bir yazılım şirketinin ekip içi görev atamalarını, önceliklerini ve durum takiplerini yönetmek amacıyla tasarlanmıştır. Bu repository, Node.js Backend Programlama Eğitimi bitirme projesi teslimi kapsamında hazırlanmıştır.

## 🚀 Kullanılan Teknolojiler

*   **Çalışma Ortamı:** Node.js
*   **Web Çerçevesi:** Express.js
*   **API Mimarisi:** RESTful API
*   **Test Aracı:** Postman

## ⚙️ Kurulum Adımları

Projenin yerel bilgisayarınızda çalıştırılabilmesi için bilgisayarınızda [Node.js](https://nodejs.org/)'in kurulu olması gerekmektedir. Ardından aşağıdaki adımları izleyin:

1. **Repoyu Klonlayın:**
   ```bash
   git clone https://github.com/merveAydinDev/PROJE1.git
   ```

2. **Proje Dizinine Gidin:**
   ```bash
   cd PROJE1
   ```

3. **Bağımlılıkları Yükleyin:**
   Projenin çalışması için gerekli olan Express.js ve diğer bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

## 🏃‍♂️ Çalıştırma Adımları

Kurulum tamamlandıktan sonra sunucuyu başlatmak için terminalde aşağıdaki komutu çalıştırın:

```bash
npm start
```

*(Not: Eğer `package.json` dosyanızda geliştirici (dev) scripti tanımladıysanız `npm run dev` komutunu da kullanabilirsiniz.)*

Sunucu başarıyla başladığında terminalde uygulamanın çalıştığına ve loglama middleware'inin aktif olduğuna dair bir mesaj göreceksiniz. Uygulama varsayılan olarak `http://localhost:3000` (veya sizin belirlediğiniz port) üzerinden dinlemeye başlayacaktır.

## 📌 API Uç Noktaları (Endpoints)

Sistem aşağıdaki CRUD operasyonlarını desteklemektedir:

| HTTP Metodu | Uç Nokta (Endpoint) | Açıklama |
| :--- | :--- | :--- |
| **GET** | `/api/tasks` | Sistemdeki tüm görevleri listeler. |
| **GET** | `/api/tasks/:id` | Belirtilen ID'ye sahip özel bir görevin detaylarını getirir. |
| **POST** | `/api/tasks` | Sisteme yeni bir görev ekler. |
| **PUT** | `/api/tasks/:id` | Var olan bir görevin bilgilerini günceller. |
| **DELETE**| `/api/tasks/:id` | Belirtilen ID'ye sahip görevi sistemden siler. |

## 🧪 Test Süreci

Bu projede yer alan tüm API uç noktaları **Postman** aracı kullanılarak test edilmiştir. Görev ekleme, listeleme, detay görüntüleme, güncelleme ve silme (CRUD) işlemlerinin başarıyla gerçekleştiğini kanıtlayan ekran görüntüleri projenin içerisindeki ilgili klasörde/dizinde yer almaktadır.
