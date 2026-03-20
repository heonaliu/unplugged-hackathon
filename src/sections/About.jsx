export const About = () => {
  return (
    <section className="py-10 px-6 text-center">
      <h1 className="text-orange font-rubikOne text-5xl font-bold mb-12">
        Welcome
      </h1>
      <p className="flex flex-col mt-6 text-lg md:text-xl text-bluegray max-w-xl items-center mx-auto">
        <span className="py-2">Unplugged is a hackathon hosted by NNHS Programming Club. </span>
          <span>A beginner-friendly chill hackathon where people can build anything they like with programming (including Scratch). The main goal would be to get people into the STEM field and apply what they learned in their high school CS classes.</span>
        <span className="py-2">Whether you're a coding pro or just starting out, there's a place for you here!</span>
      </p>
    </section>
  );
};