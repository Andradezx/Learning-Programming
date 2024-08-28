CREATE DATABASE dbLocadora;
USE dbLocadora;



CREATE TABLE tbCliente (
codigo_cliente INT AUTO_INCREMENT PRIMARY KEY,
cpf_cliente CHAR(11)  NOT NULL,
nome_cliente CHAR(100),
data_cadastro DATE, 
cidade_cliente CHAR(50),
uf_cliente CHAR(2) DEFAULT 'PR'
#CONSTRAINT un_cpf_cliente UNIQUED (cpf_cliente) ou o modelo acima
#CONSTRAINT pk_tbcliente primary key (codigo_cliente) ou o modelo acima
);



CREATE TABLE tbCategoria(
codigo_categoria INT AUTO_INCREMENT PRIMARY KEY,
nome_categoria CHAR(20) NOT NULL
); 




CREATE TABLE tbClasse(
codigo_classe INT AUTO_INCREMENT PRIMARY KEY ,
nome_classe CHAR(20) NOT NULL,
preco_classe NUMERIC(4 , 2) NOT NULL
);




CREATE TABLE tbTitulo(
codigo_titulo INT AUTO_INCREMENT PRIMARY KEY,
nome_titulo CHAR(50) NOT NULL,
ano NUMERIC(4),
codigo_categoria INT,
codigo_classe INT,
CONSTRAINT pk_tbtitulo_tbcategoria  FOREIGN KEY (codigo_categoria) REFERENCES tbCategoria(codigo_categoria), #modelos certo a ser seguido
CONSTRAINT pk_tbtitulo_tbclasse FOREIGN KEY (codigo_classe) REFERENCES tbClasse(codigo_classe) ON DELETE CASCADE ON UPDATE CASCADE
);
 



 CREATE TABLE tbFilme(
 codigo_filme INT AUTO_INCREMENT PRIMARY KEY,
 codigo_titulo INT,
 nome_distribuidor CHAR(20),
 FOREIGN KEY (codigo_titulo) REFERENCES tbTitulo(codigo_titulo)
 );
 




CREATE TABLE tbEmprestimo_devolucao(
codigo_cliente INT,
codigo_filme INT,
data_emprestimo DATE NOT NULL,
data_devolucao_prevista DATE NOT NULL,
data_devolucao_efetiva DATE,
valor_multa NUMERIC(4,2) DEFAULT 0,
PRIMARY KEY (data_emprestimo, codigo_cliente, codigo_filme),
FOREIGN KEY (codigo_cliente) REFERENCES tbCliente(codigo_cliente) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (codigo_filme) REFERENCES tbFilme(codigo_filme) ON DELETE CASCADE ON UPDATE CASCADE
);
 





#DROP DATABASE dbLocadora;





