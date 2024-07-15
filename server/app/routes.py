from flask import Blueprint, jsonify
from flask_cors import cross_origin
from app.models import Dish, db
from app.events import socketio

dishes_bp = Blueprint('dishes', __name__)

@dishes_bp.route('/dishes', methods=['GET'])
@cross_origin(origin='*')
def get_dishes():
    dishes = Dish.query.all()
    return jsonify([{"dishId": dish.id, "dishName": dish.dish_name, "imageUrl": dish.image_url, "isPublished": dish.is_published} for dish in dishes]), 200

@dishes_bp.route('/dishes/<int:dish_id>/toggle_publish', methods=['PUT'])
@cross_origin(origin='*')
def toggle_publish(dish_id):
    dish = db.get_or_404(Dish, dish_id)
    dish.is_published = not dish.is_published
    db.session.commit()
    socketio.emit("changePublished", {"dishId": dish.id, "isPublished": dish.is_published})
    return jsonify({'message': f'Dish {dish_id} publish status toggled', 'isPublished': dish.is_published}), 200
