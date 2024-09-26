"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image';



function FormRegister() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [datedeNaissance, setDatedeNaissance] = useState('')
  const [villeDeNaissance, setVilleDeNaissance] = useState('')
  const [profession, setProfession] = useState('')
  const [nomDuPere, setNomDuPere] = useState('')
  const [nomDeLaMere, setNomDeLaMere] = useState('')
  const [villeDeresidence, setVilleDeresidence] = useState('')
  const [quartierderesidence, setQuartierderesidence] = useState('')
  const [coursDeFrancais, setCoursDeFrancais] = useState('')
  const [coursDAnglais, setCoursDAnglais] = useState('')
  const [permisoption, setPermisoption] = useState('')
  const [filecniPassport, setFilecniPassport] = useState('')
  const [filephoto4x4, setFilephoto4x4] = useState('')

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/googleSheets/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`File uploaded successfully with ID: ${data.fileId}`);
      } else {
        setMessage(`File upload failed: ${data.message}`);
      }
    } catch (err) {
      setMessage('Error during upload');
    }
    const form = {
      name,
      email,
      phone,
      datedeNaissance,
      villeDeNaissance,
      profession,
      nomDuPere,
      nomDeLaMere,
      villeDeresidence,
      quartierderesidence,
      coursDeFrancais,
      coursDAnglais,
      permisoption,
      filecniPassport,
      filephoto4x4
    };
  
    const response = await fetch('/api/googleSheets', {  // Chemin API interne corrigé
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });
  
    const content = await response.json();
  
    console.log(content);
    alert(content.data.tableRange);
  
    setName('');
    setEmail('');
    setPhone('');
    setDatedeNaissance('');
    setVilleDeNaissance('');
    setProfession('');
    setNomDuPere('');
    setNomDeLaMere('');
    setVilleDeresidence('');
    setQuartierderesidence('');
    setCoursDeFrancais('');
    setCoursDAnglais('');
    setPermisoption('');
    setFilecniPassport('');
    setFilephoto4x4('');
  
    console.log(form);
  };
  
  

  const [result, setResult] = useState();
  const router = useRouter(); // Utilisation de useRouter pour la redirection

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("En cours d'envoi ....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e35a9112-a665-4aa5-ae21-4187ab0dd6b3");

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
        router.push('/accueil/paiement'); // Redirige vers le lien désiré
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
                celles-ci seront utiliser pour le depot de votre dossier d&apos;examen au pret du minstére. Une fois bien remplir 
                cliquer sur valider l&apos;inscription vous serrez rediriger vers la fiche de paiement. 
              </p>
              <p className='mt-3 bg-red-200 px-4 py-2 rounded-[4px]'><span className='font-bold'>NB : </span> votre inscription ne sera valider qu&apos;après vérification des informations dans un delais de moins de 24h</p>


              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-primary">+237 691 608 533 </a>

                <address className="mt-2 not-italic text-[16px] font-light">Notre ligne est ouverte en cas de besoin d&apos;assistance</address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit}  className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input value={name} onChange={e => setName(e.target.value)}
                    className="w-full rounded-lg border-gray-200 p-3 border border-b-2 text-sm"
                    placeholder="Entrer votre nom et prenom complet"
                    type="text"
                    id="name"
                    name="name" // Ajout du name pour correspondre avec le backend
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)}
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Entrer votre adresse email"
                      type="email"
                      id="email"
                      name="email" // Ajout du name pour correspondre avec le backend
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input value={phone} onChange={e => setPhone(e.target.value)}
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Numéro de téléphone"
                      type="tel"
                      id="phone"
                      name="phone" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input value={datedeNaissance} onChange={e => setDatedeNaissance(e.target.value)}
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Entrer votre date de naissance"
                      type="date"
                      id="date"
                      name="datedeNaissance" // Ajout du name pour correspondre avec le backend
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="text">Phone</label>
                    <input value={villeDeNaissance} onChange={e => setVilleDeNaissance(e.target.value)}
                      className="w-full rounded-lg border-gray-200 p-3 border border-b-2 text-sm"
                      placeholder="Entrer votre lieu de naissance"
                      type="text"
                      id="text"
                      name="villeDeNaissance" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input  value={profession} onChange={e => setProfession(e.target.value)}
                    className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                    placeholder="Entrer votre profesion"
                    type="text"
                    id="name"
                    name="profession" // Ajout du name pour correspondre avec le backend
                  />
                </div>


                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input value={nomDuPere} onChange={e => setNomDuPere(e.target.value)}
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Entrer le nom complet de votre pére"
                      type="text"
                      id="text"
                      name="nomDuPere" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input value={nomDeLaMere} onChange={e => setNomDeLaMere(e.target.value)}
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Entrer le nom complet de votre mére"
                      type="text"
                      id="text"
                      name="nomDeLaMere" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                </div>

          
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Ville</label>
                    <input value={villeDeresidence} onChange={e => setVilleDeresidence(e.target.value)}
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Entrer votre ville"
                      type="text"
                      id="text"
                      name="villeDeresidence" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">Quartier</label>
                    <input value={quartierderesidence} onChange={e => setQuartierderesidence(e.target.value)}
                      className="w-full rounded-lg border-gray-200 border border-b-2 p-3 text-sm"
                      placeholder="Entrer votre quartier"
                      type="text"
                      id="text"
                      name="quartierderesidence" // Ajout du name pour correspondre avec le backend
                    />
                  </div>
                </div>





                <div>
                <p className='text-gray-700 mb-6'>En quelle langue souhaitez vous suivre le cours ? </p>

                <div className='flex gap-6 items-center'>
                <div className="items-top flex space-x-2">
                 <Checkbox id="terms1" checked={coursDeFrancais} onChange={e => setCoursDeFrancais(e.target.value)} />
                <div className="grid gap-1.5 leading-none">
                    <label htmlFor="Cours en Français" className="text-sm flex gap-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                   <Image  src='/france.webp' width={24} height={24} alt='francais' />
                    Français
                  </label>
                  </div>
                 </div>


                <div className="items-top flex space-x-2">
                 <Checkbox id="terms2" checked={coursDAnglais} onChange={e => setCoursDAnglais(e.target.value)}/>
                <div className="grid gap-1.5 leading-none">
                    <label htmlFor="Cours en Anglais" className="text-sm flex gap-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                   <Image  src='/usa.webp' width={24} height={24} alt='francais' />
                    Anglais
                  </label>
                  </div>
                 </div>
                </div>

                </div>




                 
                 <p className='text-gray-700'>Quel permis souhaitez-vous passer ? </p>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="Option1"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input value={permisoption} onChange={e => setPermisoption(e.target.value)} className="sr-only" id="Option1" type="radio" tabIndex="-1" name="Permi catégorie A" />

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
                      <input value={permisoption} onChange={e => setPermisoption(e.target.value)} className="sr-only" id="Option2" type="radio" tabIndex="-1" name="Permi catégorie B" />

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
                      <input value={permisoption} onChange={e => setPermisoption(e.target.value)} className="sr-only" id="Option3" type="radio" tabIndex="-1" name="Permi catégorie C" />

                      <span className="text-[15px]"> Permi catégorie C </span>
                    </label>
                    <span className='text-[12px]'>Pour le faire avoir plus de 20 ans</span>
                  </div>

                  <div>
                    <label
                      htmlFor="Option4"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input value={permisoption} onChange={e => setPermisoption(e.target.value)} className="sr-only" id="Option4" type="radio" tabIndex="-1" name="Permi catégorie D" />

                      <span className="text-[15px]"> Permi catégorie D </span>
                    </label>
                    <span className='text-[12px]'>Pour le faire avoir plus de 20 ans</span>
                  </div>


                  <div>
                    <label
                      htmlFor="Option5"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input value={permisoption} onChange={e => setPermisoption(e.target.value)} className="sr-only" id="Option5" type="radio" tabIndex="-1" name="Permi catégorie E" />

                      <span className="text-[15px]"> Permi catégorie E </span>
                    </label>
                    <span className='text-[12px]'>Pour le faire avoir plus de 20 ans</span>
                  </div>



                  <div>
                    <label
                      htmlFor="Option6"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input value={permisoption} onChange={e => setPermisoption(e.target.value)} className="sr-only" id="Option6" type="radio" tabIndex="-1" name="Permi catégorie F" />

                      <span className="text-[15px]"> Permi catégorie F </span>
                    </label>
                    <span className='text-[12px]'>Pour le faire avoir plus de 20 ans</span>
                  </div>


                  <div>
                    <label
                      htmlFor="Option7"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input value={permisoption} onChange={e => setPermisoption(e.target.value)} className="sr-only" id="Option7" type="radio" tabIndex="-1" name="Permi catégorie G" />

                      <span className="text-[15px]"> Permi catégorie G </span>
                    </label>
                    <span className='text-[12px]'>Pour le faire avoir plus de 20 ans</span>
                  </div>



                  <div>
                    <label
                      htmlFor="Option8"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input value={permisoption} onChange={e => setPermisoption(e.target.value)} className="sr-only" id="Option8" type="radio" tabIndex="-1" name="Permi catégorie T" />

                      <span className="text-[15px]"> Permi catégorie T </span>
                    </label>
                    <span className='text-[12px]'>Pour le faire avoir plus de 20 ans</span>
                  </div>


                </div>

                <div> 
                <input onChange={handleFileChange}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Téléverser une photo 4 x 4"
                  type="file"
                  id="fileInput"
                  name="filecniPassport" // Ajoutez le nom ici pour le backend
                  required
                />
                     <label for="fileInput" class="custom-file-label text-gray-500">Photocopie, ou Passport</label>
                </div>

                <div> 
                <input onChange={handleFileChange}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Téléverser une photo 4 x 4"
                  type="file"
                  id="fileInput"
                  name="filephoto4x4" // Ajoutez le nom ici pour le backend
                  required
                />
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