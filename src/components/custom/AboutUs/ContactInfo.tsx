import { Clock, Locate, Phone } from "lucide-react";
import Container from "./../Container";

const ContactInfo = () => {
  return (
    <div className="py-6 sm:py-8 md:py-10">
      <Container>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-bold">
          Contact Info
        </h1>
        <div className="text-center grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          <div className="border rounded-lg p-8">
            <Phone className="mx-auto size-8 text-blue-900" />
            <h5 className="text-xl sm:text-2xl font-medium pt-4">
              LET’S HAVE A CHAT!
            </h5>
            <address className="sm:text-lg text-gray-600 pt-2">
              <p>Phone: 222-333-4444</p>
              <p>Toll-Free: 444-555-6666</p>
              <p>Fax: 666-777-8888</p>
            </address>
          </div>

          <div className="border rounded-lg p-8">
            <Locate className="mx-auto size-8 text-blue-900" />
            <h5 className="text-xl sm:text-2xl font-medium pt-4">
              VISIT OUR LOCATION
            </h5>
            <address className="sm:text-lg text-gray-600 pt-2">
              <p>1714 Malibagh Rd.</p>
              <p>Dhaka, Bangladesh</p>
            </address>
          </div>

          <div className="border rounded-lg p-8">
            <Clock className="mx-auto size-8 text-blue-900" />
            <h5 className="text-xl sm:text-2xl font-medium pt-4">WE'RE OPEN</h5>
            <address className="sm:text-lg text-gray-600 pt-2">
              <p>Saturday - Thursday: 8am - 5pm</p>
            </address>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactInfo;
