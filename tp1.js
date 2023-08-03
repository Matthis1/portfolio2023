function calcul_moyenne() 
{
         var note1=prompt("Donner une premiere note svp");
         var note2=prompt("Donner une deuxieme note svp");
         var note3=prompt("Donner une troisieme note svp");
         var note4=prompt("Donner une quatrieme note svp");

         var somme = Number(note1)*2 + Number(note2)*2 + Number(note3)*2 + Number(note4)*3;
        
         var moyenne= somme /9 ;


         document.write("Voici la somme:     "+somme + "   ");

         document.write("Voici la moyenne:     "+moyenne);

          if (moyenne<10)
              document.write("vous etes redoublant");
            else
            document.write("vous etes admis");

            document.write("<a href=tp1.1.html>retpur</a>");
}

function age_test()
{
    var number=prompt("Donner votre age");

    if (number<18)
        document.write("Vous etes mineur");
        else
        document.write("vous etes majeur");
    
    document.write("<a href=tp1.1.html>retpur</a>");
}

function simple_affichage()
{
    var nom=prompt("Quel est votre nom");
    var prenom=prompt("Quel est votre prenom");

    document.write("<div style='background-color:slategrey; margin: auto; border-radius : 8px; border: 2px solid navy; height:30px; text-align:center; width: 300px;'>");
    document.write("<p1 style='color:cyan';>Bonjour " + prenom + "    "+ nom+"</pl>");
    document.write("</div>");
    document.write("<a href=tp1.1.html>retpur</a>");
}
function test_color()
{
    var couleur= prompt("donner une couleur");
    if (couleur == "rouge" || couleur == 'ROUGE' ||  couleur=='R')
     document.body.style.background ="red";
     else if (couleur == 'bleu' || couleur =='BLEU' ||  couleur=='B')
     document.body.style.background="blue";
     else if (couleur == 'vert' || couleur=='VERT' ||  couleur=='V')
     document.body.style.background="green"
     else if (couleur == 'rose' || couleur=='ROSE' ||  couleur=='Rose')
     document.body.style.background="Pink"
     else if (couleur == 'jaune' || couleur=='Jaune' ||  couleur=='Jaune')
     document.body.style.background="yellow"
     else if (couleur == 'noir' || couleur=='NOIR' ||  couleur=='Noir')
     document.body.style.background="black"
     else if (couleur == 'blanc' || couleur=='BLANC' ||  couleur=='Blanc')
     document.body.style.background="white"
     else if (couleur == 'gris' || couleur=='GRIS' ||  couleur=='Gris')
     document.body.style.background="grey"
     else if (couleur == 'violet' || couleur=='VIOLET' ||  couleur=='Violet')
     document.body.style.background="purple"
     else if (couleur == 'cyan' || couleur=='CYAN' ||  couleur=='Cyan')
     document.body.style.background="#00FFFF"
     else
     alert("couleur inconnue ! ...");
}
