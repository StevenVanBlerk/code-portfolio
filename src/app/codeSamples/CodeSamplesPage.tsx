"use client";

import Sample from "./Sample";
import ScrollProgressSidebar from "./ScrollProgressSidebar";
import { buildExtendedRefs } from "./ScrollProgressSidebar/utils";

// Long term TO-DO: Create an API intensive code demo. Ideally using things like GraphQL, React Query, and/or Redux API.

const CodeSamplesPage = () => {
  const extendedRefs = buildExtendedRefs(7);
  const [ref0, ref1, ref2, ref3, ref4, ref5, ref6] = extendedRefs;

  return (
    <div className="grid grid-cols-[1fr_auto_1fr]">
      <section>
        <ScrollProgressSidebar extendedRefs={extendedRefs} />
      </section>
      <section>
        <ul className="mx-auto mb-10 grid max-w-screen-lg grid-cols-1 gap-12 text-center">
          <li ref={ref0.ref}>
            <Sample
              name="Emotion wheel"
              deploymentHref="https://emotion-wheel.vercel.app/"
              codebaseHref="https://github.com/StevenVanBlerk/emotion-wheel"
              tags={["React", "NextJS", "TypeScript", "Tailwind CSS"]}
            >
              <p>
                This project was built as part of the Healthy Gamer MAYke-IT
                2024 hackathon. The intention of this project is to be a web
                based interactive emotion wheel, which is a commonly used tool
                to help one identify their own emotions.
              </p>
            </Sample>
          </li>

          <li ref={ref1.ref}>
            <Sample
              name="To-do list"
              deploymentHref="https://static-todo-list-stevenvanblerk.vercel.app/"
              codebaseHref="https://github.com/StevenVanBlerk/static-todo-list"
              tags={["React", "NextJS", "JavaScript", "Styled components"]}
            >
              <p>
                This is a technical assignment I completed back in 2023. It is a
                demonstration of custom built UI components with state & form
                management.
              </p>
            </Sample>
          </li>

          <li ref={ref2.ref}>
            <Sample
              name="Storybook"
              deploymentHref="https://66c514322ea1d5858ff5d9d2-htxgmnpyqg.chromatic.com/?path=/docs/configure-your-project--docs"
              codebaseHref="https://github.com/StevenVanBlerk/code-portfolio/tree/main/src/designSystem"
            >
              <p>
                This is a demonstration of storybook documentation. This
                includes the components used to build this portfolio site.
              </p>
            </Sample>
          </li>

          <li ref={ref3.ref}>
            <Sample
              name="Cypress"
              deploymentHref="https://www.youtube.com/watch?v=0ysrRTAMCIU"
              codebaseHref="https://github.com/StevenVanBlerk/lodgify-technical-assignment"
            >
              <p>
                This is a demonstration of unit testing in Cypress. This is
                integrated into the above to-do list project.
              </p>
            </Sample>
          </li>

          <li ref={ref4.ref}>
            <Sample
              name="Penpot"
              deploymentHref="https://www.youtube.com/watch?v=0ysrRTAMCIU"
              codebaseHref="https://github.com/StevenVanBlerk/lodgify-technical-assignment"
            >
              <p>
                Penpot is a popular open-source design software, and an
                alternative to tools like Figma and Adobe XD. I am familiar with
                the other common tools but I prefer the performance and
                usability of Penpot. The best part is that I don&apos;t have to
                fund our Adobe overlords.
              </p>
            </Sample>
          </li>

          <li ref={ref5.ref}>
            <Sample
              name="This portfolio"
              deploymentHref="https://emotion-wheel.vercel.app/"
              codebaseHref="https://github.com/StevenVanBlerk/emotion-wheel"
              hasIFrame={false}
              tags={[
                "React",
                "NextJS",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
              ]}
            >
              <p className="w-full text-center">You&apos;re looking at it.</p>
            </Sample>
          </li>

          <li ref={ref6.ref}>
            <Sample
              name="The previous portfolio"
              deploymentHref="https://personal-portfolio-snowy.vercel.app/"
              codebaseHref="https://github.com/StevenVanBlerk/personal-portfolio"
              tags={[
                "React",
                "NextJS",
                "JavaScript",
                "Styled components",
                "Framer Motion",
              ]}
            >
              <p>
                This is the previous iteration of my portfolio. It is designed
                to read like a CV with some digital flare. It is built with
                NextJS, Styled components, and Framer motion
              </p>
            </Sample>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CodeSamplesPage;
