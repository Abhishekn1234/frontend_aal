import { motion } from "framer-motion";
import type { ServiceCardProps } from "../../types/Home/scroll";
import { useState } from "react";

export function ServiceCard({ title, icon,  image, items, onSpeakClick }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
      onClick={onSpeakClick}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Image */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        {/* Items List (Expandable) */}
        {items && (
          <ul className={`text-gray-600 dark:text-gray-300 text-sm space-y-1 ${!isExpanded ? "max-h-20 overflow-hidden" : ""}`}>
            {items.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        )}

        {items && items.length > 3 && (
          <button
            className="text-blue-500 mt-2 text-sm"
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
