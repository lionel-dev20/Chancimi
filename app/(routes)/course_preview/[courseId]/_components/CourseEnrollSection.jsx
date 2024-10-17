"use client";

import GlobalApi from '/app/_utils/GlobalApi';
import { Button } from '/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import React, { useEffect } from 'react';
import { ArrowBigLeft } from 'lucide-react';

function CourseEnrollSection({ courseInfo, isUserAlreadyEnrolled, onCourseEnrolled }) {
  const membership = false;
  const { user } = useUser();
  const router = useRouter();

  // Effect to log when component mounts
  useEffect(() => {
    console.log("isUserAlreadyEnrolled:", isUserAlreadyEnrolled);
  }, [isUserAlreadyEnrolled]);

  // Function to handle course enrollment
  const onEnrollCourse = () => {
    if (!courseInfo?.slug || !user?.primaryEmailAddress?.emailAddress) {
      toast.error("Missing course or user information!");
      return;
    }

    GlobalApi.enrollToCourse(courseInfo.slug, user.primaryEmailAddress.emailAddress)
      .then(resp => {
        console.log("Enrollment Response:", resp);
        if (resp) {
          toast.success("User Enrolled Successfully", {
            description: "User Enrolled to this Course",
          });
          
          // Call the callback function to pass the course ID
          onCourseEnrolled(resp.createUserEnrollCourse.id);
          router.push('/watch-course/' + resp.createUserEnrollCourse.id);
        }
      })
      .catch(error => {
        console.error("Enrollment Error:", error);
        toast.error("Failed to enroll in course.");
      });
  };

  return (
    <div className='p-5 text-center rounded-[4px] bg-primary'>
      <h2 className='text-[24px] font-bold text-white'>Inscription au cours</h2>

      {user && (membership || courseInfo?.freeCourse) && !isUserAlreadyEnrolled ? (
        <div className='flex flex-col gap-3 mt-3'>
          <p className='text-[16px] text-white font-light'>Inscrivez-vous maintenant pour démarrer votre apprentissage</p>
          <Button onClick={onEnrollCourse} className="bg-white text-[18px] text-2xl  text-red-500 px-6 py-4 hover:bg-white hover:text-primary rounded-[4px]">
            S&apos;inscrire maintenant
          </Button>
        </div>
      ) : !user ? (
        <div className='flex flex-col gap-3 mt-3'>
          <p className='text-[16px] text-white text-left font-light'>Pour vous inscrire à ce cours, vous devez être connecté à votre compte sur le site web</p>
          <Link href={'/sign-in'}>
            <Button className="bg-white text-[18px] py-3 mt-3 text-primary hover:bg-white hover:text-primary rounded-[4px]">
              Se connecter pour s&apos;inscrire
            </Button>
          </Link>
        </div>
      ) : !isUserAlreadyEnrolled && (
        <div className='flex flex-col gap-3 mt-3'>
          <p className='text-[16px] text-white font-light'>Les inscriptions sont vérifiées et validées pour l&apos;activation de ce cours</p>
          <Link href='/register'>
            <Button className="bg-white text-[18px] py-3 text-primary hover:bg-white hover:text-primary rounded-[4px]">
              S&apos;inscrire maintenant
            </Button>
          </Link>
        </div>
      )}

      {isUserAlreadyEnrolled && (
        <div className='flex flex-col gap-3 mt-3'>
          <p className='text-[16px] text-white font-light'>Continuer votre apprentissage</p>
          <Link href={'/watch-course/' + isUserAlreadyEnrolled}>
            <Button className="bg-white text-[18px] py-6 px-8 text-red-600 text-xl hover:bg-white hover:text-primary rounded-[4px]">
              Continuer <ArrowBigLeft className='w-8 h-8 ml-3' />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CourseEnrollSection;
