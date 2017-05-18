/**
 * Created by 宇欣 on 2017/5/16.
 */
var h = new Array(0,380,25,25,25);
var tf = new Array(false,true,false,false,false);
var minheight = 35;
var maxheight = 160;
function fn(likey,tag){
    if (tf[tag]){
        if (h[tag]>=minheight){
            document.getElementById("main"+tag).style.height = h[tag] + "px";
            setTimeout(function(){fn(likey,tag)},1);
            h[tag] -= 10;
        } else {
            likey.innerHTML = "展开";
            tf[tag] = !tf[tag];
            h[tag] += 10;
        }
    } else {
        if (h[tag]<=maxheight){
            document.getElementById("main"+tag).style.height = h[tag] + "px";
            setTimeout(function(){fn(likey,tag)},1);
            h[tag] += 10;
        } else {
            likey.innerHTML = "折叠";
            tf[tag] = !tf[tag];
            h[tag] -= 10;
        }
    }
}