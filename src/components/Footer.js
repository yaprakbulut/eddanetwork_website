import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context/Context';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MDBIcon,MDBBtn } from 'mdbreact';



export default function Footer() {
    return (
            <footer class="page-footer font-small unique-color-dark">
            <div className="footer_social">
            <div class="container">

                <div class="row py-4 d-flex align-items-center">

                <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                    <h6 class="mb-0">Get connected with us on social networks!</h6>
                </div>
                <div class="col-md-6 col-lg-7 text-center text-md-right">

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
            

            <div class="container text-center text-md-left mt-5">

            <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 class="text-uppercase font-weight-bold">EDDANETWORK</h6>
                <p>Yazılım ve otomasyon şirketidir.</p>

                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase font-weight-bold">Products</h6>
                <p>
                    <a href="#!">MDBootstrap</a>
                </p>
                <p>
                    <a href="#!">MDWordPress</a>
                </p>
                <p>
                    <a href="#!">BrandFlow</a>
                </p>
                <p>
                    <a href="#!">Bootstrap Angular</a>
                </p>

                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase font-weight-bold">Useful links</h6>
                <p>
                    <a href="#!">Your Account</a>
                </p>
                <p>
                    <a href="#!">Become an Affiliate</a>
                </p>
                <p>
                    <a href="#!">Shipping Rates</a>
                </p>
                <p>
                    <a href="#!">Help</a>
                </p>

                </div>
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase font-weight-bold">İletişim</h6>
                <p>
                    <i class="fas fa-home mr-3"></i> Pınarbaşı Mh. Hürriyet Cd. Ar-Ge 2, No:3A/23 Konyaaltı, Antalya</p>
                <p>
                    <i class="fas fa-envelope mr-3"></i> info@eddanetwork.com</p>
                <p>
                    <i class="fas fa-phone mr-3"></i> + 09 533 375 19 11</p>

                </div>

            </div>

            </div>
            <div class="footer-copyright text-center py-3">
            <p className="copyright"> © 2020 Copyright: Eddanetwork.com </p>
            </div>

            </footer>
    )
}
