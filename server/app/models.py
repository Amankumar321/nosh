from app import db

class Dish(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    dish_name = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(1024))
    is_published = db.Column(db.Boolean, default=True)

    def __repr__(self):
        return f"<Dish {self.id}: {self.dish_name}>"