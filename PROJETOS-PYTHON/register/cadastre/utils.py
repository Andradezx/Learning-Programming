import bcrypt 

# def criptografia(password):

#     salt = bcrypt.gensalt()

#     cryptpassword = bcrypt.hashpw(password.encode('utf-8'),salt)
#     return cryptpassword.decode('utf-8') 


def criptografia(password):
    salt = bcrypt.gensalt()
    cryptpassword = bcrypt.hashpw(password.encode('utf-8'), salt)
    return cryptpassword  # Retorna o hash em formato bytes

def check_password(password, hashed):
    return bcrypt.checkpw(password.encode('utf-8'), hashed)  # Compara diretamente com bytes

# def check_password(password, hashed):
#     return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8')) 