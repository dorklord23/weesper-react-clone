import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="site-footer" className="">
                <div className="footer-above">
                    <div className="container">
                        <div className="footer-col col-md-4 col-sm-4">
                            <h3 className="company-name"> <a href="https://www.weesper.com"> <img alt="Weesper" src="https://www.weesper.com/img/assets/weesper-logo_footer2.png"
                                className="loaded" data-was-processed="true" /> </a> </h3>
                            <ul className="weesper-links">
                                <li className=""> <a href="https://www.weesper.com/how-to-recruit-through-referral" className="">Weesper for Companies</a>
                                </li>
                                <li className=""> <a href="https://www.weesper.com" className="">Weesper for Referrers</a> </li>
                                <li className=""> <a href="https://www.weesper.com/referral-opportunities" className="">Job List</a> </li>
                                <li className=""> <a href="https://www.weesper.com/weesperer/signin" className="">Sign In</a> </li>
                                <li className=""> <a href="https://www.weesper.com/contact-form" className="">Contact Weesper</a> </li>
                                <li className=""> <a href="https://www.weesper.com/FAQ" className="">F A Q</a> </li>
                                <li className=""> <a href="https://www.weesper.com/charter-of-conduct" className="">Charter of Conduct</a> </li>
                            </ul>
                        </div>
                        <div className="hidden-xs footer-col col-lg-4 col-md-4 col-sm-4">
                            <h3 className="join">Join us on</h3>
                            <p><a href="https://linkedin.com/company/weesper" target="_blank"><img src="https://www.weesper.com/img/assets/Copie de icon_LinkedIn-transparent.png"
                                className="loaded" data-was-processed="true" /></a></p>
                            <h3>Connect with us</h3>
                            <ul className="connect-with-us list-inline">
                                <li className="social-circle"> <a href="https://www.facebook.com/WeesperHK/" target="_blank" className="media-object btn-social btn-outline"><i
                                    className="fa fa-fw fa-facebook fa-2x"></i></a> </li>
                                <li className="social-circle"> <a href="https://twitter.com/weesperhk" target="_blank" className="media-object btn-social btn-outline"><i
                                    className="fa fa-fw fa-twitter fa-2x"></i></a> </li>
                                <li className="mailto"> <a href="mailto:hello@weesper.com?Subject=Hello%20Weesper" target="_top">hello@weesper.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="contact hidden-xs footer-col col-lg-4 col-md-4 col-sm-4">
                            <h3>Stay up to date</h3>
                            <p>Sign up to our newsletter:</p>
                            <form id="contact" className="form subscribe">
                                <div className="form-group"> <input className="form-control" type="email" name="email" placeholder="Your best email address" />
                                </div> <button type="submit" className="btn btn-primary col-lg-12 col-md-12 col-sm-12">Let me know</button>
                                <div className="contact-error"></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="clearfix footer-below">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <hr />
                                <ul className="copyright">
                                    <li className="pl-0"> © 2018 Weesper </li>
                                    <li>|</li>
                                    <li><a href="https://www.weesper.com/privacy-policy" target="_blank">Privacy Policy</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
