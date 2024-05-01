import { CreateVehicle, GetAllVehicles } from "../schemas/vehicles.js";

export function vehicle_routes(app){
    app.post('/create/vehicle/', async (req, res)=>{
        const body = req.body;
        CreateVehicle({
            vehicle_name : body.vehicle_name, 
            vehicle_make : body.vehicle_make, 
            vehicle_model : body.vehicle_make, 
            vehicle_color : body.vehicle_color, 
            owner_id : body.owner_id
        });
        res.sendStatus(200); 
    });
    app.get('/vehicles/', async (req, res)=>{
        const allVehicles =  await GetAllVehicles()
        res.json(allVehicles)
    });
}
