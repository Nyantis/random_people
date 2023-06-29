import { Request, Response } from "express"
import Repositories_person from "../repositories/person_repositories"


async function getRandomPerson(){
    const rows: Object[] = await Repositories_person.countNumberOfRows()
    const rndInt = Math.floor(Math.random() * rows.length) + 1
    return rows[rndInt-1]
}


const Services_person = {
    getRandomPerson
}
export default Services_person
