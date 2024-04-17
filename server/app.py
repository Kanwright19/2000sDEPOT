from flask import make_response, request
from config import app , db
import ipdb
from models.game import Game
from models.Comment import Comment



@app.route("/")
def index():
    return "<h1> Welcome To The 2000s Depot! </h1>" , 201

@app.route('/games', methods=['GET', 'POST'])
def games():
    if request.method == 'GET': 
    #ipdb.set_trace()
        all_game_instances = Game.query.all()
        game_dict = [game.to_dict() for game in all_game_instances]
        return make_response(game_dict), 201
    
    elif request.method == 'POST':
        params = request.json
        new_game = Game(title=params["title"], description=params["description"], release_date=params["release_date"], created_at=params["created_at"])
        db.session.add(new_game)
        db.session.commit()
        return make_response(new_game.to_dict(), 201)

@app.route('/games/<int:id>', methods=['GET'])
def game_by_id(id):
    find_game= Game.query.get(id)
    return make_response(find_game.to_dict())
    
@app.route('/comments', methods=['GET'])
def all_comments():
    comments = Comment.query.all()
    comment_list = [comment.to_dict() for comment in comments]
    #ipdb.set_trace()
    return make_response(comment_list, 200)

@app.route('/comments/<int:id>', methods = ['GET','PATCH', 'DELETE'])
def comment_by_id(id):
    comment = Comment.query.get(id)

    if request.method == 'PATCH':
        params = request.json

        for attr in params:
            setattr(comment, attr, params[attr])
     
        db.session.commit()
        return make_response(comment.to_dict(), 200)
    elif request.method == 'DELETE':
        db.session.delete(comment)
        db.session.commit()

        return make_response('', 204)
    elif request.method == 'GET':
        return make_response(comment.to_dict())