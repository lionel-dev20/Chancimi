'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function UssdPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [telephone, setTelephone] = useState('')
  const [error, setError] = useState('')

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^6[5-9]\d{7}$/
    return phoneRegex.test(number);
  }

  const handleSubmit = () => {
    if (!validatePhoneNumber(telephone)) {
      setError(
        'Numéro de téléphone invalide. Veuillez entrer un numéro camerounais valide.'
      )
      return
    }

    const ussdCode = `#150*14*357550*656784922*50#`
    
    // Simulation de l'exécution du code USSD
    console.log(`Exécution du code USSD : ${ussdCode}`)
    
    // Dans un environnement mobile réel, vous devriez utiliser une API ou un service natif
    // pour déclencher l'exécution du code USSD. Par exemple :
    // 
    // if (window.AndroidInterface) {
    //   // Pour Android
    //   window.AndroidInterface.executeUssdCode(ussdCode);
    // } else if (window.webkit && window.webkit.messageHandlers.iOSInterface) {
    //   // Pour iOS
    //   window.webkit.messageHandlers.iOSInterface.postMessage({
    //     command: "executeUssdCode",
    //     ussdCode: ussdCode
    //   });
    // }

    alert(
      "Le code USSD a été envoyé avec un montant de 50. Veuillez suivre les instructions sur votre téléphone pour entrer votre code secret et valider la transaction."
    )
    
    setIsOpen(false)
    setError('')
  }

  return (
    (<Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Ouvrir la popup</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Entrez votre numéro de téléphone</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="telephone" className="text-right">
              Téléphone
            </Label>
            <Input
              id="telephone"
              placeholder="6XXXXXXXX"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="col-span-3" />
          </div>
        </div>
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Button onClick={handleSubmit}>Valider</Button>
      </DialogContent>
    </Dialog>)
  );
}