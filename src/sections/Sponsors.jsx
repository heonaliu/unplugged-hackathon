import logoipsum from "../assets/logoipsum-385.png";
export const Sponsors = () => {
  const sponsors = [
    {
      name: "Test Sponsor",
      logo: logoipsum,
    },
    {
      name: "Test Sponsor",
      logo: logoipsum,
    },
    {
      name: "Test Sponsor",
      logo: logoipsum,
    }
  ]

  return (
    <section className="py-16 px-6 bg-beige text-center">
      <h1 className="text-orange font-rubikOne text-5xl font-bold mb-12">
        Sponsors
      </h1>
      {sponsors.length === 0 ? (
        <p className="text-lg text-bluegray">No sponsors yet...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="w-40 h-40 px-4 flex items-center justify-center bg-white rounded-lg shadow-md">
              <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="max-w-full max-h-full" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
