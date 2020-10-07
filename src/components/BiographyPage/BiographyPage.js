import React from "react";
import Title from "../Title";
import BackPerson from "../../images/man.png";
import Bounce from "react-reveal/Bounce";
import "./biographyPage.css";

export default function BiographyPage() {
  return (
    <section className="biography">
      <div className="inner-container">
        <h1>eddanetwork</h1>

        <div className="person-texts">
          <h4>BİZ KİMİZ?</h4>
          <Bounce right duration={1000} cascade>
            <p>
              Gelişmiş altyapısı, deneyimli ekibi ile yazılım şirketi olarak
              kurulan Eddanetwork sizlere en doğru, kaliteli ve sonuç odaklı
              hizmet vermek için her zaman yanınızda. Eddanetwork, işletmenizin
              geleceğe yönelik atacağı adımlarda en büyük yardımcınızdır.
              Sektörde önemli projelerde imzası bulunan şirketimizin; oteller,
              turizm organizasyonları, eğitim, hastaneler gibi sağlık ve eğlence
              hizmetleri alanınlarında sürdürdüğü çalışmalara sürekli olarak
              yenilik katarak ve bir adım daha ileriye giderek sürdürmekteyiz.
            </p>
          </Bounce>
          <h4>MİSYONUMUZ</h4>
          <Bounce right duration={1000} cascade>
            <p>Ar-Ge faliyetleri ile teknolojik yenilikler yaratmak, </p>
            <p>
              Yenilikleri ülke ekonomisine katkı sağlayacak biçimde
              ticarileştirmek,
            </p>
            <p>
              Aynı zamanda kendi alanında güvenilir bir firma olmayı
              hedeflemek. 
            </p>
          </Bounce>
          <h4>VİZYONUMUZ</h4>
          <Bounce right duration={1000} cascade>
            <p>
              Alanında uzman ve tecrübeli kadromuz ile yenilikçi, dürüst ve
              memnuniyete önem veren bir firma olmak. Yapılan çalışmalarımızı
              öngörülü , yüksek hassasiyetli ve her adımını kontrol ederek en
              iyi sonuca ulaşmasını sağlamak amaçlarımızdandır. 
            </p>
          </Bounce>
        </div>
      </div>
    </section>
  );
}
