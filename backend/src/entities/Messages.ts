import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

// Tipagem de mensagens

@Entity("messages")
class Message {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    email: string;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Message }
