import React from 'react';
import Container from '../components/layout/Container';
import Footer from '../components/elements/Footer';
import NavBar from '../components/elements/NavBar';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <div className="py-8 max-w-[800px] mx-auto">
          <h1 className="text-dark mb-4">Privacy Policy</h1>
          <p className="mb-4">Last updated: July 3, 2025</p>
          <p className="mb-4">
            MultiRun ("us", "we", or "our") operates the MultiRun website (the "Service").
          </p>
          <p className="mb-4">
            This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2 className="text-dark my-8 mb-4 pb-2 border-b-2 border-border">Information Collection and Use</h2>
          <p className="mb-4">
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>

          <h3 className="text-dark my-6 mb-2">Types of Data Collected</h3>
          <h3 className="text-dark my-6 mb-2">Personal Data</h3>
          <div className="mb-4">
            <p className="mb-4">
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="my-4 pl-8">
              <li className="mb-2">Email address</li>
              <li className="mb-2">First name and last name</li>
              <li className="mb-2">Cookies and Usage Data</li>
            </ul>
          </div>
          <h3 className="text-dark my-6 mb-2">Usage Data</h3>
          <p className="mb-4">
            We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>
          <h3 className="text-dark my-6 mb-2">Tracking &amp; Cookies Data</h3>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>

          <h2 className="text-dark my-8 mb-4 pb-2 border-b-2 border-border">Use of Data</h2>
          <p className="mb-4">MultiRun uses the collected data for various purposes:</p>
          <ul className="my-4 pl-8">
            <li className="mb-2">To provide and maintain the Service</li>
            <li className="mb-2">To notify you about changes to our Service</li>
            <li className="mb-2">To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li className="mb-2">To provide customer care and support</li>
            <li className="mb-2">To provide analysis or valuable information so that we can improve the Service</li>
            <li className="mb-2">To monitor the usage of the Service</li>
            <li className="mb-2">To detect, prevent and address technical issues</li>
          </ul>

          <h2 className="text-dark my-8 mb-4 pb-2 border-b-2 border-border">Security of Data</h2>
          <p className="mb-4">
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-dark my-8 mb-4 pb-2 border-b-2 border-border">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the &quot;last updated&quot; date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-dark my-8 mb-4 pb-2 border-b-2 border-border">Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us.</p>
          <p className="mb-4">dongshan1025@gmail.com</p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
