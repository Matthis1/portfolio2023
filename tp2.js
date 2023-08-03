function somme()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a) + Number(b);
    t3.value = s;
}
function soustraction()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a) - Number(b);
    t3.value = s;
}
function produit()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a) * Number(b);
    t3.value = s;
}
function division()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a) / Number(b);
    t3.value = s;
}

function parite()
{
    var x = Number(document.getElementById("t1").value)
    if (x%2==0) {
    alert("nombre est pair ! ...") }
    {
        alert("le nombre est impair ! ...")
        t3.value = "le nombre est impair"}
}

function permuter()
{
    var v3 = "";
    a = document.getElementById()
}