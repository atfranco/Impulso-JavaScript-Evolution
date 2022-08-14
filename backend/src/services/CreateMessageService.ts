import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";

// Interface tipagem de mensagem
interface IMessage {
    email: string;
    message: string
}

// Objeto de criação de mensagem
class CreateMessageService {
    async execute({email, message}: IMessage){
        const messageRepository = getCustomRepository(MessagesRepository);
        if(!email){
            throw new Error("Por favor informe um email.")
        }
        if(!message){
            throw new Error("Por favor escreva uma messagem.")
        }
        const newMessage = messageRepository.create({ email, message })
        await messageRepository.save(newMessage);
        return newMessage;
    }
}

export  { CreateMessageService }