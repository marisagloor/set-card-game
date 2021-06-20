from flask import Flask, render_template, jsonify
import random
from deck import CARDS
app = Flask(__name__)


@app.route('/')
@app.route('/rules')
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
    app.run(host='0.0.0.0', port='5000')