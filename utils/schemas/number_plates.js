import conn  from "../../db.js";

export async function CreateNumberPlate({ plate_contents, vehicle_id }) {
    try {
        if (vehicle_id <= 0 || plate_contents === undefined) return;
        await conn.query(
            'INSERT INTO plate_log (plate_contents, vehicle_id) VALUES (?, ?)', [plate_contents, vehicle_id]
        );
        return ("Number plate created successfully");
    } catch (e) {
        console.error("Create Number Plate Error:", e.sqlMessage || e.message);
    }
}

export async function GetOneNumberPlate(plate_id) {
    try {
        if (plate_id <= 0 || plate_id === undefined) return;

        const [results, fields] = await conn.query(
            'SELECT * FROM number_plate WHERE plate_id = ?', [plate_id]
        );
        
        console.log(fields);
        return (results);
    } catch (e) {
        console.error("Get One Number Plate Error:", e.sqlMessage || e.message);
    }
}

export async function GetAllNumberPlates() {
    try {
        const [results, fields] = await conn.query(
            'SELECT * FROM number_plate'
        );

        console.log(fields);
        return (results);
    } catch (e) {
        console.error("Get All Number Plate Error:", e.sqlMessage || e.message);
    }
}

export async function UpdateNumberPlateByID({ plate_id, plate_contents, vehicle_id }) {
    try {
        await conn.query('UPDATE number_plate SET plate_contents = ?, vehicle_id = ? WHERE plate_id = ?', [plate_contents, vehicle_id, plate_id]);
        return ("Updated successfully");
    } catch (e) {
        console.error("Update Number Plate Error:", e.sqlMessage || e.message);
    }
}

export async function DeleteNumberPlate(plate_id) {
    try {
        await conn.query("DELETE FROM number_plate WHERE plate_id = ?", [plate_id]);
        return ("Delete Successful");
    } catch (e) {
        console.error("Delete Number Plate Error:", e.sqlMessage || e.message);
    }
}

