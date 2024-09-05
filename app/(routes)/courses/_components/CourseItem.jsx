import Image from 'next/image'
import LogoFree from './LogoFree'
import LogoPaid from './LogoPaid'

function CourseItem({ course }) {
  return (
    <div className='border rounded-[8px] border-opacity-50 hover:shadow-lg hover:shadow-slate-200 cursor-pointer hover:transition-all hover:duration-100 hover:ease-in-out'>
      <Image
        src={course.banner?.url}
        width={500}
        height={150}
        alt='banner'
        className='rounded-t-[8px]'
      />
      <div className='flex flex-col gap-2 p-2'>
        <h2 className='font-semibold text-gray-700 text-xl'>{course.name}</h2>
        <h2 className='text-[14px] text-gray-500'>
          Formateur :{' '}
          <span className='font-medium text-[14px] text-gray-700'>
            {course.author}
          </span>
        </h2>
        <div className='flex gap-2'>
          {/* <Image src='/chapter.png' width={24} height={24} alt='free' /> */}
          <h2 className='text-gray-500 font-medium text-[14px]'>
            Vous pouvez suivre ce cours
          </h2>
        </div>

        <div className='flex items-center gap-2 mt-2'>
          {course?.freeCourse ? <LogoFree /> : <LogoPaid />}
          <span className='text-gray-500 font-medium text-[14px]'>
            {course?.freeCourse ? 'Gratuit' : 'Payant'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
