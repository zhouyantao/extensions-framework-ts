import {MessageType} from './message_type'

export class MessageDto{
    type:MessageType;
    data:object;
    public constructor(type:MessageType, data:object){
        this.type = type;
        this.data = data;
    }
}