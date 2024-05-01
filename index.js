
import { No_Plate_routes } from "./utils/routes/NoPlate_routes.js"
import { owner_routes } from "./utils/routes/owner_routes.js"
import { plate_log_routes } from "./utils/routes/plate_log_routes.js"
import { vehicle_routes } from "./utils/routes/vehicle_routes.js"

import express from 'express'
const app = express();
const port = 5000;


app.listen(port, ()=>{
    console.log(`App listening in http://localhost:${port}`);
});

No_Plate_routes(app)
owner_routes(app)
plate_log_routes(app)
vehicle_routes(app)
