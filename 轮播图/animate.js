function animate (obj,target) {

    if(obj.timer){
        clearInterval(obj.timer);
    }

    obj.timer=setInterval(function(){
        var leader=obj.offsetLeft;
        var step=10;
        if (leader > target) {
            //说明目标我们的左侧，应该往左。
            step = -step;
        }
        var distance = Math.abs(target - leader);
        if(distance > Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        }else{
            clearInterval(obj.timer);
            obj.style.left = target + "px";
        }

    },15);

};