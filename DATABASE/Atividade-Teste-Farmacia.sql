
CREATE SCHEMA IF NOT EXISTS `tbFarmacia` DEFAULT CHARACTER SET utf8 ;
USE `tbFarmacia` ;

-- -----------------------------------------------------
-- Table `tbFarmacia`.`tbFuncionarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbFarmacia`.`tbFuncionarios` (
  `matricula_funcionario` SMALLINT NOT NULL,
  `nome_funcionario` VARCHAR(45) NULL,
  `rg_funcionario` VARCHAR(9) NULL,
  `cpf_funcionario` VARCHAR(11) NULL,
  PRIMARY KEY (`matricula_funcionario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tbFarmacia`.`tbCompra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbFarmacia`.`tbCompra` (
  `codigo_compra` INT NOT NULL,
  `data_compra` DATETIME NOT NULL,
  `total_compra` INT NULL,
  `tbFuncionarios_matricula_funcionario` SMALLINT NOT NULL,
  PRIMARY KEY (`codigo_compra`),
  CONSTRAINT `fk_tbCompra_tbFuncionarios1`
    FOREIGN KEY (`tbFuncionarios_matricula_funcionario`)
    REFERENCES `tbFarmacia`.`tbFuncionarios` (`matricula_funcionario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tbFarmacia`.`tbTelefoneFuncionarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbFarmacia`.`tbTelefoneFuncionarios` (
  `telefone_funcionario` VARCHAR(15) NOT NULL,
  `tbFuncionarios_matricula_funcionario` SMALLINT NOT NULL,
  CONSTRAINT `fk_tbTelefoneFuncionarios_tbFuncionarios1`
    FOREIGN KEY (`tbFuncionarios_matricula_funcionario`)
    REFERENCES `tbFarmacia`.`tbFuncionarios` (`matricula_funcionario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tbFarmacia`.`tbClientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbFarmacia`.`tbClientes` (
  `codgio_cliente` SMALLINT NOT NULL,
  `nome_cliente` VARCHAR(45) NULL,
  `rua_cliente` VARCHAR(45) NULL,
  `logadouro_cliente` VARCHAR(45) NULL,
  `numero_cliente` VARCHAR(45) NULL,
  PRIMARY KEY (`codgio_cliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tbFarmacia`.`tbParcelado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbFarmacia`.`tbParcelado` (
  `valor_parcela` INT NOT NULL,
  `qtd_parcela` TINYINT NOT NULL,
  `tbCompra_codigo_compra` INT NOT NULL,
  `tbClientes_codgio_cliente`SMALLINT NOT NULL,
  PRIMARY KEY (`tbCompra_codigo_compra`),
  CONSTRAINT `fk_tbParcelado_tbCompra1`
    FOREIGN KEY (`tbCompra_codigo_compra`)
    REFERENCES `tbFarmacia`.`tbCompra` (`codigo_compra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbParcelado_tbClientes1`
    FOREIGN KEY (`tbClientes_codgio_cliente`)
    REFERENCES `tbFarmacia`.`tbClientes` (`codgio_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tbFarmacia`.`tbAvista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbFarmacia`.`tbAvista` (
  `valor_desconto` TINYINT NOT NULL,
  `total_compra_desconto` INT NOT NULL,
  `tbCompra_codigo_compra` INT NOT NULL,
  PRIMARY KEY (`tbCompra_codigo_compra`),
  CONSTRAINT `fk_tbAvista_tbCompra`
    FOREIGN KEY (`tbCompra_codigo_compra`)
    REFERENCES `tbFarmacia`.`tbCompra` (`codigo_compra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tbFarmacia`.`tbTelefoneCliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbFarmacia`.`tbTelefoneCliente` (
  `telefone_cliente` INT NOT NULL,
  `tbClientes_codgio_cliente` SMALLINT NOT NULL,
  CONSTRAINT `fk_tbTelefoneCliente_tbClientes1`
    FOREIGN KEY (`tbClientes_codgio_cliente`)
    REFERENCES `tbFarmacia`.`tbClientes` (`codgio_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

