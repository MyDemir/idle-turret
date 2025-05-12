# Idle Turret Game

Bu proje, bir "Idle Turret" oyunudur. Oyuncular dalgalar halinde gelen düşmanları savunmak için kuleler yerleştirir ve stratejik kararlar alır. Oyun, React ve TypeScript kullanılarak geliştirilmiştir ve hızlı geliştirme için Vite kullanılmıştır.

## Özellikler

- **React + TypeScript**: Kullanıcı arayüzü React ile oluşturulmuş olup, TypeScript sayesinde güvenli ve tipli bir geliştirme deneyimi sağlar.
- **Düşman Dalga Yönetimi**: Farklı türde düşmanlarla her dalga zorlaşır.
- **Kule Saldırı Mekanizması**: Yerleştirilen kuleler düşmanlara otomatik olarak saldırır.
- **Sağlık ve Kaynak Yönetimi**: Can, altın ve dalga bilgisi HUD üzerinden takip edilebilir.

## Kullanılan Teknolojiler

- **React**: Bileşen tabanlı kullanıcı arayüzü geliştirme.
- **TypeScript**: Tip güvenliği ve daha sağlam kod yazımı.
- **Vite**: Hızlı ve verimli geliştirme ortamı.
- **CSS**: Görsel düzenleme ve stillendirme.

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edin:

1. **Depoyu Klonlayın**:
   ```bash
   git clone https://github.com/MyDemir/idle-turret.git
   cd idle-turret
   ```

2. **Bağımlılıkları Yükleyin**:
   ```bash
   npm install
   ```

3. **Geliştirme Sunucusunu Başlatın**:
   ```bash
   npm run dev
   ```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek projeyi görüntüleyin.

## Proje Yapısı

- **`src/App.tsx`**: Uygulamanın ana bileşeni. HUD, EnemyZone ve TurretZone bileşenlerini içerir.
- **`src/components/EnemyZone.tsx`**: Düşmanların hareketini ve dalga yönetimini kontrol eder.
- **`src/components/HUD.tsx`**: Can, altın ve dalga bilgilerini görüntüler.
- **`src/components/TurretZone.tsx`**: Kulelerin düşmanlara saldırdığı alanı yönetir.

## Geliştirme Önerileri

- **Testler**: Jest veya React Testing Library ile testler eklenebilir.
- **Sürekli Entegrasyon**: GitHub Actions gibi araçlarla CI/CD süreçleri kurulabilir.
- **Yeni Özellikler**:
  - Daha fazla düşman türü eklenebilir.
  - Kulelerin yükseltilmesi veya farklı kule türleri eklenebilir.
  - Oyun içi mağaza gibi yeni özelliklerle oyun zenginleştirilebilir.

## Katkıda Bulunma

Katkıda bulunmak isterseniz lütfen bir "Issue" açın veya bir "Pull Request" gönderin. Tüm katkılar memnuniyetle karşılanır!

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](./LICENSE) dosyasına bakabilirsiniz.

## İletişim

Herhangi bir sorunuz veya öneriniz varsa, lütfen [MyDemir](https://github.com/MyDemir) ile iletişime geçin.
