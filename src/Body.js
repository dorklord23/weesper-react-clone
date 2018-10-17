import React, { Component } from 'react';

class Body extends Component {
    render() {
        return (
            <div className="wspr-padding">
                <div className="wspr">
                    <div className="overlay"></div>
                    <section className="main-navigation  user-not-log-in ">
                        <header className="wspr-header wspr-header-blue test-usernotloggedin-page">
                            <div className="container header-container">
                                <nav className="navbar" role="navigation">
                                    <div className="navbar-header">
                                        <div className="swipe-area mobile-only"></div>
                                        <button
                                            type="button"
                                            className="navbar-toggle"
                                            data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                        >
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a className="navbar-brand wspr-brand" href="https://www.weesper.com">
                                            <img src="/img/assets/home_2/weesper-white.png" alt="" className="wspr-brand-logo loaded" data-was-processed="true" />
                                            <img src="/img/assets/home_2/weesper-blue.png" alt="" className="wspr-brand-logo-blue" />
                                        </a>
                                        <a
                                            href="javascript:void(0);"
                                            id="nav-quick-signup"
                                            className="wspr-button wspr-button-signup wspr-mobile"
                                        >
                                            Sign Up
                                        </a>
                                    </div>
                                    <div className="collapse navbar-collapse">
                                        <ul className="nav navbar-nav extra-logo mobile-only">
                                            <li>
                                                <a href="https://www.weesper.com">
                                                    <img src="https://www.weesper.com/img/assets/weesper-logo_footer2.png" alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="nav navbar-nav main-menu-items">
                                            <li className="mobile-only mobile-signin">
                                                <button
                                                    data-toggle="modal" data-target="#th-signin-component-modal"
                                                    className="mobile-signin"
                                                >
                                                    LOGIN
                                                </button>
                                            </li>
                                            <li className="active">
                                                <a
                                                    id="home-about-weesper"
                                                    href="https://www.weesper.com#about-weesper"
                                                >
                                                    About Weesper
                                                    </a>
                                            </li>
                                            <li>
                                                <a href="https://www.weesper.com/referral-opportunities">
                                                    Job List
                                                    </a>
                                            </li>
                                            <li className="with-line">
                                                <a href="https://www.weesper.com/how-to-recruit-through-referral">
                                                    <i className="fa fa-external-link-square" aria-hidden="true"></i> For Employers
                                                    </a>
                                            </li>
                                        </ul>
                                        <ul className="nav navbar-nav mobile-only extra-nav">
                                            <li className="">
                                                <a href="https://www.weesper.com/FAQ">FAQ</a>
                                            </li>
                                            <li className="mobile-only">
                                                <a href="https://www.weesper.com/charter-of-conduct">Charter Of Conduct</a>
                                            </li>
                                            <li className="mobile-only">
                                                <a href="https://www.weesper.com/privacy-policy">Privacy Policy</a>
                                            </li>
                                        </ul>
                                        <ul className="nav navbar-nav navbar mobile-only extra-nav contact-info">
                                            <li className="li">
                                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                                                <a href="https://linkedin.com/company/weesper"
                                                    target="_blank">Join us on Linkedin</a>
                                            </li>
                                            <li>
                                                <a className="extra-link" href="mailto:hello@weesper.com?Subject=Hello%20Weesper" target="_top">hello@weesper.com</a>
                                            </li>
                                        </ul>
                                        <div className="pull-right">
                                            <ul className="nav navbar-nav">
                                                <li className="wspr-login">
                                                    <a id="nav-sign-in-btn" href="" data-toggle="modal" data-target="#th-signin-component-modal">LOGIN</a>
                                                </li>
                                                <li>
                                                    <a
                                                        id="nav-quick-signup"
                                                        className="wspr-button wspr-button-signup"
                                                        data-toggle="modal"
                                                        data-target="#confirm-modal2-1"
                                                    >
                                                        GET STARTED
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </header>
                        <section id="disabled-click-login-modal">
                            <div
                                className="modal fade w-modal w-modal-white wspr-popup-opportunities"
                                id="signup-for-more-modal"
                                tabIndex="-1"
                                role="dialog"
                                aria-labelledby="myModalLabel"
                            >
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                            <div className="box-header">
                                                <img src="/img/assets/home_2/w-transparent-small-blue.png" /> <span>Ready to join us?</span>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className="modal-body-gray">
                                                <label className="control radio">
                                                    <input id="referrer-type1" name="referrer-type" type="radio" value="professional" />
                                                    <span className="control-indicator"></span>
                                                    Recruitment is my income
    										    </label>
                                                <label className="control radio">
                                                    <input id="referrer-type2" name="referrer-type" type="radio" value="connected" />
                                                    <span className="control-indicator"></span>
                                                    I am well-connected
										        </label>
                                            </div>
                                            <div className="center mt-20">
                                                <h5 className="text-blue">
                                                    SIGN UP WITH:
										        </h5>
                                            </div>
                                            <div className="center">
                                                <button className="btn btn-submit-transparent signin-linkedin modal-linkedin-chat" disabled=""><img src="/img/assets/th/linkedin.png" /></button>
                                            </div>
                                            <div className="center">
                                                <div className="or">
                                                    OR
										        </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer mt-10 pb-0">
                                            <div className="form-group mb-b">
                                                <button className="btn btn-submit-blue signup-email" type="submit" disabled=""><span>SIGN UP WITH EMAIL</span><em></em></button>
                                            </div>
                                            <div className="text-right pr-10 mb-20 pt-0">
                                                <span>If you already have an account, </span>
                                                <a href="#" data-toggle="modal" data-target="#th-signin-component-modal">
                                                    Login here
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="th-signin-modal">
                            <div className="modal fade w-modal w-modal-blue" id="th-signin-component-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <h4 className="modal-title" id="myModalLabel">Login to your account</h4>
                                        </div>
                                        <form id="signin" action="https://www.weesper.com/api/login" method="post">
                                            <div className="modal-body">
                                                <div className="form-group">
                                                    <button className="btn btn-primary btn-blue2" id="btn-linkedin" type="button">Log in with LinkedIn</button>
                                                </div>
                                                <div className="signin-divider"></div>
                                                <div className="form-group">
                                                    <input type="email" placeholder="Weesper registered e-mail" className="form-control" name="email" />
                                                </div>
                                                <div className="form-group mb-0">
                                                    <input type="password" placeholder="Password" className="form-control" name="password" />
                                                </div>
                                                <div className="form-group relative">
                                                    <small className="text-center"><a href="#" className="" data-toggle="modal" data-dismiss="modal" data-target="#forgotPassModal">Forgot
													Password?</a></small>
                                                </div>
                                            </div>
                                            <div className="modal-footer signin-form">
                                                <div className="form-group">
                                                    <button id="btn-signin" className="btn btn-submit-blue" type="submit"><span>Submit</span><em></em></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="job-confirm-request">
                            <div className="modal fade w-modal w-modal-blue w-modal-jd" id="confirm-modal2-1" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <h4 style={{ fontSize: '17px' }} className="modal-title" id="myModalLabel">Welcome to Weesper!</h4>
                                        </div>
                                        <form id="" method="post">
                                            <div className="modal-body pb-0 oh mw-full">
                                                <div className="form-group row">
                                                    <div className="col-sm-6 center jd-marked modal-signin" style={{ zIndex: 1 }}>
                                                        <a href="#" className="block"><img src="/img/assets/jd-linkedtext.png" alt="" className="mw-125 hidden-xs" /></a>
                                                        <strong>Sign Up with LinkedIn</strong>
                                                        <p>Sign up with LinkedIn for faster login and pre-filled information</p>
                                                        <div className="jd-marked-checked text-left">
                                                            <label className="control checkbox">
                                                                <input type="checkbox" />
                                                                <span className="control-indicator"></span>
                                                                <span className="control-text">By signing up, you agree to our <a href="https://www.weesper.com/terms-of-use-for-candidate"
                                                                    target="_blank">Terms of Use</a> and <a href="https://www.weesper.com/privacy-policy" target="_blank">Privacy
																Policy </a></span>
                                                            </label>
                                                        </div>
                                                        <button className="btn btn-primary btn-blue2" id="btn-linkedin" type="button">Sign Up With LinkedIn</button>
                                                    </div>
                                                    <div className="col-sm-6 modal-signin-right">
                                                        <div className="col-normal mb-10">
                                                            <label htmlFor="">Full Name</label>
                                                            <input type="text" className="form-control" id="signup-fullname" placeholder="" tabIndex="1" />
                                                        </div>
                                                        <div className="col-normal mb-10">
                                                            <label htmlFor="">Email Address</label>
                                                            <input type="email" className="form-control" id="signup-email" placeholder="" tabIndex="2" />

                                                        </div>
                                                        <div className="col-normal mb-10">
                                                            <label htmlFor="">Choose A Password</label>
                                                            <input type="password" className="form-control" id="signup-password" placeholder="" tabIndex="3" />
                                                        </div>
                                                        <div className="col-normal jd-marked">
                                                            <div className="jd-marked-checked text-left">
                                                                <label className="control checkbox">
                                                                    <input type="checkbox" id="signup-agree" tabIndex="5" />
                                                                    <span className="control-indicator"></span>
                                                                    <span className="control-text">By signing up, you agree to our <a href="https://www.weesper.com/terms-of-use-for-candidate" target="_blank">Terms of Use</a> and <a href="https://www.weesper.com/privacy-policy" target="_blank">Privacy
																	Policy </a></span>
                                                                </label>

                                                            </div>
                                                            <button id="btn-signin" className="btn btn-submit-blue btn-next mw-full wfull" type="submit"><span>Continue
															&gt;</span></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer modal-footer-extra mt-30">

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade w-modal w-modal-blue w-modal-jd" id="confirm-modal2-2" tabIndex="-1" role="dialog"
                                aria-labelledby="myModalLabel">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <h4 className="modal-title" id="myModalLabel">(1/3) Just few questions to proceed your application...</h4>
                                        </div>

                                        <div className="modal-body pb-0 oh mw-full">

                                            <div className="form-group mt-10 mb-10">
                                                <h5 className="blue-text center">Would you like to upload / link to your CV?: <small className="yellow-text">*
												Required for Referral</small></h5>
                                                <form action="" style={{ cursor: 'pointer' }} className="dz-clickable" id="uploadCv">
                                                    <input type="hidden" name="_token" value="ZtekjoPnm2vz3ryMB3zekncqauqK7Ze9vyJxAHBU" />
                                                    <div className="dz-message" data-dz-message=""><span className="blue-text">Choose / Link File</span> or Drag &amp;
												Drop Here</div>
                                                </form>
                                            </div>

                                        </div>

                                        <div className="hide modal-body pb-0 oh mw-full">

                                            <div className="form-group hide">
                                                <h5 className="blue-text center modal-uploaded"><img src="/img/assets/jd-check-blue.png" alt="" />CV Uploaded</h5>
                                            </div>
                                            <div className="form-group hide">
                                                <div className="fixed-content f12 fixed-content-file">
                                                    <i className="fa fa-file-pdf-o fa-file-word-o" aria-hidden="true"></i>
                                                    <span className="filename" title="File Name Is Written here.pdf"> </span>
                                                    <a href="#" className="fixed-content-link">Remove x</a>
                                                    <button type="button" className="close"><span aria-hidden="true">×</span></button>
                                                </div>

                                            </div>


                                            <div className="form-group mt-30 mb-30">
                                                <h5 className="blue-text center">Add Social Profile / Portfolio / Personal Websites: <small className="yellow-text">*
												Required (If in place of CV)</small></h5>

                                            </div>

                                            <div className="mb-20 oh">
                                                <div className="col-sm-6">
                                                    <select className="form-control" name="candi-portfolio" value="">
                                                        <option value="" disabled="">Select type of link?</option>
                                                        <option value="Linkedin">
                                                            Linkedin
												</option>
                                                        <option value="Github">
                                                            Github
												</option>
                                                        <option value="Behance">
                                                            Behance
												</option>
                                                        <option value="Personal Website">
                                                            Personal Website
												</option>
                                                        <option value="Professional Website">
                                                            Professional Website
												</option>
                                                    </select>

                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control" placeholder="Paste your Linkedin, Behance, Github, etc..." />



                                                </div>
                                            </div>




                                        </div>

                                        <div className="modal-footer pt-0">
                                            <div className="form-group">
                                                <button id="btn-signin" className="btn btn-submit-blue btn-next" type="button"><span>Continue &gt;</span></button>
                                                <a href="#" className="btn-prev"> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade w-modal w-modal-blue w-modal-jd" id="confirm-modal2-6" tabIndex="-1" role="dialog"
                                aria-labelledby="myModalLabel">
                                <div className="modal-dialog ui-days-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <h4 className="modal-title" id="myModalLabel">(2/3) Some information to setup your future interview ;)</h4>
                                        </div>
                                        <form id="" action="/" method="post">
                                            <div className="modal-body pb-0 oh ui-days-modal">

                                                <div className="oh">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label htmlFor="">What time of day would you be available for interviews?</label>

                                                            <div className="ui-days-container">
                                                                <div className="ui-days">
                                                                    <div className="ui-days-selectall label-normal label-blue">
                                                                        <label className="control checkbox">
                                                                            <input type="checkbox" />
                                                                            <span className="control-indicator"></span>
                                                                        </label>
                                                                        <span className="control-text"><em>Mon </em><span>Mondays</span></span>
                                                                    </div>
                                                                    <div className="ui-days-time ui-days-first">
                                                                        <div className="label-normal" data-text="AM">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="Lunch">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="PM">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="Eve">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui-days">
                                                                    <div className="ui-days-selectall label-normal label-blue">
                                                                        <label className="control checkbox">
                                                                            <input type="checkbox" />
                                                                            <span className="control-indicator"></span>
                                                                        </label>
                                                                        <span className="control-text"><em>Tue </em><span>Tuesdays</span></span>
                                                                    </div>
                                                                    <div className="ui-days-time ">
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui-days">
                                                                    <div className="ui-days-selectall label-normal label-blue">
                                                                        <label className="control checkbox">
                                                                            <input type="checkbox" />
                                                                            <span className="control-indicator"></span>
                                                                        </label>
                                                                        <span className="control-text"><em>Wed </em><span>Wednesdays</span></span>
                                                                    </div>
                                                                    <div className="ui-days-time ">
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui-days">
                                                                    <div className="ui-days-selectall label-normal label-blue">
                                                                        <label className="control checkbox">
                                                                            <input type="checkbox" />
                                                                            <span className="control-indicator"></span>
                                                                        </label>
                                                                        <span className="control-text"><em>Thur </em><span>Thursdays</span></span>
                                                                    </div>
                                                                    <div className="ui-days-time ">
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui-days">
                                                                    <div className="ui-days-selectall label-normal label-blue">
                                                                        <label className="control checkbox">
                                                                            <input type="checkbox" />
                                                                            <span className="control-indicator"></span>
                                                                        </label>
                                                                        <span className="control-text"><em>Fri </em><span>Fridays</span></span>
                                                                    </div>
                                                                    <div className="ui-days-time ">
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ui-days">
                                                                    <div className="ui-days-selectall label-normal label-gray">
                                                                        <label className="control checkbox">
                                                                            <input type="checkbox" />
                                                                            <span className="control-indicator"></span>
                                                                        </label>
                                                                        <span className="control-text"><em>Sat </em><span>Saturdays</span></span>
                                                                    </div>
                                                                    <div className="ui-days-time ">
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="label-normal" data-text="">
                                                                            <label className="control checkbox">
                                                                                <input type="checkbox" />
                                                                                <span className="control-indicator"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </div>

                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label htmlFor="">Best number to contact you on:</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xs-12 col-sm-6 v-center">
                                                            <div className="col-xs-4 col-sm-4 col-md-5">
                                                                <input type="number" className="form-control" id="" placeholder="852" value="852" />
                                                            </div>
                                                            <div className="col-xs-8 col-sm-8 col-md-7">
                                                                <input type="number" className="form-control" id="" placeholder="25713893" />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-6">
                                                            <div className="fixed-content fixed-content-file fixed-content-blue"><img src="/img/assets/jd-qmark.png" alt="" /><em>We
															do not share your personal information with anyone other than clients when necessary.</em></div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-12 v-center">


                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="modal-footer pt-0">
                                                <div className="form-group">
                                                    <button id="btn-signin" className="btn btn-submit-blue btn-next" type="button"><span>Next &gt;</span></button>
                                                    <a href="#" className="btn-prev">&lt; Go back</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade w-modal w-modal-blue w-modal-jd" id="confirm-modal2-6-1" tabIndex="-1" role="dialog"
                                aria-labelledby="myModalLabel">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <h4 className="modal-title" id="myModalLabel">(3/3) Almost done. Everyone's favourite questions...</h4>
                                        </div>
                                        <form id="" action="/" method="post">
                                            <div className="modal-body pb-0 oh mw-full">

                                                <div className="oh">
                                                    <div className="col-sm-9">
                                                        <div className="form-group">
                                                            <label htmlFor="">When is your soonest availability if you are offered this job?</label>
                                                            <select className="form-control" name="candi-portfolio" value="">
                                                                <option value="" disabled="">Your soonest availability</option>
                                                                <option value="Immediately">
                                                                    Immediately
														</option>
                                                                <option value="Within 1 Month">
                                                                    Within 1 Month
														</option>
                                                                <option value="Within 2 Months">
                                                                    Within 2 Months
														</option>
                                                                <option value="Within 3 Months">
                                                                    Within 3 Months
														</option>
                                                                <option value="Negotiable">
                                                                    Negotiable
														</option>
                                                            </select>

                                                        </div>

                                                    </div>
                                                    <div className="col-sm-9">
                                                        <div className="form-group">
                                                            <label htmlFor="">What would be your expected compensation for this role?</label>
                                                            <select className="form-control" name="candi-portfolio" value="">
                                                                <option value="" disabled="">Your expected salary</option>
                                                                <option value="1">
                                                                    $10,000 - $20,000 HKD/month
														</option>
                                                                <option value="2">
                                                                    $20,000 - $30,000 HKD/month
														</option>
                                                                <option value="3">
                                                                    $30,000 - $40,000 HKD/month
														</option>
                                                                <option value="4">
                                                                    $40,000 - $50,000 HKD/month
														</option>
                                                                <option value="5">
                                                                    $50,000 - $60,000 HKD/month
														</option>
                                                                <option value="6">
                                                                    $60,000 - $70,000 HKD/month
														</option>
                                                                <option value="7">
                                                                    $70,000 - $80,000 HKD/month
														</option>
                                                                <option value="8">
                                                                    $80,000 - $90,000 HKD/month
														</option>
                                                                <option value="9">
                                                                    $90,000 - $100,000 HKD/month
														</option>
                                                                <option value="10">
                                                                    more than $100,000 HKD/month
														</option>
                                                            </select>

                                                        </div>

                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="fixed-content fixed-content-file fixed-content-blue"><img src="/img/assets/jd-qmark.png" alt="" /><em>Select
														a range. Your are not bound by this yet and it wouldn't be revealed unless there's a match.</em></div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="modal-footer pt-0">
                                                <div className="form-group">
                                                    <button id="btn-signin" className="btn btn-submit-blue btn-next" type="button"><span>Apply Now &amp; Submit &gt;</span></button>
                                                    <a href="#" className="btn-prev">&lt; Go back</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade w-modal w-modal-blue w-modal-jd" id="confirm-modal2-7" tabIndex="-1" role="dialog"
                                aria-labelledby="myModalLabel">
                                <div className="modal-dialog modal-dialog-xsmall" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header modal-header-white">
                                            <img src="/img/assets/jd-check.png" alt="" className="modal-header-icon" />
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <h4 className="modal-title pt-10 pl-50" id="myModalLabel">Your application has been submitted</h4>
                                            <p className="mt-20">We sent your confirmation to <a className="mail" href="mailto:"></a> please reply to the email to
										send us your CV.</p>


                                        </div>

                                    </div>
                                </div>
                            </div>



                            <div className="modal fade w-modal w-modal-blue" id="signup-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                                data-backdrop="static" data-keyboard="false">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <h4 className="modal-title" id="myModalLabel">Login to your account</h4>
                                        </div>
                                        <form id="signin" action="https://www.weesper.com/api/login" method="post">
                                            <div className="modal-body">
                                                <div className="form-group">
                                                    <button className="btn btn-primary btn-blue2" id="btn-linkedin" type="button">Log in with LinkedIn</button>
                                                </div>
                                                <div className="signin-divider"></div>
                                                <div className="form-group">
                                                    <input type="email" placeholder="Weesper registered e-mail" className="form-control" name="email" />
                                                </div>
                                                <div className="form-group mb-0">
                                                    <input type="password" placeholder="Password" className="form-control" name="password" />
                                                </div>
                                                <div className="form-group relative">
                                                    <small><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#forgotPassModal">Forgot Password?</a></small>
                                                </div>
                                            </div>
                                            <div className="modal-footer signin-form">
                                                <div className="form-group">
                                                    <button id="btn-signin" className="btn btn-submit-blue" type="button"><span>Submit</span><em></em></button>
                                                </div>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                            </div>


                        </section>

                    </section>

                    <section className="main-section">
                        <div className="header-blue">
                            <div className="container background-image" style={{ backgroundImage: 'url(/img/assets/buildings.png)' }}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1 className="header-blue-text">Referral Opportunities</h1>
                                        <p className="header-blue-desc">Quality-checked roles for people you know from Analyst to Zoologist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mt-40 mb-40">
                                    <div className="col-sm-4 col-md-3 mw-320-at-992">
                                        <div className="sidebar-left sidebar-left_top">
                                            <div className="box no-border sidebar-accordion">
                                                <div className="box-col mb-20">Filter by Sector</div>
                                                <div className="box-row"> <label className="control checkbox"> <input type="checkbox" name="all[]" className="all" value="IT / Tech" />
                                                    <span className="control-indicator"></span> <i className="fa fa-code" aria-hidden="true"></i> IT / Tech </label> <a
                                                        href="javascript:void(0)" className="box-title"></a>
                                                    <div className="box-content">
                                                        <ul className="cUL">
                                                            <li> <label className="control checkbox"> <input name="fields[]" type="checkbox" value="1" /> <span className="control-indicator"></span>
                                                                Technology </label> <small className="counts">18</small> </li>
                                                            <li> <label className="control checkbox"> <input name="fields[]" type="checkbox" value="2" /> <span className="control-indicator"></span>
                                                                Data &amp; analytics </label> <small className="counts">2</small> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="box-row"> <label className="control checkbox"> <input type="checkbox" name="all[]" className="all" value="Digital &amp; Media" />
                                                    <span className="control-indicator"></span> <i className="fa fa-magic" aria-hidden="true"></i> Digital &amp; Media
											</label> <a href="javascript:void(0)" className="box-title"></a>
                                                    <div className="box-content">
                                                        <ul className="cUL">
                                                            <li> <label className="control checkbox"> <input name="fields[]" type="checkbox" value="3" /> <span className="control-indicator"></span>
                                                                Digital marketing </label> <small className="counts">3</small> </li>
                                                            <li> <label className="control checkbox"> <input name="fields[]" type="checkbox" value="4" /> <span className="control-indicator"></span>
                                                                Creative design </label> <small className="counts">1</small> </li>
                                                            <li> <label className="control checkbox"> <input name="fields[]" type="checkbox" value="5" /> <span className="control-indicator"></span>
                                                                Content </label> <small className="counts">0</small> </li>
                                                            <li> <label className="control checkbox"> <input name="fields[]" type="checkbox" value="6" /> <span className="control-indicator"></span>
                                                                Public relations </label> <small className="counts">2</small> </li>
                                                            <li> <label className="control checkbox"> <input name="fields[]" type="checkbox" value="7" /> <span className="control-indicator"></span>
                                                                Strategy and planning </label> <small className="counts">2</small> </li>
                                                            <li> <label className="control checkbox"> <input name="fields[]" type="checkbox" value="13" /> <span className="control-indicator"></span>
                                                                Marketing </label> <small className="counts">1</small> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="box-row"> <label className="control checkbox"> <input type="checkbox" name="all[]" className="all" value="Functional Roles" />
                                                    <span className="control-indicator"></span> <i className="fa fa-cogs" aria-hidden="true"></i> Functional Roles
											</label> <a href="javascript:void(0)" className="box-title"></a>
                                                    <div className="box-content">
                                                        <ul className="cUL">
                                                            <li> <label className="control checkbox"> <input name="fields[]" type="checkbox" value="8" /> <span className="control-indicator"></span>
                                                                Business development </label> <small className="counts">14</small> </li>
                                                            <li> <label className="control checkbox"> <input name="fields[]" type="checkbox" value="9" /> <span className="control-indicator"></span>
                                                                Human resources </label> <small className="counts">2</small> </li>
                                                            <li> <label className="control checkbox"> <input name="fields[]" type="checkbox" value="10" /> <span className="control-indicator"></span>
                                                                Finances </label> <small className="counts">0</small> </li>
                                                            <li> <label className="control checkbox"> <input name="fields[]" type="checkbox" value="11" /> <span className="control-indicator"></span>
                                                                Accounting </label> <small className="counts">1</small> </li>
                                                            <li> <label className="control checkbox"> <input name="fields[]" type="checkbox" value="12" /> <span className="control-indicator"></span>
                                                                Client services </label> <small className="counts">3</small> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box hidden-xs">
                                                <div className="box-row center">
                                                    <p>Total Rewards on Weesper:</p>
                                                    <div className="panel-transparent">HK$ 716,690</div> <small className="italic">Sum of all current opportunities on
												Weesper</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-left sidebar-left_top mt-20 mb-30">
                                            <div className="box box-blue-top">
                                                <div className="box-row center">
                                                    <div className="box-header"> <img src="/img/assets/home_2/w-transparent-small-blue.png" className="loaded"
                                                        data-was-processed="true" /> <span>Weesper Out!</span> </div>
                                                </div>
                                                <div className="p-20 pt-0 box-list">
                                                    <ul className="cUL">
                                                        <li><strong>1</strong><span>Click on a job ad to see more</span></li>
                                                        <li><strong>2</strong><span>Hit <em className="blue-color">Refer &amp; Earn</em> to share it</span></li>
                                                        <li><strong>3</strong><span>Wait for your connections to apply or apply yourself</span></li>
                                                        <li><strong>4</strong><span>Complete the referral form</span></li>
                                                        <li><strong>5</strong><span>Fingers crossed!</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8 col-md-9">
                                        <div className="sidebar-content sidebar-content_one"> <a className="nocolor" target="_blank" href="https://www.weesper.com/jobs/business-development-manager-executive/wsp-DjWLrZlL67">
                                            <div className="box mt-20 relative">
                                                <div className="sidebar-content_left">
                                                    <div className="one-image"> <img alt="" src="https://www.weesper.com/storage/company/445/logo/6/d/c/6dc3533522aafc7ef7b572ca59b73d1c1fedbfbc.png" />
                                                    </div>
                                                </div>
                                                <div className="sidebar-content_right">
                                                    <h4 className="sidebar-content_title brown-text">Rabbit Studio Digital Agency <small><em>is looking for a</em></small></h4>
                                                    <strong className="sidebar-content_subtitle"><span>Business Development Manager / Executive</span></strong>
                                                    <ul className="cUL list-inline ui-referral">
                                                        <li><em><i className="fa fa-tag" aria-hidden="true"></i><span>Marketing and Advertising, Business development</span></em></li>
                                                        <li><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Expires <strong> in 29 days</strong></li>
                                                    </ul>
                                                    <div className="tag-currency"><span className="trophy-reward trophy-reward-one-line">Referral Reward</span><span
                                                        className="trophy-reward trophy-reward-multi-line">Referral</span><span className="trophy-reward trophy-reward-multi-line">Reward</span><i
                                                            className="hide"></i>HK$ 8,250</div>
                                                </div>
                                            </div>
                                        </a><a className="nocolor" target="_blank" href="https://www.weesper.com/jobs/web-developer/wsp-OpaE4OoLZD">
                                                <div className="box mt-20 relative">
                                                    <div className="sidebar-content_left">
                                                        <div className="one-image"> <img alt="" src="https://www.weesper.com/storage/company/445/logo/6/d/c/6dc3533522aafc7ef7b572ca59b73d1c1fedbfbc.png" />
                                                        </div>
                                                    </div>
                                                    <div className="sidebar-content_right">
                                                        <h4 className="sidebar-content_title brown-text">Rabbit Studio Digital Agency <small><em>is looking for a</em></small></h4>
                                                        <strong className="sidebar-content_subtitle"><span>Web Developer</span></strong>
                                                        <ul className="cUL list-inline ui-referral">
                                                            <li><em><i className="fa fa-tag" aria-hidden="true"></i><span>Marketing and Advertising, Technology</span></em></li>
                                                            <li><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Expires <strong> in 28 days</strong></li>
                                                        </ul>
                                                        <div className="tag-currency"><span className="trophy-reward trophy-reward-one-line">Referral Reward</span><span
                                                            className="trophy-reward trophy-reward-multi-line">Referral</span><span className="trophy-reward trophy-reward-multi-line">Reward</span><i
                                                                className="hide"></i>HK$ 5,940</div>
                                                    </div>
                                                </div>
                                            </a><a className="nocolor" target="_blank" href="https://www.weesper.com/jobs/marketing-vp-public-relations/wsp-bv5LlpJLRX">
                                                <div className="box mt-20 relative">
                                                    <div className="sidebar-content_left">
                                                        <div className="one-image"> <img alt="" src="https://www.weesper.com/storage/company/447/logo/1/e/d/1ede22c124a358d094914d17e5847d4952d5f3c0.png" />
                                                        </div>
                                                    </div>
                                                    <div className="sidebar-content_right">
                                                        <h4 className="sidebar-content_title brown-text">egogo hub <small><em>is looking for a</em></small></h4>
                                                        <strong className="sidebar-content_subtitle"><span>Marketing VP / Public Relations</span></strong>
                                                        <ul className="cUL list-inline ui-referral">
                                                            <li><em><i className="fa fa-tag" aria-hidden="true"></i><span>Internet, Marketing</span></em></li>
                                                            <li><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Expires <strong> in 26 days</strong></li>
                                                        </ul>
                                                        <div className="tag-currency"><span className="trophy-reward trophy-reward-one-line">Referral Reward</span><span
                                                            className="trophy-reward trophy-reward-multi-line">Referral</span><span className="trophy-reward trophy-reward-multi-line">Reward</span><i
                                                                className="hide"></i>HK$ 36,300</div>
                                                    </div>
                                                </div>
                                            </a><a className="nocolor" target="_blank" href="https://www.weesper.com/jobs/business-analyst/wsp-magLB5W2Nx">
                                                <div className="box mt-20 relative">
                                                    <div className="sidebar-content_left">
                                                        <div className="one-image"> <img alt="" src="https://www.weesper.com/storage/company/395/logo/7/d/7/7d7c9141cd452c8ed7a113dc9bed9991e2d441e7.png" />
                                                        </div>
                                                    </div>
                                                    <div className="sidebar-content_right">
                                                        <h4 className="sidebar-content_title brown-text">A Matter of Design <small><em>is looking for a</em></small></h4>
                                                        <strong className="sidebar-content_subtitle"><span>Business Analyst</span></strong>
                                                        <ul className="cUL list-inline ui-referral">
                                                            <li><em><i className="fa fa-tag" aria-hidden="true"></i><span>Furniture, Data &amp; analytics</span></em></li>
                                                            <li><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Expires <strong> in 21 days</strong></li>
                                                        </ul>
                                                        <div className="tag-currency"><span className="trophy-reward trophy-reward-one-line">Referral Reward</span><span
                                                            className="trophy-reward trophy-reward-multi-line">Referral</span><span className="trophy-reward trophy-reward-multi-line">Reward</span><i
                                                                className="hide"></i>HK$ 10,800</div>
                                                    </div>
                                                </div>
                                            </a><a className="nocolor" target="_blank" href="https://www.weesper.com/jobs/technical-support-technician/wsp-p53285JLrv">
                                                <div className="box mt-20 relative">
                                                    <div className="sidebar-content_left">
                                                        <div className="one-image"> <img alt="" src="https://www.weesper.com/storage/company/395/logo/7/d/7/7d7c9141cd452c8ed7a113dc9bed9991e2d441e7.png" />
                                                        </div>
                                                    </div>
                                                    <div className="sidebar-content_right">
                                                        <h4 className="sidebar-content_title brown-text">A Matter of Design <small><em>is looking for a</em></small></h4>
                                                        <strong className="sidebar-content_subtitle"><span>Technical Support Technician</span></strong>
                                                        <ul className="cUL list-inline ui-referral">
                                                            <li><em><i className="fa fa-tag" aria-hidden="true"></i><span>Furniture, Technology</span></em></li>
                                                            <li><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Expires <strong> in 21 days</strong></li>
                                                        </ul>
                                                        <div className="tag-currency"><span className="trophy-reward trophy-reward-one-line">Referral Reward</span><span
                                                            className="trophy-reward trophy-reward-multi-line">Referral</span><span className="trophy-reward trophy-reward-multi-line">Reward</span><i
                                                                className="hide"></i>HK$ 6,480</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="sidebar-content sidebar-content-loader-base">
                                                <nav className="text-center blue mt-20" aria-label="Page navigation"> </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Body;
