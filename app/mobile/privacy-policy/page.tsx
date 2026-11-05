import type { Metadata } from 'next';
import Link from 'next/link';
import LegalDocument from '../../../src/components/site/LegalDocument';

export const metadata: Metadata = {
  title: 'App Privacy Policy - Multi Run',
  description: 'How the Multi Run Android app handles local app data, permissions, analytics, advertising, purchases, and privacy requests.',
  alternates: { canonical: 'https://multirun.space/mobile/privacy-policy' },
};

export default function MobilePrivacyPolicy() {
  return (
    <LegalDocument>
      <h1>App Privacy Policy</h1>
      <p>Last updated: November 5, 2026</p>
      <p>
        This Privacy Policy explains how Jump Dong, the individual developer of Multi Run
        (also called MultiRun, “we”, “us”, or “our”), handles personal information in
        connection with the Multi Run Android application (the “App”). For questions or
        privacy requests, contact <a href="mailto:support@multirun.space">support@multirun.space</a>.
      </p>
      <p>
        Multi Run lets you create and manage separate instances of supported apps on your
        device. You do not need to create a Multi Run account. We do not operate our own
        backend servers or provide a developer-operated cloud backup or synchronization
        service. However, the App uses third-party services that process information on
        their servers, including Google services for analytics, advertising, configuration,
        and purchases.
      </p>
      <p>
        This policy covers the App. Browsing this website is covered separately by our{' '}
        <Link href="/privacy-policy">Website Privacy Policy</Link>. Use of the App is also
        subject to our <Link href="/mobile/terms-of-service">App Terms of Service</Link>.
      </p>

      <h2>1. Local app and space data</h2>
      <p>
        The App accesses information about installed applications, such as package names,
        names, and icons, to display supported apps and create and manage their instances.
        Space settings, instance identifiers, shortcuts, preferences, and app lock settings
        are stored on your device. Instances also store their own local files, sessions,
        and settings within the device environment managed by Multi Run.
      </p>
      <p>
        Local processing does not mean that an app instance is offline. Apps that you run
        through Multi Run may transmit account details, messages, files, location, and other
        information to their own providers, just as they may when used outside Multi Run.
        Those providers are responsible for their own data practices. Selected package
        names and space identifiers may also be included in the Multi Run usage events
        described below.
      </p>

      <h2>2. Analytics and configuration</h2>
      <p>
        We use Google Analytics for Firebase to understand App usage and improve features.
        Event information can include launches, feature interactions, creating or managing
        app instances, clearing storage or cache, subscription screen interactions, and ad
        interactions. Some events include the affected app package name and space identifier.
        Firebase may also process app-instance identifiers, device and operating system
        information, App version, timestamps, and general location derived from network
        information. These are usage records, rather than the contents of your chats or files.
      </p>
      <p>
        Firebase Remote Config retrieves configuration values used to control App behavior.
        Google may process installation identifiers, configuration requests, and technical
        information to deliver this service. These services involve processing on Google’s
        infrastructure even though we do not operate our own backend.
      </p>

      <h2>3. Advertising and privacy choices</h2>
      <p>
        The App uses Google Mobile Ads to display advertisements, including rewarded and
        interstitial advertisements. Google and the advertising providers involved in
        serving an ad may process your IP address, approximate location inferred from it,
        advertising or app identifiers, device information, ad impressions and interactions,
        and diagnostic information. Purposes include serving and measuring ads, limiting
        repeated ads, and preventing fraud. Personalized advertising may involve use of
        information across apps or services, depending on your choices and applicable rules.
      </p>
      <p>
        We integrate Google’s User Messaging Platform (UMP) to present advertising consent
        messages and privacy options where available or required. Use the privacy options
        presented in the App or consent message to review available advertising choices.
        Android also provides advertising privacy controls; their names and availability
        depend on your device and Android version. Changing an advertising choice does not
        necessarily disable separate Firebase Analytics collection or erase earlier records.
      </p>
      <p>
        We do not sell a customer database for payment. Advertising disclosures can nevertheless
        qualify as “sharing”, a “sale”, or targeted advertising under some privacy laws.
        Where those laws apply, you may request the relevant opt-out using the available
        advertising controls or by contacting us. Non-personalized ads may still involve
        technical data processing.
      </p>

      <h2>4. Purchases and network requests</h2>
      <p>
        Google Play processes subscription payments. The App receives purchase information,
        such as product identifiers, purchase tokens, purchase times, and subscription status,
        to check purchases and provide paid features. We do not receive your full payment
        card details. Google maintains its own payment and transaction records.
      </p>
      <p>
        To check time for subscription validity, the App can make network requests to
        google.com and fallback endpoints at httpbin.org and api.allorigins.win. The
        endpoint receiving a request can receive your IP address and ordinary connection
        metadata. These requests are used to obtain network time, rather than to upload
        the contents of your app instances.
      </p>

      <h2>5. Device permissions</h2>
      <p>
        Multi Run hosts other apps, so its permission declarations can cover a wider range
        of capabilities than its own interface uses. A permission declaration alone does
        not mean that information is collected or uploaded. Actual access depends on your
        Android version, permissions granted, and the features or app instances you use.
      </p>
      <ul>
        <li><strong>Installed apps:</strong> to find and display applications that can be added to a space and manage their instances.</li>
        <li><strong>Photos, video, audio, and storage:</strong> to support files and media used by app instances and related import or export actions.</li>
        <li><strong>Camera and microphone:</strong> to support features such as scanning, taking photos, recording, or calls when used by a supported feature or app instance.</li>
        <li><strong>Location, contacts, calendar, phone, and nearby devices:</strong> to support corresponding functions of apps running within Multi Run when those permissions are available and granted.</li>
        <li><strong>Notifications, background operation, and battery settings:</strong> to support notifications and continued operation of app instances.</li>
        <li><strong>Biometric authentication:</strong> to use Android’s authentication result for supported lock features. Android manages biometric templates; the App does not receive your fingerprint or face template.</li>
      </ul>
      <p>
        Review or revoke permissions in Android Settings under Apps → Multi Run → Permissions.
        Denying a permission may prevent the related feature or app instance from working.
        Because Android can grant permissions to the Multi Run host, review the trustworthiness
        of the apps you choose to run inside it as well.
      </p>

      <h2>6. Support communications</h2>
      <p>
        If you email us, we receive your email address and the information you choose to
        provide, including screenshots or diagnostic details. We use this information to
        answer your request and resolve issues. Email is handled by email service providers,
        independently of whether the App has a backend. Please avoid sending passwords,
        payment card details, or private content from other apps.
      </p>

      <h2>7. Purposes and legal grounds</h2>
      <p>
        We process information to provide and maintain App functions, deliver purchases,
        respond to support requests, understand usage, deliver advertising, prevent misuse,
        and meet legal obligations. Where a legal basis is required, we rely on performance
        of our contract for requested functions and purchases, legitimate interests for
        proportionate support and service protection, legal obligations where applicable,
        and consent for processing that requires consent, including relevant advertising
        or analytics activities. You may withdraw consent where processing relies on it;
        this does not affect processing that was lawful before withdrawal.
      </p>

      <h2>8. Recipients and international processing</h2>
      <p>
        Information is processed by the service providers described in this policy, by
        apps you choose to run, and by email providers when you contact support. We may
        also disclose information we hold when required by law or necessary to protect
        users and exercise or defend legal rights. We do not operate a server that
        centrally stores your app instances.
      </p>
      <p>
        Third-party services and support providers may process information outside your
        country, including in countries with different privacy laws. Where applicable law
        requires transfer safeguards, the relevant processing must be supported by a
        permitted transfer mechanism. Google describes its processing and safeguards in its{' '}
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and{' '}
        <a href="https://firebase.google.com/support/privacy">Firebase privacy information</a>.
        See also Google’s{' '}
        <a href="https://policies.google.com/technologies/ads">advertising information</a>.
      </p>

      <h2>9. Retention and deletion</h2>
      <p>
        Local instance data remains on your device until you remove the instance, clear
        its storage, clear Multi Run’s App data, or uninstall Multi Run. Clearing cache
        alone does not remove all instance data. Shared or exported files and Android or
        device-provider backups may remain separately; review your file storage and backup
        settings. We do not provide a developer-run cloud copy from which to restore deleted data.
      </p>
      <p>
        Analytics, advertising, configuration, and purchase records have separate retention
        periods determined by the relevant service, configured retention settings, and
        applicable legal requirements. Removing local data does not automatically delete
        information already processed by those services. We retain support correspondence
        for as long as needed to resolve the request and related follow-up, and longer
        where necessary for legal obligations or disputes. You can request deletion of
        information we hold by emailing us; we will explain any applicable retention exception.
      </p>
      <p>
        There is no separate Multi Run account to delete. Accounts created with apps you
        run inside Multi Run must be managed with those providers. Uninstalling Multi Run
        or deleting local data <strong>does not cancel a Google Play subscription</strong>.
      </p>

      <h2>10. Your privacy rights</h2>
      <p>
        Depending on your location and applicable law, you may have rights to access,
        correct, delete, or receive a portable copy of personal information; restrict or
        object to processing; withdraw consent; or opt out of targeted advertising and
        qualifying sales or sharing. You may also have a right to appeal a decision or
        complain to your local data protection authority. We will not discriminate against
        you for exercising applicable privacy rights.
      </p>
      <p>
        Send requests to <a href="mailto:support@multirun.space">support@multirun.space</a>.
        Describe your request and the relevant service without sending sensitive credentials.
        We may need proportionate information to verify your request, and will respond
        within the period required by applicable law. Because we do not have a Multi Run
        account database or remote access to your device, we may need your help to identify
        a service record, or explain how to remove local data yourself. Where a provider
        independently controls information, we will direct you to that provider as appropriate.
      </p>

      <h2>11. Children’s privacy</h2>
      <p>
        Multi Run is not directed to children under 13. If your country requires a higher
        age for independently consenting to the relevant processing, that requirement
        applies. We do not knowingly collect personal information from children in
        violation of applicable law. If you believe a child has provided such information,
        contact us so that we can investigate and take appropriate action. Third-party
        apps and purchases may have additional age requirements.
      </p>

      <h2>12. Security</h2>
      <p>
        We use device and platform security features and reasonable measures appropriate
        to the information processed. No app, network, or storage system is completely
        secure. App spaces and lock features are not a guarantee against every form of
        device compromise or unauthorized access. Keep your device secure, install trusted
        apps, and maintain any backups you need.
      </p>

      <h2>13. Policy changes and contact</h2>
      <p>
        We may update this policy when App features, providers, or legal requirements
        change. We will update the date above and provide additional notice or request
        consent where required. A policy update does not replace any consent required by law.
      </p>
      <p>
        Developer: Jump Dong<br />
        App: Multi Run (Android package: com.dong.multirun)<br />
        Email: <a href="mailto:support@multirun.space">support@multirun.space</a>
      </p>
    </LegalDocument>
  );
}
