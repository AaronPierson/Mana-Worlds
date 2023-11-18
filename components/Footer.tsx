import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

const Footer: React.FC = () => {
    return(
        <footer className="footer p-5 bg-base-200 text-base-content">
        <Image className="footer-logo" src="/imgs/logos/blob.svg" alt="Mana Worlds" width={200} height={200} />
        <nav>
          <header className="footer-title">Community</header> 
          <Link href="https://forum.manaworlds.com" className="link link-hover">Forums</Link> 

        </nav> 
        <nav>
          <header className="footer-title">Mana Worlds</header> 
          <Link href="/about" className="link link-hover">About us</Link>
          <Link href="/games" className="link link-hover">Games</Link> 
          <Link href="/news" className="link link-hover">News</Link> 
          {/* <Link href="/contact" className="link link-hover">Contact</Link>  */}
          {/* <a className="link link-hover">Jobs</a>  */}
          {/* <a className="link link-hover">Press kit</a> */}
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          {/* <Link className="link link-hover">Terms of use</Link>  */}
          <Link href="/legal/privacy-policy" className="link link-hover">Privacy policy</Link> 
          <Link href="/legal/cookie-policy" className="link link-hover">Cookie policy</Link>
        </nav> 
        {/* <form>
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
        </form> */}
        <p>© 2023 Mana Worlds. All rights reserved.</p>
      </footer>
    );
};

export default Footer;
