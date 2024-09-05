"use client"

import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import React, { useEffect } from 'react';

function CourseEnrollSection({ courseInfo, isUserAlreadyEnrolled }) {
  const membership = false;
  const { user } = useUser();
  const router = useRouter();

  // Effect to log when component mounts
  useEffect(() => {
    console.log("isUserAlreadyEnrolled:", isUserAlreadyEnrolled);
  }, [isUserAlreadyEnrolled]); // Depend on `isUserAlreadyEnrolled` to make sure it logs correctly

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
          // Show success toast
          toast.success("User Enrolled Successfully", {
            description: "User Enrolled to this Course",
          });

          // Redirect to the watch course page
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
      <h2 className='text-[24px] font-bold text-white'>Enroll to this course</h2>

      {user && (membership || courseInfo?.freeCourse)&&!isUserAlreadyEnrolled ? (
        <div className='flex flex-col gap-3 mt-3'>
          <p className='text-[16px] text-white font-light'>Enroll now to start learning and building the project</p>
          <Button onClick={onEnrollCourse} className="bg-white text-[18px] py-3 text-primary hover:bg-white hover:text-primary rounded-[4px]">
            Enroll Now
          </Button>
        </div>
      ) : !user ? (
        <div className='flex flex-col gap-3 mt-3'>
          <p className='text-[16px] text-white font-light'>Enroll now to start learning and building the project</p>
          <Link href={'/sign-in'}>
            <Button className="bg-white text-[18px] py-3 text-primary hover:bg-white hover:text-primary rounded-[4px]">
              Sign In to Enroll
            </Button>
          </Link>
        </div>
      ) : 
        !isUserAlreadyEnrolled&& <div className='flex flex-col gap-3 mt-3'>
          <p className='text-[16px] text-white font-light'>Buy Monthly Membership and Get Access to all courses</p>
          <Button className="bg-white text-[18px] py-3 text-primary hover:bg-white hover:text-primary rounded-[4px]">
            Buy Membership Just 10,000 FCFA
          </Button>
        </div>
      }

      {/* Above Section User Does not Have membership or Not  */}

      { isUserAlreadyEnrolled&& <div className='flex flex-col gap-3 mt-3'>
          <p className='text-[16px] text-white font-light'>Continue to learn your course</p>
          <Link href={'/watch-course/'+isUserAlreadyEnrolled}><Button className="bg-white text-[18px] py-3 text-primary hover:bg-white hover:text-primary rounded-[4px]">
           Continue
          </Button></Link>
        </div>}
    </div>
  );
}

export default CourseEnrollSection;
