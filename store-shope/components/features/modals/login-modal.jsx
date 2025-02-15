import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import ALink from '../alink';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(77,77,77,0.6)',
        zIndex: '9000'
    }
}

Modal.setAppElement( 'body' );

export default function LoginModal () {
    const [ open, setOpen ] = useState( false );
    let timer;

    useEffect( () => {
        return () => {
            if ( timer ) clearTimeout( timer );
        }
    } );

    function closeModal () {
        document.getElementById( "login-modal" ).classList.remove( "ReactModal__Content--after-open" );

        if ( document.querySelector( ".ReactModal__Overlay" ) ) {
            document.querySelector( ".ReactModal__Overlay" ).style.opacity = '0';
        }

        timer = setTimeout( () => {
            setOpen( false );
        }, 350 );
    }

    function openModal ( e ) {
        e.preventDefault();
        setOpen( true );
    }

    return (
        <li>
            <a href="#" onClick={ openModal }> <i className="icon-user"></i>Connexion</a>
            {
                open ?
                    <Modal
                        isOpen={ open }
                        style={ customStyles }
                        contentLabel="login Modal"
                        className="modal-dialog"
                        overlayClassName="d-flex align-items-center justify-content-center"
                        id="login-modal"
                        onRequestClose={ closeModal }
                        closeTimeoutMS={ 10 }
                    >
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" onClick={ closeModal }>
                                    <span aria-hidden="true"><i className="icon-close"></i></span>
                                </button>
                                <div className="form-box">
                                    <div className="form-tab">
                                        <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                                            <TabList className="nav nav-pills nav-fill">
                                                <Tab className="nav-item">
                                                    <span className="nav-link">S&apos;identifier</span>
                                                </Tab>

                                                <Tab className="nav-item">
                                                    <span className="nav-link">S&apos;inscrire</span>
                                                </Tab>
                                            </TabList>

                                            <div className="tab-content">
                                                <TabPanel style={ { paddingTop: "2rem" } }>
                                                    <div>
                                                        <form action="#">
                                                            <div className="form-group">
                                                                <label htmlFor="singin-email-2">Nom d&apos;utilisateur ou addresse mail *</label>
                                                                <input type="text" className="form-control" id="singin-email-2" name="singin-email" required />
                                                            </div>

                                                            <div className="form-group">
                                                                <label htmlFor="singin-password-2">Mot de passe *</label>
                                                                <input type="password" className="form-control" id="singin-password-2" name="singin-password" required />
                                                            </div>

                                                            <div className="form-footer">
                                                                <button type="submit" className="btn btn-outline-primary-2">
                                                                    <span>CONNEXION</span>
                                                                    <i className="icon-long-arrow-right"></i>
                                                                </button>

                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="signin-remember-2" />
                                                                    <label className="custom-control-label" htmlFor="signin-remember-2">Se souvenir de moi</label>
                                                                </div>

                                                                <ALink href="#" className="forgot-link">Mot de passe oublié?</ALink>
                                                            </div>
                                                        </form>
                                                        <div className="form-choice">
                                                            <p className="text-center">ou se connecter</p>
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    <ALink href="#" className="btn btn-login btn-g">
                                                                        <i className="icon-google"></i>
                                                                            avec Google
                                                                    </ALink>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <ALink href="#" className="btn btn-login btn-f">
                                                                        <i className="icon-facebook-f"></i>
                                                                            avec Facebook
                                                                    </ALink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <form action="#">
                                                        <div className="form-group">
                                                            <label htmlFor="register-email-2">Adresse Email  *</label>
                                                            <input type="email" className="form-control" id="register-email-2" name="register-email" required />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="register-password-2">Mot de passe *</label>
                                                            <input type="password" className="form-control" id="register-password-2" name="register-password" required />
                                                        </div>

                                                        <div className="form-footer">
                                                            <button type="submit" className="btn btn-outline-primary-2">
                                                                <span>S&apos;INSCRIRE</span>
                                                                <i className="icon-long-arrow-right"></i>
                                                            </button>

                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                                                                <label className="custom-control-label" htmlFor="register-policy-2">J&apos;accepte la politique de confidentialité  *</label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="form-choice">
                                                        <p className="text-center">ou se connecter</p>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <ALink href="#" className="btn btn-login btn-g">
                                                                    <i className="icon-google"></i>
                                                                    avec Google
                                                                </ALink>
                                                            </div>
                                                            <div className="col-md-6 mt-1 mt-md-0">
                                                                <ALink href="#" className="btn btn-login  btn-f">
                                                                    <i className="icon-facebook-f"></i>
                                                                    avec Facebook
                                                                </ALink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    : ''
            }
        </li>
    )
}