import { Home } from "lucide-react";
import Link from "next/link";

function Page() {
  return (
    <div className='max-w-7xl flex flex-col items-center justify-center sm:my-6 h-screen mx-auto'>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSd8XXW0I3N1o8IpkM4nYrgml-XHJqC0Q3i6W11m948d-l0rHw/viewform?embedded=true"  
        width={1240} 
        height={820}  // Corrigé ici
        style={{ margin: 0 }}  // Utilisation de `style` pour les marges
      >
        Chargement…
      </iframe>
    
      <Link href='/' className="flex items-center">
      <button type="submit" className="sm:w-full sm:text-[1rem] bg-primary sm:mt-6">
          Retour à l&apos;accueil <Home className="ml-4"/>
      </button>
      </Link>
    </div>
  );
}

export default Page;
