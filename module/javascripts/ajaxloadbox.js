/*创建loading*/
window.ajaxLoadBox = (function () {
    var createLoadingBox = function(){
        var body = document.querySelector('body');
        this.statusbox = document.createElement('div');
        this.statusbox.className = 'Lin-popupStatusBox js-statusbox';
        this.statusbox.innerHTML = '<div class="loadBox"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><div class="tips js-tips"></div>';
        body.appendChild(this.statusbox);
        this.statusbox.style.display = 'block';
        this.loadbox = this.statusbox.querySelector('.loadBox');
        this.backInfoBox = this.statusbox.querySelector('.js-tips');
    };
    createLoadingBox.prototype = {
        hide:function(data){
            var _self = this;
            _self.statusbox.classList.add('hide');
            _self.backInfoBox.innerHTML = data;
            _self.backInfoBox.style.display = 'block';
            _self.loadbox.style.display = 'none';
            _self.statusbox.addEventListener('webkitAnimationEnd',function(){
                _self.statusbox.style.display = 'none';
                console.log(_self.statusbox);
                document.querySelector('body').removeChild(_self.statusbox);
            });
        }
    };
    return createLoadingBox;
})();
/*end*/