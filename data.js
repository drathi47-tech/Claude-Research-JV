// =====================================================
// Consumer Trend Radar - Sample Data
// Sub-$250M emerging D2C / consumer brands in India
// Focused on early-stage breakout investment opportunities
// =====================================================

const COMPANIES = [
    {
        id: 'thepantproject',
        name: 'The Pant Project',
        sector: 'fashion',
        sectorLabel: 'Fashion & Apparel',
        website: 'thepantproject.com',
        color: '#3b82f6',
        estValuation: '$15-25M',
    },
    {
        id: 'littlebox',
        name: 'LittleBox',
        sector: 'fashion',
        sectorLabel: 'Fashion & Apparel',
        website: 'littleboxindia.com',
        color: '#ec4899',
        estValuation: '$5-15M',
    },
    {
        id: 'anveshan',
        name: 'Anveshan',
        sector: 'food',
        sectorLabel: 'Food & Beverage',
        website: 'anveshan.farm',
        color: '#f59e0b',
        estValuation: '$20-40M',
    },
    {
        id: 'perfora',
        name: 'Perfora',
        sector: 'health',
        sectorLabel: 'Health & Wellness',
        website: 'perfora.in',
        color: '#06b6d4',
        estValuation: '$10-20M',
    },
    {
        id: 'letsdressup',
        name: "Let's Dress Up",
        sector: 'fashion',
        sectorLabel: 'Fashion & Apparel',
        website: 'letsdressup.in',
        color: '#d946ef',
        estValuation: '$8-18M',
    },
    {
        id: 'snitch',
        name: 'Snitch',
        sector: 'fashion',
        sectorLabel: 'Fashion & Apparel',
        website: 'snitch.co.in',
        color: '#10b981',
        estValuation: '$80-120M',
    },
    {
        id: 'slurrp',
        name: 'Slurrp Farm',
        sector: 'food',
        sectorLabel: 'Food & Beverage',
        website: 'slurrpfarm.com',
        color: '#84cc16',
        estValuation: '$30-50M',
    },
    {
        id: 'arata',
        name: 'Arata',
        sector: 'beauty',
        sectorLabel: 'Beauty & Personal Care',
        website: 'arata.in',
        color: '#a855f7',
        estValuation: '$15-25M',
    },
    {
        id: 'dailyobjects',
        name: 'DailyObjects',
        sector: 'fashion',
        sectorLabel: 'Fashion & Apparel',
        website: 'dailyobjects.com',
        color: '#f97316',
        estValuation: '$40-70M',
    },
    {
        id: 'beminimalist',
        name: 'Be Minimalist',
        sector: 'beauty',
        sectorLabel: 'Beauty & Personal Care',
        website: 'beminimalist.co',
        color: '#14b8a6',
        estValuation: '$80-150M',
    },
    {
        id: 'assemblyfootwear',
        name: 'Assembly',
        sector: 'fashion',
        sectorLabel: 'Fashion & Apparel',
        website: 'assemblyfootwear.com',
        color: '#6366f1',
        estValuation: '$5-10M',
    },
    {
        id: 'auric',
        name: 'Auric',
        sector: 'health',
        sectorLabel: 'Health & Wellness',
        website: 'theauric.com',
        color: '#eab308',
        estValuation: '$10-20M',
    },
    {
        id: 'kapiva',
        name: 'Kapiva',
        sector: 'health',
        sectorLabel: 'Health & Wellness',
        website: 'kapiva.in',
        color: '#22c55e',
        estValuation: '$60-100M',
    },
    {
        id: 'fablestreet',
        name: 'FableStreet',
        sector: 'fashion',
        sectorLabel: 'Fashion & Apparel',
        website: 'fablestreet.com',
        color: '#e11d48',
        estValuation: '$10-20M',
    },
    {
        id: 'bluekaktus',
        name: 'Blue Tokai',
        sector: 'food',
        sectorLabel: 'Food & Beverage',
        website: 'bluetokaicoffee.com',
        color: '#0ea5e9',
        estValuation: '$80-150M',
    },
    {
        id: 'conscent',
        name: 'Conscious Chemist',
        sector: 'beauty',
        sectorLabel: 'Beauty & Personal Care',
        website: 'consciouschemist.com',
        color: '#8b5cf6',
        estValuation: '$5-10M',
    },
];

// --- Helper: generate time-series data ---
function generateTimeSeries(months, baseValue, growthRate, volatility) {
    const data = [];
    let value = baseValue;
    const now = new Date();
    for (let i = months - 1; i >= 0; i--) {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const noise = (Math.random() - 0.4) * volatility * value;
        value = value * (1 + growthRate / 12) + noise;
        value = Math.max(value, baseValue * 0.3);
        data.push({ date: date.toISOString().slice(0, 10), value: Math.round(value) });
    }
    return data;
}

function generateWeeklyTimeSeries(weeks, baseValue, growthRate, volatility) {
    const data = [];
    let value = baseValue;
    const now = new Date();
    for (let i = weeks - 1; i >= 0; i--) {
        const date = new Date(now.getTime() - i * 7 * 24 * 60 * 60 * 1000);
        const noise = (Math.random() - 0.4) * volatility * value;
        value = value * (1 + growthRate / 52) + noise;
        value = Math.max(value, baseValue * 0.2);
        data.push({ date: date.toISOString().slice(0, 10), value: Math.round(value) });
    }
    return data;
}

// --- Google Trends Data ---
const GOOGLE_TRENDS_DATA = {};
COMPANIES.forEach(c => {
    const growth = c.id === 'snitch' ? 0.9 :
                   c.id === 'beminimalist' ? 0.85 :
                   c.id === 'thepantproject' ? 0.75 :
                   c.id === 'anveshan' ? 0.7 :
                   c.id === 'perfora' ? 0.65 :
                   c.id === 'littlebox' ? 0.6 :
                   c.id === 'bluekaktus' ? 0.55 :
                   c.id === 'kapiva' ? 0.5 :
                   c.id === 'slurrp' ? 0.45 :
                   c.id === 'letsdressup' ? 0.6 :
                   c.id === 'dailyobjects' ? 0.35 :
                   0.15 + Math.random() * 0.4;
    const base = c.id === 'snitch' ? 55 :
                 c.id === 'beminimalist' ? 48 :
                 c.id === 'bluekaktus' ? 42 :
                 c.id === 'kapiva' ? 38 :
                 c.id === 'thepantproject' ? 18 :
                 c.id === 'anveshan' ? 22 :
                 c.id === 'littlebox' ? 12 :
                 c.id === 'perfora' ? 15 :
                 8 + Math.random() * 20;
    GOOGLE_TRENDS_DATA[c.id] = {
        timeSeries: generateWeeklyTimeSeries(52, base, growth, 0.15),
        currentIndex: 0,
        change30d: 0,
        change90d: 0,
        peak12m: 0,
        volatility: 0,
        regions: {
            'Maharashtra': Math.round(60 + Math.random() * 40),
            'Karnataka': Math.round(50 + Math.random() * 40),
            'Delhi NCR': Math.round(55 + Math.random() * 40),
            'Tamil Nadu': Math.round(40 + Math.random() * 35),
            'Telangana': Math.round(35 + Math.random() * 30),
            'West Bengal': Math.round(30 + Math.random() * 30),
            'Gujarat': Math.round(25 + Math.random() * 25),
            'Rajasthan': Math.round(20 + Math.random() * 25),
        },
        risingQueries: [],
    };
    const ts = GOOGLE_TRENDS_DATA[c.id].timeSeries;
    GOOGLE_TRENDS_DATA[c.id].currentIndex = ts[ts.length - 1].value;
    GOOGLE_TRENDS_DATA[c.id].peak12m = Math.max(...ts.map(d => d.value));
    const vals = ts.map(d => d.value);
    const mean = vals.reduce((a, b) => a + b) / vals.length;
    GOOGLE_TRENDS_DATA[c.id].volatility = Math.round(
        Math.sqrt(vals.reduce((s, v) => s + (v - mean) ** 2, 0) / vals.length) / mean * 100
    );
    if (ts.length >= 5) {
        GOOGLE_TRENDS_DATA[c.id].change30d = Math.round(
            ((ts[ts.length - 1].value / ts[ts.length - 5].value) - 1) * 100
        );
    }
    if (ts.length >= 13) {
        GOOGLE_TRENDS_DATA[c.id].change90d = Math.round(
            ((ts[ts.length - 1].value / ts[ts.length - 13].value) - 1) * 100
        );
    }
});

// Rising queries
const RISING_QUERIES = {
    thepantproject: [
        { text: 'the pant project review', growth: '+1200%' },
        { text: 'custom pants online india', growth: '+850%' },
        { text: 'the pant project coupon', growth: '+620%' },
        { text: 'pant project shark tank', growth: '+540%' },
        { text: 'best custom trousers india', growth: '+380%' },
    ],
    littlebox: [
        { text: 'littlebox india dresses', growth: '+950%' },
        { text: 'littlebox co-ord sets', growth: '+720%' },
        { text: 'littlebox size guide', growth: '+480%' },
        { text: 'littlebox vs zara', growth: '+350%' },
    ],
    anveshan: [
        { text: 'anveshan ghee review', growth: '+780%' },
        { text: 'anveshan a2 cow ghee', growth: '+650%' },
        { text: 'anveshan honey pure', growth: '+520%' },
        { text: 'farm to fork brands india', growth: '+380%' },
        { text: 'anveshan wild forest honey', growth: '+310%' },
    ],
    perfora: [
        { text: 'perfora toothpaste review', growth: '+1400%' },
        { text: 'perfora electric toothbrush', growth: '+1100%' },
        { text: 'best oral care brand india', growth: '+680%' },
        { text: 'perfora vs colgate', growth: '+450%' },
    ],
    snitch: [
        { text: 'snitch clothing review', growth: '+620%' },
        { text: 'snitch shirts quality', growth: '+480%' },
        { text: 'snitch vs zara men', growth: '+350%' },
        { text: 'snitch new arrivals', growth: '+290%' },
    ],
    beminimalist: [
        { text: 'minimalist salicylic acid', growth: '+580%' },
        { text: 'minimalist retinol review', growth: '+450%' },
        { text: 'be minimalist vs ordinary', growth: '+380%' },
        { text: 'minimalist niacinamide serum', growth: '+320%' },
    ],
    slurrp: [
        { text: 'slurrp farm ragi cookies', growth: '+520%' },
        { text: 'slurrp farm dosa mix review', growth: '+410%' },
        { text: 'healthy kids snacks india', growth: '+350%' },
        { text: 'slurrp farm cereal baby', growth: '+280%' },
    ],
    bluekaktus: [
        { text: 'blue tokai coffee subscription', growth: '+480%' },
        { text: 'blue tokai vienna roast', growth: '+380%' },
        { text: 'best specialty coffee india', growth: '+350%' },
        { text: 'blue tokai near me', growth: '+290%' },
    ],
    kapiva: [
        { text: 'kapiva shilajit review', growth: '+720%' },
        { text: 'kapiva dia free juice', growth: '+550%' },
        { text: 'kapiva ayurveda genuine', growth: '+420%' },
        { text: 'kapiva vs zandu', growth: '+310%' },
    ],
    letsdressup: [
        { text: 'lets dress up saree', growth: '+680%' },
        { text: 'lets dress up lehenga review', growth: '+520%' },
        { text: 'affordable indian ethnic wear', growth: '+380%' },
        { text: 'lets dress up quality', growth: '+290%' },
    ],
    arata: [
        { text: 'arata shampoo review', growth: '+450%' },
        { text: 'arata hair gel natural', growth: '+380%' },
        { text: 'arata vs mamaearth', growth: '+290%' },
        { text: 'plant based hair care india', growth: '+240%' },
    ],
    dailyobjects: [
        { text: 'dailyobjects desk mat review', growth: '+380%' },
        { text: 'dailyobjects laptop sleeve', growth: '+310%' },
        { text: 'dailyobjects phone case quality', growth: '+250%' },
    ],
};
Object.keys(RISING_QUERIES).forEach(k => {
    if (GOOGLE_TRENDS_DATA[k]) {
        GOOGLE_TRENDS_DATA[k].risingQueries = RISING_QUERIES[k];
    }
});

// --- E-commerce Reviews Data with Consumer Summaries ---
const ECOMMERCE_DATA = {};

// Detailed review summaries for each company
const REVIEW_SUMMARIES = {
    thepantproject: {
        amazon: {
            topLikes: [
                'Custom fit is exceptional — feels tailor-made at a fraction of the cost',
                'Fabric quality is premium, holds up well after multiple washes',
                'Easy measurement process through their website',
                'Great range of fabric choices from formals to chinos',
            ],
            topDislikes: [
                'Delivery takes 10-14 days since it\'s made to order',
                'Return/alteration process can be slow',
                'Limited options for women\'s trousers',
                'Pricing on the higher side for some fabrics',
            ],
            summary: 'Customers rave about the custom-fit quality, often comparing it favorably to local tailors. The online measurement system is surprisingly accurate. Main complaints center around delivery time (expected for custom) and limited style range.',
        },
        myntra: {
            topLikes: [
                'Perfect fit — no alterations needed',
                'Professional look, great for office wear',
                'Fabric doesn\'t wrinkle easily',
            ],
            topDislikes: [
                'Not available for quick delivery',
                'Some color options look different in person',
                'Wish they had more casual styles',
            ],
            summary: 'Myntra shoppers love the fit guarantee. Repeat purchase rate appears very high. Complaints are minor — mostly around color accuracy in photos vs reality.',
        },
    },
    littlebox: {
        amazon: {
            topLikes: [
                'Trendy designs that look straight off Instagram',
                'Great co-ord sets and matching outfits',
                'Affordable pricing for the style quotient',
                'Fun packaging — feels like a gift',
            ],
            topDislikes: [
                'Sizing can be inconsistent across collections',
                'Some fabrics feel thin / not durable for the price',
                'Limited plus-size options',
                'Stitching quality varies by product',
            ],
            summary: 'Huge hit with Gen-Z buyers for its Instagram-worthy designs and affordable trend-forward fashion. Repeat buyers mention addictive shopping experience. Quality concerns exist but are tolerated given the price-to-style ratio.',
        },
        myntra: {
            topLikes: [
                'Very fashionable pieces at amazing prices',
                'Co-ord sets are the bestsellers for a reason',
                'Quick to pick up on trends',
            ],
            topDislikes: [
                'Sizing runs small — need to size up',
                'Material could be better quality',
                'Some pieces look different from photos',
            ],
            summary: 'Strong following among young women on Myntra. Co-ord sets and bodycon dresses are standout categories. Customers wish for better size consistency.',
        },
    },
    anveshan: {
        amazon: {
            topLikes: [
                'A2 cow ghee tastes like homemade — incredible aroma',
                'Honey is genuinely pure, passes the quality test',
                'Farm-to-table transparency with QR code traceability',
                'Cold-pressed oils are noticeably fresher than store brands',
                'Supporting farmers directly feels good',
            ],
            topDislikes: [
                'Premium pricing — significantly costlier than regular brands',
                'Ghee jar packaging could be improved',
                'Limited availability in local stores',
                'Some products go out of stock frequently',
            ],
            summary: 'Customers are passionate advocates — the ghee and honey have cult-like followings. The farm traceability feature via QR codes is a major trust builder. Price sensitivity is the main barrier, but repeat purchase rate is very high among converts.',
        },
        myntra: {
            topLikes: [
                'Not applicable — primarily a food/grocery brand',
            ],
            topDislikes: [
                'Not applicable — primarily a food/grocery brand',
            ],
            summary: 'Anveshan is primarily sold on Amazon, BigBasket, and their own website. Limited presence on fashion-focused Myntra.',
        },
    },
    perfora: {
        amazon: {
            topLikes: [
                'Electric toothbrush quality rivals Oral-B at half the price',
                'Toothpaste ingredients are clean and effective',
                'Mouth freshness lasts much longer than regular brands',
                'Beautiful packaging — feels premium',
                'Probiotic mouthwash is a game-changer',
            ],
            topDislikes: [
                'Electric brush battery could last longer',
                'Toothpaste flavor is too mild for some',
                'Replacement brush heads are hard to find',
                'Pricey compared to Colgate/Sensodyne',
            ],
            summary: 'Perfora has built a passionate community around premium oral care. The electric toothbrush is their hero product with excellent reviews. Consumers love the science-backed, clean ingredient approach. Main pushback is on pricing vs mass-market alternatives.',
        },
        myntra: {
            topLikes: [
                'Premium personal care gifting option',
                'Aesthetic product design',
            ],
            topDislikes: [
                'Limited product range on Myntra',
                'Better deals available on their own website',
            ],
            summary: 'Small but growing presence on Myntra, primarily in the personal care gifting segment.',
        },
    },
    snitch: {
        amazon: {
            topLikes: [
                'Incredible value — Zara-like designs at 1/4th the price',
                'Fit is on point for Indian body types',
                'Fabric quality keeps improving with every order',
                'Huge variety of printed shirts and casual wear',
                'Fast fashion done right for men',
            ],
            topDislikes: [
                'Some products pill after a few washes',
                'Oversized fits can be too oversized',
                'Color fading in dark-colored shirts after 5-6 washes',
                'Customer service response can be slow',
            ],
            summary: 'Snitch has become the go-to brand for young men wanting trendy fashion at affordable prices. Strong word-of-mouth growth. Quality has improved significantly from early days. The brand is now seen as a credible Zara alternative for Indian men.',
        },
        myntra: {
            topLikes: [
                'Best men\'s casual wear brand on Myntra currently',
                'Printed shirts and co-ords are bestsellers',
                'True to size, great fit',
                'Value for money is unmatched',
            ],
            topDislikes: [
                'Popular sizes sell out very quickly',
                'Returns can be delayed during sales',
                'Wish they had a formal wear line',
            ],
            summary: 'Dominating men\'s casual wear on Myntra with phenomenal growth. Reviews consistently highlight the price-to-design ratio. Repeat purchase behavior is extremely strong — many customers buy 5+ items per order.',
        },
    },
    beminimalist: {
        amazon: {
            topLikes: [
                'Transparent ingredient lists — you know exactly what you\'re getting',
                'Salicylic acid serum cleared acne in weeks',
                'Affordable compared to The Ordinary (imported)',
                'Scientific approach to skincare is refreshing',
                'Retinol serum shows visible results within a month',
            ],
            topDislikes: [
                'Some products cause initial purging / irritation',
                'Packaging leaks during transit occasionally',
                'Vitamin C serum oxidizes quickly once opened',
                'Results take time — not an overnight fix',
            ],
            summary: 'Be Minimalist has essentially become "The Ordinary of India." Science-backed, affordable, and transparent. The brand has a cult following among skincare enthusiasts. Niacinamide and Salicylic acid serums are hero products. Some users report initial adjustment period.',
        },
        myntra: {
            topLikes: [
                'Genuine alternative to expensive imported serums',
                'Works well for Indian skin types',
                'Great starter skincare brand',
            ],
            topDislikes: [
                'Some products not always in stock',
                'Need better guidance on product combinations',
            ],
            summary: 'Strong and growing presence on Myntra. Frequently appears in beauty bestseller lists. Dermatologist-recommended positioning is working well.',
        },
    },
    slurrp: {
        amazon: {
            topLikes: [
                'Kids actually love the taste — rare for healthy food',
                'Ragi and millet-based snacks feel genuinely nutritious',
                'No junk ingredients — parents trust the label',
                'Dosa mix and pancake mix are breakfast lifesavers',
                'Good variety of flavors for picky eaters',
            ],
            topDislikes: [
                'Expensive for everyday snacking',
                'Portion sizes are small for the price',
                'Some cookies crumble too easily',
                'Wish they had more savory options',
            ],
            summary: 'Slurrp Farm has won over health-conscious parents who struggle to find genuinely healthy kids\' snacks. The millet-based positioning is unique and resonates strongly. Price is the barrier to switching from regular snacks entirely, but repeat purchases are high.',
        },
        myntra: {
            topLikes: ['Not applicable — food brand'],
            topDislikes: ['Not applicable — food brand'],
            summary: 'Slurrp Farm is a food brand, not available on Myntra. Sold on Amazon, BigBasket, and their own website.',
        },
    },
    arata: {
        amazon: {
            topLikes: [
                'Truly plant-based — no hidden chemicals',
                'Hair gel provides hold without stiffness',
                'Shampoo leaves hair soft without residue',
                'Eco-friendly packaging is a great touch',
                'Gentle enough for color-treated hair',
            ],
            topDislikes: [
                'Products are expensive for the quantity',
                'Hair serum runs out very fast',
                'Scent is too subtle for some users',
                'Doesn\'t lather as much as chemical shampoos',
            ],
            summary: 'Arata has carved a niche as the premium plant-based personal care brand. Customers switching from chemical products report positive hair health changes. The no-lather concern is common but educated buyers understand and accept it.',
        },
        myntra: {
            topLikes: [
                'Good discovery via Myntra beauty section',
                'Clean beauty credentials are genuine',
            ],
            topDislikes: [
                'Limited shade range for styling products',
                'Price feels high for first-time buyers',
            ],
            summary: 'Growing discovery through Myntra\'s clean beauty curation. Appeals to the conscious consumer segment.',
        },
    },
    dailyobjects: {
        amazon: {
            topLikes: [
                'Desk mats and laptop sleeves are beautifully designed',
                'Phone cases are slim yet protective',
                'Unique artist collaborations and designs',
                'Great gifting option — premium packaging',
            ],
            topDislikes: [
                'Pricing is steep for phone cases',
                'Some designs fade with heavy use',
                'Customer service could be more responsive',
                'Laptop sleeves lack padding',
            ],
            summary: 'DailyObjects has positioned itself as the lifestyle accessories brand for design-conscious professionals. Desk accessories and tech cases are the strongest categories. The design variety is unmatched, but price-quality perception varies.',
        },
        myntra: {
            topLikes: [
                'Stylish bags and sleeves available',
                'Great prints and patterns',
            ],
            topDislikes: [
                'Limited product range compared to their website',
                'Expensive for fashion accessories',
            ],
            summary: 'Select products available on Myntra, mainly bags and sleeves. Most customers prefer buying directly from DailyObjects website for full range.',
        },
    },
    letsdressup: {
        amazon: {
            topLikes: [
                'Affordable ethnic wear that looks expensive',
                'Lehengas and sarees perfect for wedding season',
                'Color accuracy is good — matches photos well',
                'Trendy Indo-western fusion pieces',
            ],
            topDislikes: [
                'Fabric could be higher quality for some products',
                'Blouse fitting is often off',
                'Heavy work pieces are fragile',
                'Limited exchange options',
            ],
            summary: 'Let\'s Dress Up is winning the affordable ethnic wear segment. Wedding and festive season drives massive sales spikes. Young women love the Instagram-worthy designs at accessible prices. Quality is acceptable for the price point.',
        },
        myntra: {
            topLikes: [
                'Festive collection is a standout',
                'Great for college events and sangeets',
                'Affordable compared to ethnic wear brands',
            ],
            topDislikes: [
                'Some embellishments come loose',
                'Need better size guides for lehengas',
            ],
            summary: 'Strong seasonal performer on Myntra. Especially popular during Diwali and wedding season. Price-to-design ratio is the key selling point.',
        },
    },
    assemblyfootwear: {
        amazon: {
            topLikes: [
                'Minimalist sneaker design is classy',
                'Extremely comfortable for all-day wear',
                'Quality leather at an accessible price point',
                'Versatile — works with casuals and semi-formals',
            ],
            topDislikes: [
                'Limited color and style options',
                'Sole wears down faster than expected',
                'Break-in period can be uncomfortable',
                'Sizing runs slightly large',
            ],
            summary: 'Assembly is building a quiet following among men who want clean, minimalist sneakers. The leather quality surprises buyers at the price point. Small product range is both a limitation and a brand strength (focused curation).',
        },
        myntra: {
            topLikes: [
                'Clean aesthetic stands out among clutter',
                'Good quality for the price segment',
            ],
            topDislikes: [
                'Very few styles available',
                'Not well-known yet — hard to find',
            ],
            summary: 'Early presence on Myntra. The minimalist positioning differentiates them from the crowded sneaker market, but awareness is still low.',
        },
    },
    auric: {
        amazon: {
            topLikes: [
                'Ayurvedic beverages that actually taste good',
                'Women\'s wellness drinks address real health gaps',
                'Natural ingredients with no artificial sweeteners',
                'Ready-to-drink format is super convenient',
            ],
            topDislikes: [
                'Expensive for regular consumption',
                'Taste can be too herbal for some',
                'Results are gradual — not immediately noticeable',
                'Glass bottles are heavy to carry',
            ],
            summary: 'Auric has found product-market fit in Ayurvedic wellness drinks for urban millennials. The ready-to-drink format solves the inconvenience problem of traditional Ayurveda. Women\'s health range is their fastest growing category.',
        },
        myntra: {
            topLikes: ['Not applicable — beverage brand'],
            topDislikes: ['Not applicable — beverage brand'],
            summary: 'Auric is a beverage brand, not available on Myntra.',
        },
    },
    kapiva: {
        amazon: {
            topLikes: [
                'Shilajit resin is potent and shows results in 2-3 weeks',
                'Dia Free juice is popular among diabetic consumers',
                'Genuine Ayurvedic formulations backed by research',
                'Good variety of traditional health products modernized',
                'Aloe Vera juice is a bestseller for digestion',
            ],
            topDislikes: [
                'Some juices taste very bitter',
                'Pricing has increased substantially',
                'Packaging leaks during shipping occasionally',
                'Need to take consistently for weeks to see results',
            ],
            summary: 'Kapiva is winning in the modern Ayurveda space with products that bridge traditional knowledge and contemporary formats. Shilajit and Dia Free are hero products. Trust factor is high due to ingredient transparency.',
        },
        myntra: {
            topLikes: ['Not applicable — health/wellness brand'],
            topDislikes: ['Not applicable — health/wellness brand'],
            summary: 'Kapiva is primarily available on Amazon, Flipkart, and their own website.',
        },
    },
    fablestreet: {
        amazon: {
            topLikes: [
                'Work wear that flatters Indian women\'s body types',
                'Fabric quality is excellent for the price',
                'Size-inclusive range is appreciated',
                'Wrinkle-resistant fabric perfect for office',
            ],
            topDislikes: [
                'Limited casual wear — mostly formal/work',
                'Some colors look different online vs in person',
                'Wish they had more frequent new launches',
                'Delivery time is longer than expected',
            ],
            summary: 'FableStreet has nailed workwear for Indian women — a massively underserved segment. The fit engineering for Indian body proportions is their moat. Customers who discover them become loyal repeat buyers.',
        },
        myntra: {
            topLikes: [
                'Best work trousers for women on Myntra',
                'Fits better than international brands for Indian sizes',
                'Professional yet stylish designs',
            ],
            topDislikes: [
                'Limited styles compared to their website',
                'Premium pricing segment',
            ],
            summary: 'Growing steadily on Myntra in the women\'s workwear niche. Strong repeat purchase signals and high ratings.',
        },
    },
    bluekaktus: {
        amazon: {
            topLikes: [
                'Coffee beans are incredibly fresh — roasted to order',
                'Vienna roast is smooth with no bitterness',
                'Subscription model ensures you never run out',
                'Single-origin options for coffee enthusiasts',
                'Pour-over packs are perfect for travel',
            ],
            topDislikes: [
                'Expensive for daily consumption at ~Rs 800+/250g',
                'Some blends are too acidic for Indian taste preferences',
                'Delivery delays during festive seasons',
                'Bag resealability could be improved',
            ],
            summary: 'Blue Tokai has created the specialty coffee category in India single-handedly. Coffee purists swear by the freshness and single-origin offerings. The brand is expanding cafes rapidly while maintaining online loyalty. Price is the main barrier to mass adoption.',
        },
        myntra: {
            topLikes: ['Not applicable — food/beverage brand'],
            topDislikes: ['Not applicable — food/beverage brand'],
            summary: 'Blue Tokai is a coffee brand, not available on Myntra. Sold on Amazon, their website, and physical cafes.',
        },
    },
    conscent: {
        amazon: {
            topLikes: [
                'Clean ingredient formulations that actually work',
                'SPF moisturizers are lightweight and non-greasy',
                'Vitamin C serum shows visible brightening',
                'Affordable entry into clean beauty',
            ],
            topDislikes: [
                'Brand awareness is still very low',
                'Some products have short shelf life',
                'Limited shade range for tinted products',
                'Packaging feels basic for a premium positioning',
            ],
            summary: 'Conscious Chemist is an emerging clean beauty brand gaining traction among ingredient-conscious consumers. Products deliver results but the brand needs more awareness. Early adopters are very vocal advocates.',
        },
        myntra: {
            topLikes: [
                'Discovered through Myntra beauty curation',
                'Good for sensitive skin types',
            ],
            topDislikes: [
                'Hard to find on the platform — needs better visibility',
                'Limited reviews make it hard to trust initially',
            ],
            summary: 'Very early presence on Myntra. The clean beauty positioning aligns with Myntra\'s curation efforts but needs more critical mass of reviews.',
        },
    },
};

COMPANIES.forEach(c => {
    const amazonBase = c.id === 'snitch' ? 2800 :
                       c.id === 'beminimalist' ? 2200 :
                       c.id === 'kapiva' ? 1800 :
                       c.id === 'bluekaktus' ? 1200 :
                       c.id === 'dailyobjects' ? 900 :
                       c.id === 'anveshan' ? 850 :
                       c.id === 'slurrp' ? 700 :
                       c.id === 'perfora' ? 600 :
                       c.id === 'thepantproject' ? 400 :
                       c.id === 'littlebox' ? 350 :
                       150 + Math.random() * 500;
    const myntraBase = c.sector === 'fashion' ? 500 + Math.random() * 1200 :
                       c.sector === 'beauty' ? 300 + Math.random() * 800 : 50 + Math.random() * 200;

    ECOMMERCE_DATA[c.id] = {
        amazon: {
            totalReviews: Math.round(amazonBase * 6),
            avgRating: parseFloat((3.7 + Math.random() * 0.8).toFixed(1)),
            ratingChange: parseFloat((Math.random() * 0.5 - 0.1).toFixed(1)),
            reviewVelocity: Math.round(amazonBase / 4),
            sentiment: Math.round(62 + Math.random() * 25),
            reviewTimeSeries: generateWeeklyTimeSeries(26, amazonBase / 4, 0.35, 0.25),
            ratingTimeSeries: generateWeeklyTimeSeries(26, 3.8, 0.05, 0.02).map(d => ({
                ...d, value: parseFloat(Math.min(5, Math.max(3, d.value / 10 + 3)).toFixed(1))
            })),
        },
        myntra: {
            totalReviews: Math.round(myntraBase * 5),
            avgRating: parseFloat((3.6 + Math.random() * 0.9).toFixed(1)),
            ratingChange: parseFloat((Math.random() * 0.4 - 0.1).toFixed(1)),
            reviewVelocity: Math.round(myntraBase / 4),
            sentiment: Math.round(58 + Math.random() * 28),
            reviewTimeSeries: generateWeeklyTimeSeries(26, myntraBase / 4, 0.25, 0.3),
            ratingTimeSeries: generateWeeklyTimeSeries(26, 3.7, 0.04, 0.03).map(d => ({
                ...d, value: parseFloat(Math.min(5, Math.max(3, d.value / 10 + 3)).toFixed(1))
            })),
        },
        reviewSummary: REVIEW_SUMMARIES[c.id] || {
            amazon: {
                topLikes: ['Good product quality', 'Value for money', 'Reliable delivery'],
                topDislikes: ['Could improve packaging', 'Limited options'],
                summary: 'Generally positive reviews with a growing customer base.',
            },
            myntra: {
                topLikes: ['Convenient shopping experience', 'Good product range'],
                topDislikes: ['Limited reviews available'],
                summary: 'Early presence on Myntra with growing review volume.',
            },
        },
    };
});

const REVIEW_KEYWORDS = {
    positive: [
        { text: 'great quality', size: 22, color: '#10b981' },
        { text: 'value for money', size: 20, color: '#10b981' },
        { text: 'clean ingredients', size: 19, color: '#10b981' },
        { text: 'perfect fit', size: 18, color: '#10b981' },
        { text: 'premium feel', size: 17, color: '#10b981' },
        { text: 'love the taste', size: 16, color: '#10b981' },
        { text: 'highly recommend', size: 19, color: '#10b981' },
        { text: 'visible results', size: 17, color: '#10b981' },
        { text: 'farm fresh', size: 16, color: '#10b981' },
        { text: 'supports farmers', size: 15, color: '#10b981' },
    ],
    negative: [
        { text: 'overpriced', size: 16, color: '#ef4444' },
        { text: 'sizing issues', size: 15, color: '#ef4444' },
        { text: 'slow delivery', size: 14, color: '#ef4444' },
        { text: 'quality inconsistent', size: 13, color: '#ef4444' },
        { text: 'out of stock often', size: 12, color: '#ef4444' },
    ],
    neutral: [
        { text: 'decent product', size: 13, color: '#6b7280' },
        { text: 'average packaging', size: 12, color: '#6b7280' },
        { text: 'takes time to show results', size: 11, color: '#6b7280' },
    ],
};

// --- Website Traffic Data ---
const TRAFFIC_DATA = {};
COMPANIES.forEach(c => {
    const base = c.id === 'snitch' ? 1800000 :
                 c.id === 'beminimalist' ? 1200000 :
                 c.id === 'bluekaktus' ? 950000 :
                 c.id === 'kapiva' ? 680000 :
                 c.id === 'dailyobjects' ? 520000 :
                 c.id === 'thepantproject' ? 180000 :
                 c.id === 'anveshan' ? 250000 :
                 c.id === 'littlebox' ? 140000 :
                 c.id === 'perfora' ? 220000 :
                 c.id === 'slurrp' ? 310000 :
                 c.id === 'letsdressup' ? 160000 :
                 c.id === 'fablestreet' ? 190000 :
                 60000 + Math.random() * 200000;
    const growth = c.id === 'snitch' ? 0.9 :
                   c.id === 'thepantproject' ? 0.85 :
                   c.id === 'perfora' ? 0.8 :
                   c.id === 'littlebox' ? 0.75 :
                   c.id === 'anveshan' ? 0.7 :
                   c.id === 'beminimalist' ? 0.55 :
                   c.id === 'letsdressup' ? 0.65 :
                   0.1 + Math.random() * 0.4;

    TRAFFIC_DATA[c.id] = {
        monthlyVisits: generateTimeSeries(12, base, growth, 0.2),
        bounceRate: Math.round(28 + Math.random() * 20),
        avgDuration: `${Math.floor(2 + Math.random() * 4)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
        pagesPerVisit: parseFloat((2 + Math.random() * 4).toFixed(1)),
        sources: {
            'Direct': Math.round(20 + Math.random() * 20),
            'Organic Search': Math.round(25 + Math.random() * 20),
            'Paid Search': Math.round(10 + Math.random() * 15),
            'Social': Math.round(8 + Math.random() * 15),
            'Referral': Math.round(5 + Math.random() * 10),
            'Email': Math.round(3 + Math.random() * 8),
        },
        momGrowth: 0,
    };
    const visits = TRAFFIC_DATA[c.id].monthlyVisits;
    if (visits.length >= 2) {
        TRAFFIC_DATA[c.id].momGrowth = Math.round(
            ((visits[visits.length - 1].value / visits[visits.length - 2].value) - 1) * 100
        );
    }
});

// --- Social Media Data ---
const SOCIAL_DATA = {};
COMPANIES.forEach(c => {
    const redditBase = c.id === 'snitch' ? 140 :
                       c.id === 'beminimalist' ? 160 :
                       c.id === 'thepantproject' ? 85 :
                       c.id === 'anveshan' ? 70 :
                       c.id === 'perfora' ? 55 :
                       c.id === 'bluekaktus' ? 90 :
                       c.id === 'kapiva' ? 60 :
                       c.id === 'littlebox' ? 45 :
                       10 + Math.random() * 50;
    const igBase = c.id === 'snitch' ? 1200 :
                   c.id === 'littlebox' ? 950 :
                   c.id === 'beminimalist' ? 880 :
                   c.id === 'letsdressup' ? 720 :
                   c.id === 'thepantproject' ? 450 :
                   c.id === 'anveshan' ? 380 :
                   c.id === 'perfora' ? 320 :
                   100 + Math.random() * 400;

    SOCIAL_DATA[c.id] = {
        reddit: {
            mentions: Math.round(redditBase * 3),
            mentionsTrend: generateWeeklyTimeSeries(12, redditBase, 0.5, 0.3),
            sentiment: Math.round(58 + Math.random() * 30),
            topSubreddits: ['r/IndianSkincareAddicts', 'r/india', 'r/indiashopping', 'r/IndianFashionAddicts'],
        },
        instagram: {
            mentions: Math.round(igBase * 4),
            mentionsTrend: generateWeeklyTimeSeries(12, igBase, 0.4, 0.25),
            sentiment: Math.round(62 + Math.random() * 25),
            engagementRate: parseFloat((2.5 + Math.random() * 5).toFixed(1)),
        },
        viralScore: Math.round(25 + Math.random() * 75),
    };
});

// --- Social Feed Posts (sample) ---
const SOCIAL_POSTS = [
    {
        source: 'reddit',
        subreddit: 'r/IndianFashionAddicts',
        date: '2026-02-16',
        content: 'The Pant Project custom chinos review — I\'m blown away. Measured myself using their website guide, pants arrived in 12 days. Fit is PERFECT. At ~Rs 2000 for custom fit, this is insane value. Already ordered 3 more.',
        upvotes: 892,
        comments: 234,
        company: 'thepantproject',
    },
    {
        source: 'instagram',
        date: '2026-02-15',
        content: 'LittleBox haul alert! Got 4 co-ord sets for under 5K total. Each one looks like it could be from Zara. The lavender ribbed set is absolutely gorgeous. This brand is seriously underrated. @littleboxindia',
        likes: 5210,
        comments: 387,
        company: 'littlebox',
    },
    {
        source: 'reddit',
        subreddit: 'r/india',
        date: '2026-02-14',
        content: 'Anveshan A2 cow ghee is the real deal. Bought it skeptically after seeing it on Shark Tank. The taste and aroma are identical to what my grandmother makes in the village. QR code shows exactly which farm it came from. Premium price but worth every rupee.',
        upvotes: 1243,
        comments: 312,
        company: 'anveshan',
    },
    {
        source: 'reddit',
        subreddit: 'r/IndianSkincareAddicts',
        date: '2026-02-13',
        content: 'Perfora probiotic mouthwash + their electric toothbrush combo has completely transformed my oral care routine. 2 months in and my dentist actually commented on the improvement. Why is nobody talking about this brand more?',
        upvotes: 678,
        comments: 189,
        company: 'perfora',
    },
    {
        source: 'instagram',
        date: '2026-02-15',
        content: 'Snitch printed shirt collection just dropped and I already bought 5 pieces. The fit, the fabric, the designs — all for under Rs 800 each. H&M and Zara are shaking. This brand is going to be HUGE. @snaborern_official',
        likes: 8934,
        comments: 621,
        company: 'snitch',
    },
    {
        source: 'reddit',
        subreddit: 'r/IndianSkincareAddicts',
        date: '2026-02-12',
        content: 'Be Minimalist 10% Niacinamide + 1% Zinc serum review after 6 months: dark spots faded by 70%, texture improved dramatically. At Rs 349, this is genuinely comparable to The Ordinary at 1/5th the price. Indian skincare has grown up.',
        upvotes: 1567,
        comments: 423,
        company: 'beminimalist',
    },
    {
        source: 'instagram',
        date: '2026-02-14',
        content: 'Slurrp Farm ragi cookies are my 3-year-old\'s favourite snack and I don\'t feel guilty about it at all. No maida, no refined sugar, just pure ragi goodness. Every parent needs to know about this brand! @slurrpfarm',
        likes: 3421,
        comments: 267,
        company: 'slurrp',
    },
    {
        source: 'reddit',
        subreddit: 'r/indiashopping',
        date: '2026-02-11',
        content: 'Blue Tokai\'s Attikan Estate single-origin pour-over is the best coffee I\'ve had at home. Yes it\'s expensive, but if you spend Rs 200/day at Starbucks, this works out cheaper and tastes infinitely better.',
        upvotes: 789,
        comments: 201,
        company: 'bluekaktus',
    },
    {
        source: 'instagram',
        date: '2026-02-13',
        content: 'Let\'s Dress Up sangeet outfit for 2.5K?! I paid 25K for something similar from a boutique for my last wedding. This brand is disrupting ethnic wear for young Indians. @letsdressup.in',
        likes: 6712,
        comments: 489,
        company: 'letsdressup',
    },
    {
        source: 'reddit',
        subreddit: 'r/india',
        date: '2026-02-10',
        content: 'Kapiva Shilajit resin — 1 month update. Energy levels are noticeably higher, gym recovery is better. The taste is... acquired. But it works. Ayurveda is having a genuine renaissance in India and brands like Kapiva are leading it.',
        upvotes: 534,
        comments: 167,
        company: 'kapiva',
    },
];

// --- Composite / Breakout Score ---
function calculateCompositeScore(companyId) {
    const gt = GOOGLE_TRENDS_DATA[companyId];
    const ec = ECOMMERCE_DATA[companyId];
    const tr = TRAFFIC_DATA[companyId];
    const so = SOCIAL_DATA[companyId];

    const googleScore = Math.min(100, gt.currentIndex);
    const reviewScore = Math.min(100, (ec.amazon.sentiment + ec.myntra.sentiment) / 2);
    const trafficScore = Math.min(100, Math.max(0, 50 + tr.momGrowth));
    const socialScore = Math.min(100, so.viralScore);

    const composite = Math.round(
        googleScore * 0.25 +
        reviewScore * 0.20 +
        trafficScore * 0.30 +
        socialScore * 0.25
    );

    return {
        composite,
        google: Math.round(googleScore),
        reviews: Math.round(reviewScore),
        traffic: Math.round(trafficScore),
        social: Math.round(socialScore),
    };
}

const COMPOSITE_SCORES = {};
COMPANIES.forEach(c => {
    COMPOSITE_SCORES[c.id] = calculateCompositeScore(c.id);
});

// Determine signals
function getSignal(companyId) {
    const score = COMPOSITE_SCORES[companyId];
    const gt = GOOGLE_TRENDS_DATA[companyId];
    const tr = TRAFFIC_DATA[companyId];

    const strongSignals = [
        gt.change30d > 20,
        score.reviews > 70,
        tr.momGrowth > 25,
        score.social > 60,
    ].filter(Boolean).length;

    if (strongSignals >= 3) return 'breakout';
    if (strongSignals >= 2 || score.composite > 65) return 'trending';
    if (score.composite > 45) return 'watch';
    return 'declining';
}

const COMPANY_SIGNALS = {};
COMPANIES.forEach(c => {
    COMPANY_SIGNALS[c.id] = getSignal(c.id);
});
