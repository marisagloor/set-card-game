from flask import Flask, render_template, jsonify
from flask_socketio import SocketIO, emit
import string
import random
from deck import CARDS

app = Flask(__name__)
letters = string.ascii_letters
app.config['SECRET_KEY'] = ''.join(random.choice(letters) for i in range(10))
socketio = SocketIO(app)

# @socketio.on('my event')
# def handle_my_custom_event(json):
#     print('received json: ' + str(json))
#     emit('my response', 'received json: ' + str(json))

# @socketio.on('clickCard')
# def handle_card_selection(json):
#     print('received json card:', json)
#     resStr ={'msg': '1 card was selected',
#                 'card': json}
#     emit('selectCard', resStr)

@app.route('/')
def index():
    return render_template('root.html')

@app.route('/api/cards')
def generate_deck():
    """returns a json str reperesnting a randomized list 81 card dictionaries
    
    The deck consists of 81 unique cards that vary in four features across 
    three possibilities for each kind of feature: number of shapes 
    (one, two, or three), shape (diamond, squiggle, oval), shading 
    (solid, striped, or open), and color (red, green, or purple)."""

    random.shuffle(CARDS)

    return jsonify(CARDS)
    

if __name__ == '__main__':
    socketio.run(app, debug=True, host='0.0.0.0', port='5000')    
# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0', port='5000')