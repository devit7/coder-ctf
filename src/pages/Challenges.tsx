import { getChallList } from '@/api/ChallApi';
import Sidebar from '../components/Sidebar';
import ChallList from "@/components/ChallList";
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';

const Challenges = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['myDataChallList'],
        queryFn: getChallList
    });

    const [filters, setFilters] = useState({
        hideSolved: false,
        categories: new Set<string>(),
    });

    const handleFilterChange = (filterType: string, value: string | boolean) => {
        setFilters((prev) => {
            if (filterType === 'hideSolved') {
                return { ...prev, hideSolved: value as boolean };
            } else if (filterType === 'categories') {
                const categories = new Set(prev.categories);
                if (categories.has(value as string)) {
                    categories.delete(value as string);
                } else {
                    categories.add(value as string);
                }
                return { ...prev, categories };
            }
            return prev;
        });
    };

    const filteredData = data?.filter((chall: any) => {
        if (filters.hideSolved && chall.is_solved) return false;
        if (filters.categories.size > 0 && !filters.categories.has(chall.category.name)) return false;
        return true;
    });

    return (
        <>
            <div className="flex w-full flex-col h-full">
                <div className="flex h-full">
                    <div className="flex flex-col p-10 border-r h-full border-dashed border-gray-600 w-[350px]">
                        <Sidebar
                            filters={filters}
                            onFilterChange={handleFilterChange}
                        />
                    </div>
                    <div className="max-h-screen overflow-y-auto p-10 text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-fit gap-4 w-full">
                        {isLoading ?
                            //Skeleton
                            [...Array(10)].map((_, index) => (
                                <div key={index}>
                                    <Skeleton className="h-[150px] w-full" />
                                </div>
                            ))
                            :
                            filteredData?.map((chall: any) => (
                                <ChallList key={chall.id} dataChallApi={chall} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Challenges;
