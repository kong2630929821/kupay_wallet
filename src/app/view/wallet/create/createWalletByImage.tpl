<div class="new-page" w-class="new-page" ev-back-click="backPrePage">
    {{: topBarTitle = {"zh_Hans":"照片注册","zh_Hant":"照片註冊","en":""} }}
    <app-components1-topBar-topBar>{"title":{{topBarTitle}} }</app-components1-topBar-topBar>
    <div w-class="body">
        {{: createTips = {"zh_Hans":"选择颜色丰富的照片","zh_Hant":"選擇顏色豐富的照片","en":""} }}
        <div w-class="create-tips"><div w-class="tip-divid"></div><pi-ui-lang>{{createTips}}</pi-ui-lang></div>
        <div w-class="bottom-box">
            <div w-class="choose-image-container" on-tap="selectImageClick">
                {{if !it.chooseImage}}
                <div w-class="choose-image-text">+ <pi-ui-lang>{"zh_Hans":"选择照片","zh_Hant":"選擇照片","en":""}</pi-ui-lang>
                </div>
                {{else}}
                <widget w-tag="pi-ui-html" w-class="ui-html">{{it.imageHtml}}</widget>
                {{end}}
            </div>
            <div w-class="image-psw-container" on-tap="imagePswClick">
                {{: inputPlace = {"zh_Hans":"给照片取个名字","zh_Hant":"給照片取個名字","en":""} }}
                <div w-class="input-father" ev-input-change="imagePswChange">
                    <app-components-input-suffixInput>{itype:"text",placeHolder:{{inputPlace}},clearable:true,available:{{it.imagePswAvailable}}}</app-components-input-suffixInput>
                </div>
            </div>
            <div ev-btn-tap="nextClick" w-class="btn">
                {{: btnName = {"zh_Hans":"下一步","zh_Hant":"下一步","en":""} }}
                <app-components1-btn-btn>{"name":{{btnName}},"types":"big","color":"blue"}</app-components1-btn-btn>
            </div>
        </div>
    </div>
</div>