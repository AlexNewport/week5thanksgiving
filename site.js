const thanksgivingMeal = {
    starter : { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree : {
        meat: "turkey",
        alt: "stuffed green peppers",
        vegetables : {
            potatoes: "Creamed mashed potatoes",
            greens: "french beans",
            salad: "radacchio"
            },
        sides : {
            bread: "garlic bread rolls",
            pasta: "macaroni and cheese"
            },
        calories: 450
        },
    dessert : {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost : 25.0,
    senior_discount: .10,
    prettyPrint : function() {
        let menuStr = `This holiday meal begins with fresh ${this.starter.fruit}
        and a refreshing glass of ${this.starter.wine}. The entree's featured meat is ${this.entree.meat}, but
        ${this.entree.alt} are also available for our vegetarian diners. ${this.entree.vegetables.potatoes}, 
        ${this.entree.vegetables.greens}, and ${this.entree.vegetables.salad} are served with the main course. 
        Choose a delicious side of ${this.entree.sides.bread} or ${this.entree.sides.pasta}. Finally, 
        complete your meal with our ${this.dessert.ice_cream} flavored ice cream or ${this.dessert.cake}.`;

        return menuStr;
    },
    totalPrice(isSenior) {
        let price = this.total_cost;
        if (isSenior) {
            price *= (1 - this.senior_discount);
        }

        return price;
    },
    totalCalories : function() {
        return (this.starter.calories + this.entree.calories + this.dessert.calories)
    },
    caloriesFrom: function(indicator) {
        return this[indicator].calories;
    } 
};

let greetingElement = document.querySelector(".greeting");
let mealElement = document.querySelector(".fullMeal");
let priceElement = document.querySelector(".priceInfo");
let calorieElement = document.querySelector(".calorieInfo");

greetingElement.innerHTML = "Join us for a scrumptious Thanksgiving!";

mealElement.innerHTML = `${thanksgivingMeal.prettyPrint()}`;

priceElement.innerHTML = `Don't forget our senior discount of ${thanksgivingMeal.senior_discount * 100}%. 
Adults eat for $${thanksgivingMeal.totalPrice(false)}. Seniors eat for $${thanksgivingMeal.totalPrice(true).toFixed(2)}.`;

calorieElement.innerHTML = `The meal's total calories are ${thanksgivingMeal.totalCalories()}. 
${thanksgivingMeal.caloriesFrom("starter")} calories are from the starter, ${thanksgivingMeal.caloriesFrom("entree")} 
calories are from the entree, and ${thanksgivingMeal.caloriesFrom("dessert")} calories are from the dessert.`;