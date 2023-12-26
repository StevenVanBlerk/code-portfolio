interface CardProps {
  children: any;
}
const Card = ({ children }: CardProps) => (
  <div className="bg-white text-center place-self-center text-black">
    {children}
  </div>
);

const IntroductionOption1 = () => {
  return (
    <Card>
      Hello, and welcome to my site!
      <br /> My name is Steven van Blerk, and I am a Frontend Developer from
      Cape Town, South Africa using JavaScript and React.
      <br />I have a passion for developing high calibre, interactive, and
      robust websites.
    </Card>
  );
};

export default IntroductionOption1;
