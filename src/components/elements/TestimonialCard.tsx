import React from 'react';

export interface TestimonialCardProps {
  avatar: string;
  name: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, name, text }) => (
  <div className="bg-white rounded-xl border border-border-light shadow-[0_4px_16px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] mb-6 h-full flex flex-col justify-between">
    <div className="p-6 flex flex-col h-full">
      <div className="flex items-center mb-6">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full mr-4 object-cover border border-border-light"
        />
        <div>
          <h4 className="font-bold text-dark text-lg m-0">{name}</h4>
        </div>
      </div>
      <p className="text-text-lighter text-sm leading-relaxed m-0 flex-grow">{text}</p>
    </div>
  </div>
);

export default TestimonialCard;
