interface CardProps {
  children: any;
}
const Card = ({ children }: CardProps) => (
  <div className="bg-white text-center place-self-center text-black">
    {children}
  </div>
);
const ContactMeOption1 = () => {
  return (
    <div>
      <h1>Get In Touch</h1>
      <Card>
        <div>www.linkedin.com/in/steven-van-blerk</div>
        <div>stevenvanblerkrsa@gmail.com</div>
        <div>Mobile: +27 76 885 4323 </div>
        <div>Cape Town, South Africa</div>
        <button>download cv</button>
      </Card>
    </div>
  );
};

export default ContactMeOption1;
