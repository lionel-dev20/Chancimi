'use client';

import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useState } from 'react';

const UssdPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour contrôler l'ouverture de la popup

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const isOrangeCameroon = (number) => {
    // Vérifie si le numéro commence par 6 (pour Orange au Cameroun)
    return number.startsWith('6') && number.length === 9;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isOrangeCameroon(phoneNumber)) {
      setMessage('Le numéro doit être un numéro Orange Cameroun.');
      return;
    }
    // Clear message if the number is valid
    setMessage('');
  };

  const ussdCode = '#150*14*357550*656784922*45000#';

  // Fonction pour ouvrir/fermer la modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Le bouton qui ouvre la popup */}
      <Button
        onClick={openModal}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Lancez le paiement
      </Button>

      {/* La modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-md shadow-md border-[0.5] relative">
            {/* Bouton pour fermer la popup */}
            <Button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 flex items-center justify-center shadow-lg"
            >
              <X className="text-black" />
            </Button>

            <h1 className='text-lg font-bold mb-2'>Montant du paiement 45,000 <sup className='mx-2'>FCFA</sup></h1>
            <p>Entrez juste votre numéro et payer en un click</p>
            <form onSubmit={handleSubmit} className="mt-4">
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
                className="bg-green-500 text-white py-2 px-4 rounded ml-2 mt-4 sm:mt-4 w-full sm:w-auto"
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
                Valider le paiement ici
              </a>
            )}

            <p className='mt-8'>Vous pouvez éxécuter vous le code 
              suivant pour éffectuer <br /> votre paiement<span className='text-md font-bold mx-4'> #150*14*357550*656784922*Montant#</span><br />
              nom du recepteur <span className='font-bold'>Hecheket fete</span>  le montant est celui de <br />la formule que vous souhaitez payer 
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UssdPage;
