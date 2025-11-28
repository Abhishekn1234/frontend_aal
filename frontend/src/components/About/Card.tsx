import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface CardProps {
  icon: IconProp;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div
      className="
        group p-8 w-full max-w-sm rounded-xl transition-all duration-300 cursor-pointer 
        hover:bg-[#3f72af] 
        shadow-lg hover:shadow-2xl hover:scale-[1.02] mb-8
      "
    >
      {/* Icon with Blue Background */}
      <div
        className="
          flex items-center justify-center w-12 h-12 mb-4 
          bg-[#3f72af] text-white rounded-lg mb-5
          transition-colors duration-300
          group-hover:bg-[#1c5fc4] 
        "
      >
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </div>

      {/* Card Title */}
      <h3 className="text-2xl font-semibold mb-3 text-white">
        {title}
      </h3>

      {/* Card Description */}
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default Card;

