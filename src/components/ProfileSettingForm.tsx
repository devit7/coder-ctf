import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useSettingUser } from "@/api/SettingUserApi";
import { useToast } from "@/hooks/use-toast";
import ButtonLoading from "@/components/ButtonLoading";
import { queryClient } from "@/queryClient";

const formSchema = z.object({
    institution: z.string().min(2, {
        message: "Institution must be at least 2 characters.",
    }),
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    bio: z.string().max(100, {
        message: "Bio must be at most 100 characters.",
    }),
});

const ProfileSettingForm = ({ dataSetting }: { dataSetting: any }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: dataSetting?.user.username || "",
            institution: dataSetting?.user.institution || "",
            bio: dataSetting?.user.bio || "",
        },
    });

    const { toast } = useToast();
    const { mutate, isPending } = useSettingUser();

    const onSubmit = async (data: any) => {
        mutate(data, {
            onSuccess: (response) => {
                toast({
                    title: "Success",
                    description: response.message,
                });
                // refetch the user profile data
                queryClient.invalidateQueries({ queryKey: ['myDataUserSetting'] });
            },
            onError: (error: any) => {
                toast({
                    title: "Error",
                    description: error?.response?.data?.message || "An unexpected error occurred.",
                    variant: "destructive",
                    duration: 8000,
                });
            },
        });
    };

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your username" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
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
                                    <Input placeholder="Enter your school or organization" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Your school, university, or organization name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bio</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Tell us about yourself..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    A short description about yourself (max 100 characters).
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {isPending ? <ButtonLoading enableMessage={false} /> : <Button type="submit">Submit</Button>}
                </form>
            </Form>
        </>
    );
};

export default ProfileSettingForm;


