var s=1;

function addlist()
{

var t=document.getElementById('Title').value;
document.getElementById('contain').innerHTML+='<div class="list" id="bhs">'+'<h3>'+'<span class="T">'+t+'</span>'+'</h3>'+'<button type="button" class="btn btn-dark " id="addcard" onclick="addcard()">'+'Add Card'+'</button>'+'</div>';




document.getElementById('bhs').innerHTML+='<div class="field" id="fieldd">'+
'<input type="text" id="tle" placeholder="Enter title">'+'<br>'+'<input type="text" id="text" class="Text" placeholder="Enter the text for this card">'
+'</div>';
if(s%2==0)
{
  document.getElementById('bhs').style.float='right';
}
s=s+1;
}

var ht=0;
var mt=0;
function addcard()
{
  var tt=document.getElementById('tle').value;
  var tt1=document.getElementById('text').value;


document.getElementById('bhs').innerHTML+='<div class="field1">'+'<h5 id="cv1">'+tt+'</h5>'+'<br>'+'<h6 id="cv2">'+tt1+'</h6>'+'</div>'+'<br>'+'<br>';

// document.getElementById('bhs').style.height+="200px";
// mt=mt+100;
// ht=ht+200;
// document.getElementById('fieldd').style.top=mt+'px';
// document.getElementById('bhs').style.height=ht+'px';

}
