/* ==========================================================================
   AMAZON CLONE CORE APPLICATION LOGIC & STATE
   ========================================================================== */

// 1. Curated Product Mock Database (15+ items with rich metadata & image galleries)
const PRODUCT_CATALOG = [
  {
    id: "p1",
    title: "Apple MacBook Pro 14\" (M3 Chip, 8-Core CPU, 10-Core GPU, 8GB Unified Memory, 512GB SSD) - Space Gray",
    category: "electronics",
    price: 1599.00,
    listPrice: 1799.00,
    rating: 4.8,
    ratingCount: 1420,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop"
    ],
    description: [
      "SUPERCHARGED BY M3 — The Apple M3 chip, with an 8-core CPU and 10-core GPU, delivers spectacular performance for everyday tasks and casual creative projects.",
      "UP TO 22 HOURS OF BATTERY LIFE — Go all day thanks to the power-efficient design of Apple silicon.",
      "BRILLIANT PRO DISPLAY — The 14.2-inch Liquid Retina XDR display features Extreme Dynamic Range, over 1000 nits of brightness, and professional reference modes.",
      "FULLY COMPATIBLE — All your pro apps run lightning fast, including Adobe Creative Cloud, Xcode, Microsoft 365, and your favorite iPhone and iPad apps."
    ],
    specs: {
      "Brand": "Apple",
      "Model": "MacBook Pro M3",
      "Screen Size": "14.2 Inches",
      "Hard Disk Size": "512 GB",
      "CPU Model": "Apple M3",
      "RAM Memory": "8 GB"
    },
    reviews: [
      { author: "Sarah M.", stars: 5, title: "Blazing fast and battery life is insane", text: "I upgraded from an older Intel MacBook and the difference is like night and day. It stays cool, runs silent, and the screen is beautiful. Highly recommend." },
      { author: "David K.", stars: 5, title: "Perfect dev laptop", text: "The M3 chip handles Docker containers, multiple IDEs, and countless browser tabs without breaking a sweat. Battery easily lasts 1.5 work days." }
    ],
    stock: "in-stock",
    seller: "Apple Store"
  },
  {
    id: "p2",
    title: "Sony WH-1000XM5 Premium Wireless Industry Leading Noise Canceling Overhead Headphones - Silver",
    category: "electronics",
    price: 348.00,
    listPrice: 399.99,
    rating: 4.6,
    ratingCount: 3850,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop"
    ],
    description: [
      "INDUSTRY-LEADING NOISE CANCELLATION — Two processors control 8 microphones for unprecedented noise cancellation.",
      "MAGNIFICENT SOUND — Engineered to perfection with the new Integrated Processor V1.",
      "CRYSTAL CLEAR HANDS-FREE CALLING — With 4 beamforming microphones, precise voice pickup, and advanced audio signal processing.",
      "UP TO 30-HOUR BATTERY LIFE — With quick charging (3 min charge for 3 hours of playback)."
    ],
    specs: {
      "Brand": "Sony",
      "Model Name": "WH1000XM5/S",
      "Color": "Silver",
      "Form Factor": "Over Ear",
      "Connectivity": "Wireless, Bluetooth 5.2"
    },
    reviews: [
      { author: "Michael C.", stars: 5, title: "Best active noise cancellation ever", text: "I use this on weekly flights and it completely blocks out the engine rumble. Very comfortable to wear for hours." },
      { author: "Emma W.", stars: 4, title: "Great sound, slightly bulky case", text: "Audio is pure and deep. The touch gestures are responsive. Case is a bit larger than the XM4, but the comfort upgrade makes up for it." }
    ],
    stock: "in-stock",
    seller: "Sony Retail"
  },
  {
    id: "p3",
    title: "Samsung 34\" Odyssey G85SB OLED Ultra Wavelength Curved Gaming Monitor - 175Hz Refresh Rate",
    category: "electronics",
    price: 899.99,
    listPrice: 1199.99,
    rating: 4.5,
    ratingCount: 890,
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551645121-d1034da75057?w=800&auto=format&fit=crop"
    ],
    description: [
      "MESMERIZING OLED QUALITY — The OLED screen enhanced with Neo Quantum Processor delivers brighter whites, deeper blacks and near infinite color contrast.",
      "0.1ms RESPONSE TIME & 175Hz REFRESH — React to opponents' every move faster with the fastest response rate.",
      "ULTRAWIDE WQHD — A 34-inch curved screen in 21:9 aspect ratio wraps your vision to draw you in.",
      "PREMIUM AMD FREESYNC PREMIUM PRO — Fast-action and complex game scenes are projected stably and stutter-free."
    ],
    specs: {
      "Brand": "SAMSUNG",
      "Screen Size": "34 Inches",
      "Resolution": "3440 x 1440 Pixels",
      "Aspect Ratio": "21:9",
      "Refresh Rate": "175 Hz"
    },
    reviews: [
      { author: "Jake P.", stars: 5, title: "Stunning colors and contrast", text: "Gaming on an OLED is an absolute game-changer. Dark scenes are perfect black with zero haloing. Best monitor purchase ever." }
    ],
    stock: "low-stock",
    seller: "Samsung Electronics"
  },
  {
    id: "p4",
    title: "Adidas Originals Men's Ultraboost Light Running Sneaker - Core Black/White",
    category: "fashion",
    price: 139.99,
    listPrice: 190.00,
    rating: 4.7,
    ratingCount: 2150,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop"
    ],
    description: [
      "EPIC ENERGY BOOST — Lightest Ultraboost ever made with 30% lighter Boost material for ultimate spring.",
      "PARLEY OCEAN PLASTIC — Shoe upper is made with a high-performance yarn containing at least 50% recycled plastic.",
      "CONTINENTAL RUBBER SOLE — Continental grip rubber outsole provides extraordinary traction in wet and dry conditions.",
      "SOCK-LIKE FIT — Adidas PRIMEKNIT+ wraps the foot for adaptive, supportive comfort."
    ],
    specs: {
      "Brand": "Adidas",
      "Material": "Synthetic Primeknit",
      "Sole": "Continental Rubber",
      "Color": "Core Black/White",
      "Style": "Ultraboost Light"
    },
    reviews: [
      { author: "Chris R.", stars: 5, title: "Walking on clouds", text: "This is my 4th pair of Ultraboosts. The new Light edition is noticeably lighter and still provides the incredible cushion. True to size." }
    ],
    stock: "in-stock",
    seller: "Adidas Official Store"
  },
  {
    id: "p5",
    title: "Levi's Men's Sherpa Trucker Jacket - Classic Indigo Denim",
    category: "fashion",
    price: 79.50,
    listPrice: 108.00,
    rating: 4.4,
    ratingCount: 3100,
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop"
    ],
    description: [
      "WARM COMFORT — Fully lined sherpa fleece body and collar with quilted sleeve lining.",
      "ICONIC LOOK — A rugged denim silhouette that has been popular since the 1960s.",
      "SECURE POCKETS — Double chest pockets with snap closures and warm side welt hand pockets.",
      "ADJUSTABLE TABS — Double-snap cuffs and adjustable side waist tabs for custom fit."
    ],
    specs: {
      "Brand": "Levi's",
      "Fabric Type": "100% Cotton Denim",
      "Lining": "Sherpa Fleece",
      "Closure Type": "Snap Buttons",
      "Care Instructions": "Machine Wash"
    },
    reviews: [
      { author: "Logan T.", stars: 5, title: "Super warm and timeless style", text: "Fits perfectly. Keeps me warm in chilly autumn days. Denim is thick and feels like it will last for a decade." }
    ],
    stock: "in-stock",
    seller: "Levi Strauss & Co."
  },
  {
    id: "p6",
    title: "Keurig K-Elite Single Serve K-Cup Pod Coffee Maker with Iced Coffee capability - Brushed Slate",
    category: "kitchen",
    price: 129.00,
    listPrice: 189.99,
    rating: 4.7,
    ratingCount: 18400,
    images: [
      "https://images.unsplash.com/photo-1517256064527-09c53b2d0ec6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop"
    ],
    description: [
      "MULTIPLE BREW SIZES — Brew a 4, 6, 8, 10, or 12 oz. cup of your favorite coffee, tea, or hot cocoa.",
      "STRONG BREW BUTTON — Increases the strength and bold taste of your coffee's flavor profile.",
      "ICED COFFEE MODE — Brew hot over ice at the touch of a button for full-flavored, delicious iced coffee.",
      "LARGE 75oz RESERVOIR — Allows you to brew 8 cups before having to refill, saving you time."
    ],
    specs: {
      "Brand": "Keurig",
      "Capacity": "75 Fluid Ounces",
      "Color": "Brushed Slate",
      "Special Feature": "Iced Coffee Setting, Hot Water On Demand"
    },
    reviews: [
      { author: "Linda G.", stars: 4, title: "Great coffee maker with excellent settings", text: "The iced coffee option works perfectly, doesn't taste watered down. Instant hot water is also great for making oatmeal." }
    ],
    stock: "in-stock",
    seller: "Keurig Direct"
  },
  {
    id: "p7",
    title: "Ninja AF101 4-Quart Air Fryer that Crisps, Roasts, Reheats, & Dehydrates - Ceramic Basket",
    category: "kitchen",
    price: 89.99,
    listPrice: 129.99,
    rating: 4.8,
    ratingCount: 42100,
    images: [
      "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=800&auto=format&fit=crop"
    ],
    description: [
      "UP TO 75% LESS FAT — Enjoy guilt-free fried foods utilizing convection crisp technology.",
      "WIDE TEMP RANGE — 105 to 400 degrees Fahrenheit allows you to gently remove moisture or cook quickly.",
      "4-QUART CERAMIC BASKET — Fits up to 2 lbs of french fries or chicken wings comfortably.",
      "EASY TO CLEAN — Dishwasher safe basket and crisper plate with nonstick coating."
    ],
    specs: {
      "Brand": "Ninja",
      "Capacity": "4 Quarts",
      "Color": "Black/Grey",
      "Control Type": "Programmable Button Controls"
    },
    reviews: [
      { author: "Mark R.", stars: 5, title: "Life-changing kitchen gadget", text: "I cook everything in this now. Potatoes, chicken breasts, reheating pizza. Super quick, easy cleanup, and gets everything perfectly crispy." }
    ],
    stock: "in-stock",
    seller: "Ninja Kitchen Store"
  },
  {
    id: "p8",
    title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones (Hardcover)",
    category: "books",
    price: 11.98,
    listPrice: 27.00,
    rating: 4.8,
    ratingCount: 115000,
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop"
    ],
    description: [
      "#1 NEW YORK TIMES BESTSELLER — Over 15 million copies sold globally.",
      "PRACTICAL STRATEGIES — Learn how to make time for new habits, overcome a lack of motivation, and design your environment.",
      "COMPREHENSIVE FRAMEWORK — The Four Laws of Behavior Change explained in detail.",
      "AUTHORITATIVE WRITING — James Clear presents evidence-based insights distilled from biology, psychology, and neuroscience."
    ],
    specs: {
      "Author": "James Clear",
      "Publisher": "Avery; Hardcover edition",
      "Language": "English",
      "Pages": "320 pages",
      "Dimensions": "6 x 1 x 9 inches"
    },
    reviews: [
      { author: "Jessica H.", stars: 5, title: "Extremely actionable advice", text: "Unlike other self-help books that just motivate you, this book gives you exact frameworks to apply immediately. 10/10." }
    ],
    stock: "in-stock",
    seller: "Amazon Press"
  },
  {
    id: "p9",
    title: "Frank Herbert's Dune Saga 6-Book Deluxe Box Set (Dune, Messiah, Children, God Emperor, Heretics, Chapterhouse)",
    category: "books",
    price: 49.99,
    listPrice: 108.00,
    rating: 4.7,
    ratingCount: 12800,
    images: [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=800&auto=format&fit=crop"
    ],
    description: [
      "THE EPIC SCI-FI MASTERPIECE — The ultimate science fiction series that inspired blockbuster films.",
      "BEAUTIFUL DUST COVERS — Delux box set with vibrant themed jacket covers.",
      "THE ENTIRE ORIGIN CHRONICLE — Follow the desert planet Arrakis and the destiny of Paul Atreides and House Corrino.",
      "COLLECTIBLE QUALITY — High-quality pages and strong binding, perfect for any bookshelf library."
    ],
    specs: {
      "Author": "Frank Herbert",
      "Publisher": "Ace Books Box Set",
      "Language": "English",
      "Format": "Paperback Collection",
      "Count": "6 Books"
    },
    reviews: [
      { author: "ArrakisFan", stars: 5, title: "Classic masterpiece in a gorgeous box", text: "The book binding is strong, print quality is fantastic. This is a must-have for any true sci-fi enthusiast." }
    ],
    stock: "in-stock",
    seller: "Penguin Random House"
  },
  {
    id: "p10",
    title: "Bowflex SelectTech 552 Adjustable Dumbbells (Pair) - 5 to 52.5 lbs per Weight Set",
    category: "fitness",
    price: 379.00,
    listPrice: 429.00,
    rating: 4.8,
    ratingCount: 19800,
    images: [
      "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop"
    ],
    description: [
      "REPLACES 15 PAIRS OF DUMBBELLS — Dial adjusts weight from 5 lbs. up to 52.5 lbs. in small increments.",
      "SMOOTH SELECTION DIAL — Easy-turn selector dial makes switching weight plates fast and fluid.",
      "SPACE SAVING DESIGN — Say goodbye to cluttered home gyms; consolidates your layout.",
      "DURABLE MOLDED COATINGS — Ergonomic handles surrounded by durable quiet-molded plates for peaceful lifts."
    ],
    specs: {
      "Brand": "Bowflex",
      "Weight Range": "5 to 52.5 lbs per dumbbell",
      "Material": "Coated Steel, Durable Thermoplastic",
      "Count": "Pair of Dumbbells"
    },
    reviews: [
      { author: "GymRat99", stars: 5, title: "Absolutely brilliant space saver", text: "The dial works incredibly smooth. Saves massive space in my small apartment. Worth every dollar." }
    ],
    stock: "in-stock",
    seller: "Bowflex Fitness"
  },
  {
    id: "p11",
    title: "Garmin Forerunner 265 Running Smartwatch with Vibrant AMOLED Touchscreen - Whitestone",
    category: "fitness",
    price: 399.99,
    listPrice: 449.99,
    rating: 4.7,
    ratingCount: 1650,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop"
    ],
    description: [
      "AMOLED DISPLAY — Brilliant 1.3\" colorful touchscreen display paired with classic button controls.",
      "UP TO 13 DAYS BATTERY — Training metrics in smartwatch mode, up to 20 hours in active GPS mode.",
      "ADVANCED TRAINING METRICS — Training readiness, daily morning report, HRV status, and customized race widgets.",
      "MULTIBAND GNSS GPS — Unmatched positional tracking accuracy in dense urban areas or heavy foliage."
    ],
    specs: {
      "Brand": "Garmin",
      "Screen Size": "1.3 Inches",
      "Display Type": "AMOLED Touchscreen",
      "GPS": "Multiband GNSS Navigation",
      "Battery Life": "Up to 13 Days"
    },
    reviews: [
      { author: "Tyler S.", stars: 5, title: "AMOLED screen is beautiful", text: "The upgrade from 245 to 265 is substantial. The training readiness score is highly accurate. Bright screen is easy to read in direct sunlight." }
    ],
    stock: "in-stock",
    seller: "Garmin Active Store"
  },
  {
    id: "p12",
    title: "Manduka PRO Yoga Mat 6mm Thick (71\" Premium Eco-Friendly High Density Cushion for Joint Comfort)",
    category: "fitness",
    price: 107.00,
    listPrice: 129.00,
    rating: 4.6,
    ratingCount: 2900,
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop"
    ],
    description: [
      "UNMATCHED CUSHION — High-density 6mm thick cushion protects knees and joints during tough routines.",
      "OEKO-TEX CERTIFIED — High-quality material holds emissions-free ecological standard.",
      "NON-SLIP GRIP — Proprietary dot pattern bottom keeps the mat in place, preventing slides.",
      "LIFETIME WARRANTY — Engineered to never peel, flake, or fade, backed by Manduka's lifetime pledge."
    ],
    specs: {
      "Brand": "Manduka",
      "Color": "Black Sage",
      "Thickness": "6 Millimeters",
      "Dimensions": "71 x 26 x 0.24 inches"
    },
    reviews: [
      { author: "YogiSpirit", stars: 5, title: "The Cadillac of yoga mats", text: "Super supportive. It is slightly heavy to carry around, but the absolute best grip and cushion. Definitely worth the premium pricing." }
    ],
    stock: "in-stock",
    seller: "Manduka LLC"
  },
  {
    id: "p13",
    title: "Ray-Ban Classic Wayfarer Polarized Sunglasses - Black Frame with Green Classic G-15 Lenses",
    category: "fashion",
    price: 163.00,
    listPrice: 213.00,
    rating: 4.6,
    ratingCount: 7600,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop"
    ],
    description: [
      "100% UV PROTECTION — Keep your eyes safe from harmful UV rays while looking exceptionally chic.",
      "POLARIZED LENSES — Drastically reduces reflection glares from snow, water, and smooth surfaces.",
      "LEGENDARY ACETATE FRAMES — Strong acetate composite frames crafted in Italy.",
      "CLASSIC SIZING — 50mm lenses for standard fit contouring beautiful face profiles."
    ],
    specs: {
      "Brand": "Ray-Ban",
      "Model": "RB2140 Polarized",
      "Frame Material": "Acetate",
      "Lens Technology": "Polarized G-15 Green",
      "Origin": "Made in Italy"
    },
    reviews: [
      { author: "James B.", stars: 5, title: "Authentic, absolute classic style", text: "Fit perfectly, polarized lenses clear up vision beautifully on hot sunny drives. Timeless fashion." }
    ],
    stock: "in-stock",
    seller: "Luxottica Inc"
  },
  {
    id: "p14",
    title: "Instant Pot Duo 7-in-1 Smart Electric Pressure Cooker, Slow Cooker, Rice Cooker (6-Quart Stainless Steel)",
    category: "kitchen",
    price: 79.99,
    listPrice: 99.99,
    rating: 4.7,
    ratingCount: 154000,
    images: [
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop"
    ],
    description: [
      "7-IN-1 FUNCTIONALITY — Pressure cook, slow cook, rice cook, yogurt maker, steamer, sauté pan and food warmer.",
      "QUICK ONE-TOUCH COOKING — 13 customizable Smart Programs for pressure cooking ribs, soups, beans, rice, poultry, yogurt, desserts and more.",
      "TRI-PLY STAINLESS STEEL INNER POT — Durable stainless steel inner cooking pot with tri-ply bottom distributes heat evenly.",
      "10+ SAFETY FEATURES — Overheat protection and safe-locking lid prevent messy kitchen hazards."
    ],
    specs: {
      "Brand": "Instant Pot",
      "Capacity": "6 Quarts",
      "Material": "Stainless Steel, Plastic",
      "Wattage": "1000 watts"
    },
    reviews: [
      { author: "Gordon R.", stars: 5, title: "Essential kitchen appliance", text: "I make perfect bone broths in 2 hours instead of 12. Great slow cooker as well. Easy cleanup." }
    ],
    stock: "in-stock",
    seller: "Instant Brands Store"
  },
  {
    id: "p15",
    title: "Vitamix Explorian E310 Professional-Grade Blender, 48 oz Container - Slate Grey",
    category: "kitchen",
    price: 299.95,
    listPrice: 349.95,
    rating: 4.8,
    ratingCount: 9400,
    images: [
      "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505252585461-04db1ebb846d?w=800&auto=format&fit=crop"
    ],
    description: [
      "TEN VARIABLE SPEEDS — Allows you to refine every texture with culinary precision, from smooth purées to chunky soups.",
      "PULSE FEATURE — Layer coarse chops over smooth purées for chunky salsas or thick vegetable soups.",
      "HIGH-PERFORMANCE MOTOR — Radial cooling fan and thermal protection system keep the motor cool.",
      "SELF-CLEANING FEATURE — With a drop of dish soap and warm water, your Vitamix machine can clean itself in 30 to 60 seconds."
    ],
    specs: {
      "Brand": "Vitamix",
      "Color": "Slate Grey",
      "Material": "BPA-Free Tritan Copolyester",
      "Power": "120V, 50/60 Hz, 11.5 Amps"
    },
    reviews: [
      { author: "SmoothieLover", stars: 5, title: "Unmatched blending power", text: "Blends frozen fruit, kale, seeds without a single lump. Loud but extremely fast. Built like a commercial tank." }
    ],
    stock: "in-stock",
    seller: "Vitamix Authorized Store"
  }
];

// 2. Global State Variables
let cart = JSON.parse(localStorage.getItem('amazon_cart')) || [];
let orders = JSON.parse(localStorage.getItem('amazon_orders')) || [];
let currentUser = JSON.parse(localStorage.getItem('amazon_user')) || null;
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';
let simulatedBalance = parseFloat(localStorage.getItem('amazon_balance')) || 500.00;

// Detailed active state holders
let activeProductDetail = null;
let checkoutStep = 1;
let checkoutAddress = null;
let checkoutPayment = 'balance'; // 'balance' or 'card'

// Carousel state
let carouselIndex = 0;
let carouselInterval = null;

// Countdown Target Timer (Today's Deals resets daily, let's hardcode 8.5 hours remaining dynamically)
let dealsTargetTime = new Date().getTime() + (8 * 60 * 60 * 1000) + (45 * 60 * 1000);

/* ==========================================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Setup standard state components
  initCarousel();
  initCountdown();
  renderProducts();
  renderDealsSpotlight();
  updateHeaderState();
  initTheme();
  
  // Set up all static event bindings
  setupEventBindings();
});

// Theme Selector Control
function initTheme() {
  const toggleCheckbox = document.querySelector('#checkbox');
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleCheckbox.checked = true;
  }
  
  toggleCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
}

// Update balance display in subnav
function updateBalanceDisplay() {
  document.getElementById('simulated-balance').innerText = `$${simulatedBalance.toFixed(2)}`;
}

// Update Navigation welcome notes and Cart quantities
function updateHeaderState() {
  const welcomeText = currentUser ? `Hello, ${currentUser.name}` : "Hello, sign in";
  document.getElementById('user-welcome-label').innerText = welcomeText;
  document.getElementById('sidebar-user-welcome').innerText = currentUser ? `Hello, ${currentUser.name}` : "Hello, Sign In";
  
  // Update simulated balance displays
  updateBalanceDisplay();
  
  // Update Cart badge and animation
  const badge = document.getElementById('cart-badge-count');
  const prevCount = parseInt(badge.innerText) || 0;
  const currentCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  badge.innerText = currentCount;
  
  if (currentCount > prevCount) {
    badge.classList.add('bounce');
    setTimeout(() => {
      badge.classList.remove('bounce');
    }, 400);
  }
}

/* ==========================================================================
   HERO CAROUSEL & SPOTLIGHT TIMERS
   ========================================================================== */
function initCarousel() {
  const track = document.getElementById('carousel-track');
  const slides = Array.from(track.children);
  
  const moveSlide = (direction) => {
    slides[carouselIndex].classList.remove('active');
    if (direction === 'next') {
      carouselIndex = (carouselIndex + 1) % slides.length;
    } else {
      carouselIndex = (carouselIndex - 1 + slides.length) % slides.length;
    }
    slides[carouselIndex].classList.add('active');
  };
  
  // Controls
  document.getElementById('carousel-prev').addEventListener('click', () => {
    moveSlide('prev');
    resetCarouselTimer();
  });
  
  document.getElementById('carousel-next').addEventListener('click', () => {
    moveSlide('next');
    resetCarouselTimer();
  });
  
  // Auto switch
  resetCarouselTimer();

  // CTA triggers inside carousel
  document.querySelectorAll('.hero-cta-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cat = e.target.getAttribute('data-cat');
      setCategoryFilter(cat);
      // Smooth scroll to catalog
      document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function resetCarouselTimer() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(() => {
    document.getElementById('carousel-next').click();
  }, 6000);
}

function initCountdown() {
  const timerLabel = document.getElementById('countdown-timer');
  
  const updateTimer = () => {
    const now = new Date().getTime();
    const diff = dealsTargetTime - now;
    
    if (diff <= 0) {
      dealsTargetTime = new Date().getTime() + (8 * 60 * 60 * 1000); // loop timer
      return;
    }
    
    const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    
    timerLabel.innerText = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  setInterval(updateTimer, 1000);
  updateTimer();
}

/* ==========================================================================
   DYNAMIC RENDER: PRODUCTS CATALOG & DEALS
   ========================================================================== */
function getFilteredProducts() {
  let list = [...PRODUCT_CATALOG];
  
  // Category filter
  if (currentCategory !== 'all') {
    list = list.filter(p => p.category === currentCategory);
  }
  
  // Search query
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    list = list.filter(p => p.title.toLowerCase().includes(q) || 
                           p.category.toLowerCase().includes(q) || 
                           Object.values(p.specs).some(val => val.toLowerCase().includes(q)));
  }
  
  // Sorting
  if (currentSort === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }
  
  return list;
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const activeProducts = getFilteredProducts();
  
  grid.innerHTML = '';
  
  if (activeProducts.length === 0) {
    grid.innerHTML = `
      <div class="empty-orders-view" style="grid-column: 1 / -1;">
        <p>No products match your active search filters.</p>
        <button class="shop-now-btn" onclick="clearAllFilters()">Clear Filters & Search</button>
      </div>
    `;
    return;
  }
  
  activeProducts.forEach(product => {
    // Generate Stars markup
    let starsMarkup = '';
    const fullStars = Math.floor(product.rating);
    const hasHalf = product.rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        starsMarkup += '★';
      } else if (i === fullStars + 1 && hasHalf) {
        starsMarkup += '⯪';
      } else {
        starsMarkup += '☆';
      }
    }
    
    const pctOff = Math.round(((product.listPrice - product.price) / product.listPrice) * 100);
    
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);
    
    card.innerHTML = `
      ${pctOff > 20 ? `<div class="badge-tag">Top Deal</div>` : ''}
      <div class="product-img-holder">
        <img src="${product.images[0]}" alt="${product.title}">
      </div>
      <h3 class="product-info-title">${product.title}</h3>
      <div class="product-rating-box">
        <span class="stars-rating">${starsMarkup}</span>
        <span class="rating-count">${product.ratingCount}</span>
      </div>
      <div class="product-pricing-box">
        <span class="curr-price">$${product.price.toFixed(2)}</span>
        <span class="orig-price">$${product.listPrice.toFixed(2)}</span>
        <span class="savings-badge">(${pctOff}% off)</span>
      </div>
      <div class="prime-delivery-lbl">
        <span class="prime-logo">prime</span>
        <span>FREE Tomorrow</span>
      </div>
      <button class="add-to-cart-card-btn" data-action="quick-add">Add to Cart</button>
    `;
    
    // Grid item Click triggers detail modal
    card.addEventListener('click', (e) => {
      // Prevent detail view modal if clicked "Quick Add" button directly
      if (e.target.getAttribute('data-action') === 'quick-add') {
        e.stopPropagation();
        addToCart(product.id, 1);
        showToast(`Added 1x ${product.title.substring(0, 30)}... to cart.`);
        return;
      }
      openProductDetail(product.id);
    });
    
    grid.appendChild(card);
  });
}

function renderDealsSpotlight() {
  const scroller = document.getElementById('deals-horizontal-scroll');
  scroller.innerHTML = '';
  
  // Seed deals from high discount items
  const deals = PRODUCT_CATALOG.filter(p => p.listPrice - p.price > 30).slice(0, 6);
  
  deals.forEach(deal => {
    const pctOff = Math.round(((deal.listPrice - deal.price) / deal.listPrice) * 100);
    
    const item = document.createElement('div');
    item.className = 'deal-item-card';
    
    item.innerHTML = `
      <div class="deal-img-wrapper">
        <img src="${deal.images[0]}" alt="${deal.title}">
      </div>
      <span class="deal-discount-badge">Up to ${pctOff}% off</span>
      <span class="deal-highlight-lbl">Deal of the Day</span>
      <div class="deal-price-row">
        <span>$${deal.price.toFixed(0)}</span>
        <span class="deal-price-strike">$${deal.listPrice.toFixed(0)}</span>
      </div>
      <div class="deal-title">${deal.title}</div>
    `;
    
    item.addEventListener('click', () => {
      openProductDetail(deal.id);
    });
    
    scroller.appendChild(item);
  });
}

/* ==========================================================================
   PRODUCT DETAIL VIEW MODAL ACTIONS
   ========================================================================== */
function openProductDetail(productId) {
  const product = PRODUCT_CATALOG.find(p => p.id === productId);
  if (!product) return;
  
  activeProductDetail = product;
  
  const modal = document.getElementById('product-detail-modal');
  
  // Bind core textual items
  document.getElementById('modal-title').innerText = product.title;
  document.getElementById('modal-brand').innerText = `Visit the ${product.seller || 'Brand'} Store`;
  document.getElementById('modal-rating-val').innerText = product.rating;
  document.getElementById('modal-review-count').innerText = `${product.ratingCount} global ratings`;
  document.getElementById('modal-seller-name').innerText = product.seller;
  
  // Strikethrough pricing logic
  const pctOff = Math.round(((product.listPrice - product.price) / product.listPrice) * 100);
  document.getElementById('modal-discount-pct').innerText = `-${pctOff}%`;
  
  const priceParts = product.price.toFixed(2).split('.');
  document.getElementById('modal-price-whole').innerText = priceParts[0];
  document.getElementById('modal-price-decimal').innerText = `.${priceParts[1]}`;
  document.getElementById('modal-list-price').innerText = `$${product.listPrice.toFixed(2)}`;
  document.getElementById('modal-sidebar-price').innerText = `$${product.price.toFixed(2)}`;
  
  // Image Setup
  const mainImg = document.getElementById('modal-main-img');
  mainImg.src = product.images[0];
  mainImg.alt = product.title;
  
  const thumbsWrapper = document.getElementById('modal-thumbnail-row');
  thumbsWrapper.innerHTML = '';
  product.images.forEach((imgSrc, idx) => {
    const thumb = document.createElement('button');
    thumb.className = `thumb-btn ${idx === 0 ? 'active' : ''}`;
    thumb.innerHTML = `<img src="${imgSrc}" alt="thumb">`;
    
    thumb.addEventListener('mouseover', () => {
      document.querySelectorAll('.thumb-btn').forEach(btn => btn.classList.remove('active'));
      thumb.classList.add('active');
      mainImg.src = imgSrc;
    });
    
    thumbsWrapper.appendChild(thumb);
  });
  
  // Product Bullets
  const bulletList = document.getElementById('modal-bullets-list');
  bulletList.innerHTML = '';
  product.description.forEach(bullet => {
    const li = document.createElement('li');
    li.innerText = bullet;
    bulletList.appendChild(li);
  });
  
  // Specifications Table
  const specTable = document.getElementById('modal-specs-table');
  specTable.innerHTML = '';
  for (const [key, value] of Object.entries(product.specs)) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="spec-lbl">${key}</td>
      <td class="spec-val">${value}</td>
    `;
    specTable.appendChild(row);
  }
  
  // Rating Star indicators inside modal info
  const starsWrap = document.getElementById('modal-stars-container');
  starsWrap.innerHTML = '';
  let starsMarkup = '';
  const fullStars = Math.floor(product.rating);
  for (let i = 1; i <= 5; i++) {
    starsMarkup += i <= fullStars ? '★' : '☆';
  }
  starsWrap.innerHTML = starsMarkup;
  
  // Reviews List Generator
  document.getElementById('reviews-avg-text').innerText = `${product.rating} out of 5`;
  const reviewAvgStars = document.getElementById('reviews-stars-avg');
  reviewAvgStars.innerHTML = starsMarkup;
  
  const reviewsContainer = document.getElementById('modal-reviews-list');
  reviewsContainer.innerHTML = '';
  product.reviews.forEach(rev => {
    let revStars = '';
    for (let j = 1; j <= 5; j++) {
      revStars += j <= rev.stars ? '★' : '☆';
    }
    const card = document.createElement('div');
    card.className = 'review-post-card';
    card.innerHTML = `
      <div class="review-post-author">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#888"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
        <span>${rev.author}</span>
      </div>
      <div class="review-post-rating">
        <span class="stars-rating" style="color: #f90;">${revStars}</span>
        <span class="title">${rev.title}</span>
      </div>
      <p class="review-post-text">${rev.text}</p>
    `;
    reviewsContainer.appendChild(card);
  });
  
  // Stock display
  const stockIndicator = document.getElementById('modal-stock-status');
  if (product.stock === 'low-stock') {
    stockIndicator.innerText = 'Only 3 left in stock - order soon.';
    stockIndicator.className = 'stock-status low-stock';
  } else {
    stockIndicator.innerText = 'In Stock';
    stockIndicator.className = 'stock-status in-stock';
  }
  
  // Reset Qty drop down
  document.getElementById('modal-qty-select').value = "1";
  
  // Setup tabs default active
  document.querySelectorAll('.tab-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-tab') === 'specs') {
      link.classList.add('active');
    }
  });
  document.querySelectorAll('.tab-content').forEach(cont => {
    cont.classList.remove('active');
    if (cont.id === 'tab-specs') {
      cont.classList.add('active');
    }
  });
  
  // Reveal Backdrop
  modal.classList.remove('hidden');
}

function closeProductDetail() {
  document.getElementById('product-detail-modal').classList.add('hidden');
  activeProductDetail = null;
}

/* ==========================================================================
   CART OPERATIONS & DRAWERS
   ========================================================================== */
function openCartDrawer() {
  renderCartItems();
  document.getElementById('cart-overlay').classList.remove('hidden');
  document.getElementById('cart-drawer').classList.remove('hidden');
}

function closeCartDrawer() {
  document.getElementById('cart-overlay').classList.add('hidden');
  document.getElementById('cart-drawer').classList.add('hidden');
}

function addToCart(productId, qty) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    const product = PRODUCT_CATALOG.find(p => p.id === productId);
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: qty
    });
  }
  
  // Persist State
  localStorage.setItem('amazon_cart', JSON.stringify(cart));
  updateHeaderState();
}

function updateCartQty(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;
  
  item.quantity += delta;
  
  if (item.quantity <= 0) {
    cart = cart.filter(x => x.id !== productId);
  }
  
  localStorage.setItem('amazon_cart', JSON.stringify(cart));
  updateHeaderState();
  renderCartItems();
}

function deleteCartItem(productId) {
  cart = cart.filter(x => x.id !== productId);
  localStorage.setItem('amazon_cart', JSON.stringify(cart));
  updateHeaderState();
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const totalQtyText = document.getElementById('cart-total-qty');
  const totalPriceText = document.getElementById('cart-total-price');
  const checkoutBtn = document.getElementById('cart-checkout-btn');
  const freeShipProgress = document.getElementById('cart-free-shipping');
  const progressBarFill = freeShipProgress.querySelector('.progress-bar-fill');
  const freeShipText = freeShipProgress.querySelector('.free-shipping-text');
  
  container.innerHTML = '';
  
  if (cart.length === 0) {
    // Show empty screen
    container.innerHTML = `
      <div class="empty-cart-message">
        <svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Your Amazon Cart is empty.</p>
        <button class="shop-now-btn" id="cart-shop-now-btn-empty">Shop deals now</button>
      </div>
    `;
    
    // Bind empty screen shop now trigger
    const emptyShopBtn = document.getElementById('cart-shop-now-btn-empty');
    if (emptyShopBtn) {
      emptyShopBtn.addEventListener('click', () => {
        closeCartDrawer();
        document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
      });
    }

    totalQtyText.innerText = '0';
    totalPriceText.innerText = '$0.00';
    checkoutBtn.disabled = true;
    freeShipProgress.style.display = 'none';
    return;
  }
  
  // Render Item Cards
  cart.forEach(item => {
    const card = document.createElement('div');
    card.className = 'cart-item-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" data-action="minus">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" data-action="plus">+</button>
          </div>
          <span class="cart-item-delete-btn" data-action="delete">Delete</span>
        </div>
      </div>
    `;
    
    // Event wiring
    card.querySelector('[data-action="minus"]').addEventListener('click', () => updateCartQty(item.id, -1));
    card.querySelector('[data-action="plus"]').addEventListener('click', () => updateCartQty(item.id, 1));
    card.querySelector('[data-action="delete"]').addEventListener('click', () => deleteCartItem(item.id));
    
    container.appendChild(card);
  });
  
  // Pricing summaries
  const totalQty = cart.reduce((acc, x) => acc + x.quantity, 0);
  const totalPrice = cart.reduce((acc, x) => acc + (x.price * x.quantity), 0);
  
  totalQtyText.innerText = totalQty;
  totalPriceText.innerText = `$${totalPrice.toFixed(2)}`;
  checkoutBtn.disabled = false;
  
  // Free delivery threshold: $50.00
  freeShipProgress.style.display = 'block';
  const threshold = 50.00;
  if (totalPrice >= threshold) {
    progressBarFill.style.width = '100%';
    freeShipText.innerHTML = `🎉 Your order qualifies for <strong>FREE Delivery</strong>!`;
  } else {
    const diff = threshold - totalPrice;
    const pct = (totalPrice / threshold) * 100;
    progressBarFill.style.width = `${pct}%`;
    freeShipText.innerHTML = `Add <strong>$${diff.toFixed(2)}</strong> more for <strong>FREE Delivery</strong>.`;
  }
}

/* ==========================================================================
   LIVE SEARCH FILTER & AUTO-COMPLETE SUGGESTIONS
   ========================================================================== */
function initSearchAutoComplete() {
  const input = document.getElementById('search-input');
  const suggestionsBox = document.getElementById('search-suggestions');
  
  input.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    
    if (q.length === 0) {
      suggestionsBox.classList.add('hidden');
      return;
    }
    
    // Filter matching titles or categories
    const matches = PRODUCT_CATALOG.filter(p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).slice(0, 6);
    
    suggestionsBox.innerHTML = '';
    
    if (matches.length === 0) {
      suggestionsBox.classList.add('hidden');
      return;
    }
    
    matches.forEach(m => {
      // Find highlight range
      const idx = m.title.toLowerCase().indexOf(q);
      let titleHTML = m.title;
      if (idx >= 0) {
        const matchingPart = m.title.substring(idx, idx + q.length);
        titleHTML = m.title.replace(matchingPart, `<strong>${matchingPart}</strong>`);
      }
      
      const row = document.createElement('div');
      row.className = 'suggestion-item';
      row.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 320px;">${titleHTML}</span>
      `;
      
      row.addEventListener('click', () => {
        input.value = m.title;
        suggestionsBox.classList.add('hidden');
        triggerSearch(m.title);
      });
      
      suggestionsBox.appendChild(row);
    });
    
    suggestionsBox.classList.remove('hidden');
  });
  
  // Close suggestions if click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-search-container')) {
      suggestionsBox.classList.add('hidden');
    }
  });
}

function triggerSearch(queryStr) {
  searchQuery = queryStr;
  
  const indicator = document.getElementById('search-result-title');
  const indicatorText = document.getElementById('search-query-text');
  
  if (queryStr.trim() !== '') {
    indicator.classList.remove('hidden');
    indicatorText.innerText = queryStr;
  } else {
    indicator.classList.add('hidden');
  }
  
  // Apply visual category tags if search is global
  renderProducts();
  document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
}

function setCategoryFilter(category) {
  currentCategory = category;
  
  const tag = document.getElementById('active-category-tag');
  const tagName = document.getElementById('active-cat-name');
  
  // Render Subnav Active link indicators
  document.querySelectorAll('.sub-nav-item').forEach(item => {
    item.classList.remove('active-deal');
    const id = item.id.replace('subnav-', '');
    if (id === category) {
      item.classList.add('active-deal');
    }
  });
  
  if (category !== 'all') {
    tag.classList.remove('hidden');
    // Title mapping
    const titles = {
      'deals': "Today's Deals",
      'electronics': 'Electronics',
      'fashion': 'Fashion',
      'kitchen': 'Home & Kitchen',
      'books': 'Books',
      'fitness': 'Fitness & Sports'
    };
    tagName.innerText = titles[category] || category;
  } else {
    tag.classList.add('hidden');
  }
  
  renderProducts();
}

function clearAllFilters() {
  searchQuery = '';
  currentCategory = 'all';
  document.getElementById('search-input').value = '';
  document.getElementById('search-result-title').classList.add('hidden');
  document.getElementById('active-category-tag').classList.add('hidden');
  document.getElementById('search-category').value = 'all';
  
  // Reset Subnav Links Active Deals highlight
  document.querySelectorAll('.sub-nav-item').forEach(item => item.classList.remove('active-deal'));
  document.getElementById('subnav-deals').classList.add('active-deal');
  
  renderProducts();
}

/* ==========================================================================
   USER AUTHENTICATION PIPELINE (SIGN IN / REGISTRATION)
   ========================================================================== */
function openAuthModal() {
  document.getElementById('auth-modal').classList.remove('hidden');
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
}

function setupAuthForms() {
  const loginTab = document.getElementById('tab-login-btn');
  const regTab = document.getElementById('tab-register-btn');
  const loginForm = document.getElementById('login-form');
  const regForm = document.getElementById('register-form');
  
  loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    regTab.classList.remove('active');
    loginForm.classList.remove('hidden');
    regForm.classList.add('hidden');
  });
  
  regTab.addEventListener('click', () => {
    regTab.classList.add('active');
    loginTab.classList.remove('active');
    regForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  });
  
  // Login Submissions
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-password').value;
    
    // Static validation or custom registrations inside localStorage
    let registeredUsers = JSON.parse(localStorage.getItem('registered_users')) || [];
    
    // Seed standard demo user: alex@amazon.com (123456)
    if (email === 'alex@amazon.com' && pass === '123456') {
      currentUser = { name: "Alex Mercer", email: email };
    } else {
      const user = registeredUsers.find(x => x.email === email && x.password === pass);
      if (user) {
        currentUser = { name: user.name, email: user.email };
      } else {
        alert("Invalid Email or Password! Please use the demo credentials or create a new account.");
        return;
      }
    }
    
    // Save state
    localStorage.setItem('amazon_user', JSON.stringify(currentUser));
    updateHeaderState();
    closeAuthModal();
    showToast(`Signed in successfully as ${currentUser.name}!`);
  });
  
  // Registration Submissions
  regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-password').value;
    
    let registeredUsers = JSON.parse(localStorage.getItem('registered_users')) || [];
    
    if (registeredUsers.some(x => x.email === email) || email === 'alex@amazon.com') {
      alert("Email already registered! Try logging in.");
      return;
    }
    
    registeredUsers.push({ name: name, email: email, password: pass });
    localStorage.setItem('registered_users', JSON.stringify(registeredUsers));
    
    // Auto-login registered user
    currentUser = { name: name, email: email };
    localStorage.setItem('amazon_user', JSON.stringify(currentUser));
    
    updateHeaderState();
    closeAuthModal();
    showToast(`Welcome to Amazon, ${name}! Your account was created.`);
  });
}

function handleSignOut() {
  if (confirm("Are you sure you want to sign out?")) {
    currentUser = null;
    localStorage.removeItem('amazon_user');
    updateHeaderState();
    showToast("Signed out successfully.");
  }
}

/* ==========================================================================
   SECURE MULTI-STEP CHECKOUT PORTAL
   ========================================================================== */
function openCheckoutModal() {
  if (!currentUser) {
    alert("Please sign in or create an account to proceed to checkout!");
    openAuthModal();
    return;
  }
  
  if (cart.length === 0) {
    alert("Your shopping cart is empty!");
    return;
  }
  
  // Default step 1 fields
  document.getElementById('ship-fullname').value = currentUser.name;
  
  checkoutStep = 1;
  updateCheckoutStepUI();
  
  document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.add('hidden');
}

function updateCheckoutStepUI() {
  // Step indicators
  document.querySelectorAll('.step-indicator').forEach((ind, idx) => {
    ind.className = 'step-indicator';
    if (idx + 1 === checkoutStep) {
      ind.classList.add('active');
    } else if (idx + 1 < checkoutStep) {
      ind.classList.add('complete');
    }
  });
  
  // Panels
  document.getElementById('checkout-step-1').classList.add('hidden');
  document.getElementById('checkout-step-2').classList.add('hidden');
  document.getElementById('checkout-step-3').classList.add('hidden');
  document.getElementById(`checkout-step-${checkoutStep}`).classList.remove('hidden');
  
  // Summaries
  const itemsPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const isFreeDelivery = itemsPrice >= 50.00;
  const shippingCost = isFreeDelivery ? 0 : 5.99;
  const grandTotal = itemsPrice + shippingCost;
  
  document.getElementById('summary-items-price').innerText = `$${itemsPrice.toFixed(2)}`;
  document.getElementById('summary-shipping-price').innerText = shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`;
  document.getElementById('summary-total-price').innerText = `$${grandTotal.toFixed(2)}`;
  
  if (checkoutStep === 3) {
    renderCheckoutSummary(itemsPrice, shippingCost, grandTotal);
  }
}

function renderCheckoutSummary(itemsPrice, shippingCost, grandTotal) {
  // Address Review
  const addr = `${checkoutAddress.fullname}, ${checkoutAddress.address}, ${checkoutAddress.city}, ${checkoutAddress.state} - ${checkoutAddress.zip}, Ph: ${checkoutAddress.phone}`;
  document.getElementById('review-shipping-address').innerText = addr;
  
  // Payment Review
  const payType = checkoutPayment === 'balance' ? `Amazon Pay Wallet Balance (Available: $${simulatedBalance.toFixed(2)})` : "Credit/Debit Card (Processed Securely)";
  document.getElementById('review-payment-method').innerText = payType;
  
  // Review products lists
  const reviewItemsContainer = document.getElementById('checkout-review-items-list');
  reviewItemsContainer.innerHTML = '';
  
  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'review-item-row';
    row.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="review-item-details">
        <div class="review-item-title">${item.title}</div>
        <div class="review-item-pricing">Qty: ${item.quantity} | Price: $${(item.price * item.quantity).toFixed(2)}</div>
      </div>
    `;
    reviewItemsContainer.appendChild(row);
  });
}

function processAddressSubmit() {
  const fullname = document.getElementById('ship-fullname').value;
  const phone = document.getElementById('ship-phone').value;
  const address = document.getElementById('ship-address').value;
  const city = document.getElementById('ship-city').value;
  const state = document.getElementById('ship-state').value;
  const zip = document.getElementById('ship-zip').value;
  
  if (!fullname || !phone || !address || !city || !state || !zip) {
    alert("Please fill in all the shipping address fields!");
    return;
  }
  
  checkoutAddress = { fullname, phone, address, city, state, zip };
  
  checkoutStep = 2;
  updateCheckoutStepUI();
}

function processPaymentSubmit() {
  const isCard = document.getElementById('pay-card').checked;
  checkoutPayment = isCard ? 'card' : 'balance';
  
  // If wallet balance, check if enough money
  const itemsPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const isFreeDelivery = itemsPrice >= 50.00;
  const shippingCost = isFreeDelivery ? 0 : 5.99;
  const grandTotal = itemsPrice + shippingCost;
  
  if (checkoutPayment === 'balance' && simulatedBalance < grandTotal) {
    alert(`Insufficient Amazon Pay Balance! Order Total is $${grandTotal.toFixed(2)} but you only have $${simulatedBalance.toFixed(2)}. Please choose Credit Card payment.`);
    return;
  }
  
  if (isCard) {
    const cardNum = document.getElementById('card-num').value;
    const cardExp = document.getElementById('card-exp').value;
    const cardCvv = document.getElementById('card-cvv').value;
    
    if (cardNum.length < 15 || cardExp.length < 5 || cardCvv.length < 3) {
      alert("Please fill out valid credit card credentials to continue!");
      return;
    }
  }
  
  checkoutStep = 3;
  updateCheckoutStepUI();
}

function finalizeOrder() {
  // Total pricing
  const itemsPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const isFreeDelivery = itemsPrice >= 50.00;
  const shippingCost = isFreeDelivery ? 0 : 5.99;
  const grandTotal = itemsPrice + shippingCost;
  
  // Confirm and charge
  if (checkoutPayment === 'balance') {
    if (simulatedBalance < grandTotal) {
      alert("Insufficient Balance!");
      return;
    }
    simulatedBalance -= grandTotal;
    localStorage.setItem('amazon_balance', simulatedBalance);
  }
  
  // Show secure loader
  const spinner = document.getElementById('global-spinner');
  spinner.classList.remove('hidden');
  
  setTimeout(() => {
    // Generate simulated order
    const orderId = "OD" + Math.floor(10000000 + Math.random() * 90000000);
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    const newOrder = {
      orderId: orderId,
      date: date,
      items: [...cart],
      total: grandTotal,
      shipping: checkoutAddress,
      payment: checkoutPayment === 'balance' ? 'Amazon Pay Balance' : 'Credit Card'
    };
    
    orders.unshift(newOrder);
    localStorage.setItem('amazon_orders', JSON.stringify(orders));
    
    // Clear cart
    cart = [];
    localStorage.setItem('amazon_cart', JSON.stringify(cart));
    updateHeaderState();
    
    // Close overlays & modals
    spinner.classList.add('hidden');
    closeCheckoutModal();
    closeCartDrawer();
    
    // Trigger success Toast
    showToast(`Order Placed Successfully! Order ID: ${orderId}`);
    
    // Render and open orders history dashboard!
    renderOrders();
    toggleOrdersHistorySection(true);
    
  }, 2200);
}

/* ==========================================================================
   ORDERS HISTORY VIEWS RENDER
   ========================================================================== */
function toggleOrdersHistorySection(show) {
  const shopGrid = document.querySelector('.categories-panel');
  const mainSpotlight = document.querySelector('.deals-spotlight');
  const catalog = document.getElementById('products-section');
  const ordersPanel = document.getElementById('order-history-section');
  const heroSlider = document.querySelector('.hero-carousel-container');
  
  if (show) {
    ordersPanel.classList.remove('hidden');
    shopGrid.classList.add('hidden');
    mainSpotlight.classList.add('hidden');
    catalog.classList.add('hidden');
    heroSlider.classList.add('hidden');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    ordersPanel.classList.add('hidden');
    shopGrid.classList.remove('hidden');
    mainSpotlight.classList.remove('hidden');
    catalog.classList.remove('hidden');
    heroSlider.classList.remove('hidden');
  }
}

function renderOrders() {
  const container = document.getElementById('orders-container');
  container.innerHTML = '';
  
  if (orders.length === 0) {
    container.innerHTML = `
      <div class="empty-orders-view">
        <p>You haven't placed any orders yet.</p>
        <button class="shop-now-btn" id="orders-shop-now">Explore best sellers</button>
      </div>
    `;
    document.getElementById('orders-shop-now').addEventListener('click', () => {
      toggleOrdersHistorySection(false);
    });
    return;
  }
  
  orders.forEach(ord => {
    const card = document.createElement('div');
    card.className = 'order-record-card';
    
    let itemsHTML = '';
    ord.items.forEach(itm => {
      itemsHTML += `
        <div class="order-product-row">
          <img src="${itm.image}" alt="${itm.title}" class="order-product-img">
          <div class="order-product-info">
            <div class="order-product-title">${itm.title}</div>
            <div class="order-product-qty">Quantity: ${itm.quantity}</div>
            <div class="order-product-price">$${itm.price.toFixed(2)}</div>
          </div>
        </div>
      `;
    });
    
    card.innerHTML = `
      <div class="order-record-header">
        <div class="header-cols">
          <div class="header-col">
            <span class="label">Order Placed</span>
            <span class="val">${ord.date}</span>
          </div>
          <div class="header-col">
            <span class="label">Total</span>
            <span class="val">$${ord.total.toFixed(2)}</span>
          </div>
          <div class="header-col">
            <span class="label">Ship To</span>
            <span class="val">${ord.shipping.fullname}</span>
          </div>
        </div>
        <div class="order-id-col">
          <div>ORDER # ${ord.orderId}</div>
          <div>Payment: ${ord.payment}</div>
        </div>
      </div>
      <div class="order-record-body">
        ${itemsHTML}
      </div>
    `;
    container.appendChild(card);
  });
}

/* ==========================================================================
   TOAST MESSAGE CONTROLS
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('custom-toast');
  document.getElementById('toast-message-text').innerText = message;
  
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 4000);
}

/* ==========================================================================
   STATIC EVENT BINDINGS
   ========================================================================== */
function setupEventBindings() {
  // Navigation Logo returns home
  document.getElementById('nav-logo').addEventListener('click', (e) => {
    e.preventDefault();
    clearAllFilters();
    toggleOrdersHistorySection(false);
  });
  
  // Navigation Delivery address displays information details
  document.getElementById('nav-location-btn').addEventListener('click', () => {
    alert("Amazon Clone Shipping Location is currently set to New Delhi, India.");
  });

  // Flag Picker details
  document.getElementById('country-selector-btn').addEventListener('click', () => {
    alert("Language selection: English (EN) - Global US server simulation active.");
  });
  
  // Search Category Select bindings
  document.getElementById('search-category').addEventListener('change', (e) => {
    setCategoryFilter(e.target.value);
  });

  // Search Submission trigger
  document.getElementById('search-form').addEventListener('submit', () => {
    const query = document.getElementById('search-input').value;
    triggerSearch(query);
  });
  
  // Auto suggestion setup
  initSearchAutoComplete();
  
  // Category card lists navigation filter binding
  document.querySelectorAll('.category-card').forEach(card => {
    const cat = card.getAttribute('data-cat');
    if (cat) {
      card.addEventListener('click', () => {
        setCategoryFilter(cat);
        document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
  
  // Active Category Tag clear button
  document.getElementById('clear-cat-filter').addEventListener('click', () => {
    setCategoryFilter('all');
    document.getElementById('search-category').value = 'all';
  });
  
  // Main Catalog sorting selector trigger
  document.getElementById('catalog-sort').addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
  });
  
  // Sidebar Hamburger Drawer slide triggers
  document.getElementById('menu-hamburger-btn').addEventListener('click', () => {
    document.getElementById('sidebar-overlay').classList.remove('hidden');
    document.getElementById('sidebar-drawer').classList.remove('hidden');
  });
  
  document.getElementById('sidebar-close-btn').addEventListener('click', () => {
    document.getElementById('sidebar-overlay').classList.add('hidden');
    document.getElementById('sidebar-drawer').classList.add('hidden');
  });
  
  document.getElementById('sidebar-overlay').addEventListener('click', () => {
    document.getElementById('sidebar-overlay').classList.add('hidden');
    document.getElementById('sidebar-drawer').classList.add('hidden');
  });
  
  // Sidebar department links binding
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = e.target.getAttribute('data-cat');
      if (cat) {
        setCategoryFilter(cat);
        document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
      }
      
      // Special actions
      if (e.target.id === 'sidebar-account-btn') {
        openAuthModal();
      } else if (e.target.id === 'sidebar-orders-btn') {
        renderOrders();
        toggleOrdersHistorySection(true);
      } else if (e.target.id === 'sidebar-signout-btn') {
        handleSignOut();
      }
      
      // Close sidebar
      document.getElementById('sidebar-close-btn').click();
    });
  });
  
  // Cart triggers and slider drawer
  document.getElementById('nav-cart-btn').addEventListener('click', openCartDrawer);
  document.getElementById('cart-close-btn').addEventListener('click', closeCartDrawer);
  document.getElementById('cart-overlay').addEventListener('click', closeCartDrawer);
  
  document.getElementById('cart-checkout-btn').addEventListener('click', () => {
    closeCartDrawer();
    openCheckoutModal();
  });
  
  // Product Detail Modal Closer
  document.getElementById('product-modal-close').addEventListener('click', closeProductDetail);
  document.getElementById('product-detail-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('product-detail-modal')) {
      closeProductDetail();
    }
  });
  
  // Detail Modal Tab selections
  document.querySelectorAll('.tab-link').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      tab.classList.add('active');
      const target = tab.getAttribute('data-tab');
      document.getElementById(`tab-${target}`).classList.add('active');
    });
  });
  
  // Detail Modal Add to Cart & Buy Now buttons
  document.getElementById('modal-add-to-cart-btn').addEventListener('click', () => {
    if (!activeProductDetail) return;
    const qty = parseInt(document.getElementById('modal-qty-select').value) || 1;
    addToCart(activeProductDetail.id, qty);
    closeProductDetail();
    showToast(`Added ${qty} item(s) to your cart.`);
    openCartDrawer();
  });
  
  document.getElementById('modal-buy-now-btn').addEventListener('click', () => {
    if (!activeProductDetail) return;
    const qty = parseInt(document.getElementById('modal-qty-select').value) || 1;
    addToCart(activeProductDetail.id, qty);
    closeProductDetail();
    openCheckoutModal();
  });
  
  // Auth Triggers
  document.getElementById('nav-auth-btn').addEventListener('click', () => {
    if (currentUser) {
      handleSignOut();
    } else {
      openAuthModal();
    }
  });
  
  document.getElementById('auth-modal-close').addEventListener('click', closeAuthModal);
  document.getElementById('auth-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('auth-modal')) {
      closeAuthModal();
    }
  });
  
  // Static Promo sign-in buttons on grid
  document.getElementById('promo-signin-btn').addEventListener('click', openAuthModal);
  document.getElementById('promo-signup-link').addEventListener('click', (e) => {
    e.preventDefault();
    openAuthModal();
    document.getElementById('tab-register-btn').click();
  });
  
  // Auth Form set up
  setupAuthForms();
  
  // Checkout Modal Closers
  document.getElementById('checkout-modal-close').addEventListener('click', closeCheckoutModal);
  
  // Checkout Steps submissions
  document.getElementById('shipping-address-form').addEventListener('submit', processAddressSubmit);
  
  // Credit Card inputs toggle display on step 2
  const cardRadio = document.getElementById('pay-card');
  const balanceRadio = document.getElementById('pay-bal');
  const cardWrapper = document.getElementById('card-fields-wrapper');
  
  cardRadio.addEventListener('change', () => cardWrapper.classList.remove('hidden'));
  balanceRadio.addEventListener('change', () => cardWrapper.classList.add('hidden'));
  
  document.getElementById('pay-back-btn').addEventListener('click', () => {
    checkoutStep = 1;
    updateCheckoutStepUI();
  });
  
  document.getElementById('pay-submit-btn').addEventListener('click', processPaymentSubmit);
  
  document.getElementById('review-back-btn').addEventListener('click', () => {
    checkoutStep = 2;
    updateCheckoutStepUI();
  });
  
  document.getElementById('place-order-btn').addEventListener('click', finalizeOrder);
  
  // Returns & Orders navigations
  document.getElementById('nav-orders-btn').addEventListener('click', () => {
    renderOrders();
    toggleOrdersHistorySection(true);
  });
  
  document.getElementById('back-to-shop-orders').addEventListener('click', () => {
    toggleOrdersHistorySection(false);
  });
  
  // Scroll to top footer helper
  document.getElementById('back-to-top-btn').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Today's deals subnav filter shortcut
  document.getElementById('subnav-deals').addEventListener('click', (e) => {
    e.preventDefault();
    setCategoryFilter('deals');
    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Subnav shortcuts
  ['electronics', 'fashion', 'kitchen', 'books', 'fitness'].forEach(cat => {
    const itm = document.getElementById(`subnav-${cat}`);
    if (itm) {
      itm.addEventListener('click', (e) => {
        e.preventDefault();
        setCategoryFilter(cat);
        document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
      });
    }
  });

  // Subnav customer service / order history shortcut
  document.getElementById('subnav-history').addEventListener('click', (e) => {
    e.preventDefault();
    renderOrders();
    toggleOrdersHistorySection(true);
  });
}
