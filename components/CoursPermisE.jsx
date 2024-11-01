import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CoursPermisE() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-10 md:py-1">
        <div className="mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            Auto-École Chancimi
          </h1>
          <p className="text-xl md:text-xl">
            Découvrez nos formations pour tous types de permis | Permis E
          </p>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-12 bg-background">
          <div className="max-full mx-auto px-4">
            <div className="flex flex-col items-center gap-8 ">
              <h2 className="text-3xl md:text-4xl font-bold">
                Le permis de conduire de catégorie E au Cameroun
              </h2>
              <div className="">
                <Image
                  src="/Ccamion.webp"
                  alt="Illustration Permis B"
                  width={1000}
                  height={400}
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
              <div className="max-w-6xl">
                <p className="text-lg mb-6 mt-12">
                  Le permis de conduire de catégorie E au Cameroun est destiné
                  aux conducteurs qui conduisent des véhicules ayant une
                  remorque ou une semi-remorque, et dont le poids total dépasse
                  un certain seuil. Ce permis est souvent considéré comme une
                  extension des permis des autres catégories (B, C, ou D)
                  lorsqu&apos;un véhicule est attelé à une remorque lourde.
                  Voici une explication complète du permis de catégorie E :
                  <br /> <br />
                  1. Types de véhicules concernés par la catégorie E : <br />
                  Véhicules avec remorque : Ce permis permet de conduire des
                  véhicules légers ou lourds (catégories B, C ou D) attelés à
                  des remorques ou semi-remorques dont le poids total autorisé
                  en charge (PTAC) dépasse les 750 kg. <br />
                  Poids combiné : Il est spécifiquement requis lorsque la somme
                  des poids des véhicules (tracteur + remorque) dépasse une
                  certaine limite définie dans la réglementation.
                  <br />
                  <br />
                  2. Sous-catégories du permis E :<br />
                  BE : Pour les véhicules de la catégorie B avec remorque. Cela
                  concerne principalement les véhicules légers (comme les
                  voitures particulières) attelés à des remorques lourdes.{" "}
                  <br />
                  CE : Pour les véhicules de la catégorie C avec remorque,
                  c&apos;est-à-dire des camions ou des véhicules lourds avec une
                  remorque ou une semi-remorque. DE : Pour les véhicules de la
                  catégorie D, c&apos;est-à-dire les autobus et autocars avec
                  remorque.
                  <br />
                  <br />
                  3. Conditions d&apos;obtention du permis E au Cameroun :<br />
                  Permis de base requis : Pour obtenir un permis de catégorie E,
                  le conducteur doit déjà être titulaire du permis de la
                  catégorie de base correspondante : <br />
                  Permis B pour BE (voitures avec remorque lourde). <br />
                  Permis C pour CE (camions avec remorque).
                  <br />
                  Permis D pour DE (autocars avec remorque). <br />
                  Âge minimum : Pour les permis BE et CE, le candidat doit avoir
                  21 ans ou plus.
                  <br />
                  Pour le permis DE, l&apos;âge minimum est généralement de 24
                  ans, étant donné la responsabilité accrue liée au transport de
                  passagers. <br />
                  Examen médical : Un examen médical est obligatoire pour
                  attester que le conducteur est apte à conduire des véhicules
                  lourds avec une remorque. Cela inclut une évaluation de la
                  vue, de la condition physique, et des réflexes. Expérience de
                  conduite : Une expérience préalable avec le permis de la
                  catégorie de base (B, C ou D) est requise avant de postuler
                  pour la catégorie E. Formation théorique : La formation
                  théorique pour le permis E comprend l&apos;apprentissage des
                  règles spécifiques à la conduite avec remorque, notamment : La
                  stabilité et le freinage d&apos;un véhicule avec une remorque.
                  Les distances d&apos;arrêt et les angles morts. Les règles de
                  stationnement et de manœuvres avec une remorque. Les distances
                  d&apos;arrêt et les angles morts.
                  <br />
                  Les règles de stationnement et de manœuvres avec une remorque.
                  Formation pratique : Cette formation se concentre sur les
                  techniques de manœuvre avec une remorque, comme le remorquage,
                  les virages en angles et le stationnement en marche arrière
                  avec une remorque attelée. Examen pratique : L&apos;examen
                  pratique évalue la capacité du candidat à maîtriser un
                  véhicule avec une remorque ou une semi-remorque, à gérer les
                  manœuvres complexes et à conduire en toute sécurité sur les
                  routes publiques.
                  <br />
                  <br />
                  4. Validité et renouvellement du permis E : <br />
                  Le permis E est généralement valable pour 5 ans, comme les
                  autres catégories de permis au Cameroun. Le renouvellement
                  nécessite un certificat médical attestant l&apos;aptitude à
                  continuer de conduire des véhicules avec remorque.
                  <br /> En cas d&apos;infractions graves ou de non-respect des
                  règles de conduite, le permis peut être suspendu ou révoqué.
                  <br /> <br />
                  5. Obligations et responsabilités du conducteur de véhicules
                  avec remorque : <br /> Sécurité du chargement : Le conducteur
                  est responsable du bon arrimage et de la stabilité du
                  chargement transporté sur la remorque. Il doit s&apos;assurer
                  que la charge est correctement répartie et sécurisée pour
                  éviter les accidents. Conduite adaptée : La conduite avec une
                  remorque nécessite des précautions supplémentaires, notamment
                  en ce qui concerne le freinage, les virages, et la gestion des
                  pentes. Le conducteur doit ajuster sa vitesse et ses manœuvres
                  en fonction de la taille et du poids de la remorque.
                  Vérification du véhicule : Avant de prendre la route, le
                  conducteur doit s&apos;assurer que le système de freinage de
                  la remorque fonctionne correctement, que les feux de
                  signalisation sont en bon état et que les roues et pneus sont
                  en bon état. Respect des limitations de poids : Le conducteur
                  doit s&apos;assurer que le poids combiné du véhicule et de la
                  remorque ne dépasse pas les limites autorisées par la loi.
                  <br />
                  <br />
                  6. Sanctions et infractions : <br />
                  Le non-respect des règles de sécurité ou des limitations de
                  poids peut entraîner des amendes, des points de pénalité sur
                  le permis, voire la suspension du permis. Les infractions
                  spécifiques incluent : Conduite d&apos;un véhicule avec une
                  remorque non conforme. Excès de poids ou mauvaise répartition
                  du chargement. Non-respect des distances de sécurité avec un
                  véhicule attelé.
                  <br />
                  <br />
                  Preuve de résidence (éventuellement demandée).
                  <br />
                  Attestation de formation délivrée par l&apos;auto-école.
                  <br />
                  <br />
                  7. Documents requis pour l’inscription : <br />
                  Carte nationale d&apos;identité ou passeport. <br />
                  Permis de conduire de base en cours de validité (B, C ou D
                  selon le cas).
                  <br />
                  Certificat médical attestant l&apos;aptitude à conduire des
                  véhicules avec remorque. Photos d&apos;identité. <br />
                  Formulaire d&apos;inscription dûment rempli. Preuve de
                  résidence (si nécessaire). <br />
                  <br />
                  8. Conduite professionnelle :<br />
                  Le permis E est souvent requis pour les conducteurs
                  professionnels qui travaillent dans les secteurs du transport
                  de marchandises ou du transport de personnes avec des
                  véhicules nécessitant une remorque. <br />
                  Cela inclut les chauffeurs de camions avec remorque, les
                  transporteurs de matériel lourd, ou encore les conducteurs de
                  bus ou autocars avec des bagages ou des équipements lourds.
                  <br />
                  Les entreprises de transport exigent fréquemment que leurs
                  conducteurs soient titulaires d’un permis E, surtout lorsqu’il
                  s’agit de trajets de longue distance ou de transport de
                  charges lourdes.
                  <br />
                  <br />
                  9. Importance du permis E :<br />
                  Le permis de catégorie E est essentiel pour les conducteurs
                  qui doivent atteler des remorques lourdes à leurs véhicules,
                  que ce soit pour des raisons professionnelles ou personnelles.
                  <br /> Il garantit que le conducteur a les compétences
                  nécessaires pour manœuvrer un véhicule avec remorque en toute
                  sécurité, réduisant ainsi les risques d’accidents sur la
                  route. <br />
                  Il joue également un rôle clé dans les secteurs de la
                  logistique et du transport de marchandises, où les véhicules
                  attelés sont fréquemment utilisés.
                  <br />
                  <br />
                  En résumé, le permis de catégorie E au Cameroun est requis
                  pour conduire des véhicules avec remorque ou semi-remorque
                  lorsque le poids total dépasse un certain seuil. Il nécessite
                  un permis de base (B, C ou D), une formation spécifique, et un
                  examen pratique pour maîtriser la conduite avec des véhicules
                  attelés. Le permis est valable 5 ans et est essentiel pour les
                  conducteurs professionnels dans les secteurs du transport de
                  marchandises et de passagers.
                </p>

                <Link href="">
                  <Button className="text-md px-6 py-6 mb-4 w-full sm:w-1/4 mr-8">
                    Inscrivez-vous au cours en français
                  </Button>
                </Link>
                <Link href="">
                  <Button className="text-md px-6 py-6 mb-20 w-full sm:w-1/4 bg-blue-500">
                    Inscrivez-vous au cours en anglais
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
