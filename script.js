body{
margin:0;
font-family:Arial;
text-align:center;
background:black;
color:white;
overflow:hidden;
transition:0.5s;
}

.light{
background:#fff;
color:#000;
}

#bg{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
z-index:-1;
}

.hidden{
display:none;
}

#lock{
position:absolute;
top:40%;
width:100%;
}

input{
padding:10px;
border-radius:10px;
border:none;
}

button{
padding:10px 20px;
border:none;
border-radius:10px;
margin:10px;
cursor:pointer;
}

.msg{
background:rgba(255,255,255,0.2);
margin:10px;
padding:10px;
border-radius:10px;
display:inline-block;
}

#overlay{
position:fixed;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
background:black;
}

#no{
position:absolute;
}

#final{
position:absolute;
top:40%;
width:100%;
}
