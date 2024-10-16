'use client';

import GlobalApi from '/app/_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import CoursVideoDescription from '../../course_preview/[courseId]/_components/CoursVideoDescription';
import CourseContentSection from '../../course_preview/[courseId]/_components/CourseContentSection';
import { toast } from 'sonner';

function WatchCourse({ params }) {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState(null);
  const [completedChapter, setCompletedChapter] = useState([]);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  useEffect(() => {
    if (params && user) {
      getUserEnrolledCourseDetail();
    }
  }, [params, user]);

  const getUserEnrolledCourseDetail = () => {
    if (params?.enrollId && user?.primaryEmailAddress?.emailAddress) {
      GlobalApi.getUserEnrolledCourseDetails(params.enrollId, user.primaryEmailAddress.emailAddress)
        .then(resp => {
          setCompletedChapter(resp.userEnrollCourses[0].completedChapter);
          setCourseInfo(resp.userEnrollCourses[0].courseList);
        })
        .catch(error => {
          console.error("Failed to fetch course details:", error);
        });
    }
  };

  const onChapterCompleted = (chapterId) => {
    GlobalApi.markChapterCompleted(params.enrollId, chapterId).then(resp => {
      if (resp) {
        toast('Ce chapitre a été marqué complet, Bravoo !!!');
        getUserEnrolledCourseDetail(); // Rafraîchit les informations du cours
      }
    });
  };

  const onCompleteChapter = () => {
    setActiveChapterIndex(prevIndex => {
      let nextIndex = prevIndex + 1;

      // Vérifiez que le prochain chapitre est accessible
      while (nextIndex < courseInfo.chapter.length && !completedChapter.includes(courseInfo.chapter[nextIndex].id)) {
        nextIndex++;
      }

      return nextIndex < courseInfo.chapter.length ? nextIndex : prevIndex;
    });
  };

  return courseInfo ? (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-5'>
        {/* Section de la vidéo et description */}
        <div className='col-span-2 bg-white p-3 rounded-[8px]'>
          <CoursVideoDescription 
            courseInfo={courseInfo}
            activeChapterIndex={activeChapterIndex}
            watchMode={true} 
            setChapterCompleted={(chapterId) => {
              onChapterCompleted(chapterId); // Marquer comme complété
              onCompleteChapter(); // Active la prochaine leçon après avoir marqué comme complété
            }}
            completedChapter={completedChapter}
            onCompleteChapter={onCompleteChapter} // Passe la fonction pour le passage à la prochaine leçon
          />
        </div>

        {/* Section de contenu du cours */}
        <div>
          <CourseContentSection 
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={true}
            watchMode={true}
            completedChapter={completedChapter}
            setActiveChapterIndex={setActiveChapterIndex} 
          />
        </div>
      </div>
    </div>
  ) : (
    <p>Loading course details...</p>
  );
}

export default WatchCourse;
