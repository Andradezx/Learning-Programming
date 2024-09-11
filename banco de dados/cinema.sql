# Aula 12 - Linguagem SQL: DML

create database aula12;
use aula12;

# Exercício 1

create table tbDiretor (
	codigo_diretor smallint unsigned not null auto_increment,
    nome_diretor varchar(200) not null,
    primary key (codigo_diretor)
);

create table tbFilme (
	codigo_filme smallint unsigned not null auto_increment,
    nome_filme varchar(50) not null,
    ano_lancamento year not null,
    categoria_filme varchar(20) not null,
    codigo_diretor smallint unsigned not null,
    primary key (codigo_filme),
    foreign key (codigo_diretor) references tbDiretor(codigo_diretor)
);

create table tbPremio (
	codigo_premio smallint unsigned not null auto_increment,
    nome_premio varchar(30) not null,
    ano_premiacao year not null,
    codigo_filme smallint unsigned not null,
    primary key (codigo_premio),
    foreign key (codigo_filme) references tbFilme(codigo_filme)
);

create table tbSala (
	numero_sala tinyint unsigned not null,
    descricao_sala varchar(200),
    capacidade smallint unsigned not null,
    primary key (numero_sala)
);

create table tbSalaFilme (
	numero_sala tinyint unsigned not null,
    codigo_filme smallint unsigned not null,
    data_ date not null,
    horario time not null,
    primary key (numero_sala, codigo_filme, data_, horario),
    foreign key (numero_sala) references tbSala(numero_sala),
    foreign key (codigo_filme) references tbFilme(codigo_filme)
);

# Exercício 2

insert into tbDiretor
values (1, 'William Friedkin'),
       (2, 'John R. Leonetti'),
       (3, 'Andy Muschietti'),
       (4, 'Pedro Paulo Matos'),
       (5, 'Jorge da Penha'),
       (6, 'James Cameron'),
       (7, 'Severino Juca');

insert into tbFilme
values (1, 'O Exorcista', '1973', 'Terror', 1),
       (2, 'Annabelle', '2014', 'Terror', 2),
       (3, 'It: A Coisa', '2017', 'Terror', 3),
       (4, 'Insolação', '2009', 'Drama', 4),
       (5, 'Amor e Morte', '2010', 'Drama', 4),
       (6, 'A Casa de Alice', '2007', 'Drama', 5),
       (7, 'O Casamento de Maria', '2008', 'Comédia', 5),
       (8, 'O Homem da Cabeça de Kiwai', '2009', 'Documentário', 5),
       (9, 'Titanic', '1997', 'Drama', 6),
       (10, 'O Ladrão de Corações', '2003', 'Comédia', 7),
       (11, 'O Livro dos Prazeres', '2008', 'Drama', 7);

insert into tbPremio
values (1, 'Melhor Filme', '1998', 9),
       (2, 'Melhor Diretor', '1998', 9),
       (3, 'Melhor Edição', '1998', 9),
       (4, 'Melhor Fotografia', '1998', 9),
       (5, 'Melhor Direção de Arte', '1998', 9),
       (6, 'Melhor Figurino', '1998', 9),
       (7, 'Melhor Trilha-Sonora Dramática', '1998', 9),
       (8, 'Melhor Som', '1998', 9),
       (9, 'Melhores Efeitos Sonoros', '1998', 9),
       (10, 'Melhores Efeitos Visuais', '1998', 9),
       (11, 'Melhor Canção Original', '1998', 9);

insert into tbSala
values (1, null, 250),
       (2, null, 250),
       (3, null, 275),
       (4, null, 275),
       (5, null, 250),
       (6, null, 250),
       (7, null, 150),
       (8, null, 150),
       (9, null, 200),
       (10, null, 200),
       (11, null, 200),
       (12, null, 200);

insert into tbSalaFilme
values (12, 4, '2010-11-15', '18:00:00'),
       (12, 4, '2010-11-15', '20:00:00'),
       (12, 4, '2010-11-15', '22:00:00'),
       (8, 1, '2010-04-20', '18:00:00'),
       (8, 1, '2010-04-20', '20:00:00'),
       (12, 3, '2010-04-20', '18:00:00'),
       (12, 3, '2010-04-20', '20:00:00'),
       (1, 6, '2010-05-05', '14:00:00'),
       (1, 6, '2010-05-05', '16:00:00'),
       (1, 7, '2010-05-05', '18:00:00'),
       (2, 9, '2010-05-08', '18:00:00'),
       (2, 10, '2010-05-12', '20:00:00'),
       (4, 7, '2010-06-13', '17:00:00'),
       (5, 8, '2010-06-21', '17:00:00');
