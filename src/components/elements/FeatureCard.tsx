import React from 'react';

export interface FeatureCardProps {
  img: string;
  title: string;
  alt: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ img, title, alt, desc }) => (
  <div className="bg-white rounded-[10px] shadow-[0_3px_10px_rgba(0,0,0,0.07)] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-6">
    <div className="w-full h-auto object-contain bg-[#f5f5f5]">
      <img alt={alt} src={img} className="w-full h-auto object-contain" />
    </div>
    <div className="p-5 text-center">
      <h3 className="text-dark font-semibold mb-2.5 text-lg">{title}</h3>
      <p className="text-[#666] leading-normal min-h-[100px]">{desc}</p>
    </div>
  </div>
);

export default FeatureCard;
