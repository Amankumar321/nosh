from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import MainConfig
from flask_socketio import SocketIO

db = SQLAlchemy()
socketio = SocketIO(cors_allowed_origins="*")

def create_app(config=None):
    app = Flask(__name__)

    if config is None:
        app.config.from_object(MainConfig)
    else:
        app.config.from_object(config)

    db.init_app(app)
    socketio.init_app(app)

    from app.routes import dishes_bp
    app.register_blueprint(dishes_bp)

    return app

