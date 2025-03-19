import { Clock, Locate, Phone } from "lucide-react";
import Container from "./../Container";
import Title from "../shared/Title";

const ContactInfo = () => {
  return (
    <div className="py-6 sm:py-8 md:py-10">
      <Container>
        <Title>Contact Info</Title>

        <div className="text-center grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          <div className="border rounded-lg p-8">
            <Phone className="mx-auto size-8 text-blue-900" />
            <h5 className="text-xl sm:text-2xl font-medium pt-4">
              LET’S HAVE A CHAT!
            </h5>
            <address className="sm:text-lg text-gray-600 pt-2">
              <p>Phone: 222-333-4444</p>
              <p>Toll-Free: 444-555-6666</p>
              <p>Email: admin@rideeasy.com</p>
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
