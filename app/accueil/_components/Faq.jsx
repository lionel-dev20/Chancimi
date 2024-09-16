"use client"

import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/accordion";


export default function Faq() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["0"]));
  const defaultContent =
    "Oui, nous proposons uniquement des formations théoriques en ligne.";
    "Ouioui, nous ne gérons le dépôt des dossiers et toute la procédure qui va avec.";
    "Le paiement se fait uniquement en ligne via notre plateforme sécurisée.";
    "Oui, toutes nos formations théorique sont entièrement en ligne sur notre plateforme.";
    "Oui, notre auto-école propose de cours pratiques.";

  return (
    <div className="max-w-4xl mx-auto mt-8 mb-20 items-center justify-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">FAQ</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600 text-center mb-10">Quelques questions qu&apos;ils nous on aussi posé pour se rassurer de la qualité de nos formations </p>
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <AccordionItem key="1" aria-label="Accordion 1" title="Offrez-vous des cours pratiques de conduite ?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Pouvez-vous déposer les dossiers des apprenants ?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Comment se déroule le paiement ?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="Proposez-vous des formations en ligne ?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="Comment se déroule le paiement ?">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </div>
  );
}
