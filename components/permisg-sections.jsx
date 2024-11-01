import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PermisSectionsg() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-10 md:py-1">
        <div className="mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            Auto-École Chancimi
          </h1>
          <p className="text-xl md:text-xl">
            Découvrez nos formations pour tous types de permis | Permis G
          </p>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-12 bg-background">
          <div className="max-full mx-auto px-4">
            <div className="flex flex-col items-center gap-8 ">
              <h2 className="text-3xl md:text-4xl font-bold">
                Le permis de conduire de catégorie G au Cameroun
              </h2>
              <div className="">
                <Image
                  src="/newpermib.jpeg"
                  alt="Illustration Permis B"
                  width={1000}
                  height={400}
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
              <div className="max-w-6xl">
                <p className="text-lg mb-6 mt-12">
                  Le permis de conduire de catégorie G au Cameroun est destiné
                  aux conducteurs de véhicules agricoles et forestiers, tels que
                  les tracteurs et autres engins utilisés principalement dans
                  les travaux agricoles. Voici une explication détaillée du
                  permis de catégorie G :
                  <br /> <br />
                  1. Types de véhicules concernés par la catégorie G : Tracteurs
                  agricoles : Ce permis autorise la conduite de tracteurs
                  utilisés dans l&apos;agriculture pour le labour, le transport
                  de marchandises agricoles, etc. Engins forestiers : Il inclut
                  également des véhicules utilisés pour des travaux en milieu
                  forestier, comme les tracteurs forestiers. Machines
                  automotrices : Certaines machines agricoles automotrices,
                  comme les moissonneuses-batteuses ou les pulvérisateurs,
                  peuvent également être conduites avec un permis de catégorie
                  G. Véhicules avec remorque : Le permis G permet de tracter des
                  remorques agricoles, souvent utilisées pour transporter des
                  produits agricoles ou du matériel.
                  <br />
                  <br />
                  2. Conditions d&apos;obtention du permis G : Âge minimum : Le
                  candidat doit être âgé de 18 ans ou plus pour s&apos;inscrire
                  au permis G. Examen médical : Comme pour les autres catégories
                  de permis, un examen médical est requis pour garantir que le
                  conducteur est apte à manœuvrer des véhicules agricoles. Cet
                  examen inclut la vérification de la vision, de
                  l&apos;audition, et de la condition physique générale.
                  Formation théorique : Une formation théorique est nécessaire
                  pour apprendre les règles spécifiques à la conduite des engins
                  agricoles, incluant : Les règles de circulation routière
                  lorsqu&apos;un engin agricole circule sur la voie publique. La
                  sécurité liée à la conduite d&apos;engins lourds ou à la
                  gestion de remorques agricoles.
                  <br />
                  La signalisation des engins agricoles sur les routes.
                  Formation pratique : Le candidat doit suivre une formation
                  pratique, qui inclut la conduite d&apos;un tracteur ou
                  d&apos;autres machines agricoles, ainsi que la maîtrise des
                  manœuvres spécifiques (comme le stationnement avec une
                  remorque, les virages serrés en milieu agricole, etc.). Examen
                  pratique : L&apos;examen pratique évalue la capacité du
                  candidat à manœuvrer un engin agricole en toute sécurité, à la
                  fois en milieu agricole et sur la voie publique, si
                  nécessaire.
                  <br />
                  <br />
                  3. Validité et renouvellement du permis G :<br />
                  Le permis G a une validité de 5 ans, tout comme les autres
                  catégories de permis au Cameroun. Il doit être renouvelé
                  périodiquement, accompagné d&apos;un certificat médical
                  attestant que le conducteur est toujours apte à conduire des
                  véhicules agricoles.
                  <br />
                  Le permis peut être suspendu en cas d&apos;infractions graves
                  ou si le conducteur ne respecte pas les règles de sécurité
                  liées à l&apos;utilisation des engins agricoles.
                  <br />
                  <br />
                  4. Obligations et responsabilités du conducteur d&apos;engins
                  agricoles : Respect des règles de sécurité : Le conducteur
                  doit suivre les règles de sécurité, non seulement pour
                  protéger sa propre sécurité mais aussi celle des autres
                  travailleurs agricoles, des passagers (s&apos;il y en a), et
                  des autres usagers de la route. <br />
                  Vérification de l&apos;état du véhicule : Le conducteur doit
                  régulièrement vérifier que le véhicule est en bon état de
                  marche avant de l&apos;utiliser. Cela inclut le système de
                  freinage, la direction, et les équipements de signalisation
                  comme les feux et les clignotants. <br />
                  Conduite sur la voie publique : Même si les engins agricoles
                  circulent principalement sur des terres privées, il arrive
                  qu&apos;ils doivent utiliser la voie publique pour accéder à
                  des champs ou des installations agricoles. <br />
                  Le conducteur doit donc être familier avec les règles de
                  circulation spécifiques aux engins agricoles sur la route.
                  <br />
                  <br />
                  5. Sanctions et infractions : Le non-respect des règles de
                  sécurité ou des limitations spécifiques aux engins agricoles
                  peut entraîner des amendes ou des points de pénalité sur le
                  permis. En cas d&apos;accidents graves dus à une mauvaise
                  utilisation ou à une négligence, le conducteur peut voir son
                  permis suspendu ou révoqué.
                  <br />
                  <br />
                  6. Documents requis pour l&apos;inscription : Carte nationale
                  d&apos;identité ou passeport. Certificat médical valide
                  attestant l&apos;aptitude à conduire un engin agricole. Photos
                  d&apos;identité. Formulaire d&apos;inscription dûment rempli.
                  Preuve de résidence (si nécessaire).
                  <br />
                  <br />
                  7. Importance du permis G : Le permis de catégorie G est
                  essentiel pour les personnes travaillant dans le secteur
                  agricole au Cameroun. Les tracteurs et autres engins agricoles
                  sont des outils cruciaux pour la production agricole, le
                  transport de marchandises agricoles, et l&apos;exploitation
                  forestière.
                  <br />
                  La formation et l&apos;expertise requises pour obtenir ce
                  permis garantissent que les conducteurs sont capables de
                  manœuvrer ces véhicules en toute sécurité, minimisant les
                  risques d&apos;accidents dans des environnements agricoles ou
                  forestiers.
                  <br />
                  <br />
                  8. Conduite professionnelle : Le permis G est souvent requis
                  pour les travailleurs agricoles ou les exploitants forestiers
                  qui utilisent régulièrement des véhicules lourds dans le cadre
                  de leur travail. <br /><br />
                  Il est également nécessaire pour les
                  entrepreneurs travaillant dans la gestion des terres
                  agricoles, la récolte et le transport des produits agricoles.
                  En résumé, le permis de conduire de catégorie G au Cameroun
                  est indispensable pour conduire des véhicules agricoles et
                  forestiers tels que les tracteurs et autres engins
                  automoteurs.<br /><br />
                   Il exige une formation théorique et pratique,
                  ainsi qu&apos;un examen médical pour garantir que le conducteur
                  peut utiliser ces véhicules en toute sécurité. Ce permis est
                  crucial pour les secteurs de l&apos;agriculture et de
                  l&apos;exploitation forestière au Cameroun, assurant une conduite
                  responsable et sécurisée des engins lourds.
                  <br />
                  <br />
                  Formation pratique : Une formation pratique est également
                  nécessaire, afin que le conducteur apprenne à manœuvrer un
                  poids lourd, à conduire dans différentes situations (routes
                  urbaines, autoroutes, etc.), à gérer le freinage sur des
                  routes inclinées, et à anticiper les risques spécifiques aux
                  véhicules lourds.
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
