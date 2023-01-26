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

}

function age_test()
{
    var number=prompt("Donner votre age");

    if (number<18)
        document.write("Vous etes mineur");
        else
        document.write("vous etes majeur");
}

function simple_affichage()
{
    var nom=prompt("Quel est votre nom");
    var prenom=prompt("Quel est votre prenom");

    document.write("<div style='background-color:slategrey; margin: auto; border-radius : 8px; border: 2px solid navy; height:30px; text-align:center; width: 300px;'>");
    document.write("<p1 style='color:cyan';>Bonjour " + prenom + "    "+ nom+"</pl>");
    document.write("</div>");
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
     else
     alert("couleur inconnue ! ...");
}
