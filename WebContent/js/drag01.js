var isshow=0;//0小窗口没有显示，1小窗口已显
function creatediv()
{            
    var msgw,msgh,bordercolor;
    msgw=400;//提示窗口的宽度
    msgh=505;//提示窗口的高度
    var sWidth,sHeight;
    if( top.location == self.location )
        doc = document;
    var docElement = doc.documentElement;
    sWidth=docElement.clientWidth;
    sHeight = docElement.clientHeight;
    if( docElement.scrollHeight > sHeight )
        sHeight = docElement.scrollHeight;
    var bgObj=document.createElement(“div”);
    bgObj.setAttribute(‘id’,’bgDiv’);
    bgObj.style.position=”absolute”;
    bgObj.style.top=”0″;
    bgObj.style.left=”0″;
    bgObj.style.background=”#777″;
    bgObj.style.filter=”progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75″;
    bgObj.style.opacity=”0.6″;
    bgObj.style.width=sWidth + “px”;
    bgObj.style.height=sHeight + “px”;
    bgObj.style.zIndex = “10000”;
    document.body.appendChild(bgObj);
        
    var msgObj=document.createElement(“div”);
    msgObj.setAttribute(“id”,”msgDiv”);
    msgObj.setAttribute(“align”,”center”);
    msgObj.style.position = “absolute”;
    msgObj.style.left = “50%”;
    msgObj.style.background=”#fff”;
    msgObj.style.marginLeft = “-200px” ;
    msgObj.style.top = (document.documentElement.clientHeight/2+document.documentElement.scrollTop-252)+”px”;
    msgObj.style.width = msgw + “px”;
    msgObj.style.height =msgh + “px”;
    msgObj.style.zIndex = “10001”;
    msgObj.innerHTML = “this is me！<br /><a href=\”javascript:void(0);\” onclick=’delWinD();return false;’>点我关闭窗口</a>”;
    document.body.appendChild(msgObj);
}
function delWinD()
{
   document.getElementById(“bgDiv”).style.display=”none”;
   document.getElementById(“msgDiv”).style.display=”none”;
   isshow=0;
}
function show()
{  
    isshow=1;
    if(!document.getElementById(“msgDiv”))//小窗口不存在
        creatediv();
    else
    {
        document.getElementById(“bgDiv”).style.display=””;
        document.getElementById(“msgDiv”).style.display=””;
        document.getElementById(“msgDiv”).style.top=(document.documentElement.clientHeight/2+document.documentElement.scrollTop-252)+”px”;
    }  
}