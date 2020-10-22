import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./Context/Context";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MDBIcon, MDBBtn } from "mdbreact";

export default function Footer() {
  return (
    <footer class="page-footer font-small unique-color-dark">
      <div className="footer_social">
        <div class="container">
          <div class="row py-4 d-flex align-items-center">
            <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 class="mb-0">Sosyal Medya Hesaplarımızı Takip Edin!</h6>
            </div>
            <div class="col-md-6 col-lg-7 text-center text-md-right">
              <div className="icon">
                <a class="fb-ic">
                  <i class="fab fa-facebook-f white-text mr-4"> </i>
                </a>
                <a class="tw-ic">
                  <i class="fab fa-twitter white-text mr-4"> </i>
                </a>
                <a class="gplus-ic">
                  <i class="fab fa-google-plus-g white-text mr-4"> </i>
                </a>
                <a class="li-ic">
                  <i class="fab fa-linkedin-in white-text mr-4"> </i>
                </a>
                <a class="ins-ic">
                  <i class="fab fa-instagram white-text"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center text-md-left mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">
              FIRAT KOCAOĞLU EDDANETWORK
            </h6>
            <p>Yazılım ve otomasyon şirketidir.</p>
            <img className="footer_img"
            src="https://www.tgbd.org.tr/content/upload/companies/antalya-teknokentten-b910-20181220140353.png" width="100" height="50"></img>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">ÜRÜNLERİMİZ</h6>
            <p>
              <a className="footer-link" href="https://bora.eddanetwork.com/">
                BORA Uzaktan Eğitim
              </a>
            </p>
            <p>
              <a className="footer-link" href="http://cyberella.net/">
                Cyberella
              </a>
            </p>
            <p>
              <a className="footer-link" href="http://eddacicek.com/">
                Eddaçiçek Evi
              </a>
            </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">HAKKIMIZDA</h6>
            <p>
              <a className="footer-link" href="/about">
                Biz Kimiz
              </a>
            </p>
            
            <p>
              <a className="footer-link" href="/projects">
                Projelerimiz
              </a>
            </p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase font-weight-bold">İletişim</h6>
            <p>
              <i class="fas fa-home mr-3"></i> Pınarbaşı Mh. Hürriyet Cd. Ar-Ge
              2, No:3A/23 Konyaaltı, Antalya
            </p>
            <p>
              <i class="fas fa-envelope mr-3"></i> info@eddanetwork.com
            </p>
            <p>
              <i class="fas fa-phone mr-3"></i> + 09 533 375 19 11
            </p>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div className="footer-copyright-text">
          © 2020 Copyright: Eddanetwork.com
        </div>
      </div>
    </footer>
  );
}
