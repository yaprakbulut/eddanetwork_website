import React from "react";
import Title from "../Title";
import { ProductConsumer } from "../Context/Context";
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';


export default function Portfolio() {
  return (
    <ProductConsumer>
      {(value) => {
        const { portfolio } = value;
        return (
          <section className="portfolio">
            <div className="inside-container">
              <div className="portfolio-center">
                <div className="single-portfolio">
                  <Title title="ERP" color="#df080e" />
                  <Fade up>
                  <p >
                  Amacı, tüm üretim süreçlerinin takip edilmesi ve otomasyonunun yapılması olan ve Kosgeb’den de
onay alan projemizin 3 ana özelliği öne çıkıyor. Birincisi; Ürün entegratörü, jenerik yapısı ile
kullanışlı bir modül. İkincisi; Logo entegrasyonunu da jenerik hale getirdik ve minimum müdahale
ile entegrasyonu sağladık. Üçüncüsü de; ürünlerin üretim süreçlerinin de içinde bulunduğu
etiketleme ve izleme modülünü geliştirdik.
                  </p>
                  </Fade>
                </div>

                <div className="single-portfolio">
                  <Title title="IOT" color="#df080e" />
                  <Fade up>
                  <p>
                  Üretim , nakliye, bakım (özellikle kestirme bakım) süreçlerinde özellikle anlık müdahale gerektiren
kalite yönetimi isteklerini yerine getirmek amacıyla, bulut teknolojilerinin de içinde olduğu , sahip
olduğumuz sabit/mobil cihazlarımızla izleme / takip etme / önlem alma kararlarını ve
raporlamalarını almak üzere yeni ve güvenilir cihazımız üzerinde çalışmalara başladık. Tak çalıştır
mantığı, wi-fi / zigbee / gsm / lorawan özelliklerini barındıracak cihazımız, genel maksat veya
projeye özel tasarımlarıyla 2020 yılının sonuna doğru ürün haline getirmeyi planlıyoruz. Hali
hazırda sahip olduğumuz kiosk teknolojisiyle birleştireceğimiz nice projelerimizle sizlerle birlikte
çalışmayı hedefliyoruz.
                  </p>
                  </Fade>
                </div>

                <div className="single-portfolio">
                  <Title title="Bora Uzaktan Eğitim" color="#df080e"/>
                  <Fade up>
                  <p>
                  Temellerini 2012 yılında attığımız ve açık kaynak kod kullandığımız uzaktan eğitim sistemimiz faal
olarak kullanılmaktadır. Şu an havacılık sektöründe hız alsa da diğer sektörler tarafından da
kullanılabilir bir yapıdadır. Soru bankası ve sınav çeşitliliği ile kullanımı kolay ve geliştirilebilir bir
yapıdadır.
                  </p>
                  </Fade>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
