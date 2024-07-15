import pytest
from app.models import Dish
from app import create_app, db
from config import TestConfig

@pytest.fixture
def app():
    app = create_app(TestConfig)
    with app.app_context():
        db.create_all()
        yield app
        db.drop_all()

@pytest.fixture
def client(app):
    return app.test_client()

def test_get_dishes_empty(client):
    response = client.get('/dishes')
    assert response.status_code == 200
    assert len(response.json) == 0

def test_toggle_publish(client):
    dish = Dish(dish_name='Test Dish', image_url='test.jpg', is_published=False)
    
    db.session.add(dish)
    db.session.commit()

    response = client.put(f'/dishes/{dish.id}/toggle_publish')
    assert response.status_code == 200
    assert response.json['isPublished'] == True

    updated_dish = db.session.get(Dish, dish.id)
    assert updated_dish.is_published == True
