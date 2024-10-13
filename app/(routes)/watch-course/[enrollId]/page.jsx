"use client"

import GlobalApi from '/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CoursVideoDescription from '../../course_preview/[courseId]/_components/CoursVideoDescription'
import CourseContentSection from '../../course_preview/[courseId]/_components/CourseContentSection'
import { toast } from 'sonner'

function WatchCourse({ params }) {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState(null); // Initialisation en tant qu'objet ou null
  const [completedChapter, setCompletedChapter] = useState([])
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  useEffect(() => {
    // S'assurer que params et user sont bien définis avant d'appeler la fonction
    if (params && user) {
      getUserEnrolledCourseDetail();
    }
  }, [params, user]); // Correctement structuré pour inclure les dépendances séparément

  /**
   * Get User Enrolled Course Details by Id+Email
   */
  const getUserEnrolledCourseDetail = () => {
    // S'assurer que params et user sont bien définis pour éviter les erreurs
    if (params?.enrollId && user?.primaryEmailAddress?.emailAddress) {
      GlobalApi.getUserEnrolledCourseDetails(params.enrollId, user.primaryEmailAddress.emailAddress)
      .then(resp=>{setCompletedChapter(resp.userEnrollCourses[0].completedChapter)
        setCourseInfo(resp.userEnrollCourses[0].courseList);
      })
        // .then(resp => {
        //   if (resp?.userEnrollCourses?.[0]?.courseList) {
        //     setCourseInfo(resp.userEnrollCourses[0].courseList);
        //   } else {
        //     console.warn("No course data available");
        //   }
        // })
        // .catch(error => {
        //   console.error("Failed to fetch course details:", error);
        // });
    }
  }

  /**
   * Save Completed Chapter Id
   */

  const onChapterCompleted=(chapterId) =>{
    GlobalApi.markChapterCompleted(params.enrollId, chapterId).then(resp=>{
      console.log(resp);
      if(resp){
         toast('Ce chapitre a été marqué complet, Bravoo !!!');
         getUserEnrolledCourseDetail();
      }
    })
  }
  

  // Vérification supplémentaire pour s'assurer que courseInfo est correctement défini avant le rendu
  return courseInfo ? (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-5'>
        {/* Title, Video and description */}
        <div className='col-span-2 bg-white p-3 rounded-[8px]'>
          <CoursVideoDescription 
            courseInfo={courseInfo}
            activeChapterIndex={activeChapterIndex}
            watchMode={true} 
            setChapterCompleted={(chapterId) => onChapterCompleted(chapterId)
            }
          /> 
        </div> 
        {/* Course content  */}
        <div>
          <CourseContentSection 
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={true}
            watchMode={true}
            completedChapter = {completedChapter}
            setActiveChapterIndex={setActiveChapterIndex} 
          />
        </div>
      </div>
    </div>
  ) : (
    <p>Loading course details...</p> // Message de chargement pendant la récupération des données
  );
}

export default WatchCourse;
