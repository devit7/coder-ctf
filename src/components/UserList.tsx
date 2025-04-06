import React from "react";
import { useState } from 'react';
import DataTable, { TableColumn, createTheme } from 'react-data-table-component';
import HandleFormatTime from './HandleFormatTime';



type DataRow = {
    no: number; // Optional property for row number
    name: string;
    institution: string; // Optional property for institution
    joindate: string; // Optional property for join date
};

const columns: TableColumn<DataRow>[] = [
    {
        name: 'No',
        selector: row => row.no,
        sortable: true,
        width: '80px', // Set a fixed width for the No column
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Institution',
        selector: row => row.institution,
        sortable: true,
    },
    {
        name: 'Join Date',
        selector: row => HandleFormatTime(row.joindate),
        sortable: true,
    },
    
];

createTheme('dark', {
    background: {
      default: 'transparent',
    },
  });

const UserList = ({dataUserApi}:{dataUserApi:any}) => {


    const initialData: DataRow[] = dataUserApi.map((user: any, index: number) => ({
        name: user.username,
        institution: user.institution,
        joindate: user.created_at,
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
            <div className=" ">
                <div className=" flex justify-between bg-transparent py-10 ">
                    <h1>List CODERZZ 🚩</h1>
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

export default UserList;
