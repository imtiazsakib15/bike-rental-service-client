import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Container from "@/components/custom/Container";
import { LOGIN_FORM_SCHEMA } from "@/constants/login.constant";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const form = useForm<z.infer<typeof LOGIN_FORM_SCHEMA>>({
    resolver: zodResolver(LOGIN_FORM_SCHEMA),
    defaultValues: { email: "", password: "" },
  });
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: z.infer<typeof LOGIN_FORM_SCHEMA>) => {
    try {
      const result = await login(data).unwrap();
      if (result?.success) {
        const user = { email: result.data.email, role: result.data.role };

        dispatch(setUser({ user, token: result.token }));
        toast.success(result.message || "Login successfully");
        form.reset();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message || "An error occured");
    }
  };

  return (
    <Container>
      <div className="py-6 sm:py-8 lg:py-12">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
          Login Now
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="sm:w-2/3 space-y-6 mx-auto"
          >
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
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
      </div>
    </Container>
  );
};

export default Login;
