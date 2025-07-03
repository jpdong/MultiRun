import React from 'react';
import { Layout, Typography, Card, Row, Col, Avatar } from 'antd';
import { TwitterOutlined, FacebookOutlined, MessageOutlined, MailOutlined } from '@ant-design/icons';
import { FaDiscord, FaTelegramPlane, FaProductHunt } from 'react-icons/fa';
import Container from '../components/layout/Container';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const contactMethods = [
  {
    icon: <FaTelegramPlane style={{ fontSize: 24, color: '#0088cc' }} />,
    title: 'Telegram Channel',
    link: '#', // 在此处替换为您的 Telegram 频道链接
    description: 'Get the latest updates and announcements.',
  },
  {
    icon: <MessageOutlined style={{ fontSize: 24, color: '#0088cc' }} />,
    title: 'Telegram Group',
    link: '#', // 在此处替换为您的 Telegram 群组链接
    description: 'Join the community discussion.',
  },
  {
    icon: <FaDiscord style={{ fontSize: 24, color: '#7289DA' }} />,
    title: 'Discord',
    link: '#', // 在此处替换为您的 Discord 链接
    description: 'Chat with the team and community.',
  },
  {
    icon: <TwitterOutlined style={{ fontSize: 24, color: '#1DA1F2' }} />,
    title: 'Twitter',
    link: '#', // 在此处替换为您的 Twitter 链接
    description: 'Follow us for news and updates.',
  },
  {
    icon: <FacebookOutlined style={{ fontSize: 24, color: '#4267B2' }} />,
    title: 'Facebook',
    link: '#', // 在此处替换为您的 Facebook 链接
    description: 'Like our page for more content.',
  },
  {
    icon: <FaProductHunt style={{ fontSize: 24, color: '#DA552F' }} />,
    title: 'Product Hunt',
    link: '#', // 在此处替换为您的 Product Hunt 链接
    description: 'See our launch and leave a review.',
  },
  {
    icon: <MailOutlined style={{ fontSize: 24, color: '#D44638' }} />,
    title: 'Email',
    link: 'mailto:your-email@example.com', // 在此处替换为您的邮箱地址
    description: 'For business inquiries and support.',
  },
];

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
                        <Avatar size={64} icon={method.icon} style={{ marginBottom: '1rem', backgroundColor: 'transparent' }} />
                        <Title level={4}>{method.title}</Title>
                        <Paragraph>{method.description}</Paragraph>
                      </div>
                    </Card>
                  </a>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </Content>
    </Layout>
  );
};

export default ContactUsPage;
