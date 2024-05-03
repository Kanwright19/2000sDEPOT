from config import db, bcrypt
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

class User(db.Model, SerializerMixin):
    __tablename__='users'

    serialize_rules= ('-comments.user', '-comments.game_comment_id','-comments.user_game-id', '-password_hash', )
    
    user_id= db.Column(db.Integer, primary_key=True)
    first_name= db.Column(db.String(50))
    last_name= db.Column(db.String(50))
    username= db.Column(db.String, nullable=False)
    _password_hash = db.Column(db.String, nullable =False)
    created_at = db.Column(db.DateTime, server_default= db.func.now())
    
    comments = db.relationship('Comment', back_populates = 'user')
    games = db.relationship('Games', back_populates='user')
    fav_games = db.relationship('FavGames', back_populates= 'user')
    fav_games_proxy = association_proxy('fav_games', 'games')

@property 
def password_hash(self):
    return self._password_hash

@password_hash.setter
def password_hash(self, password):
    byte_obj = password.encode('123abc')
    bcrypt_hash = bcrypt.generate_password_hash(byte_obj)
    hash_obj = bcrypt_hash.decode('123abc')
    self._password_hash = hash_obj 

def authenticate(self, password):
    return bcrypt.check_password_hash(self.password_hash, password.encode('123abc'))



def __repr__(self):
    return f'<User user_id={self.user_id}, first_name={self.first_name}, last_name={self.last_name}, username={self.username}, password={self._password_hash}>'