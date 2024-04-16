from config import db

class Replies(db.Model):
    __tablename__ = 'replies'

    reply_id= db.Column(db.Integer, primary_key=True)
    #game_post_id = db.Column(db.Integer, foreign_key= User.user_id , Game.game_id)
    body = db.Column(db.String(555))
    created_at= db.Coluum(db.datetime)

    #reply_post= db.relationship("Replies", foreign_key=[reply_id])