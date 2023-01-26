function affichagetab()
{
    document.write('<table border=2px width=30%>');
    for(let i = 0 ; i <= 5; i++)
    {
        document.write('<tr><td>*</td><td>*</td><td>*</td><td>*</td></tr>')
    }
    document.write('</table>');
}

function affichagetab2()
{
    var n1 = prompt("nombre de ligne");
    document.write('<table border=2px width=30%>');
    for (let i = 0 ; i <= n1; i++) 
    {
        document.write("<tr><td>"+i+"</td><td>*</td><td>*</td><td>*</td></tr>")
    }
    document.write('</table>')
}

function seconnecter()
{
    var utilisateur=prompt("identifient")
    var mdp=prompt("mot de passe")

    if (utilisateur=="admin" & mdp=="admin")
        document.write("<center p1 style='color:navy';>Bonjour " + utilisateur + "    "+ mdp+"</pl>")
        else alert("utilisateur ou mot de passe incorrecte");
}

function seconnecter2()
{   i=0;
    do { 
        var utilisateur=prompt("identifient")
        var mdp=prompt("mot de passe")

     if(utilisateur=="admin" && mdp=="admin")
    {
    document.write("<center p1 style='color:navy';>Bonjour " + utilisateur + "   "+ mdp+"</pl>");
    break;
    }
    else  alert("utilisateur ou mot de passe incorrecte");
    i+=1;
    } while (i < 3);
    if (i==3)
    alert("Délai dépassé")

  
    
}

function cdc()
{
    var chaine = prompt("Donner un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaine contient" +chaine.length+" caractères " + "<br>");
    document.write("La premiere lettre est  " + chaine.substr(0,1)+ "<br>");
}

function switch1()
{
    var color = prompt("Entrez une couleur");
    switch(color)
    {
        case "rouge" : document.body.style.background = "red";
        break;
        case "ROUGE" : document.body.style.background = "red";
        break;
        case "bleu" : document.body.style.background = "blue";
        break;
        case "BLEU" : document.body.style.background = "blue";
        break;

        default:alert("couleur non définie");
    }
}

function bonus()
{   Tf=0
    do 
    {
        var article=prompt("saisir l'article")
        var Pa=Number(prompt("saisir le prix"))
        var Qa=Number(prompt("saisir la quantité"))
        var produit = Number(Pa)*Number(Qa);
        alert("Voici le prix de l'article:     "+ produit + "   ");
        Tf=Tf + produit;
        alert("Voici le prix total a payer:  "+Tf+" ")
        var msg=prompt("pour continuer entrer un caractère pour areter entrer STOP");
    }
        

        
    while (msg != "STOP");
    document.write("article "+ article + "<br>")
    document.write("Voici le prix total a payer:     "+ Tf + "   ");
}