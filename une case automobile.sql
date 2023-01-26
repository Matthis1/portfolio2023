#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Marque
#------------------------------------------------------------

CREATE TABLE Marque(
        Code_Marque Varchar (50) NOT NULL ,
        Nom_Marque  Varchar (50) NOT NULL
	,CONSTRAINT Marque_PK PRIMARY KEY (Code_Marque)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Modèle
#------------------------------------------------------------

CREATE TABLE Modele(
        Code_Modele  Varchar (50) NOT NULL ,
        Nom_Modele   Varchar (50) NOT NULL ,
        Annee_Modele Date NOT NULL ,
        Code_Marque  Varchar (50) NOT NULL
	,CONSTRAINT Modele_PK PRIMARY KEY (Code_Modele)

	,CONSTRAINT Modele_Marque_FK FOREIGN KEY (Code_Marque) REFERENCES Marque(Code_Marque)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Catégorie
#------------------------------------------------------------

CREATE TABLE Categorie(
        Code_Categorie     Varchar (50) NOT NULL ,
        Intitule_Categorie Text NOT NULL
	,CONSTRAINT Categorie_PK PRIMARY KEY (Code_Categorie)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Type pièce 
#------------------------------------------------------------

CREATE TABLE Type_piece(
        Code_Type_Piece Int  Auto_increment  NOT NULL ,
        Code_Categorie  Varchar (50) NOT NULL
	,CONSTRAINT Type_piece_PK PRIMARY KEY (Code_Type_Piece)

	,CONSTRAINT Type_piece_Categorie_FK FOREIGN KEY (Code_Categorie) REFERENCES Categorie(Code_Categorie)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Pièce
#------------------------------------------------------------

CREATE TABLE Piece(
        Code_Piece      Varchar (50) NOT NULL ,
        Etat            Varchar (50) NOT NULL ,
        Date_Recap      Date NOT NULL ,
        Code_Type_Piece Int NOT NULL
	,CONSTRAINT Piece_PK PRIMARY KEY (Code_Piece)

	,CONSTRAINT Piece_Type_piece_FK FOREIGN KEY (Code_Type_Piece) REFERENCES Type_piece(Code_Type_Piece)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Convient à
#------------------------------------------------------------

CREATE TABLE Convient_a(
        Code_Type_Piece Int NOT NULL ,
        Code_Modele     Varchar (50) NOT NULL
	,CONSTRAINT Convient_a_PK PRIMARY KEY (Code_Type_Piece,Code_Modele)

	,CONSTRAINT Convient_a_Type_piece_FK FOREIGN KEY (Code_Type_Piece) REFERENCES Type_piece(Code_Type_Piece)
	,CONSTRAINT Convient_a_Modele0_FK FOREIGN KEY (Code_Modele) REFERENCES Modele(Code_Modele)
)ENGINE=InnoDB;

