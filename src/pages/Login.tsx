import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Container from "@/components/custom/Container";
import { LOGIN_FORM_SCHEMA } from "@/constants/login.constant";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { Loader2 } from "lucide-react";
import InputField from "@/components/custom/FormFields/InputField";
import { useNavigate } from "react-router-dom";
import loginImage from "@/assets/svg/login.svg";
import {
  adminCredentials,
  TCredentials,
  userCredentials,
} from "@/constants/loginCredentials.constants";
import Title from "@/components/custom/shared/Title";

const Login = () => {
  const form = useForm<z.infer<typeof LOGIN_FORM_SCHEMA>>({
    resolver: zodResolver(LOGIN_FORM_SCHEMA),
    defaultValues: { email: "", password: "" },
  });
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: z.infer<typeof LOGIN_FORM_SCHEMA>) => {
    try {
      const result = await login(data).unwrap();
      if (result?.success) {
        const user = { email: result.data.email, role: result.data.role };

        dispatch(setUser({ user, token: result.token }));
        toast.success(result.message || "Login successfully");

        if (user.role === "admin") navigate("/dashboard");
        else navigate("/");

        form.reset();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message || "An error occurred");
    }
  };

  const handleAutofillCredentials = (credentials: TCredentials) => {
    form.setValue("email", credentials.email);
    form.setValue("password", credentials.password);
  };

  return (
    <Container>
      <div className="py-6 sm:py-8 lg:py-12">
        <Title>Login Now</Title>

        <div className="md:grid md:grid-cols-2 md:gap-6 md:items-center mt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex justify-end gap-2 pt-5 text-white text-xs sm:text-sm font-medium">
                <button
                  onClick={() => handleAutofillCredentials(adminCredentials)}
                  className="bg-blue-900 px-3 py-2 rounded-full"
                >
                  Admin credentials
                </button>
                <button
                  onClick={() => handleAutofillCredentials(userCredentials)}
                  className="bg-blue-900 px-3 py-2 rounded-full"
                >
                  User credentials
                </button>
              </div>
              <InputField control={form.control} name="email" label="Email" />

              <InputField
                control={form.control}
                name="password"
                label="Password"
                type="password"
              />

              {isLoading ? (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button type="submit">Login</Button>
              )}
            </form>
          </Form>

          {/* Login Image */}
          <img className="hidden md:block" src={loginImage} alt="Login" />
        </div>
      </div>
    </Container>
  );
};

export default Login;
