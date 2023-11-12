import React from 'react';
import Link from 'next/link'


const Footer: React.FC = () => {
    return(
        <footer className="footer p-10 bg-base-200 text-base-content">
        {/* <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </nav>  */}
        <nav>
          <header className="footer-title">Company</header> 
          <Link href="/about" className="link link-hover">About us</Link> 
          <Link href="/contact" className="link link-hover">Contact</Link> 
          {/* <a className="link link-hover">Jobs</a>  */}
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          {/* <Link className="link link-hover">Terms of use</Link>  */}
          <Link href="/legal/privacy-policy" className="link link-hover">Privacy policy</Link> 
          <Link href="/legal/cookie-policy" className="link link-hover">Cookie policy</Link>
        </nav> 
        <form>
          <header className="footer-title">Newsletter</header> 
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label> 
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </fieldset>
        </form>
        <p>© 2023 Mana Worlds. All rights reserved.</p>
      </footer>
    );
};

export default Footer;
