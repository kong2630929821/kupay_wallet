import { Widget } from "../../../pi/widget/widget";

export class applicationItem extends Widget{

    constructor(){
        super();
        this.props = {
            type:"1",
            img:"../../res/image/img_dapp_4.png",
            title:'每日一氪',
            mess:"试试今天的手气",
            islike:false  
        }
    }


    public likeit(event:any){
        this.props.islike = !this.props.islike;
        this.paint();
    }
}