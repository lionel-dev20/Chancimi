

import { Home } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div className='max-w-7xl flex flex-col items-center justify-center sm:my-6 h-screen mx-auto'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8XXW0I3N1o8IpkM4nYrgml-XHJqC0Q3i6W11m948d-l0rHw/viewform?embedded=true"  width={1024} height={920} frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
    
    
    
    <button type="submit" className="sm:w-[40%] sm:text-[1rem] sm:mt-6">
      <Link href='/' className="flex items-center">
        Retour à l&apos;accueil <Home className="ml-4"/>
        </Link>
        </button>
        
    </div>
  )
}

export default page 