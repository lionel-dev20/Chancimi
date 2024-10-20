import { Button } from '@/components/ui/button';
import { useState } from 'react';

const UssdPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const isOrangeCameroon = (number: string) => {
    // Vérifie si le numéro commence par 6 (pour Orange au Cameroun)
    return number.startsWith('6') && number.length === 9;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    <div>
      <h1>Exécuter un code USSD</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={phoneNumber}
          onChange={handleInputChange}
          placeholder="Entrez votre numéro"
          required
        />
        <Button type="submit">Exécuter USSD</Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UssdPage;
