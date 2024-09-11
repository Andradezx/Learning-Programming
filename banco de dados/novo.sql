CREATE DATABASE tbNovela;
USE tbNovela;

CREATE TABLE tbNovela(
codigo_novela SMALLINT UNSIGNED  AUTO_INCREMENT PRIMARY KEY NOT NULL,
nome_novela VARCHAR(30) NOT NULL,
data_primeiro_capitulo DATE NOT NULL,
data_ultimo_capitulo DATE NOT NULL,
horario_exibicao TIME NOT NULL
);

CREATE TABLE tbAutor(
codigo_autor MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
nome_autor VARCHAR(50) NOT NULL,
idade_personagem TINYINT NOT NULL,
cidade_autor VARCHAR(20) NOT NULL,
salario_ator DOUBLE NOT NULL,
sexo_ator VARCHAR(1) NOT NULL
);

CREATE TABLE tbNovelaPersonagem(
codigo_novela SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
codigo_personagem SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
PRIMARY KEY (codigo_novela,codigo_personagem),
CONSTRAINT pk_tbNovelaPersonagem FOREIGN  KEY ()
);