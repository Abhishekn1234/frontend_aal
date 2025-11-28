
import { motion } from "framer-motion";

interface Service {
  title: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: Service[];
}

export const SpeakToUsModal: React.FC<ModalProps> = ({ isOpen, onClose, services }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-xl p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Speak to Us</h2>
        <form className="space-y-4">
          {/* First row: Firstname & Lastname */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 border rounded px-3 py-2"
            />
          </div>

          {/* Second row: Email & Company Name */}
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="flex-1 border rounded px-3 py-2"
            />
          </div>

          {/* Third row: UAE Code + Phone */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="+971"
              className="w-20 border rounded px-3 py-2"
              value="+971"
              readOnly
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 border rounded px-3 py-2"
            />
          </div>

          {/* Fourth row: Select Area of Interest */}
          <select className="w-full border rounded px-3 py-2">
            <option value="">Select Area of Interest</option>
            {services.map((service, idx) => (
              <option key={idx} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>

          {/* Submit button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};