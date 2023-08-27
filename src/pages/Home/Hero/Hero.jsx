import heroImg from "../../../assets/images/school/school_1.jpg";
import heroImg2 from "../../../assets/images/school/school_2.jpeg";
import HeroSlide from "./HeroSlide";
const heroData = [
  {
    title: "আকানগর এস ই এস ডিপি মডেল উচ্চ বিদ্যালয়",
    description: "Since 2012",
    image: heroImg,
  },
  {
    title: "আকানগর এস ই এস ডিপি মডেল উচ্চ বিদ্যালয়",
    description: "Students Growing, Learning Together Strong",
    image: heroImg2,
  },
];
const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <HeroSlide heroData={heroData} />
    </div>
  );
};

export default Hero;
