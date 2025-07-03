'use client';

import React from 'react';
import { Layout, Typography } from 'antd';
import Container from '../components/layout/Container';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const TermsOfUsePage: React.FC = () => {
  return (
    <Layout>
      <Content>
        <Container>
          <div style={{ padding: '2rem 0' }}>
            <Typography>
              <Title>Terms of Use</Title>
              <Paragraph>
                Last updated: July 3, 2025
              </Paragraph>
              <Paragraph>
                Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the MultiRun website (the "Service") operated by MultiRun ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </Paragraph>
              <Paragraph>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
              </Paragraph>

              <Title level={2}>Accounts</Title>
              <Paragraph>
                When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </Paragraph>

              <Title level={2}>Intellectual Property</Title>
              <Paragraph>
                The Service and its original content, features, and functionality are and will remain the exclusive property of MultiRun and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of MultiRun.
              </Paragraph>

              <Title level={2}>Links To Other Web Sites</Title>
              <Paragraph>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by MultiRun. MultiRun has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that MultiRun shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </Paragraph>

              <Title level={2}>Changes</Title>
              <Paragraph>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </Paragraph>

              <Title level={2}>Contact Us</Title>
              <Paragraph>
                dongshan1025@gmail.com
              </Paragraph>
              <Paragraph>
                If you have any questions about these Terms, please contact us.
              </Paragraph>
            </Typography>
          </div>
        </Container>
      </Content>
    </Layout>
  );
};

export default TermsOfUsePage;