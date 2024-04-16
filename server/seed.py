from config import app, db
from models.game import Game

if __name__ == '__main__':
    with app.app_context():
        mario_kart_wii = Game(title='Mario Kart Wii', description='Mario Kart Wii is a 2008 kart racing video game developed and published by Nintendo for the Wii console. It is the sixth installment in the Mario Kart series and introduces motion controls using the Wii Remote. Players compete in races using characters from the Mario franchise and can use various items to hinder opponents and gain an advantage.', release_date=2008, created_at='04/12/2024')
        db.session.add(mario_kart_wii)
        db.session.commit()
