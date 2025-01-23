import Lottie from "lottie-react";
import contact from "@/assets/contact.json";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CONTACT_US_FORM_SCHEMA } from "@/constants/contactUs.constant";
import { toast } from "sonner";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-12 lg:pt-16">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-bold">
        Contact Us
      </h1>
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
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
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
