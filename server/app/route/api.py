from flask import Blueprint, make_response, request, session
from app import  db
#import ipdb
from app.models.game import Game
from app.models.comment import Comment
from app.models.user import User

api = Blueprint('my_api', __name__)

@api.route("/")
def index():
    return "<h1> Welcome To The 2000s Depot! </h1>" , 201

@api.route('/games', methods=['GET', 'POST'])
def games():
    if request.method == 'GET': 
    #ipdb.set_trace()
        all_game_instances = Game.query.all()
        game_dict = [game.to_dict() for game in all_game_instances]
        return make_response(game_dict), 200
    
    elif request.method == 'POST':
        params = request.json
        user_id = 1
        if params.get('user_id'):
            user_id = params.get('user_id')
        new_game = Game(title=params["title"], description=params["description"], release_date=params["release_date"], user_id=user_id)
        db.session.add(new_game)
        db.session.commit()
        return make_response(new_game.to_dict(), 201)

@api.route('/games/<int:id>', methods=['GET'])
def game_by_id(id):
    find_game= Game.query.get(id)
    return make_response(find_game.to_dict())
    
@api.route('/comments', methods=['GET', 'POST'])
def all_comments():
    if request.method == 'GET':
        comments = Comment.query.all()
        comment_list = [comment.to_dict() for comment in comments]
        return make_response(comment_list, 200)
    
    elif request.method == "POST":
        params = request.json
        user_id = 1
        if params.get('user_id'):
            user_id = params.get('user_id')
        new_comment = Comment(title=params["title"], body=params["body"], game_comment_id=params["game_comment_id"], user_comment_id=user_id)
        db.session.add(new_comment)
        db.session.commit()

        return make_response(new_comment.to_dict(), 201)

@api.route('/comments/<int:id>', methods = ['GET','PATCH', 'DELETE'])
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