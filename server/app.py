from flask import make_response, request
from config import app , db
import ipdb
from models.game import Game


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
    
