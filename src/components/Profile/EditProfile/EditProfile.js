import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../store/actions/index';
import grad from '../../../assets/styles/BsGrad.css';
import box from '../../../assets/styles/BsBox.css';
class EditProfile extends Component {
    state = {
        controls: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            designation: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Designation'
                },
                value: '',
                validation: {
                    required: false,
                },
                valid: false,
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

    submitHandler = ( event ) => {
        event.preventDefault();
        this.props.onSaveProfile( this.state.controls.firstName.value, this.state.controls.lastName.value, this.state.controls.designation.value, this.props.userId, this.props.token );
        console.log( this.state.controls.firstName.value, this.state.controls.lastName.value, this.state.controls.designation.value, this.props.token );
        this.renderRedirect();
    }
    renderRedirect = () => {
      this.props.history.push("/profile");
    }
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
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
        // if (this.props.isAuthenticated){
        //   authRedirect = <Redirect to="/profile" />
        // }
        return (
            <div className={grad.container}>
              <div className={grad.row}>
                <div className={grad.col_12}>
                  <div className={box.box}>
                    <div className={box.box_middle}>
                      {authRedirect}
                      {errorMessage}
                      <form onSubmit={this.submitHandler}>
                          {form}
                          <Button btnType="Success">Save Profile</Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      token: state.authinfo.token,
      userId: state.authinfo.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveProfile: ( firstName, lastName, designation,userId,token ) => dispatch( actions.editprofile( firstName, lastName, designation,userId,token ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( EditProfile );
