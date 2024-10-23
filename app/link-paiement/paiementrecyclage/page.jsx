'use client';

import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useState } from 'react';

const UssdPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionCount, setSessionCount] = useState(1);
  const sessionPrice = 7000;

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSessionChange = (change) => {
    setSessionCount(prevCount => Math.max(1, prevCount + change));
  };

  const isOrangeCameroon = (number) => {
    return number.startsWith('6') && number.length === 9;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isOrangeCameroon(phoneNumber)) {
      setMessage('Le numéro doit être un numéro Orange Cameroun.');
      return;
    }
    setMessage('');
  };

  const totalAmount = sessionCount * sessionPrice;
  const ussdCode = `#150*14*357550*656784922*${totalAmount}#`;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button
        onClick={openModal}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Lancez le paiement
      </Button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-md shadow-md border-[0.5] relative">
            <Button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 flex items-center justify-center shadow-lg"
            >
              <X className="text-black" />
            </Button>

            <h1 className='text-lg font-bold'>Montant du paiement: {totalAmount} <sup className='mx-2'>FCFA</sup></h1>
            <form onSubmit={handleSubmit} className="sm:mt-4">
              <div className='flex flex-col sm:flex-row sm:items-center gap-6 mb-4'>
               <p>Combien de sessions souhaitez-vous reservez stp ?</p> 
                <div className="flex items-center sm:mt-4 mt-1 mb-4">
              <Button onClick={() => handleSessionChange(-1)} disabled={sessionCount <= 1} className="bg-[#000a2b] text-white py-2 px-4 rounded">-</Button>
              <span className="mx-4">{sessionCount}</span>
              <Button onClick={() => handleSessionChange(1)} className="bg-[#000a2b] text-white py-2 px-4 rounded">+</Button>
            </div>
              </div>
              <input
                className="border border-[0.5] shadow-sm px-4 py-2 h-[30] rounded-sm mr-4 focus:border-none"
                type="text"
                value={phoneNumber}
                onChange={handleInputChange}
                placeholder="Entrez votre numéro"
                required
              />
              <Button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded ml-2 mt-2"
              >
                Vérifier le numéro
              </Button>
            </form>

            {message && <p className="text-red-500 mt-4">{message}</p>}

            {isOrangeCameroon(phoneNumber) && (
              <a
                href={`tel:${ussdCode}`}
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
              >
                Exécuter le code USSD
              </a>
            )}

           

            <p className='mt-8'>Vous pouvez exécuter le code 
              suivant pour effectuer <br /> votre paiement<span className='text-md font-bold mx-4'> #150*14*357550*656784922*Montant#</span><br />
              Le montant est celui de la formule que vous souhaitez payer 
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UssdPage;
