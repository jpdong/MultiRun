import React from 'react';
import { Layout, Typography, Card, Row, Col, Avatar, Button, message } from 'antd';
import { TwitterOutlined, FacebookOutlined, MessageOutlined, MailOutlined } from '@ant-design/icons';
import { FaDiscord, FaTelegramPlane, FaProductHunt } from 'react-icons/fa';
import Container from '../components/layout/Container';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const emailAddress = 'dongshan1025@gmail.com';

const contactMethods = [
  {
    icon: <FaTelegramPlane style={{ fontSize: 64, color: '#0088cc' }} />,
    title: 'Telegram Channel',
    link: 'https://t.me/multi_run',
    description: 'Get the latest updates and announcements.',
  },
  {
    icon: <MessageOutlined style={{ fontSize: 64, color: '#0088cc' }} />,
    title: 'Telegram Group',
    link: 'https://t.me/+m8gMGEhAb5E0ODk1',
    description: 'Join the community discussion.',
  },
  {
    icon: <FaDiscord style={{ fontSize: 64, color: '#7289DA' }} />,
    title: 'Discord',
    link: 'https://discord.gg/T7DsKkdz',
    description: 'Chat with the team and community.',
  },
  {
    icon: <TwitterOutlined style={{ fontSize: 64, color: '#1DA1F2' }} />,
    title: 'Twitter',
    link: 'https://x.com/JP_DONG',
    description: 'Follow us for news and updates.',
  },
  {
    icon: <FaProductHunt style={{ fontSize: 64, color: '#DA552F' }} />,
    title: 'Product Hunt',
    link: 'https://www.producthunt.com/@jumpdong',
    description: 'See our launch and leave a review.',
  },
];

const handleCopy = () => {
  navigator.clipboard.writeText(emailAddress);
};

const ContactUsPage: React.FC = () => {
  return (
    <Layout>
      <Content>
        <Container>
          <div style={{ padding: '4rem 0', textAlign: 'center' }}>
            <Title>Contact Us</Title>
            <Paragraph style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
              We'd love to hear from you! Here are the best ways to reach us.
            </Paragraph>
            <Row gutter={[32, 32]} justify="center">
              {contactMethods.map((method, index) => (
                <Col key={index} xs={24} sm={12} md={8}>
                  <a href={method.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Card hoverable style={{ height: '100%' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
                        <Avatar size={100} icon={method.icon} style={{ marginBottom: '1rem', backgroundColor: 'transparent' }} />
                        <Title level={4}>{method.title}</Title>
                        <Paragraph>{method.description}</Paragraph>
                      </div>
                    </Card>
                  </a>
                </Col>
              ))}
              <Col xs={24} sm={12} md={8}>
                <Card hoverable style={{ height: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
                    <Avatar size={100} icon={<MailOutlined style={{ fontSize: 64, color: '#D44638' }} />} style={{ marginBottom: '1rem', backgroundColor: 'transparent' }} />
                    <Title level={4}>Email</Title>
                    <Paragraph>For business inquiries and support.</Paragraph>
                    <div style={{ marginTop: 'auto' }}>
                      <Button type="primary" href={`mailto:${emailAddress}`} style={{ marginRight: 8 }}>
                        Send Email
                      </Button>
                      <Button onClick={handleCopy}>
                        Copy Address
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Content>
    </Layout>
  );
};

export default ContactUsPage;
