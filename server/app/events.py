from app import socketio

@socketio.on("connect")
def handle_connect():
    print("connected!")