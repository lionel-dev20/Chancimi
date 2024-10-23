
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PermisSections() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-10 md:py-1">
        <div className="container mx-auto px-4 max-w-7xl py-4">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 ">Auto-École Chancimi</h1>
          <p className="text-xl md:text-xl">Découvrez nos formations pour tous types de permis | Permis A</p>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-12 bg-background">
          <div className="max-w-full mx-auto px-4">
            <div className="flex flex-col items-center gap-8 ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4">Le permis de conduire de catégorie A au Cameroun</h2>
              <div>
                <Image
                  src="/permiA.jpeg"
                  alt="Illustration Permis B"
                  width={1000}
                  height={450}
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
              <div className="max-w-6xl">
                <p className="text-lg mb-6 mt-12">

1. Types de véhicules concernés par la catégorie A : <br/>

Motos : Cette catégorie permet la conduite des motos avec ou sans side-car, quelle que soit leur cylindrée.

Scooters : Les scooters de toutes cylindrées sont également inclus dans cette catégorie.

Motos tricycles : Les tricycles motorisés, utilisés pour le transport de marchandises ou de passagers, peuvent être conduits avec ce permis.


<br/><br/>2. Sous-catégories du permis A :

A1 : Cette sous-catégorie est destinée aux conducteurs de motos légères dont la cylindrée est comprise entre 50 cm³ et 125 cm³. Elle est souvent utilisée par les jeunes conducteurs ou ceux qui débutent dans la conduite des motos.

A : C&apos;est la catégorie principale qui autorise la conduite de motos de plus de 125 cm³. Cela inclut les motos de haute puissance.

<br/><br/>

3. Conditions d&apos;obtention du permis A au Cameroun :

Âge minimum : Le candidat doit avoir au moins 18 ans pour pouvoir obtenir le permis de conduire de catégorie A.

Examen médical : Un certificat médical attestant que le candidat est apte à conduire un véhicule à moteur est obligatoire.

Formation théorique : Le candidat doit suivre une formation théorique sur les règles de circulation routière, le code de la route et la signalisation. Cela inclut une formation sur la sécurité, notamment l&apos;importance de porter un casque et de respecter les autres usagers de la route.

Formation pratique : Le candidat doit aussi passer une formation pratique pour démontrer qu&apos;il maîtrise le maniement de la moto, qu&apos;il sait conduire en toute sécurité sur la route et qu&apos;il est capable de réagir aux imprévus.

Examen : Il se compose d&apos;une partie théorique (code de la route) et d&apos;une partie pratique (conduite). Le candidat doit réussir les deux volets pour obtenir son permis.

<br/><br/>
4. Validité et renouvellement :

Le permis de conduire de catégorie A au Cameroun est valable pour une période de 5 ans. Il peut être renouvelé après une visite médicale, qui confirme que le conducteur est toujours apte à conduire.

<br/><br/>
5. Sanctions et infractions :

Le non-respect des règles de la circulation par les détenteurs d&apos;un permis de catégorie A peut entraîner des sanctions, telles que des amendes, des points de pénalité, voire une suspension du permis en cas de fautes graves.

Il est obligatoire de porter un casque pour des raisons de sécurité. Ne pas porter de casque peut entraîner une sanction pécuniaire.

<br/><br/>
6. Conduite professionnelle :

Pour ceux qui souhaitent utiliser leur moto à des fins professionnelles (par exemple, pour le transport de passagers ou de marchandises), des autorisations spécifiques peuvent être exigées, notamment une assurance adéquate.

<br/><br/>
7. Documents requis pour l&apos;inscription :
<br/>
Carte nationale d&apos;identité ou passeport
<br/>
Certificat médical valide
<br/>
Photos d&apos;identité
<br/>
Preuve de résidence (parfois demandée)
<br/>
Formulaire d&apos;inscription dûment rempli
<br/><br/>

En résumé, le permis de catégorie A au Cameroun permet de conduire des motos et des véhicules motorisés à deux ou trois roues de différentes puissances. Il nécessite une formation à la fois théorique et pratique pour garantir la sécurité du conducteur et des autres usagers de la route.</p>
                <Button className="text-md px-6 py-6 mb-20">Inscription en ligne bientôt disponible</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}