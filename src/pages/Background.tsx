import type { ReactNode } from "react";

export default function BackgroundWrapper({
  children,
  mousePosition,
}: {
  children: ReactNode;
  mousePosition: { x: number; y: number };
}) {
  return (
    <div
      className="w-full min-h-screen text-white overflow-x-hidden"
      style={{
        background: `
          radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(120, 119, 198, 0.15), transparent 80%),
          linear-gradient(135deg, #0a192f 0%, #000428 50%, #0a192f 100%)
        `,
      }}
    >
      {children}
    </div>
  );
}
