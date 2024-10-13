"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "/components/ui/input";
import { Button } from "/components/ui/button";
import { UserCircle, Upload, ArrowBigRightIcon, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    const [companyName, setCompanyName] = useState("");
    const [phonecompany, setPhonecompany] = useState("");
    const [siergesocial, setSiergesocial] = useState("");
    const [emailcompany, setEmailcompany] = useState("");
    const [bondecommande, setBondecommande] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [countdown, setCountdown] = useState(5);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Upload des fichiers sur Cloudinary
        const uploadedbondecommande = bondecommande ? await cloudinaryUpload(bondecommande) : "";

        const data = {
            Entreprise: companyName,
            Telephone: phonecompany,
            Siege_social: siergesocial,
            Email: emailcompany,
            Bon_de_commande: uploadedbondecommande,
        };

        // Envoie les données à la Google Sheet
        axios
            .post(
                `https://sheet.best/api/sheets/ce4087b5-137d-4560-b0c8-b2ff05415f99/tabs/PermisEntreprise`,
                data
            )
            .then((response) => {
                console.log(response);
                // Réinitialise les champs du formulaire
                setCompanyName("");
                setPhonecompany("");
                setSiergesocial("");
                setEmailcompany("");
                setBondecommande(null);
                setShowPopup(true);
            })
            .finally(() => setIsLoading(false));
    };

    // Gestion du compte à rebours pour la redirection
    useEffect(() => {
        let timer;
        if (showPopup && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);
        } else if (countdown === 0) {
            clearInterval(timer);
            window.location.href = '/'; // Redirection
        }
        return () => clearInterval(timer);
    }, [showPopup, countdown]);

    // Affichage du loader si en cours de soumission
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="mt-4">Envoie de votre formulaire en cours, veuillez patienter quelques instants...</p>
            </div>
        );
    }

    // Affichage du popup de redirection
    if (showPopup) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <Card className="w-[510px] p-10">
                    <CardHeader>
                        <CardTitle>Redirection en cours...</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mt-8">Bravo, votre formulaire a été soumis avec succès. Vous serez redirigé vers la page d&apos;accueil dans {countdown} secondes.</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto h-screen flex flex-col px-4 mt-4">
            <div>
                <h2 className="sm:text-3xl text-2xl font-extrabold text-center text-gray-800">
                    Formulaire d&apos;inscription entreprise
                </h2>
                <p className="w-xl my-8 text-gray-700 sm:text-md block">
                    Bienvenue sur
                    <span className="px-3 py-1 rounded-sm bg-red-100 text-gray-800">
                        Chancimi
                    </span>
                    Votre auto-école en ligne ; Pour valider votre inscription, veuillez
                    remplir correctement le formulaire suivant. Après réception du bon de commande et vérification des informations,
                    le ou les comptes des personnes qui suivront la formation seront activés dans un délai de 24h. Chancimi vous remerci pour votre confiance. 
                    Pour en savoir plus vous pouvez consultez notre offre de service 👉 <Link href='/offre-de-service.pdf' className="text-xl text-blue-700 font-bold">Ici</Link>
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
                    <h2 className="text-xl font-bold">Informations Entreprise</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label>Nom de l&apos;entreprise</label>
                        <Input
                            onChange={(e) => setCompanyName(e.target.value)}
                            value={companyName}
                            type="text"
                            placeholder="Ex: Mba Thierry"
                            required
                        />
                    </div>
                    <div>
                        <label>N° Téléphone</label>
                        <Input
                            onChange={(e) => setPhonecompany(e.target.value)}
                            value={phonecompany}
                            type="phone"
                            placeholder="Ex: 671717272"
                            required
                        />
                    </div>
                    <div>
                        <label>Siége Social</label>
                        <Input
                            onChange={(e) => setSiergesocial(e.target.value)}
                            value={siergesocial}
                            type="text"
                            placeholder="Ex: Douala Akwa"
                            required
                        />
                    </div>
                    <div>
                        <label>E-mail de l&apos;entreprise</label>
                        <Input
                            onChange={(e) => setEmailcompany(e.target.value)}
                            value={emailcompany}
                            type="email"
                            placeholder="Ex: infoline@company.com"
                            required
                        />
                    </div>
                </div>

                {/* Language and documents */}
                <div className="grid grid-cols-1 my-2">
                    <div className="flex items-center space-x-2 my-4">
                        <Upload className="h-6 w-6" />
                        <h2 className="text-xl font-bold">Documents importants</h2>
                    </div>
                    <div>
                        <label>Téléverser votre bon de commande</label>
                        <Input
                            onChange={(e) => setBondecommande(e.target.files[0])}
                            id="bondecommande"
                            name="bondecommande"
                            type="file"
                            required
                        />
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
                    <Button type="submit" className="w-full sm:text-[1rem]">
                        Valider les informations maintenant <ArrowBigRightIcon className="ml-4" />
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default NewFormRegister;
