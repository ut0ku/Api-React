import React, { useMemo, useState, useEffect } from "react";
import "./UsersPage.scss";
import UsersList from "../../components/UsersList";
import UserModal from "../../components/UserModal";
import api from "../../api";

// Товары
const INITIAL_PRODUCTS = [
  { id: 1, name: "Ноутбук ASUS VivoBook 15", category: "Ноутбуки", description: "15.6 дюймов, Intel Core i5, 8GB RAM, 512GB SSD", price: 54990, stock: 15, rating: 4.5, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop" },
  { id: 2, name: "Смартфон Samsung Galaxy A54", category: "Смартфоны", description: "6.4 дюйма, 128GB, 8GB RAM, камера 50MP", price: 35990, stock: 23, rating: 4.3, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop" },
  { id: 3, name: "Наушники Sony WH-1000XM5", category: "Наушники", description: "Беспроводные, активное шумоподавление, 30ч автономности", price: 24990, stock: 8, rating: 4.8, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" },
  { id: 4, name: "Монитор LG UltraWide 34\"", category: "Мониторы", description: "34 дюйма, IPS, 3440x1440, 144Hz", price: 45990, stock: 5, rating: 4.6, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&h=200&fit=crop" },
  { id: 5, name: "Клавиатура Logitech MX Keys", category: "Периферия", description: "Беспроводная, подсветка, русская раскладка", price: 8990, stock: 30, rating: 4.4, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop" },
  { id: 6, name: "Мышь Razer DeathAdder V3", category: "Периферия", description: "Игровая, 25500 DPI, 8 кнопок", price: 7990, stock: 12, rating: 4.7, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop" },
  { id: 7, name: "Планшет Apple iPad Air 10.9\"", category: "Планшеты", description: "64GB, Wi-Fi, M1 chip", price: 59990, stock: 0, rating: 4.9, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=200&fit=crop" },
  { id: 8, name: "Умные часы Apple Watch Series 8", category: "Носимые устройства", description: "45mm, GPS, Always-On Retina", price: 42990, stock: 7, rating: 4.6, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&h=200&fit=crop" },
  { id: 9, name: "Видеокарта NVIDIA RTX 4070", category: "Комплектующие", description: "12GB GDDR6X, 192-bit, DLSS 3", price: 75990, stock: 3, rating: 4.8, image: "https://images.unsplash.com/photo-1555618253-15be48c347d4?w=200&h=200&fit=crop" },
  { id: 10, name: "Процессор AMD Ryzen 7 5800X3D", category: "Комплектующие", description: "8 ядер, 16 потоков, 3.4GHz", price: 28990, stock: 6, rating: 4.7, image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&h=200&fit=crop" },
  { id: 11, name: "Колонка JBL Flip 6", category: "Аудио", description: "Портативная, 12ч автономности, водонепроницаемая", price: 11990, stock: 18, rating: 4.5, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop" },
  { id: 12, name: "Микрофон Blue Yeti X", category: "Аудио", description: "USB, 4 капсюля, 24-bit, поп-фильтр в комплекте", price: 14990, stock: 12, rating: 4.7, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=200&h=200&fit=crop" },
];

// Список категорий
const CATEGORIES = [
  "Все категории",
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

export default function StorePage() {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все категории");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      try {
        const data = await api.getProducts();
        setProducts(data);
      } catch (apiError) {
        // Если API недоступен, использовать начальные данные
        console.log("Using initial products data");
        setProducts(INITIAL_PRODUCTS);
      }
    } catch (err) {
      setError(err.message);
      // Резервное копирование
      setProducts(INITIAL_PRODUCTS);
    } finally {
      setLoading(false);
    }
  };

  const nextId = useMemo(() => {
    const maxId = products.reduce((m, p) => Math.max(m, p.id), 0);
    return maxId + 1;
  }, [products]);

  // Фильтр товаров
  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Фильтр по категории
    if (selectedCategory !== "Все категории") {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Фильтр по поисковому запросу
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
      );
    }
    
    return result;
  }, [products, selectedCategory, searchQuery]);

  // Статистика
  const stats = useMemo(() => {
    const totalProducts = products.length;
    const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
    const avgRating = products.length > 0 
      ? products.reduce((sum, p) => sum + p.rating, 0) / products.length 
      : 0;
    return { totalProducts, totalStock, avgRating };
  }, [products]);

  const openCreate = () => {
    setModalMode("create");
    setEditingProduct(null);
    setModalOpen(true);
  };

  const openEdit = (product) => {
    setModalMode("edit");
    setEditingProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingProduct(null);
  };

  const handleDelete = async (id) => {
    const ok = window.confirm("Удалить товар?");
    if (!ok) return;
    
    try {
      // Попытка удалить через API
      try {
        await api.deleteProduct(id);
      } catch (apiError) {
        console.log("API not available, deleting locally");
      }
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      alert("Ошибка при удалении товара");
    }
  };

  const handleSubmitModal = async (payload) => {
    try {
      if (modalMode === "create") {
        const newProduct = { 
          id: nextId, 
          name: payload.name,
          category: payload.category,
          description: payload.description,
          price: payload.price,
          stock: payload.stock,
          rating: payload.rating,
          image: payload.image
        };
        
        try {
          await api.createProduct(newProduct);
        } catch (apiError) {
          console.log("API not available, saving locally");
        }
        
        setProducts((prev) => [...prev, newProduct]);
      } else {
        const updatedProduct = {
          id: payload.id,
          name: payload.name,
          category: payload.category,
          description: payload.description,
          price: payload.price,
          stock: payload.stock,
          rating: payload.rating,
          image: payload.image
        };
        
        try {
          await api.updateProduct(payload.id, updatedProduct);
        } catch (apiError) {
          console.log("API not available, updating locally");
        }
        
        setProducts((prev) =>
          prev.map((p) => (p.id === payload.id ? { ...p, ...updatedProduct } : p))
        );
      }
      closeModal();
    } catch (err) {
      alert("Ошибка при сохранении товара");
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (loading) {
    return (
      <div className="page">
        <header className="header">
          <div className="header__inner">
            <div className="brand">Магазин электроники</div>
            <div className="header__right">React</div>
          </div>
        </header>
        <main className="main">
          <div className="container">
            <div className="empty">Загрузка...</div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <header className="header">
        <div className="header__inner">
          <div className="brand">Магазин электроники</div>
          <div className="header__right">React</div>
        </div>
      </header>
      
      <main className="main">
        <div className="container">
          <div className="toolbar">
            <h1 className="title">Каталог товаров</h1>
            <button className="btn btn--primary" onClick={openCreate}>
              + Добавить товар
            </button>
          </div>

          {/* Stats */}
          <div className="stats">
            <div className="stat">
              Всего товаров:<span className="statValue">{stats.totalProducts}</span>
            </div>
            <div className="stat">
              На складе:<span className="statValue">{stats.totalStock} шт.</span>
            </div>
            <div className="stat">
              Средний рейтинг:<span className="statValue">{stats.avgRating.toFixed(1)} ★</span>
            </div>
          </div>

          {/* Search */}
          <div className="search">
            <input
              type="text"
              className="searchInput"
              placeholder="Поиск по названию или описанию..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* Category Filter */}
          <div className="filter">
            <span className="filterLabel">Категория:</span>
            <select
              className="filterSelect"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <UsersList 
            products={filteredProducts} 
            onEdit={openEdit} 
            onDelete={handleDelete} 
          />
        </div>
      </main>
      
      <footer className="footer">
        <div className="footer__inner">
          © {new Date().getFullYear()} Магазин электроники
        </div>
      </footer>

      <UserModal
        open={modalOpen}
        mode={modalMode}
        initialProduct={editingProduct}
        onClose={closeModal}
        onSubmit={handleSubmitModal}
        categories={CATEGORIES.filter(c => c !== "Все категории")}
      />
    </div>
  );
}
