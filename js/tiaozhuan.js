var tabs = document.getElementsByClassName("zhu")[0].getElementsByTagName("span");
var contents = document.getElementsByClassName("container2-box1__neirong")[0].getElementsByClassName("none");
function zuire(index){
    for (let i = 0; i < tabs.length; i++) {
        if (i==index) {
            tabs[i].className="zui";
            contents[i].className="block";
        } else{
            tabs[i].className="xin";
            contents[i].className="none";
        } 
    }  
}  