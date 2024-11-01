import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PermisSectionsf() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-10 md:py-1">
        <div className="mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            Auto-École Chancimi
          </h1>
          <p className="text-xl md:text-xl">
            Découvrez nos formations pour tous types de permis | Permis F
          </p>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-12 bg-background">
          <div className="max-full mx-auto px-4">
            <div className="flex flex-col items-center gap-8 ">
              <h2 className="text-3xl md:text-4xl font-bold">
                Le permis de conduire de catégorie F au Cameroun
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
                  Le permis de conduire de catégorie F au Cameroun est destiné
                  aux conducteurs de véhicules spécialisés, notamment les engins
                  de chantier et autres véhicules utilisés dans des
                  environnements spécifiques, tels que les zones de construction
                  ou les carrières. Ce permis est requis pour les personnes qui
                  conduisent des véhicules lourds non destinés à la circulation
                  routière régulière, mais plutôt à des usages spécifiques dans
                  le cadre de travaux publics ou d&apos;activités industrielles.
                  Voici une explication complète du permis de catégorie F :
                  <br /> <br />
                  1. Types de véhicules concernés par la catégorie F : Engins de
                  chantier :<br />
                  Ce permis permet de conduire des bulldozers, pelles
                  mécaniques, tractopelles, niveleuses, et d&apos;autres types
                  d&apos;engins utilisés dans la construction ou
                  l&apos;exploitation de mines et carrières. <br />
                  Véhicules non routiers : <br />
                  Les véhicules spécifiques comme les tombereaux ou les
                  chargeurs qui ne sont pas conçus pour circuler sur les routes
                  publiques, mais pour des travaux lourds dans des sites de
                  construction ou industriels. <br />
                  Engins de manutention : Cela inclut également certains
                  véhicules spécialisés utilisés pour la manutention de
                  matériaux lourds, comme les grues mobiles.
                  <br />
                  <br />
                  2. Conditions d&apos;obtention du permis F : Âge minimum : Le
                  candidat doit être âgé d&apos;au moins 21 ans pour pouvoir
                  postuler au permis de catégorie F. <br />
                  Permis de base requis : <br />
                  Le permis F est souvent associé à la possession d&apos;un
                  permis de catégorie C (pour les véhicules lourds) ou de
                  catégorie G (pour les engins agricoles ou forestiers), car ces
                  catégories couvrent déjà une partie des compétences
                  nécessaires à la conduite d&apos;engins lourds. <br />
                  Expérience de conduite : <br />
                  Une expérience préalable avec la conduite de véhicules lourds
                  ou spécialisés est souvent exigée, surtout si le conducteur
                  compte utiliser les engins dans des environnements à risques
                  élevés (mines, chantiers, etc.). <br />
                  Examen médical : Comme pour les autres catégories de permis,
                  un certificat médical est requis pour s&apos;assurer que le
                  conducteur est physiquement apte à manipuler des engins
                  lourds. <br />
                  Cela inclut une évaluation de la vue, de la condition
                  physique, et des réflexes. <br />
                  Formation théorique : <br />
                  La formation théorique pour le permis F inclut les éléments
                  suivants :<br />
                  Réglementation des engins de chantier :
                  <br />
                  Règles spécifiques à la conduite et à l&apos;utilisation
                  d&apos;engins non routiers sur les chantiers. <br />
                  Sécurité sur les chantiers : <br />
                  Le conducteur doit connaître les mesures de sécurité pour
                  éviter les accidents, protéger les autres travailleurs et
                  limiter les risques liés à l&apos;utilisation d&apos;engins
                  lourds. <br />
                  Entretien des engins :<br />
                  L&apos;importance de l&apos;entretien des véhicules pour
                  assurer leur bon fonctionnement, y compris la vérification
                  quotidienne avant chaque utilisation. <br />
                  Formation pratique : <br />
                  Cette formation se concentre sur l&apos;utilisation des engins
                  de chantier dans des environnements spécifiques. <br />
                  Elle inclut : <br />
                  La manipulation d&apos;engins comme les bulldozers, pelles
                  mécaniques, et autres véhicules lourds. <br />
                  La maîtrise des manœuvres complexes sur des terrains
                  difficiles, comme les pentes, les zones étroites, et les
                  terrains accidentés.
                  <br />
                  Les techniques de sécurité et la conduite préventive sur les
                  chantiers. <br />
                  Examen pratique :<br />
                  L&apos;examen pratique évalue la capacité du candidat à
                  utiliser en toute sécurité des engins de chantier, à effectuer
                  des manœuvres complexes, et à garantir la sécurité des autres
                  travailleurs sur le chantier.
                  <br />
                  <br />
                  3. Validité et renouvellement du permis F : <br />
                  Comme pour les autres catégories, le permis F est généralement
                  valable pour une durée de 5 ans, après quoi il doit être
                  renouvelé. Le renouvellement nécessite un examen médical pour
                  garantir que le conducteur est toujours apte à manipuler des
                  engins de chantier. <br />
                  Le permis peut être suspendu ou révoqué en cas
                  d&apos;infractions graves ou si le conducteur ne respecte pas
                  les normes de sécurité sur les chantiers.
                  <br />
                  <br />
                  4. Obligations et responsabilités du conducteur d&apos;engins
                  de chantier : <br />
                  Respect des règles de sécurité : <br />
                  Le conducteur d&apos;un engin de chantier doit respecter
                  strictement les protocoles de sécurité en vigueur sur le
                  chantier. <br />
                  Cela inclut le port des équipements de protection individuelle
                  (EPI), tels que les casques, les gilets de haute visibilité,
                  et les chaussures de sécurité.
                  <br /> Vérification de l&apos;état des engins : <br />
                  Avant chaque utilisation, le conducteur doit s&apos;assurer
                  que l&apos;engin est en bon état de marche. <br /> Cela inclut
                  le contrôle des systèmes hydrauliques, du moteur, des freins,
                  et de tous les dispositifs de sécurité. <br /> Gestion des
                  risques sur le chantier : <br />
                  Le conducteur doit être capable de reconnaître les risques
                  potentiels sur le chantier, tels que les terrains instables,
                  les obstacles, et les autres travailleurs à proximité.
                  Connaissance des signaux de communication : <br />
                  Les conducteurs d&apos;engins de chantier travaillent souvent
                  en coordination avec d&apos;autres équipes sur le site. <br />
                  Ils doivent donc connaître les signaux manuels et les
                  protocoles de communication utilisés sur les chantiers pour
                  assurer la sécurité.
                  <br />
                  <br />
                  5. Sanctions et infractions : Les conducteurs d&apos;engins de
                  chantier sont soumis à des règles strictes concernant la
                  sécurité et le respect des procédures. En cas de manquement à
                  ces règles, des sanctions peuvent être appliquées, telles que
                  : Amendes en cas de violation des règles de sécurité.
                  Suspension du permis en cas d&apos;infractions graves ayant
                  entraîné des accidents ou des blessures. Révocation du permis
                  en cas de négligence répétée ou de comportements dangereux sur
                  le chantier.
                  <br />
                  Carte nationale d&apos;identité ou passeport.
                  <br />
                  <br />
                  6. Documents requis pour l&apos;inscription : Carte nationale
                  d&apos;identité ou passeport. Certificat médical attestant
                  l&apos;aptitude à conduire des engins de chantier. Permis de
                  catégorie C ou G (selon le type d&apos;engin utilisé). Photos
                  d&apos;identité. Formulaire d&apos;inscription dûment rempli.
                  Preuve de résidence (si nécessaire). Attestation de formation
                  délivrée par l&apos;auto-école.
                  <br />
                  <br />
                  7. Conduite professionnelle :  <br />
                  Le permis F est crucial pour les
                  professionnels travaillant dans les secteurs du BTP (bâtiments
                  et travaux publics), des mines, des carrières, et de
                  l&apos;exploitation industrielle. Les conducteurs d&apos;engins de
                  chantier sont essentiels pour réaliser des travaux de
                  terrassement, de construction, d&apos;extraction, ou de manutention
                  de matériaux lourds.  <br />
                  Les entreprises de construction et
                  d&apos;exploitation minière exigent souvent que leurs opérateurs
                  d&apos;engins soient titulaires d&apos;un permis de catégorie F, car
                  cela garantit qu&apos;ils sont formés aux exigences spécifiques
                  liées à la sécurité et à la conduite sur des sites de travaux.
                  <br /> <br />
                  8. Importance du permis F : <br />
                   Le permis de catégorie F est
                  indispensable pour ceux qui manipulent des engins de chantier
                  lourds, des véhicules qui nécessitent des compétences
                  particulières en matière de manœuvres et de sécurité. <br />
                  L&apos;obtention de ce permis est une preuve que le conducteur a
                  reçu une formation spécialisée et est apte à travailler dans
                  des environnements exigeants. <br />
                  
                  Ce permis est également
                  important pour garantir la sécurité des opérateurs, des autres
                  travailleurs, et des infrastructures sur les chantiers. Il
                  contribue à réduire les risques d&apos;accidents et à améliorer
                  l&apos;efficacité des travaux. 

                  <br /> <br />En résumé, le permis de catégorie F
                  au Cameroun est conçu pour les conducteurs d&apos;engins de
                  chantier et autres véhicules spécialisés. Il exige une
                  formation théorique et pratique rigoureuse, axée sur la
                  sécurité et la maîtrise des manœuvres complexes. Ce permis est
                  crucial pour les professionnels du secteur de la construction
                  et des travaux publics, où la sécurité et la compétence
                  technique sont des priorités majeures.  
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
