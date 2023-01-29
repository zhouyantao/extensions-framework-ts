import { ContentMessage } from "./content_message";
import { MessageDto } from "../common/message_dto";
import { MessageType } from "../common/message_type";

class Content{
    cm:ContentMessage;
    public constructor(){
        this.cm = new ContentMessage();
    };
    
    public main():void{
        for(let i=0;i<10;i++){
            let md = new MessageDto(MessageType.TEST, {"content": "content send message " + i});
            this.cm.sendMessage(md);
        }

    }

}

let content = new Content();
content.main();