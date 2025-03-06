import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mail, Lock, AlertCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { fetch } from "@/service/fetch";
import { Loader } from "@/components/loader";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export default function LoginPage(props) {
  const { onSetApp } = props;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleResponse = async (authResult, isGoogleLogin) => {
    try {
      setLoading(true);
      const result = isGoogleLogin
        ? await googleAuth(authResult.code)
        : await loginUser(authResult);
      if (!result.token) throw new Error("Login failed");

      const { email, userId, username, _id } = result.user || {};
      const token = result.token;
      const userData = { email, userId, username, id: _id };

      sessionStorage.setItem("user", JSON.stringify(userData));
      sessionStorage.setItem("token", token);
      onSetApp({ userData, userId });
      if (userId) {
        navigate("/dashboard");
      } else {
        navigate("/set-route");
      }
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const googleAuth = async (code) => {
    return await fetch({ url: `/user/google?code=${code}` }, "GET");
  };

  const loginUser = async ({ email, password }) => {
    return await fetch(
      {
        url: `/user/login`,
        body: { email, password },
      },
      "POST"
    );
  };

  const onSubmit = async (data) => {
    setError(null); // Clear previous errors
    handleResponse(data, false);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (response) => handleResponse(response, true),
    onError: (response) => handleResponse(response, true),
    flow: "auth-code",
  });

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {loading ? ( // Conditional rendering for loader
        <Loader />
      ) : (
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Login to PortaFlex
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                          <Input
                            placeholder="Enter your email"
                            className="pl-10"
                            {...field}
                          />
                        </div>
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
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            className="pl-10"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </Form>

            <div className="mt-4 relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-muted-foreground" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={googleLogin}
              disabled={loading} // Disable button while loading
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Login with Google
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              {"Don't have an account? "}
              <Link to="/register" className="text-primary hover:underline">
                Register here
              </Link>
            </p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
