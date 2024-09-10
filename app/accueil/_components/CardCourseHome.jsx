import {
    Card,
    CardDescription,
    CardHeader,
  } from "@/components/ui/card"
import Image from "next/image"
  

function CardCourseHome() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-3xl font-bold flex items-center mb-6"> <span className="text-primary mr-1"> Chancimi </span> réinvente l&apos;auto école pour vous</h2>
        <p className="max-w-[600px] leading-6 text-gray-700 text-center text-[17px]">Conduisez votre formation à votre rythme ou vous voulez et quand vous voulez grace notre plateforme disponible 24h/24 7j/7</p>
        </div>
    <div className="flex sm:flex sm:gap-6 mx-auto justify-between items-center">
        <Card className="bg-blue-300">
           <CardHeader>
              <Image src='/Icour.jpg' width={500} height={500} alt="cours autoecole"  className="rounded-t-[8px]"/>
              <CardDescription className="flex text-center items-center justify-center py-16 text-white text-[18px] font-semibold leading-8 px-2 w-96">
              Apprenez quand tu veux, ou tu veux avec notre plateforme Chanicmi</CardDescription>
           </CardHeader>


       </Card>
        <Card className="bg-primary">
           <CardHeader>
              <CardDescription className="flex text-center items-center justify-center py-16 text-white text-[18px] font-semibold leading-8 px-2 w-96">
              Reserves tes heures de cours conduite pratique juste en un clic</CardDescription>
              <Image src='/icour2.jpg' width={500} height={500} alt="cours autoecole"  className="rounded-b-[8px]"/>
           </CardHeader>
       </Card>


        <Card className="bg-blue-300">
           <CardHeader>
              <Image src='/icour3.jpg' width={500} height={500} alt="cours autoecole"  className="rounded-t-[8px]"/>
              <CardDescription className="flex text-center items-center justify-center py-16 text-white text-[18px] font-semibold leading-8 px-2 w-96">
              A toi la liberté désormais  de  te déplace en toute sécurité</CardDescription>
           </CardHeader>
       </Card>


    </div>
    </div>
  )
}

export default CardCourseHome