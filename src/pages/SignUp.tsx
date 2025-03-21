import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Container from "@/components/custom/Container";
import { useSignupMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { Loader2 } from "lucide-react";
import { SIGN_UP_FORM_SCHEMA } from "@/constants/signUp.constant";
import InputField from "@/components/custom/FormFields/InputField";
import { useNavigate } from "react-router-dom";
import signUpImage from "@/assets/svg/sign-up.svg";
import Title from "@/components/custom/shared/Title";

const SignUp = () => {
  const form = useForm<z.infer<typeof SIGN_UP_FORM_SCHEMA>>({
    resolver: zodResolver(SIGN_UP_FORM_SCHEMA),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    },
  });
  const [signup, { isLoading }] = useSignupMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: z.infer<typeof SIGN_UP_FORM_SCHEMA>) => {
    try {
      const result = await signup(data).unwrap();
      if (result?.success) {
        const user = { email: result.data.email, role: result.data.role };

        dispatch(setUser({ user, token: result.token }));
        toast.success(result.message || "Sign up successfully");
        navigate("/");
        form.reset();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message || "An error occurred");
    }
  };

  return (
    <Container>
      <div className="py-6 sm:py-8 lg:py-12">
        <Title>Sign Up Now</Title>

        <div className="md:grid md:grid-cols-2 md:gap-6 md:items-center mt-5">
          <img className="hidden md:block" src={signUpImage} alt="Sign Up" />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6 mx-auto"
            >
              <InputField control={form.control} name="name" label="Name" />
              <InputField control={form.control} name="email" label="Email" />
              <InputField
                control={form.control}
                name="password"
                label="Password"
                type="password"
              />

              <div className="grid lg:grid-cols-2 gap-6">
                <InputField
                  control={form.control}
                  name="phone"
                  label="Phone No"
                  type="tel"
                />

                <InputField
                  control={form.control}
                  name="address"
                  label="Address"
                />
              </div>

              {isLoading ? (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button type="submit">Sign Up</Button>
              )}
            </form>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
