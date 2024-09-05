"use client"

import { Lock, PlayCircle } from 'lucide-react';
import React, { useState } from 'react';

function CourseContentSection({ courseInfo, isUserAlreadyEnrolled,watchMode=false,setActiveChapterIndex , completedChapter}) {
    const [activeIndex, setActiveIndex] = useState(0);
     
  
    /**
     * Use to check the chapter completed or not
     */
    const checkIsChapterCompleted=(chapterId)=>{
    return completedChapter.find(item =>item.chapterId==chapterId)
    }

  // Vérifie si courseInfo et chapter existent et sont des tableaux
  const chapters = courseInfo?.chapter || []; // Utilise un tableau vide si chapter est undefined

  return (
    <div className='p-3 bg-white rounded-[4px] mt-5'>
      <h2>Contents</h2>
      {chapters.length > 0 ? (
        chapters.map((item, index) => (
          <div key={index}>
            <h2 className={`p-2 text-[14px] text-gray-700 flex justify-between items-center m-2 border rounded-[4px] px-4 cursor-pointer ${activeIndex==index&&'bg-primary text-white'} hover:text-gray-500 hover:bg-gray-100 ${isUserAlreadyEnrolled&&'hover:bg-primary hover:text-white'} 
            ${watchMode&&checkIsChapterCompleted(item.id)&& 'border-green-800 bg-green-400'}`}
            onClick={()=>{watchMode&&setActiveChapterIndex(index); 
              watchMode&&setActiveIndex(index)
            }}>
                
                {index + 1}. {item.name}
                {activeIndex==index||isUserAlreadyEnrolled? 
                <PlayCircle  className='w-6 h-6'/> :
            <Lock className='w-5 h-5'/>}
            </h2>
          </div>
        ))
      ) : (
        <p>Aucun contenu disponible.</p> // Message si aucun chapitre n'est disponible
      )}
    </div>
  );
}

export default CourseContentSection;
