"use client"
import { useState } from "react";
import { useZxing } from "react-zxing";

interface BarcodeScannerProps {
  onClose: () => void;
}

export const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onClose }) => {
  const [result, setResult] = useState("");
  const [scannerActive, setScannerActive] = useState(true);

  const { ref } = useZxing({
    onDecodeResult(decodedResult) {
      setResult(decodedResult.getText());
      setScannerActive(false); // Set scanner to inactive after getting a result
    },
  });

  const handleRestartScanner = () => {
    setResult("");
    setScannerActive(true);
  };

  return (
    <>
      {scannerActive && <video ref={ref} />}
      <p>
        <span>Last result:</span>
        <span className="text-white">{result}</span>
      </p>

      {/* Add your UI elements here */}

      {result && (
        <button onClick={handleRestartScanner}>Restart Scanner</button>
      )}
    </>
  );
};
