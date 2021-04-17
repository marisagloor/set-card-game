
def generate_cards():
    """returns card dictionaries (ordered)"""

    COLOR_ATTRIBUTES = ['Red', 'Green', 'Purple']
    FILL_ATTRIBUTES = ['Solid', 'Slated', 'Empty']
    NUMBER_ATTRIBUTES = ['1','2','3']
    SHAPE_ATTRIBUTES = ['Diamond', 'Oval', 'Squiggle']


    cards = []

    for color in COLOR_ATTRIBUTES:
        for fill in FILL_ATTRIBUTES:
           for num in NUMBER_ATTRIBUTES:
               for shape in SHAPE_ATTRIBUTES: 
                   cards.append({"cardId":
                                f'{num}{color[:2]}{fill[:2]}{shape[:2]}',
                                "color": color, 
                                "fill": fill, 
                                "numShapes": num, 
                                "shape": shape})
        
    return cards

print(f'CARDS = {generate_cards()}')