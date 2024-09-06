"use client"

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Page() {
  const [reservations, setReservations] = useState([]);
  const [emailList, setEmailList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.nom.value;
    const email = form.email.value;
    const telephone = form.Telephone.value;
    const quartier = form.Quartier.value;
    const date = form.date.value;
    const time = form.time.value;
    const service = form.service.value;

    // Vérifier si l'email a déjà été utilisé
    if (emailList.includes(email)) {
      setErrorMessage('Cet email a déjà été utilisé pour une réservation.');
      return;
    }

    // Vérifier si le nombre maximum de réservations est atteint
    if (reservations.length >= 5) {
      setErrorMessage('Le nombre de places pour cette session est épuisé.');
      return;
    }

    // Ajouter la réservation si tout est correct
    setReservations([...reservations, { name, email, telephone, quartier, date, time, service }]);
    setEmailList([...emailList, email]);
    setErrorMessage('');
    setSuccessMessage('Réservation effectuée avec succès ! Vous serez redirigé sous peu.');

    // Redirection après un délai de 60 secondes
    setTimeout(() => {
      router.push('https://GPT.com');
    }, 60000); // 60000 ms = 60 secondes
  };

  return (
    <div>
      <Image
        src="/reservation.gif"
        width={200}
        height={200}
        alt="reservation de voiture"
        className="mx-auto flex items-center mt-16"
      />
      <div className="max-w-md mx-auto -mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-primary text-white text-center font-bold uppercase">
          Reserver votre cours pratique 1h
        </div>
        <form className="py-4 px-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="nom">
              Nom
            </label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nom"
              type="text"
              placeholder="Entrer votre nom"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Entrer votre e-mail"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="Telephone">
              N° Téléphone
            </label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Telephone"
              type="tel"
              placeholder="Entrer votre n° tel"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="Quartier">
              Où venons-nous vous récupérer ?
            </label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Quartier"
              type="text"
              placeholder="Entrer le quartier"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                Date
              </label>
              <Input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                type="date"
                placeholder="Sélectionner le jour"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
                Sélectionner l&apos;heure
              </label>
              <Input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time"
                type="time"
                placeholder="Sélectionner l'heure"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="service">
              Instructeur
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="service"
              name="service"
              required
            >
              <option value="">Sélectionner l&apos;instructeur</option>
              <option value="haircut">Haircut</option>
              <option value="coloring">Coloring</option>
            </select>
          </div>

          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

          <div className="flex items-center justify-center mb-4">
            <Button
              className="bg-primary text-white py-2 px-4 rounded-[4px] hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Valider votre réservation
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
