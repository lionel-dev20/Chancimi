import React from 'react'
import Image from 'next/image'
import { Progress } from "/components/ui/progress"
import Link from 'next/link'


function ProgressCourseItem({course}) {

  const getTotalCompletedChapterPerc=(item) =>{
    // (totalCompletedChapter/totalChapter)*100
    const perc = (item.completedChapter?.length/item?.courseList?.chapter?.length)*100
    return perc
  }
  return (
    <Link href={"/course_preview/"+course?.courseList?.slug}>
     <div className='border rounded-[8px] border-opacity-50 hover:shadow-md hover:shadow-slate-200 cursor-pointer hover:transition-all hover:duration-100 hover:ease-in-out'>
      <Image src={course.courseList?.banner.url} width={500} height={150} alt='banner' property="true" className='rounded-t-[8px]'/>
      <div className='flex flex-col gap-2 p-2'>
        <h2 className='font-semibold text-gray-700 text-xl'>{course.courseList?.name}</h2>
        <h2 className='text-[14px] text-gray-500'>Formateur : <span className='font-medium text-[14px] text-gray-700'>{course.courseList?.author}</span></h2>
        <p className='text-[12px] text-gray-700 mt-3'>
          {getTotalCompletedChapterPerc(course)}% 
          <span className='float-right'> {course.completedChapter?.length}/{course?.courseList?.chapter?.length} Chapters</span></p>
        <Progress value={getTotalCompletedChapterPerc(course)} className="h-[8px]"/>
     </div> 
    </div>
    </Link>
  )
}

export default ProgressCourseItem