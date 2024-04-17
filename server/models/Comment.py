from config import db
from sqlalchemy_serializer import SerializerMixin

class Comment(db.Model, SerializerMixin):

    __tablename__ = 'comments'

    serialize_rules= ('-games.comment', )
    #comment id
    id= db.Column(db.Integer, primary_key=True)
    #relates to game table included comment id 
    game_comment_id= db.Column(db.Integer, db.ForeignKey('games.game_id') )
    # relates to user 
    user_comment_id= db.Column(db.Integer, db.ForeignKey('users.user_id'))
    
    title = db.Column(db.String(50))
    body = db.Column(db.String(555), nullable=False)
    
    games = db.relationship('Game', back_populates='comment')

    def __repr__(self):
        return f'<Comment id={self.id}, game_comment_id={self.id}>'

