import BlueprintAnimation from "@/bespokeSystem/components/BlueprintGridAnimation";
import ContactMeOption1 from "./ContactMeOption1";
import EducationOption1 from "./EducationOption1";
import IntroductionOption1 from "./IntroductionOption1";
import SkillsOption1 from "./SkillsOption1";
import WorkExperienceOption1 from "./WorkExperienceOption1";

const LandingPage = () => {
  return (
    <div className="grid gap-10" style={{ background: "#1e1e1e" }}>
      <IntroductionOption1 />
      <BlueprintAnimation />
      <SkillsOption1 />
      <WorkExperienceOption1 />
      <EducationOption1 />
      <ContactMeOption1 />
    </div>
  );
};

export default LandingPage;
