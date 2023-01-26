#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Rayon
#------------------------------------------------------------

CREATE TABLE Rayon(
        Code_Rayon Varchar (50) NOT NULL ,
        Num_Rayon  Varchar (50) NOT NULL
	,CONSTRAINT Rayon_PK PRIMARY KEY (Code_Rayon)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Mots clé
#------------------------------------------------------------

CREATE TABLE Mots_cle(
        Code_Mots Varchar (50) NOT NULL ,
        Mots      Varchar (50) NOT NULL
	,CONSTRAINT Mots_cle_PK PRIMARY KEY (Code_Mots)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Auteur
#------------------------------------------------------------

CREATE TABLE Auteur(
        Code_Auteur   Varchar (50) NOT NULL ,
        Nom_Auteur    Varchar (50) NOT NULL ,
        Prenom_Auteur Varchar (50) NOT NULL
	,CONSTRAINT Auteur_PK PRIMARY KEY (Code_Auteur)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Adhérent
#------------------------------------------------------------

CREATE TABLE Adherent(
        Code_Adherent   Varchar (50) NOT NULL ,
        Nom_Adherent    Varchar (50) NOT NULL ,
        Prenom_Adherent Varchar (50) NOT NULL ,
        Adesse_Adherent Varchar (50) NOT NULL
	,CONSTRAINT Adherent_PK PRIMARY KEY (Code_Adherent)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Ouvrage
#------------------------------------------------------------

CREATE TABLE Ouvrage(
        Code_Ouvrage  Varchar (50) NOT NULL ,
        titre         Varchar (50) NOT NULL ,
        Date_emprunt  Date NOT NULL ,
        Date_limite   Date NOT NULL ,
        Code_Adherent Varchar (50) NOT NULL ,
        Code_Rayon    Varchar (50) NOT NULL
	,CONSTRAINT Ouvrage_PK PRIMARY KEY (Code_Ouvrage)

	,CONSTRAINT Ouvrage_Adherent_FK FOREIGN KEY (Code_Adherent) REFERENCES Adherent(Code_Adherent)
	,CONSTRAINT Ouvrage_Rayon0_FK FOREIGN KEY (Code_Rayon) REFERENCES Rayon(Code_Rayon)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Ecrit par
#------------------------------------------------------------

CREATE TABLE Ecrit_par(
        Code_Auteur  Varchar (50) NOT NULL ,
        Code_Ouvrage Varchar (50) NOT NULL
	,CONSTRAINT Ecrit_par_PK PRIMARY KEY (Code_Auteur,Code_Ouvrage)

	,CONSTRAINT Ecrit_par_Auteur_FK FOREIGN KEY (Code_Auteur) REFERENCES Auteur(Code_Auteur)
	,CONSTRAINT Ecrit_par_Ouvrage0_FK FOREIGN KEY (Code_Ouvrage) REFERENCES Ouvrage(Code_Ouvrage)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Index
#------------------------------------------------------------

CREATE TABLE Index(
        Code_Mots    Varchar (50) NOT NULL ,
        Code_Ouvrage Varchar (50) NOT NULL
	,CONSTRAINT Index_PK PRIMARY KEY (Code_Mots,Code_Ouvrage)

	,CONSTRAINT Index_Mots_cle_FK FOREIGN KEY (Code_Mots) REFERENCES Mots_cle(Code_Mots)
	,CONSTRAINT Index_Ouvrage0_FK FOREIGN KEY (Code_Ouvrage) REFERENCES Ouvrage(Code_Ouvrage)
)ENGINE=InnoDB;

