const dishes = ['Spaghetti', 'Lasagne', 'Beans on toast', 'Porridge', 'Tomato soup', 'Salmon']

const allDishes = () => {
    for (let i = 0; i < dishes.length; i++) {
        console.log(dishes[i])
      }
}

allDishes()


const randomDish = () => {
    console.log(dishes[Math.floor(Math.random()*dishes.length)]); 
} 

randomDish()