from config import db 

class User(db.Model):
    __tablename__='User_Auth'

    user_id= db.Column(db.Integer, primary_key=True)
    first_name= db.Column(db.String(50))
    last_name= db.Colunn(db.String(50))
    username= db.Column(db.String, nullable=False)
    email= db.Column(db.Varchar)
    password= db.Column(db.String, nullable=False)

   