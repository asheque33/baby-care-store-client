import Link from "next/link";
import React from "react";

const FooterPage = () => {
  return (
    <div className="bg-[#666666] text-base-content w-[90%] mx-auto text-white">
      <footer className="footer p-10">
        <aside className="">
          <i>
            <Link href="/" className="btn btn-ghost text-xl mb-0 pb-0">
              BaBCare
            </Link>
          </i>
          <p className="mt-0 pt-0">
            A Store
            <br />
            Providing reliable products since 2012
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href="/products" className="link link-hover">
            Products
          </Link>
          <Link href="/categories" className="link link-hover">
            Categories
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about-us" className="link link-hover">
            About us
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact Us
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
      </footer>
      <div className="divider"></div>
      <aside className="footer-center pb-2">
        <p>Copyright © 2024 - All right reserved by BaBCare Store.</p>
      </aside>
    </div>
  );
};

export default FooterPage;
