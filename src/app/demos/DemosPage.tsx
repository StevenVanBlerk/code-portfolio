"use client";

import Demo from "./Demo";
import ScrollProgressSidebar from "./ScrollProgressSidebar";
import { buildExtendedRefs } from "./ScrollProgressSidebar/utils";

const DemosPage = () => {
  const extendedRefs = buildExtendedRefs(6);
  const [ref0, ref1, ref2, ref3, ref4, ref5] = extendedRefs;

  return (
    <div className="grid grid-cols-[1fr_auto_1fr]">
      <section>
        <ScrollProgressSidebar extendedRefs={extendedRefs} />
      </section>
      <section>
        <ul className="mx-auto grid max-w-screen-lg grid-cols-1 gap-12 text-center">
          <li ref={ref0.ref}>
            <Demo
              name="Emotion wheel"
              deploymentHref="https://emotion-wheel.vercel.app/"
              codebaseHref="https://github.com/StevenVanBlerk/emotion-wheel"
              previewSrc="/images/demos/emotion wheel.png"
            >
              This project was built as part of the Healthy Gamer MAYke-IT 2024
              hackathon. The intention of this project is to be a web based
              interactive emotion wheel, which is a commonly used tool to help
              one identify their own emotions.
            </Demo>
          </li>

          <li ref={ref1.ref}>
            <Demo
              name="To-do list"
              deploymentHref="https://lodgify-technical-assignment.vercel.app/"
              codebaseHref="https://github.com/StevenVanBlerk/emotion-wheel"
              previewSrc="/images/demos/emotion wheel.png"
            >
              This is a technical assignment I completed back in 2023. It is a
              demonstration of custom built UI components with state & form
              management.
            </Demo>
          </li>

          <li ref={ref2.ref}>
            <Demo
              name="Cypress"
              deploymentHref="https://lodgify-technical-assignment.vercel.app/"
              codebaseHref="https://github.com/StevenVanBlerk/lodgify-technical-assignment"
              previewSrc="/images/demos/emotion wheel.png"
            >
              This is a demonstration of unit testing in Cypress. This is
              integrated into the above to-do list project.
            </Demo>
          </li>

          <li ref={ref3.ref}>
            <Demo
              name="Storybook"
              deploymentHref="https://lodgify-technical-assignment.vercel.app/"
              codebaseHref="https://github.com/StevenVanBlerk/lodgify-technical-assignment"
              previewSrc="/images/demos/emotion wheel.png"
            >
              This is a demonstration of storybook documentation. This includes
              the components used to build this portfolio site.
            </Demo>
          </li>

          <li ref={ref4.ref}>
            <Demo
              name="This portfolio"
              deploymentHref="https://emotion-wheel.vercel.app/"
              codebaseHref="https://github.com/StevenVanBlerk/emotion-wheel"
              previewSrc="/images/demos/emotion wheel.png"
            >
              You&apos;re looking at it. This is built primarily using NextJS,
              Tailwind CSS, and Framer motion.
            </Demo>
          </li>

          <li ref={ref5.ref}>
            <Demo
              name="My previous portfolio"
              deploymentHref="https://personal-portfolio-snowy.vercel.app/"
              codebaseHref="https://github.com/StevenVanBlerk/personal-portfolio"
              previewSrc="/images/demos/emotion wheel.png"
            >
              This is the previous iteration of my portfolio. It is designed to
              read like a CV but with digital flare. It is built with NextJS,
              Styled components, and Framer motion
            </Demo>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DemosPage;
