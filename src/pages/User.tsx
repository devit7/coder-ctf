import { getUsersList } from "@/api/UserApi";
import TableSkeleton from "@/components/TableSkeleton";
import UserList from "@/components/UserList";
import { useQuery } from '@tanstack/react-query';


const User = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['myDataUserList'],
    queryFn: getUsersList
  });

  return (
    <>
      <div className="p-10  max-w-[1200px] mx-auto gap-10">
        <div className=" w-full ">
          {isLoading ?
            <TableSkeleton />
            :
            <UserList dataUserApi={data} />
          }

        </div>
      </div>
    </>
  );
};

export default User;
