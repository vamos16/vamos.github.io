body{
margin:0;
background:#111;
font-family:-apple-system, BlinkMacSystemFont;
overflow:hidden;
color:white;
}

.phone{
width:320px;
height:600px;
background:#000;
border-radius:40px;
margin:50px auto;
display:flex;
flex-direction:column;
overflow:hidden;
box-shadow:0 0 40px rgba(255,0,100,0.3);
}

.header{
background:#1c1c1e;
padding:15px;
text-align:center;
font-weight:bold;
}

.chat{
flex:1;
padding:10px;
overflow-y:auto;
display:flex;
flex-direction:column;
}

.msg{
max-width:70%;
padding:10px;
margin:5px;
border-radius:20px;
font-size:14px;
}

.me{
align-self:flex-end;
background:#0a84ff;
}

.her{
align-self:flex-start;
background:#2c2c2e;
}

.footer{
padding:10px;
background:#1c1c1e;
}

input{
width:100%;
padding:10px;
border-radius:20px;
border:none;
background:#2c2c2e;
color:white;
}

#counter{
text-align:center;
margin-top:10px;
font-size:14px;
opacity:0.7;
}

/* particle */
#bg{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
z-index:-1;
}
