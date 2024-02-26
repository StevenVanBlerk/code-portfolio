import GenerativeBlueprint from "@/bespokeSystem/components/GenerativeBlueprint";
import ContactMeOption1 from "./ContactMeOption1";
import EducationOption1 from "./EducationOption1";
import IntroductionOption1 from "./IntroductionOption1";
import SkillsOption1 from "./SkillsOption1";
import WorkExperienceOption1 from "./WorkExperienceOption1";

const Button = ({ children }) => {
  return (
    <button style={{ fontSize: "26px", margin: "8px", padding: "2px" }}>
      {children}
    </button>
  );
};
const LandingPage = () => {
  return (
    <div className="grid gap-10">
      <span
        style={{
          position: "absolute",
          left: "0",
          // opacity: "0.7",
        }}
      >
        <GenerativeBlueprint />
      </span>

      <span
        style={{
          position: "absolute",
          right: "0",
          // opacity: "0.7",
        }}
      >
        <GenerativeBlueprint />
      </span>

      <div
        style={{
          // maxWidth: "600px",
          margin: "auto",
          marginTop: "32px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 50px)",
          fontFamily: "Minimalist",
        }}
      >
        <div style={{ margin: "auto" }}>
          <h1
            style={{
              fontSize: "80px",
              marginTop: "16px",
            }}
          >
            S T E V E N&nbsp;&nbsp;V A N&nbsp;&nbsp;B L E R K
          </h1>
          <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>
            Frontend&nbsp;engineer
          </h2>
          <Button>Github</Button>
          <Button>Storybook</Button>
          <Button> Creative coding</Button>
          <Button>About me</Button>
          <Button>Download CV</Button>
        </div>
        {/* <IntroductionOption1 />
        <SkillsOption1 />
        <WorkExperienceOption1 />
        <EducationOption1 />
        <ContactMeOption1 /> */}
      </div>
    </div>
  );
};

export default LandingPage;
