import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useLoginApi } from "@/api/LoginApi"
import { useToast } from "@/hooks/use-toast"
import ButtonLoading from "./ButtonLoading"
import { useAuth } from "@/auth/AuthContext"

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  // Logic
  const { toast } = useToast()
  const { mutate, isPending } = useLoginApi()
  const { setIsAuthenticated, setUser } = useAuth();

  const onSubmit = async (data: LoginFormValues) => {
    // TODO: Implement login logic
    //console.log(data)


    mutate(data, {
      onSuccess: (response) => {
        if (response.status) {
          const { token } = response.data;

          // Simpan token ke localStorage
          localStorage.setItem("token", token);

          toast({
            title: "Login Berhasil",
            description: "Selamat datang kembali!",
          });
          // Set user authenticated
          setIsAuthenticated(true);
          // Set user data
          setUser(response.data.user.username);
          //Redirect ke halaman challenges
          //navigate("/challenges");
        } else {
          toast({
            title: "Login Gagal",
            description: response.message || "Login gagal.",
            variant: "destructive",
          });
        }
      },
      onError: (error: any) => {
        const apiErrors = error.response?.data?.errors;
        //console.log("Error Login", error);
        if (apiErrors) {
          Object.entries(apiErrors).forEach(([key, messages]) => {
            form.setError(key as keyof LoginFormValues, {
              type: "manual",
              message: (messages as string[])[0],
            });
          });
        } else {
          toast({
            title: "Login Gagal",
            description: error.response.data.message || "Terjadi kesalahan pada server.",
            variant: "destructive",
            duration: 10000,
          });
        }
      }
    });
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="rounded-md dark:bg-transparent">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" type="email" {...field} />
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
                    <div className="flex items-center">
                      <FormLabel>Password</FormLabel>
                      <Link
                        to="/forgot-password"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {
                isPending ? <ButtonLoading /> :
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
              }
              <Button type="button" variant="outline" className="w-full">
                Login with Google
              </Button>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
