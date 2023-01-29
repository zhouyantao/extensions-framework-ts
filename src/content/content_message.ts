import {MessageDto} from '../common/message_dto'

export class ContentMessage{
    public constructor(){}

    public sendMessage(message:MessageDto):void{
        chrome.runtime.sendMessage(message, res=>{
            this.handleResponse(res);
        });
    }

    public handleResponse(res:MessageDto){
        console.log("------content received message response------");
        console.log(res);
    }

}