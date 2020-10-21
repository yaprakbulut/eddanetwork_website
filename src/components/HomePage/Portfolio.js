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
                  <Title title="ERP" color="#df080e" />
                  <p >
                    Biz bir Ar-Ge şirketiyiz. Zaten yazılmış olan yazılımlar
                    bazen işinizi görmez. O zaman işletmenize özel yazılım veya
                    otomasyon ihtiyacı olduğunda, işinizi geliştirmeye yönelik
                    bir yazılıma ihtiyaç duyduğunuzda arayabileceğiniz bir
                    dostunuzuz.
                  </p>
                </div>

                <div className="single-portfolio">
                  <Title title="IOT" color="#df080e" />
                  <p>
                  Güvenilirlik, sürdürülebilir ve yenilikçi çözümler, sağlam ve kullanıcı dostu sistemler.
                  </p>
                </div>

                <div className="single-portfolio">
                  <Title title="Bora Uzaktan Eğitim" color="#df080e"/>
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
