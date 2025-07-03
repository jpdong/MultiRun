import React from 'react';
import { Card } from 'antd';

export interface FeatureCardProps {
  img: string;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ img, title, desc }) => (
  <Card
    hoverable
    cover={<img alt={title} src={img} style={{ width: '100%', height: 'auto', objectFit: 'contain', margin: '0 auto', background: '#f5f5f5', borderRadius: 10, marginTop: 0 }} />}
    style={{ borderRadius: 10, textAlign: 'center', boxShadow: '0 3px 10px rgba(0,0,0,0.07)', marginBottom: 24 }}
  >
    <Card.Meta
      title={<span style={{ color: '#2c3e50', fontWeight: 600 }}>{title}</span>}
      description={<span style={{ color: '#666' }}>{desc}</span>}
      style={{
        minHeight: 100, // 设置最小高度
        overflow: 'hidden' // 如果内容可能溢出，可以隐藏
      }}
    />
  </Card>
);

export default FeatureCard;
