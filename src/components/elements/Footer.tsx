import Link from 'next/link';
import React from 'react';

import {
  defaultHomeLocale,
  homeLocalePath,
  type HomeLocale,
} from '../../i18n/home/config';
import { homeCopy, type HomeCopy } from '../../i18n/home/en';

type FooterProps = {
  locale?: HomeLocale;
  copy?: HomeCopy['footer'];
};

const Footer: React.FC<FooterProps> = ({
  locale = defaultHomeLocale,
  copy = homeCopy.footer,
}) => {
  const homePath = homeLocalePath(locale);
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col col-4">
            <h3>{copy.brand}</h3>
            <p>{copy.description}</p>
          </div>
          <div className="col col-4">
            <h3>{copy.productsHeading}</h3>
            <ul>
              <li>
                <Link href={homePath}>{copy.download}</Link>
              </li>
              <li>
                <Link href="/contact">{copy.contactUs}</Link>
              </li>
            </ul>
          </div>
          <div className="col col-4">
            <h3>{copy.supportHeading}</h3>
            <ul>
              <li>
                <Link href="/mobile/privacy-policy">
                  {copy.appPrivacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/mobile/terms-of-service">
                  {copy.appTermsOfService}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">{copy.websitePrivacyPolicy}</Link>
              </li>
              <li>
                <Link href="/terms-of-use">{copy.websiteTermsOfUse}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">{copy.copyright}</div>
      </div>
    </footer>
  );
};

export default Footer;
