import Container from "./../Container";

const MissionAndVision = () => {
  return (
    <div className="bg-[url('')] bg-cover bg-fixed text-white">
      <div className="bg-[#1a2a64] bg-opacity-80 size-full">
        <Container>
          <div className="flex flex-col md:flex-row gap-14 text-center py-16 sm:py-18 lg:py-20">
            <div className="pb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Our Mission
              </h2>
              <p className="pt-4 text-lg">
                Our mission is to revolutionize urban transportation by
                providing a convenient, eco-friendly bike-sharing service that
                empowers individuals to move freely and sustainably. We aim to
                promote healthier lifestyles, reduce traffic congestion, and
                contribute to greener cities by making biking accessible to
                everyone.
              </p>
            </div>
            <div className="pb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Our Vision
              </h2>
              <p className="pt-4 text-lg">
                Our vision is to become the leading bike-sharing platform,
                fostering a global shift towards environmentally conscious
                transportation. We aspire to create a future where cycling is a
                preferred mode of urban mobility, reducing pollution and
                enhancing the quality of life in cities worldwide.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MissionAndVision;
