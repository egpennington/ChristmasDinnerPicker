const dinnerForVegetarian = [
    {
      title: "Festive Stuffed Bell Peppers",
      sections: [
        {
          name: "Main Course",
          dishes: [
            { name: "Stuffed Bell Peppers with Quinoa and Black Beans", description: "Bell peppers filled with a savory mixture of quinoa, black beans, corn, and spices, baked to perfection." }
          ]
        },
        {
          name: "Sides",
          dishes: [
            { name: "Caprese Salad Skewers", description: "Skewers with cherry tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze." },
            { name: "Garlic Parmesan Roasted Broccoli", description: "Broccoli florets roasted with garlic, Parmesan cheese, and a touch of lemon." }
          ]
        },
        {
          name: "Dessert",
          dishes: [
            { name: "Chocolate-Dipped Strawberries", description: "Juicy strawberries dipped in dark chocolate, a simple and elegant way to end the meal." }
          ]
        }
      ]
    },
    {
      title: "Mediterranean Feast",
      sections: [
        {
          name: "Main Course",
          dishes: [
            { name: "Mushroom and Spinach Spanakopita", description: "Layers of phyllo dough filled with a flavorful mixture of mushrooms, spinach, and feta cheese." }
          ]
        },
        {
          name: "Sides",
          dishes: [
            { name: "Greek Orzo Salad", description: "Orzo pasta tossed with cherry tomatoes, olives, feta cheese, and a lemon-oregano dressing." },
            { name: "Roasted Red Pepper Hummus with Pita Bread", description: "Creamy hummus with the smoky flavor of roasted red peppers, served with warm pita bread." }
          ]
        },
        {
          name: "Dessert",
          dishes: [
            { name: "Baklava Ice Cream Sundae", description: "Vanilla ice cream topped with crumbled baklava and a drizzle of honey." }
          ]
        }
      ]
    },
    {
      title: "Winter Vegetable Wellington",
      sections: [
        {
          name: "Main Course",
          dishes: [
            { name: "Winter Vegetable Wellington", description: "A flaky puff pastry filled with a medley of winter vegetables such as butternut squash, Brussels sprouts, and carrots, seasoned with herbs and goat cheese." }
          ]
        },
        {
          name: "Sides",
          dishes: [
            { name: "Roasted Garlic Mashed Sweet Potatoes", description: "Creamy mashed sweet potatoes with the rich flavor of roasted garlic." },
            { name: "Cranberry Pecan Spinach Salad", description: "Fresh spinach tossed with cranberries, pecans, and a tangy balsamic vinaigrette." }
          ]
        },
        {
          name: "Dessert",
          dishes: [
            { name: "Poached Pear in Red Wine", description: "Pears poached in red wine and spices, served with a drizzle of honey and a sprinkle of cinnamon." }
          ]
        }
      ]
    }
  ];
  
const dinnerForFourOrLess = [
    {
      title: "Cozy Winter Comfort",
      sections: [
        {
          name: "Main Course",
          dishes: [
            { name: "Beef and Mushroom Stew", description: "Hearty beef stew with mushrooms, carrots, and potatoes, slow-cooked for a rich flavor." }
          ]
        },
        {
          name: "Sides",
          dishes: [
            { name: "Roasted Brussels Sprouts with Bacon", description: "Brussels sprouts roasted to perfection and tossed with crispy bacon." },
            { name: "Garlic Knots", description: "Soft and flavorful garlic knots for a delightful bread accompaniment." }
          ]
        },
        {
          name: "Dessert",
          dishes: [
            { name: "Warm Chocolate Lava Cakes", description: "Individual chocolate cakes with a gooey, molten center, served with a scoop of vanilla ice cream." }
          ]
        }
      ]
    },
    {
      title: "Classic Christmas Elegance",
      sections: [
        {
          name: "Main Course",
          dishes: [
            { name: "Herb-Crusted Rack of Lamb", description: "Elegant rack of lamb coated with a flavorful herb crust and roasted to perfection." }
          ]
        },
        {
          name: "Sides",
          dishes: [
            { name: "Hasselback Potatoes", description: "Potatoes sliced and baked with butter, garlic, and herbs until golden and crispy." },
            { name: "Green Beans with Lemon and Almonds", description: "Fresh green beans sautéed with lemon zest and toasted almonds." }
          ]
        },
        {
          name: "Dessert",
          dishes: [
            { name: "Pecan Pie Tartlets", description: "Mini pecan pies with a buttery crust, perfect for a sweet ending to the meal." }
          ]
        }
      ]
    },
    {
      title: "Global Fusion Celebration",
      sections: [
        {
          name: "Main Course",
          dishes: [
            { name: "Lemon Herb Grilled Chicken", description: "Chicken marinated in a zesty lemon and herb mixture, grilled to perfection." }
          ]
        },
        {
          name: "Sides",
          dishes: [
            { name: "Mango and Black Bean Quinoa Salad", description: "Quinoa salad with black beans, mango, and a cilantro-lime dressing." },
            { name: "Grilled Asparagus with Parmesan", description: "Asparagus spears grilled and topped with shaved Parmesan cheese." }
          ]
        },
        {
          name: "Dessert",
          dishes: [
            { name: "Tropical Fruit Salad with Mint", description: "A refreshing mix of tropical fruits tossed with fresh mint for a light and sweet conclusion." }
          ]
        }
      ]
    }
  ];
  
const dinnerForFiveOrMore = [
    {
      title: "Winter Wonderland Feast",
      sections: [
        {
          name: "Main Course",
          dishes: [
            { name: "Roast Beef Tenderloin", description: "A succulent beef tenderloin roast seasoned with rosemary and garlic." }
          ]
        },
        {
          name: "Sides",
          dishes: [
            { name: "Creamy Garlic Mashed Cauliflower", description: "A lighter alternative to mashed potatoes, with the richness of roasted garlic." },
            { name: "Maple Glazed Carrots", description: "Carrots roasted and glazed with a sweet maple syrup and thyme mixture." }
          ]
        },
        {
          name: "Dessert",
          dishes: [
            { name: "White Chocolate Peppermint Cheesecake", description: "A decadent white chocolate cheesecake with a hint of peppermint, perfect for the season." }
          ]
        }
      ]
    },
    {
      title: "Coastal Christmas Seafood Extravaganza",
      sections: [
        {
          name: "Main Course",
          dishes: [
            { name: "Lemon Herb Baked Salmon", description: "Salmon fillets baked with a lemon-herb marinade for a fresh and light main course." }
          ]
        },
        {
          name: "Sides",
          dishes: [
            { name: "Garlic Butter Shrimp Scampi", description: "Succulent shrimp sautéed in a flavorful garlic butter sauce." },
            { name: "Orzo Salad with Roasted Vegetables", description: "Orzo pasta tossed with roasted vegetables and a lemon vinaigrette." }
          ]
        },
        {
          name: "Dessert",
          dishes: [
            { name: "Coconut Mango Sorbet", description: "A refreshing and dairy-free sorbet with the tropical flavors of coconut and mango." }
          ]
        }
      ]
    },
    {
      title: "Rustic Italian Christmas",
      sections: [
        {
          name: "Main Course",
          dishes: [
            { name: "Osso Buco", description: "Braised veal shanks cooked in a flavorful tomato and wine sauce." }
          ]
        },
        {
          name: "Sides",
          dishes: [
            { name: "Caprese Salad with Balsamic Glaze", description: "Fresh tomatoes, mozzarella, and basil drizzled with a sweet balsamic reduction." },
            { name: "Pesto Pasta with Cherry Tomatoes", description: "Pasta tossed in a vibrant basil pesto and garnished with cherry tomatoes." }
          ]
        },
        {
          name: "Dessert",
          dishes: [
            { name: "Tiramisu", description: "A classic Italian dessert featuring layers of coffee-soaked ladyfingers and mascarpone cream." }
          ]
        }
      ]
    },
    {
      title: "Cranberry Harvest Celebration",
      sections: [
        {
          name: "Main Course",
          dishes: [
            { name: "Cranberry Glazed Turkey Breast", description: "Succulent turkey breast glazed with a sweet and tangy cranberry sauce, roasted to perfection." }
          ]
        },
        {
          name: "Sides",
          dishes: [
            { name: "Mashed Sweet Potatoes with Marshmallow Topping", description: "Creamy mashed sweet potatoes topped with gooey marshmallows and baked until golden brown." },
            { name: "Green Bean Casserole with Crispy Onion Topping", description: "Classic green bean casserole with a crispy onion topping for added crunch." }
          ]
        },
        {
          name: "Dessert",
          dishes: [
            { name: "Pumpkin Cheesecake with Cranberry Swirl", description: "Creamy pumpkin cheesecake with a vibrant cranberry swirl, served with a dollop of whipped cream." }
          ]
        },
        {
          name: "Additional Side",
          dishes: [
            { name: "Herb and Sausage Stuffing", description: "Traditional stuffing with a flavorful twist, featuring herbs and savory sausage." }
          ]
        }
      ]
    }
];

export  { dinnerForVegetarian }
export  { dinnerForFourOrLess }
export  { dinnerForFiveOrMore }