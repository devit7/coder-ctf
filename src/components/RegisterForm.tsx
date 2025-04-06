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
import { useRegisterApi } from "@/api/RegisterApi"
import { useToast } from "@/hooks/use-toast"
import ButtonLoading from "./ButtonLoading"

const registerSchema = z.object({
    name: z.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name cannot exceed 50 characters"),
    username: z.string()
        .min(2, "Username must be at least 2 characters")
        .max(15, "Username cannot exceed 15 characters"),
    email: z.string()
        .email("Invalid email address")
        .max(100, "Email cannot exceed 100 characters"),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .max(64, "Password cannot exceed 64 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number"),
    password_confirmation: z.string()
        .max(64, "Password confirmation cannot exceed 64 characters"),
    institution: z.string()
        .min(2, "Institution must be at least 2 characters")
        .max(100, "Institution cannot exceed 100 characters"),
}).refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
})

type RegisterFormValues = z.infer<typeof registerSchema>

export function RegisterForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {

    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            institution: "",
        },
    })
    // Logic
    const { toast } = useToast()
    const { mutate, isPending } = useRegisterApi()

    const onSubmit = async (data: RegisterFormValues) => {
        // TODO: Implement registration logic

        mutate(data, {
            onSuccess: (response) => {
                //console.log("Success", response),
                toast({
                    title: "Success",
                    description: response.message,
                    duration: 15000,
                })
            },
            onError: (error: any) => {
                //console.log(error)
                /*                 toast({
                                    title: "Error",
                                    description: error.message,
                                }) */
                const apiErrors = error.response?.data?.errors;

                if (apiErrors) {
                    Object.entries(apiErrors).forEach(([key, messages]) => {
                        form.setError(key as keyof RegisterFormValues, {
                            type: "manual",
                            message: (messages as string[])[0],
                        });
                    });
                } else {
                    toast({
                        title: "Registrasi Gagal",
                        description: "Terjadi kesalahan pada server.",
                        variant: "destructive",
                    });
                }
            }
        })
        //console.log(data)
    }


    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="rounded-md dark:bg-transparent ">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Register</CardTitle>
                    <CardDescription>
                        Enter your details below to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>FullName</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Full name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username (display)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Username" {...field} />
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
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password_confirmation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="institution"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Institution</FormLabel>
                                        <FormControl>
                                            <Input placeholder="University of Example" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {
                                isPending ? <ButtonLoading /> :
                                    <Button type="submit" className="w-full">
                                        Register
                                    </Button>
                            }

                            <Button type="button" variant="outline" className="w-full">
                                Register with Google
                            </Button>
                            <div className="text-center text-sm">
                                Have an account?{" "}
                                <Link to="/login" className="underline underline-offset-4">
                                    Sign in
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
