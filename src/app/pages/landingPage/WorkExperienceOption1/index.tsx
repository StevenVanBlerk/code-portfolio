interface CardProps {
  children: any;
}
const Card = ({ children }: CardProps) => (
  <div className="bg-white text-center place-self-center text-black">
    {children}
  </div>
);

const WorkExperienceOption1 = () => {
  return (
    <div className="grid gap-5">
      <h1>WORK EXPERIENCE</h1>
      <Card>
        <h2>OfferZen Sep 2021 - Present </h2>
        <p>
          My work involves maintaining a recruitment marketplace. The product
          includes a backend app built upon Ruby and GraphQL, and a collection
          of React JS SPAs. I work closely with the design team to continuously
          improve the frontend of the product. My current aspiration is to help
          usher in a design system.
        </p>
      </Card>
      <Card>
        <h2>Mainboard Mar 2021 - Aug 2021</h2>
        <p>
          My work utilised Frontend React JS to build websites for clients.
          Standard features of these sites included highly polished landing
          pages, user input forms, news feeds, social media integration, and
          catalogues. I made a lot of use out of CSS Grid and Flexbox.
        </p>
      </Card>
      <Card>
        <h2>SAEON Oct 2019 - Feb 2021 </h2>
        <p>
          I was employed as a Frontend React JS Developer though it is more
          accurate to say my work was Full Stack. Most of my work allowed
          researchers to manage and view data. This included highly detailed and
          interactive visual charts, input forms, and an interface to allow
          users to query databases with SQL.
        </p>
      </Card>
      <Card>
        <h2>Brainwave Projects Jun 2018 - Sept 2019 </h2>
        <p>
          The majority of my work was Back-end in C#. and included automating
          data report building, usually from MS SQL to a webpage or an Excel
          export. Other work included an e-Catalogue site and a call centre
          dialler.
        </p>
      </Card>
    </div>
  );
};

export default WorkExperienceOption1;
