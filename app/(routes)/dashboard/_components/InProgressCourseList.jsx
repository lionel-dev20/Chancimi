import React from 'react'
import ProgressCourseItem from './ProgressCourseItem'

function InProgressCourseList({userEnrolledCourses}) {
  return (
    <div className='p-5 bg-white mt-3 rounded-[8px]'>
        <h2 className='text-primary text-[20px] font-semibold'>Vos cours actuel</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
           {userEnrolledCourses.map((item, index) =>(
            <ProgressCourseItem key={index} course={item} />
           ))

           }
        </div>
    </div>
  )
}

export default InProgressCourseList