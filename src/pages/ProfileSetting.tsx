import { getUserAuth } from "@/api/UserApi"
import { useQuery } from "@tanstack/react-query"
import { Skeleton } from "@/components/ui/skeleton";
import ProfileSettingForm from "@/components/ProfileSettingForm";


const ProfileSetting = () => {
    // get user by token
    const { data, isLoading } = useQuery({
        queryKey: ['myDataUserSetting'],
        queryFn: getUserAuth,
    });

    //console.log(data, 'dataUserSetting');

    return (
        <>
            <div className="max-w-lg mx-auto ">
                <div className="mt-10 border-b border-zinc-700 pb-5 mb-5 ">
                    <h1 className="text-2xl font-semibold">Profile Setting</h1>
                    <p className="text-gray-400">
                        Make changes to your profile here. Click save when you're done.
                    </p>
                </div>
                {isLoading ?
                    <div className="flex flex-col gap-4">
                        <Skeleton className="w-full h-32" />
                        <Skeleton className="w-full h-32" />
                        <Skeleton className="w-full h-32" />
                        <Skeleton className="w-20 h-8" />
                    </div>
                    :
                    <ProfileSettingForm dataSetting={data} />
                }
            </div>
        </>
    );
};

export default ProfileSetting;
