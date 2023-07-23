import { Router } from "express";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationsReporitory";

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationRepository()

specificationsRoutes.post('/', (request, response) => {
    const { name, description } = request.body
    const createSpecificationService = new CreateSpecificationService(specificationsRepository)

    createSpecificationService.execute({name, description})

    return response.status(201).send()
})

export { specificationsRoutes }