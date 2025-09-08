import CoursesHeading from "@/components/Headings/CoursesHeading";
import CoursesCard from "@/components/Cards/CoursesCard";


const coursesData = [
  {
    id: 1,
    title: "Biology",
    level: "Beginner",
    duration: "48 Months",
    category: "STEM Courses",
    categoryIcon: "/category-icon3.webp",
    price: "PKR. 8,900.00/Month",
    image: "/arabic-for-adults.webp",
    link: "#",
  },
  {
    id: 2,
    title: "Chemistry",
    level: "Beginner",
    duration: "48 Months",
    category: "STEM Courses",
    categoryIcon: "/category-icon3.webp",
    price: "PKR. 8,900.00/Month",
    image: "/arabic-for-kids.webp",
    link: "#",
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="container mx-auto px-4 py-12">

        {/* Skill Development */}
        <CoursesHeading title="Courses" highlight="Skill Development">
        </CoursesHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course) => (
            <CoursesCard key={course.id} course={course} />
          ))}
        </div>

        {/* Coaching Sessions */}
        <CoursesHeading title="Sessions" highlight="Coaching & Counseling">
        </CoursesHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course) => (
            <CoursesCard key={course.id} course={course} />
          ))}
        </div>

        {/* Upcoming */}
        <CoursesHeading title="Courses" highlight="Upcoming">
        </CoursesHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course) => (
            <CoursesCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
