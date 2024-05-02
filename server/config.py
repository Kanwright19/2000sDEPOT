from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate 
from flask_bcrypt import Bcrypt
from sqlalchemy import MetaData

#instatiate flask 
app = Flask(__name__)

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///games.db'
app.config['SQLALCHEMY_TRACK_NOTIFICATIONS'] = False

#new instance of SQLALCHEMY class
db = SQLAlchemy(metadata=metadata)

# config db with flask app
db.init_app(app)

#new instance of Migrate class
migrate = Migrate(app,db)

#instatiate bcrypt 
bcrypt = Bcrypt(app)