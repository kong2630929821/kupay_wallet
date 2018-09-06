<div class="new-page" style="background: linear-gradient(#F94E4D, #F6A050);" ev-back-click="backPrePage" ev-next-click="goDetail">
    {{if !it1.scroll}}
    <app-components1-topBar-topBar>{"title":"领分红",nextImg:"../../res/image/41_white.png",background:"#F94E4D" }</app-components1-topBar-topBar>
    {{else}}
    <app-components1-topBar-topBar>{"title":"领分红",nextImg:"../../res/image/41_blue.png"}</app-components1-topBar-topBar>
    {{end}}
    <div w-class="content" id="content" on-scroll="scroll">
        <div w-class="groupcard">
            <div w-class="dividend-title">累计分红(ETH)</div>
            <div w-class="dividend-money">{{it1.totalDivid}}</div>
            <div w-class="dividLine"></div>
            <div w-class="dividend-sum">
                <span style="display: inline-block;vertical-align: middle;">持有 {{" "+it1.ktBalance+" "}} KT</span>
            </div>    
        </div>      
        
        <div style="margin-top: 10px;">
            <app-components-threeParaCard-threeParaCard>{"name":["年华收益","本次分红","已分红天数"],"data":[{{it1.yearIncome}},{{it1.thisDivid}},{{it1.totalDays}}] }</app-components-threeParaCard-threeParaCard>
        </div>
        <div style="text-align: center;" id="miningBtn">
            <img src="../../../res/image/dividend_background.png" style="width: 611px;height: 800px;margin-top: -360px;"/>
            <div style="margin-top: -240px;height: 200px;"><div w-class="miningBtn" class="miningBtnClick" on-tap="doMining" style="animation:{{it1.isAbleBtn?'change 0.2s':''}}" >领分红</div></div>
        </div>
        <div class="miningNum" style="animation:{{it1.doMining?'move 0.5s':''}}">
            <span>+0</span>
        </div>
    
        <div w-class="history">
            <div w-class="historyTitle">分红记录</div>
            {{if it1.dividHistory.length==0}}
            <div w-class="historyNone">
                <img src="../../../res/image/dividend_history_none.png" style="width: 200px;height: 200px;"/>
                <div>还没有记录哦</div>
            </div>
            {{end}}

            <div w-class="historyContent">
                {{for ind,val of it1.dividHistory}}
                <div w-class="historyItem">
                    <span style="flex: 1;">{{val.time}}</span>
                    <span>{{val.num + " ETH"}}</span>
                </div>
                {{end}}
                
                {{if it1.dividHistory.length>0 && !it1.more}}
                <div w-class="endMess">到此结束啦^_^</div>
                {{end}}
            </div>
        </div>

        <div style="height: 118px;"></div>
    </div>
    
</div>