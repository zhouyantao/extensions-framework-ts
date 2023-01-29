import {BackgroundConfig} from "./util/background_config";
import { BackMessage } from "./back/back_message";
import { MessageDto } from "./common/message_dto";
import { MessageType } from "./common/message_type";


class Background{
    bm:BackMessage;

    public constructor(){
        this.bm = new BackMessage();
    };
    
    public main():void{
        this.bm.receiveMessage();

        console.log(BackgroundConfig.test("小华"));

        let active = false;
        function changeTheme(color: string): void {
            document.body.style.backgroundColor = color;
        }
        chrome.action.onClicked.addListener((tab) => {
            console.log("tab is clicked");
            active = !active;
            const color = active ? 'black' : 'white';
            chrome.scripting.executeScript({
                target: {tabId: tab.id ? tab.id : -1},
                func: changeTheme,
                args: [color]
            }).then((data)=>console.log(data));
        });
    }

}


let back = new Background();
back.main();