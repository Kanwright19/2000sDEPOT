from config import db, bcrypt 
from sqlalchemy_serializer import SerializerMixin

class Game(db.Model, SerializerMixin):
    __tablename__ = 'games'

    serialize_rules= ('-comments.games','-comments.game_comment_id',)
    
    game_id = db.Column(db.Integer , primary_key=True, autoincrement=True) 
    title = db.Column(db.String(50))
    description = db.Column(db.String(500))
    release_date = db.Column(db.Integer)
    created_at = db.Column(db.String)
  
    #game_user_upload_id = db.Column(db.Integer , db.ForeignKey('User_Auth.user_id))
    # user_id = db.relationship("User", foreign_key=[game_user_upload_id])

    def to_dict(self):
        return {'id': self.game_id, 'title': self.title, 'description': self.description, 'release_date': self.release_date, 'created_at': self.created_at} 
    

    comments = db.relationship('Comment', back_populates ='games')