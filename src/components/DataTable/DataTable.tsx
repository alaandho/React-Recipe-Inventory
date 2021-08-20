import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridRowModel } from '@material-ui/data-grid';
import { server_calls } from '../../api'; 
import { useGetData } from '../../custom-hooks';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle 
} from '@material-ui/core'; 
import { RecipeForm } from '../../components/RecipeForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 170 },
    {
        field: 'name',
        headerName: 'Name of Dish',
        width: 150,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 200,
    },
    {
        field: 'meat_or_veg',
        headerName: 'Meat or Veggie Type',
        width: 180,
    },
    {
        field: 'cook_time',
        headerName: 'Cook Time',
        width: 140,
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.getValue(params.id, 'recipeName') || ''} ${
        //         params.getValue(params.id, 'foodType') || ''}`,
    },
];

interface gridData{
    id?:string;
}


export const DataTable = () => {
    let {recipeData, getData} = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({id:''});

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
        getData() 
        // automatic refresh/update
    }

    let deleteData = () => {
        server_calls.delete(gridData.id!)
        getData()
        // automatic delete
    }
    
    console.log(gridData.id)

    let handleCheckbox = (id:GridRowModel) =>{
        if(id[0] === undefined){
            setData({id:''})
        }else{
            setData({id:id[0].toString()})
        }
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Recipes In Inventory</h2>
            <DataGrid rows={recipeData} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange ={handleCheckbox} />
            {console.log(gridData)}

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        {/* Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Recipe</DialogTitle>
            <DialogContent>
                    <RecipeForm id={gridData.id!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick = {handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color = "primary">Done</Button> 
            </DialogActions>
        </Dialog>
        </div>
    )
}