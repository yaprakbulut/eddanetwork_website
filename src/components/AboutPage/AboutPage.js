import React from "react";
import Title from "../Title";
import Bounce from "react-reveal/Bounce";
import "./aboutPage.css";

export default function AboutPage() {
  return (
    <section className="biography">
      <div class="about-section">
        <div className="inner-container">
          <div className="text">
          <Title title="biz kimiz?" color="#df080e" size="1rem" />
            <Bounce right duration={1000} cascade>
              <p className="text_p">
                Gelişmiş altyapısı, deneyimli ekibi ile yazılım şirketi olarak
                kurulan Eddanetwork sizlere en doğru, kaliteli ve sonuç odaklı
                hizmet vermek için her zaman yanınızda. Eddanetwork,
                işletmenizin geleceğe yönelik atacağı adımlarda en büyük
                yardımcınızdır. Sektörde önemli projelerde imzası bulunan
                şirketimizin; oteller, turizm organizasyonları, eğitim,
                hastaneler gibi sağlık ve eğlence hizmetleri alanınlarında
                sürdürdüğü çalışmalara sürekli olarak yenilik katarak ve bir
                adım daha ileriye giderek sürdürmekteyiz.
              </p>
            </Bounce>
            <Title title="misyonumuz" color="#df080e" />
            <Bounce right duration={1000} cascade>
              <p className="text_p">
                Ar-Ge faliyetleri ile teknolojik yenilikler yaratmak.
                Yenilikleri ülke ekonomisine katkı sağlayacak biçimde
                ticarileştirmek. Aynı zamanda kendi alanında güvenilir bir firma
                olmayı hedeflemek. 
              </p>
            </Bounce>
            <Title title="vizyonumuz" color="#df080e" />
            <Bounce right duration={1000} cascade>
              <p className="text_p">
                Alanında uzman ve tecrübeli kadromuz ile yenilikçi, dürüst ve
                memnuniyete önem veren bir firma olmak. Yapılan çalışmalarımızı
                öngörülü , yüksek hassasiyetli ve her adımını kontrol ederek en
                iyi sonuca ulaşmasını sağlamak amaçlarımızdandır. 
              </p>
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  );
}
