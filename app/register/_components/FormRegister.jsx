"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function FormRegister() {
  const [result, setResult] = useState();
  const router = useRouter(); // Utilisation de useRouter pour la redirection

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("En cours d'envoi ....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bd6bad39-e31e-43b9-8050-3c833765bc86");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Formulaire soumis avec succes !");
      event.target.reset();

      // Attendre 2 à 3 secondes avant la redirection
      setTimeout(() => {
        router.push('https://me.lygosapp.com/bvRx6FHV'); // Redirige vers le lien désiré
      }, 2000); // 3000 millisecondes = 3 secondes

    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <section className="bg-gray-50 ">
        <div className="mx-auto max-w-screen-xl h-screen px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-[16px] font-light">
                Nous vous invitons a remplir correctement le Formulaire ci contre avec des informations exacte, car
                celles-ci seront utiliser pour le depot de votre dossier d&apos;examen à pret du minstére. Une fois bien remplir 
                cliquer sur valider l&apos;inscription vous serrez rediriger vers la fiche de paiement. 
              </p>
              <p className='mt-3 bg-red-200 px-4 py-2 rounded-[4px]'><span className='font-bold'>NB : </span> votre inscription ne sera valider qu&apos;après vérification des informations dans un delais de moins de 24h</p>


              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-primary">+237 691 608 533 </a>

                <address className="mt-2 not-italic text-[16px] font-light">Notre ligne est ouverte en cas de besoin d&apos;assistance</address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Entrer votre nom et prenom complet"
                    type="text"
                    id="name"
                    name="name" // Ajout du name pour correspondre avec le backend
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Entrer votre adresse email"
                      type="email"
                      id="email"
                      name="email" // Ajout du name pour correspondre avec le backend
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Entrer votre date de naissance"
                      type="date"
                      id="date"
                      name="Entrer votredate de naissance" // Ajout du name pour correspondre avec le backend
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="text">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Entrer votre lieu de naissance"
                      type="text"
                      id="text"
                      name="City born" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Entrer votre profesion"
                    type="text"
                    id="name"
                    name="Profession" // Ajout du name pour correspondre avec le backend
                  />
                </div>


                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Entrer le nom complet de votre pére"
                      type="text"
                      id="text"
                      name="Nom du père" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Entrer le nom complet de votre mére"
                      type="text"
                      id="text"
                      name="Nom de la mére" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                </div>
                 
                 <p className='text-gray-400'>Quel permis souhaitez-vous passer ? </p>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="Option1"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input className="sr-only" id="Option1" type="radio" tabIndex="-1" name="Permi catégorie A" />

                      <span className="text-[15px] text-gray-600"> Permi catégorie A </span>
                    </label>
                    <span className='text-[12px]'>Pour le faire avoir plus de 16 ans</span>
                  </div>

                  <div>
                    <label
                      htmlFor="Option2"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input className="sr-only" id="Option2" type="radio" tabIndex="-1" name="Permi catégorie B" />

                      <span className="text-[15px]"> Permi catégorie B </span>
                    </label>
                    <span className='text-[12px]'>Pour le faire avoir plus de 18 ans</span>
                  </div>

                  <div>
                    <label
                      htmlFor="Option3"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input className="sr-only" id="Option3" type="radio" tabIndex="-1" name="Permi catégorie C" />

                      <span className="text-[15px]"> Permi catégorie C </span>
                    </label>
                    <span className='text-[12px]'>Pour le faire avoir plus de 20 ans</span>
                  </div>
                </div>

                <div> 
                   <input className="w-full rounded-lg border-gray-200 p-3 text-sm" 
                   placeholder="Téléverser la photocopie de vote CNI, Récépicé valide, ou Passport"
                    type="file" id="fileInput" class="hidden-input" required />
                     <label for="fileInput" class="custom-file-label text-gray-500">Photocopie, ou Passport</label>
                </div>

                <div> 
                   <input className="w-full rounded-lg border-gray-200 p-3 text-sm" 
                   placeholder="Téléverser une photo 4 x 4"
                    type="file" id="fileInput" class="hidden-input" required />
                     <label for="fileInput" class="custom-file-label text-gray-500">Téléverser une photo 4 x 4</label>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Valider l&apos;inscription
                  </button>
                </div>
              </form>
              {result && <p className="mt-4 text-center text-green-600">{result}</p>} {/* Affiche le message de succès */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormRegister;
