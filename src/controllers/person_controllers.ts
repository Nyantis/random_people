import { Request, Response } from "express"
import Services_person from "../services/person_services"


async function getPerson(req: Request, res: Response){
    const person:Object = await Services_person.getRandomPerson()
    return res.status(200).send(person)
}

const Controllers_person = {
    getPerson
}
export default Controllers_person
