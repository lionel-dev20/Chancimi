import { ArrowBigRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="bg-gradient-to-b h-screen content-center px-4  from-pink-100  to-purple-200">
      <div className="max-w-2xl max-lg:max-w-3xl mx-auto sm:py-10 items-center">
        <h2 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-3 sm:mt-24 mt-24">
          Paiement cours de langue préparation TCF TEF
        </h2>
        <p className="text-sm text-gray-700">
          Profitez de notre offre exceptionnelle, finaliser votre inscription
          maintenant. Un accompagnement personnalisé pour garantir votre
          réussite en toute traquilité{" "}
        </p>
      </div>

      <div className="m-4 flex flex-col max-w-[28rem] mx-auto  justify-between p-8 bg-white border rounded shadow-sm">
        <div className="mb-6">
          <div className="flex items-center justify-between pb-6 mb-6 border-b">
            <div>
              <p className="text-sm font-bold tracking-wider uppercase mb-4">
                Offre spéciale
              </p>
              <p className="text-5xl font-extrabold">99,900</p>
              <p className="text-5xl font-extrabold line-through">165,000</p>
            </div>
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
              <svg
                className="w-10 h-10 text-gray-600"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                strokeLidth="2"
              >
                <path
                  d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                  fill="none"
                  stroke="currentColor"
                ></path>
                <path
                  d="M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
                  fill="none"
                  stroke="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <p className="mb-2 font-bold tracking-wide">Ce que nous vous offrons</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="mr-2">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    strokeLidth="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p className="font-medium text-gray-800">
                  Cours en présentiel
                </p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    strokeLidth="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p className="font-medium text-gray-800">
                  2 Mois intesses de cours        
                </p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    strokeLidth="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p className="font-medium text-gray-800">
                  Package spéciale
                </p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    strokeLidth="2"
                  >
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Link
            href="/link-paiement/paiementtcf"
            className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          >
            Proceder au paiement 
            <ArrowBigRightIcon className="ml-4" />
          </Link>
          <p className="text-sm text-gray-600">
            Vous aurez accés à ce cours à vie en vous y inscrivant maintenant.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
