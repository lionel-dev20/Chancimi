import Image from 'next/image'
function CourseItem({course}) {
 
  return (
    <div className='border rounded-[8px] border-opacity-50 hover:shadow-md hover:shadow-slate-200 cursor-pointer hover:transition-all hover:duration-100 hover:ease-in-out'>
      <Image src={course.banner?.url} width={500} height={150} alt='banner' property className='rounded-t-[8px]'/>
      <div className='flex flex-col gap-2 p-2'>
        <h2 className='font-semibold text-gray-700 text-xl'>{course.name}</h2>
        <h2 className='text-[14px] text-gray-500'>Formateur : <span className='font-medium text-[14px] text-gray-700'>{course.author}</span> </h2>
     </div> 
    </div>
  )
}

export default CourseItem