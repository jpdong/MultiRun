import React from 'react';

export interface TestimonialCardProps {
  avatar: string;
  name: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, name, text }) => (
  <div className="bg-white rounded-[10px] shadow-[0_3px_10px_rgba(0,0,0,0.07)] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-6">
    <div className="p-5 text-center">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-bold text-dark m-0">{name}</h4>
        </div>
      </div>
      <p className="text-[#666] text-base m-0 min-h-[200px]">{text}</p>
    </div>
  </div>
);

export default TestimonialCard;
