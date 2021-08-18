import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'recipeName',
        headerName: 'Recipe Name',
        width: 250,
    },
    {
        field: 'foodType',
        headerName: 'Food Type',
        width: 250,
    },
    {
        field: 'cookTime',
        headerName: 'Cook Time',
        type: 'number',
        width: 110,
    },
    {
        field: 'recipeName',
        headerName: 'Recipe Name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.getValue(params.id, 'recipeName') || ''} ${
        //         params.getValue(params.id, 'foodType') || ''}`,
    },
];

const rows = [
    { id: 1, recipeName: 'Banh Mi', foodType: 'Sandwhich', cookTime: 30 },
    { id: 2, recipeName: 'Pho', foodType: 'Noodle Soup', cookTime: 600 },
    { id: 3, recipeName: 'Banh Xeo', foodType: 'Vietnamese Crepe', cookTime: 45 },
    { id: 4, recipeName: 'Lemongrass Chicken', foodType: 'Meat', cookTime: 35 },
    { id: 5, recipeName: 'Spring Rolls', foodType: 'Appeteizer', cookTime: 40 },
    { id: 6, recipeName: 'Vermicelli', foodType: 'Cold Noodles', cookTime: 150 },
    { id: 7, recipeName: 'Sweet Fish Sauce', foodType: 'Sauce', cookTime: 15 },
    { id: 8, recipeName: 'Sticky Rice', foodType: 'Sweet Rice', cookTime: 180 },
    { id: 9, recipeName: 'Papaya Salad', foodType: 'Salad', cookTime: 65 },
    { id: 10, recipeName: 'Pandan Waffles', foodType: 'Desert', cookTime: 45 },
];

export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Recipe Inventory</h2>
            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
        </div>
    )
}