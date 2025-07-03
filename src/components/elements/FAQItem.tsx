'use client';

import React from 'react';
import { Collapse } from 'antd';

export interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <Collapse bordered={false} style={{ marginBottom: 16 }}>
    <Collapse.Panel header={question} key="1">
      <div style={{ color: '#666' }}>{answer}</div>
    </Collapse.Panel>
  </Collapse>
);

export default FAQItem;
