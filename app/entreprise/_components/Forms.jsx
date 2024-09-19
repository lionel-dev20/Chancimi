"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image';


function Forms() {
  const [result, setResult] = useState();
  const router = useRouter(); // Utilisation de useRouter pour la redirection

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("En cours d'envoi ....");
    const formData = new FormData(event.target);
  
    // Ajoutez le fichier téléversé
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
      formData.append('file', fileInput.files[0]);
    }
  
    formData.append("access_key", "e35a9112-a665-4aa5-ae21-4187ab0dd6b3");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
  
    const data = await response.json();
  
    if (data.success) {
      setResult("Formulaire soumis avec succes !");
      event.target.reset();
      
      // Attendre 2 à 3 secondes avant la redirection
      setTimeout(() => {
        router.push('/accueil'); // Redirige vers le lien désiré
      }, 2000); // 2000 millisecondes = 2 secondes
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
                Vous pouvez simplement téléverser votre bon de commande 
                pour le nombre de personne de votre entreprise souhaitant 
                préparer leur permis de conduire avec l&apos;accompagnement de Chancimi
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
                  <label className="sr-only" htmlFor="Nom de l'entreprise">Nom de l&apos;entreprise</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 border border-b-2 text-sm"
                    placeholder="Nom de l'entreprise"
                    type="text"
                    id="name"
                    name="Nom de l'entreprise" // Ajout du name pour correspondre avec le backend
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Entrer votre adresse email"
                      type="email"
                      id="email"
                      name="email" // Ajout du name pour correspondre avec le backend
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Numéro de téléphone"
                      type="tel"
                      id="phone"
                      name="Numéro de téléphone" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                </div>

                {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Entrer votre date de naissance"
                      type="date"
                      id="date"
                      name="Entrer votredate de naissance" // Ajout du name pour correspondre avec le backend
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="text">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 border border-b-2 text-sm"
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
                    className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                    placeholder="Entrer votre profesion"
                    type="text"
                    id="name"
                    name="Profession" // Ajout du name pour correspondre avec le backend
                  />
                </div> */}


                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Ville du siége de l'entreprise"
                      type="text"
                      id="text"
                      name="Ville du siége de l'entreprise" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Lieux exacte ou est situé l'entreprise "
                      type="text"
                      id="text"
                      name="Lieux exacte ou est situé l'entreprise" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                </div>

{/* 
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Ville</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Entrer votre ville"
                      type="text"
                      id="text"
                      name="Ville de résidence" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">Quartier</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Entrer votre quartier"
                      type="text"
                      id="text"
                      name="Quartier de résidence" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                </div> */}


                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Téléverser une photo 4 x 4"
                  type="file"
                  id="fileInput"
                  name="file" // Ajoutez le nom ici pour le backend
                  required
                />
                <label htmlFor="fileInput" className="custom-file-label text-gray-500">
                  Téléverser le bon de commande
                </label>


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

export default Forms;
