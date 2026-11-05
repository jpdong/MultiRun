import type { Metadata } from 'next';
import Link from 'next/link';
import LegalDocument from '../../../src/components/site/LegalDocument';

export const metadata: Metadata = {
  title: 'App Terms of Service - Multi Run',
  description: 'Terms for the Multi Run Android app, including app instances, acceptable use, subscriptions, cancellations, and consumer rights.',
  alternates: { canonical: 'https://multirun.space/mobile/terms-of-service' },
};

export default function MobileTermsOfService() {
  return (
    <LegalDocument>
      <h1>App Terms of Service</h1>
      <p>Last updated: November 5, 2026</p>
      <p>
        These Terms of Service (“Terms”) govern your use of the Multi Run Android
        application (also called MultiRun, the “App”), provided by Jump Dong, an individual
        developer (“we”, “us”, or “our”). Contact us at{' '}
        <a href="mailto:support@multirun.space">support@multirun.space</a>.
      </p>
      <p>
        By downloading or using the App, you agree to these Terms. If you do not agree,
        do not use the App. Our{' '}
        <Link href="/mobile/privacy-policy">App Privacy Policy</Link> explains the handling
        of personal information. Acceptance of these Terms does not replace any separate
        consent required for data processing.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be legally able to agree to these Terms. If you have not reached the age
        of legal adulthood where you live, your parent or legal guardian must review and
        agree to these Terms and authorize your use where required. The App is not directed
        to children under 13. You must also meet the age requirements of Google Play and
        any third-party apps or services you use. Purchases require authorization from
        the person responsible for the payment method.
      </p>

      <h2>2. App functions and license</h2>
      <p>
        Multi Run provides tools for creating and managing separate instances of supported
        applications on an Android device. Features may include multiple spaces, shortcuts,
        app locks, and paid membership benefits, depending on the version and device.
        You do not need to register a Multi Run account. We do not provide a developer-run
        cloud storage, backup, or synchronization service for app instances.
      </p>
      <p>
        Subject to these Terms, we grant you a limited, non-exclusive, non-transferable
        license to install and use the App for your lawful personal or internal business
        purposes on devices you are authorized to use. The App is licensed, not sold.
        You receive no ownership of the App or of any third-party software.
      </p>

      <h2>3. Third-party apps and accounts</h2>
      <p>
        Apps and services that you run through Multi Run remain subject to their providers’
        terms, privacy policies, licenses, and account rules. You are responsible for
        obtaining permission to use them and for checking whether multiple instances or
        accounts are permitted. Multi Run does not grant an exception to another provider’s rules.
      </p>
      <p>
        We are not affiliated with or endorsed by a third-party app merely because it can
        run inside Multi Run. We cannot guarantee that an app will work, stay signed in,
        receive notifications, pass integrity checks, or continue to support multiple
        instances. Third-party providers can restrict access or suspend accounts under
        their own rules. These statements do not exclude responsibility that cannot
        lawfully be excluded.
      </p>

      <h2>4. Acceptable use</h2>
      <p>You agree to use the App lawfully and with respect for other people’s rights. You must not:</p>
      <ul>
        <li>Use the App for fraud, unauthorized account access, impersonation, spam, harassment, or distribution of malicious software.</li>
        <li>Access, copy, or disclose another person’s accounts, communications, or files without authorization.</li>
        <li>Use app instances to evade lawful restrictions, infringe intellectual property, or breach rules binding on your use of a third-party service.</li>
        <li>Tamper with purchase verification, fabricate purchases, manipulate rewarded advertisements, or bypass paid feature access controls.</li>
        <li>Redistribute or commercially exploit the App itself without permission, or reverse engineer it except where applicable law permits you to do so.</li>
      </ul>

      <h2>5. Your device and local data</h2>
      <p>
        You are responsible for securing your device, choosing trustworthy apps, managing
        permissions, and keeping backups of information you need. Separate spaces and app
        locks provide organizational and access features; they are not a promise of complete
        isolation from every security threat or a substitute for device security.
      </p>
      <p>
        Removing an instance, clearing its storage, clearing Multi Run’s data, uninstalling
        the App, or resetting your device can permanently remove local data and sessions.
        Updates to Android or a third-party app can also affect compatibility or access.
        Since we do not operate a cloud backup service for your instances, we cannot
        restore a developer-held copy of deleted local data. Files exported elsewhere and
        platform backups must be managed separately.
      </p>

      <h2>6. Free features and advertising</h2>
      <p>
        Some features are supported by advertisements, and some actions may offer a
        rewarded advertisement in exchange for a stated benefit. Ad availability and
        successful completion depend on the advertising service and network conditions.
        The relevant screen describes any reward and its conditions. A temporary reward
        does not create an ongoing paid subscription.
      </p>
      <p>
        Any ad-removal benefit applies only to the Multi Run advertisements described in
        the purchase offer. It does not remove advertisements displayed by third-party
        apps or external services. Advertising and associated data practices are described
        in the <Link href="/mobile/privacy-policy">App Privacy Policy</Link>.
      </p>

      <h2>7. Paid features and subscriptions</h2>
      <p>
        Paid plans are offered through Google Play Billing. The purchase screen and Google
        Play checkout show the price, currency, billing period, included benefits, and any
        applicable trial or promotional conditions before you confirm. Those disclosed
        conditions form part of your purchase. Prices and available offers may differ by region.
      </p>
      <p>
        An auto-renewing subscription renews for successive billing periods and Google Play
        charges your selected payment method unless you cancel before the next renewal,
        subject to Google Play’s applicable rules. If an offer includes a free trial or
        introductory price, the price disclosed at checkout applies after that offer ends
        unless you cancel in time. Price changes are subject to the notices and consent
        required by Google Play and applicable law.
      </p>
      <p>
        Purchase recognition depends on Google Play and the Google account used to buy
        the plan. To recover access after reinstalling, use that account and let the App
        refresh your purchase status; contact support if a valid purchase is not recognized.
        Purchase recovery does not restore deleted app-instance data. A membership provides
        the disclosed benefits for its valid term, rather than a guarantee of lifetime
        access or compatibility with every third-party app.
      </p>

      <h2>8. Cancellation and refunds</h2>
      <p>
        You can manage or cancel a subscription through{' '}
        <a href="https://play.google.com/store/account/subscriptions">Google Play subscriptions</a>.
        Make sure you are signed in to the purchasing Google account. For a standard
        auto-renewing subscription, cancellation stops the next renewal and access normally
        continues until the end of the paid period, subject to refunds, revocations, and
        Google Play’s rules.
      </p>
      <p>
        <strong>Uninstalling Multi Run, clearing its data, or deleting app instances does
        not cancel your subscription.</strong> Cancel it separately through Google Play.
      </p>
      <p>
        Cancellation does not automatically refund previous charges. Refund eligibility
        follows applicable consumer law and{' '}
        <a href="https://support.google.com/googleplay/answer/2479637?hl=en">Google Play’s refund policies</a>.
        You can use Google Play’s refund process or contact us for assistance. Nothing in
        these Terms removes a mandatory right to a refund, withdrawal, repair, or another remedy.
      </p>

      <h2>9. Intellectual property and your content</h2>
      <p>
        The App’s original code, branding, and design belong to Jump Dong or their respective
        licensors. Third-party apps, names, icons, libraries, and other materials remain
        the property of their respective owners and may have separate licenses. Applicable
        open-source licenses continue to govern the components they cover.
      </p>
      <p>
        You retain your rights in your own content. These Terms do not give us ownership
        of your app-instance content or a license to use your private messages, photos,
        or files for marketing. If you send support materials, you authorize us to use
        them as needed to handle your request, as described in the App Privacy Policy.
      </p>

      <h2>10. Updates and ending use</h2>
      <p>
        We may release updates or modify features for compatibility, security, maintenance,
        or product development. Some functions require a compatible App version, supported
        Android version, an internet connection, or available third-party services. Where
        changes materially affect a paid service, we will provide any notice and remedies
        required by applicable law and the purchase conditions.
      </p>
      <p>
        You can stop using the App at any time. Your license may end for a material breach
        of these Terms, subject to any notice or opportunity to remedy required by law.
        Ending use does not automatically cancel a subscription; manage it through Google
        Play. If we discontinue a paid service, applicable consumer rights and refund
        obligations continue to apply.
      </p>

      <h2>11. Warranties and responsibility</h2>
      <p>
        To the extent permitted by law, the App is provided “as is” and “as available”.
        We do not promise uninterrupted or error-free operation, compatibility with every
        device or third-party application, or prevention of all data loss or security incidents.
        We do not exclude any statutory guarantee or warranty that cannot lawfully be excluded.
      </p>
      <p>
        To the extent permitted by law, we are not responsible for indirect or consequential
        losses, such as lost profits or business opportunities, resulting from use of the
        App. We do not exclude or limit liability for fraud, intentional misconduct, gross
        negligence, death or personal injury caused by negligence, or any other liability
        that cannot be excluded or limited under applicable law. Your mandatory consumer
        rights remain unaffected.
      </p>

      <h2>12. Applicable law and disputes</h2>
      <p>
        These Terms apply subject to the mandatory laws and consumer protections that
        apply to you. They do not require you to waive access to courts, agree to mandatory
        arbitration, or give up protections available in your country of residence. Any
        dispute is subject to the applicable rules on governing law and court jurisdiction.
      </p>
      <p>
        If you have a problem, please contact{' '}
        <a href="mailto:support@multirun.space">support@multirun.space</a> so we can try to
        resolve it. This does not restrict your right to pursue available legal remedies.
      </p>

      <h2>13. Changes to these Terms</h2>
      <p>
        We may update these Terms as the App or legal requirements change. We will update
        the date above and provide notice of material changes where required. Any required
        agreement to revised Terms will be obtained separately. Changes do not retroactively
        remove accrued consumer rights. If a provision is unenforceable, the remaining
        provisions continue to apply to the extent permitted by law.
      </p>

      <h2>14. Contact</h2>
      <p>
        Developer: Jump Dong<br />
        App: Multi Run (Android package: com.dong.multirun)<br />
        Email: <a href="mailto:support@multirun.space">support@multirun.space</a>
      </p>
    </LegalDocument>
  );
}
