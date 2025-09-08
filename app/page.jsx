import HomeBanner from "@/components/Home/HomeBanner";
import AimBanner from "@/components/Home/AimBanner";
import AboutBanner from "@/components/Home/AboutBanner";
import FeaturedCourses  from "@/components/Home/FeaturedCourses";
import StemCourses from "@/components/Home/StemCourses";
import CoachingSection from "@/components/Home/CoachingSection";
import JoinUs from "@/components/Home/JoinUs";

export default function Home() {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <AimBanner></AimBanner>
      <AboutBanner></AboutBanner>
      <FeaturedCourses></FeaturedCourses>
      <StemCourses></StemCourses>
      <CoachingSection></CoachingSection>
      <JoinUs></JoinUs>
    </div>
  );
}
