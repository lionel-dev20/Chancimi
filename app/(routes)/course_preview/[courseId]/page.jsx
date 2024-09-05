"use client"

import React, { useEffect, useState } from 'react'
import CoursVideoDescription from './_components/CoursVideoDescription';
import GlobalApi from '@/app/_utils/GlobalApi';
import CourseEnrollSection from './_components/CourseEnrollSection';
import CourseContentSection from './_components/CourseContentSection';
import { useUser } from '@clerk/nextjs';

function CoursePreview({params}) {
  
  const {user} = useUser();
  const [isUserAlreadyEnrolled, SetIsUserAlreadyEnrolled] =useState('');
  const [courseInfo, setCourseInfo] = useState([]);
    useEffect(()=>{   
  params&&getCourseInfoById(); 
},[params]);


useEffect(()=>{
  courseInfo&&user&&checkUserEnrolledToCourse();
}, [courseInfo, user])

// used to get Course Info By Slug/Id Name
const getCourseInfoById = () =>{
    GlobalApi.getCourseById(params?.courseId).then(resp =>{
        setCourseInfo(resp?.courseList);
        
    })
}

/*
/***
 * To check user already enrolled to cour
 */

const checkUserEnrolledToCourse=()=>{
  GlobalApi.checkUserEnrolledToCourse(courseInfo.slug,user.primaryEmailAddress.emailAddress).then(resp =>{
    if(resp?.userEnrollCourses[0]){
      console.log(resp);  
      SetIsUserAlreadyEnrolled(resp?.userEnrollCourses[0]?.id);
    }
  })
}
  return courseInfo&&(
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-5'>
        {/* Title, Video and description */}
        <div className='col-span-2 bg-white p-3 rounded-[8px]'>
            <CoursVideoDescription courseInfo={courseInfo}/>
        </div> 
        {/* Course content  */}
        <div>
         <CourseEnrollSection  courseInfo={courseInfo}
         isUserAlreadyEnrolled={isUserAlreadyEnrolled}/>

         <CourseContentSection courseInfo={courseInfo}
         isUserAlreadyEnrolled={isUserAlreadyEnrolled}/>
         </div>
    </div>
  )
}

export default CoursePreview