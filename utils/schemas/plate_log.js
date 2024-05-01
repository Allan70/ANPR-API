import conn  from "../../db.js";

export async function CreatePlateLog({plate_status, plate_id}){
    try{
        await conn.query("INSERT INTO plate_log (plate_status, plate_id) VALUES (? , ?)", [plate_status, plate_id])

        return ("Plate created successfully");

    }catch(e){
        console.error("Create Plate Log Err ", e.sqlMessage || e.message)
    }
}

export async function GetOnePlateLog(plate_log_id){
    try{
        const [response, features] = await conn.query("SELECT * FROM plate_log WHERE plate_log_id = ?", plate_log_id)

        console.log(features)
        return response;
    }catch(e){
        console.error("Get One PLate Log Err ", e.sqlMessage || e.message)
    }
}

export async function GetAllPlateLogs(){
    try{
        const [response, features] = await conn.query("SELECT * FROM plate_log")

        console.log(features)
        return response;
    }catch(e){
        console.error("Get All Plate Log Err ", e.sqlMessage || e.message)
    }
}

export async function UpdatePlateLogByID({plate_log_id, plate_status, plate_id}){
    try{
        await conn.query("UPDATE plate_log SET (plate_status = ?, plate_id = ?) WHERE plate_log_id = ? ", [plate_status, plate_id, plate_log_id]);

        return "Plate updated successfully";
    }catch(e){
        console.error("Update Plate Log Err ", e.sqlMessage || e.message)
    }
}

export async function DeletePlateLog(plate_log_id){
    try{
        await conn.query("DELETE FROM plate_log WHERE plate_log_id = ? ", [plate_id]);

        return "Delete Successful";
    }catch(e){
        console.error("Delete PLate Log Err ", e.sqlMessage || e.message)
    }
}

