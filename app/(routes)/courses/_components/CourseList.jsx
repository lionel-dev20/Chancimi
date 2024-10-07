import React, { useState, useEffect } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton"

import CourseItem from './CourseItem'; // Assurez-vous que ce composant existe et fonctionne correctement
import Link from 'next/link';

function CourseList() {
  const [courseList, setCourseList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllCourses();
  }, []);

  // Fetch data of Course List
  const getAllCourses = () => {
    GlobalApi.getAllCourseList()
      .then(resp => {
        // Vérifiez la structure de la réponse et ajustez l'accès aux données
        if (resp && resp.courseLists) {
          setCourseList(resp.courseLists);
        } else {
          setCourseList([]); // Définit comme un tableau vide si la réponse est incorrecte
          console.error("La structure de la réponse API ne contient pas de cours.");
        }
      })
      .catch(err => {
        setError("Erreur lors du chargement des cours.");
        console.error("Erreur API:", err);
      });
  };

  return (
    <div className='p-5 bg-white rounded-[4px] mt-3'>
      {/* Show filter and title */}
      <div className='flex items-center justify-between'>
        <h2 className='text-[24px] font-bold text-primary'>Tous les cours</h2>
        <Select>
          <SelectTrigger className="w-[180px] rounded-[4px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="free">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Display courses */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
        {error && <p className="text-red-500">{error}</p>}
        {courseList.length > 0 ? (
          courseList.map((item, index) => (
            <Link  href={'/course_preview/'+item.slug} key={index}>
            <div>
              {/* Utilisez le composant CourseItem ou ajustez selon vos besoins */}
              <CourseItem course={item} />  
            </div>
            </Link>
          ))
        ) : (
         [1,2,3,4,5,6,7].map((item, index) =>(
          <div key={index} className='w-full h-[240px] rounded-[8px] m-2 bg-slate-300 animate-pulse'>

          </div>
         ))
        )}
      </div>
    </div>
  );
}

export default CourseList;
