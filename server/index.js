const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

// Промежуточное ПО
app.use(cors());
app.use(express.json());

// База данных товаров в памяти (12 товаров - более 10)
let products = [
  { id: 1, name: "Ноутбук ASUS VivoBook 15", category: "Ноутбуки", description: "15.6 дюймов, Intel Core i5, 8GB RAM, 512GB SSD", price: 54990, stock: 15, rating: 4.5, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop" },
  { id: 2, name: "Смартфон Samsung Galaxy A54", category: "Смартфоны", description: "6.4 дюйма, 128GB, 8GB RAM, камера 50MP", price: 35990, stock: 23, rating: 4.3, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop" },
  { id: 3, name: "Наушники Sony WH-1000XM5", category: "Наушники", description: "Беспроводные, активное шумоподавление, 30ч автономности", price: 24990, stock: 8, rating: 4.8, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" },
  { id: 4, name: "Монитор LG UltraWide 34\"", category: "Мониторы", description: "34 дюйма, IPS, 3440x1440, 144Hz", price: 45990, stock: 5, rating: 4.6, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&h=200&fit=crop" },
  { id: 5, name: "Клавиатура Logitech MX Keys", category: "Периферия", description: "Беспроводная, подсветка, русская раскладка", price: 8990, stock: 30, rating: 4.4, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop" },
  { id: 6, name: "Мышь Razer DeathAdder V3", category: "Периферия", description: "Игровая, 25500 DPI, 8 кнопок", price: 7990, stock: 12, rating: 4.7, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop" },
  { id: 7, name: "Планшет Apple iPad Air 10.9\"", category: "Планшеты", description: "64GB, Wi-Fi, M1 chip", price: 59990, stock: 0, rating: 4.9, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=200&fit=crop" },
  { id: 8, name: "Умные часы Apple Watch Series 8", category: "Носимые устройства", description: "45mm, GPS, Always-On Retina", price: 42990, stock: 7, rating: 4.6, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&h=200&fit=crop" },
  { id: 9, name: "Видеокарта NVIDIA RTX 4070", category: "Комплектующие", description: "12GB GDDR6X, 192-bit, DLSS 3", price: 75990, stock: 3, rating: 4.8, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=200&h=200&fit=crop" },
  { id: 10, name: "Процессор AMD Ryzen 7 5800X3D", category: "Комплектующие", description: "8 ядер, 16 потоков, 3.4GHz", price: 28990, stock: 6, rating: 4.7, image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&h=200&fit=crop" },
  { id: 11, name: "Колонка JBL Flip 6", category: "Аудио", description: "Портативная, 12ч автономности, водонепроницаемая", price: 11990, stock: 18, rating: 4.5, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop" },
  { id: 12, name: "Микрофон Blue Yeti X", category: "Аудио", description: "USB, 4 капсюля, 24-bit, поп-фильтр в комплекте", price: 14990, stock: 12, rating: 4.7, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=200&h=200&fit=crop" },
];

// Категории
const categories = [
  "Ноутбуки",
  "Смартфоны",
  "Наушники",
  "Мониторы",
  "Периферия",
  "Планшеты",
  "Носимые устройства",
  "Комплектующие",
  "Аудио"
];

// API маршруты

// Корневой маршрут - информация об API
app.get('/', (req, res) => {
  res.json({ 
    message: 'API is running',
    endpoints: {
      products: '/api/products',
      categories: '/api/categories'
    }
  });
});

// Получить все товары
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Получить товар по ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

// Создать новый товар
app.post('/api/products', (req, res) => {
  const { name, category, description, price, stock, rating, image } = req.body;
  
  if (!name || !category) {
    return res.status(400).json({ error: 'Name and category are required' });
  }
  
  const newProduct = {
    id: Math.max(...products.map(p => p.id), 0) + 1,
    name,
    category,
    description: description || '',
    price: price || 0,
    stock: stock || 0,
    rating: rating || 0,
    image: image || ''
  };
  
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Обновить товар
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  const { name, category, description, price, stock, rating, image } = req.body;
  
  products[index] = {
    ...products[index],
    name: name || products[index].name,
    category: category || products[index].category,
    description: description !== undefined ? description : products[index].description,
    price: price !== undefined ? price : products[index].price,
    stock: stock !== undefined ? stock : products[index].stock,
    rating: rating !== undefined ? rating : products[index].rating,
    image: image !== undefined ? image : products[index].image
  };
  
  res.json(products[index]);
});

// Удалить товар
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  products = products.filter(p => p.id !== id);
  res.json({ success: true });
});

// Получить категории
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

// Раздача статических файлов из React build в продакшене
const buildPath = path.join(__dirname, '../build');
const fs = require('fs');

if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
