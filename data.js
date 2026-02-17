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

// --- Social Commentary Summaries (Reddit / Instagram / LinkedIn per company) ---
const SOCIAL_SUMMARIES = {
    thepantproject: {
        reddit: {
            summary: 'Reddit users are overwhelmingly positive about The Pant Project\'s custom-fit model. r/IndianFashionAddicts has multiple viral threads recommending the brand. Discussion has evolved from "is this legit?" to "which fabric should I pick next?"',
            topLikes: ['Custom fit accuracy is praised repeatedly', 'Price-to-quality ratio vs local tailors', 'Easy online measurement process', 'Good fabric variety for work and casual'],
            topDislikes: ['Delivery time (10-14 days) frustrates impatient buyers', 'Limited women\'s range mentioned often', 'Return process for fit issues is clunky'],
        },
        instagram: {
            summary: 'Instagram presence is growing rapidly via influencer try-on reels. Most engagement comes from "before/after" fit comparison content. The brand\'s own content is polished but user-generated content drives more engagement.',
            topLikes: ['Fit transformation content goes viral', 'Office wear styling posts get high saves', 'Clean product photography appreciated'],
            topDislikes: ['Limited influencer diversity (mostly metro males)', 'Wish they showcased more casual fits', 'Ads can feel repetitive'],
        },
        linkedin: {
            summary: 'LinkedIn buzz focuses on The Pant Project\'s D2C model and Shark Tank appearance. Founders are active posters sharing growth metrics. The brand is frequently cited in "India\'s next D2C success" threads by VCs and startup enthusiasts.',
            topLikes: ['Founder transparency about growth numbers', 'D2C customization model seen as innovative', 'Shark Tank story generates engagement', 'Frequently cited in startup ecosystem posts'],
            topDislikes: ['Some skepticism about scalability of custom model', 'Questions about unit economics at scale'],
        },
    },
    littlebox: {
        reddit: {
            summary: 'LittleBox has a dedicated fan base on r/IndianFashionAddicts. Users frequently post haul reviews with photos. The brand is recommended in almost every "affordable trendy wear" thread. Quality debates are common but most conclude the value is worth it.',
            topLikes: ['Best affordable co-ord sets in India', 'Trend-forward designs praised', 'Packaging feels premium for the price', 'New drops create genuine excitement'],
            topDislikes: ['Sizing inconsistency is the #1 complaint', 'Fabric quality varies between collections', 'Plus-size options are severely limited'],
        },
        instagram: {
            summary: 'LittleBox is essentially an Instagram-first brand. Their content strategy drives massive organic reach through reels and user tagging. The aesthetic is aspirational yet affordable, which resonates strongly with 18-25 demographic.',
            topLikes: ['Outfit-of-the-day content is highly shareable', 'Affordable luxury aesthetic', 'Quick to adopt trending styles', 'Strong community of brand advocates'],
            topDislikes: ['Product sometimes looks different in person vs Insta', 'Limited content showing diverse body types', 'Over-reliance on trendy filters in photos'],
        },
        linkedin: {
            summary: 'Minimal LinkedIn presence. Occasional mentions in D2C fashion roundups. The founder has started sharing growth insights recently, generating interest from early-stage investors.',
            topLikes: ['Gen-Z fashion market insights shared by team', 'Growing interest from fashion-tech VCs'],
            topDislikes: ['Very low posting frequency', 'Brand story not well articulated on LinkedIn'],
        },
    },
    anveshan: {
        reddit: {
            summary: 'Anveshan has strong advocacy on r/india and r/indiashopping. The Shark Tank appearance drove a massive spike in discussions. QR-code traceability is frequently cited as the key differentiator. Price debates are common but advocates defend the premium.',
            topLikes: ['QR code farm traceability is a trust game-changer', 'Ghee and honey quality consistently praised', 'Shark Tank story adds credibility', 'Supporting farmers resonates emotionally'],
            topDislikes: ['Price premium is 2-3x regular brands', 'Limited product range beyond ghee/honey/oils', 'Some users question if premium is justified'],
        },
        instagram: {
            summary: 'Anveshan\'s Instagram focuses on farm stories and ingredient sourcing journeys. Recipe content featuring their products performs exceptionally well. The emotional "farm to fork" narrative drives strong engagement.',
            topLikes: ['Farm-to-fork storytelling is compelling', 'Recipe reels using their products are popular', 'Transparent sourcing content builds trust', 'Community of health-conscious food lovers'],
            topDislikes: ['Content can feel repetitive (same farm narrative)', 'Limited engagement with urban cooking trends', 'Need more diverse recipe creators'],
        },
        linkedin: {
            summary: 'Very active on LinkedIn. Founders regularly post about rural supply chain innovation, farmer impact stories, and growth milestones. The brand is positioned as a social enterprise success story, attracting impact investor attention.',
            topLikes: ['Rural economy impact stories resonate strongly', 'Supply chain transparency narrative', 'Regular fundraise and growth updates', 'Positioned at intersection of D2C + social impact'],
            topDislikes: ['Some view it as too much self-promotion', 'Limited technical detail on supply chain innovation'],
        },
    },
    perfora: {
        reddit: {
            summary: 'Perfora has cultivated a niche but passionate community on r/IndianSkincareAddicts (which also covers oral care). The electric toothbrush is frequently compared to Oral-B favorably. Users appreciate the science-first approach.',
            topLikes: ['Electric toothbrush rivals international brands', 'Clean ingredients approach for oral care', 'Probiotic mouthwash is highly recommended', 'Dentists in the community validate the products'],
            topDislikes: ['Replacement brush heads availability is poor', 'Premium pricing vs Colgate/Sensodyne', 'Battery life could be better on electric brush'],
        },
        instagram: {
            summary: 'Perfora\'s Instagram is highly polished with an emphasis on "oral care as self-care" positioning. Dentist collaboration content performs well. The brand aesthetic is premium and clean, differentiating from typical FMCG brands.',
            topLikes: ['Premium brand aesthetic stands out', 'Dentist-backed content builds credibility', 'Product design is Instagram-worthy', 'Educational oral care content is valued'],
            topDislikes: ['Content feels too premium/aspirational for mass market', 'Limited user-generated content', 'Could do more relatable content'],
        },
        linkedin: {
            summary: 'Perfora founders are active LinkedIn voices in the D2C health-tech space. Posts about disrupting oral care in India get significant engagement. The brand is seen as an example of premiumization in everyday FMCG categories.',
            topLikes: ['Thought leadership on FMCG disruption', 'Category creation narrative resonates', 'Investor community shows strong interest', 'Product innovation stories are well-received'],
            topDislikes: ['Niche category limits broad LinkedIn appeal', 'Need more customer success stories'],
        },
    },
    snitch: {
        reddit: {
            summary: 'Snitch dominates men\'s fashion discussions on Reddit India. Threads asking "best affordable men\'s brand" almost always have Snitch as the top answer. Quality perception has improved dramatically over the past year.',
            topLikes: ['Unbeatable price-to-design ratio', 'Fit designed for Indian body types', 'Massive variety of printed shirts', 'Consistently recommended by community'],
            topDislikes: ['Pilling after multiple washes', 'Color fading in darker fabrics', 'Customer service responsiveness', 'Some items feel like fast-fashion quality'],
        },
        instagram: {
            summary: 'Snitch has one of the strongest Instagram presences among Indian D2C menswear brands. Influencer partnerships drive viral content regularly. The brand\'s content strategy combines lifestyle aspirational posts with product drops.',
            topLikes: ['Massive influencer network creates buzz', 'New collection drops generate excitement', 'Styling content is highly engaging', 'Brand personality is relatable for young men'],
            topDislikes: ['Over-saturation of sponsored content', 'Some influencer reviews feel inauthentic', 'Need more size-inclusive content'],
        },
        linkedin: {
            summary: 'Snitch is frequently featured in D2C success story threads on LinkedIn. The rapid scaling from zero to multi-crore revenue is a popular case study. Founder interviews and fundraise announcements get high engagement.',
            topLikes: ['Growth story from bootstrap to scale is inspiring', 'Frequently cited in D2C fashion case studies', 'Supply chain and ops insights shared', 'Strong employer brand building'],
            topDislikes: ['Limited deep-dive content on unit economics', 'LinkedIn presence is more PR than substance'],
        },
    },
    beminimalist: {
        reddit: {
            summary: 'Be Minimalist is essentially the go-to recommendation on r/IndianSkincareAddicts. Almost every "beginner routine" thread features the brand. Detailed ingredient breakdowns by community members serve as free marketing.',
            topLikes: ['Transparent ingredient lists at unbeatable prices', 'Serums genuinely comparable to The Ordinary', 'Science-backed formulations appreciated', 'Community has created detailed usage guides'],
            topDislikes: ['Initial purging scares new users', 'Vitamin C serum oxidation complaints', 'Packaging could be more premium', 'Some products feel like reformulations, not innovation'],
        },
        instagram: {
            summary: 'Be Minimalist\'s Instagram is educational and product-focused. Before/after skin transformation content drives massive engagement. Dermatologist collaborations lend authority. The brand\'s visual identity is clean and scientific.',
            topLikes: ['Before/after transformations go viral', 'Ingredient education content is valued', 'Dermat collaborations build trust', 'Affordable luxury positioning works'],
            topDislikes: ['Too much focus on actives, not routines', 'Content can feel clinical/cold', 'Limited diversity in skin types shown'],
        },
        linkedin: {
            summary: 'Be Minimalist is a darling of the Indian D2C LinkedIn ecosystem. The brand\'s transparent approach to formulations and pricing is frequently praised. VCs and D2C operators regularly cite them as a category leader.',
            topLikes: ['Transparency-first approach praised by industry', 'Growth trajectory impresses investors', 'Positioned as India\'s answer to The Ordinary', 'Team hiring posts show rapid scaling'],
            topDislikes: ['Discussion mostly from outsiders, not the brand itself', 'Limited thought leadership content from founders'],
        },
    },
    slurrp: {
        reddit: {
            summary: 'Slurrp Farm has a dedicated parent community on Reddit. Discussions focus on genuine nutritional value vs marketing claims. Most parents report positive experiences and cite it as the only "healthy snack my kid actually eats."',
            topLikes: ['Kids genuinely enjoy the taste', 'No junk ingredients — parents trust the label', 'Millet/ragi positioning is unique', 'Good variety for picky eaters'],
            topDislikes: ['Expensive for everyday snacking', 'Small portion sizes for the price', 'Some cookies crumble easily', 'Limited savory options'],
        },
        instagram: {
            summary: 'Slurrp Farm\'s Instagram is a mix of parenting tips and product showcases. Mom influencer collaborations are the primary driver. The brand has strong engagement from the urban millennial parent demographic.',
            topLikes: ['Parenting + nutrition content resonates', 'Kid taste-test reels are entertaining', 'Trusted by mom influencer community', 'Recipe ideas using their products'],
            topDislikes: ['Content focused mainly on mothers, excludes fathers', 'Need more age-diverse content (older kids)', 'Some posts feel too promotional'],
        },
        linkedin: {
            summary: 'Active LinkedIn presence from founders sharing insights on healthy kids\' food market in India. The brand is positioned as a mission-driven company tackling childhood nutrition. Impact metrics and growth numbers are regularly shared.',
            topLikes: ['Mission-driven narrative resonates strongly', 'Childhood nutrition market insights', 'Regular growth and impact updates', 'Strong employer brand in food-tech'],
            topDislikes: ['Limited engagement beyond parenting/food circles', 'Need more supply chain and ops content'],
        },
    },
    arata: {
        reddit: {
            summary: 'Arata appears in clean beauty discussions on Reddit, particularly for hair care. Users switching from chemical products report gradual improvements. The no-lather shampoo requires education but converts become advocates.',
            topLikes: ['Genuinely plant-based with no hidden chemicals', 'Hair gel provides hold without stiffness', 'Eco-friendly packaging is appreciated', 'Gentle on color-treated and sensitive scalps'],
            topDislikes: ['Expensive for the quantity provided', 'Hair serum runs out very fast', 'Low-lather shampoo confuses new users', 'Results take weeks to become visible'],
        },
        instagram: {
            summary: 'Arata\'s Instagram emphasizes the plant-based, eco-conscious lifestyle. Content is visually clean and green-themed. Engagement is moderate but the audience is highly targeted and loyal.',
            topLikes: ['Eco-conscious brand values shine through', 'Clean product photography', 'Ingredient transparency in posts', 'Sustainability messaging is authentic'],
            topDislikes: ['Limited reach beyond eco-conscious niche', 'Content feels too niche for mass appeal', 'Need more before/after content'],
        },
        linkedin: {
            summary: 'Occasional presence on LinkedIn with sustainability and clean beauty narrative. The brand is cited in green business and sustainability discussions but has limited direct posting activity.',
            topLikes: ['Sustainability narrative aligns with ESG trends', 'Clean beauty category insights'],
            topDislikes: ['Very infrequent posting', 'Founders not very active on the platform'],
        },
    },
    dailyobjects: {
        reddit: {
            summary: 'DailyObjects is well-known on Reddit for phone cases and desk accessories. Users praise the design variety but debate value-for-money. The artist collaboration collections generate the most discussion.',
            topLikes: ['Unmatched design variety for tech accessories', 'Artist collaborations are unique', 'Great gifting option for design lovers', 'Desk mats and organizers are standout products'],
            topDislikes: ['Phone cases are overpriced for what they are', 'Some designs fade with use', 'Laptop sleeves lack adequate padding', 'Customer service needs improvement'],
        },
        instagram: {
            summary: 'DailyObjects has a strong visual Instagram presence with artist collaboration showcases. Product photography is excellent. The brand targets the design-conscious urban professional effectively.',
            topLikes: ['Beautiful product photography', 'Artist collab announcements drive buzz', 'Desk setup inspiration content', 'Gift guide content around festivals'],
            topDislikes: ['Content is too product-focused, lacks lifestyle context', 'Limited user-generated content', 'Pricing perception gap with younger audience'],
        },
        linkedin: {
            summary: 'DailyObjects is discussed in design and lifestyle brand circles on LinkedIn. The founder occasionally shares insights on building a design-led brand in India. Artist collaboration model is cited as innovative.',
            topLikes: ['Design-led D2C brand narrative', 'Artist economy and collaboration model', 'Product innovation stories'],
            topDislikes: ['Inconsistent posting schedule', 'Limited industry thought leadership'],
        },
    },
    letsdressup: {
        reddit: {
            summary: 'Let\'s Dress Up appears frequently in wedding and festive wear recommendation threads. Users are impressed by the price-to-look ratio. Quality debates exist but the consensus is "amazing for the price."',
            topLikes: ['Incredible value for festive/wedding wear', 'Designs look expensive despite low prices', 'Good color accuracy from photos to product', 'Indo-western fusion pieces are unique'],
            topDislikes: ['Blouse fitting is often problematic', 'Heavy embellishment pieces are fragile', 'Quality appropriate for 1-2 uses, not long-term', 'Returns/exchange policy is restrictive'],
        },
        instagram: {
            summary: 'Let\'s Dress Up is an Instagram powerhouse for ethnic wear. Wedding and sangeet outfit content drives massive seasonal engagement. User tagging and resharing creates strong organic growth.',
            topLikes: ['Wedding outfit content is hugely popular', 'Affordable ethnic wear positioning', 'Strong seasonal campaign execution', 'User-generated wedding content is beautiful'],
            topDislikes: ['Content is highly seasonal — gaps between events', 'Limited styling for non-wedding occasions', 'Model diversity could improve'],
        },
        linkedin: {
            summary: 'Limited LinkedIn presence. Occasionally mentioned in D2C fashion articles. The ethnic wear market opportunity in India is a topic that references the brand.',
            topLikes: ['Ethnic wear market opportunity discussion', 'Affordable fashion democratization narrative'],
            topDislikes: ['Almost no direct brand presence on LinkedIn', 'No founder thought leadership visible'],
        },
    },
    assemblyfootwear: {
        reddit: {
            summary: 'Assembly has a small but dedicated following on Reddit among minimalist fashion enthusiasts. Quality leather at the price point is frequently praised. Comparisons to international brands like Common Projects are common.',
            topLikes: ['Clean, minimalist sneaker design', 'Leather quality surprises at the price', 'Versatile styling — casual to semi-formal', 'Curated, focused product range'],
            topDislikes: ['Very limited color/style options', 'Sole durability concerns after 6+ months', 'Break-in period is uncomfortable', 'Sizing runs slightly large'],
        },
        instagram: {
            summary: 'Assembly\'s Instagram is clean and minimal, matching the brand aesthetic. The focused product range means content is repetitive but high-quality. The brand targets a niche but loyal audience.',
            topLikes: ['Minimalist aesthetic is distinctive', 'High-quality product shots', 'Clean brand identity', 'Lifestyle content resonates with target audience'],
            topDislikes: ['Content variety is limited due to small range', 'Low posting frequency', 'Needs more styling inspiration content'],
        },
        linkedin: {
            summary: 'Very limited LinkedIn presence. The brand occasionally appears in discussions about niche D2C footwear brands in India.',
            topLikes: ['Niche premium D2C positioning discussed'],
            topDislikes: ['Almost no direct presence', 'Missing opportunity for founder storytelling'],
        },
    },
    auric: {
        reddit: {
            summary: 'Auric appears in health and wellness discussions on Reddit. The Ayurvedic beverages are seen as a convenient bridge between traditional Ayurveda and modern lifestyles. Women\'s health range is the most discussed.',
            topLikes: ['Ready-to-drink Ayurvedic format is innovative', 'Women\'s wellness drinks address real gaps', 'Natural ingredients, no artificial sweeteners', 'Convenient for busy urban lifestyles'],
            topDislikes: ['Expensive for regular consumption', 'Herbal taste is off-putting for some', 'Effects are gradual, not immediately noticeable', 'Glass bottles are impractical to carry'],
        },
        instagram: {
            summary: 'Auric\'s Instagram leans into wellness and self-care aesthetics. Women\'s health and beauty-from-within content performs best. The brand is building a community around Ayurvedic wellness for millennials.',
            topLikes: ['Wellness aesthetic is on-trend', 'Women\'s health content resonates deeply', 'Celebrity endorsements add credibility', 'Self-care narrative is compelling'],
            topDislikes: ['Content can feel too aspirational', 'Limited content about men\'s products', 'Need more scientific backing in posts'],
        },
        linkedin: {
            summary: 'Auric founders are active on LinkedIn sharing insights on modernizing Ayurveda. The brand\'s positioning at the intersection of tradition and convenience generates discussion among health-tech and D2C circles.',
            topLikes: ['Modernizing Ayurveda narrative', 'Women\'s health market insights', 'D2C wellness category thought leadership'],
            topDislikes: ['Limited broad business audience appeal', 'Need more data-driven content'],
        },
    },
    kapiva: {
        reddit: {
            summary: 'Kapiva is well-discussed on health and Ayurveda subreddits. Shilajit and Dia Free are the most mentioned products. Community trust is high due to ingredient transparency. Debates about Ayurveda efficacy are common.',
            topLikes: ['Shilajit resin is consistently praised for energy', 'Dia Free juice popular among diabetic consumers', 'Genuine Ayurvedic formulations backed by research', 'Ingredient transparency builds trust'],
            topDislikes: ['Some juices taste very bitter', 'Pricing has increased substantially over time', 'Need to take consistently for weeks to see results', 'Packaging leaks during shipping occasionally'],
        },
        instagram: {
            summary: 'Kapiva\'s Instagram combines Ayurvedic education with product promotion. Health tips and traditional wellness content drive engagement. The brand effectively bridges traditional Ayurveda with modern presentation.',
            topLikes: ['Ayurvedic health tips are highly valued', 'Product usage guides are helpful', 'Traditional wisdom, modern packaging', 'Strong community of repeat buyers'],
            topDislikes: ['Content can feel repetitive', 'Limited youth-oriented content', 'Need more lifestyle integration content'],
        },
        linkedin: {
            summary: 'Kapiva is well-positioned on LinkedIn as a modern Ayurveda success story. Fundraise announcements and growth metrics generate significant engagement. The brand is seen as a leader in the Ayurveda-tech space.',
            topLikes: ['Growth story from niche to mainstream', 'Ayurveda market modernization leadership', 'Regular business milestone sharing', 'Impact on traditional medicine accessibility'],
            topDislikes: ['Content sometimes too promotional', 'Limited supply chain or operational insights'],
        },
    },
    fablestreet: {
        reddit: {
            summary: 'FableStreet is recommended in every "best workwear for Indian women" thread on Reddit. Users praise the fit engineering specifically designed for Indian body proportions. The brand has high loyalty among working professionals.',
            topLikes: ['Workwear that actually fits Indian women', 'Fabric quality is excellent for the price', 'Size-inclusive range appreciated', 'Wrinkle-resistant fabric perfect for office'],
            topDislikes: ['Very limited casual wear options', 'Color accuracy can be off sometimes', 'Infrequent new launches', 'Delivery time is longer than expected'],
        },
        instagram: {
            summary: 'FableStreet\'s Instagram targets the working woman with polished professional styling content. The "real women at work" content performs better than studio shoots. The brand is building authority in women\'s workwear.',
            topLikes: ['Professional styling inspiration', 'Real women featuring builds relatability', 'Work-to-evening outfit transitions', 'Inclusive sizing shown in content'],
            topDislikes: ['Content is narrowly focused on workwear', 'Limited casual/weekend content', 'Need more video content'],
        },
        linkedin: {
            summary: 'FableStreet has a natural LinkedIn advantage as a workwear brand. Posts about women in the workplace, professional dressing, and the gender gap in work fashion resonate strongly. The founder is an active LinkedIn voice.',
            topLikes: ['Women\'s workwear gap narrative is powerful', 'Founder is a strong LinkedIn voice', 'Natural brand-LinkedIn audience fit', 'Customer stories from working professionals'],
            topDislikes: ['Could share more on D2C operations', 'Limited scale/growth metrics shared'],
        },
    },
    bluekaktus: {
        reddit: {
            summary: 'Blue Tokai is the undisputed king of specialty coffee discussions on Indian Reddit. Recommendations are passionate and detailed. Coffee enthusiasts debate roast profiles and origins extensively.',
            topLikes: ['Freshest coffee beans available in India', 'Single-origin options for connoisseurs', 'Vienna roast is a community favorite', 'Subscription model is convenient', 'Cafe experience is excellent'],
            topDislikes: ['Premium pricing at Rs 800+/250g', 'Some blends are too acidic for Indian palates', 'Bag resealability needs improvement', 'Delivery delays during festive seasons'],
        },
        instagram: {
            summary: 'Blue Tokai\'s Instagram celebrates coffee culture with beautiful cafe shots, brewing guides, and origin stories. The aesthetic is premium and aspirational. Cafe expansion announcements generate the most engagement.',
            topLikes: ['Beautiful coffee photography and cafe content', 'Brewing guide content is educational', 'Origin stories for each blend', 'Cafe opening announcements drive excitement'],
            topDislikes: ['Content can feel exclusionary for casual coffee drinkers', 'Pricing discussion is avoided on Instagram', 'Need more accessible/beginner content'],
        },
        linkedin: {
            summary: 'Blue Tokai is frequently discussed on LinkedIn as India\'s specialty coffee pioneer. Cafe expansion strategy, farmer partnerships, and the premiumization of coffee in India are popular discussion topics.',
            topLikes: ['India coffee market growth narrative', 'Cafe expansion strategy insights', 'Farmer partnership stories', 'Premiumization trend leadership'],
            topDislikes: ['Limited operational/financial depth in posts', 'Mostly external commentary, not brand-driven content'],
        },
    },
    conscent: {
        reddit: {
            summary: 'Conscious Chemist is an emerging name on r/IndianSkincareAddicts. Early adopters are vocal advocates. The brand is in the "discovery phase" where a few passionate users are evangelizing to the broader community.',
            topLikes: ['Clean ingredients that actually deliver results', 'SPF moisturizers are lightweight and effective', 'Affordable clean beauty entry point', 'Vitamin C serum shows visible brightening'],
            topDislikes: ['Brand awareness is still very low', 'Limited product range', 'Packaging feels basic for premium positioning', 'Some products have short shelf life'],
        },
        instagram: {
            summary: 'Conscious Chemist\'s Instagram is growing with clean beauty education content. The brand is investing in dermatologist collaborations and ingredient deep-dives. Engagement is small but the audience is highly targeted.',
            topLikes: ['Ingredient education content', 'Dermatologist collaborations', 'Clean beauty positioning', 'Growing community of advocates'],
            topDislikes: ['Low follower count limits reach', 'Need more user-generated content', 'Content production quality is inconsistent'],
        },
        linkedin: {
            summary: 'Minimal LinkedIn presence. The clean beauty market in India is discussed by industry observers who occasionally reference the brand.',
            topLikes: ['Clean beauty market opportunity discussion'],
            topDislikes: ['Almost no direct brand presence', 'Missing founder storytelling opportunity'],
        },
    },
};

// --- Sentiment Mood Timeline (12-month evolution for e-commerce and social) ---
const MOOD_TIMELINE = {
    thepantproject: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'cautious', score: 58, theme: 'Early adopters testing the custom model. Main concern: "Will the fit actually be accurate?" Delivery time complaints were high.' },
            { quarter: 'Q2 2025', mood: 'improving', score: 66, theme: 'Word-of-mouth spreading. Fit accuracy praised more frequently. Delivery complaints persist but customers accept it as part of the custom process.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 74, theme: 'Post-Shark Tank surge. New buyers arrive with higher expectations. Fabric quality becomes the new praise point. Return policy improved per feedback.' },
            { quarter: 'Q1 2026', mood: 'very positive', score: 82, theme: 'Delivery times reduced to 8-10 days. Repeat purchase rate very high. Community now recommends specific fabrics. Women\'s range launch drives new excitement.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'curious', score: 52, theme: 'Reddit: "Has anyone tried The Pant Project?" threads emerging. Instagram presence was minimal. LinkedIn: Shark Tank buzz beginning.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 63, theme: 'Reddit reviews becoming detailed with fit photos. Instagram influencer try-ons start. LinkedIn founders sharing early metrics.' },
            { quarter: 'Q3 2025', mood: 'enthusiastic', score: 75, theme: 'Reddit: now a default recommendation in fashion threads. Instagram: haul videos trending. LinkedIn: featured in D2C roundups.' },
            { quarter: 'Q1 2026', mood: 'advocating', score: 85, theme: 'All platforms showing organic advocacy. Reddit users create fabric guides. Instagram UGC overtaking paid content. LinkedIn: VC interest discussions.' },
        ],
    },
    snitch: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'mixed', score: 55, theme: 'Early quality concerns: pilling, color fading after washes. Designs were praised but durability questioned. "Great for the price but don\'t expect longevity."' },
            { quarter: 'Q2 2025', mood: 'improving', score: 65, theme: 'Fabric quality visibly improved. Customers noticed the change. Repeat buyers increased. "They\'re actually listening to feedback" sentiment emerged.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 76, theme: 'Quality concerns significantly reduced. The brand established itself as the go-to men\'s casual wear. Price-to-design ratio became the dominant positive theme.' },
            { quarter: 'Q1 2026', mood: 'very positive', score: 84, theme: 'Now the #1 recommended men\'s D2C brand across platforms. Quality is no longer a concern. Customers buying 5+ items per order. "Indian Zara" narrative solidified.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'debating', score: 50, theme: 'Reddit: active quality debates. Some defending, some criticizing. Instagram: growing influencer presence. LinkedIn: growth metrics turning heads.' },
            { quarter: 'Q2 2025', mood: 'warming', score: 62, theme: 'Reddit quality defenders winning the argument. Instagram: haul content exploding. LinkedIn: "the next big thing in men\'s fashion" threads.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 74, theme: 'Reddit: default recommendation status achieved. Instagram: massive organic content creation. LinkedIn: featured in funding news.' },
            { quarter: 'Q1 2026', mood: 'dominant', score: 88, theme: 'Cultural brand status on all platforms. Reddit memes about "Snitch addiction." Instagram content ecosystem self-sustaining. LinkedIn: scaling story widely cited.' },
        ],
    },
    beminimalist: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'positive', score: 70, theme: 'Established trust in skincare community. Salicylic acid and Niacinamide serums were hero products. Main complaint: purging during initial use.' },
            { quarter: 'Q2 2025', mood: 'positive', score: 73, theme: 'Vitamin C serum oxidation issue addressed with improved packaging. New retinol serum launched to strong reviews. Community creating combination guides.' },
            { quarter: 'Q3 2025', mood: 'very positive', score: 80, theme: 'Positioned firmly as "India\'s The Ordinary." Reviews now focus on long-term results (6+ months). Dermatologist endorsements growing.' },
            { quarter: 'Q1 2026', mood: 'strong', score: 85, theme: 'Category leader status. Reviews show high satisfaction across product range. Packaging concerns mostly resolved. New sunscreen line receiving excellent feedback.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'enthusiastic', score: 72, theme: 'r/IndianSkincareAddicts: already a default recommendation. Instagram: before/after content driving conversions. LinkedIn: investors taking notice.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 76, theme: 'Reddit community creating detailed routine guides featuring the brand. Instagram engagement rates climbing. LinkedIn D2C beauty discussions.' },
            { quarter: 'Q3 2025', mood: 'strong', score: 82, theme: 'All platforms: organic advocacy at scale. Reddit users defending against competitors. Instagram dermat collabs viral. LinkedIn: category leadership cited.' },
            { quarter: 'Q1 2026', mood: 'dominant', score: 88, theme: 'Reddit: cult status, own recommendation tier. Instagram: massive UGC ecosystem. LinkedIn: frequently in D2C success stories and investment discussions.' },
        ],
    },
    anveshan: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'niche positive', score: 65, theme: 'Strong reviews from health-conscious buyers. QR traceability praised but not well-known. Price sensitivity was the main barrier to adoption.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 70, theme: 'Post-Shark Tank buyer influx. New customers impressed by quality. Ghee becoming a cult product. Some complaints about out-of-stock items.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 78, theme: 'Repeat purchase rate very high. Honey and cold-pressed oils gaining traction. Packaging improvements acknowledged. Farm stories resonating.' },
            { quarter: 'Q1 2026', mood: 'very positive', score: 84, theme: 'Brand advocates creating content organically. Price premium now accepted by core customers. Product range expansion (new oils, spices) received positively.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'curious', score: 55, theme: 'Reddit: "Is Anveshan ghee worth the premium?" threads. Instagram: farm content beginning. LinkedIn: supply chain innovation narrative starting.' },
            { quarter: 'Q2 2025', mood: 'positive', score: 65, theme: 'Reddit: Shark Tank boost, positive reviews flooding in. Instagram: recipe content gaining traction. LinkedIn: rural impact stories resonating.' },
            { quarter: 'Q3 2025', mood: 'advocating', score: 76, theme: 'Reddit: "tried it, never going back" sentiment dominant. Instagram: UGC with recipe content. LinkedIn: impact investors showing interest.' },
            { quarter: 'Q1 2026', mood: 'strong', score: 83, theme: 'Reddit: default recommendation for premium staples. Instagram: farm-to-fork narrative compelling. LinkedIn: featured in social enterprise discussions.' },
        ],
    },
    perfora: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'niche', score: 55, theme: 'Early adopters discovering the brand. Electric toothbrush getting first reviews — mostly positive but niche audience. Price comparisons to Oral-B common.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 63, theme: 'Probiotic mouthwash launching to positive reception. Community forming around premium oral care. Replacement brush head availability issue surfacing.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 72, theme: 'Dental professional endorsements boosting credibility. Product range expanding. Battery life improved in new toothbrush version. Growing recognition.' },
            { quarter: 'Q1 2026', mood: 'strong', score: 80, theme: 'Established as the premium oral care brand. Reviews now compare others to Perfora (not the other way around). Brush head availability improved.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'discovering', score: 48, theme: 'Reddit: first mentions in oral care threads. Instagram: polished but small audience. LinkedIn: founder starting to share vision.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 58, theme: 'Reddit: dentist community members validating products. Instagram: "oral care as self-care" positioning resonating. LinkedIn: D2C health discussions.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 70, theme: 'Reddit: now recommended in oral care threads regularly. Instagram: professional content driving engagement. LinkedIn: category creation story gaining traction.' },
            { quarter: 'Q1 2026', mood: 'advocating', score: 78, theme: 'All platforms: word-of-mouth driving organic growth. Reddit users comparing to international brands favorably. LinkedIn: VC interest growing.' },
        ],
    },
    littlebox: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'trendy', score: 60, theme: 'Trendy designs appreciated but sizing inconsistency was a major complaint. Fabric quality was the most debated topic. "Cute but will it last?" sentiment.' },
            { quarter: 'Q2 2025', mood: 'improving', score: 66, theme: 'Co-ord sets becoming the standout category. Sizing guides improved. New collections showing better fabric quality. Return experience still a pain point.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 73, theme: 'Established as the go-to for affordable trendy wear. Sizing concerns reduced but not eliminated. Customers now know to size up. Plus-size demand growing.' },
            { quarter: 'Q1 2026', mood: 'loyal', score: 79, theme: 'Strong repeat buyer base. Quality improvements acknowledged. Community sharing outfit ideas. Plus-size range expansion received very positively.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'buzzy', score: 58, theme: 'Instagram: haul videos gaining traction. Reddit: first haul reviews posted. Limited LinkedIn presence.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 66, theme: 'Instagram: becoming a go-to tag for outfit posts. Reddit: sizing advice threads popular. LinkedIn: occasional D2C fashion mentions.' },
            { quarter: 'Q3 2025', mood: 'popular', score: 75, theme: 'Instagram: massive organic content. Reddit: active community sharing finds. LinkedIn: Gen-Z fashion market discussions reference the brand.' },
            { quarter: 'Q1 2026', mood: 'mainstream', score: 82, theme: 'Instagram-first brand strategy paying off across all platforms. Reddit: cult following. LinkedIn: investors noticing growth trajectory.' },
        ],
    },
    kapiva: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'trusted', score: 68, theme: 'Established trust in Ayurveda space. Shilajit and aloe vera juice are bestsellers. Bitter taste complaints common but accepted as "natural."' },
            { quarter: 'Q2 2025', mood: 'growing', score: 72, theme: 'Dia Free juice gaining popularity among diabetic consumers. Product range expanding. Pricing increases noted and debated by customers.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 77, theme: 'New formulations addressing taste concerns. Packaging improvements ongoing. Brand trust solidifying. More health professionals recommending.' },
            { quarter: 'Q1 2026', mood: 'strong', score: 82, theme: 'Market leader in modern Ayurveda e-commerce. Reviews consistently positive. Price sensitivity reduced as brand loyalty increased. New product launches well-received.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'established', score: 62, theme: 'Reddit: regular presence in Ayurveda discussions. Instagram: health tips content. LinkedIn: modern Ayurveda narrative building.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 68, theme: 'Reddit: Shilajit results discussions trending. Instagram: influencer health partnerships. LinkedIn: fundraise discussions.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 75, theme: 'All platforms showing growth. Reddit: trusted source for Ayurveda recommendations. Instagram: community building. LinkedIn: industry leadership.' },
            { quarter: 'Q1 2026', mood: 'leading', score: 82, theme: 'Reddit: go-to Ayurveda brand. Instagram: strong health community. LinkedIn: featured in health-tech and traditional medicine modernization stories.' },
        ],
    },
    bluekaktus: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'premium niche', score: 72, theme: 'Coffee purists love it. Fresh roasting and single-origin praised. Price is the main barrier. "Best coffee in India but expensive for daily use."' },
            { quarter: 'Q2 2025', mood: 'growing', score: 75, theme: 'Subscription model gaining traction — reduces effective cost perception. New blends receiving positive reviews. Cafe expansion adding credibility.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 79, theme: 'Pour-over packs driving trial among non-subscribers. Bag resealability improved. More price-accessible options introduced. Seasonal blends creating excitement.' },
            { quarter: 'Q1 2026', mood: 'strong', score: 84, theme: 'Category definition achieved — "if you want specialty coffee, it\'s Blue Tokai." Reviews now reference them as the standard. Cafe + online synergy working.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'passionate niche', score: 68, theme: 'Reddit: passionate coffee community discussing origins and roasts. Instagram: cafe aesthetics. LinkedIn: specialty coffee market insights.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 72, theme: 'Reddit: brewing guides shared. Instagram: cafe opening content viral. LinkedIn: expansion strategy discussions.' },
            { quarter: 'Q3 2025', mood: 'mainstream', score: 78, theme: 'Reddit: default coffee recommendation. Instagram: coffee culture content thriving. LinkedIn: premiumization trend leadership cited.' },
            { quarter: 'Q1 2026', mood: 'cultural', score: 85, theme: 'Blue Tokai becoming synonymous with Indian specialty coffee across all social platforms. Reddit advocacy is organic and passionate.' },
        ],
    },
};

// Default mood timeline for companies without specific data
function getDefaultMoodTimeline(companyId) {
    const company = COMPANIES.find(c => c.id === companyId);
    const name = company ? company.name : 'Brand';
    return {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'early', score: 50, theme: `${name} was in early discovery phase. Initial reviews were few but generally positive. Brand awareness was limited.` },
            { quarter: 'Q2 2025', mood: 'growing', score: 58, theme: `Review volume increasing. Product feedback being incorporated. Customer base starting to form habits.` },
            { quarter: 'Q3 2025', mood: 'positive', score: 65, theme: `Word-of-mouth driving new customers. Quality perception improving. Repeat purchase signals emerging.` },
            { quarter: 'Q1 2026', mood: 'building', score: 72, theme: `Growing customer loyalty. Reviews becoming more detailed and positive. Brand starting to be recommended organically.` },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'minimal', score: 40, theme: `Limited social presence. Occasional mentions in niche communities. Brand building through content just beginning.` },
            { quarter: 'Q2 2025', mood: 'growing', score: 52, theme: `Social mentions increasing. First influencer partnerships starting. Community beginning to form.` },
            { quarter: 'Q3 2025', mood: 'active', score: 62, theme: `Regular engagement on social platforms. User-generated content appearing. Brand voice becoming more distinct.` },
            { quarter: 'Q1 2026', mood: 'positive', score: 70, theme: `Organic social growth visible. Community advocacy building. Brand mentioned in relevant discussions.` },
        ],
    };
}

// --- Social Media Data (now includes LinkedIn) ---
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
    const liBase = c.id === 'beminimalist' ? 180 :
                   c.id === 'snitch' ? 150 :
                   c.id === 'bluekaktus' ? 120 :
                   c.id === 'kapiva' ? 110 :
                   c.id === 'anveshan' ? 100 :
                   c.id === 'fablestreet' ? 90 :
                   c.id === 'thepantproject' ? 80 :
                   c.id === 'perfora' ? 70 :
                   c.id === 'slurrp' ? 65 :
                   c.id === 'dailyobjects' ? 50 :
                   20 + Math.random() * 60;

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
        linkedin: {
            mentions: Math.round(liBase * 2),
            mentionsTrend: generateWeeklyTimeSeries(12, liBase, 0.35, 0.3),
            sentiment: Math.round(65 + Math.random() * 25),
            engagementRate: parseFloat((1.5 + Math.random() * 3).toFixed(1)),
        },
        viralScore: Math.round(25 + Math.random() * 75),
        socialSummary: SOCIAL_SUMMARIES[c.id] || {
            reddit: {
                summary: 'Limited Reddit presence. Brand is in early discovery phase with occasional mentions in relevant subreddits.',
                topLikes: ['Growing community interest', 'Product quality praised by early adopters'],
                topDislikes: ['Low brand awareness', 'Limited discussion volume'],
            },
            instagram: {
                summary: 'Building Instagram presence through content and influencer partnerships. Engagement is growing steadily.',
                topLikes: ['Visual content resonates', 'Growing follower base'],
                topDislikes: ['Need more user-generated content', 'Posting frequency could increase'],
            },
            linkedin: {
                summary: 'Minimal LinkedIn presence. Occasional mentions in industry discussions.',
                topLikes: ['D2C narrative resonates with business audience'],
                topDislikes: ['Very limited direct brand activity'],
            },
        },
        moodTimeline: MOOD_TIMELINE[c.id] || getDefaultMoodTimeline(c.id),
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
    {
        source: 'linkedin',
        date: '2026-02-16',
        content: 'Fascinating D2C case study: Snitch went from 0 to 100+ Cr revenue in men\'s fashion by doing one thing right — designing for the Indian male body type. While international brands use Western sizing, Snitch reverse-engineered fit for the Indian market. The result? 70% repeat purchase rate. This is what product-market fit looks like.',
        likes: 4280,
        comments: 312,
        company: 'snitch',
        author: 'D2C Observer',
        authorRole: 'Partner, Consumer Fund',
    },
    {
        source: 'linkedin',
        date: '2026-02-15',
        content: 'Be Minimalist just crossed a milestone that took The Ordinary 5 years to achieve in Western markets. They\'ve essentially democratized active skincare for the Indian consumer. At Rs 349 for a serum, they\'ve made science-backed skincare accessible to millions. Watch this space — they\'re building the Deciem of India.',
        likes: 3890,
        comments: 256,
        company: 'beminimalist',
        author: 'Beauty Tech Analyst',
        authorRole: 'VP, Venture Capital',
    },
    {
        source: 'linkedin',
        date: '2026-02-14',
        content: 'Had coffee at the new Blue Tokai cafe in Indiranagar today. The fact that India — one of the world\'s largest coffee producers — is finally developing a specialty coffee culture is remarkable. Blue Tokai is leading this shift from commodity to craft. Their farm-to-cup model is not just a brand story, it\'s a supply chain revolution.',
        likes: 2150,
        comments: 189,
        company: 'bluekaktus',
        author: 'Food & Bev Investor',
        authorRole: 'Director, Growth Equity',
    },
    {
        source: 'linkedin',
        date: '2026-02-13',
        content: 'FableStreet is solving a problem that\'s been ignored for decades: Indian women\'s workwear. International brands don\'t fit Indian body types, and local options lack professional polish. FableStreet has engineered fits specifically for Indian proportions. This is a massive underserved TAM.',
        likes: 1780,
        comments: 145,
        company: 'fablestreet',
        author: 'Consumer Brand Builder',
        authorRole: 'Managing Director, PE Fund',
    },
    {
        source: 'linkedin',
        date: '2026-02-12',
        content: 'The Anveshan story continues to impress. From Shark Tank to building genuine farm-to-fork supply chain with QR traceability — they\'re not just selling ghee, they\'re building trust infrastructure for the premium food market in India. Impact + commerce at its best.',
        likes: 2420,
        comments: 198,
        company: 'anveshan',
        author: 'Impact Investor',
        authorRole: 'Founding Partner, Agri-Tech VC',
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
