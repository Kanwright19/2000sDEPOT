from flask import make_response
from config import app
from models.game import Game
@app.route("/")
def index():
    return "<h1> Welcome To The 2000s Depot! </h1>" , 201

@app.route('/games', methods=['GET'])
def games():
    #finding all the dogs
    return make_response('All Games Should Show Later'), 201
