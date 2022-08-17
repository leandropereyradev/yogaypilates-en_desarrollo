import React from "react";

export default function Video() {
  return (
    <div className="w-full h-screen">
      <video src="/image/fondo_lg.mp4" autoPlay loop muted className="w-full h-full object-cover"></video>
    </div>
  );
}
