import { getCategories } from "@/api/ChallApi";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from "./ui/skeleton";

const Sidebar = ({ filters, onFilterChange }: { filters: any, onFilterChange: (filterType: string, value: string | boolean) => void }) => {

    const { data, isLoading } = useQuery({
        queryKey: ['myDataChallCatgeories'],
        queryFn: getCategories
    });

    return (
        <>
            <div className="text-white font-semibold text-4xl">
                Challenges
            </div>
            <div className="flex mt-10 items-center gap-2">
                <Checkbox
                    id="hideSolved"
                    checked={filters.hideSolved}
                    onCheckedChange={(checked) => onFilterChange('hideSolved', checked)}
                />
                <Label htmlFor="hideSolved">Hide Solve</Label>
            </div>
            <div className="mt-4 flex text-white font-semibold flex-col gap-2 w-full">
                <Label className="text-xl">Categories</Label>
                {isLoading ? (
                    <div className="flex flex-col items-center gap-4 py-2 ">
                        <Skeleton className="h-5 w-full" />
                        <div className="grid grid-cols-1 gap-4 w-full">
                            <Skeleton className="h-5 " />
                            <Skeleton className="h-5 " />
                            <Skeleton className="h-5 " />
                        </div>
                    </div>
                ) : data?.map((category: any) => (
                    <div key={category.name} className="flex items-center gap-2">
                        <Checkbox
                            id={category.name}
                            checked={filters.categories.has(category.name)}
                            onCheckedChange={() => onFilterChange('categories', category.name)}
                        />
                        <Label htmlFor={category.name}>{category.name}</Label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Sidebar;
