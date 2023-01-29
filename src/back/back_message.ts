import { MessageDto } from "../common/message_dto";
import { MessageType } from "../common/message_type";

export class BackMessage{
    public constructor(){}

    public receiveMessage():void{
        chrome.runtime.onMessage.addListener((req, sender, sendResponse)=>{
            console.log("------background receive message------");
            console.log(req);
            console.log(sender);
            sendResponse(this.handleMessage(req));
        }); 
    }

    public handleMessage(req:MessageDto):MessageDto{
        let res = new MessageDto(req.type, {"content": "bakc-response-message"});

        return res;
    }

}