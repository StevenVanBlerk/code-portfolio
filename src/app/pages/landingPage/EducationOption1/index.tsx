interface CardProps {
  children: any;
}
const Card = ({ children }: CardProps) => (
  <div className="bg-white text-center place-self-center text-black">
    {children}
  </div>
);
const EducationOption1 = () => {
  return (
    <div>
      <h1>EDUCATION</h1>
      <Card>
        <h2>University of the Western Cape</h2>
        <div>Jan 2015 - Dec 2018</div>
        <div>Bachelor of Science, Physics</div>
      </Card>
    </div>
  );
};

export default EducationOption1;
