function sous_total()
{
    var N1=document.getElementsById(p1).value;
    var N2=document.getElementsById(p2).value;
    var N3=document.getElementsById(p3).value;
    var N4=document.getElementsById(p4).value;
    var N5=document.getElementsById(p5).value;
    var N6=document.getElementsById(p6).value;
    var N7=document.getElementsById(p7).value;
    var N8=document.getElementsById(p8).value;
    
    var s = Number(N1) + Number(N2) + Number(N3) + Number(N4) + Number(N5) + Number(N6) + Number(N7) + Number(N8) ;
    st.value=s
}