function dofilter()
{
        var inputval = document.getElementById('filter_input').value;
        var count = 0;

        if(inputval != "")
        {
            var ul = document.getElementById("puns");
            var items = ul.getElementsByTagName("li");
            for (var i = 0; i < items.length; ++i)
            {
                var tags = items[i].getAttribute('data-tags');
            if(tags != null)
                {
                    if(tags.includes(inputval))
                    {
                        items[i].style.display = "list-item";
                        count++;
                    }
                    else
                    {
                        items[i].style.display = "none";
                    }
                }
                else
                {
                    items[i].style.display = "none";
                }
            }
            if(count == 0)
            {
                var items = ul.getElementsByTagName("li");
                for (var i = 0; i < items.length; ++i){ items[i].style.display = "list-item"; }
                document.getElementById('result').innerHTML  = "No Results found for your search, try another term.";
            }
            else
            {
                document.getElementById('result').innerHTML  = count+" Results found for your search shown below";
            }
        }
}
var input = document.getElementById("filter_input");
input.addEventListener("keyup", function(event){	dofilter(); });
document.getElementById('filter_btn').onclick = function(){	dofilter();}





!function(window){
var $q = function(q, res){
        if (document.querySelectorAll) {
        res = document.querySelectorAll(q);
        } else {
        var d=document
            , a=d.styleSheets[0] || d.createStyleSheet();
        a.addRule(q,'f:b');
        for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
            l[b].currentStyle.f && c.push(l[b]);

        a.removeRule(0);
        res = c;
        }
        return res;
    }
    ,addEventListener = function(evt, fn){
        window.addEventListener
        ? this.addEventListener(evt, fn, false)
        : (window.attachEvent)
            ? this.attachEvent('on' + evt, fn)
            : this['on' + evt] = fn;
    }
    , _has = function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    }
    ;


function elementInViewport(el) {
    var rect = el.getBoundingClientRect()

    return (
    rect.top    >= 0
    && rect.left   >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
}

    var images = new Array()
    , query = $q('img.lazy')
    , processScroll = function(){
        for (var i = 0; i < images.length; i++) {
            if (elementInViewport(images[i])) {
            loadImage(images[i], function () {
                images.splice(i, i);
            });
            }
        };
        }
    ;
    // Array.prototype.slice.call is not callable under our lovely IE8
    for (var i = 0; i < query.length; i++) {
    images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll',processScroll);

}(this);
