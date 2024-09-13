CREATE DATABASE tbEmissora;
USE tbEmissora;

CREATE TABLE tbNovela(
codigo_novela SMALLINT UNSIGNED  AUTO_INCREMENT PRIMARY KEY NOT NULL,
nome_novela VARCHAR(30) NOT NULL,
data_primeiro_capitulo DATE NOT NULL,
data_ultimo_capitulo DATE NOT NULL,
horario_exibicao TIME NULL
);

CREATE TABLE tbAtor(
codigo_ator MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
nome_ator VARCHAR(50) NOT NULL,
idade_personagem TINYINT NOT NULL,
cidade_ator VARCHAR(20) NOT NULL,
salario_ator DOUBLE NOT NULL,
sexo_ator VARCHAR(1) NOT NULL
);

CREATE TABLE tbPersonagem (
codigo_personagem SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY  NOT NULL,
nome_personagem varchar(50) NOT NULL,
idade_personagem TINYINT UNSIGNED NOT NULL,
situacao_financeira_personagem VARCHAR(100),
codigo_ator MEDIUMINT UNSIGNED  NOT NULL,
CONSTRAINT PK_tbPersonaator FOREIGN KEY (codigo_ator) REFERENCES tbator(codigo_ator)
);

CREATE TABLE tbCapitulo(
codigo_capitulo MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
nome_capitulo VARCHAR(30) NOT NULL,
data_exibicao_capitulo DATE NOT NULL,
codigo_novela SMALLINT UNSIGNED  NOT NULL,
CONSTRAINT pk_tbCapituloNovela FOREIGN KEY (codigo_novela) REFERENCES tbNovela(codigo_novela)

);


CREATE TABLE tbNovelaPersonagem(
codigo_novela SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
codigo_personagem SMALLINT UNSIGNED  NOT NULL,
PRIMARY KEY (codigo_novela,codigo_personagem),
CONSTRAINT pk_tbNovelaPersonagem_Personagem FOREIGN  KEY (codigo_personagem)  REFERENCES tbPersonagem(codigo_personagem),
CONSTRAINT pk_tbNovelaPersonagem_Novela  FOREIGN KEY (codigo_novela)  REFERENCES tbNovela(codigo_novela)
);


# Exercício 2

INSERT INTO tbNovela
VALUES 
(1,'Misterios de uma Vida','2024-09-01','2024-09-02','12:00'),
(2,'Os Dez Mandamentos','2018-01-01','2019-01-01','18:00'),
(3,'Os Tres Mosqueteiros','2000-02-23','2001-07-27',NULL),
(4,'Marte Novamente','1996-09-1','1999-06-05','13:30'),
(5,'Marte Novamente 2 ','2000-09-1','2005-06-05',NULL);

INSERT INTO tbator
VALUES
(100,'Fernando Souza','28','Campinas-SP','60000','M'),
(101,'Roberty Downey Jr','58','New York','10000000','M'),
(102,'Sam Adams','43','New Jearsey','1000000','M');

INSERT INTO tbPersonagem
VALUES 
(500,'Julios','40','Pessima','102'),
(501,'Tony Stark','45','Otima','101'),
(502,'Frank Stone','30','Bom',100);

INSERT INTO tbNovelaPersonagem
VALUES 
(1,500),
(2,502),
(3,501);

INSERT INTO tbCapitulo
VALUES
(1000,'Set Inicial','2024-05-01',1),
(1001,'Takes finais','2024-10-05',2),
(1002,'Takes meio do filme','2024-03-10',3);

# Exercício 3

SELECT tbNovela.codigo_novela, nome_novela, data_ultimo_capitulo FROM tbNovela
WHERE tbNovela.codigo_novela = '1';

#SELECT tbNovela.codigo_novela, tbNovela.nome_novela, data_exibicao_capitulo
#FROM tbNovela
#INNER JOIN tbCapitulo ON tbNovela.codigo_novela = tbCapitulo.codigo_Novela
#WHERE tbCapitulo.codigo_novela = '1'


# Exercício 4

SELECT codigo_novela, nome_novela, horario_exibicao 
FROM tbNovela
WHERE tbNovela.horario_exibicao IS NULL;


# Exercício 5

SELECT A.nome_ator, A.cidade_ator
FROM tbator A
WHERE A.cidade_ator LIKE  'N%';

# Exercício 6
SELECT  N.codigo_novela, N.nome_novela
FROM tbNovela N
WHERE N.nome_novela LIKE '%vida%';


# Exercício 7
SELECT COUNT(NVP.codigo_novela) 
FROM tbNovelaPersonagem  NVP
INNER JOIN tbNovela ON tbNovela.codigo_novela = NVP.codigo_novela
JOIN tbator ON tbator.codigo_ator = tbPersonagem.codigo_ator
JOIN tbPersonagem ON tbPersonagem.codigo_ator = tbator.codigo_ator;


SELECT COUNT(DISTINCT NVP.codigo_novela ) AS 'Registro da Novela', tbNovela.nome_novela AS' Nome da Novela', tbator.nome_ator AS' Ator'
FROM tbNovelaPersonagem NVP
INNER JOIN tbNovela ON tbNovela.codigo_novela = NVP.codigo_novela
INNER JOIN tbPersonagem ON tbPersonagem.codigo_personagem = NVP.codigo_personagem
INNER JOIN tbator ON tbator.codigo_ator = tbPersonagem.codigo_ator
WHERE tbator.nome_ator = 'Roberty Downey Jr';

# Exercício 8





# Exercício 9
# Exercício 10
# Exercício 11
# Exercício 12
# Exercício 13
# Exercício 14
# Exercício 15
# Exercício 16
# Exercício 17
# Exercício 18
# Exercício 19
# Exercício 20
# Exercício 21
# Exercício 22



