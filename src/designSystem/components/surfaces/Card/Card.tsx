type CardProps = { children: React.ReactNode; className?: string };

const Card = ({ children, className = "" }: CardProps) => (
  <section
    className={`w-fit rounded-sm border-4 border-light-charcoal bg-charcoal p-3 ${className}`}
  >
    {children}
  </section>
);

export default Card;
