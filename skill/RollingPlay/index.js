(function () {
    var list = document.querySelector('.list')

    function cloneFirstItem() {
        var firstItem = list.children[0];
        var newItem = firstItem.cloneNode(true);
        list.appendChild(newItem);
    }

    cloneFirstItem();


    // 2. 滚动 
    var duration = 2000;
    var itemHeight = 30;
    var curIndex = 0;

    setInterval(moveNext, duration)





    function moveNext() {
        var from = curIndex * itemHeight;
        curIndex++;
        var to = curIndex * itemHeight;

        var totalDuration = 300;
        var duration = 10;
        var times = totalDuration / duration;
        var dis = (to - from) / times;
        var timesId = setInterval(function () {
            from += dis;
            clearInterval(timesId)

            if (curIndex === list.children.length - 1) {
                from = 0;
                curIndex = 0;
            }

            list.scrollTop = from;
        }, duration)
    }

})();