import { Category } from "../../model/Category"
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) { }


    execute(): Category[] {
        const categories = this.categoriesRepository.list()
        return categories

    }

}
export { ListCategoriesUseCase }