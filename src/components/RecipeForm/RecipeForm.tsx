import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface RecipeFormProps {
    id?:string;
    data?:{}
}

interface RecipeState {
    name: string;
    price: string;
}

export const RecipeForm = (props:RecipeFormProps) => {

    const dispatch = useDispatch();
    // let { recipeData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<RecipeState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id, data)
            console.log(`Updated:${data} ${props.id}`)
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            server_calls.create(data)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name of Dish</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="cook_time">Cook Time</label>
                    <Input {...register('cook_time')} name="cook_time" placeholder="Cook Time"/>
                </div>
                <div>
                    <label htmlFor="meat_or_veg">Type of Meat or Veggie</label>
                    <Input {...register('meat_or_veg')} name="meat_or_veg" placeholder="Type of Meat or Veggie"/>
                </div>
                <div>
                    <label htmlFor="garnishes">Garnishes</label>
                    <Input {...register('garnishes')} name="garnishes" placeholder="Garnishes"/>
                </div>
                <div>
                    <label htmlFor="spices">Spices</label>
                    <Input {...register('spices')} name="spices" placeholder="Spices"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
};