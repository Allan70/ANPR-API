import { CreateOwner, GetAllOwners } from "../schemas/owners.js"; 

export function owner_routes(app){
    app.post('/create/owner/', async (req, res)=>{
        const body = req.body;
        CreateOwner({
            first_name: body.first_name,
            last_name: body.last_name, 
            phone : body.phone
        });
        res.sendStatus(200); 
    });

    app.get('/owners/', async (req, res)=>{
        const owners = await GetAllOwners()
        res.json(owners);
    });
}

