import React from 'react';
import { Card, Avatar } from 'antd';

export interface TestimonialCardProps {
  avatar: string;
  name: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, name, text }) => (
  <Card style={{ borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 24 }}>
    <Card.Meta
      avatar={<Avatar src={avatar} size={48} />}
      title={<span style={{ fontWeight: 'bold', color: '#2c3e50' }}>{name}</span>}
      description={<span style={{ color: '#666', fontSize: '1rem' }}>{text}</span>}
    />
  </Card>
);

export default TestimonialCard;
