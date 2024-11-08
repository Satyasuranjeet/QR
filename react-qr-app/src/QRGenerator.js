import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";  // Correct import

function QRGenerator() {
  const [text, setText] = useState("");

  return (
    <div className="qr-generator-container bg-white p-6 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text to generate QR code"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 mb-4 w-full border rounded-md focus:outline-none focus:border-blue-400"
      />
      <div className="flex justify-center mt-4">
        {text && <QRCodeCanvas value={text} />} {/* Using QRCodeCanvas instead of QRCode */}
      </div>
    </div>
  );
}

export default QRGenerator;
