import React from 'react';
import VideoPlayer from './VideoPlayer';
import Markdown from 'react-markdown';
import { Button } from '@/components/ui/button';

function CoursVideoDescription({ courseInfo, activeChapterIndex, watchMode=false, setChapterCompleted}) {
  // Vérification que le chapitre et la vidéo existent
  const hasVideo = courseInfo?.chapter && courseInfo.chapter.length > 0 && courseInfo.chapter[0]?.video?.url;

  return (
    <div>
      <h2 className="text-xl font-medium text-gray-700">{courseInfo.name || 'Course Title'}</h2>
      <p className="text-[14px] text-gray-500 mb-3">{courseInfo.author || 'Author Name'}</p>
      
      {/* Affiche le lecteur vidéo si une vidéo est disponible */}
      {hasVideo ? (
        <VideoPlayer videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url} poster={!watchMode?courseInfo?.banner?.url : null} />
      ) : (
        <p className="text-red-500">Aucune vidéo disponible pour ce cours.</p>
      )}

      {/* Description course */}
      <p className='mt-5 text-[16px] font-semibold text-gray-700'>
        {watchMode?
        <span className='flex items-center justify-between'>{courseInfo?.chapter[activeChapterIndex]?.name}
        <Button onClick={()=>setChapterCompleted(courseInfo?.chapter[activeChapterIndex]?.id)}>Mark completed</Button>
        </span>
        :
        <span>About this course</span> }
      </p>

      {watchMode?
       <Markdown className='text-[14px] font-light mt-4 leading-6 text-gray-700'>
       {courseInfo?.chapter[activeChapterIndex]?.shortDescription}
     </Markdown> :
     <Markdown className='text-[14px] font-light mt-4 leading-6 text-gray-700'>
     {courseInfo.description || 'No description available.'}
   </Markdown>
      }
      
    </div>
  );
}

export default CoursVideoDescription;
