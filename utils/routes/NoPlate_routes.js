import { CreateNumberPlate, GetAllNumberPlates } from "../schemas/number_plates.js";

export function No_Plate_routes(app){
    app.post('/create/plates/', (req, res)=>{
        const body = req.body;
        CreateNumberPlate({
            plate_contents : body.plate_contents, 
            vehicle_id : body.vehicle_id
        });
        res.sendStatus(200); 
    });

    app.get('/plates/', async (req, res)=>{ // Make the route handler async
        const plates = await GetAllNumberPlates(); // Await the result of GetAllNumberPlates
        res.json(plates); // Send the plates as JSON response
    });
}