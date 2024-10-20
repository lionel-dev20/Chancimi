"use client"
import CourseList from "./_components/CourseList";
import SideBanners from "./_components/SideBanners";
import WelcomeBanner from "./_components/WelcomeBanner";

const Course = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-5 p-5 gap-5">
          
          {/* Left container */}
            <div className="sm:col-span-4">
                {/* banner */}
            <WelcomeBanner />

            {/* Cours List return */}
             <CourseList />

            </div>
          {/* Right container */}
            <div className="">
              <SideBanners />
            </div>
            
        </div>
     );
}
 
export default Course;