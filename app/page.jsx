import About from "@/components/About";
import Banner from "@/components/Banner";
import Coaching from "@/components/Coaching";
import Courses from "@/components/Courses";
import FeatureCourse from "@/components/FeatureCourse";
import Modern from "@/components/Modern";
import Teach from "@/components/Teach";


export default function Home() {
  return (
    <>
      <Banner/>
      <Modern/>
      <About/>
      <FeatureCourse/>
      <Courses/>
      <Coaching/>
      <Teach/>
    </>
  );
}
