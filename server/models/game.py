from config import db, bcrypt 
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

class Game(db.Model, SerializerMixin):
    __tablename__ = 'games'

    serialize_rules= ('user.games','-comments.games','-comments.game_comment_id','-categories',)
    
    id = db.Column(db.Integer , primary_key=True, autoincrement=True) 
    title = db.Column(db.String(50))
    description = db.Column(db.String(500))
    release_date = db.Column(db.Integer)
    # created_at = db.Column(db.String)
  
    #game_user_upload_id = db.Column(db.Integer , db.ForeignKey('User_Auth.user_id))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship('User', back_populates='games')

    game_categories = db.relationship('GameCategory', back_populates='games')
    categories = association_proxy('game_categories', 'category')
    
    comments = db.relationship('Comment', back_populates ='games')
    fav_games = db.relationship('FavGames', back_populates= 'games')
    favorie_users_proxy = association_proxy('fav_games', 'user')

    def to_dict(self):
        return {'id': self.id, 'title': self.title, 'description': self.description, 'release_date': self.release_date, 'created_at': self.created_at} 
    

    