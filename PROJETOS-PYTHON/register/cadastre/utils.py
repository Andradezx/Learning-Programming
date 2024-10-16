import bcrypt 

def criptografia(password):

    salt = bcrypt.gensalt()

    cryptpassword = bcrypt.hashpw(password.encode('utf-8'),salt)
    return cryptpassword.decode('utf-8') 