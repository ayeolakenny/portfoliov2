import Image from "next/image";

const About: React.FC<{}> = () => (
  <section className="py-16" id="about">
    <div className="text-center">
      <h2 className="text-3xl mb-8">A BIT ABOUT ME! 😎</h2>
      <Image
        src="/images/me.jpg"
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="text-2xl max-w-2xl my-8 mx-auto">
        Hey! My name is Kehinde and I'm a fullstack React.js/Node.js developer
        from Lagos, Nigeria currently pursuing a degree in Computer Science. I
        aspire toward a career that will allow me to channel my creativity
        through crafting scalable software and engaging experiences.
      </p>
      <br />
      <p className="text-xl max-w-xl mx-auto">
        My favorite technologies right now are: <br /> React.js, Typescript,
        GraphQL, Node.js, and MongoDB
      </p>
    </div>
  </section>
);

export default About;
