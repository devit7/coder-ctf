import React from "react";
import { useState } from 'react';
import DataTable, { TableColumn, createTheme } from 'react-data-table-component';

type DataRow = {
    no: number;
    name: string;
    solved: number;
    score: number;
};

const columns: TableColumn<DataRow>[] = [
    {
        name: 'No',
        selector: row => row.no,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Solved',
        selector: row => row.solved,
        sortable: true,
    },
    {
        name: 'Score',
        selector: row => row.score,
        sortable: true,
    },
    
];

createTheme('dark', {
    background: {
      default: 'transparent',
    },
  });

const TableLeaderboard = ({dataLeaderboardApi}:{dataLeaderboardApi:any}) => {
    const initialData: DataRow[] = dataLeaderboardApi.map((user: any, index: number) => ({
        name: user.username,
        solved: user.solved_count,
        score: user.total_points || 0,
        no: index + 1, // Add an ID property for each row
    }));

    const [data] = useState<DataRow[]>(initialData);
    const [filteredData, setFilteredData] = useState<DataRow[]>(initialData);

    function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value.toLowerCase();
        setFilteredData(data.filter(row => row.name.toLowerCase().includes(value)));
    }

    return (
        <>
            <div className=" border-t border-gray-600  border-dashed">
                <div className=" flex justify-between bg-transparent py-10 ">
                    <h1>The Hall Of Fame 🚩</h1>
                    <input type="text" 
                    className="bg-transparent border border-gray-700  px-2 py-1" 
                    onChange={handleFilter} placeholder="Search by name..." />
                </div>

                <div className="border border-gray-700 ">
                <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    fixedHeader
                   /*  customStyles={tableCustomStyles} */
                    theme="dark"
                />
                </div>
            </div>
        </>
    );
};

export default TableLeaderboard;
