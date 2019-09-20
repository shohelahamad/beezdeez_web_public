import React, { Component } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import homeCss from './Home.css';
import logo from '../../logo.svg';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
class Home extends Component {
  state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            confirmPassword: {
              elementType: 'input',
              elementConfig: {
                  type: 'password',
                  placeholder: 'Re-enter Password'
              },
              value: '',
              valid: false,
              validationRules: {
                equalTo: "password"
              },
              touched: false
            }
        },
        isSignup: false
    }
    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );
    }
    // renderRedirect = () => {
    //   this.props.history.push("/profile");
    // }
    submitHandler = ( event ) => {
        event.preventDefault();
        if(this.state.isSignup && (this.state.controls.password.value === this.state.controls.confirmPassword.value)){
          this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup );
        }else if (!this.state.isSignup) {
          this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup );
        }else {
          alert("Passwords don't match");
        }
        // this.renderRedirect();
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }
    render () {
      const formElementsArray = [];
      if(!this.state.isSignup){
        for ( let key in this.state.controls ) {
          if(key != 'confirmPassword'){
            formElementsArray.push( {
              id: key,
              config: this.state.controls[key]
            } );
          }
        }
      }else {
        for ( let key in this.state.controls ) {
          formElementsArray.push( {
              id: key,
              config: this.state.controls[key]
          } );
      }
      }

      let form = formElementsArray.map( formElement => (
              <Input
                  key={formElement.id}
                  elementClasses={homeCss.wrap_input100, homeCss.m_b_10, homeCss.validate_input}
                  elementType={formElement.config.elementType}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value}
                  invalid={!formElement.config.valid}
                  shouldValidate={formElement.config.validation}
                  touched={formElement.config.touched}
                  changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        let authRedirect = null ;
        if (this.props.isAuthenticated){
          authRedirect = <Redirect to="/profile" />
        }
        return (
              <div className={[homeCss.size1, homeCss.bg0, homeCss.where1_parent].join(' ')}>
                <div className={[homeCss.flex_c_m, homeCss.bg_img1, homeCss.size2, homeCss.where1, homeCss.overlay1, homeCss.where2, homeCss.respon2 ].join(' ')}>
                    <div className={[homeCss.wsize2, homeCss.flex_w, homeCss.flex_c_m, homeCss.js_tilt ].join(' ')}>
                        <div className={[homeCss.flex_col_c_m, homeCss.size6, homeCss.bor2, homeCss.m_l_10, homeCss.m_r_10, homeCss.m_t_15, homeCss.hoverable].join(' ')}>
                            <div className={[homeCss.material_icons, homeCss.text_white].join(' ')}></div>
                            <span className={homeCss.s2_txt4}>Home</span>
                        </div>

                        <div className={[homeCss.flex_col_c_m, homeCss.size6, homeCss.bor2, homeCss.m_l_10, homeCss.m_r_10, homeCss.m_t_15, homeCss.hoverable].join(' ')}>
                            <div className={[homeCss.material_icons, homeCss.text_white].join(' ')}></div>
                            <span className={homeCss.s2_txt4}>About us</span>
                        </div>
                    </div>
                    <div className={[homeCss.wsize2, homeCss.flex_w, homeCss.flex_c_m, homeCss.cd100, homeCss.js_tilt ].join(' ')}>
                        <div className={[homeCss.flex_col_c_m, homeCss.size6, homeCss.bor2, homeCss.m_l_10, homeCss.m_r_10, homeCss.m_t_15, homeCss.hoverable].join(' ')}>
                            <div className={[homeCss.material_icons, homeCss.text_white].join(' ')}></div>
                            <span className={homeCss.s2_txt4}>Kontakt</span>
                        </div>

                        <div className={[homeCss.flex_col_c_m, homeCss.size6, homeCss.bor2, homeCss.m_l_10, homeCss.m_r_10, homeCss.m_t_15, homeCss.hoverable].join(' ')}>
                            <div className={[homeCss.material_icons, homeCss.text_white].join(' ')}></div>
                            <span className={homeCss.s2_txt4}>Impressum</span>
                        </div>
                    </div>
                </div>
                <div className={[homeCss.size3, homeCss.flex_col_sb, homeCss.flex_w, homeCss.p_l_75, homeCss.p_r_75, homeCss.p_t_45, homeCss.p_b_45, homeCss.respon1].join(' ')}>
                    <div className={homeCss.wrap_pic1}>
                        <img src={logo} alt="ALPHAJUMP-LOGO"/>
                    </div>

                    <div className={[homeCss.p_t_50, homeCss.p_b_60].join(' ')}>
                        <p className={[homeCss.m1_txt1, homeCss.p_b_36].join(' ')}>

                            <span className={homeCss.m1_txt2}>Welcome to ALPHAJUMP Portal!</span>
                            <br/> Please log in
                        </p>
                        <p className={[homeCss.m1_txt1, homeCss.p_b_36].join(' ')}>

                            {/* <span className={homeCss.m1_txt1}>Enter your email address and we'll send you a link to reset your password.</span> */}

                        </p>
                        {authRedirect}
                        {errorMessage}
                        <form className={[homeCss.contact100_form, homeCss.validate_form].join(' ')} onSubmit={this.submitHandler}>
                          <div id="login-content" className={[homeCss.no_select,homeCss.bounceInLeft].join(' ')}>
                            <div id="login-form" className={homeCss.firstLoad}>
                              {form}
                              <div className={homeCss.w_full}>
                                  <button className={[homeCss.flex_c_m, homeCss.s2_txt2, homeCss.size4, homeCss.bg1, homeCss.bor1, homeCss.hov1, homeCss.trans_04].join(' ')}>
                                  {this.state.isSignup ? 'Signup' : 'Signin'}
                                </button>
                              </div>
                              <div className={[homeCss.w_full, homeCss.text_right, homeCss.m_t_10].join(' ')}>
                                <a className={[homeCss.c_pointer, homeCss.text_primary].join(' ')} onClick={this.switchAuthModeHandler}>
                                    {this.state.isSignup ? 'Signin' : 'Signup'}
                                </a>
                              </div>
                            </div>
                            {/* <div id="forgot-password-form" className={homeCss.bounceInLeft}>

                              <div className={[homeCss.wrap_input100, homeCss.m_b_20, homeCss.validate_input].join(' ')} data-validate="Email is required: ex@abc.xyz">
                                <input className={[homeCss.s2_txt1, homeCss.placeholder0, homeCss.input100].join(' ')} type="text" name="email" placeholder="E-Mail"/>
                                <span className={homeCss.focus_input100}></span>
                              </div>

                              <div className={homeCss.w_full}>
                                <button className={[homeCss.flex_c_m, homeCss.s2_txt2, homeCss.size4, homeCss.bg1, homeCss.bor1, homeCss.hov1, homeCss.trans_04].join(' ')}>
                                  Request New Password
                                </button>
                              </div>
                              <div className={[homeCss.w_full, homeCss.text_right].join(' ')}>
                                <a className={[homeCss.c_pointer, homeCss.text_primary].join(' ')}>
                                  Login
                                </a>
                              </div>
                            </div> */}
                          </div>

                        </form>


                        <p className="s2-txt3 p-t-18">
                        </p>
                    </div>

                    <div className={homeCss.flex_w}>
                        <a href="https://www.alphajump.de/" className={[homeCss.icon_badge_big,homeCss.hoverable].join(' ')} target="_blank">
                            <img src="/images/icons/logo-white.svg" className={homeCss.img_fluid} alt="" />
                        </a>
                        <a href="https://instagram.com/alphajump" className={[homeCss.icon_badge_big,homeCss.hoverable].join(' ')} target="_blank">
                            <img src="/images/icons/instagram.svg" className={homeCss.img_fluid} alt="" />
                        </a>
                        <a href="https://facebook.com/alphajump" className={[homeCss.icon_badge_big,homeCss.hoverable].join(' ')} target="_blank">
                            <img src="/images/icons/facebook.svg" className={homeCss.img_fluid} alt="" />
                        </a>
                        <a href="https://twitter.com/alphajump" className={[homeCss.icon_badge_big,homeCss.hoverable].join(' ')} target="_blank">
                            <img src="/images/icons/twitter.svg" className={homeCss.img_fluid} alt="" />
                        </a>
                        <a href="https://www.youtube.com/alphajump" className={[homeCss.icon_badge_big,homeCss.hoverable].join(' ')} target="_blank">
                            <img src="/images/icons/youtube.svg" className={homeCss.img_fluid} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        loading: state.authinfo.loading,
        error: state.authinfo.error,
        isAuthenticated: state.authinfo.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignup ) => dispatch( actions.tryAuth( email, password, isSignup ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
