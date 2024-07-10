import Demo from "./Demo";

const DemosPage = () => {
  return (
    <ul className="grid grid-cols-1 gap-4">
      <li>
        <Demo
          name="Emotion wheel"
          deploymentHref="https://emotion-wheel.vercel.app/"
          codebaseHref="https://github.com/StevenVanBlerk/emotion-wheel"
          screenshotSrc="/images/demos/emotion wheel.png"
        >
          <p>
            This project was built as part of the Healthy Gamer MAYke-IT 2024
            hackathon. The intention of this project is to be a web based
            interactive emotion wheel, which is a commonly used tool to help one
            identify their own emotions,
          </p>
        </Demo>
      </li>

      <li>
        <Demo
          name="Custom eslint rules"
          deploymentHref="https://emotion-wheel.vercel.app/"
          codebaseHref="https://github.com/StevenVanBlerk/emotion-wheel"
        >
          something something
        </Demo>
      </li>
    </ul>
  );
};

export default DemosPage;
