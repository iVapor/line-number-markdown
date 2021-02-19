


const __main = () => {
    console.log('in main')
    log('in main')

    setTimeout(() => {
        (function() {
            var pre = document.getElementsByTagName('pre'),
                pl = pre.length;
            for (var i = 0; i < pl; i++) {
                pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
                var num = pre[i].innerHTML.split(/\n/).length;
                for (var j = 0; j < (num - 1); j++) {
                    var line_num = pre[i].getElementsByTagName('span')[0];
                    line_num.innerHTML += '<span>' + (j + 1) + '</span>';
                }
            }
        })();
    }, 1000)
    document.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed'); // 译者注："DOM完全加载以及解析"
    });
}



__main()