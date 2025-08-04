import { Link } from "react-router-dom";
import Container from "../Container";
import Title from "../shared/Title";
import { FEATURES } from "@/constants/features.constant";

const WhyChooseUs = () => {
  return (
    <div className="py-6 sm:py-8 md:py-10 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <Title>Why Choose Us</Title>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 sm:pt-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1 bg-blue-100 p-3 rounded-lg text-blue-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-blue-600 font-medium mt-1">
                    {feature.description}
                  </p>
                  <p className="text-gray-600 mt-3">{feature.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              "Google Top Rated 2024",
              "TripAdvisor Excellence",
              "Certified B-Corp",
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center bg-gray-100 px-4 py-2 rounded-full"
              >
                <span className="mr-2 text-blue-600">
                  {idx === 0 ? "✓" : idx === 1 ? "★" : "♻"}
                </span>
                <span className="font-medium">{badge}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              to="/all-bikes"
              className="inline-block text-center font-medium bg-blue-900 text-white py-3 px-8 rounded-md hover:bg-blue-950 transition-colors"
            >
              Explore Our Bikes
            </Link>
            <Link
              to="/safety"
              className="inline-block text-center font-medium bg-white text-blue-900 border-2 border-blue-900 py-3 px-8 rounded-md hover:bg-blue-50 transition-colors"
            >
              See Safety Standards
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
