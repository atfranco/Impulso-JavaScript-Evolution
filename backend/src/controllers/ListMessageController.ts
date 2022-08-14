import { Request, Response } from "express";
import { ListMessageService } from "../services/ListMessagesService";

// define classe para objeto de listar msgs
class ListMessageController {
    async hanle(request: Request, response: Response){
        // define
        const listMessageService = new ListMessageService();
        
        const allMessages = await listMessageService.execute();
        // retorna msg
        return response.json(allMessages)
    }
}

export { ListMessageController }