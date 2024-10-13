'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Label } from "/components/ui/label"
import { RadioGroup, RadioGroupItem } from "/components/ui/radio-group"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "/components/ui/card"
import { Loader2, UserCircle2, Home, Globe, Car, Upload } from 'lucide-react'

export default function SingleStepForm() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phoneNumber: '', email: '', fatherName: '', motherName: '',
    city: '', neighborhood: '', language: '', licenseType: '', nationalIdPhoto: null, passportPhoto: null
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [countdown, setCountdown] = useState(3)

  // Gestion des champs de texte
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Gestion du téléchargement des fichiers
  const handleFileChange = (e) => {
    const { name, files } = e.target
    setFormData(prev => ({ ...prev, [name]: files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const formDataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      fatherName: formData.fatherName,
      motherName: formData.motherName,
      city: formData.city,
      neighborhood: formData.neighborhood,
      language: formData.language,
      licenseType: formData.licenseType,
    };
  
    axios.post('https://sheet.best/api/sheets/ce4087b5-137d-4560-b0c8-b2ff05415f99', formDataToSend)
      .then((response) => {
        console.log('Form data submitted', response);
        setIsLoading(false);
        setShowPopup(true);
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.response) {
          console.error('Erreur serveur :', error.response.data);
        } else if (error.request) {
          console.error('Pas de réponse du serveur :', error.request);
        } else {
          console.error('Erreur Axios :', error.message);
        }
      });
  };

  // Gestion du compte à rebours pour la redirection
  useEffect(() => {
    let timer
    if (showPopup && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1)
      }, 6000)
    } else if (countdown === 0) {
      clearInterval(timer)
      window.location.href = '/accueil/paiement' // Redirection
    }
    return () => clearInterval(timer)
  }, [showPopup, countdown])

  // Affichage du loader si en cours de soumission
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="mt-4">Validation de votre formulaire...</p>
      </div>
    )
  }

  // Affichage du popup de redirection
  if (showPopup) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Redirection en cours...</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Vous serez redirigé vers la page de paiement dans {countdown} secondes.</p>
          </CardContent>
        </Card>
      </div>
    )
  }
  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto sm:py-8 sm:px-8">
        <CardHeader>
          {/* <CardTitle>Complete Application Form</CardTitle> */}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <UserCircle2 className="h-6 w-6" />
                <h2 className="text-xl font-bold">Informations personnelles</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Votre nom</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Votre prénom</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(handleInputChange) =>setFormData(handleInputChange)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Votre n° de téléphone</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Votre adresse e-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="fatherName">Nom de votre pére</Label>
                  <Input
                    id="fatherName"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="motherName">Nom de votre pére</Label>
                  <Input
                    id="motherName"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>


            <div className='grid sm:grid-cols-2 sm:gap-x-12 gap-y-8'>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Home className="h-6 w-6" />
                <h2 className="text-xl font-bold">Information sur l&apos;adresse</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">Votre ville</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="neighborhood">Votre quartier</Label>
                  <Input
                    id="neighborhood"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-6 w-6" />
                <h2 className="text-xl font-bold">Préférence pour le cours en ?</h2>
              </div>
              <RadioGroup
                name="language"
                value={formData.language}
                onValueChange={(value) => handleInputChange({ target: { name: 'language', value } })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="French" id="French" />
                  <Label htmlFor="French">Français</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="English" id="English" />
                  <Label htmlFor="English">Anglais</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Car className="h-6 w-6" />
                <h2 className="text-xl font-bold">Selectionnez un type de permis</h2>
              </div>
              <RadioGroup
                name="licenseType"
                value={formData.licenseType}
                onValueChange={(value) => handleInputChange({ target: { name: 'licenseType', value } })}
              >
                {['Je veux faire le permis A', 'Je veux faire le permis B', 'Je veux faire le permis C', 'Je veux faire le permis D', 'Je veux faire le permis E', 'Je veux faire un récyclage auto'].map((license) => (
                  <div key={license} className="flex items-center space-x-2">
                    <RadioGroupItem value={license} id={license} />
                    <Label htmlFor={license}>{license}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Upload className="h-6 w-6" />
                <h2 className="text-xl font-bold">Documents important</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="nationalIdPhoto">Téléverser une photo de votre CNI ou Passport</Label>
                  <Input
                    id="nationalIdPhoto"
                    name="nationalIdPhoto"
                    type="file"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="passportPhoto">Téléverser une photo (4x4)</Label>
                  <Input
                    id="passportPhoto"
                    name="passportPhoto"
                    type="file"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </div>
            </div>
            </div>
            <Button type="submit" className="w-full">Valider les informations maintenant</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}