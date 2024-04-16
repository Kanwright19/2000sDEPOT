from config import db

class Post(db.Model):
    __tablename__ = 'posts'

    post_id= db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    body = db.Column(db.String(555))
    