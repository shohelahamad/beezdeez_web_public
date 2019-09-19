import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import css from './Home.css';
class Home extends Component {
    render () {
        return (
            <div className="Blog">
              <div className="size1 bg0 where1-parent">
              {/* <div className={[css.size1, css.bg0, css.where1-parent].join(' ')}> */}
                <div className="flex-c-m bg-img1 size2 where1 overlay1 where2 respon2">
                    <div className="wsize2 flex-w flex-c-m cd100 js-tilt">
                        <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15 hoverable">
                            <div className="material-icons text-white">home</div>
                            <span className="s2-txt4">Home</span>
                        </div>

                        <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15 hoverable">
                            <div className="material-icons text-white">pageview</div>
                            <span className="s2-txt4">Demo-Portal</span>
                        </div>

                        <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15 hoverable">
                            <div className="material-icons text-white">call</div>
                            <span className="s2-txt4">Kontakt</span>
                        </div>

                        <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15 hoverable">
                            <div className="material-icons text-white">security</div>
                            <span className="s2-txt4">Impressum</span>
                        </div>
                    </div>
                </div>
                <div className="size3 flex-col-sb flex-w p-l-75 p-r-75 p-t-45 p-b-45 respon1">
                    <div className="wrap-pic1">
                        <img src="../assets/images/trackBaseLogo.png" alt="Track-Base-LOGO"/>
                    </div>

                    <div className="p-t-50 p-b-60">
                        <p className="m1-txt1 p-b-36">

                            <span className="m1-txt2">Willkommen!</span>
                            <br/> Bitte loggen Sie sich ein.
                        </p>
                        <p className="m1-txt1 p-b-36">

                            <span className="m1-txt1">Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen des Passworts.</span>

                        </p>
                        <form className="contact100-form validate-form">
                          <div id="login-content" className="no-select">
                            <div id="login-form" className="firstLoad">
                              <div className="wrap-input100 m-b-10 validate-input">
                                <input className="s2-txt1 placeholder0 input100" type="text" name="username" placeholder="Benutzername" />
                                <span className="focus-input100"></span>
                              </div>

                              <div className="wrap-input100 m-b-20 validate-input">
                                <input className="s2-txt1 placeholder0 input100" type="password" name="password" placeholder="Passwort" />
                                <span className="focus-input100"></span>
                              </div>

                              <div className="w-full">
                                <button className="flex-c-m s2-txt2 size4 bg1 bor1 hov1 trans-04">
                                  Einloggen
                                </button>
                              </div>
                              <div className="w-full text-right">
                                <a className="c-pointer text-primary">
                                  Passwort vergessen
                                </a>
                              </div>
                            </div>
                            <div id="forgot-password-form" className="bounceInLeft">

                              <div className="wrap-input100 m-b-20 validate-input" data-validate="Email is required: ex@abc.xyz">
                                <input className="s2-txt1 placeholder0 input100" type="text" name="email" placeholder="E-Mail"/>
                                <span className="focus-input100"></span>
                              </div>

                              <div className="w-full">
                                <button className="flex-c-m s2-txt2 size4 bg1 bor1 hov1 trans-04">
                                  Anfrage senden
                                </button>
                              </div>
                              <div className="w-full text-right">
                                <a className="c-pointer text-primary">
                                  Einloggen
                                </a>
                              </div>
                            </div>
                          </div>

                        </form>


                        <p className="s2-txt3 p-t-18">
                        </p>
                    </div>

                    <div className="flex-w">
                        <a href="https://www.facebook.com/" className="icon-badge-big" target="_blank">
                            <img src="../assets/images/icon-facebook.svg" className="img-fluid" alt="" />
                        </a>

                        <a href="https://twitter.com/" className="icon-badge-big" target="_blank">
                            <img src="../assets/images/icon-twitter.svg" className="img-fluid" alt="" />
                        </a>

                        <a href="https://www.youtube.com/" className="icon-badge-big" target="_blank">
                            <img src="../assets/images/icon-youtube.svg" className="img-fluid" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Home;
