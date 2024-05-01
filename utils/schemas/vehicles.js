import conn from "../../db.js"


export async function CreateVehicle({vehicle_name, vehicle_make, vehicle_model, vehicle_color, owner_id}){
    try{
        await conn.query("INSERT INTO vehicles (vehicle_name, vehicle_make, vehicle_model, vehicle_color, owner_id) VALUES (?, ?, ?, ?, ?)", 
    [vehicle_name, vehicle_make, vehicle_model, vehicle_color, owner_id])

    return "Vehicle created successfully";
    }catch(e){
        console.error("Create Vehicle Err ", e.sqlMessage || e.message)
    }
}

export async function GetOneVehicle(vehicle_id){
    try{

        const [ response , features ] =  await conn.query("SELECT * FROM vehicles WHERE vehicle_id = ?", vehicle_id)

        console.log(features)
        return response;
    }catch(e){
        console.error("Gei One Vehicle Err ", e.sqlMessage || e.message)
    }
}

export async function GetAllVehicles(){
    try{
        const [ response , features ] =  await conn.query("SELECT * FROM vehicles")

        console.log(features)
        return response; 
    }catch(e){
        console.error("Get All Vehicles Err ", e.sqlMessage || e.message)
    }
}

export async function UpdateVehicleByID({vehicle_id, vehicle_name, vehicle_make, vehicle_model, vehicle_color, owner_id}){
    try{
        await conn.query("UPDATE vehicles SET (vehicle_name = ?, vehicle_make = ?, vehicle_model = ?, vehicle_color = ?, owner_id = ?) WHERE vehicle_id = ? ", [vehicle_name, vehicle_make, vehicle_model, vehicle_color, owner_id, vehicle_id])

        return "Vehicle updated successfully";
    }catch(e){
        console.error("Update Vehicle Err ", e.sqlMessage || e.message)
    }
}

export async  function DeleteVehicle(vehicle_id){
    try{
        await conn.query("DELETE FROM vehicles WHERE vehicle_id = ? ", [vehicle_id]);

        return "Delete Successful";
    }catch(e){
        console.error("Delete Vehicle Err ", e.sqlMessage || e.message)
    }
}

