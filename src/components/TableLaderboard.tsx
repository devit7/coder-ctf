import React from "react";
import { useState } from 'react';
import DataTable, { TableColumn, createTheme } from 'react-data-table-component';

type DataRow = {
    id: number;
    name: string;
    score: number;
    rank: number;
};

const columns: TableColumn<DataRow>[] = [
    {
        name: 'Rank',
        selector: row => row.rank,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.name,
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

const TableLeaderboard = () => {
    const initialData: DataRow[] = [
        { id: 1, name: 'John Doe', score: 100, rank: 1 },
        { id: 2, name: 'Jane Doe', score: 90, rank: 2 },
        { id: 3, name: 'Jan Doe', score: 80, rank: 3 },
        { id: 4, name: 'Jon Doe', score: 70, rank: 4 },
        { id: 5, name: 'Jen Doe', score: 60, rank: 5 },
        { id: 6, name: 'Jin Doe', score: 50, rank: 6 },
        { id: 7, name: 'Jyn Doe', score: 40, rank: 7 },
        { id: 8, name: 'Jen Doe', score: 30, rank: 8 },
        { id: 9, name: 'Jen Doe', score: 20, rank: 9 },
        { id: 10, name: 'Jen Doe', score: 10, rank: 10 },
    ];

    const [data, setData] = useState<DataRow[]>(initialData);
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
