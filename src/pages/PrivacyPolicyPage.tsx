import React from 'react';
import { Layout, Typography } from 'antd';
import Container from '../components/layout/Container';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Layout>
      <Content>
        <Container>
          <div style={{ padding: '2rem 0' }}>
            <Typography>
              <Title>Privacy Policy</Title>
              <Paragraph>
                Last updated: July 3, 2025
              </Paragraph>
              <Paragraph>
                MultiRun ("us", "we", or "our") operates the MultiRun website (the "Service").
              </Paragraph>
              <Paragraph>
                This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
              </Paragraph>

              <Title level={2}>Information Collection and Use</Title>
              <Paragraph>
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </Paragraph>

              <Title level={3}>Types of Data Collected</Title>
              <Text strong>Personal Data</Text>
              <Paragraph>
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                <ul>
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </Paragraph>
              <Text strong>Usage Data</Text>
              <Paragraph>
                We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </Paragraph>
              <Text strong>Tracking & Cookies Data</Text>
              <Paragraph>
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </Paragraph>

              <Title level={2}>Use of Data</Title>
              <Paragraph>
                MultiRun uses the collected data for various purposes:
                <ul>
                  <li>To provide and maintain the Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                  <li>To provide customer care and support</li>
                  <li>To provide analysis or valuable information so that we can improve the Service</li>
                  <li>To monitor the usage of the Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </Paragraph>

              <Title level={2}>Security of Data</Title>
              <Paragraph>
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </Paragraph>

              <Title level={2}>Changes to This Privacy Policy</Title>
              <Paragraph>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
              </Paragraph>

              <Title level={2}>Contact Us</Title>
              <Paragraph>
                dongshan1025@gmail.com
              </Paragraph>
              <Paragraph>
                If you have any questions about this Privacy Policy, please contact us.
              </Paragraph>
            </Typography>
          </div>
        </Container>
      </Content>
    </Layout>
  );
};

export default PrivacyPolicyPage;