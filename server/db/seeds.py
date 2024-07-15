# This file should contain records you want created when you run flask db seed.

from app.models import Dish

data = [
{"id": 1, "dish_name": "Jeera Rice", "image_url": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg"},
{"id": 2, "dish_name": "Paneer Tikka","image_url": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/paneer-tikka.jpg"},
{"id": 3, "dish_name": "Rabdi","image_url": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/rabdi.jpg"},
{"id": 4, "dish_name": "Chicken Biryani","image_url": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/chicken-biryani.jpg"},
{"id": 5, "dish_name": "Alfredo Pasta","image_url": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/alfredo-pasta.jpg"}
]

for row in data:
    if Dish.query.session.get(Dish, row["id"]) is None:
        dish = Dish(id=row["id"], dish_name=row["dish_name"], image_url=row["image_url"])
        Dish.query.session.add(dish)

Dish.query.session.commit()