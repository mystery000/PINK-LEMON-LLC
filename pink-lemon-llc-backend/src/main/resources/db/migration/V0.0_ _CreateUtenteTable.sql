DROP TABLE IF EXISTS Utentes;
CREATE TABLE Utentes(
   id LONG AUTO_INCREMENT PRIMARY KEY,
   name TEXT,
   surname TEXT,
   username TEXT,
   email TEXT unique,
   password TEXT,
   credito INTEGER,
   credito_mensile INTEGER,
   credito_annuale INTEGER
);