import { Instagram, Youtube, Facebook, Music2 } from "lucide-react";

export default function Links() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6 text-pink-500" />,
      url: "https://instagram.com",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6 text-red-500" />,
      url: "https://youtube.com",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6 text-blue-500" />,
      url: "https://facebook.com",
    },
    {
      name: "TikTok",
      icon: <Music2 className="w-6 h-6 text-black dark:text-white" />, // TikTok icon alt
      url: "https://tiktok.com",
    },
  ];

  return (
    <div className="max-w-md mx-auto space-y-4 py-10">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition"
        >
          {/* icon */}
          {item.icon}

          {/* name */}
          <span className="text-lg font-semibold text-white">
            {item.name}
          </span>
        </a>
      ))}
    </div>
  );
}
