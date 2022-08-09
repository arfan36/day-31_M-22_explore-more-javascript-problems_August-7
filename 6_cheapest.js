// [45, 21, 6, 98, 56];

const phones = [
    { name: 'Samsung', camera: 12, stroge: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, stroge: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 7, stroge: '32gb', price: 82000, color: 'silver' },
    { name: 'Xiaomi', camera: 17, stroge: '32gb', price: 52000, color: 'silver' },
    { name: 'Oppo', camera: 25, stroge: '32gb', price: 20000, color: 'black' },
    { name: 'Nokia', camera: 6, stroge: '32gb', price: 44000, color: 'golden' },
    { name: 'HTC', camera: 10, stroge: '32gb', price: 62000, color: 'silver' },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);