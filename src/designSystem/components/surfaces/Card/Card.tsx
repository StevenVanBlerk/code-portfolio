type CardProps = { children: React.ReactNode; className?: string };

const Card = ({ children, className = "" }: CardProps) => (
  <section
    className={`w-fit rounded-lg border border-light-charcoal bg-charcoal p-3 ${className}`}
  >
    {children}
  </section>
);

export default Card;
