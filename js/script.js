let discount = prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = {}

let min = {}

let average = 0

let arr = [

    {

        name: 'Milk',

        price: 3.25,
        isfresh: true

    },

    {

        name: 'Coffee',

        price: 1.5,
        isfresh: true

    },

    {

        name: 'Ice Cream',

        price: 7.85,
        isfresh: false

    },

    {

        name: 'Tomatos',

        price: 4.14,
        isfresh: true

    },

    {

        name: 'Onion',

        price: 2.25,
        isfresh: false
    }

]

let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max и самый дешевый в min`*

// 2. отфильтровать масив на свежие и не свежие продукты

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную arr_sale*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * Писать весь код в функции setup()*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

let tru = []
let fl = []
const setup = (magaz) => {
    tru = magaz.filter(item => item.isfresh == true)
    fl = magaz.filter(item => item.isfresh == false)
    let r = []
    let t3 = []
    let r7 = []

    for (let item of magaz) {
        let t = item.price
        t3.push(t)
        t3.sort((a, b) => a - b)


        r.push(item.price)
        total = r.reduce((a, b) => a + b)


        if (discount >= 0 && discount <= 100) {
            let r5 = (item.price / 100 * discount)
            let r6 = item.price - r5
            r7.push(r6)

        }

        max = t3.slice(t3.length - 1)
        min = t3.slice(0, 1)

    }
    average = total / magaz.length
    totalSale = r7.reduce((a, b) => a + b)

    for (let i of magaz) {

        let u = i.price / 100 * discount
        i.price = i.price - u
        



    }
arr_sale.push(magaz)

}

setup(arr)
console.log(tru);
console.log(fl);
console.log(total);

console.log(max, min);
console.log(average);
console.log(totalSale);
console.log(arr_sale);



