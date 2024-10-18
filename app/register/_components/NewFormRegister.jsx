"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "/components/ui/input";
import { Button } from "/components/ui/button";
import { Home, UserCircle, Globe, Upload, ArrowBigRightIcon, Loader2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "/components/ui/card";
import { Checkbox } from "/components/ui/checkbox";
import Link from "next/link";

// Configuration Cloudinary
const cloudinaryUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "i90ztenm"); // Ton preset Cloudinary

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
  const [citylive, setCitylive] = useState("");
  const [quaterlive, setQuaterlive] = useState("");
  const [language, setLanguage] = useState("");
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [nationalIdPhoto, setNationalIdPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const uploadedPassportPhoto = passportPhoto
        ? await cloudinaryUpload(passportPhoto)
        : "";
      const uploadedNationalIdPhoto = nationalIdPhoto
        ? await cloudinaryUpload(nationalIdPhoto)
        : "";

      // Formater la date pour l'afficher correctement dans la Google Sheet
      const dateObject = new Date(dateborn);
      const formattedDateborn = dateObject.toLocaleDateString("fr-CA"); // Format YYYY-MM-DD

      const data = {
        Nom: name,
        Telephone: phone,
        Email: email,
        Date_de_naissance: formattedDateborn, // Utilise la date formatée
        Ville_de_naissance: borncity,
        Nom_du_pere: fathername,
        Nom_de_la_mere: mothername,
        Ville_de_residence: citylive,
        Quartier_de_residence: quaterlive,
        Language: language,
        Photo_Cni_ou_Passport: uploadedNationalIdPhoto,
        Photo_4x4: uploadedPassportPhoto,
      };

      await axios.post(
        `https://sheet.best/api/sheets/ce4087b5-137d-4560-b0c8-b2ff05415f99/tabs/InscriptionPermis`,
        data
      );

      // Réinitialise les champs du formulaire
      setName("");
      setPhone("");
      setEmail("");
      setDateborn("");
      setBorncity("");
      setFathername("");
      setMothername("");
      setCitylive("");
      setQuaterlive("");
      setLanguage("");
      setNationalIdPhoto(null);
      setPassportPhoto(null);
      setShowPopup(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (showPopup && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "/accueil/paiement"; // Redirection
    }
    return () => clearInterval(timer);
  }, [showPopup, countdown]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="mt-4">
          Envoie de votre formulaire en cours, veuillez patienter quelques instants
          svp...
        </p>
      </div>
    );
  }

  if (showPopup) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Card className="w-[510px] p-10">
          <CardHeader>
            <CardTitle>Redirection en cours...</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mt-8">
              Vous serez redirigé vers la page de paiement dans {countdown}{" "}
              secondes.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

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
          </span>
          votre auto-école en ligne; Pour valider votre inscription, veuillez
          remplir correctement le formulaire suivant. Afin de valider votre
          inscription, ces informations seront vérifiées et validées si tout est
          correct en moins de 24h.
        </p>
      </div>
      {/* Formulaire */}
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
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {/* Date de naissance */}
            <div>
              <label>Date de naissance</label>
              <Input
                onChange={(e) => setDateborn(e.target.value)}
                value={dateborn}
                type="date"
                required
              />
            </div>
            {/* Ville de naissance */}
            <div>
              <label>Ville de naissance</label>
              <Input
                onChange={(e) => setBorncity(e.target.value)}
                value={borncity}
                type="text"
                placeholder="Ex: Yaoundé"
                required
              />
            </div>
          </div>
          <div>
            <label>Nom du père</label>
            <Input
              onChange={(e) => setFathername(e.target.value)}
              value={fathername}
              type="text"
              placeholder="Ex: Jean-jacques Mba"
              required
            />
          </div>
          <div>
            <label>Nom de la mère</label>
            <Input
              onChange={(e) => setMothername(e.target.value)}
              value={mothername}
              type="text"
              placeholder="Ex: Thémarie Tsafack"
              required
            />
          </div>
        </div>

        {/* Informations sur l'adresse */}
        <div className="flex items-center space-x-2 my-6">
          <Home className="h-6 w-6" />
          <h2 className="text-xl font-bold">Information sur l&apos;adresse</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Ville de résidence</label>
            <Input
              onChange={(e) => setCitylive(e.target.value)}
              value={citylive}
              type="text"
              placeholder="Ex: Douala"
              required
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
            />
          </div>
        </div>

        {/* Langue et documents */}
        <div className="grid grid-cols-2 gap-4 my-2">
          <div>
            <div className="flex items-center space-x-2 my-4">
              <Globe className="h-6 w-6" />
              <h2 className="text-xl font-bold">Préférence pour le cours en ?</h2>
            </div>
            <RadioGroup name="language" value={language} onValueChange={(value) => setLanguage(value)}>
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
              <h2 className="text-xl font-bold">Documents importants</h2>
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

        <div className="items-top flex space-x-2 my-4">
          <Checkbox id="terms1" required />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accepter les termes et conditions <Link href="/REGLEMENT_RULES_CHANCIMI.pdf" target="_blank">ici</Link>
            </label>
            <p className="text-[12px] text-muted-foreground">
              Vous acceptez nos conditions d&apos;utilisation et notre politique de confidentialité.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Button type="submit" className="w-full sm:text-[1rem]">Valider les informations maintenant <ArrowBigRightIcon className="ml-4" /></Button>
        </div>
      </form>
    </div>
  );
}

export default NewFormRegister;













