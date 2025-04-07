import { getChallList } from '@/api/ChallApi';
import Sidebar from '../components/Sidebar';
import ChallList from "@/components/ChallList";
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';
import { Filter, X } from 'lucide-react'; // Import icons for filter toggle

const Challenges = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['myDataChallList'],
        queryFn: getChallList
    });

    const [filters, setFilters] = useState({
        hideSolved: false,
        categories: new Set<string>(),
    });

    const [sidebarOpen, setSidebarOpen] = useState(false);

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
            <div className="flex w-full flex-col h-full relative">
                {/* Mobile Filter Toggle Button */}
                <div className="md:hidden fixed bottom-4 right-4 z-10">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="bg-indigo-600 text-white p-3 rounded-full shadow-lg"
                    >
                        {sidebarOpen ? <X size={24} /> : <Filter size={24} />}
                    </button>
                </div>

                <div className="flex flex-col md:flex-row h-full">
                    {/* Sidebar - hidden by default on mobile, toggled with the filter button */}
                    <div className={`${sidebarOpen ? 'fixed inset-0 z-50 bg-black/80' : 'hidden'} md:relative md:flex md:z-auto md:bg-transparent`}>
                        <div className={`${sidebarOpen ? 'flex flex-col w-[80%] max-w-[350px] h-full bg-[#050516] p-6 overflow-y-auto' : 'hidden'} 
                                        md:flex md:flex-col md:p-10 md:border-r md:border-dashed md:border-gray-600 md:w-[290px]`}>
                            <div className="flex justify-between items-center md:hidden mb-4">
                                <h2 className="text-xl font-bold text-white">Filters</h2>
                                <button onClick={() => setSidebarOpen(false)} className="text-gray-400">
                                    <X size={24} />
                                </button>
                            </div>
                            <Sidebar
                                filters={filters}
                                onFilterChange={handleFilterChange}
                            />
                        </div>
                    </div>

                    {/* Challenge List */}
                    <div className="max-h-screen overflow-y-auto p-4 md:p-10 text-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-fit gap-4 w-full">
                        {isLoading ?
                            //Skeleton
                            [...Array(10)].map((_, index) => (
                                <div key={index}>
                                    <Skeleton className="h-[150px] w-full" />
                                </div>
                            ))
                            :
                            filteredData?.length > 0 ?
                                filteredData.map((chall: any) => (
                                    <ChallList key={chall.id} dataChallApi={chall} />
                                ))
                                :
                                <div className="col-span-full text-center py-10">
                                    <p className="text-gray-400">No challenges found matching your filters.</p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Challenges;
