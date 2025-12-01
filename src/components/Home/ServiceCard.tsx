import { motion } from "framer-motion";
import type { ServiceCardProps } from "../../types/Home/scroll";
import { useState } from "react";

export function ServiceCard({ title, icon, image, items, onSpeakClick }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-gray-900 text-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
      onClick={onSpeakClick}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Image */}
      {image && (
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <div className="p-6">
        {/* Title & Icon */}
        <div className="flex items-center gap-3 mb-3">
          {icon && <span className="text-2xl">{icon}</span>}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        {/* Items List */}
        {items && (
          <ul
            className={`text-white text-sm space-y-1 transition-all duration-300 ${
              !isExpanded ? "max-h-20 overflow-hidden" : ""
            }`}
          >
            {items.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        )}

        {/* Show More / Less */}
        {items && items.length > 3 && (
          <button
            className="text-blue-400 mt-2 text-sm hover:underline"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </motion.div>
  );
}
