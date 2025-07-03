'use client';

import React from 'react';
import { Layout, Typography, Table, Avatar } from 'antd';
import Container from '../components/layout/Container';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
    width: 80,
  },
  {
    title: 'App',
    dataIndex: 'appName',
    key: 'appName',
    render: (text: string, record: { appName: string; icon: string; description: string }) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={record.icon} size={48} style={{ marginRight: 16 }} />
        <div>
          <Text strong>{record.appName}</Text>
          <Paragraph type="secondary" style={{ margin: 0 }}>{record.description}</Paragraph>
        </div>
      </div>
    ),
  },
];

const data = [
  {
    key: '1',
    rank: 1,
    appName: 'WhatsApp',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png',
    description: 'A popular messaging and VoIP service.',
  },
  {
    key: '2',
    rank: 2,
    appName: 'Facebook',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/240px-Facebook_f_logo_%282019%29.svg.png',
    description: "The world's largest social network.",
  },
  {
    key: '3',
    rank: 3,
    appName: 'Garena Free Fire',
    icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Garena_Free_Fire_Booyah_Day_Logo.png/220px-Garena_Free_Fire_Booyah_Day_Logo.png',
    description: 'A popular battle royale game.',
  },
  {
    key: '4',
    rank: 4,
    appName: 'Mobile Legends: Bang Bang',
    icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Mobile_Legends_Bang_Bang_logo.png/220px-Mobile_Legends_Bang_Bang_logo.png',
    description: 'A multiplayer online battle arena (MOBA) game.',
  },
  {
    key: '5',
    rank: 5,
    appName: 'eFootball PES 2021',
    icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Pro_Evolution_Soccer_2021_Season_Update_cover.jpg/220px-Pro_Evolution_Soccer_2021_Season_Update_cover.jpg',
    description: 'A football simulation video game.',
  },
  {
    key: '6',
    rank: 6,
    appName: 'Instagram',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/240px-Instagram_icon.png',
    description: 'A photo and video sharing social network.',
  },
  {
    key: '7',
    rank: 7,
    appName: 'Clash of Clans',
    icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Clash_of_Clans_Logo.png/220px-Clash_of_Clans_Logo.png',
    description: 'A popular mobile strategy video game.',
  },
  {
    key: '8',
    rank: 8,
    appName: 'Facebook Lite',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/240px-Facebook_f_logo_%282019%29.svg.png',
    description: 'A lightweight version of the Facebook app.',
  },
  {
    key: '9',
    rank: 9,
    appName: 'WhatsApp Business',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png',
    description: 'A version of WhatsApp for business owners.',
  },
  {
    key: '10',
    rank: 10,
    appName: 'ShareChat',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/ShareChat_logo.svg/240px-ShareChat_logo.svg.png',
    description: 'An Indian social media platform.',
  },
];

const RankPage: React.FC = () => {
  return (
    <Layout>
      <Content>
        <Container>
          <div style={{ padding: '4rem 0', textAlign: 'center' }}>
            <Title>Top 10 Cloned Applications</Title>
            <Paragraph style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
              Here are the most popular apps that users clone with Multi Run.
            </Paragraph>
            <Table columns={columns} dataSource={data} pagination={false} />
          </div>
        </Container>
      </Content>
    </Layout>
  );
};

export default RankPage;