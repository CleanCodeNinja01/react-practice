const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 79.99,
      description: "High-quality wireless headphones with noise cancellation.",
      image: "https://placehold.co/300x300?text=Headphones",
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 129.99,
      description: "Smart watch with fitness tracking and heart rate monitoring.",
      image: "https://placehold.co/300x300?text=Smart+Watch",
      rating: 4.3,
      inStock: true
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 49.99,
      description: "Portable Bluetooth speaker with powerful sound.",
      image: "https://placehold.co/300x300?text=Speaker",
      rating: 4.4,
      inStock: true
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      category: "Electronics",
      price: 89.99,
      description: "Mechanical keyboard with responsive keys and RGB lighting.",
      image: "https://placehold.co/300x300?text=Keyboard",
      rating: 4.6,
      inStock: true
    },
    {
      id: 5,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 24.99,
      description: "Ergonomic wireless mouse with adjustable sensitivity.",
      image: "https://placehold.co/300x300?text=Mouse",
      rating: 4.2,
      inStock: true
    },
    {
      id: 6,
      name: "Laptop Stand",
      category: "Electronics",
      price: 34.99,
      description: "Adjustable aluminum laptop stand for comfortable working.",
      image: "https://placehold.co/300x300?text=Laptop+Stand",
      rating: 4.5,
      inStock: true
    },
    {
      id: 7,
      name: "USB-C Hub",
      category: "Electronics",
      price: 39.99,
      description: "Multiport USB-C hub with HDMI and USB connections.",
      image: "https://placehold.co/300x300?text=USB-C+Hub",
      rating: 4.1,
      inStock: true
    },
    {
      id: 8,
      name: "Power Bank",
      category: "Electronics",
      price: 29.99,
      description: "Portable 20000mAh power bank for charging devices.",
      image: "https://placehold.co/300x300?text=Power+Bank",
      rating: 4.4,
      inStock: true
    },
    {
      id: 9,
      name: "Webcam",
      category: "Electronics",
      price: 59.99,
      description: "Full HD webcam for video calls and online meetings.",
      image: "https://placehold.co/300x300?text=Webcam",
      rating: 4.3,
      inStock: true
    },
    {
      id: 10,
      name: "Monitor Light Bar",
      category: "Electronics",
      price: 44.99,
      description: "LED monitor light bar for comfortable desk lighting.",
      image: "https://placehold.co/300x300?text=Light+Bar",
      rating: 4.2,
      inStock: false
    },
    {
      id: 11,
      name: "Cotton T-Shirt",
      category: "Clothing",
      price: 19.99,
      description: "Classic cotton T-shirt suitable for everyday wear.",
      image: "https://placehold.co/300x300?text=T-Shirt",
      rating: 4.1,
      inStock: true
    },
    {
      id: 12,
      name: "Denim Jeans",
      category: "Clothing",
      price: 49.99,
      description: "Comfortable denim jeans with a modern fit.",
      image: "https://placehold.co/300x300?text=Jeans",
      rating: 4.3,
      inStock: true
    },
    {
      id: 13,
      name: "Hoodie",
      category: "Clothing",
      price: 39.99,
      description: "Soft fleece hoodie with a front pocket.",
      image: "https://placehold.co/300x300?text=Hoodie",
      rating: 4.6,
      inStock: true
    },
    {
      id: 14,
      name: "Casual Sneakers",
      category: "Clothing",
      price: 64.99,
      description: "Lightweight sneakers designed for everyday comfort.",
      image: "https://placehold.co/300x300?text=Sneakers",
      rating: 4.4,
      inStock: true
    },
    {
      id: 15,
      name: "Leather Wallet",
      category: "Accessories",
      price: 34.99,
      description: "Compact wallet with multiple card slots.",
      image: "https://placehold.co/300x300?text=Wallet",
      rating: 4.2,
      inStock: true
    },
    {
      id: 16,
      name: "Baseball Cap",
      category: "Accessories",
      price: 17.99,
      description: "Adjustable baseball cap for casual outfits.",
      image: "https://placehold.co/300x300?text=Cap",
      rating: 4.0,
      inStock: true
    },
    {
      id: 17,
      name: "Winter Jacket",
      category: "Clothing",
      price: 119.99,
      description: "Warm insulated jacket for cold weather.",
      image: "https://placehold.co/300x300?text=Jacket",
      rating: 4.7,
      inStock: true
    },
    {
      id: 18,
      name: "Running Shorts",
      category: "Clothing",
      price: 24.99,
      description: "Breathable athletic shorts for running and exercise.",
      image: "https://placehold.co/300x300?text=Shorts",
      rating: 4.1,
      inStock: true
    },
    {
      id: 19,
      name: "Formal Shirt",
      category: "Clothing",
      price: 44.99,
      description: "Smart formal shirt suitable for work and events.",
      image: "https://placehold.co/300x300?text=Formal+Shirt",
      rating: 4.3,
      inStock: true
    },
    {
      id: 20,
      name: "Wool Scarf",
      category: "Accessories",
      price: 22.99,
      description: "Soft wool scarf to keep you warm during winter.",
      image: "https://placehold.co/300x300?text=Scarf",
      rating: 4.4,
      inStock: false
    },
    {
      id: 21,
      name: "Ceramic Coffee Mug",
      category: "Home",
      price: 12.99,
      description: "Durable ceramic mug for coffee and tea.",
      image: "https://placehold.co/300x300?text=Coffee+Mug",
      rating: 4.5,
      inStock: true
    },
    {
      id: 22,
      name: "Water Bottle",
      category: "Home",
      price: 19.99,
      description: "Reusable stainless steel water bottle.",
      image: "https://placehold.co/300x300?text=Water+Bottle",
      rating: 4.4,
      inStock: true
    },
    {
      id: 23,
      name: "Desk Organizer",
      category: "Home",
      price: 16.99,
      description: "Compact organizer for pens and office supplies.",
      image: "https://placehold.co/300x300?text=Organizer",
      rating: 4.2,
      inStock: true
    },
    {
      id: 24,
      name: "Table Lamp",
      category: "Home",
      price: 35.99,
      description: "Modern table lamp for bedrooms and home offices.",
      image: "https://placehold.co/300x300?text=Table+Lamp",
      rating: 4.3,
      inStock: true
    },
    {
      id: 25,
      name: "Decorative Cushion",
      category: "Home",
      price: 18.99,
      description: "Soft decorative cushion for sofas and beds.",
      image: "https://placehold.co/300x300?text=Cushion",
      rating: 4.1,
      inStock: true
    },
    {
      id: 26,
      name: "Wall Clock",
      category: "Home",
      price: 27.99,
      description: "Minimalist wall clock with a silent mechanism.",
      image: "https://placehold.co/300x300?text=Wall+Clock",
      rating: 4.0,
      inStock: true
    },
    {
      id: 27,
      name: "Cotton Bedsheet Set",
      category: "Home",
      price: 59.99,
      description: "Comfortable cotton bedsheet set for a queen-size bed.",
      image: "https://placehold.co/300x300?text=Bedsheet",
      rating: 4.5,
      inStock: true
    },
    {
      id: 28,
      name: "Laundry Basket",
      category: "Home",
      price: 21.99,
      description: "Lightweight laundry basket with carrying handles.",
      image: "https://placehold.co/300x300?text=Laundry+Basket",
      rating: 4.0,
      inStock: true
    },
    {
      id: 29,
      name: "Scented Candle",
      category: "Home",
      price: 14.99,
      description: "Aromatic candle for a relaxing home atmosphere.",
      image: "https://placehold.co/300x300?text=Candle",
      rating: 4.6,
      inStock: true
    },
    {
      id: 30,
      name: "Storage Box Set",
      category: "Home",
      price: 32.99,
      description: "Stackable storage boxes for organizing household items.",
      image: "https://placehold.co/300x300?text=Storage+Boxes",
      rating: 4.2,
      inStock: false
    },
    {
      id: 31,
      name: "Face Moisturizer",
      category: "Beauty",
      price: 24.99,
      description: "Daily facial moisturizer for soft, hydrated skin.",
      image: "https://placehold.co/300x300?text=Moisturizer",
      rating: 4.4,
      inStock: true
    },
    {
      id: 32,
      name: "Facial Cleanser",
      category: "Beauty",
      price: 16.99,
      description: "Gentle facial cleanser for everyday skincare.",
      image: "https://placehold.co/300x300?text=Cleanser",
      rating: 4.3,
      inStock: true
    },
    {
      id: 33,
      name: "Lip Balm",
      category: "Beauty",
      price: 5.99,
      description: "Moisturizing lip balm for dry lips.",
      image: "https://placehold.co/300x300?text=Lip+Balm",
      rating: 4.2,
      inStock: true
    },
    {
      id: 34,
      name: "Makeup Brush Set",
      category: "Beauty",
      price: 29.99,
      description: "A collection of soft brushes for makeup application.",
      image: "https://placehold.co/300x300?text=Brush+Set",
      rating: 4.5,
      inStock: true
    },
    {
      id: 35,
      name: "Hair Dryer",
      category: "Beauty",
      price: 39.99,
      description: "Compact hair dryer with multiple heat settings.",
      image: "https://placehold.co/300x300?text=Hair+Dryer",
      rating: 4.1,
      inStock: true
    },
    {
      id: 36,
      name: "Hair Brush",
      category: "Beauty",
      price: 11.99,
      description: "Detangling hairbrush suitable for everyday use.",
      image: "https://placehold.co/300x300?text=Hair+Brush",
      rating: 4.0,
      inStock: true
    },
    {
      id: 37,
      name: "Nail Polish Set",
      category: "Beauty",
      price: 22.99,
      description: "Colorful nail polish set for creative manicures.",
      image: "https://placehold.co/300x300?text=Nail+Polish",
      rating: 4.3,
      inStock: true
    },
    {
      id: 38,
      name: "Bath Towel Set",
      category: "Beauty",
      price: 34.99,
      description: "Soft and absorbent cotton bath towels.",
      image: "https://placehold.co/300x300?text=Towels",
      rating: 4.6,
      inStock: true
    },
    {
      id: 39,
      name: "Travel Toiletry Bag",
      category: "Accessories",
      price: 18.99,
      description: "Compact toiletry bag with multiple storage compartments.",
      image: "https://placehold.co/300x300?text=Toiletry+Bag",
      rating: 4.2,
      inStock: true
    },
    {
      id: 40,
      name: "Compact Makeup Mirror",
      category: "Beauty",
      price: 13.99,
      description: "Portable makeup mirror for home and travel.",
      image: "https://placehold.co/300x300?text=Makeup+Mirror",
      rating: 4.1,
      inStock: false
    },
    {
      id: 41,
      name: "Yoga Mat",
      category: "Sports",
      price: 29.99,
      description: "Non-slip exercise mat for yoga and stretching.",
      image: "https://placehold.co/300x300?text=Yoga+Mat",
      rating: 4.5,
      inStock: true
    },
    {
      id: 42,
      name: "Resistance Bands",
      category: "Sports",
      price: 14.99,
      description: "Resistance band set for strength and flexibility training.",
      image: "https://placehold.co/300x300?text=Resistance+Bands",
      rating: 4.3,
      inStock: true
    },
    {
      id: 43,
      name: "Dumbbell Set",
      category: "Sports",
      price: 49.99,
      description: "Compact dumbbell set for home workouts.",
      image: "https://placehold.co/300x300?text=Dumbbells",
      rating: 4.4,
      inStock: true
    },
    {
      id: 44,
      name: "Sports Water Bottle",
      category: "Sports",
      price: 15.99,
      description: "Leak-resistant bottle for workouts and outdoor activities.",
      image: "https://placehold.co/300x300?text=Sports+Bottle",
      rating: 4.2,
      inStock: true
    },
    {
      id: 45,
      name: "Gym Duffel Bag",
      category: "Sports",
      price: 39.99,
      description: "Spacious gym bag with separate shoe storage.",
      image: "https://placehold.co/300x300?text=Duffel+Bag",
      rating: 4.4,
      inStock: true
    },
    {
      id: 46,
      name: "Skipping Rope",
      category: "Sports",
      price: 9.99,
      description: "Adjustable skipping rope for cardio workouts.",
      image: "https://placehold.co/300x300?text=Skipping+Rope",
      rating: 4.1,
      inStock: true
    },
    {
      id: 47,
      name: "Cycling Gloves",
      category: "Sports",
      price: 19.99,
      description: "Padded cycling gloves for a comfortable grip.",
      image: "https://placehold.co/300x300?text=Cycling+Gloves",
      rating: 4.0,
      inStock: true
    },
    {
      id: 48,
      name: "Fitness Tracker",
      category: "Sports",
      price: 59.99,
      description: "Fitness tracker for monitoring daily activity and sleep.",
      image: "https://placehold.co/300x300?text=Fitness+Tracker",
      rating: 4.3,
      inStock: true
    },
    {
      id: 49,
      name: "Camping Lantern",
      category: "Outdoor",
      price: 24.99,
      description: "Rechargeable LED lantern for camping and outdoor use.",
      image: "https://placehold.co/300x300?text=Lantern",
      rating: 4.4,
      inStock: true
    },
    {
      id: 50,
      name: "Travel Backpack",
      category: "Accessories",
      price: 69.99,
      description: "Multi-compartment backpack for travel and daily commuting.",
      image: "https://placehold.co/300x300?text=Backpack",
      rating: 4.6,
      inStock: false
    },
    {
      id: 51,
      name: "Ceramic Dinner Set",
      category: "Kitchen",
      price: 79.99,
      description: "Modern ceramic dinnerware set for everyday meals.",
      image: "https://placehold.co/300x300?text=Dinner+Set",
      rating: 4.5,
      inStock: true
    },
    {
      id: 52,
      name: "Nonstick Frying Pan",
      category: "Kitchen",
      price: 32.99,
      description: "Nonstick frying pan for easy everyday cooking.",
      image: "https://placehold.co/300x300?text=Frying+Pan",
      rating: 4.3,
      inStock: true
    },
    {
      id: 53,
      name: "Chef Knife",
      category: "Kitchen",
      price: 39.99,
      description: "Stainless steel kitchen knife for food preparation.",
      image: "https://placehold.co/300x300?text=Chef+Knife",
      rating: 4.4,
      inStock: true
    },
    {
      id: 54,
      name: "Cutting Board",
      category: "Kitchen",
      price: 17.99,
      description: "Durable cutting board for everyday meal preparation.",
      image: "https://placehold.co/300x300?text=Cutting+Board",
      rating: 4.1,
      inStock: true
    },
    {
      id: 55,
      name: "Electric Kettle",
      category: "Kitchen",
      price: 34.99,
      description: "Electric kettle with automatic shutoff.",
      image: "https://placehold.co/300x300?text=Electric+Kettle",
      rating: 4.5,
      inStock: true
    },
    {
      id: 56,
      name: "French Press",
      category: "Kitchen",
      price: 24.99,
      description: "Glass French press for rich, flavorful coffee.",
      image: "https://placehold.co/300x300?text=French+Press",
      rating: 4.6,
      inStock: true
    },
    {
      id: 57,
      name: "Food Storage Containers",
      category: "Kitchen",
      price: 28.99,
      description: "Reusable food storage containers with secure lids.",
      image: "https://placehold.co/300x300?text=Food+Containers",
      rating: 4.2,
      inStock: true
    },
    {
      id: 58,
      name: "Digital Kitchen Scale",
      category: "Kitchen",
      price: 19.99,
      description: "Precision digital scale for cooking and baking.",
      image: "https://placehold.co/300x300?text=Kitchen+Scale",
      rating: 4.3,
      inStock: true
    },
    {
      id: 59,
      name: "Hand Blender",
      category: "Kitchen",
      price: 44.99,
      description: "Versatile hand blender for soups, sauces, and smoothies.",
      image: "https://placehold.co/300x300?text=Hand+Blender",
      rating: 4.2,
      inStock: false
    },
    {
      id: 60,
      name: "Silicone Baking Set",
      category: "Kitchen",
      price: 26.99,
      description: "Reusable silicone baking tools for home baking.",
      image: "https://placehold.co/300x300?text=Baking+Set",
      rating: 4.4,
      inStock: true
    },
    {
      id: 61,
      name: "Paperback Notebook",
      category: "Stationery",
      price: 8.99,
      description: "Ruled notebook for notes, ideas, and daily planning.",
      image: "https://placehold.co/300x300?text=Notebook",
      rating: 4.4,
      inStock: true
    },
    {
      id: 62,
      name: "Ballpoint Pen Set",
      category: "Stationery",
      price: 6.99,
      description: "Smooth-writing pens for school, work, and home.",
      image: "https://placehold.co/300x300?text=Pen+Set",
      rating: 4.1,
      inStock: true
    },
    {
      id: 63,
      name: "Desk Planner",
      category: "Stationery",
      price: 15.99,
      description: "Weekly desk planner for organizing tasks and appointments.",
      image: "https://placehold.co/300x300?text=Planner",
      rating: 4.5,
      inStock: true
    },
    {
      id: 64,
      name: "Sticky Notes Set",
      category: "Stationery",
      price: 5.49,
      description: "Colorful sticky notes for reminders and quick notes.",
      image: "https://placehold.co/300x300?text=Sticky+Notes",
      rating: 4.0,
      inStock: true
    },
    {
      id: 65,
      name: "Gel Pen Set",
      category: "Stationery",
      price: 9.99,
      description: "Colorful gel pens for writing, drawing, and journaling.",
      image: "https://placehold.co/300x300?text=Gel+Pens",
      rating: 4.3,
      inStock: true
    },
    {
      id: 66,
      name: "Sketchbook",
      category: "Stationery",
      price: 12.99,
      description: "Thick-paper sketchbook for drawing and illustrations.",
      image: "https://placehold.co/300x300?text=Sketchbook",
      rating: 4.5,
      inStock: true
    },
    {
      id: 67,
      name: "Desk Mat",
      category: "Office",
      price: 21.99,
      description: "Smooth desk mat for a comfortable workspace.",
      image: "https://placehold.co/300x300?text=Desk+Mat",
      rating: 4.3,
      inStock: true
    },
    {
      id: 68,
      name: "Document Organizer",
      category: "Office",
      price: 18.99,
      description: "Expandable organizer for important documents and files.",
      image: "https://placehold.co/300x300?text=Document+Organizer",
      rating: 4.1,
      inStock: true
    },
    {
      id: 69,
      name: "Whiteboard",
      category: "Office",
      price: 29.99,
      description: "Compact whiteboard for planning and brainstorming.",
      image: "https://placehold.co/300x300?text=Whiteboard",
      rating: 4.4,
      inStock: true
    },
    {
      id: 70,
      name: "Bookends",
      category: "Office",
      price: 14.99,
      description: "Minimalist bookends for keeping shelves organized.",
      image: "https://placehold.co/300x300?text=Bookends",
      rating: 4.2,
      inStock: false
    },
    {
      id: 71,
      name: "Mystery Novel",
      category: "Books",
      price: 14.99,
      description: "A suspenseful fictional mystery filled with unexpected twists.",
      image: "https://placehold.co/300x300?text=Mystery+Novel",
      rating: 4.6,
      inStock: true
    },
    {
      id: 72,
      name: "Science Fiction Novel",
      category: "Books",
      price: 16.99,
      description: "An imaginative science fiction adventure set in the future.",
      image: "https://placehold.co/300x300?text=Sci-Fi+Novel",
      rating: 4.5,
      inStock: true
    },
    {
      id: 73,
      name: "Personal Development Book",
      category: "Books",
      price: 19.99,
      description: "A practical guide to habits, productivity, and personal growth.",
      image: "https://placehold.co/300x300?text=Self+Development",
      rating: 4.4,
      inStock: true
    },
    {
      id: 74,
      name: "Cookbook",
      category: "Books",
      price: 24.99,
      description: "A collection of approachable recipes for home cooks.",
      image: "https://placehold.co/300x300?text=Cookbook",
      rating: 4.3,
      inStock: true
    },
    {
      id: 75,
      name: "Travel Journal",
      category: "Books",
      price: 11.99,
      description: "A journal for recording travel memories and experiences.",
      image: "https://placehold.co/300x300?text=Travel+Journal",
      rating: 4.5,
      inStock: true
    },
    {
      id: 76,
      name: "Puzzle Book",
      category: "Books",
      price: 9.99,
      description: "A collection of brain teasers, riddles, and logic puzzles.",
      image: "https://placehold.co/300x300?text=Puzzle+Book",
      rating: 4.2,
      inStock: true
    },
    {
      id: 77,
      name: "Language Learning Book",
      category: "Books",
      price: 22.99,
      description: "A beginner-friendly workbook for learning a new language.",
      image: "https://placehold.co/300x300?text=Language+Book",
      rating: 4.1,
      inStock: true
    },
    {
      id: 78,
      name: "Children's Storybook",
      category: "Books",
      price: 12.99,
      description: "An illustrated storybook for young readers.",
      image: "https://placehold.co/300x300?text=Storybook",
      rating: 4.7,
      inStock: true
    },
    {
      id: 79,
      name: "Classic Literature Collection",
      category: "Books",
      price: 29.99,
      description: "A collection of timeless literary classics.",
      image: "https://placehold.co/300x300?text=Classics",
      rating: 4.6,
      inStock: false
    },
    {
      id: 80,
      name: "Technology Handbook",
      category: "Books",
      price: 34.99,
      description: "An introductory guide to modern technology and computing.",
      image: "https://placehold.co/300x300?text=Technology+Book",
      rating: 4.3,
      inStock: true
    },
    {
      id: 81,
      name: "Pet Food Bowl",
      category: "Pets",
      price: 12.99,
      description: "Easy-to-clean stainless steel bowl for cats and dogs.",
      image: "https://placehold.co/300x300?text=Pet+Bowl",
      rating: 4.4,
      inStock: true
    },
    {
      id: 82,
      name: "Pet Grooming Brush",
      category: "Pets",
      price: 14.99,
      description: "Grooming brush for removing loose fur from pets.",
      image: "https://placehold.co/300x300?text=Pet+Brush",
      rating: 4.3,
      inStock: true
    },
    {
      id: 83,
      name: "Cat Scratching Post",
      category: "Pets",
      price: 34.99,
      description: "Sturdy scratching post designed for indoor cats.",
      image: "https://placehold.co/300x300?text=Scratching+Post",
      rating: 4.5,
      inStock: true
    },
    {
      id: 84,
      name: "Dog Leash",
      category: "Pets",
      price: 17.99,
      description: "Durable dog leash with a comfortable grip.",
      image: "https://placehold.co/300x300?text=Dog+Leash",
      rating: 4.2,
      inStock: true
    },
    {
      id: 85,
      name: "Pet Travel Carrier",
      category: "Pets",
      price: 49.99,
      description: "Ventilated carrier for transporting small pets.",
      image: "https://placehold.co/300x300?text=Pet+Carrier",
      rating: 4.4,
      inStock: true
    },
    {
      id: 86,
      name: "Pet Toy Set",
      category: "Pets",
      price: 19.99,
      description: "A variety of interactive toys for pets.",
      image: "https://placehold.co/300x300?text=Pet+Toys",
      rating: 4.3,
      inStock: true
    },
    {
      id: 87,
      name: "Indoor Plant Pot",
      category: "Garden",
      price: 15.99,
      description: "Decorative planter for indoor plants and herbs.",
      image: "https://placehold.co/300x300?text=Plant+Pot",
      rating: 4.4,
      inStock: true
    },
    {
      id: 88,
      name: "Gardening Gloves",
      category: "Garden",
      price: 11.99,
      description: "Protective gardening gloves with a comfortable fit.",
      image: "https://placehold.co/300x300?text=Garden+Gloves",
      rating: 4.1,
      inStock: true
    },
    {
      id: 89,
      name: "Watering Can",
      category: "Garden",
      price: 18.99,
      description: "Lightweight watering can for indoor and outdoor plants.",
      image: "https://placehold.co/300x300?text=Watering+Can",
      rating: 4.2,
      inStock: true
    },
    {
      id: 90,
      name: "Garden Tool Set",
      category: "Garden",
      price: 27.99,
      description: "Essential hand tools for planting and garden maintenance.",
      image: "https://placehold.co/300x300?text=Garden+Tools",
      rating: 4.5,
      inStock: false
    },
    {
      id: 91,
      name: "Travel Neck Pillow",
      category: "Travel",
      price: 21.99,
      description: "Soft neck pillow designed for comfortable travel.",
      image: "https://placehold.co/300x300?text=Neck+Pillow",
      rating: 4.3,
      inStock: true
    },
    {
      id: 92,
      name: "Packing Cubes",
      category: "Travel",
      price: 24.99,
      description: "Packing cube set for organizing luggage efficiently.",
      image: "https://placehold.co/300x300?text=Packing+Cubes",
      rating: 4.5,
      inStock: true
    },
    {
      id: 93,
      name: "Luggage Tag Set",
      category: "Travel",
      price: 8.99,
      description: "Reusable luggage tags for identifying travel bags.",
      image: "https://placehold.co/300x300?text=Luggage+Tags",
      rating: 4.0,
      inStock: true
    },
    {
      id: 94,
      name: "Travel Adapter",
      category: "Travel",
      price: 27.99,
      description: "Universal travel adapter for compatible international plugs.",
      image: "https://placehold.co/300x300?text=Travel+Adapter",
      rating: 4.4,
      inStock: true
    },
    {
      id: 95,
      name: "Compact Umbrella",
      category: "Accessories",
      price: 16.99,
      description: "Foldable umbrella designed for everyday commuting.",
      image: "https://placehold.co/300x300?text=Umbrella",
      rating: 4.1,
      inStock: true
    },
    {
      id: 96,
      name: "Sunglasses",
      category: "Accessories",
      price: 29.99,
      description: "Classic sunglasses with UV-protective lenses.",
      image: "https://placehold.co/300x300?text=Sunglasses",
      rating: 4.3,
      inStock: true
    },
    {
      id: 97,
      name: "Canvas Tote Bag",
      category: "Accessories",
      price: 14.99,
      description: "Reusable canvas tote bag for shopping and everyday use.",
      image: "https://placehold.co/300x300?text=Tote+Bag",
      rating: 4.5,
      inStock: true
    },
    {
      id: 98,
      name: "Minimalist Bracelet",
      category: "Accessories",
      price: 24.99,
      description: "Simple bracelet suitable for everyday outfits.",
      image: "https://placehold.co/300x300?text=Bracelet",
      rating: 4.2,
      inStock: true
    },
    {
      id: 99,
      name: "Analog Wristwatch",
      category: "Accessories",
      price: 54.99,
      description: "Classic analog wristwatch with a minimalist design.",
      image: "https://placehold.co/300x300?text=Wristwatch",
      rating: 4.4,
      inStock: true
    },
    {
      id: 100,
      name: "Leather Crossbody Bag",
      category: "Accessories",
      price: 64.99,
      description: "Compact crossbody bag for carrying daily essentials.",
      image: "https://placehold.co/300x300?text=Crossbody+Bag",
      rating: 4.6,
      inStock: true
    }
  ];
  
  export default products;