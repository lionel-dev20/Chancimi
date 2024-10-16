'use client'


import { useState } from 'react';

const UssdPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

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

    // Code USSD à exécuter
    const ussdCode = '#150*14*357550*656784922*200#';
    // Logique pour exécuter le code USSD
    window.open(`tel:${ussdCode}`, '_self');
  };

  return (
    <div className='mx-auto flex items-center justify-center h-screen'>
      <div className='flex-col bg-white p-10 rounded-md shadow-md border-[0.5]'>
      <h1>Exécuter un code USSD</h1>
      <form onSubmit={handleSubmit} className='mt-4'>
        <input
          className='border border-[0.5] shadow-sm px-4  py-2 h-[30] rounded-sm  mr-4 focus:border-none'
          type="text"
          value={phoneNumber}
          onChange={handleInputChange}
          placeholder="Entrez votre numéro"
          required
        />
        <button type="submit" className='bg-black rounded-md text-white px-8 py-2'>Exécuter USSD</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default UssdPage;
