import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

// define classe para objeto de criar msgs
class CreateMessageController{
    async handle(request: Request, response: Response){
        const { email, message } = request.body;

        // Define
        const createMessageService = new CreateMessageService();

        const newMessage = await createMessageService.execute({ email, message});
        
        // retorna msg
        return response.json(newMessage);
    }
}

export { CreateMessageController }