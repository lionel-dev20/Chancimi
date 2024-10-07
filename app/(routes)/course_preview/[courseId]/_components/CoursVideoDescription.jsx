import React from 'react';
import VideoPlayer from './VideoPlayer';
import Markdown from 'react-markdown';
import { Button } from '@/components/ui/button';

function CoursVideoDescription({ courseInfo = {}, activeChapterIndex, watchMode = false, setChapterCompleted, completedChapter = [] }) {
  // Vérification de la présence de courseInfo et de ses chapitres
  const chapters = courseInfo?.chapter || []; // Définit chapters à un tableau vide si courseInfo.chapter est undefined
  const hasVideo = chapters.length > 0 && chapters[0]?.video?.url;

  // Vérification si c'est le dernier chapitre
  const isLastChapter = chapters.length - 1 === activeChapterIndex;

  // Vérification si le chapitre actuel est complété
  const isCurrentChapterCompleted = Array.isArray(completedChapter) && completedChapter.some(
    chap => chap.chapterId === chapters[activeChapterIndex]?.id
  );  

  // Vérification si le dernier chapitre est complété
  const isLastChapterCompleted = isLastChapter && isCurrentChapterCompleted;

  // Déterminer le texte et l'état du bouton en fonction de la progression
  const renderCompletionButton = () => {
    // Afficher "Cours terminé" si c'est le dernier chapitre et qu'il est complété
    if (isLastChapterCompleted) {
      return <p className="text-green-600 font-bold">Cours terminé 🎉</p>;
    }

    // Désactiver le bouton pour le dernier chapitre si déjà complété
    const isDisabled = isCurrentChapterCompleted || (isLastChapter && isCurrentChapterCompleted);

    return (
      <Button
        className="rounded-[4px]"
        onClick={() => setChapterCompleted(chapters[activeChapterIndex]?.id)}
        disabled={isDisabled}
      >
        {isCurrentChapterCompleted ? 'Chapitre complété' : 'Marquez comme terminé'}
      </Button>
    );
  };

  return (
    <div>
      <h2 className="text-xl font-medium text-gray-700">{courseInfo.name || 'Course Title'}</h2>
      <p className="text-[14px] text-gray-500 mb-3">{courseInfo.author || 'Author Name'}</p>
      
      {/* Affiche le lecteur vidéo si une vidéo est disponible */}
      {hasVideo ? (
        <VideoPlayer
          videoUrl={chapters[activeChapterIndex]?.video?.url}
          poster={!watchMode ? courseInfo?.banner?.url : null}
        />
      ) : (
        <p className="text-red-500">Aucune vidéo disponible pour ce cours.</p>
      )}

      {/* Description course */}
      <p className="mt-5 text-[16px] font-semibold text-gray-700">
        {watchMode ? (
          <span className="flex items-center justify-between">
            {chapters[activeChapterIndex]?.name}
            {renderCompletionButton()}
          </span>
        ) : (
          <span>A propos de ce cours</span>
        )}
      </p>

      {watchMode ? (
        <Markdown className="text-[14px] font-light mt-4 leading-6 text-gray-700">
          {chapters[activeChapterIndex]?.shortDescription}
        </Markdown>
      ) : (
        <Markdown className="text-[14px] font-light mt-4 leading-6 text-gray-700">
          {courseInfo.description || 'No description available.'}
        </Markdown>
      )}
    </div>
  );
}

export default CoursVideoDescription;
