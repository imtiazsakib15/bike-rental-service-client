import Title from "../shared/Title";
import Container from "./../Container";

const OurStory = () => {
  return (
    <div className="py-6 sm:py-8 md:py-10">
      <Container>
        <Title>Our Story</Title>

        <p className="text-lg lg:text-xl text-center sm:px-6 md:px-10 lg:px-16 pt-5">
          Welcome to <b>RideEasy</b>, where we’re transforming urban mobility
          through accessible, eco-friendly bike sharing. Our passion for cycling
          and sustainability inspired us to create a service that makes it easy
          for everyone to rent a bike, whether for daily commutes, weekend
          adventures, or quick city trips. With a wide range of well-maintained
          bikes, flexible rental options, and a user-friendly app, we’re here to
          make biking convenient and enjoyable for all. At <b>RideEasy</b>,
          we’re committed to reducing carbon footprints, promoting healthy
          lifestyles, and giving you the freedom to explore your city at your
          own pace.
        </p>
      </Container>
    </div>
  );
};

export default OurStory;
