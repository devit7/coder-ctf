
import { getAllCountCategorySolvedByUser, getUserProfile } from '@/api/UserApi';
import Piechart from '@/components/Piechart';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import HandleFormatTime from '@/components/HandleFormatTime';

const Profile = () => {

    const { data: userStat, isLoading: userStatLoading } = useQuery({
        queryKey: ['myDataUserStats'],
        queryFn: getAllCountCategorySolvedByUser
    });

    const { data: userProfile, isLoading: userProfileLoading } = useQuery({
        queryKey: ['myDataUserProfile'],
        queryFn: getUserProfile
    });

    //console.log(userStat, 'userStat');
    return (
        <>
            <div className="p-10 mx-auto gap-10 justify-center h-full items-center grid grid-cols-2 max-w-[900px] ">
                {/* <div className="">
                    <Linechart />
                    </div> */}
                <div>
                    {userStatLoading ?
                        <Skeleton className="h-[400px] w-full" />
                        :
                        <Piechart dataUserStatApi={userStat} />
                    }
                </div>
                {userProfileLoading ?
                    <Skeleton className="h-[400px] w-full" />
                    :
                    <div className="flex  flex-col w-[400px] gap-4">
                        <img src={`https://ui-avatars.com/api/?name=${userProfile.user.username}`} alt="" className="rounded-md w-24 h-24" />
                        <h1 className=" font-semibold text-xl">{userProfile.user.username}</h1>
                        <div className="flex items-center gap-2">
                            <span>{userProfile.rank}th</span>
                            <span className=" text-zinc-500">rank</span>
                            |
                            <span>{userProfile.total_points||0}</span>
                            <span className=" text-zinc-500">points</span>
                        </div>
                        <div className="border-y  border-zinc-500 py-2 ">
                            {userProfile.user.bio||'No Bio.'}
                        </div>
                        <div className="flex items-center gap-2">
                            <span>{HandleFormatTime(userProfile.user.created_at)}</span>
                            <span className=" text-zinc-500">join</span>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Profile;
