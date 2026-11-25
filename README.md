# Hebil Ege Coşkun - Kişisel CV Website

Gerçek CV bilgilerinizden oluşturulmuş, modern, responsive ve erişilebilir bir kişisel CV/portfolyo websitesi. GitHub Pages ile ücretsiz hosting için optimize edilmiştir.

## ✨ Özellikler

- **🎨 Modern Havacılık Temalı Tasarım** - Mavi/altın renk paleti, profesyonel görünüm
- **🌙 Koyu/Açık Tema** - Sistem tercihine göre otomatik, manuel geçiş ile
- **📱 Tam Responsive** - Mobil, tablet ve masaüstü için optimize edilmiş
- **♿ Erişilebilirlik (a11y)** - WCAG 2.1 AA standartlarına uygun
- **⚡ Performans** - Vanilla JS, CSS değişkenleri, optimize edilmiş animasyonlar
- **🔍 SEO Dostu** - Semantik HTML, meta etiketleri, Open Graph desteği
- **🖨️ Yazdırma Desteği** - CV'yi PDF olarak kaydetmek için optimize edilmiş stiller
- **🚀 GitHub Pages Ready** - Tek komutla dağıtım

## 🛠️ Teknolojiler

- **HTML5** - Semantik, erişilebilir markup
- **CSS3** - Custom Properties, Grid, Flexbox, Modern CSS
- **Vanilla JavaScript (ES6+)** - Framework'sız, hafif (~8KB gzipped)
- **Inter + Space Grotesk Fonts** - Google Fonts üzerinden

## 📁 Proje Yapısı

```
Egecv2/
├── index.html              # Ana HTML dosyası (gerçek CV verilerinizle)
├── styles.css              # Tüm stiller (havacılık teması)
├── script.js               # Etkileşim mantığı
├── README.md               # Bu dosya
├── .gitignore              # Git ignore kuralları
└── assets/
    ├── images/
    │   └── favicon.svg     # Özel favicon
    └── documents/
        └── cv.pdf          # Orijinal CV'niz (PDF)
```

## 📋 CV İçeriği (Gerçek Verilerinizden)

### Kişisel Bilgiler
- **İsim:** Hebil Ege Coşkun
- **Telefon:** +90 553 176 86 89
- **E-posta:** coskunege64@gmail.com
- **Konum:** Uşak / Merkez, Türkiye

### Eğitim
- **Otonom Sistemler Teknikerliği** - Mehmet Akif Ersoy Üniversitesi (2025 - Devam Ediyor)
- **Uçak Motor-Gövde Bakım** - Özel Denizli Kokpit Havacılık M.T.A.L. (2020-2024, O.B.P.: 88,05)
- **HA-1 Ticari Drone Pilot Ehliyeti** - TRONK Havacılık (2023)
- **CV Hazırlama / Kariyer Planlama** - İŞKUR / TRONK Havacılık

### Sertifikalar
- EUROPASS Uçak Bakım Teknisyeni Mesleki Yeterlilik Belgesi
- HA-1 Ticari Drone Pilot Ehliyeti
- Park Hangarı İşletme Sertifikası (AİL Aviation)
- Uçuş Eğitimi ve Simülatör Bakımı (Kokpit Havacılık M.T.A.L.)
- PURPLE COMET Math Meet (2020-2021)

### Staj & Deneyimler (8 adet)
1. **SOS AIR** - Güvenlik ve Kalite (Tem 2023)
2. **SOCAR Havacılık** - Jet Uçak Teknik (Haz 2023)
3. **Bikini Technic** - Genel Uçak Bakım (Haz 2023)
4. **JET ASSIST (Merkur Havacılık)** - Dispatch/Uçuş Operasyonları (Haz 2023)
5. **AİL Aviation** - Park Hangarı İşletme & Yer Hizmetleri (Haz 2023)
6. **Türk Hava Kurumu** - Cessna Bakım Eğitimi (May 2023)
7. **Zorlu Havacılık** - Helikopter Bakım (Tem 2023)
8. **BE-AERO** - Teknik Hangar Gezisi (Tem 2023)
9. **TEOSS Bilgisayar** - Bilgisayar & Güvenlik Sistemleri (Haz-Ağu 2023)

### TEKNOFEST Projeleri
- **İklimlendirilebilir Sera (2024)** - Takım Kaptanı (7 kişi), PID kontrol, IoT, 3D tasarım
- **Delta Kanat İHA (2023)** - 5 kişi, PX4/ArduPilot, karbon fiber, ground station
- **Cessna Tipi Uçak (2022)** - 5 kişi, otopilot, telemetri, güvenli iniş

### Teknik Beceriler
- **Havacılık:** Motor bakım, gövde tamiri, hidrolik/pnömatik, aviyonik, simülatör, marshalling
- **Otonom Sistemler:** Drone pilotaj (HA-1), PX4/ArduPilot, sensör füzyonu, PID, gömülü sistemler, 3D modelleme
- **Yazılım:** C/C++, Python, MATLAB/Simulink, Git, Linux
- **Yetenekler:** İngilizce B1, takım liderliği, dokümantasyon, proje yönetimi, analitik düşünme

## 🚀 Hızlı Başlangıç

### Yerel Geliştirme

```bash
# Projeyi klonlayın
git clone https://github.com/kullaniciadi/Egecv2.git
cd Egecv2

# Basit bir HTTP sunucusu başlatın
# Python 3:
python -m http.server 8000

# Node.js (npx):
npx serve .

# VS Code: "Open with Live Server" eklentisi
```

Tarayıcınızda `http://localhost:8000` adresini açın.

### GitHub Pages'e Dağıtım

1. **Repository oluşturun:**
   - GitHub'da yeni bir repository oluşturun: `kullaniciadi.github.io` (veya herhangi bir isim)

2. **Kodu pushlayın:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personalized CV website with real data"
   git branch -M main
   git remote add origin https://github.com/kullaniciadi/Egecv2.git
   git push -u origin main
   ```

3. **GitHub Pages'i etkinleştirin:**
   - Repository → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `(root)`
   - Save

4. **Erişim:**
   - `https://kullaniciadi.github.io/Egecv2/` (proje repo ise)
   - `https://kullaniciadi.github.io/` (`kullaniciadi.github.io` repo ise)

## 🔧 Özelleştirme

### Kişisel Bilgileri Güncelleme

`index.html` dosyasında şu bölümleri kendi bilgilerinizle değiştirin:
- **Hero bölümü:** İsim, ünvan, slogan, rozetler
- **Hakkımda:** Biyografi, istatistikler
- **Eğitim:** Okullar, dereceler, sertifikalar
- **Staj & Deneyim:** Şirketler, tarihler, başarılar, teknolojiler
- **Sertifikalar:** Belge detayları
- **Projeler:** TEKNOFEST ve diğer projeler
- **Beceriler:** Kategoriler, seviyeler (width değerleri)
- **Etkinlikler:** Teknik geziler, seminerler
- **İletişim:** E-posta, telefon, konum, LinkedIn, GitHub

### Renk Teması Değiştirme

`styles.css` dosyasındaki `:root` değişkenlerini düzenleyin:

```css
:root {
  --color-primary: #1e3a5f;      /* Ana koyu mavi */
  --color-primary-hover: #1e4d8c;
  --color-secondary: #0ea5e9;    /* Açık mavi (havacılık) */
  --color-accent: #f59e0b;       /* Altın/amber (vurgu) */
  --color-bg: #f8fafc;           /* Arka plan */
  --color-text: #1e293b;         /* Ana metin */
  /* ... diğer değişkenler */
}
```

### Font Değiştirme

`index.html` içinde Google Fonts linkini ve `styles.css`'te `--font-family` / `--font-family-display` değişkenlerini güncelleyin.

### Formspree İle İletişim Formu

1. [Formspree.io](https://formspree.io) adresinde ücretsiz hesap oluşturun
2. Yeni bir form oluşturun ve endpoint URL'ini alın
3. `index.html`'de form action'ını güncelleyin:
   ```html
   <form class="contact__form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## ♿ Erişilebilirlik Özellikleri

- Semantik HTML5 elementleri (`header`, `nav`, `main`, `section`, `article`, `footer`)
- ARIA etiketleri ve rolleri
- Klavye navigasyonu (Tab, Enter, Escape)
- Odak göstergeleri (`:focus-visible`)
- Skip link (ana içeriğe atlama)
- Renk kontrastı WCAG AA
- `prefers-reduced-motion` desteği
- Ekran okuyucu uyumlu
- Dil özelliği (`lang="tr"`)

## 🎯 Performans

- **Critical CSS** inline (ilk yükleme için)
- **Font preconnect** ve `font-display: swap`
- **SVG ikonlar** (inline, request yok)
- **Vanilla JS** (framework yükü yok)
- **CSS Custom Properties** (runtime theme switching)
- **IntersectionObserver** (scroll animasyonları)
- **Passive event listeners** (scroll performansı)

## 📱 Tarayıcı Desteği

| Tarayıcı | Versiyon |
|----------|----------|
| Chrome   | 80+      |
| Firefox  | 75+      |
| Safari   | 13+      |
| Edge     | 80+      |

*CSS Grid, Flexbox, Custom Properties, IntersectionObserver gerektirir.*

## 📄 Lisans

MIT License - İstediğiniz gibi kullanın, değiştirin, dağıtın.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi pushlayın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📞 İletişim

**Hebil Ege Coşkun**
- 📧 E-posta: coskunege64@gmail.com
- 📱 Telefon: +90 553 176 86 89
- 💼 LinkedIn: [linkedin.com/in/hebil-ege-coskun](https://linkedin.com/in/hebil-ege-coskun)
- 💻 GitHub: [github.com/hebil-ege](https://github.com/hebil-ege)
- 📍 Konum: Uşak / Merkez, Türkiye

---

⭐ Bu projeyi beğendiyseniz yıldızlamayı unutmayın!