import { connection } from "../database/db";


async function countNumberOfRows(){
    try{
        const query = await connection.query(`
        SELECT * FROM people
        `)
        
        return query.rows

    } catch(err){return}
}


const Repositories_person = {
    countNumberOfRows
}
export default Repositories_person
