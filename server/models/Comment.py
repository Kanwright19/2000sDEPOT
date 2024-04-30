from config import db, bcrypt
from sqlalchemy_serializer import SerializerMixin

class Comment(db.Model, SerializerMixin):

    __tablename__ = 'comments'

    serialize_rules= ('-games.comments', )
    #comment id
    id= db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    body = db.Column(db.String(555), nullable=False)
    
    
    #relates to game table included comment id 
    game_comment_id= db.Column(db.Integer, db.ForeignKey('games.game_id') )
    # relates to user 
    user_comment_id= db.Column(db.Integer, db.ForeignKey('users.user_id'))

    games = db.relationship('Game', back_populates='comments')
    user = db.relationship('User', back_populates= 'comments ')
    
    def __repr__(self):
        return f'<Comment id={self.id}, game_comment_id={self.game_comment_id}, user_comment_id={self.user_comment_id}, title={self.title}, body={self.body}>'

