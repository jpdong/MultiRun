import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="bg-dark text-white pt-[50px] pb-5">
    <div className="max-w-[1200px] mx-auto px-5">
      <div className="flex flex-wrap -m-2.5">
        <div className="p-2.5 w-1/3 max-md:w-full">
          <h3 className="text-white mb-5">Multi Run</h3>
          <p>Run multiple accounts and apps simultaneously on one device with complete data isolation.</p>
        </div>
        <div className="p-2.5 w-1/3 max-md:w-full">
          <h3 className="text-white mb-5">Products</h3>
          <ul className="list-none p-0">
            <li><Link href="/" className="text-[#ddd] no-underline transition-colors hover:text-white">Download</Link></li>
            <li><Link href="/contact" className="text-[#ddd] no-underline transition-colors hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        <div className="p-2.5 w-1/3 max-md:w-full">
          <h3 className="text-white mb-5">Support</h3>
          <ul className="list-none p-0">
            <li><Link href="/privacy-policy" className="text-[#ddd] no-underline transition-colors hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms-of-use" className="text-[#ddd] no-underline transition-colors hover:text-white">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-5 mt-10 border-t border-[#444] text-[#aaa]">
        &copy; 2025 Multi Run. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
