from config import db 

class Game(db.Model):
    __tablename__ = 'games'

 
    game_id = db.Column(db.Integer , primary_key=True, autoincrement=True) 
    #game_user_upload_id = db.Column(db.Integer , foreign_key= User.user_id)
    title = db.Column(db.String(50))
    description = db.Column(db.String(500))
    release_date = db.Column(db.Integer)
    created_at = db.Column(db.String)
  
    # user_id = db.relationship("User", foreign_key=[game_user_upload_id])

    def to_dict(self):
        return {'id': self.game_id, 'title': self.title, 'description': self.description, 'release_date': self.release_date, 'created_at': self.created_at} 