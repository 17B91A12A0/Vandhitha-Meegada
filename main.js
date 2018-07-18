function getfile(file,callback)
{
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
  if(xhr.readyState === 4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
};
xhr.send(null);
}
getfile("data.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.CareerObjective);
})
var child= document.querySelector(".child1");
function details(det){
  var img = document.createElement("img");
  img.src = det.image;
  child.appendChild(img);

  var name=document.createElement("h3");
  name.textContent = det.name;
  child.appendChild(name);

  var phoneno=document.createElement("h3");
  phoneno.textContent = det.phoneno;
  child.appendChild(phoneno);

  var mail=document.createElement("a");
  mail.href="mailto:vandhithameegada12@gmail.com";
  mail.textContent=det.email;
  child.appendChild(mail);

  var add=document.createElement("h2");
add.textContent=det.add;
  child.appendChild(add);
  
  var Address=document.createElement("h2");
  Address.textContent=det.Address;
  child.appendChild(Address);

  var b=document.createElement("hr");
  child.appendChild(b);

}
var child2=document.querySelector(".child2")
function career(det)
{
  var text=document.createElement("h2");
text.textContent=det.text;
  child2.appendChild(text);

  var c=document.createElement("hr");
  child2.appendChild(c);

  var info=document.createElement("h3");
  info.textContent=det.info;
  child2.appendChild(info);
}
