from config import db
from sqlalchemy_serializer import SerializerMixin

class Comment(db.Model, SerializerMixin):

    __tablename__ = 'comments'

    serialize_rules= ('-games.comment', )
    
    id= db.Column(db.Integer, primary_key=True)
    game_comment_id= db.Column(db.Integer, db.ForeignKey('games.game_id') )
    title = db.Column(db.String(50))
    body = db.Column(db.String(555), nullable=False)
    
    games = db.relationship('Game', back_populates='comment')

    def __repr__(self):
        return f'<Comment id={self.id}, game_comment_id={self.id}>'

