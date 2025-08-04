import Lottie from "lottie-react";
import contact from "@/assets/contact.json";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CONTACT_US_FORM_SCHEMA } from "@/constants/contactUs.constant";
import { toast } from "sonner";
import InputField from "../FormFields/InputField";
import TextareaField from "../FormFields/TextareaField";
import Title from "../shared/Title";

const ContactUs = () => {
  const form = useForm<z.infer<typeof CONTACT_US_FORM_SCHEMA>>({
    resolver: zodResolver(CONTACT_US_FORM_SCHEMA),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async () => {
    toast.success("Message sent successfully");
    form.reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <Title>Contact Us</Title>

      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="w-72 mx-auto sm:w-1/2">
          <Lottie animationData={contact} loop={false} />
        </div>
        <div className="sm:w-1/2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="sm:w-2/3 space-y-6 mx-auto"
            >
              <InputField control={form.control} name="name" label="Name" />
              <InputField control={form.control} name="email" label="Email" />
              <TextareaField
                control={form.control}
                name="message"
                label="Message"
              />

              <Button type="submit">Sent</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
