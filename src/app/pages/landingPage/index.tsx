import BlueprintGridAnimation from "@/bespokeSystem/components/BlueprintGridAnimation";
import ContactMeOption1 from "./ContactMeOption1";
import EducationOption1 from "./EducationOption1";
import IntroductionOption1 from "./IntroductionOption1";
import SkillsOption1 from "./SkillsOption1";
import WorkExperienceOption1 from "./WorkExperienceOption1";

const LandingPage = () => {
  return (
    <div className="grid gap-10 bg-black">
      <IntroductionOption1 />
      <BlueprintGridAnimation />
      <SkillsOption1 />
      <WorkExperienceOption1 />
      <EducationOption1 />
      <ContactMeOption1 />
    </div>
  );
};

export default LandingPage;
