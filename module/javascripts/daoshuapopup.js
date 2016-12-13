function daoshuapopup(id) {
    var trigger = document.querySelector(id);
    trigger.addEventListener('click',showPopup);
    function showPopup() {
        var popupbox = document.createElement('div'),
            style = document.createElement('style');
        popupbox.className = 'popup-rulebox';
        popupbox.innerHTML = ' <div><div class="header"><h1>常见问题</h1>' +
            '</div>' +
            '<div class="clasuse-cont">' +
            '<strong class="blue">Q：银行卡安全险具体提供什么保障？</strong><br/>' +
            'A：在保险期间内，被保险人受保障的银行账户（借记卡账号和信用卡账户）或网银账户信息发生遗失、被盗、被抢等情形，在被保险人向银行账户所属银行金融机构办理正式挂失前的72小时内，被恶意第三方通过自动柜员机（ATM）、银行柜台、互联网或通信网络进行盗刷或盗用，造成被保险人资金损失的，由保险人按照本保险合同的约定向被保险人进行赔偿。本保险保险期限为一个月，由众安保险公司负责承保并理赔。 <br/><br/>' +
            '<strong  class="blue">Q：保险可以赔付几次？</strong><br/>' +
            'A：该保险产品不限赔付次数。但在保险期间内，每次事故保险人按照被保险人的实际损失金额进行赔付。若全年发生多次盗刷或盗用事故，保险人累计赔偿的金额以保险合同约定的2万元保险金额为限，赔偿额超过2万元该保险失效。 <br/><br/>' +
            '<strong class="blue">Q：哪些损失保险不会赔偿？</strong><br/>' +
            'A：被保险人出险后，如下损失保险公司不会赔偿：<br/>被保险人遭到“盗刷”之后，如果已经由发卡银行或支付机构承担了相关损失；<br/>盗刷期间，信用卡账户所产生的利息以及透支利息、手续费、滞纳金，以及信用卡的年费、补发新卡费等以及任何形式的间接损失或费用；<br/>因为盗刷赔偿纠纷可能涉及到的诉讼费用，以及个人账户挂失、冻结手续费。<br/><br/>' +
            '<strong class="blue">Q：保险的承保范围是？</strong><br/>' +
            'A：本保险承保的个人账户指被保险人名下的下列银行卡<br/>1）被保险人名下的借记卡<br/>2）被保险人名下的信用卡主卡<br/>3）以被保险人为持卡人的信用卡附属卡<br/>4）被保险人名下的网银账户<br/><br/>' +
            '<strong class="blue">Q：投保成功后，马上生效吗？</strong><br/>' +
            'A：本保险保障自投保成功后的次日零时生效。<br/><br/>' +
            '<strong class="blue">Q：我除了交纳保费，是否还需要支付其它附加费用？</strong><br/>' +
            'A：除了交纳保费，无需支付其他任何附加费用，放心投保。<br/><br/>' +
            '<strong class="blue">Q：投保成功后，保险公司如何提供保险凭证？</strong><br/>' +
            'A：本保险产品为您提供电子保单，根据《中华人民共和国合同法》第十一条规定，数据电文是合法的合同的表现形式。投保成功后，您也可以通过众安保险官网（www.zhongan.com）或 众安保险 公众号查询保单和理赔。<br/><br/>' +
            '<strong class="blue">Q：我投保的银行卡安全险能保多少时间？会自动续保吗？</strong><br/>' +
            'A：该保险产品的保险期限为1个月，自投保成功次日零时起生效。该保险产品不会自动续保，保单结束后，您需要重新购买，方能继续获得保险保障。<br/><br/>' +
            '<strong class="blue">Q：如果我的银行卡（借记卡或信用卡）账户内的资金真的被盗取了，如何报案理赔？</strong><br/>' +
            '答：A：<strong>第一步：挂失。</strong>一旦发现您的银行卡被盗刷、盗用，请您立即向发卡银行进行咨询，并申请挂失。<br/><strong>第二步：报案。</strong>在您申请银行卡挂失后，你还需立即向公安机关报案，于此同时通过以下两种报案方式：众安电话客服（400-999-9595）或微信银行卡还款在线自助报案向众安保险进行报案。<br/><strong>第三步：</strong>通过以下<strong>两种报案方式</strong>之一向众安发起索赔申请：众安电话客服（400-999-9595）或微信信用卡还款首页入口在线申请理赔。<br/><strong>第四步：准备理赔材料。</strong>被保险人准备以下资料后，可寄送至众安保险理赔部。<br/>所需资料包括：索赔申请书、出险个人账户的挂失/冻结证明、挂失/冻结记录、有关损失资金的交易记录，比如涉及转账，需提供收款方姓名及账号等信息、被保险人的身份证明、公安机关出具的报案/立案证明、或其他与确认保险事故的性质、原因、损失程度等有关的其他证明和资料。 第五步：理赔受理后，经审核成功有效，理赔金额将会转账你的银行卡。<br/><br/>' +
            '<strong class="blue">Q：如何变更保险合同信息？</strong><br/>' +
            'A：如您需要变更保险合同的相关信息，请拨打众安客服热线400-999-9595，并按照客服人员的指引提供相关的材料后即可办理。<br/><br/>' +
            '<strong class="blue">Q：免费活动领取要求？</strong><br/>' +
            'A：同一个用户限领一份（同一个微信号、身份证、手机号等均视为同一个用户）<br/>    如果用户在活动期间有作弊或违规行为，众安保险将依法做出拒赔处理。<br/><br/>' +
            '</div>' +
            '<div class="close"></div>';

        style.innerHTML = ".popup-rulebox{padding:.3rem;box-sizing:border-box}.popup-rulebox h1{position:relative;font-size:.32rem;padding:.4rem 0;text-align:center;line-height:.48rem;color:#000;font-weight:700}.popup-rulebox h1:after{height:1px;width:-webkit-calc(100% - .6rem);content:'';position:absolute;bottom:0;left:50%;-webkit-transform:translate(-50%,0);background:#d2d2d2}.popup-rulebox h6{position:relative;padding:.1rem 0 .6rem 0;font-size:.26rem;color:#828282;text-align:center;margin:0 .6rem;border-bottom:1px solid #e2e2e2}.popup-rulebox .clasuse-cont{padding-top:.4rem;font-size:.32rem;color:#666;line-height:.48rem}.popup-rulebox .clasuse-cont h5{padding:.2rem 0;text-align:center;font-weight:700;border-bottom:1px solid #e2e2e2;margin-bottom:.4rem}.popup-rulebox{display:-webkit-box;position:fixed;top:0;left:0;-webkit-box-align:center;-webkit-box-pack:center;width:100%;height:100%;background:rgba(0,0,0,.8);z-index:29}.popup-rulebox>div{display:-webkit-box;-webkit-box-orient:vertical;position:relative;width:100%;height:100%;border-radius:.16rem;background:#fff;box-sizing:border-box;overflow:hidden;z-index:29}.popup-rulebox .close{position:absolute;bottom:0;left:0;width:100%;height:1.4rem;line-height:1.4rem;text-align:center;color:#0db313;font-size:.32rem;background:-webkit-linear-gradient(90deg,#fff 0,#fff 90%,rgba(255,255,255,.2) 100%)}.clasuse-cont{padding:0 .3rem 2rem .3rem;-webkit-box-flex:1;overflow-y:scroll;-webkit-overflow-scrolling:touch}.blue{color:#38b0ff;font-weight:400}.popup-rulebox .close:after,.popup-rulebox .close:before{content:'';position:absolute;left:50%;top:50%;width:.74rem;height:1px;background:#c4c4c4}.popup-rulebox .close:before{-webkit-transform:translate(-50%,0) rotate(45deg)}.popup-rulebox .close:after{-webkit-transform:translate(-50%,0) rotate(-45deg)}";

        document.head.appendChild(style);
        document.body.appendChild(popupbox);
        popupbox.querySelector('.close').addEventListener('click',function(){
            popupbox.style.display = 'none';
        })
    }
}



