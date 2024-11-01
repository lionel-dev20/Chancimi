"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

const UssdPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour contrôler l'ouverture de la popup

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const isOrangeCameroon = (number) => {
    return number.startsWith("6") && number.length === 9; // Vérifie si le numéro commence par 6
  };

  const isMTNCameroun = (number) => {
    return number.startsWith("7") && number.length === 9; // Vérifie si le numéro commence par 7
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isOrangeCameroon(phoneNumber) && !isMTNCameroun(phoneNumber)) {
      setMessage(
        "Le numéro doit être un numéro valide (Orange ou MTN Cameroun)."
      );
      return;
    }
    // Clear message if the number is valid
    setMessage("");
  };

  const ussdOrangeCode = "#150*14*357550*656784922*99900#";
  const ussdMTNCode = "*126*14*679192659*99900#"; // Code USSD pour MTN

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

            <h1 className="text-lg font-bold mb-2">
              Montant du paiement 99,900 <sup className="mx-2">FCFA</sup>
            </h1>
            <p>Entrez juste votre numéro et payer en un clic</p>
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
                className="bg-green-500 text-white py-2 px-4 rounded ml-2"
              >
                Vérifier le numéro
              </Button>
            </form>

            {message && <p className="text-red-500 mt-4">{message}</p>}

            {isOrangeCameroon(phoneNumber) && (
              <a
                href={`tel:${ussdOrangeCode}`}
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
              >
                Valider le numéro
              </a>
            )}

            {isMTNCameroun(phoneNumber) && (
              <a
                href={`tel:${ussdMTNCode}`}
                className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded"
              >
                Exécuter le code USSD 
              </a>
            )}

            <p className="mt-8">
              Paiement par Orange money
              <span className="text-md font-bold mx-4">
                <br />
                #150*14*357550*656784922*Montant#
              </span>
              <br />
              paiement MTN Momo <br />
              <span className="text-md font-bold mx-4">
                *126*14*679192659*Montant#
              </span>
              <br />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UssdPage;
