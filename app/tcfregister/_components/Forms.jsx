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
                Préparer votre examen de teste de langue en toute tranquilité grace notre centre Chancimi.
                Des cours en présentiels de en soirée dans notre centre à partir de 18h. 
              </p>
              <p className='mt-3 bg-red-200 px-4 py-2 rounded-[4px]'><span className='font-bold'>NB : </span> Les inscriptions se font uniquement en ligne aucun frais supplémentaire n&apos;est requis . </p>


              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-primary">+237 691 608 533 </a>

                <address className="mt-2 not-italic text-[16px] font-light">Notre ligne est ouverte en cas de besoin d&apos;assistance</address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={onSubmit} className="space-y-4">
                {/* <div>
                  <label className="sr-only" htmlFor="Nom de l'entreprise">Nom de l&apos;entreprise</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 border border-b-2 text-sm"
                    placeholder="Nom de l'entreprise"
                    type="text"
                    id="name"
                    name="Nom de l'entreprise" // Ajout du name pour correspondre avec le backend
                  />
                </div> */}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="text">Nom complet</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Entrer votre nom complet"
                      type="email"
                      id="email"
                      name="Nom complet" // Ajout du name pour correspondre avec le backend
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="text">Prénoms</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Entrer votre prénom"
                      type="tel"
                      id="phone"
                      name="Entrer votre prénom" // Ajout du name pour correspondre avec le backend
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
                      placeholder="Entrez votre adresse E-mail"
                      type="text"
                      id="text"
                      name="Entrez votre adresse E-mail" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">N° Téléphone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Entrez votre N° Téléphone"
                      type="text"
                      id="text"
                      name="N° Téléphone" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                </div>


                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="text">Votre dernier diplome </label>
                    <input
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Quel est votre diplome le plus élévè "
                      type="text"
                      id="text"
                      name="Diplome le plus élévè" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">Ou l&apos;avez-vous obtenu ?</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Ou l'avez-vous obtenu ?"
                      type="text"
                      id="text"
                      name="Ou avez-vous obtenu votre diplome ?" // Ajout du name pour correspondre avec le backend
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
                  Téléverser votre CNI
                </label>

                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Téléverser une photo 4 x 4"
                  type="file"
                  id="fileInput"
                  name="file" // Ajoutez le nom ici pour le backend
                  required
                />
                <label htmlFor="fileInput" className="custom-file-label text-gray-500">
                  Téléverser une photo 4X4 fond blanc
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
