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

CREATE TABLE tbPersonagem (
codigo_personagem SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY  NOT NULL,
nome_personagem varchar(50) NOT NULL,
idade_personagem TINYINT UNSIGNED NOT NULL,
situacao_financeira_personagem VARCHAR(100),
codigo_autor SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
CONSTRAINT PK_tbPersonaAutor FOREIGN KEY (codigo_autor) REFERENCES tbAutor(codigo_autor)
);

CREATE TABLE tbCapitulo(
codigo_capitulo MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
nome_capitulo VARCHAR(30) NOT NULL,
data_exibicao_capitulo DATE NOT NULL,
codigo_novela SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
CONSTRAINT pk_tbCapituloNovela FOREIGN KEY (codigo_novela) REFERENCES tbNovela(codigo_novela)

);


CREATE TABLE tbNovelaPersonagem(
codigo_novela SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
codigo_personagem SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
PRIMARY KEY (codigo_novela,codigo_personagem),
CONSTRAINT pk_tbNovelaPersonagem_Personagem FOREIGN  KEY (codigo_personagem)  REFERENCES tbPersonagem(codigo_personagem),
CONSTRAINT pk_tbNovelaPersonagem_Novela  FOREIGN KEY (codigo_novela)  REFERENCES tbNovela(codigo_novela)
);

