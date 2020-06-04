import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializeItems = items.map(items => {
            return {
                id: items.id,
                title: items.title,
                image_url: `http://192.168.0.20:3333/uploads/${items.image}`
            }
        });
        return response.json(serializeItems);
    }
}
    

export default ItemsController;
