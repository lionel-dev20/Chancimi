"use client"


import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import SideBanners from '../courses/_components/SideBanners';
import WelcomeBannerDashboard from './_components/WelcomeBannerDashboard';
import InProgressCourseList from './_components/InProgressCourseList';
import GlobalApi from '/app/_utils/GlobalApi';

function Dashboard() {
  const {user} =  useUser();
  const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);
   useEffect(()=>{
    user&&getAllUserEnrolledCourses();
   },[user])
 

   /**
    * Get all User Enrolled Course List
    */
  const getAllUserEnrolledCourses = () =>{
    GlobalApi.getUserAllEnrolledCourseList(user.primaryEmailAddress.emailAddress).then(resp=>{
      console.log(resp);
      setUserEnrolledCourses(resp.userEnrollCourses);
      
    })  
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
          
    {/* Left container */}
      <div className="col-span-3">
          {/* banner */}
      <WelcomeBannerDashboard user={user} />
      {/* In Progress Course List */}
      <InProgressCourseList userEnrolledCourses={userEnrolledCourses}/>
      </div>
    {/* Right container */}
      <div className="">
        <SideBanners />
      </div>
      
  </div>
  )
}

export default Dashboard