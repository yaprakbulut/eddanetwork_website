import React from "react";
import Title from "../Title";
import { ProductConsumer } from "../Context/Context";

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
                  <Title title="BİZ KİMİZ?" color="#df080e" fontSize="0.5rem"/>
                  <p>
                    Biz bir Ar-Ge şirketiyiz. Zaten yazılmış olan yazılımlar
                    bazen işinizi görmez. O zaman işletmenize özel yazılım veya
                    otomasyon ihtiyacı olduğunda, işinizi geliştirmeye yönelik
                    bir yazılıma ihtiyaç duyduğunuzda arayabileceğiniz bir
                    dostunuzuz.
                  </p>
                </div>

                <div className="single-portfolio">
                  <Title title="MİSYONUMUZ" color="#df080e" />
                  <p>
                    İşi öğreniriz, yazılımı ve/veya otomasyonu birlikte
                    geliştiririz ve kullanmanızı sağlarız.
                  </p>
                </div>

                <div className="single-portfolio">
                  <Title title="VİZYONUMUZ" color="#df080e" />
                  <p>
                    Yazılım ve otomasyon, bir işletmeye direkt veya dolaylı
                    yoldan para kazandırır. Ya personelin verimi arttırarak
                    şirketin kârını arttırmalı, ya da anlık müdahaleler ve bilgi
                    akışlarıyla(raporlama) gereksiz para kayıplarınızı
                    önlemelidir.
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
