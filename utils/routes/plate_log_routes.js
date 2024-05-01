import {CreatePlateLog, GetAllPlateLogs }from "../schemas/plate_log.js"

export function plate_log_routes(app){
    app.post('/create/plate_log/', async (req, res)=>{
        const body = req.body;
        CreatePlateLog({
            plate_status: body.plate_status, 
            plate_id : body.plate_id
        });

        res.sendStatus(200); 
    });

    app.get('/plate_logs/', async (req, res)=>{
        const plates = await GetAllPlateLogs()
        res.send(plates)
    });
}
