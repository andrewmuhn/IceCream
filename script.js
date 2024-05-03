const firstScoop = 2.25;
const additionalScoop = 1.25;



const submmit = () => {
    ifCone();
    calculatePrice();
}

const ifCone = (cupIsChecked) => {
    const toppingsContainer = document.getElementById('toppingsBigContainer');
    if (cupIsChecked) {
        toppingsContainer.style.display = 'block';
    } else {
        toppingsContainer.style.display = 'none';
        document.getElementById('sprinkles').checked = false;
        document.getElementById('whipped-cream').checked = false;
        document.getElementById('cherry').checked = false;
        document.getElementById('hot-fudge').checked = false;
        
    }
}

const calculatePrice = () => {
    const scoops = document.getElementById('scoops').value;
    const toppings = {
        sprinkles: document.getElementById('sprinkles').checked,
        whippedCream: document.getElementById('whipped-cream').checked,
        cherries: document.getElementById('cherry').checked,
        hotFudge: document.getElementById('hot-fudge').checked
    }
    const price = ((firstScoop + (scoops - 1) * additionalScoop) + (toppings.sprinkles ? 0.5 : 0) + 
        (toppings.whippedCream ? 0.25 : 0) + (toppings.cherries ? 0.25 : 0) + (toppings.hotFudge ? 1.25 : 0)).toFixed(2);
    const tax = (price * 0.08).toFixed(2);
    const priceElement = document.getElementById('basePrice');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');

    priceElement.innerText = `Base Price: $${price}`;
    taxElement.innerText = `Tax: $${tax}`;
    totalElement.innerText = `Total Price: $${(parseFloat(price) + parseFloat(tax)).toFixed(2)}`;
}

window.onload = () => {
    document.getElementById('submit').addEventListener('click', calculatePrice);
}

window.onchange = () => {
    const cupIsChecked = document.getElementById('cup').checked;
    ifCone(cupIsChecked)
}