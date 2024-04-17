from config import db
from sqlalchemy_serializer import SerializerMixin

class Replies(db.Model, SerializerMixin):
    __tablename__ = 'replies'

    user_reply_id= db.Column(db.Integer, primary_key=True)
    #game_reply_id = db.Column(db.Integer, db.ForeignKey(('Users_Auth.user_id , games.game_id'))
    body = db.Column(db.String(555))
    created_at= db.Coluum(db.datetime)

    #reply_post= db.relationship("Replies", foreign_key=[reply_id])