/**
 * 分享下载链接页面
 */
import { ShareToPlatforms } from '../../../../pi/browser/shareToPlatforms';
import { popNew } from '../../../../pi/ui/root';
import { getLang } from '../../../../pi/util/lang';
import { Widget } from '../../../../pi/widget/widget';
import { makeScreenShot } from '../../../logic/native';
import { getUserInfo } from '../../../utils/tools';

export class ShareDownload extends Widget {
    public language:any;
    public ok:() => void;
    public create() {
        super.create();
        this.init();
    }
    public init() {
        this.language = this.config.value[getLang()];
        const userInfo = getUserInfo();
        this.props = {
            nickName:userInfo.nickName,
            avatar:userInfo.avatar
        };

    }
    public firstPaint() {
        console.log('firstPaint');
    }

    public attach() {
        console.log('attach');
        setTimeout(() => {
            this.shareClick();
        },1000);
    }
    public shareClick() {
        makeScreenShot(() => {
            popNew('app-components-share-share',{ shareType:ShareToPlatforms.TYPE_SCREEN });
        },() => {
            popNew('app-components-message-message',{ content:this.language.tips[0] });
        });
    }
    public backClick() {
        this.ok && this.ok();
    }
}