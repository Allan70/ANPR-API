import conn from "../../db.js"

 export async function CreateOwner({first_name, last_name, phone}){
    try{

        await conn.query('INSERT INTO owners (first_name, last_name, phone) VALUES (? ,? ,?)'
        ,[first_name, last_name, phone])

        return ("Owner Created successfully")
    }catch(e){
        console.error("Create Owner Err ", e.sqlMessage || e.message)
    }
}

 export async function GetOneOwner(owner_id){
    try{
        const [result , fields] = await conn.query('SELECT * FROM owners WHERE owner_id = ?', [owner])

        console.log(fields)
        return (result)
    }catch(e){
        console.error("Get One Owner Err ", e.sqlMessage || e.message)
    }
}

 export async function GetAllOwners(){
    try{
        const [result , fields] = await conn.query('SELECT * FROM owners');

        console.log(fields)
        return (result)
    }catch(e){
        console.error("Get all Owners Err ", e.sqlMessage || e.message)
    }
}

  export async function UpdateOwnerByID({owner_id, first_name, last_name, phone}){
    try{
        await conn.query('UPDATE owners SET (owner_id, first_name, last_name, phone) VALUES (?,?,?,?) ', [owner_id, first_name, last_name, phone ])
        return ("Update successful")
    }catch(e){
        console.error("Update Owner Err ", e.sqlMessage || e.message)
    }
}

  export async function DeleteOwner(owner_id){
    try{

        await conn.query('DELETE FROM owners WHERE owner_id = ?', [owner_id]);

        return ("Owner deleted successfully")

    }catch(e){
        console.error("Delete Owner Err ", e.sqlMessage || e.message)
    }
}
