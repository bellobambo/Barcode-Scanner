"use client"
// "use client"
import { useState } from 'react';
import { BarcodeScanner } from './components/scanner';

export default function Home() {
  const [scannerOpen, setScannerOpen] = useState(false);

  const handleOpenScanner = () => {
    setScannerOpen(true);
  };

  const handleCloseScanner = () => {
    setScannerOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleOpenScanner} className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded">
        Open Scanner
      </button>
      {scannerOpen && (
        <>
          <BarcodeScanner onClose={handleCloseScanner} />
          <button onClick={handleCloseScanner} className="cursor-pointer bg-red-500 text-white px-4 py-2 mt-4 rounded">
            Close Scanner
          </button>
        </>
      )}
    </main>
  );
}

