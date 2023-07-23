import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string
}

class CreateSpecificationUseCase {

    constructor(private specificationsRepository: ISpecificationRepository) {

    }
    // constructor(private specificationRepository: ISpecificationRepository) {}
    execute({ name, description }: IRequest): void {
        const specificatiomAlreadyExists = this.specificationsRepository.findByName(name)

        if (specificatiomAlreadyExists) {
            throw new Error("Specitication already exists");
        }

        this.specificationsRepository.create({
            name,
            description
        })
    }


}

export { CreateSpecificationUseCase }