let token = '30ce61981918077678fd94d7702a8235a64ff2a443e15e10'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://recipe-api-inven.herokuapp.com/api/recipes`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            },
        });
        //Checking to ensure some data was received
        if (!response.ok){
            throw new Error('Failed to fetch data from server!')
        }

        return await response.json()

    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://recipe-api-inven.herokuapp.com/api/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            },
            body:JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from server!')
        }
        return await response.json()
    },
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://recipe-api-inven.herokuapp.com/api/recipes/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            },
            body:JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Did not update Recipe - please try again.')
        }
    },
    delete: async(id:string) => {
        const response = await fetch(`https://recipe-api-inven.herokuapp.com/api/recipes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Please try again.')
        }
    }
};