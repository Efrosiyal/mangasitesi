# Manga Sitesi - Kurulum Talimatları

## Ön Gereksinimler

- **Node.js** (v18 veya üzeri)
- **npm** (Node Package Manager)
- **Git**

## Adım Adım Kurulum

### 1. Projeyi Klonlama

Projeyi bilgisayarınıza klonlamak için aşağıdaki komutu kullanın:

bash
```git clone https://github.com/Efrosiyal/mangasitesi.git```
### 2. Bağımlılıkları Yükleme
Proje dizinine gidin ve bağımlılıkları yükleyin:```
cd mangasitesi
npm install```
### 3. Ortam Değişkenlerini Ayarlama
.env dosyasını kendi ortamınıza göre düzenleyin. Örnek bir .env dosyası aşağıdaki gibi olabilir:
# Veritabanı Ayarları
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=mangasite
```
4. Uygulamayı Başlatma
Uygulamayı başlatmak için aşağıdaki komutu çalıştırın:```
npm start```
Uygulama varsayılan olarak http://localhost:3000 adresinde çalışacaktır.

5. Docker ile Çalıştırma (Opsiyonel)
Eğer Docker kullanmak isterseniz, aşağıdaki komutları kullanabilirsiniz:
```docker-compose up --build```
### Önemli Notlar
Projeyi ilk kez çalıştırırken tüm bağımlılıkların yüklenmesi biraz zaman alabilir.

Herhangi bir hata durumunda node_modules klasörünü silip npm install komutunu tekrar çalıştırabilirsiniz.

Veritabanı bağlantısında sorun yaşarsanız .env dosyasındaki bağlantı bilgilerini kontrol edin.

Yardım ve Destek
Herhangi bir sorunla karşılaşırsanız, GitHub üzerinden issue açabilirsiniz.

İyi kodlamalar! 🚀
