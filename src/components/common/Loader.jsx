import React from "react";

export default function Loader({
  size = "md",
  text = "Loading...",
  fullScreen = false,
}) {
  const sizes = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-4",
    lg: "w-16 h-16 border-4",
  };

  const content = (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`
          ${sizes[size]}
          rounded-full
          border-primary/20
          border-t-primary
          animate-spin
        `}
      />

      {text && (
        <p className="text-sm text-on-surface-variant tracking-wide">{text}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        {content}
      </div>
    );
  }

  return content;
}
