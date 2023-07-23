import { v4 as uuidV4 } from 'uuid'
class Category {
    id?: string; // ? significa, que esse atributo pode ser opcional
    name: string;
    description: string;
    created_at: Date;

    constructor() { // Método quando a classe é instaciada
        if(!this.id) {
            this.id = uuidV4();
        }
    }

}
export {Category}