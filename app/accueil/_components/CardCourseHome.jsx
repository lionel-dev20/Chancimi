import {
    Card,
    CardDescription,
    CardHeader,
  } from "@/components/ui/card"
import Image from "next/image"
  

function CardCourseHome() {
  return (
    <div>
        <div className="flex-col mx-auto my-1 sm:flex items-center justify-center mb-8">
        <h2 className="text-3xl font-bold sm:flex items-center text-center"> <span className="text-primary mr-1"> Chancimi </span> réinvente l&apos;auto école pour vous</h2>
        <p className="max-w-[600px] mt-6 text-lg leading-8 text-gray-600">Formez-vous à votre propre rythme, à tout moment et en tous lieux, selon vos préférences, grâce à notre plateforme Chancimi.</p>
        </div>
   

    <div className="sm:flex sm:gap-6 mx-auto justify-between items-center">
        <Card className="bg-blue-300 mb-6">
           <CardHeader>
              <Image src='/website.jpg' width={500} height={500} alt="cours autoecole"  className="rounded-t-[8px]"/>
              <CardDescription className="flex text-center items-center justify-center py-16 text-white text-[18px] font-semibold leading-8 px-4 sm:px-2 sm:w-96">
              Apprenez quand tu veux, ou tu veux avec notre plateforme Chanicmi</CardDescription>
           </CardHeader>
       </Card>


        <Card className="bg-primary mb-6">
           <CardHeader>
              <CardDescription className="flex text-center items-center justify-center py-16 text-white text-[18px] font-semibold leading-8 px-4 sm:px-2 sm:w-96">
              Réservez vos heures de cours conduite pratique juste en un clic</CardDescription>
              <Image src='/icour2.jpg' width={500} height={500} alt="cours autoecole"  className="rounded-b-[8px]"/>
           </CardHeader>
       </Card>


        <Card className="bg-blue-300 mb-6">
           <CardHeader>
              <Image src='/icour3.jpg' width={500} height={500} alt="cours autoecole"  className="rounded-t-[8px]"/>
              <CardDescription className="flex text-center items-center justify-center py-16 text-white text-[18px] font-semibold leading-8 px-4 sm:px-2 sm:w-96">
              À toi la liberté désormais de te déplacer en toute sécurité</CardDescription>
           </CardHeader>
       </Card>

      </div>
    </div>
  )
}

export default CardCourseHome