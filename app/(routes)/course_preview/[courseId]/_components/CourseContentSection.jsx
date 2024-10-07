"use client";

import { Lock, PlayCircle } from 'lucide-react';
import React, { useState } from 'react';

function CourseContentSection({ courseInfo, isUserAlreadyEnrolled, watchMode = false, setActiveChapterIndex, completedChapter }) {
  const [activeIndex, setActiveIndex] = useState(0);

  /**
   * Vérifie si le chapitre est complété
   */
  const checkIsChapterCompleted = (chapterId) => {
    // Vérification que completedChapter est un tableau
    if (!Array.isArray(completedChapter)) {
      return false; // Retourne false si completedChapter n'est pas un tableau
    }
    return completedChapter.find(item => item.chapterId === chapterId);
  };

  // Récupère les chapitres ou utilise un tableau vide si non défini
  const chapters = courseInfo?.chapter || [];

  /**
   * Détermine si un chapitre est accessible
   */
  const isChapterAccessible = (index) => {
    if (index === 0) return true; // Le premier chapitre est toujours accessible
    return checkIsChapterCompleted(chapters[index - 1].id); // Accessible si le précédent est complété
  };

  return (
    <div className="p-3 bg-white rounded-[4px] mt-5">
      <h2>Contenu du cours</h2>
      {chapters.length > 0 ? (
        chapters.map((item, index) => (
          <div key={index}>
            <h2
              className={`p-2 text-[14px] text-gray-700 flex justify-between items-center m-2 border rounded-[4px] px-4 cursor-pointer 
              ${activeIndex === index && 'bg-primary text-white'} 
              ${isUserAlreadyEnrolled && 'hover:bg-primary hover:text-white'} 
              ${watchMode && checkIsChapterCompleted(item.id) && 'border-green-800 bg-green-400'}
              ${!isChapterAccessible(index) && 'cursor-not-allowed opacity-50'}`}
              
              onClick={() => {
                if (isChapterAccessible(index) && watchMode) {
                  setActiveChapterIndex(index);
                  setActiveIndex(index);
                }
              }}
            >
              {index + 1}. {item.name}
              {activeIndex === index || (isUserAlreadyEnrolled && isChapterAccessible(index)) ? (
                <PlayCircle className="w-6 h-6" />
              ) : (
                <Lock className="w-5 h-5" />
              )}
            </h2>
          </div>
        ))
      ) : (
        <p>Aucun contenu disponible.</p>
      )}
    </div>
  );
}

export default CourseContentSection;
