import Container from "../Container";
import Title from "../shared/Title";

const Testimonials = () => {
  return (
    <div className="py-6 sm:py-8 md:py-10">
      <Container>
        <Title>Testimonials</Title>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="flex h-auto border rounded-xl">
            <div className="flex flex-col bg-white rounded-xl">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base italic md:text-lg text-gray-800">
                  &rdquo;Renting a bike has never been so easy! The process was
                  seamless, and the bike was in excellent condition. I explored
                  Central Park like never before. Highly recommended!&rdquo;
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </div>

                  <div className="grow ml-3">
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      Rajesh K.
                    </p>
                    <p className="text-xs text-gray-500">
                      Product Manager | Capsule
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-auto border rounded-xl">
            <div className="flex flex-col bg-white rounded-xl">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base italic md:text-lg text-gray-800">
                  &rdquo;I rented a mountain bike for my weekend trail
                  adventure, and it was perfect! The customer service team was
                  very responsive, and the prices were unbeatable. I'll
                  definitely be coming back!&rdquo;
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </div>

                  <div className="grow ml-3">
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      Sarah J.
                    </p>
                    <p className="text-xs text-gray-500">
                      Senior Director of Operations | Fitbit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-auto border rounded-xl">
            <div className="flex flex-col bg-white rounded-xl">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base italic md:text-lg text-gray-800">
                  &rdquo;Amazing experience! The selection of bikes is
                  fantastic, and the booking process was super quick. I loved
                  the convenience of being able to pick up and drop off at
                  different locations. Great job!&rdquo;
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                      alt="Image Description"
                    />
                  </div>

                  <div className="grow ml-3">
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      Emma L.
                    </p>
                    <p className="text-xs text-gray-500">
                      Entrepreneur | Happy customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
