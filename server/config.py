from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate 

#instatiate flask 
app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///games.db'
app.config['SQLALCHEMY_TRACK_NOTIFICATIONS'] = False

#new instance of SQLALCHEMY class
db = SQLAlchemy()

# config db with flask app
db.init_app(app)

#new instance of Migrate class
migrate = Migrate(app,db)

