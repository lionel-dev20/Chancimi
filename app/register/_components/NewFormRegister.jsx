"use client";

import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Home, UserCircle, Globe, Upload, ArrowBigRightIcon } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Configuration Cloudinary
const cloudinaryUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "i90ztenm"); // Ton preset Cloudinary
  
    // Utilise ton vrai nom de cloud dans l'URL
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dvatpjm6e/image/upload`, 
      formData
    );
    
    return response.data.url; // Renvoie l'URL de l'image
  };

function NewFormRegister() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dateborn, setDateborn] = useState("");
  const [borncity, setBorncity] = useState("");
  const [fathername, setFathername] = useState("");
  const [mothername, setMothername] = useState("");
  const [citylive, SetCitylive] = useState("");
  const [quaterlive, setQuaterlive] = useState("");
  const [language, setLanguage] = useState("");
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [nationalIdPhoto, setNationalIdPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload des fichiers sur Cloudinary
    const uploadedPassportPhoto = passportPhoto ? await cloudinaryUpload(passportPhoto) : "";
    const uploadedNationalIdPhoto = nationalIdPhoto ? await cloudinaryUpload(nationalIdPhoto) : "";

    const data = {
      Nom: name,
      Telephone: phone,
      Email: email,
      Date_de_naissance: dateborn,
      Ville_de_naissance: borncity,
      Nom_du_pere: fathername,
      Nom_de_la_mere: mothername,
      Ville_de_residence: citylive,
      Quartier_de_residence: quaterlive,
      Language: language,
      Photo_Cni_ou_Passport: uploadedNationalIdPhoto,
      Photo_4x4: uploadedPassportPhoto,
    };

    // Envoie les données à la Google Sheet
    axios
      .post(
        "https://sheet.best/api/sheets/ce4087b5-137d-4560-b0c8-b2ff05415f99",
        data
      )
      .then((response) => {
        console.log(response);
        // Réinitialise les champs du formulaire
        setName("");
        setPhone("");
        setEmail("");
        setDateborn("");
        setBorncity("");
        setFathername("");
        setMothername("");
        SetCitylive("");
        setQuaterlive("");
        setLanguage("");
        setNationalIdPhoto(null);
        setPassportPhoto(null);
      });
  };


  return (
    <div className="max-w-4xl mx-auto h-screen my-auto">
      <div>
        <h2 className="sm:text-3xl font-extrabold text-center text-gray-800">
          Formulaire d&apos;inscription
        </h2>
        <p className="w-xl my-8 text-gray-700 sm:text-md block">
          Bienvenue sur{" "}
          <span className="px-3 py-1 rounded-sm bg-red-100 text-gray-800">
            Chancimi
          </span>{" "}
          votre aut ecole en ligne; Pour valider votre inscription veillez
          remplir correctement le formulaire suivant. Afin de valider votre
          inscription ces informations seront vérifiées et validées si tout est
          correcte en mois de 24h.
        </p>
      </div>
      {/* form */}
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-4 pb-6 mb-2 sm:px-9 pt-6 sm:pb-8 sm:mb-4"
      >
        <div className="flex items-center space-x-2 my-4">
          <UserCircle className="h-6 w-6" />
          <h2 className="text-xl font-bold">Informations personnelles</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Nom complet</label>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Ex: Mba Thierry"
              required
              className=""
            />
          </div>
          <div>
            <label>N° Téléphone</label>
            <Input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="phone"
              placeholder="Ex: 671717272"
              required
              className=""
            />
          </div>
          <div>
            <label>Adresse e-mail</label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Ex: thierrymba@gmail.com"
              required
              className=""
            />
          </div>


          <div className="grid sm:grid-cols-2 gap-2">
            {/* date de naissance */}
          <div>
            <label>Date de naissance</label>
            <Input
              onChange={(e) => setDateborn(e.target.value)}
              value={dateborn}
              type="date"
              placeholder="enter your city"
              required
              className=""
            />
          </div>

          {/* ville de naissance */}
          
          <div>
            <label>Ville de naissance</label>
            <Input
              onChange={(e) => setBorncity(e.target.value)}
              value={borncity}
              type="text"
              placeholder="Ex: Yaoundé"
              required
              className=""
            />
          </div>

          </div>
          
          <div>
            <label>Nom du pére</label>
            <Input
              onChange={(e) => setFathername(e.target.value)}
              value={fathername}
              type="text"
              placeholder="Ex: Jean-jacques Mba"
              required
              className=""
            />
          </div>
          <div>
            <label>Nom de la mére</label>
            <Input
              onChange={(e) => setMothername(e.target.value)}
              value={mothername}
              type="text"
              placeholder="Ex: Thémarie Tsafack"
              required
              className=""
            />
          </div>
        </div>

        {/* information sur adresse */}

        <div className="flex items-center space-x-2 my-6">
          <Home className="h-6 w-6" />
          <h2 className="text-xl font-bold">Information sur l&apos;adresse</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Ville de résidence</label>
            <Input
              onChange={(e) => SetCitylive(e.target.value)}
              value={citylive}
              type="text"
              placeholder="Ex: Douala"
              required
              className=""
            />
          </div>
          <div>
            <label>Quartier de résidence</label>
            <Input
              onChange={(e) => setQuaterlive(e.target.value)}
              value={quaterlive}
              type="text"
              placeholder="Ex: Bonamoussadi"
              required
              className=""
            />
          </div>
        </div>

        {/* Language and documents */}
        <div className="grid grid-cols-2 gap-4 my-2">
          <div>
            <div className="flex items-center space-x-2 my-4">
              <Globe className="h-6 w-6" />
              <h2 className="text-xl font-bold">
                Préférence pour le cours en ?
              </h2>
            </div>
            <RadioGroup name="language" value={language} // Valeur du groupe de radio
              onValueChange={(value) => setLanguage(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Français" id="French" />
                <label htmlFor="French">Français</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Anglais" id="English" />
                <label htmlFor="English">Anglais</label>
              </div>
            </RadioGroup>
          </div>


          <div className="space-y-4">
              <div className="flex items-center space-x-2 my-4">
                <Upload className="h-6 w-6" />
                <h2 className="text-xl font-bold">Documents important</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label>Téléverser une photo de votre CNI ou Passport</label>
                  <Input
                    onChange={(e) => setNationalIdPhoto(e.target.files[0])}
                    id="nationalIdPhoto"
                    name="nationalIdPhoto"
                    type="file"
                    required
                  />
                </div>
                <div>
                  <label>Téléverser une photo (4x4)</label>
                  <Input 
                    onChange={(e) => setPassportPhoto(e.target.files[0])}
                    id="passportPhoto"
                    name="passportPhoto"
                    type="file"
                    required
                  />
                </div>
              </div>
            </div>
        </div>

        <div className="mt-8">
        <Button type="submit" className="w-full sm:text-[1rem]">Valider les informations maintenant <ArrowBigRightIcon className="ml-4"/></Button>
        </div>
      </form>
    </div>
  );
}

export default NewFormRegister;