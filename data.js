// =====================================================
// Consumer Trend Radar - Sample Data
// Sub-$250M emerging D2C / consumer brands in India
// Focused on early-stage breakout investment opportunities
// =====================================================

const COMPANIES = [
    { id: 'wakao', name: 'Wakao Foods', sector: 'food', sectorLabel: 'Food & Beverage', website: 'wakaofoods.com', color: '#f59e0b', estValuation: '$2-5M' },
    { id: 'bummer', name: 'Bummer', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'byvbummer.com', color: '#ec4899', estValuation: '$5-10M' },
    { id: 'flatheads', name: 'Flatheads', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'flatheads.in', color: '#3b82f6', estValuation: '$3-8M' },
    { id: 'phool', name: 'Phool', sector: 'home', sectorLabel: 'Home & Living', website: 'phool.co', color: '#10b981', estValuation: '$8-15M' },
    { id: 'sidsfarm', name: "Sid's Farm", sector: 'food', sectorLabel: 'Food & Beverage', website: 'sidsfarm.com', color: '#06b6d4', estValuation: '$15-30M' },
    { id: 'koparo', name: 'Koparo', sector: 'home', sectorLabel: 'Home & Living', website: 'koparoclean.com', color: '#84cc16', estValuation: '$3-8M' },
    { id: 'gynoveda', name: 'Gynoveda', sector: 'health', sectorLabel: 'Health & Wellness', website: 'gynoveda.com', color: '#d946ef', estValuation: '$10-20M' },
    { id: 'bareanatomy', name: 'Bare Anatomy', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'bareanatomy.com', color: '#a855f7', estValuation: '$5-12M' },
    { id: 'tbof', name: 'Two Brothers Organic Farms', sector: 'food', sectorLabel: 'Food & Beverage', website: 'twobrothersindiashop.com', color: '#22c55e', estValuation: '$8-15M' },
    { id: 'ellementry', name: 'Ellementry', sector: 'home', sectorLabel: 'Home & Living', website: 'ellementry.com', color: '#f97316', estValuation: '$5-10M' },
    { id: 'cosmix', name: 'Cosmix', sector: 'health', sectorLabel: 'Health & Wellness', website: 'cosmix.in', color: '#14b8a6', estValuation: '$3-8M' },
    { id: 'neemli', name: 'Neemli Naturals', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'neemlinaturals.com', color: '#8b5cf6', estValuation: '$3-8M' },
    { id: 'samosaparty', name: 'Samosa Party', sector: 'food', sectorLabel: 'Food & Beverage', website: 'samosaparty.com', color: '#e11d48', estValuation: '$5-12M' },
    { id: 'earthrhythm', name: 'Earth Rhythm', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'earthrhythm.com', color: '#0ea5e9', estValuation: '$8-15M' },
    { id: 'bombaysweets', name: 'Bombay Sweet Shop', sector: 'food', sectorLabel: 'Food & Beverage', website: 'bombaysweetshop.com', color: '#eab308', estValuation: '$3-8M' },
    { id: 'staccato', name: 'Staccato Coffee', sector: 'food', sectorLabel: 'Food & Beverage', website: 'staccato.co.in', color: '#6366f1', estValuation: '$2-5M' },
    { id: 'snitch', name: 'Snitch', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'snitch.co.in', color: '#f43f5e', estValuation: '$100-150M', estRevenue: 'INR 500Cr+/yr' },
    { id: 'mokobara', name: 'Mokobara', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'mokobara.com', color: '#0d9488', estValuation: '$80-120M', estRevenue: 'INR 200Cr+/yr' },
    { id: 'noise', name: 'Noise', sector: 'electronics', sectorLabel: 'Consumer Electronics', website: 'gonoise.com', color: '#dc2626', estValuation: '$400-500M', estRevenue: 'INR 1200Cr+/yr' },
    { id: 'atomberg', name: 'Atomberg', sector: 'electronics', sectorLabel: 'Consumer Electronics', website: 'atomberg.com', color: '#1d4ed8', estValuation: '$250-350M', estRevenue: 'INR 800Cr+/yr' },
    { id: 'countrydelight', name: 'Country Delight', sector: 'food', sectorLabel: 'Food & Beverage', website: 'countrydelight.in', color: '#16a34a', estValuation: '$600-800M', estRevenue: 'INR 1500Cr+/yr' },
    { id: 'licious', name: 'Licious', sector: 'food', sectorLabel: 'Food & Beverage', website: 'licious.in', color: '#b91c1c', estValuation: '$700-900M', estRevenue: 'INR 1000Cr+/yr' },
    { id: 'mcaffeine', name: 'mCaffeine', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'mcaffeine.com', color: '#78350f', estValuation: '$100-150M', estRevenue: 'INR 300Cr+/yr' },
    { id: 'vahdamteas', name: 'Vahdam Teas', sector: 'food', sectorLabel: 'Food & Beverage', website: 'vahdamindia.com', color: '#059669', estValuation: '$50-80M', estRevenue: 'INR 200Cr+/yr' },
    { id: 'plumgoodness', name: 'Plum Goodness', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'plumgoodness.com', color: '#7c3aed', estValuation: '$150-200M', estRevenue: 'INR 500Cr+/yr' },
    { id: 'bsc', name: 'Bombay Shaving Company', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'bombayshavingcompany.com', color: '#0369a1', estValuation: '$100-150M', estRevenue: 'INR 300Cr+/yr' },
    { id: 'ragecoffee', name: 'Rage Coffee', sector: 'food', sectorLabel: 'Food & Beverage', website: 'ragecoffee.com', color: '#ea580c', estValuation: '$30-50M', estRevenue: 'INR 100Cr+/yr' },
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
const GT_GROWTH = { wakao: 0.85, bummer: 0.78, flatheads: 0.55, phool: 0.92, sidsfarm: 0.88, koparo: 0.65, gynoveda: 0.82, bareanatomy: 0.60, tbof: 0.70, ellementry: 0.45, cosmix: 0.75, neemli: 0.50, samosaparty: 0.90, earthrhythm: 0.58, bombaysweets: 0.68, staccato: 0.48, snitch: 1.20, mokobara: 1.10, noise: 0.65, atomberg: 0.72, countrydelight: 0.88, licious: 0.55, mcaffeine: 0.80, vahdamteas: 0.60, plumgoodness: 0.70, bsc: 0.62, ragecoffee: 0.78 };
const GT_BASE = { wakao: 12, bummer: 22, flatheads: 15, phool: 18, sidsfarm: 28, koparo: 14, gynoveda: 25, bareanatomy: 16, tbof: 20, ellementry: 13, cosmix: 17, neemli: 14, samosaparty: 30, earthrhythm: 16, bombaysweets: 18, staccato: 10, snitch: 55, mokobara: 38, noise: 72, atomberg: 45, countrydelight: 60, licious: 50, mcaffeine: 42, vahdamteas: 30, plumgoodness: 48, bsc: 40, ragecoffee: 28 };
COMPANIES.forEach(c => {
    const growth = GT_GROWTH[c.id] || 0.3;
    const base = GT_BASE[c.id] || 12;
    GOOGLE_TRENDS_DATA[c.id] = {
        timeSeries: generateWeeklyTimeSeries(52, base, growth, 0.15),
        currentIndex: 0, change30d: 0, change90d: 0, peak12m: 0, volatility: 0,
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
        GOOGLE_TRENDS_DATA[c.id].change30d = Math.round(((ts[ts.length - 1].value / ts[ts.length - 5].value) - 1) * 100);
    }
    if (ts.length >= 13) {
        GOOGLE_TRENDS_DATA[c.id].change90d = Math.round(((ts[ts.length - 1].value / ts[ts.length - 13].value) - 1) * 100);
    }
});

// Rising queries
const RISING_QUERIES = {
    wakao: [
        { text: 'wakao jackfruit meat review', growth: '+1400%' },
        { text: 'plant based meat india', growth: '+950%' },
        { text: 'wakao foods shark tank', growth: '+820%' },
        { text: 'jackfruit biryani recipe', growth: '+540%' },
    ],
    bummer: [
        { text: 'bummer underwear review', growth: '+1100%' },
        { text: 'micro modal underwear india', growth: '+780%' },
        { text: 'bummer innerwear quality', growth: '+620%' },
        { text: 'fun print boxer shorts', growth: '+450%' },
    ],
    flatheads: [
        { text: 'flatheads shoes review', growth: '+680%' },
        { text: 'bamboo sneakers india', growth: '+520%' },
        { text: 'sustainable footwear brands', growth: '+480%' },
        { text: 'merino wool shoes', growth: '+350%' },
    ],
    phool: [
        { text: 'phool incense sticks', growth: '+1600%' },
        { text: 'fleather vegan leather', growth: '+1200%' },
        { text: 'temple flower recycling', growth: '+880%' },
        { text: 'phool social enterprise', growth: '+650%' },
    ],
    sidsfarm: [
        { text: 'sids farm milk review', growth: '+920%' },
        { text: 'farm fresh milk hyderabad', growth: '+750%' },
        { text: 'sids farm subscription', growth: '+580%' },
        { text: 'a2 cow milk delivery', growth: '+420%' },
    ],
    koparo: [
        { text: 'koparo floor cleaner review', growth: '+780%' },
        { text: 'non toxic cleaning india', growth: '+620%' },
        { text: 'koparo vs mamaearth cleaning', growth: '+480%' },
        { text: 'baby safe floor cleaner', growth: '+350%' },
    ],
    gynoveda: [
        { text: 'gynoveda pcod review', growth: '+1300%' },
        { text: 'ayurvedic period pain relief', growth: '+980%' },
        { text: 'gynoveda shark tank', growth: '+750%' },
        { text: 'pcos ayurveda treatment', growth: '+580%' },
    ],
    bareanatomy: [
        { text: 'bare anatomy hair quiz', growth: '+850%' },
        { text: 'personalized shampoo india', growth: '+680%' },
        { text: 'bare anatomy review', growth: '+520%' },
        { text: 'custom hair care', growth: '+380%' },
    ],
    tbof: [
        { text: 'two brothers organic ghee', growth: '+720%' },
        { text: 'tbof a2 ghee review', growth: '+580%' },
        { text: 'premium organic staples india', growth: '+450%' },
        { text: 'bilona ghee online', growth: '+380%' },
    ],
    ellementry: [
        { text: 'ellementry ceramics', growth: '+520%' },
        { text: 'handcrafted homeware india', growth: '+420%' },
        { text: 'sustainable dinnerware', growth: '+350%' },
        { text: 'ellementry store near me', growth: '+280%' },
    ],
    cosmix: [
        { text: 'cosmix superfood blends', growth: '+880%' },
        { text: 'adaptogen powder india', growth: '+720%' },
        { text: 'cosmix sleep blend review', growth: '+580%' },
        { text: 'ashwagandha latte mix', growth: '+420%' },
    ],
    neemli: [
        { text: 'neemli naturals serum review', growth: '+620%' },
        { text: 'neemli hyaluronic acid', growth: '+480%' },
        { text: 'clean active skincare india', growth: '+380%' },
        { text: 'neemli vs minimalist', growth: '+290%' },
    ],
    samosaparty: [
        { text: 'samosa party frozen samosa', growth: '+1500%' },
        { text: 'gourmet frozen snacks india', growth: '+1100%' },
        { text: 'samosa party review bangalore', growth: '+780%' },
        { text: 'best frozen samosa online', growth: '+580%' },
    ],
    earthrhythm: [
        { text: 'earth rhythm shampoo bar', growth: '+650%' },
        { text: 'refillable beauty products india', growth: '+520%' },
        { text: 'earth rhythm sunscreen review', growth: '+420%' },
        { text: 'zero waste beauty brand', growth: '+350%' },
    ],
    bombaysweets: [
        { text: 'bombay sweet shop mithai', growth: '+780%' },
        { text: 'artisanal indian sweets online', growth: '+620%' },
        { text: 'bombay sweet shop review', growth: '+480%' },
        { text: 'premium mithai delivery', growth: '+350%' },
    ],
    staccato: [
        { text: 'staccato coffee beans', growth: '+580%' },
        { text: 'micro roaster coffee india', growth: '+450%' },
        { text: 'staccato single origin', growth: '+350%' },
        { text: 'specialty coffee subscription', growth: '+280%' },
    ],
    snitch: [
        { text: 'snitch clothing review', growth: '+2400%' },
        { text: 'snitch fashion men india', growth: '+1800%' },
        { text: 'snitch co-ord sets', growth: '+1500%' },
        { text: 'affordable trendy menswear india', growth: '+1100%' },
    ],
    mokobara: [
        { text: 'mokobara luggage review', growth: '+1600%' },
        { text: 'mokobara vs american tourister', growth: '+1200%' },
        { text: 'best cabin luggage india', growth: '+900%' },
        { text: 'mokobara backpack', growth: '+750%' },
    ],
    noise: [
        { text: 'noise smartwatch review', growth: '+850%' },
        { text: 'noise colorfit pro 5', growth: '+720%' },
        { text: 'best budget smartwatch india', growth: '+580%' },
        { text: 'noise vs fire boltt', growth: '+450%' },
    ],
    atomberg: [
        { text: 'atomberg ceiling fan review', growth: '+980%' },
        { text: 'bldc fan india best', growth: '+780%' },
        { text: 'atomberg vs havells fan', growth: '+620%' },
        { text: 'energy efficient fan india', growth: '+480%' },
    ],
    countrydelight: [
        { text: 'country delight milk review', growth: '+1100%' },
        { text: 'country delight vs amul', growth: '+880%' },
        { text: 'farm fresh milk delivery', growth: '+720%' },
        { text: 'country delight subscription', growth: '+580%' },
    ],
    licious: [
        { text: 'licious meat delivery review', growth: '+650%' },
        { text: 'licious chicken quality', growth: '+520%' },
        { text: 'fresh meat delivery app', growth: '+420%' },
        { text: 'licious seafood bangalore', growth: '+350%' },
    ],
    mcaffeine: [
        { text: 'mcaffeine coffee body scrub', growth: '+920%' },
        { text: 'mcaffeine face wash review', growth: '+750%' },
        { text: 'coffee skincare india', growth: '+580%' },
        { text: 'mcaffeine vs mamaearth', growth: '+450%' },
    ],
    vahdamteas: [
        { text: 'vahdam tea review', growth: '+680%' },
        { text: 'best indian tea brand', growth: '+520%' },
        { text: 'vahdam matcha review', growth: '+420%' },
        { text: 'premium darjeeling tea online', growth: '+350%' },
    ],
    plumgoodness: [
        { text: 'plum green tea face wash', growth: '+780%' },
        { text: 'plum goodness review', growth: '+620%' },
        { text: 'vegan skincare india', growth: '+480%' },
        { text: 'plum vitamin c serum', growth: '+380%' },
    ],
    bsc: [
        { text: 'bombay shaving company review', growth: '+580%' },
        { text: 'bsc trimmer review', growth: '+480%' },
        { text: 'men grooming kit india', growth: '+380%' },
        { text: 'bombay shaving vs gillette', growth: '+320%' },
    ],
    ragecoffee: [
        { text: 'rage coffee review', growth: '+750%' },
        { text: 'instant coffee with vitamins', growth: '+580%' },
        { text: 'rage coffee shark tank', growth: '+480%' },
        { text: 'best instant coffee india', growth: '+380%' },
    ],
};
Object.keys(RISING_QUERIES).forEach(k => {
    if (GOOGLE_TRENDS_DATA[k]) {
        GOOGLE_TRENDS_DATA[k].risingQueries = RISING_QUERIES[k];
    }
});
// --- E-commerce Reviews Data with Consumer Summaries ---
const ECOMMERCE_DATA = {};

const REVIEW_SUMMARIES = {
    wakao: {
        amazon: {
            topLikes: ['Jackfruit meat texture is surprisingly close to real meat', 'Great taste in biryani and curry preparations', 'Clean label — no artificial preservatives', 'Innovative plant-based option for Indian cooking'],
            topDislikes: ['Expensive for the quantity provided', 'Requires proper cooking — raw taste is bland', 'Limited availability and frequent stockouts', 'Packaging could be more eco-friendly'],
            summary: 'Wakao has created genuine excitement in India\'s nascent plant-based meat space. The jackfruit meat is praised for its versatility in Indian recipes. Price and availability are the main barriers to repeat purchase.',
        },
        myntra: {
            topLikes: ['Not applicable — food brand'],
            topDislikes: ['Not applicable — food brand'],
            summary: 'Wakao Foods is a food brand, not available on Myntra.',
        },
    },
    bummer: {
        amazon: {
            topLikes: ['Micro-modal fabric is incredibly soft and breathable', 'Fun quirky prints are a conversation starter', 'No-ride-up design works as advertised', 'Packaging is gift-worthy and fun'],
            topDislikes: ['Premium pricing for innerwear category', 'Elastic waistband loosens after 15-20 washes', 'Limited size range for larger body types', 'Some prints fade slightly over time'],
            summary: 'Bummer is disrupting the boring innerwear market with personality-driven designs. Micro-modal fabric quality is consistently praised. Price sensitivity is the main challenge in a category dominated by Rs 99 packs.',
        },
        myntra: {
            topLikes: ['Trendy innerwear finally available on Myntra', 'Soft fabric stands out from regular brands', 'Great gifting option for friends'],
            topDislikes: ['Expensive compared to Jockey/FCUK alternatives', 'Wish they had more solid color options'],
            summary: 'Growing presence on Myntra. The fun-print positioning differentiates well. Young buyers love it as a gifting category.',
        },
    },
    flatheads: {
        amazon: {
            topLikes: ['Bamboo fiber makes them incredibly lightweight', 'All-day comfort — feels like walking on clouds', 'Sustainable materials appeal to eco-conscious buyers', 'Minimalist design works for office and casual'],
            topDislikes: ['Sole durability is questionable after 6 months', 'Limited style and color options', 'Price feels steep for an unknown brand', 'Break-in period of 3-4 days'],
            summary: 'Flatheads has a small but devoted following among sustainable fashion enthusiasts. The bamboo/merino material is genuinely differentiated. Limited style range and brand awareness are growth barriers.',
        },
        myntra: {
            topLikes: ['Unique material story stands out', 'Comfortable for daily wear'],
            topDislikes: ['Very few reviews — hard to trust', 'Not well-known yet'],
            summary: 'Early Myntra presence. Needs more reviews and visibility to gain traction.',
        },
    },
    phool: {
        amazon: {
            topLikes: ['Incense sticks smell divine — natural flower fragrance', 'Beautiful story of temple flower upcycling', 'Fleather (flower leather) products are innovative', 'Supporting women workers in Kanpur adds emotional value', 'Packaging is elegant and eco-friendly'],
            topDislikes: ['Premium pricing compared to regular incense', 'Fragrance doesn\'t last as long as chemical incense', 'Limited product range beyond incense', 'Availability issues on Amazon'],
            summary: 'Phool has created an entirely new category — upcycled temple flower products. The social impact story (women workers, river cleanup) drives strong emotional purchasing. Fleather is getting global attention as a vegan leather alternative.',
        },
        myntra: {
            topLikes: ['Not applicable — home/lifestyle brand'],
            topDislikes: ['Not applicable — home/lifestyle brand'],
            summary: 'Phool is primarily sold on Amazon and their own website. Not a Myntra category.',
        },
    },
    sidsfarm: {
        amazon: {
            topLikes: ['Milk freshness is unmatched — delivered within hours of milking', 'Can taste the difference from packaged milk instantly', 'A2 cow milk option for health-conscious families', 'Subscription model ensures daily delivery reliability', 'Transparent sourcing from own farms'],
            topDislikes: ['Only available in Hyderabad/Telangana region', 'Premium pricing vs Amul/Mother Dairy', 'Occasional delivery delays on holidays', 'Glass bottle return system can be inconvenient'],
            summary: 'Sid\'s Farm has built cult-like loyalty in Hyderabad. Customers who switch from packaged milk rarely go back. The freshness and traceability narrative is extremely powerful. Geographic limitation is the main growth constraint.',
        },
        myntra: {
            topLikes: ['Not applicable — dairy brand'],
            topDislikes: ['Not applicable — dairy brand'],
            summary: 'Sid\'s Farm is a dairy brand with direct delivery. Not available on Myntra.',
        },
    },
    koparo: {
        amazon: {
            topLikes: ['Baby-safe and pet-safe cleaning products give peace of mind', 'Floor cleaner leaves no chemical residue', 'Pleasant natural fragrance without being overpowering', 'Effective cleaning despite being non-toxic'],
            topDislikes: ['Costs 3-4x regular cleaning products', 'Needs more product to achieve same cleaning effect', 'Limited variants compared to Harpic/Lizol range', 'Some users feel it\'s not strong enough for tough stains'],
            summary: 'Koparo is tapping into the growing paranoia about chemical cleaners, especially among new parents and pet owners. Product works well for daily cleaning but struggles with heavy-duty needs. The "safe for baby" messaging is their strongest hook.',
        },
        myntra: {
            topLikes: ['Not applicable — home cleaning brand'],
            topDislikes: ['Not applicable — home cleaning brand'],
            summary: 'Koparo is a home cleaning brand, not available on Myntra.',
        },
    },
    gynoveda: {
        amazon: {
            topLikes: ['Period pain relief without painkillers is a game-changer', 'PCOD management shows visible results in 2-3 months', 'Ayurvedic approach feels safer than hormonal medication', 'Personalized treatment plans via their app', 'Strong community support from other women users'],
            topDislikes: ['Results take 2-3 months of consistent use', 'Taste of some preparations is unpleasant', 'Expensive for long-term use', 'Not a substitute for medical diagnosis'],
            summary: 'Gynoveda has found remarkable product-market fit in women\'s Ayurvedic health — a massively underserved segment. Community-driven testimonials are the primary growth driver. The period care + PCOS combination addresses two huge pain points.',
        },
        myntra: {
            topLikes: ['Not applicable — health/wellness brand'],
            topDislikes: ['Not applicable — health/wellness brand'],
            summary: 'Gynoveda sells through Amazon and their own app/website.',
        },
    },
    bareanatomy: {
        amazon: {
            topLikes: ['Personalization quiz makes you feel the product is truly custom', 'Noticeable difference in hair texture within 3-4 weeks', 'Silicone-free and sulfate-free formulations', 'Premium feel — salon-like experience at home'],
            topDislikes: ['Expensive for a shampoo/conditioner', 'Personalization feels more like marketing than science', 'Products run out fast for long hair', 'Limited offline availability to test before buying'],
            summary: 'Bare Anatomy\'s personalization angle is clever and drives high first-purchase conversion. Repeat rates depend on actual results, which are generally positive. Skeptics question if the personalization is genuinely different across variants.',
        },
        myntra: {
            topLikes: ['Discovered through Myntra beauty section', 'Premium packaging stands out', 'Good for gifting'],
            topDislikes: ['Price point is a barrier for trial', 'Unsure if personalization works via Myntra'],
            summary: 'Growing on Myntra as a premium hair care option. The personalization story is harder to convey on marketplace vs own website.',
        },
    },
    tbof: {
        amazon: {
            topLikes: ['A2 Bilona ghee is absolutely incredible — aroma and taste', 'Organic certification builds trust', 'Farm-to-table story resonates strongly', 'Multi-flora honey tastes distinctly different from commercial honey', 'Cold-pressed oils are noticeably fresher'],
            topDislikes: ['Very premium pricing — ghee is Rs 2500+/litre', 'Small packaging sizes for the price', 'Limited product availability — frequent stockouts', 'Shipping can be slow for perishables'],
            summary: 'Two Brothers has built a premium organic brand that commands loyalty through genuinely superior product quality. The farm story and founder narrative are compelling. Price is a real barrier — this is 3-5x regular grocery pricing.',
        },
        myntra: {
            topLikes: ['Not applicable — organic food brand'],
            topDislikes: ['Not applicable — organic food brand'],
            summary: 'Two Brothers is an organic food brand. Not available on Myntra.',
        },
    },
    ellementry: {
        amazon: {
            topLikes: ['Ceramic and terracotta products are genuinely handcrafted', 'Each piece feels unique with artisan touches', 'Sustainable materials and minimal plastic packaging', 'Beautiful tableware that elevates everyday dining'],
            topDislikes: ['Fragile products — breakage during delivery is common', 'Pricing is premium for everyday homeware', 'Limited replacement policy for damaged items', 'Styles may be too minimal for traditional Indian homes'],
            summary: 'Ellementry targets the urban, design-conscious homeowner who values craft and sustainability. Product quality is excellent but the fragile nature and premium pricing limit mass appeal. Strong gifting potential.',
        },
        myntra: {
            topLikes: ['Not applicable — homeware brand'],
            topDislikes: ['Not applicable — homeware brand'],
            summary: 'Ellementry is a homeware brand. Sold on their website and Amazon.',
        },
    },
    cosmix: {
        amazon: {
            topLikes: ['Sleep blend actually works — noticeable difference in sleep quality', 'Tastes good mixed with milk — not bitter like most supplements', 'Clean ingredient list with no fillers', 'Beauty blend improved skin glow over 4-6 weeks'],
            topDislikes: ['Expensive for a supplement powder', 'Jar runs out in 2-3 weeks with daily use', 'Effects are subtle and gradual', 'Limited scientific evidence for some adaptogen claims'],
            summary: 'Cosmix is riding the adaptogen/superfood wave in India. The Sleep and Beauty blends are hero products with genuine repeat customers. Taste is a differentiator — they\'ve made health supplements enjoyable. Efficacy skepticism exists but testimonials are strong.',
        },
        myntra: {
            topLikes: ['Not applicable — supplement brand'],
            topDislikes: ['Not applicable — supplement brand'],
            summary: 'Cosmix is a wellness supplement brand. Not on Myntra.',
        },
    },
    neemli: {
        amazon: {
            topLikes: ['Hyaluronic acid serum hydrates without feeling greasy', 'Clean formulations suitable for sensitive Indian skin', 'Affordable clean beauty compared to imports', 'Rosehip oil is excellent for acne scars'],
            topDislikes: ['Brand awareness is very low — hard to trust initially', 'Some products have a short shelf life', 'Results take time compared to chemical actives', 'Packaging feels basic for the price'],
            summary: 'Neemli Naturals fills a gap in affordable, clean active skincare. Products genuinely work but the brand lacks the marketing muscle of competitors like Be Minimalist. Early adopters become loyal advocates.',
        },
        myntra: {
            topLikes: ['Good clean beauty option on Myntra', 'Suitable for sensitive skin types'],
            topDislikes: ['Very few reviews — needs social proof', 'Hard to find on the platform'],
            summary: 'Early presence on Myntra. The clean beauty angle aligns with Myntra\'s curation but needs more critical mass.',
        },
    },
    samosaparty: {
        amazon: {
            topLikes: ['Frozen samosas taste freshly made — crispy and flavorful', 'Gourmet fillings like cheese-corn and paneer tikka are addictive', 'Perfect for unexpected guests — ready in 10 minutes', 'Consistent quality across orders', 'Great party snack without the prep work'],
            topDislikes: ['Expensive for samosas — Rs 40-50 per piece', 'Only available in select cities', 'Some variants are too spicy', 'Packaging could keep them crispier during transit'],
            summary: 'Samosa Party has turned a street food staple into a premium frozen brand. The convenience factor is massive for urban households. Gourmet variants differentiate from local frozen samosas. Price perception is the biggest challenge.',
        },
        myntra: {
            topLikes: ['Not applicable — food brand'],
            topDislikes: ['Not applicable — food brand'],
            summary: 'Samosa Party is a frozen food brand. Not on Myntra.',
        },
    },
    earthrhythm: {
        amazon: {
            topLikes: ['Shampoo bars last 2-3x longer than liquid shampoo', 'Refillable containers reduce plastic waste meaningfully', 'Lip balms and sunscreen are genuinely effective', 'Brand walks the sustainability talk'],
            topDislikes: ['Transition period from liquid to bar shampoo is rough', 'Some products dry out skin — not for everyone', 'Pricing is premium for conscious beauty', 'Refill system isn\'t available everywhere yet'],
            summary: 'Earth Rhythm is for the committed sustainable beauty buyer. Shampoo bars are the hero product and gateway to the brand. The refillable model is genuinely innovative but requires behavior change from consumers.',
        },
        myntra: {
            topLikes: ['Sustainable beauty option on Myntra', 'Shampoo bars are unique in the category'],
            topDislikes: ['Very niche appeal', 'Limited reviews on platform'],
            summary: 'Small but growing Myntra presence. Appeals to the eco-conscious beauty buyer.',
        },
    },
    bombaysweets: {
        amazon: {
            topLikes: ['Mithai quality rivals the best halwais — artisanal perfection', 'Creative modern twists on classic Indian sweets', 'Packaging is gorgeous — perfect for festive gifting', 'No artificial colors or preservatives'],
            topDislikes: ['Extremely expensive — Rs 500+ for a small box', 'Short shelf life due to no preservatives', 'Limited availability outside Mumbai/metros', 'Delivery packaging needs improvement for delicate sweets'],
            summary: 'Bombay Sweet Shop has elevated Indian mithai to a premium gifting category. Quality is exceptional and the modern twist on traditional sweets resonates with urban millennials. Price makes it a special-occasion purchase, not daily indulgence.',
        },
        myntra: {
            topLikes: ['Not applicable — food/sweets brand'],
            topDislikes: ['Not applicable — food/sweets brand'],
            summary: 'Bombay Sweet Shop is a confectionery brand. Not on Myntra.',
        },
    },
    staccato: {
        amazon: {
            topLikes: ['Micro-lot coffee beans are incredibly flavorful', 'Roast-to-order freshness is noticeable', 'Founder\'s passion for coffee comes through in quality', 'Tasting notes are accurate and helpful'],
            topDislikes: ['Very small brand — limited availability', 'Premium pricing even among specialty coffee', 'No cafe experience to try before buying', 'Delivery times can be unpredictable'],
            summary: 'Staccato is a purist\'s coffee brand. Ultra-small batch, roast-to-order model delivers exceptional quality. The challenge is scaling without compromising the artisan positioning.',
        },
        myntra: {
            topLikes: ['Not applicable — coffee brand'],
            topDislikes: ['Not applicable — coffee brand'],
            summary: 'Staccato is a specialty coffee brand. Not on Myntra.',
        },
    },
    snitch: {
        amazon: {
            topLikes: ['Extremely trendy designs at affordable prices', 'Co-ord sets are unbeatable for the price', 'Fast fashion that looks premium', 'Wide variety updated weekly'],
            topDislikes: ['Fabric quality inconsistent across orders', 'Sizing runs small for some items', 'Return process can be slow', 'Durability after 10-15 washes is questionable'],
            summary: 'Snitch has become the go-to for Gen-Z and young millennial men seeking trendy affordable fashion. Instagram-first brand with explosive growth. Quality consistency is the key challenge as they scale.',
        },
        myntra: {
            topLikes: ['Best affordable menswear brand on Myntra', 'Designs are always current with trends', 'Good packaging and presentation', 'Co-ord sets are a massive hit'],
            topDislikes: ['Quality variance between products', 'Fast fashion raises sustainability concerns', 'Fit inconsistency across categories'],
            summary: 'One of Myntra\'s fastest-growing menswear brands. Trend-first positioning with aggressive pricing drives massive volume. FY25 revenue crossed INR 500Cr.',
        },
    },
    mokobara: {
        amazon: {
            topLikes: ['Premium luggage at half the price of Tumi/Samsonite', 'Design aesthetic is stunning — gets compliments', 'Cabin luggage is perfectly sized and durable', 'Backpacks have smart laptop compartments'],
            topDislikes: ['Wheels could be more robust for rough handling', 'Limited service centers for repairs', 'Some color options sell out too fast', 'Zippers feel lighter than premium brands'],
            summary: 'Mokobara has cracked the aspirational luggage segment. Beautiful design, great pricing, strong social presence. Building from Bangalore with offline retail expansion.',
        },
        myntra: {
            topLikes: ['Best looking luggage brand on Myntra', 'Great for gifting — premium packaging', 'Backpacks are excellent for office use'],
            topDislikes: ['Premium pricing for online luggage', 'Want more color/pattern options'],
            summary: 'Strong Myntra presence. The aspirational design-first luggage positioning works well for the platform\'s audience.',
        },
    },
    noise: {
        amazon: {
            topLikes: ['Incredible value for money — features at half the price', 'Smartwatch quality rivals brands 3x the price', 'Regular OTA updates improve functionality', 'Wide range of watch faces and styles'],
            topDislikes: ['Battery life degrades after 6 months', 'App can be buggy and slow', 'Sensor accuracy questionable for health metrics', 'Build quality not as premium as flagship brands'],
            summary: 'Noise dominates the budget smartwatch segment in India. Volume leader with aggressive pricing and constant launches. Moving upmarket with the NoiseFit brand. Review volume is massive.',
        },
        myntra: {
            topLikes: ['Good fashion accessory options', 'Smartwatches that look like real watches'],
            topDislikes: ['Electronics support should be better', 'Limited color options on Myntra'],
            summary: 'Growing Myntra presence as watches overlap with fashion accessories.',
        },
    },
    atomberg: {
        amazon: {
            topLikes: ['BLDC motor saves 65% electricity — visible in bills', 'Silent operation is a game-changer', 'Smart features with app/remote control', 'Build quality feels premium'],
            topDislikes: ['Premium pricing vs regular fans', 'Installation support varies by city', 'App connectivity issues reported', 'Limited service network in tier-2 cities'],
            summary: 'Atomberg is disrupting India\'s massive ceiling fan market with BLDC technology. Energy savings are real and measurable. Premium positioning justified by electricity bill savings.',
        },
        myntra: {
            topLikes: ['Not applicable — electronics brand'],
            topDislikes: ['Not applicable — electronics brand'],
            summary: 'Atomberg is a consumer electronics brand. Not on Myntra.',
        },
    },
    countrydelight: {
        amazon: {
            topLikes: ['Milk freshness is noticeably different from packets', 'Wide product range — milk, curd, paneer, fruits', 'Subscription model is super convenient', 'Traceability — know which farm your milk comes from'],
            topDislikes: ['Premium pricing — 2x regular dairy', 'Delivery timing can be inconsistent', 'App needs UX improvement', 'Limited to metro cities only'],
            summary: 'Country Delight has scaled the farm-to-doorstep dairy model to 15+ cities. Strong subscription loyalty. FY25 revenue crossed INR 1500Cr with improving unit economics.',
        },
        myntra: {
            topLikes: ['Not applicable — dairy/grocery brand'],
            topDislikes: ['Not applicable — dairy/grocery brand'],
            summary: 'Country Delight is a dairy delivery brand. Not on Myntra.',
        },
    },
    licious: {
        amazon: {
            topLikes: ['Meat freshness is consistently high', 'Packaging keeps products cold during delivery', 'Wide range — chicken, mutton, seafood, ready-to-cook', 'Marinated products save cooking time'],
            topDislikes: ['Prices have increased significantly', 'Delivery slots fill up on weekends', 'Portion sizes feel smaller recently', 'Customer service response is slow'],
            summary: 'Licious pioneered the fresh meat delivery category in India. Strong brand but facing unit economics pressure. Ready-to-cook and marinated segments driving growth.',
        },
        myntra: {
            topLikes: ['Not applicable — meat delivery brand'],
            topDislikes: ['Not applicable — meat delivery brand'],
            summary: 'Licious is a fresh meat delivery brand. Not on Myntra.',
        },
    },
    mcaffeine: {
        amazon: {
            topLikes: ['Coffee body scrub is genuinely effective — visible results', 'Face wash leaves skin clean without drying', 'Addictive coffee fragrance in all products', 'Good for gifting — attractive packaging'],
            topDislikes: ['Some products can be too harsh for sensitive skin', 'Premium pricing for personal care', 'Caffeine claims feel overhyped for some products', 'Products run out fast for daily use'],
            summary: 'mCaffeine created the coffee-based personal care category in India. Hero products (body scrub, face wash) have massive repeat rates. FY25 revenue around INR 300Cr with profitability in sight.',
        },
        myntra: {
            topLikes: ['One of the top personal care brands on Myntra', 'Coffee body scrub is a bestseller', 'Good for gifting with combo packs'],
            topDislikes: ['Some products dry out skin', 'Need more variants for different skin types'],
            summary: 'Strong Myntra presence. Coffee personal care niche is well-established. The scrub range dominates the category.',
        },
    },
    vahdamteas: {
        amazon: {
            topLikes: ['Premium Darjeeling tea quality is outstanding', 'Beautiful packaging — perfect for gifting', 'Matcha quality rivals Japanese imports at better price', 'Wide variety — black, green, herbal, matcha'],
            topDislikes: ['Very premium pricing for Indian tea', 'Some blends are too mild for chai drinkers', 'Loose leaf tea not convenient for everyday', 'Smaller quantities than traditional brands'],
            summary: 'Vahdam Teas positioned Indian tea as a global premium brand. Strong US/international sales. Gift sets are the hero category. Moving into wellness teas and matcha.',
        },
        myntra: {
            topLikes: ['Not applicable — tea brand'],
            topDislikes: ['Not applicable — tea brand'],
            summary: 'Vahdam Teas is a premium tea brand. Not on Myntra.',
        },
    },
    plumgoodness: {
        amazon: {
            topLikes: ['Green tea face wash is a cult favorite', 'Vegan and cruelty-free genuinely', 'Vitamin C serum shows visible brightening', 'Good range across skincare and makeup'],
            topDislikes: ['Pricing creep — products getting expensive', 'Some new launches feel rushed', 'Availability issues during sales', 'Lip products need better shade range'],
            summary: 'Plum built one of India\'s largest vegan beauty brands. FY25 revenue crossed INR 500Cr. Green Tea range is iconic. Expanding into makeup and premium skincare.',
        },
        myntra: {
            topLikes: ['One of Myntra\'s top beauty brands', 'Green Tea range is a must-have', 'Good sales and combo offers'],
            topDislikes: ['Some products available cheaper on own website', 'Need better shade matching for complexion products'],
            summary: 'Dominant Myntra beauty brand. Vegan positioning resonates strongly with the platform\'s audience.',
        },
    },
    bsc: {
        amazon: {
            topLikes: ['Shaving cream quality is genuinely premium', 'Trimmer is excellent value for money', 'Beard care range is comprehensive', 'Packaging and brand aesthetic are premium'],
            topDislikes: ['Razor blades expensive on subscription', 'Trimmer durability concerns after 1 year', 'Face wash range is average', 'Body care products feel like line extensions'],
            summary: 'BSC built the men\'s grooming D2C category in India. Strong in shaving and beard care. Expanding to full men\'s personal care but diluting the core positioning. FY25 revenue ~INR 300Cr.',
        },
        myntra: {
            topLikes: ['Good men\'s grooming range', 'Beard care products are popular'],
            topDislikes: ['Premium pricing on Myntra', 'Limited grooming tools availability'],
            summary: 'Steady Myntra presence in men\'s grooming. Competing with more brands entering the space.',
        },
    },
    ragecoffee: {
        amazon: {
            topLikes: ['Instant coffee with added vitamins is unique', 'Actually tastes good for instant coffee', 'Convenient for office — no brewing needed', 'Shark Tank appearance added credibility'],
            topDislikes: ['Expensive for instant coffee category', 'Vitamin benefits hard to verify', 'Flavored variants are hit or miss', 'Packaging could be more premium'],
            summary: 'Rage Coffee differentiated with vitamins-infused instant coffee. Strong Shark Tank boost. Growing distribution. FY25 revenue ~INR 100Cr. The vitamin-coffee positioning is unique.',
        },
        myntra: {
            topLikes: ['Not applicable — coffee brand'],
            topDislikes: ['Not applicable — coffee brand'],
            summary: 'Rage Coffee is a food/beverage brand. Not on Myntra.',
        },
    },
};

const EC_AMAZON_BASE = { wakao: 280, bummer: 650, flatheads: 320, phool: 520, sidsfarm: 1100, koparo: 380, gynoveda: 850, bareanatomy: 480, tbof: 720, ellementry: 350, cosmix: 420, neemli: 280, samosaparty: 900, earthrhythm: 380, bombaysweets: 450, staccato: 180, snitch: 3200, mokobara: 1800, noise: 8500, atomberg: 4200, countrydelight: 2800, licious: 2200, mcaffeine: 2500, vahdamteas: 1500, plumgoodness: 3800, bsc: 2000, ragecoffee: 950 };
COMPANIES.forEach(c => {
    const amazonBase = EC_AMAZON_BASE[c.id] || 250;
    const myntraBase = c.sector === 'fashion' ? 300 + Math.random() * 800 :
                       c.sector === 'beauty' ? 200 + Math.random() * 600 : 30 + Math.random() * 150;
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
        { text: 'natural ingredients', size: 22, color: '#10b981' },
        { text: 'sustainable packaging', size: 20, color: '#10b981' },
        { text: 'genuinely effective', size: 19, color: '#10b981' },
        { text: 'farm fresh quality', size: 18, color: '#10b981' },
        { text: 'innovative product', size: 17, color: '#10b981' },
        { text: 'great for gifting', size: 16, color: '#10b981' },
        { text: 'supports local artisans', size: 19, color: '#10b981' },
        { text: 'visible results', size: 17, color: '#10b981' },
        { text: 'unique in market', size: 16, color: '#10b981' },
        { text: 'clean label', size: 15, color: '#10b981' },
    ],
    negative: [
        { text: 'premium pricing', size: 16, color: '#ef4444' },
        { text: 'limited availability', size: 15, color: '#ef4444' },
        { text: 'slow results', size: 14, color: '#ef4444' },
        { text: 'needs more variants', size: 13, color: '#ef4444' },
        { text: 'fragile in transit', size: 12, color: '#ef4444' },
    ],
    neutral: [
        { text: 'niche product', size: 13, color: '#6b7280' },
        { text: 'acquired taste', size: 12, color: '#6b7280' },
        { text: 'gradual improvement', size: 11, color: '#6b7280' },
    ],
};

// --- Website Traffic Data ---
const TRAFFIC_DATA = {};
const TR_BASE = { wakao: 45000, bummer: 180000, flatheads: 85000, phool: 220000, sidsfarm: 350000, koparo: 95000, gynoveda: 280000, bareanatomy: 150000, tbof: 200000, ellementry: 120000, cosmix: 110000, neemli: 75000, samosaparty: 320000, earthrhythm: 130000, bombaysweets: 160000, staccato: 35000, snitch: 2800000, mokobara: 850000, noise: 5500000, atomberg: 1800000, countrydelight: 1200000, licious: 2200000, mcaffeine: 1500000, vahdamteas: 680000, plumgoodness: 2000000, bsc: 1100000, ragecoffee: 420000 };
const TR_GROWTH = { wakao: 0.90, bummer: 0.75, flatheads: 0.50, phool: 0.85, sidsfarm: 0.88, koparo: 0.60, gynoveda: 0.82, bareanatomy: 0.55, tbof: 0.65, ellementry: 0.40, cosmix: 0.72, neemli: 0.45, samosaparty: 0.92, earthrhythm: 0.52, bombaysweets: 0.68, staccato: 0.42, snitch: 1.15, mokobara: 0.95, noise: 0.45, atomberg: 0.68, countrydelight: 0.82, licious: 0.40, mcaffeine: 0.72, vahdamteas: 0.55, plumgoodness: 0.65, bsc: 0.50, ragecoffee: 0.70 };
COMPANIES.forEach(c => {
    const base = TR_BASE[c.id] || 60000;
    const growth = TR_GROWTH[c.id] || 0.3;
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
    wakao: {
        reddit: {
            summary: 'Wakao Foods appears in r/IndianFood and r/PlantBasedDiet threads as India\'s answer to Beyond Meat. Users share recipe experiments with jackfruit meat. The Shark Tank appearance drove a spike in curiosity posts.',
            topLikes: ['Jackfruit meat works brilliantly in biryani and curry', 'Finally a plant-based option designed for Indian cooking', 'Clean label with no weird additives', 'Shark Tank validation adds credibility'],
            topDislikes: ['Premium pricing limits regular use', 'Requires proper seasoning — bland on its own', 'Availability is patchy across cities', 'Texture not convincing for hardcore meat lovers'],
        },
        instagram: {
            summary: 'Instagram presence growing via food blogger collaborations. Recipe reels featuring Wakao in Indian dishes perform well. The "plant-based biryani" content goes viral periodically.',
            topLikes: ['Recipe content is creative and shareable', 'Plant-based Indian food narrative resonates', 'Founder story is compelling'],
            topDislikes: ['Low follower count limits organic reach', 'Need more relatable everyday cooking content', 'Product photography could be more appetizing'],
        },
        linkedin: {
            summary: 'Wakao founders are active on LinkedIn sharing the plant-based meat opportunity in India. Posts about Shark Tank journey and food-tech innovation get engagement from VC and food industry circles.',
            topLikes: ['Plant-based meat market in India narrative', 'Shark Tank journey storytelling', 'Sustainability + food-tech positioning'],
            topDislikes: ['Niche audience on LinkedIn', 'Limited business metrics shared'],
        },
    },
    phool: {
        reddit: {
            summary: 'Phool\'s story of upcycling temple flowers into incense and vegan leather (Fleather) is one of the most-shared Indian startup stories on Reddit. r/ZeroWaste and r/Sustainability threads feature them regularly. The social impact angle drives emotional engagement.',
            topLikes: ['Temple flower upcycling is a genuinely novel concept', 'Fleather vegan leather getting international attention', 'Women empowerment story resonates deeply', 'Incense quality rivals premium Japanese brands'],
            topDislikes: ['Limited product range — mostly incense', 'Fleather products not yet widely available', 'Premium pricing for incense category'],
        },
        instagram: {
            summary: 'Phool\'s Instagram is a masterclass in purpose-driven content. Temple flower collection, women workers\' stories, and river cleanup impact drive exceptional engagement. The visual storytelling is powerful.',
            topLikes: ['Impact storytelling is world-class', 'Visual content of flower collection is beautiful', 'Women workers\' stories humanize the brand', 'Fleather product reveals generate excitement'],
            topDislikes: ['Content can feel repetitive with same narrative', 'Need more product-focused content', 'Limited engagement beyond impact audience'],
        },
        linkedin: {
            summary: 'Phool is a LinkedIn darling — the social enterprise narrative, IIT founder, Shark Tank success, and circular economy model generate massive engagement. Featured in multiple international publications, boosting LinkedIn discussion.',
            topLikes: ['Circular economy model cited as exemplary', 'Founder\'s IIT-to-social-enterprise journey inspires', 'International media coverage adds prestige', 'Sustainability + profitability narrative'],
            topDislikes: ['Risk of being seen as more story than scale', 'Limited financial transparency in posts'],
        },
    },
    sidsfarm: {
        reddit: {
            summary: 'Sid\'s Farm has passionate advocates on r/Hyderabad and r/india. The "you can taste the difference" testimonials are common. Discussions often compare it to childhood milk quality. The subscription model is praised for convenience.',
            topLikes: ['Freshness is incomparable to packaged milk', 'A2 cow milk option for health benefits', 'Subscription ensures daily doorstep delivery', 'Transparent sourcing from own farms'],
            topDislikes: ['Only available in Hyderabad — when will it expand?', 'Premium pricing vs regular dairy', 'Occasional delivery misses on holidays', 'Limited product range beyond milk'],
        },
        instagram: {
            summary: 'Instagram content focuses on farm life, cow care, and fresh milk journey. Videos of milking process and farm operations build transparency. Local Hyderabad food bloggers are strong advocates.',
            topLikes: ['Farm transparency content builds trust', 'Cow care videos resonate with animal lovers', 'Local influencer advocacy is authentic', 'Fresh milk journey content is compelling'],
            topDislikes: ['Geographically limited appeal', 'Content variety is narrow', 'Need more recipe/usage content'],
        },
        linkedin: {
            summary: 'Founder Kishore Indukuri\'s LinkedIn posts about leaving IT for dairy farming are inspirational content gold. The D2C dairy model is discussed as an innovative disruption of the dairy supply chain.',
            topLikes: ['IT-to-dairy founder story is inspiring', 'D2C dairy supply chain innovation', 'Growth metrics from a single city are impressive', 'Unit economics discussion interests investors'],
            topDislikes: ['Geographic limitation raises scalability questions', 'Limited operational scale insights'],
        },
    },
    gynoveda: {
        reddit: {
            summary: 'Gynoveda has a strong presence in women\'s health discussions on Reddit. Personal testimonials about period pain relief and PCOD management are common. The community-driven approach creates organic advocacy.',
            topLikes: ['Period pain relief without chemicals is life-changing', 'PCOD management results with consistent use', 'Community of women sharing experiences', 'Ayurvedic approach feels safer than hormones'],
            topDislikes: ['Results require 2-3 months of patience', 'Not a substitute for medical advice', 'Taste of some formulations is poor', 'Expensive for long-term use'],
        },
        instagram: {
            summary: 'Gynoveda\'s Instagram is a safe space for women\'s health discussions. Taboo-breaking content about periods and PCOD drives high engagement. Testimonial reels from real users are their strongest content format.',
            topLikes: ['Breaking taboos around period health', 'Real user testimonials are powerful', 'Supportive community vibe', 'Educational content about women\'s health'],
            topDislikes: ['Content can be overly emotional', 'Need more scientific backing in posts', 'Limited diversity in testimonials'],
        },
        linkedin: {
            summary: 'Gynoveda is discussed as a case study in building a community-first D2C brand. The women\'s health market opportunity in India is a recurring LinkedIn topic that references them.',
            topLikes: ['Community-first brand building model', 'Women\'s health market opportunity discussion', 'Shark Tank appearance adds credibility'],
            topDislikes: ['Limited thought leadership beyond brand story', 'Need more data-driven content'],
        },
    },
    samosaparty: {
        reddit: {
            summary: 'Samosa Party generates enthusiastic discussion on r/bangalore and r/IndianFood. The gourmet frozen samosa concept delights Reddit foodies. Taste comparisons with local street food are common and mostly favorable.',
            topLikes: ['Frozen samosas that taste freshly made', 'Gourmet variants are creative and delicious', 'Perfect for lazy weekends and unexpected guests', 'Consistent quality across orders'],
            topDislikes: ['Price is steep — Rs 40-50 per samosa', 'Limited city availability frustrates users', 'Some variants too experimental for purists', 'Street food should not be premium-priced debate'],
        },
        instagram: {
            summary: 'Instagram is Samosa Party\'s strongest channel. Food reels showing crispy golden samosas get massive engagement. User unboxing and taste-test content drives organic growth. Festival and party-themed content performs well.',
            topLikes: ['Food photography is incredibly appetizing', 'Unboxing reels go viral regularly', 'Party hosting content is relatable', 'New flavor launches create buzz'],
            topDislikes: ['Content is very product-focused', 'Limited brand story beyond food', 'Could do more recipe/pairing content'],
        },
        linkedin: {
            summary: 'Samosa Party is cited in food-tech and D2C discussions on LinkedIn. The frozen snack market opportunity in India and cloud kitchen model are popular discussion topics.',
            topLikes: ['Frozen food market in India growing rapidly', 'Unique brand positioning in commoditized category', 'Growth from Bangalore to multiple cities'],
            topDislikes: ['Limited founder presence on LinkedIn', 'Need more operational insight content'],
        },
    },
    bummer: {
        reddit: {
            summary: 'Bummer appears in men\'s fashion and innerwear discussions. Users love the fun prints and micro-modal comfort. The brand is recommended in "upgrade your basics" threads. Quality debates are minor — most agree it\'s worth the premium.',
            topLikes: ['Micro-modal fabric is genuinely superior', 'Fun prints make innerwear exciting', 'No-ride-up design actually works', 'Great packaging for gifting'],
            topDislikes: ['Premium pricing vs regular innerwear', 'Elastic could last longer', 'Limited size range for larger bodies', 'Need more solid/minimal options'],
        },
        instagram: {
            summary: 'Bummer\'s Instagram is bold, colorful, and cheeky. The fun-print innerwear content stands out in feeds. Unboxing and gifting content performs well. The brand tone is playful, targeting 20-35 year olds.',
            topLikes: ['Bold visual identity stands out', 'Print design creativity', 'Gifting-focused content works well', 'Playful brand tone resonates with millennials'],
            topDislikes: ['Content can feel repetitive — always about prints', 'Limited lifestyle context', 'Need more body-positive messaging'],
        },
        linkedin: {
            summary: 'Occasional mentions in D2C fashion innovation threads. The innerwear market disruption narrative generates some interest among consumer brand investors.',
            topLikes: ['Innerwear market disruption angle', 'Brand differentiation through design'],
            topDislikes: ['Very limited LinkedIn presence', 'Category may seem niche for LinkedIn audience'],
        },
    },
    tbof: {
        reddit: {
            summary: 'Two Brothers has passionate advocates on r/india and r/organicfarming. The A2 Bilona ghee is frequently recommended as "the best ghee in India." Price debates are heated but loyalists defend the premium.',
            topLikes: ['Ghee quality is unmatched — genuinely artisanal', 'Farm transparency and organic certification', 'Founder brothers\' story is authentic', 'Products taste noticeably different from mass brands'],
            topDislikes: ['Pricing is prohibitively expensive for most', 'Frequent stockouts frustrate loyal customers', 'Limited product range beyond ghee/honey/oils', 'Shipping costs add to already premium prices'],
        },
        instagram: {
            summary: 'Instagram showcases farm life, traditional production methods, and the brothers\' journey. The authentic rural narrative appeals to urban conscious consumers. Recipe content using their products drives engagement.',
            topLikes: ['Authentic farm-to-table storytelling', 'Traditional Bilona process videos fascinate', 'Brothers\' personal journey is compelling', 'Recipe content using premium ingredients'],
            topDislikes: ['Content feels slow-paced for Instagram', 'Limited urban lifestyle integration', 'Need more quick recipe content'],
        },
        linkedin: {
            summary: 'The Two Brothers story is a LinkedIn favorite — urban professionals returning to farming. Posts about organic farming economics and rural entrepreneurship get strong engagement.',
            topLikes: ['Corporate-to-farming narrative inspires', 'Organic market insights shared regularly', 'Rural entrepreneurship case study', 'Premium D2C food brand building story'],
            topDislikes: ['Limited scale discussion', 'Pricing justification needs more transparency'],
        },
    },
    bareanatomy: {
        reddit: {
            summary: 'Bare Anatomy appears in hair care discussions on r/IndianSkincareAddicts. The personalization quiz is discussed — some find it genuinely helpful, others see it as marketing. Product results are generally positive.',
            topLikes: ['Personalization makes the experience feel premium', 'Silicone-free formula improves hair over time', 'Good for different hair types based on quiz', 'Premium salon-like experience at home'],
            topDislikes: ['Skepticism about how personalized it really is', 'Expensive for regular hair care', 'Products run out quickly', 'Limited transparency about formulation differences'],
        },
        instagram: {
            summary: 'Instagram content combines hair care education with personalization messaging. Before/after hair transformation content drives engagement. The premium aesthetic appeals to urban millennials.',
            topLikes: ['Hair transformation content is compelling', 'Premium brand aesthetic', 'Hair quiz promotion drives engagement', 'Educational hair care tips'],
            topDislikes: ['Content is too polished — needs relatability', 'Limited diversity in hair types shown', 'Personalization story can feel gimmicky'],
        },
        linkedin: {
            summary: 'Bare Anatomy discussed in personalization-as-D2C-strategy threads. The customized beauty products market is a growing LinkedIn topic.',
            topLikes: ['Personalization trend in D2C beauty', 'Data-driven product customization narrative'],
            topDislikes: ['Very limited brand presence on LinkedIn', 'Need more business metrics'],
        },
    },
    snitch: {
        reddit: { summary: 'Snitch dominates r/IndianFashionAdvice and menswear threads. Users love the trend-first designs at accessible prices. Quality debates exist but value-for-money consensus is strong.', topLikes: ['Best affordable trendy menswear in India', 'Co-ord sets are unbeatable', 'New drops every week keep it fresh', 'Instagram reels drive viral discovery'], topDislikes: ['Quality inconsistency across orders', 'Fast fashion sustainability concerns', 'Sizing runs small', 'Durability after multiple washes'] },
        instagram: { summary: 'Instagram is Snitch\'s primary channel with 1M+ followers. Reel-first strategy with trending audio and fashion transitions drives massive engagement. Influencer army creates constant content.', topLikes: ['Reel content is incredibly engaging', 'Influencer collaborations are spot-on', 'New collection drops create FOMO', 'Styling content is highly shareable'], topDislikes: ['Content can feel repetitive', 'Over-reliance on influencer marketing', 'Need more size-inclusive content'] },
        linkedin: { summary: 'Snitch founder Siddharth Dungarwal shares growth metrics openly on LinkedIn. FY25 INR 500Cr+ revenue story generates massive engagement. The bootstrapped-to-scale narrative inspires.', topLikes: ['Bootstrapped to INR 500Cr revenue story', 'Founder transparency on metrics', 'D2C menswear growth case study'], topDislikes: ['Sustainability strategy questions', 'Fast fashion model scrutiny'] },
    },
    mokobara: {
        reddit: { summary: 'Mokobara is the darling of r/IndianProducts and travel communities. Users compare favorably to Tumi/Away at fraction of the price. Unboxing posts generate excitement.', topLikes: ['Premium design at Indian pricing', 'Cabin luggage is perfectly sized', 'Gets compliments everywhere', 'Backpacks are excellent for work'], topDislikes: ['Wheel durability concerns', 'Limited service centers', 'Some color options always sold out'] },
        instagram: { summary: 'Visual-first brand with stunning product photography. Travel influencer collaborations drive discovery. The aesthetic consistency across content is exceptional.', topLikes: ['Visual brand identity is world-class', 'Travel content is aspirational', 'Product photography is stunning', 'Influencer partnerships are authentic'], topDislikes: ['Content is too aspirational — needs relatability', 'Limited user-generated content', 'Need more product detail content'] },
        linkedin: { summary: 'Co-founders Sangeet and Navin are active on LinkedIn. The "building a luggage brand from scratch" journey content gets strong engagement. Raising series B discussions.', topLikes: ['Founder journey is inspiring', 'Brand building insights are valuable', 'Design-first D2C approach discussed'], topDislikes: ['Limited operational insights', 'Need more financial transparency'] },
    },
    countrydelight: {
        reddit: { summary: 'Country Delight is heavily discussed in city-specific subreddits. The milk quality vs price debate is a constant thread. Subscribers are loyal advocates who actively defend the premium.', topLikes: ['Milk freshness is incomparable to packets', 'Subscription convenience is excellent', 'Product range expanding — curd, paneer, fruits', 'Farm traceability builds trust'], topDislikes: ['2x pricing vs regular dairy', 'Delivery timing inconsistency', 'App UX needs improvement', 'Limited to metro cities'] },
        instagram: { summary: 'Content focuses on farm sourcing, freshness testing, and family health. Mom-focused content performs exceptionally well. User testimonials drive organic growth.', topLikes: ['Farm-to-home story is powerful', 'Mom and family health content resonates', 'User testimonials are authentic', 'Product freshness content is convincing'], topDislikes: ['Content variety is limited', 'Need more recipe/usage content', 'Urban-only narrative limits appeal'] },
        linkedin: { summary: 'CEO Chakradhar Gade\'s LinkedIn posts about disrupting dairy supply chain get massive engagement. FY25 INR 1500Cr+ revenue and path to profitability are discussed extensively.', topLikes: ['Dairy supply chain disruption narrative', 'Revenue growth metrics are impressive', 'Unit economics improvement story', 'City expansion strategy insights'], topDislikes: ['Profitability timeline questions', 'Competition from Sid\'s Farm etc.'] },
    },
    mcaffeine: {
        reddit: { summary: 'mCaffeine dominates the coffee personal care niche on social media. The body scrub has become a viral sensation with user transformation content. Strong presence across all platforms.', topLikes: ['Coffee body scrub results are visible', 'Brand has created an entirely new category', 'Packaging is Instagram-worthy', 'Good for gifting'], topDislikes: ['Some products too harsh for sensitive skin', 'Caffeine skincare claims need more backing', 'Products run out fast'] },
        instagram: { summary: 'Instagram is the brand\'s strongest channel with massive engagement on transformation content. User-generated scrub routines go viral regularly.', topLikes: ['Transformation content drives engagement', 'Coffee aesthetic is unique and consistent', 'User-generated content is abundant'], topDislikes: ['Content focused too heavily on scrub range', 'Need more diverse product content'] },
        linkedin: { summary: 'mCaffeine founder shares D2C beauty brand building insights. The journey from niche to scale is a popular case study.', topLikes: ['Category creation in personal care', 'Scale without heavy discounting'], topDislikes: ['Limited thought leadership beyond brand'] },
    },
    noise: {
        reddit: { summary: 'Noise is the most discussed budget smartwatch on Indian Reddit. Comparison posts with Fire-Boltt and boAt are constant. Value-for-money consensus is strong but upgrade complaints exist.', topLikes: ['Incredible features at budget price', 'Regular software updates', 'Wide range of styles and faces'], topDislikes: ['Battery degradation over time', 'App is buggy', 'Health metrics accuracy questionable', 'Build quality concerns'] },
        instagram: { summary: 'Massive Instagram presence with 2M+ followers. Product launch reels and lifestyle content drive engagement. Celebrity endorsements amplify reach.', topLikes: ['Product launch content is exciting', 'Celebrity collaborations add prestige', 'Lifestyle positioning beyond just tech'], topDislikes: ['Too many launches feel confusing', 'Need more real-user content'] },
        linkedin: { summary: 'Co-founders Amit and Gaurav share wearables market insights on LinkedIn. The journey from accessories to smart wearables is discussed in tech circles.', topLikes: ['Wearables market insight sharing', 'India-first smart device narrative'], topDislikes: ['Valuation concerns in competitive market'] },
    },
    atomberg: {
        reddit: { summary: 'Atomberg is the go-to recommendation in r/IndianProducts fan discussions. BLDC technology and energy savings are consistently praised. Comparison posts with Havells/Orient are common.', topLikes: ['65% electricity savings are real and measurable', 'Silent operation is transformative', 'Smart features with app control', 'Premium build quality'], topDislikes: ['Premium pricing vs regular fans', 'Service network limited in small cities', 'App connectivity issues'] },
        instagram: { summary: 'Content focuses on energy savings, smart home, and premium design. The "switch and save" narrative drives engagement. Home influencer collaborations work well.', topLikes: ['Energy saving content is practical', 'Smart home integration content', 'Before/after electricity bill content'], topDislikes: ['Content is too functional — needs emotion', 'Limited lifestyle integration'] },
        linkedin: { summary: 'Atomberg founders share deeply technical content about BLDC motors and energy efficiency. The hardware startup journey resonates with tech-savvy LinkedIn audience.', topLikes: ['Deep tech + consumer brand narrative', 'Energy efficiency mission', 'Hardware startup insights'], topDislikes: ['Content can be too technical', 'Market size questions'] },
    },
};

// Default social summary for brands without detailed entries
const DEFAULT_SOCIAL_SUMMARY = {
    reddit: { summary: 'Emerging presence on Reddit with growing discussions among early adopters.', topLikes: ['Innovative product concept', 'Good quality for the price'], topDislikes: ['Low brand awareness', 'Limited availability'] },
    instagram: { summary: 'Building Instagram presence with product-focused content.', topLikes: ['Clean visual identity', 'Product quality visible in posts'], topDislikes: ['Low follower count', 'Need more engagement'] },
    linkedin: { summary: 'Minimal LinkedIn presence. Occasionally mentioned in D2C ecosystem discussions.', topLikes: ['Innovative brand model'], topDislikes: ['Very limited presence'] },
};

// --- Sentiment Mood Timeline (12-month evolution) ---
const MOOD_TIMELINE = {
    wakao: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'curious', score: 48, theme: 'Early buyers experimenting with jackfruit meat. Mixed reactions — some love it, others expected more meat-like texture. Recipe guidance was lacking.' },
            { quarter: 'Q2 2025', mood: 'improving', score: 58, theme: 'Shark Tank appearance drove trial purchases. Brand added recipe cards and cooking tips. Biryani and curry use cases emerged as winners.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 68, theme: 'Repeat purchases growing. Community sharing recipes on social media. New marinaded variants launched. Quality consistency improved.' },
            { quarter: 'Q1 2026', mood: 'enthusiastic', score: 76, theme: 'Word-of-mouth driving organic growth. Restaurant partnerships adding credibility. Being featured in "best plant-based" lists.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'niche', score: 42, theme: 'Reddit: scattered mentions in plant-based threads. Instagram: minimal presence. Very niche audience.' },
            { quarter: 'Q2 2025', mood: 'buzzing', score: 58, theme: 'Shark Tank drove social media spike. Food bloggers experimenting. Recipe content emerging.' },
            { quarter: 'Q3 2025', mood: 'growing', score: 68, theme: 'Recipe videos going viral. Reddit recommendations becoming common. Instagram food community adopting.' },
            { quarter: 'Q1 2026', mood: 'advocating', score: 78, theme: 'Organic advocacy growing. Community creating content. LinkedIn attention from food-tech investors.' },
        ],
    },
    phool: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'intrigued', score: 55, theme: 'Buyers attracted by the temple flower upcycling story. Incense quality praised. Impact story drives first purchase but product needs to stand on its own.' },
            { quarter: 'Q2 2025', mood: 'positive', score: 65, theme: 'Repeat purchases growing for incense. Gifting use case emerging. Fleather products creating premium buzz.' },
            { quarter: 'Q3 2025', mood: 'strong', score: 75, theme: 'Festive season drove gifting sales. Product range expanding. Quality consistency earning trust.' },
            { quarter: 'Q1 2026', mood: 'excellent', score: 84, theme: 'International interest in Fleather boosting brand perception. ITC partnership validates quality. Strong repeat purchase rate.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'inspiring', score: 62, theme: 'Social impact story shared widely. Reddit sustainability threads feature Phool regularly. Instagram impact content performs well.' },
            { quarter: 'Q2 2025', mood: 'viral', score: 74, theme: 'Fleather announcement went viral across platforms. International media coverage amplified social discussion.' },
            { quarter: 'Q3 2025', mood: 'sustained', score: 78, theme: 'Consistent social engagement. LinkedIn becoming a strong channel. Forbes/Bloomberg features shared widely.' },
            { quarter: 'Q1 2026', mood: 'iconic', score: 88, theme: 'Becoming a symbol of Indian social enterprise. LinkedIn engagement at peak. Community advocacy organic and sustained.' },
        ],
    },
    sidsfarm: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'loyal', score: 72, theme: 'Existing subscribers are deeply loyal. Freshness is the primary driver. Expansion beyond Hyderabad is the most requested feature.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 76, theme: 'New product additions (curd, paneer) received well. Subscription base growing steadily. Word-of-mouth remains the primary acquisition channel.' },
            { quarter: 'Q3 2025', mood: 'strong', score: 80, theme: 'Premium positioning justified by quality. Customer retention rates are exceptional. Delivery logistics improved.' },
            { quarter: 'Q1 2026', mood: 'excellent', score: 85, theme: 'Brand becomes a Hyderabad institution. Expansion to Bangalore announced. Product range deepening with flavored milk and ghee.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'local hero', score: 65, theme: 'Strong Hyderabad-focused social presence. Local food bloggers are passionate advocates. Limited national social reach.' },
            { quarter: 'Q2 2025', mood: 'expanding', score: 70, theme: 'Founder\'s LinkedIn posts gaining wider traction. Instagram farm content attracting national audience. Reddit recommendations beyond Hyderabad threads.' },
            { quarter: 'Q3 2025', mood: 'inspiring', score: 76, theme: 'D2C dairy model gaining attention. LinkedIn posts about IT-to-dairy journey go viral. Social advocacy growing.' },
            { quarter: 'Q1 2026', mood: 'national buzz', score: 82, theme: 'Bangalore expansion creates national social buzz. LinkedIn feature articles. Instagram following grows beyond Hyderabad.' },
        ],
    },
    gynoveda: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'building trust', score: 52, theme: 'New buyers cautious about Ayurvedic claims. Positive testimonials from early adopters building confidence. PCOD products gaining traction.' },
            { quarter: 'Q2 2025', mood: 'gaining ground', score: 62, theme: 'Community testimonials driving conversions. 90-day results posts becoming common. Shark Tank appearance adds mainstream credibility.' },
            { quarter: 'Q3 2025', mood: 'strong', score: 73, theme: 'Repeat purchase rate very high among converts. Word-of-mouth from friends/family is primary acquisition. Product range expanding.' },
            { quarter: 'Q1 2026', mood: 'passionate', score: 82, theme: 'Brand has built a movement, not just a product. Customer advocacy is exceptional. Community support groups are active.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'taboo-breaking', score: 55, theme: 'Period health content breaking taboos on social media. Reddit discussions cautious but curious. Instagram creating safe space.' },
            { quarter: 'Q2 2025', mood: 'community', score: 66, theme: 'Women sharing personal stories publicly. Instagram testimonials driving growth. Reddit health threads recommending Gynoveda.' },
            { quarter: 'Q3 2025', mood: 'movement', score: 76, theme: 'Becoming a women\'s health movement. Social content driving both awareness and sales. LinkedIn featuring as community-building case study.' },
            { quarter: 'Q1 2026', mood: 'iconic', score: 85, theme: 'One of the strongest community-driven brands in Indian D2C. Social advocacy at peak. Women recommending to friends and family.' },
        ],
    },
    samosaparty: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'surprised', score: 60, theme: 'Buyers pleasantly surprised by frozen samosa quality. "Tastes freshly made" is the dominant review theme. Price skepticism exists but taste wins.' },
            { quarter: 'Q2 2025', mood: 'hooked', score: 70, theme: 'Repeat orders surging. Party and gathering use case driving bulk orders. New gourmet variants create excitement. Convenience factor appreciated.' },
            { quarter: 'Q3 2025', mood: 'advocating', score: 78, theme: 'Strong word-of-mouth — customers gifting to friends. Festival season drives massive spike. Multiple city expansion adds new customer base.' },
            { quarter: 'Q1 2026', mood: 'mainstream', score: 84, theme: 'Moving from novelty to household staple in served cities. Subscription model gaining traction. Quality consistency maintained during scaling.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'curious', score: 52, theme: 'Initial social buzz around "premium samosa" concept. Reddit foodies intrigued. Instagram unboxing content emerging.' },
            { quarter: 'Q2 2025', mood: 'viral food', score: 68, theme: 'Food bloggers driving Instagram engagement. Reddit taste reviews going viral. The "Rs 50 samosa" debate creates awareness.' },
            { quarter: 'Q3 2025', mood: 'beloved', score: 78, theme: 'Party hosting content goes viral. User-generated content driving growth. Becoming the go-to party snack brand.' },
            { quarter: 'Q1 2026', mood: 'cult status', score: 86, theme: 'Cult following established. Social media is the primary discovery channel. LinkedIn food-tech discussions feature the brand.' },
        ],
    },
    bummer: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'novelty', score: 55, theme: 'First-time buyers attracted by fun prints. Micro-modal comfort is a genuine surprise. Gifting use case is strong. Price pushback from value buyers.' },
            { quarter: 'Q2 2025', mood: 'comfortable', score: 64, theme: 'Repeat purchases driven by fabric comfort. Customers upgrading entire innerwear drawer. Print collections creating seasonal excitement.' },
            { quarter: 'Q3 2025', mood: 'loyal', score: 72, theme: 'Brand loyalty building. Customers recommend to friends. New collections eagerly awaited. Quality concerns (elastic) addressed.' },
            { quarter: 'Q1 2026', mood: 'advocating', score: 79, theme: 'Strong repeat customer base. Gifting during occasions drives new customer acquisition. Brand expanding into loungewear.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'cheeky', score: 50, theme: 'Bold innerwear content stands out on social. Reddit discussions mostly in fashion threads. Instagram unboxing content performing well.' },
            { quarter: 'Q2 2025', mood: 'fun', score: 60, theme: 'Print reveal content driving engagement. Gifting-focused campaigns gaining traction. Reddit recommendations increasing.' },
            { quarter: 'Q3 2025', mood: 'trending', score: 70, theme: 'Influencer partnerships expanding reach. Social media becoming primary discovery channel. Brand tone resonating with millennials.' },
            { quarter: 'Q1 2026', mood: 'established', score: 77, theme: 'Recognized innerwear brand on social media. User-generated content growing. LinkedIn interest from fashion-tech investors.' },
        ],
    },
};

// Default mood timeline for brands without detailed entries
const DEFAULT_MOOD_TIMELINE = {
    ecommerce: [
        { quarter: 'Q1 2025', mood: 'emerging', score: 50, theme: 'Early customer reviews trickling in. Product quality is promising but awareness is low. Initial buyers are enthusiastic early adopters.' },
        { quarter: 'Q2 2025', mood: 'building', score: 58, theme: 'Review volume growing. Positive word-of-mouth emerging. Product iteration based on feedback visible.' },
        { quarter: 'Q3 2025', mood: 'gaining', score: 66, theme: 'Steady improvement in ratings. Repeat purchase rate increasing. Brand starting to appear in category searches.' },
        { quarter: 'Q1 2026', mood: 'positive', score: 74, theme: 'Solid foundation of positive reviews. Customer advocacy emerging. Growth trajectory encouraging.' },
    ],
    social: [
        { quarter: 'Q1 2025', mood: 'quiet', score: 40, theme: 'Minimal social presence. Occasional mentions by early adopters. Brand building awareness slowly.' },
        { quarter: 'Q2 2025', mood: 'emerging', score: 50, theme: 'Starting to appear in relevant discussions. Instagram content improving. Some Reddit mentions.' },
        { quarter: 'Q3 2025', mood: 'growing', score: 60, theme: 'Social engagement increasing. More user-generated content appearing. Community starting to form.' },
        { quarter: 'Q1 2026', mood: 'established', score: 70, theme: 'Consistent social presence. Organic advocacy growing. Brand becoming part of category conversations.' },
    ],
};
// --- Social Media Data ---
const SOCIAL_DATA = {};
const SO_REDDIT = { wakao: 800, bummer: 1500, flatheads: 600, phool: 2200, sidsfarm: 1800, koparo: 700, gynoveda: 2500, bareanatomy: 900, tbof: 1600, ellementry: 500, cosmix: 1100, neemli: 600, samosaparty: 2800, earthrhythm: 800, bombaysweets: 1200, staccato: 400, snitch: 8500, mokobara: 4200, noise: 12000, atomberg: 5500, countrydelight: 4800, licious: 6200, mcaffeine: 5000, vahdamteas: 2800, plumgoodness: 6500, bsc: 4000, ragecoffee: 2200 };
const SO_INSTA = { wakao: 12000, bummer: 35000, flatheads: 8000, phool: 45000, sidsfarm: 28000, koparo: 9000, gynoveda: 55000, bareanatomy: 18000, tbof: 22000, ellementry: 11000, cosmix: 15000, neemli: 7000, samosaparty: 65000, earthrhythm: 12000, bombaysweets: 32000, staccato: 5000, snitch: 450000, mokobara: 120000, noise: 850000, atomberg: 95000, countrydelight: 180000, licious: 250000, mcaffeine: 350000, vahdamteas: 85000, plumgoodness: 420000, bsc: 280000, ragecoffee: 75000 };
const SO_LINKEDIN = { wakao: 3000, bummer: 4500, flatheads: 2000, phool: 18000, sidsfarm: 12000, koparo: 2500, gynoveda: 8000, bareanatomy: 3500, tbof: 9000, ellementry: 3000, cosmix: 4000, neemli: 1800, samosaparty: 6000, earthrhythm: 3500, bombaysweets: 5000, staccato: 1500, snitch: 25000, mokobara: 15000, noise: 45000, atomberg: 28000, countrydelight: 22000, licious: 35000, mcaffeine: 18000, vahdamteas: 12000, plumgoodness: 20000, bsc: 16000, ragecoffee: 8000 };
COMPANIES.forEach(c => {
    SOCIAL_DATA[c.id] = {
        reddit: {
            mentions: generateWeeklyTimeSeries(26, (SO_REDDIT[c.id] || 500) / 26, 0.4, 0.35),
            sentiment: Math.round(55 + Math.random() * 30),
            topSubreddits: ['r/IndianProducts', 'r/india', 'r/IndianSkincareAddicts'],
        },
        instagram: {
            mentions: generateWeeklyTimeSeries(26, (SO_INSTA[c.id] || 8000) / 26, 0.5, 0.3),
            sentiment: Math.round(60 + Math.random() * 25),
            engagement: parseFloat((1.5 + Math.random() * 4).toFixed(1)),
        },
        linkedin: {
            mentions: generateWeeklyTimeSeries(26, (SO_LINKEDIN[c.id] || 2000) / 26, 0.35, 0.3),
            sentiment: Math.round(62 + Math.random() * 25),
            engagement: parseFloat((2.0 + Math.random() * 3.5).toFixed(1)),
        },
        commentarySummary: SOCIAL_SUMMARIES[c.id] || DEFAULT_SOCIAL_SUMMARY,
        socialSummary: SOCIAL_SUMMARIES[c.id] || DEFAULT_SOCIAL_SUMMARY,
        moodTimeline: MOOD_TIMELINE[c.id] || DEFAULT_MOOD_TIMELINE,
        viralScore: Math.round(30 + Math.random() * 55),
    };
});

// --- Social Feed Posts ---
const SOCIAL_POSTS = [
    { platform: 'reddit', subreddit: 'r/IndianFood', title: 'Made jackfruit biryani with Wakao — mind blown!', upvotes: 847, comments: 134, time: '4h ago', sentiment: 'positive', brand: 'wakao' },
    { platform: 'reddit', subreddit: 'r/IndianProducts', title: 'Phool incense sticks from temple flowers — what a beautiful concept', upvotes: 1250, comments: 198, time: '6h ago', sentiment: 'positive', brand: 'phool' },
    { platform: 'instagram', handle: '@foodiesinhyderabad', title: 'Day 365 of Sid\'s Farm milk subscription — never going back to packaged milk', likes: 3420, comments: 287, time: '2h ago', sentiment: 'positive', brand: 'sidsfarm' },
    { platform: 'reddit', subreddit: 'r/IndianSkincareAddicts', title: 'Gynoveda 90-day PCOD update — my experience and results', upvotes: 2100, comments: 456, time: '8h ago', sentiment: 'positive', brand: 'gynoveda' },
    { platform: 'instagram', handle: '@bangalorefoodie', title: 'Samosa Party cheese-corn samosas at our house party — everyone asking where to order!', likes: 5600, comments: 342, time: '3h ago', sentiment: 'positive', brand: 'samosaparty' },
    { platform: 'reddit', subreddit: 'r/IndianFashionAddicts', title: 'Bummer micro-modal underwear review — is it worth the premium?', upvotes: 680, comments: 156, time: '12h ago', sentiment: 'positive', brand: 'bummer' },
    { platform: 'linkedin', handle: 'Sustainability Today', title: 'How Phool.co is turning temple waste into vegan leather — a circular economy masterclass', likes: 4200, comments: 189, time: '5h ago', sentiment: 'positive', brand: 'phool' },
    { platform: 'instagram', handle: '@sustainablefashion.in', title: 'Flatheads bamboo sneakers — 3 month review. Comfort level: 10/10', likes: 1890, comments: 145, time: '7h ago', sentiment: 'positive', brand: 'flatheads' },
    { platform: 'reddit', subreddit: 'r/organicfarming', title: 'Two Brothers Organic Farms A2 ghee — expensive but is it worth it? My honest take', upvotes: 920, comments: 234, time: '10h ago', sentiment: 'mixed', brand: 'tbof' },
    { platform: 'linkedin', handle: 'Kishore Indukuri', title: 'From IT consulting to dairy farming — 8 years of building Sid\'s Farm. Here\'s what I learned about D2C dairy.', likes: 8500, comments: 567, time: '1d ago', sentiment: 'positive', brand: 'sidsfarm' },
    { platform: 'instagram', handle: '@wellnessblogger', title: 'Cosmix Sleep Blend 30-day challenge — here\'s what happened to my insomnia', likes: 2340, comments: 198, time: '9h ago', sentiment: 'positive', brand: 'cosmix' },
    { platform: 'reddit', subreddit: 'r/bangalore', title: 'Just tried Samosa Party for the first time. Rs 50 for a samosa seemed crazy but wow.', upvotes: 1560, comments: 312, time: '14h ago', sentiment: 'positive', brand: 'samosaparty' },
    { platform: 'linkedin', handle: 'D2C Insider', title: 'Gynoveda built a Rs 100Cr brand by talking about periods — the power of community-first commerce', likes: 3800, comments: 234, time: '1d ago', sentiment: 'positive', brand: 'gynoveda' },
    { platform: 'instagram', handle: '@mumbaimunchies', title: 'Bombay Sweet Shop Diwali box unboxing — artisanal mithai at its finest', likes: 4100, comments: 267, time: '5h ago', sentiment: 'positive', brand: 'bombaysweets' },
    { platform: 'reddit', subreddit: 'r/IndianFashionAdvice', title: 'Snitch haul review — 8 items for Rs 4000. Here\'s what\'s worth it and what\'s not.', upvotes: 3200, comments: 478, time: '3h ago', sentiment: 'positive', brand: 'snitch' },
    { platform: 'instagram', handle: '@travelwithstyle', title: 'Mokobara cabin bag survived 15 flights — still looks brand new. My honest review.', likes: 8900, comments: 567, time: '6h ago', sentiment: 'positive', brand: 'mokobara' },
    { platform: 'linkedin', handle: 'Siddharth Dungarwal', title: 'From Rs 0 to Rs 500Cr revenue — bootstrapped. No VC money. Here\'s the Snitch story.', likes: 12000, comments: 890, time: '8h ago', sentiment: 'positive', brand: 'snitch' },
    { platform: 'reddit', subreddit: 'r/IndianProducts', title: 'Atomberg fan saved Rs 400/month on my electricity bill. Here\'s the math.', upvotes: 2800, comments: 345, time: '5h ago', sentiment: 'positive', brand: 'atomberg' },
    { platform: 'instagram', handle: '@skincarejunkie', title: 'mCaffeine coffee body scrub — 30 day before/after. My skin has never been this smooth.', likes: 15000, comments: 1200, time: '2h ago', sentiment: 'positive', brand: 'mcaffeine' },
    { platform: 'linkedin', handle: 'Chakradhar Gade', title: 'Country Delight crossed INR 1500Cr revenue. From milk to a full fresh grocery platform. The journey.', likes: 9500, comments: 678, time: '1d ago', sentiment: 'positive', brand: 'countrydelight' },
    { platform: 'reddit', subreddit: 'r/IndianGaming', title: 'Noise ColorFit Pro 5 vs Fire-Boltt Phoenix — which budget smartwatch wins? My comparison.', upvotes: 1800, comments: 290, time: '10h ago', sentiment: 'mixed', brand: 'noise' },
    { platform: 'instagram', handle: '@beautyfinds', title: 'Plum Vitamin C serum 60-day review — visible brightening results. Before and after photos.', likes: 7200, comments: 445, time: '4h ago', sentiment: 'positive', brand: 'plumgoodness' },
    { platform: 'linkedin', handle: 'D2C Insider', title: 'Mokobara raised $12M Series B. The luggage D2C play is working. Here\'s why investors are excited.', likes: 5600, comments: 345, time: '12h ago', sentiment: 'positive', brand: 'mokobara' },
    { platform: 'reddit', subreddit: 'r/india', title: 'Country Delight vs Sid\'s Farm — comparing premium milk delivery services. Which is better?', upvotes: 2100, comments: 380, time: '7h ago', sentiment: 'mixed', brand: 'countrydelight' },
    { platform: 'instagram', handle: '@ragecoffeeofficial', title: 'New Irish Hazelnut Rage Coffee. Instant coffee that doesn\'t taste instant. Available now.', likes: 3400, comments: 210, time: '9h ago', sentiment: 'positive', brand: 'ragecoffee' },
];

// --- Employee Reviews Data (AmbitionBox + Glassdoor) ---
const EMPLOYEE_REVIEWS = {
    wakao: {
        ambitionbox: { rating: 3.8, totalReviews: 24, recommend: 72, ceoApproval: 78, workLife: 3.9, salary: 3.2, security: 3.4, culture: 4.1, growth: 3.5,
            likes: ['Mission-driven culture motivates the team', 'Startup energy — every voice matters', 'Innovative product space is exciting to work in'],
            dislikes: ['Early-stage salary constraints', 'Small team means wearing many hats', 'Limited HR processes and structure'],
            summary: 'Wakao employees appreciate the mission-driven culture and innovative product space. Typical early-stage challenges around compensation and structure.'
        },
        glassdoor: { rating: 3.6, totalReviews: 18, recommend: 68, ceoApproval: 75, workLife: 3.7, salary: 3.0, security: 3.2, culture: 3.9, growth: 3.4,
            likes: ['Purpose-driven work in plant-based food', 'Flat hierarchy — direct access to founders', 'Fast learning environment'],
            dislikes: ['Compensation below market for food-tech', 'Work-life balance can be tough in peak seasons', 'Benefits package is basic'],
            summary: 'Glassdoor reviews mirror AmbitionBox — strong culture but compensation gaps typical of early-stage food startups.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'energetic', score: 62, theme: 'Team excited post Shark Tank. Hiring ramp-up. Culture is strong but processes lacking.' },
            { quarter: 'Q2 2025', mood: 'growing pains', score: 58, theme: 'Rapid hiring creating culture dilution concerns. Salary benchmarking issues surfacing.' },
            { quarter: 'Q3 2025', mood: 'stabilizing', score: 65, theme: 'HR processes introduced. Team settling into roles. Product success boosting morale.' },
            { quarter: 'Q1 2026', mood: 'positive', score: 72, theme: 'Funding round improved salaries. Clear growth paths emerging. Mission continues to drive retention.' },
        ],
    },
    bummer: {
        ambitionbox: { rating: 4.0, totalReviews: 32, recommend: 78, ceoApproval: 82, workLife: 4.1, salary: 3.5, security: 3.6, culture: 4.3, growth: 3.7,
            likes: ['Fun, creative work environment matches the brand', 'Young team with great energy', 'Good creative freedom in marketing roles'],
            dislikes: ['D2C fashion margins mean conservative salaries', 'Fast-paced can mean chaotic sometimes', 'Limited senior leadership depth'],
            summary: 'Bummer\'s workplace mirrors its brand — fun, energetic, creative. Good for early-career professionals who value culture over structure.'
        },
        glassdoor: { rating: 3.8, totalReviews: 26, recommend: 74, ceoApproval: 80, workLife: 3.9, salary: 3.3, security: 3.5, culture: 4.1, growth: 3.6,
            likes: ['Brand personality extends to workplace culture', 'Marketing team has real creative autonomy', 'Collaborative environment'],
            dislikes: ['Need better compensation benchmarking', 'High expectations with lean team', 'Career path not clearly defined'],
            summary: 'Creative culture is the standout. Typical D2C challenges around compensation and scaling team structure.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'fun', score: 68, theme: 'Creative culture strong. Team enjoys brand building. Compensation could be better.' },
            { quarter: 'Q2 2025', mood: 'busy', score: 64, theme: 'Growth phase means heavy workload. New hires joining. Some process gaps.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 72, theme: 'New collections success boosts morale. Team bonding events introduced. Salaries revised.' },
            { quarter: 'Q1 2026', mood: 'strong', score: 76, theme: 'Brand recognition growing, team pride increasing. Better HR practices. Growth visible.' },
        ],
    },
    flatheads: {
        ambitionbox: { rating: 3.6, totalReviews: 18, recommend: 65, ceoApproval: 70, workLife: 3.5, salary: 3.1, security: 3.0, culture: 3.8, growth: 3.3,
            likes: ['Working on sustainable products feels meaningful', 'Small team with direct founder interaction', 'Innovative material science work'],
            dislikes: ['Very early stage — limited resources', 'Job security concerns in slow growth phase', 'Compensation is below market'],
            summary: 'Flatheads employees value the sustainability mission but face typical early-stage resource constraints. Best for those passionate about sustainable fashion.'
        },
        glassdoor: { rating: 3.4, totalReviews: 14, recommend: 60, ceoApproval: 66, workLife: 3.4, salary: 2.9, security: 2.8, culture: 3.6, growth: 3.1,
            likes: ['Unique product — exciting to tell friends about', 'Founder is genuinely passionate and hands-on', 'Learning opportunity in sustainable materials'],
            dislikes: ['Very small team — heavy workload', 'Growth has been slower than expected', 'Limited career advancement'],
            summary: 'Passion-driven workplace with honest acknowledgment of growth challenges. Suits mission-driven individuals.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'steady', score: 55, theme: 'Small team working hard. Passion for product keeps morale up. Growth concerns exist.' },
            { quarter: 'Q2 2025', mood: 'challenging', score: 50, theme: 'Market competition intensifying. Team stretched thin. Some attrition.' },
            { quarter: 'Q3 2025', mood: 'improving', score: 58, theme: 'New retail partnerships boost confidence. Product innovation continues.' },
            { quarter: 'Q1 2026', mood: 'hopeful', score: 63, theme: 'Online sales picking up. New materials generating buzz. Team cautiously optimistic.' },
        ],
    },
    phool: {
        ambitionbox: { rating: 4.3, totalReviews: 56, recommend: 88, ceoApproval: 92, workLife: 4.0, salary: 3.4, security: 3.8, culture: 4.6, growth: 4.0,
            likes: ['Deeply meaningful work — creating real social impact', 'Working with women artisans is fulfilling', 'International recognition boosts pride', 'Founder Ankit Agarwal is inspiring and accessible'],
            dislikes: ['Kanpur location limits talent pool', 'Salaries modest compared to metro startups', 'Manufacturing-heavy work can be demanding'],
            summary: 'Phool stands out as a purpose-driven workplace. Employees are genuinely proud of the social and environmental impact. The Kanpur base and startup salaries are trade-offs gladly accepted.'
        },
        glassdoor: { rating: 4.1, totalReviews: 42, recommend: 85, ceoApproval: 90, workLife: 3.8, salary: 3.2, security: 3.7, culture: 4.5, growth: 3.8,
            likes: ['Social enterprise that actually makes profit', 'Circular economy work is globally relevant', 'Media coverage and awards boost team morale'],
            dislikes: ['Location in Kanpur is a constraint', 'Scale-up phase brings operational challenges', 'Need more structured learning programs'],
            summary: 'Exceptional culture scores driven by genuine impact. Operational challenges of scaling a manufacturing-heavy social enterprise are the main friction points.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'proud', score: 75, theme: 'International media coverage boosting team pride. Fleather innovation exciting everyone.' },
            { quarter: 'Q2 2025', mood: 'ambitious', score: 78, theme: 'ITC partnership validates the model. Team energized by growth prospects.' },
            { quarter: 'Q3 2025', mood: 'thriving', score: 82, theme: 'Awards and recognition. Team expansion. Manufacturing scale-up challenging but rewarding.' },
            { quarter: 'Q1 2026', mood: 'excellent', score: 88, theme: 'Global recognition. Strong retention. Employees are the brand\'s biggest advocates.' },
        ],
    },
    sidsfarm: {
        ambitionbox: { rating: 4.1, totalReviews: 85, recommend: 82, ceoApproval: 88, workLife: 3.8, salary: 3.5, security: 3.9, culture: 4.2, growth: 3.8,
            likes: ['Founder-led culture is inspiring', 'Working in dairy is unique and grounding', 'Strong local brand — community respects the work', 'Clear operational growth visible'],
            dislikes: ['Early morning operations can be exhausting', 'Hyderabad-only limits career mobility', 'Manufacturing roles are physically demanding'],
            summary: 'Sid\'s Farm employees feel connected to a genuine mission. The hands-on dairy operations attract those who want meaningful work. Geographic limitation is accepted by most.'
        },
        glassdoor: { rating: 3.9, totalReviews: 68, recommend: 78, ceoApproval: 86, workLife: 3.6, salary: 3.3, security: 3.8, culture: 4.0, growth: 3.6,
            likes: ['Founder\'s vision for clean dairy is compelling', 'Operational excellence is a real focus', 'Good for people who want to build from scratch'],
            dislikes: ['Dairy operations mean early hours and weekend work', 'Compensation could be more competitive', 'Limited tech/digital roles'],
            summary: 'A unique workplace in the D2C dairy space. Operational intensity is balanced by strong mission alignment and founder-led culture.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'steady', score: 70, theme: 'Operations running smoothly. Team proud of customer loyalty. Expansion discussions energize.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 74, theme: 'New product launches (curd, paneer) create excitement. Hiring increasing.' },
            { quarter: 'Q3 2025', mood: 'strong', score: 78, theme: 'Brand recognition growing. Employees feel part of something special. Processes maturing.' },
            { quarter: 'Q1 2026', mood: 'exciting', score: 84, theme: 'Bangalore expansion creates career opportunities. Investment round boosts confidence and salaries.' },
        ],
    },
    koparo: {
        ambitionbox: { rating: 3.7, totalReviews: 20, recommend: 70, ceoApproval: 74, workLife: 3.8, salary: 3.2, security: 3.3, culture: 3.9, growth: 3.4,
            likes: ['Clean products mission is personally meaningful', 'Good work-life balance for a startup', 'Founders are approachable'],
            dislikes: ['Small company — limited growth paths', 'Marketing budget constraints', 'Competing against FMCG giants is daunting'],
            summary: 'Koparo offers a balanced startup experience with genuine mission alignment. Growth path limitations are the main concern.'
        },
        glassdoor: { rating: 3.5, totalReviews: 15, recommend: 66, ceoApproval: 70, workLife: 3.7, salary: 3.0, security: 3.1, culture: 3.7, growth: 3.2,
            likes: ['Meaningful work in non-toxic cleaning', 'Flat structure — ideas are heard', 'Good learning for early career'],
            dislikes: ['Salaries below market', 'Small team wears many hats', 'Category education is exhausting'],
            summary: 'Good for mission-driven individuals comfortable with early-stage constraints. The non-toxic cleaning space is genuinely motivating.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'steady', score: 58, theme: 'Small team working hard. Category education challenge is real.' },
            { quarter: 'Q2 2025', mood: 'improving', score: 62, theme: 'Customer growth boosting team confidence. New hires bringing energy.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 66, theme: 'Brand partnerships materializing. Team morale improving.' },
            { quarter: 'Q1 2026', mood: 'good', score: 70, theme: 'Market for non-toxic cleaning growing. Team sees opportunity clearly.' },
        ],
    },
    gynoveda: {
        ambitionbox: { rating: 4.2, totalReviews: 72, recommend: 85, ceoApproval: 88, workLife: 3.9, salary: 3.4, security: 3.7, culture: 4.4, growth: 3.9,
            likes: ['Working on women\'s health is deeply fulfilling', 'Community of users creates motivation', 'Ayurveda + tech combination is unique', 'Shark Tank success boosted team pride'],
            dislikes: ['Ayurveda space faces regulatory complexities', 'Customer education is time-intensive', 'Need better internal communication tools'],
            summary: 'Gynoveda employees are driven by the women\'s health mission. The community-first model creates unique workplace energy. Regulatory navigation in Ayurveda is the key challenge.'
        },
        glassdoor: { rating: 4.0, totalReviews: 58, recommend: 82, ceoApproval: 86, workLife: 3.7, salary: 3.2, security: 3.6, culture: 4.2, growth: 3.7,
            likes: ['Breaking taboos in women\'s health is rewarding', 'Direct customer testimonials are motivating', 'Strong founder vision'],
            dislikes: ['Scaling Ayurvedic products is complex', 'Compensation could be more competitive', 'Fast growth means occasional chaos'],
            summary: 'Mission-driven workplace with genuine community impact. Ayurveda space complexities and typical startup scaling challenges.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'motivated', score: 72, theme: 'Shark Tank success energizes team. Community growth drives purpose.' },
            { quarter: 'Q2 2025', mood: 'busy', score: 68, theme: 'Scaling rapidly. Some growing pains. Customer impact keeps team going.' },
            { quarter: 'Q3 2025', mood: 'strong', score: 76, theme: 'Processes maturing. Team proud of community size. Regulatory navigation improving.' },
            { quarter: 'Q1 2026', mood: 'thriving', score: 82, theme: 'Brand becoming a women\'s health movement. Employee advocacy very high.' },
        ],
    },
    bareanatomy: {
        ambitionbox: { rating: 3.9, totalReviews: 36, recommend: 75, ceoApproval: 78, workLife: 3.8, salary: 3.3, security: 3.5, culture: 4.0, growth: 3.6,
            likes: ['Tech-driven beauty company — interesting work', 'Good exposure to D2C marketing', 'Personalization tech is genuinely innovative'],
            dislikes: ['Competitive beauty market creates pressure', 'Need more structured career paths', 'Marketing spend can feel stretched'],
            summary: 'Bare Anatomy offers a unique tech-meets-beauty work experience. Good for D2C marketing professionals seeking creative+analytical roles.'
        },
        glassdoor: { rating: 3.7, totalReviews: 28, recommend: 72, ceoApproval: 76, workLife: 3.6, salary: 3.1, security: 3.4, culture: 3.8, growth: 3.5,
            likes: ['Personalization technology is exciting to work on', 'Data-driven culture', 'Good learning opportunity'],
            dislikes: ['Market competition means constant hustle', 'Compensation is average', 'Benefits could be better'],
            summary: 'Tech-forward beauty startup with good learning opportunities. Competitive market pressures are the main stress factor.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'steady', score: 62, theme: 'Team focused on growth. Personalization tech improving.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 66, theme: 'New product launches energize team. D2C beauty space heating up.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 70, theme: 'Customer reviews improving. Team seeing impact of their work.' },
            { quarter: 'Q1 2026', mood: 'confident', score: 74, theme: 'Brand awareness growing. Team retention improving. Clear path forward.' },
        ],
    },
    tbof: {
        ambitionbox: { rating: 4.0, totalReviews: 45, recommend: 80, ceoApproval: 84, workLife: 3.7, salary: 3.3, security: 3.6, culture: 4.2, growth: 3.7,
            likes: ['Working on organic farm is unique and refreshing', 'Founders\' passion for organic farming is infectious', 'Products are genuinely premium — team is proud'],
            dislikes: ['Rural location limits talent and social life', 'Farming operations are weather-dependent and stressful', 'Startup salaries in agriculture sector'],
            summary: 'Two Brothers offers a unique agri-D2C work experience. The rural setting is both a perk and a challenge. Mission-driven culture is strong.'
        },
        glassdoor: { rating: 3.8, totalReviews: 35, recommend: 76, ceoApproval: 82, workLife: 3.5, salary: 3.1, security: 3.5, culture: 4.0, growth: 3.5,
            likes: ['Organic farming mission is genuine', 'Direct farm-to-consumer model is innovative', 'Good for those tired of corporate life'],
            dislikes: ['Rural location in Maharashtra is limiting', 'Physical work can be demanding', 'Need better tech infrastructure'],
            summary: 'Authentic farm-to-table work experience. Rural location is the biggest trade-off for the mission-driven culture.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'grounded', score: 65, theme: 'Farm operations steady. Team proud of product quality. Growth exciting.' },
            { quarter: 'Q2 2025', mood: 'busy', score: 62, theme: 'Harvest season intensity. Online orders growing. Team stretched.' },
            { quarter: 'Q3 2025', mood: 'proud', score: 70, theme: 'Brand recognition growing nationally. Media features boost morale.' },
            { quarter: 'Q1 2026', mood: 'strong', score: 76, theme: 'Premium positioning paying off. Better compensation. Team retention solid.' },
        ],
    },
    ellementry: {
        ambitionbox: { rating: 3.8, totalReviews: 28, recommend: 72, ceoApproval: 76, workLife: 3.9, salary: 3.2, security: 3.4, culture: 4.1, growth: 3.5,
            likes: ['Beautiful products — proud to show friends', 'Creative work environment', 'Sustainability mission is genuine'],
            dislikes: ['Retail hours can be long', 'Limited online growth means retail-heavy model', 'Compensation could be better'],
            summary: 'Ellementry offers a creative, design-focused work environment. Good for those passionate about sustainable homeware and craft.'
        },
        glassdoor: { rating: 3.6, totalReviews: 22, recommend: 68, ceoApproval: 72, workLife: 3.7, salary: 3.0, security: 3.2, culture: 3.9, growth: 3.3,
            likes: ['Design-led brand — creative satisfaction', 'Good work culture', 'Products you can be proud of'],
            dislikes: ['Growth slower than typical D2C', 'Retail model has inherent challenges', 'Need more digital focus'],
            summary: 'Creative workplace with genuine design passion. Growth pace and compensation are areas for improvement.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'creative', score: 60, theme: 'Design team thriving. Retail operations steady. Growth slow but stable.' },
            { quarter: 'Q2 2025', mood: 'steady', score: 62, theme: 'New collections well-received. Online channel growing slowly.' },
            { quarter: 'Q3 2025', mood: 'improving', score: 66, theme: 'Festive season boosts retail. Team morale up with good sales.' },
            { quarter: 'Q1 2026', mood: 'positive', score: 70, theme: 'Online growth accelerating. New store openings creating opportunities.' },
        ],
    },
    cosmix: {
        ambitionbox: { rating: 3.9, totalReviews: 30, recommend: 76, ceoApproval: 80, workLife: 4.0, salary: 3.3, security: 3.4, culture: 4.1, growth: 3.6,
            likes: ['Wellness industry is exciting and growing', 'Team genuinely uses and believes in the products', 'Good work-life balance'],
            dislikes: ['Adaptogens market still needs education', 'Limited brand awareness means harder sales', 'Small team, many responsibilities'],
            summary: 'Cosmix employees are genuine product advocates. The wellness space is motivating. Market education remains the biggest challenge.'
        },
        glassdoor: { rating: 3.7, totalReviews: 24, recommend: 72, ceoApproval: 76, workLife: 3.8, salary: 3.1, security: 3.3, culture: 3.9, growth: 3.4,
            likes: ['Health-focused workplace', 'Founder is knowledgeable and passionate', 'Products you believe in'],
            dislikes: ['Category creation is slow and expensive', 'Compensation below D2C averages', 'Need more structured processes'],
            summary: 'Wellness-focused culture with genuine product belief. Category creation challenges mirror business growth challenges.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'passionate', score: 62, theme: 'Team believes in adaptogens mission. Market education ongoing.' },
            { quarter: 'Q2 2025', mood: 'steady', score: 64, theme: 'Sales growing. Content marketing driving awareness. Team stable.' },
            { quarter: 'Q3 2025', mood: 'growing', score: 68, theme: 'Hero products gaining traction. Team confidence building.' },
            { quarter: 'Q1 2026', mood: 'positive', score: 74, theme: 'Superfood trend accelerating. Brand recognition improving. Team optimistic.' },
        ],
    },
    neemli: {
        ambitionbox: { rating: 3.6, totalReviews: 22, recommend: 68, ceoApproval: 72, workLife: 3.7, salary: 3.0, security: 3.1, culture: 3.8, growth: 3.3,
            likes: ['Clean beauty space is growing and exciting', 'Good formulations team', 'Founders care about product quality'],
            dislikes: ['Very small team — burnout risk', 'Brand awareness too low for the product quality', 'Need more marketing investment'],
            summary: 'Neemli offers good product work in clean beauty but struggles with the same awareness challenges the brand faces externally.'
        },
        glassdoor: { rating: 3.4, totalReviews: 16, recommend: 64, ceoApproval: 68, workLife: 3.5, salary: 2.8, security: 2.9, culture: 3.6, growth: 3.1,
            likes: ['Product quality is genuinely good', 'Clean beauty mission', 'Learning opportunity in formulation'],
            dislikes: ['Compensation is below market', 'Small team stretched very thin', 'Growth is slow compared to funded competitors'],
            summary: 'Product-quality focused workplace. Resource constraints and competitive pressure are ongoing challenges.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'determined', score: 54, theme: 'Small team working hard. Good products but limited reach.' },
            { quarter: 'Q2 2025', mood: 'hopeful', score: 58, theme: 'Some traction on Amazon. Clean beauty trend helping.' },
            { quarter: 'Q3 2025', mood: 'improving', score: 62, theme: 'Customer reviews building. Word-of-mouth starting.' },
            { quarter: 'Q1 2026', mood: 'cautiously positive', score: 66, theme: 'Growth visible. Team cautiously optimistic. Need funding for next leap.' },
        ],
    },
    samosaparty: {
        ambitionbox: { rating: 4.1, totalReviews: 65, recommend: 82, ceoApproval: 86, workLife: 3.8, salary: 3.4, security: 3.7, culture: 4.2, growth: 3.8,
            likes: ['Food industry is fun and rewarding', 'Product customers love creates job satisfaction', 'Growth trajectory is exciting', 'Good operational learning'],
            dislikes: ['Food manufacturing can be physically demanding', 'Scaling logistics is challenging', 'Weekend and festival season work'],
            summary: 'Samosa Party employees enjoy the fast-growing food brand energy. Customer love for the product drives team pride. Operations roles are demanding but rewarding.'
        },
        glassdoor: { rating: 3.9, totalReviews: 52, recommend: 78, ceoApproval: 84, workLife: 3.6, salary: 3.2, security: 3.6, culture: 4.0, growth: 3.7,
            likes: ['Being part of a beloved food brand', 'Rapid growth creates opportunities', 'Team culture is warm and food-centric'],
            dislikes: ['Food production hours are early and long', 'Cold chain logistics is stressful', 'Need better work-life during festivals'],
            summary: 'High-energy food startup with strong product-market fit driving team morale. Operational intensity is the trade-off.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'energetic', score: 70, theme: 'Brand growing fast. Team excited by customer love.' },
            { quarter: 'Q2 2025', mood: 'intense', score: 66, theme: 'Scaling operations. New cities mean new challenges. Hiring rapidly.' },
            { quarter: 'Q3 2025', mood: 'proud', score: 76, theme: 'Multi-city expansion successful. Festival season sales record. Team rewarded.' },
            { quarter: 'Q1 2026', mood: 'thriving', score: 82, theme: 'Established brand. Good retention. Career paths clearer. Operations stabilized.' },
        ],
    },
    earthrhythm: {
        ambitionbox: { rating: 3.8, totalReviews: 34, recommend: 74, ceoApproval: 78, workLife: 3.9, salary: 3.2, security: 3.4, culture: 4.0, growth: 3.5,
            likes: ['Sustainability mission is real, not just marketing', 'Refillable model is innovative', 'Good creative work in product design'],
            dislikes: ['Consumer education about sustainable beauty is slow', 'Margins are tight in sustainable products', 'Need more D2C digital expertise'],
            summary: 'Earth Rhythm attracts sustainability-passionate employees. The refillable beauty model is innovative but market education pace is the challenge.'
        },
        glassdoor: { rating: 3.6, totalReviews: 28, recommend: 70, ceoApproval: 74, workLife: 3.7, salary: 3.0, security: 3.2, culture: 3.8, growth: 3.3,
            likes: ['Working in sustainable beauty feels impactful', 'Good formulations and product R&D', 'Brand values are genuinely practiced'],
            dislikes: ['Sustainability premium limits market size', 'Compensation is modest', 'Growth slower than mainstream beauty brands'],
            summary: 'Mission-aligned workplace with genuine sustainability practices. Market adoption pace and compensation are key concerns.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'committed', score: 60, theme: 'Team committed to sustainable beauty. Market adoption slow but steady.' },
            { quarter: 'Q2 2025', mood: 'hopeful', score: 64, theme: 'Shampoo bars gaining traction. Consumer sustainability awareness growing.' },
            { quarter: 'Q3 2025', mood: 'positive', score: 68, theme: 'Refillable model attracting attention. Media coverage boosting morale.' },
            { quarter: 'Q1 2026', mood: 'growing', score: 72, theme: 'Sustainable beauty trend accelerating. Brand well-positioned. Team optimistic.' },
        ],
    },
    bombaysweets: {
        ambitionbox: { rating: 4.0, totalReviews: 40, recommend: 78, ceoApproval: 82, workLife: 3.7, salary: 3.3, security: 3.5, culture: 4.1, growth: 3.6,
            likes: ['Working with artisan mithai makers is unique', 'Brand is beloved by customers — pride in the product', 'Creative food innovation encouraged'],
            dislikes: ['Festival season workload is extreme', 'Perishable products mean tight timelines', 'Mumbai cost of living vs startup salary'],
            summary: 'Bombay Sweet Shop combines artisanal food craft with modern D2C branding. Employees love the product and customer reactions. Festival season intensity is the trade-off.'
        },
        glassdoor: { rating: 3.8, totalReviews: 32, recommend: 75, ceoApproval: 80, workLife: 3.5, salary: 3.1, security: 3.4, culture: 3.9, growth: 3.5,
            likes: ['Artisanal food space is fulfilling', 'Customer delight is directly visible', 'Creative experimentation encouraged'],
            dislikes: ['Mumbai rent + startup salary is challenging', 'Perishable product logistics are stressful', 'Seasonal demand creates uneven workload'],
            summary: 'A food artisan\'s dream workplace with genuine creative freedom. Mumbai economics and seasonal intensity are challenges.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'creative', score: 65, theme: 'Post-Diwali recovery. New product development season. Team re-energized.' },
            { quarter: 'Q2 2025', mood: 'steady', score: 68, theme: 'Summer range launches. Subscription model testing. Stable team.' },
            { quarter: 'Q3 2025', mood: 'intense', score: 72, theme: 'Festival season prep. All hands on deck. Revenue targets in sight.' },
            { quarter: 'Q1 2026', mood: 'proud', score: 78, theme: 'Record Diwali sales. Team rewarded. Brand expanding to new cities.' },
        ],
    },
    staccato: {
        ambitionbox: { rating: 3.7, totalReviews: 12, recommend: 70, ceoApproval: 76, workLife: 3.8, salary: 3.0, security: 3.1, culture: 4.0, growth: 3.3,
            likes: ['Passion for coffee makes work enjoyable', 'Founder is a genuine coffee expert', 'Small team with close bonds'],
            dislikes: ['Very small operation — limited growth', 'Below market compensation', 'Niche market limits scale potential'],
            summary: 'Staccato is a passion project for coffee lovers. Small team, artisanal approach. Best for those prioritizing passion over scale.'
        },
        glassdoor: { rating: 3.5, totalReviews: 8, recommend: 65, ceoApproval: 72, workLife: 3.6, salary: 2.8, security: 2.9, culture: 3.8, growth: 3.0,
            likes: ['Learning about specialty coffee is rewarding', 'Artisanal work environment', 'Close-knit team'],
            dislikes: ['Very limited scale and resources', 'Salary is below market', 'Career path is unclear'],
            summary: 'Micro-roaster culture. Great for coffee enthusiasts but limited career growth potential.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'passionate', score: 58, theme: 'Small team roasting great coffee. Resources limited but passion high.' },
            { quarter: 'Q2 2025', mood: 'steady', score: 60, theme: 'Online orders growing slowly. Quality recognition increasing.' },
            { quarter: 'Q3 2025', mood: 'hopeful', score: 64, theme: 'Specialty coffee market growing. Brand building momentum.' },
            { quarter: 'Q1 2026', mood: 'cautious optimism', score: 68, theme: 'Market recognition improving. Seeking funding for expansion. Team hopeful.' },
        ],
    },
    snitch: {
        ambitionbox: { rating: 3.9, totalReviews: 120, recommend: 76, ceoApproval: 82, workLife: 3.6, salary: 3.4, security: 3.5, culture: 4.0, growth: 3.8,
            likes: ['Explosive growth — exciting to be part of', 'Young dynamic team energy', 'Great learning in fast fashion D2C', 'Founder is hands-on and inspiring'],
            dislikes: ['Fast pace means constant pressure', 'Work-life balance can suffer during launches', 'Processes still evolving at scale', 'Compensation benchmarking needed'],
            summary: 'Snitch employees are energized by the rapid growth. The fast fashion pace demands hustle. Great for young professionals seeking D2C experience.'
        },
        glassdoor: { rating: 3.7, totalReviews: 95, recommend: 72, ceoApproval: 78, workLife: 3.4, salary: 3.2, security: 3.4, culture: 3.8, growth: 3.6,
            likes: ['Rapid growth creates opportunities', 'Creative freedom in design team', 'Bootstrapped success story inspires'],
            dislikes: ['Work pressure is intense', 'Need better HR processes', 'Compensation could be more competitive'],
            summary: 'High-growth environment with fast fashion intensity. Best for those who thrive in fast-paced environments.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'exciting', score: 70, theme: 'Revenue milestones being hit. Team expanding rapidly. Energy is high.' },
            { quarter: 'Q2 2025', mood: 'intense', score: 68, theme: 'Scaling operations. New categories launching. Team stretched but motivated.' },
            { quarter: 'Q3 2025', mood: 'proud', score: 76, theme: 'INR 500Cr milestone celebrated. Media coverage boosts pride. Better compensation.' },
            { quarter: 'Q1 2026', mood: 'ambitious', score: 80, theme: 'IPO discussions energize team. Offline expansion creating new roles. Culture maturing.' },
        ],
    },
    mokobara: {
        ambitionbox: { rating: 4.1, totalReviews: 55, recommend: 80, ceoApproval: 86, workLife: 3.9, salary: 3.5, security: 3.6, culture: 4.3, growth: 3.8,
            likes: ['Beautiful brand to work for — design-first culture', 'Co-founders are genuine and accessible', 'Creative work environment', 'Product you can be proud of showing friends'],
            dislikes: ['Travel/luggage is niche — learning curve', 'Bangalore-centric — limits talent pool somewhat', 'Need more structured career ladders'],
            summary: 'Mokobara attracts design and brand enthusiasts. The product quality and brand aesthetic create genuine employee pride. Strong culture in Bangalore HQ.'
        },
        glassdoor: { rating: 3.9, totalReviews: 42, recommend: 78, ceoApproval: 84, workLife: 3.7, salary: 3.3, security: 3.5, culture: 4.1, growth: 3.6,
            likes: ['Design-led culture is inspiring', 'Strong brand identity makes marketing fun', 'Good work environment'],
            dislikes: ['Category is seasonal — demand fluctuates', 'Need more scale in operations', 'Compensation could match metro standards better'],
            summary: 'Design-forward workplace with strong brand pride. Good for creative professionals in D2C.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'creative', score: 72, theme: 'New product lines launching. Team excited about retail stores.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 76, theme: 'Series B discussions. Offline expansion creating new opportunities.' },
            { quarter: 'Q3 2025', mood: 'proud', score: 80, theme: 'Brand recognition growing nationally. Celebrity sightings with Mokobara. Team pride high.' },
            { quarter: 'Q1 2026', mood: 'strong', score: 84, theme: 'Revenue growing 3x YoY. Team expansion. Culture maintained despite growth.' },
        ],
    },
    noise: {
        ambitionbox: { rating: 3.8, totalReviews: 280, recommend: 72, ceoApproval: 76, workLife: 3.5, salary: 3.4, security: 3.6, culture: 3.7, growth: 3.5,
            likes: ['Market leader in wearables — exciting space', 'Good brand visibility and recognition', 'Competitive salaries for the sector', 'Launch pace keeps work exciting'],
            dislikes: ['Constant product launches create burnout', 'Competition from boAt/Fire-Boltt is intense', 'Processes need maturity', 'Decision-making can be slow'],
            summary: 'Noise offers a fast-paced wearables environment. Market leadership creates pride but competitive pressure is constant. Best for tech-consumer enthusiasts.'
        },
        glassdoor: { rating: 3.6, totalReviews: 220, recommend: 68, ceoApproval: 72, workLife: 3.3, salary: 3.2, security: 3.4, culture: 3.5, growth: 3.3,
            likes: ['Brand recognition is strong', 'Good for consumer electronics career', 'Regular product innovations'],
            dislikes: ['Intense competition means constant pressure', 'Need better work-life balance', 'Career paths need clarity'],
            summary: 'Fast-paced wearables company. Good exposure to consumer electronics but demanding work environment.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'competitive', score: 62, theme: 'Market share battles intensifying. Team focused on differentiation.' },
            { quarter: 'Q2 2025', mood: 'improving', score: 66, theme: 'NoiseFit brand launch. Premium positioning creating excitement.' },
            { quarter: 'Q3 2025', mood: 'steady', score: 70, theme: 'Market consolidation happening. Noise holding strong. Team confidence building.' },
            { quarter: 'Q1 2026', mood: 'positive', score: 74, theme: 'Smart wearables growing. Revenue targets being met. Team retention improving.' },
        ],
    },
    atomberg: {
        ambitionbox: { rating: 4.2, totalReviews: 180, recommend: 84, ceoApproval: 88, workLife: 3.8, salary: 3.6, security: 3.8, culture: 4.2, growth: 4.0,
            likes: ['Deep tech solving real problems — energy efficiency', 'Strong engineering culture', 'Founder-led with clear vision', 'Good compensation for hardware startup'],
            dislikes: ['Hardware scaling is complex and stressful', 'Pune location limits some talent', 'Fast growth creating org structure challenges'],
            summary: 'Atomberg is a rare deep-tech consumer brand. Engineers love the BLDC motor innovation. Strong culture with technical founder leadership. One of the best-rated hardware startups.'
        },
        glassdoor: { rating: 4.0, totalReviews: 145, recommend: 80, ceoApproval: 86, workLife: 3.6, salary: 3.4, security: 3.7, culture: 4.0, growth: 3.8,
            likes: ['Genuinely innovative technology', 'Making a real impact on energy efficiency', 'IIT founders bring strong tech culture'],
            dislikes: ['Hardware supply chain is challenging', 'Growth demands more than team can sometimes handle', 'Need more non-engineering senior hires'],
            summary: 'Excellent engineering culture with genuine innovation. One of India\'s best hardware startup workplaces.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'innovative', score: 76, theme: 'New product categories launching. BLDC technology gaining wider adoption.' },
            { quarter: 'Q2 2025', mood: 'ambitious', score: 78, theme: 'Series C funding discussions. Revenue milestones hit. Team energized.' },
            { quarter: 'Q3 2025', mood: 'strong', score: 82, theme: 'INR 800Cr+ revenue. Offline retail expanding. Team proud of brand recognition.' },
            { quarter: 'Q1 2026', mood: 'excellent', score: 86, theme: 'Market leadership in energy-efficient fans. IPO discussions beginning. Employee wealth creation.' },
        ],
    },
    countrydelight: {
        ambitionbox: { rating: 3.9, totalReviews: 350, recommend: 74, ceoApproval: 80, workLife: 3.4, salary: 3.3, security: 3.5, culture: 3.8, growth: 3.6,
            likes: ['Impactful work — changing how India consumes dairy', 'Rapid growth creates career opportunities', 'Technology-driven operations are interesting', 'Strong brand with customer love'],
            dislikes: ['Operations are 24/7 — dairy never sleeps', 'Early morning logistics can be exhausting', 'High expectations with lean teams', 'City launches mean relocation pressure'],
            summary: 'Country Delight offers a unique dairy-tech work experience. The 24/7 operations nature is demanding. Strong mission alignment with customer impact visible daily.'
        },
        glassdoor: { rating: 3.7, totalReviews: 280, recommend: 70, ceoApproval: 76, workLife: 3.2, salary: 3.1, security: 3.4, culture: 3.6, growth: 3.5,
            likes: ['Building a category-defining brand', 'Technology integration in dairy is exciting', 'Rapid scaling provides learning'],
            dislikes: ['Work-life balance is tough in operations', 'Compensation could be more competitive', 'Attrition in operations roles is high'],
            summary: 'High-growth dairy-tech company. Demanding operations but meaningful work. Strong for those who can handle the pace.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'scaling', score: 66, theme: 'Rapid city expansion. Operations under pressure. Revenue growing well.' },
            { quarter: 'Q2 2025', mood: 'improving', score: 70, theme: 'Processes maturing. Technology investments paying off. Better HR practices.' },
            { quarter: 'Q3 2025', mood: 'strong', score: 75, theme: 'INR 1500Cr+ revenue. Unit economics improving. Team seeing the path to profitability.' },
            { quarter: 'Q1 2026', mood: 'confident', score: 80, theme: 'Market leadership in premium dairy delivery. Better retention. Career paths clearer.' },
        ],
    },
    licious: {
        ambitionbox: { rating: 3.6, totalReviews: 420, recommend: 66, ceoApproval: 70, workLife: 3.2, salary: 3.3, security: 3.2, culture: 3.5, growth: 3.3,
            likes: ['Pioneer in fresh meat delivery — category creator', 'Brand is well-known and respected', 'Good operational learning opportunity', 'Technology team is strong'],
            dislikes: ['Layoffs in 2023-24 affected morale', 'Profitability pressure means cost cutting', 'Cold chain operations are demanding', 'Work-life balance suffers in peak times'],
            summary: 'Licious is navigating the post-hypergrowth phase. Layoffs affected trust. The pivot to profitability is creating operational pressure but the brand remains strong.'
        },
        glassdoor: { rating: 3.4, totalReviews: 350, recommend: 62, ceoApproval: 66, workLife: 3.0, salary: 3.1, security: 3.0, culture: 3.3, growth: 3.1,
            likes: ['Category leadership in meat delivery', 'Technology and supply chain learning', 'Well-funded company'],
            dislikes: ['Restructuring affected team morale', 'Profitability pressure is constant', 'Cold chain operations are stressful', 'Need clearer communication from leadership'],
            summary: 'Category pioneer facing growth-to-profitability transition. Employee morale recovering from restructuring period.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'recovering', score: 55, theme: 'Post-restructuring. Team rebuilding confidence. New strategy focused on profitability.' },
            { quarter: 'Q2 2025', mood: 'stabilizing', score: 60, theme: 'Operations stabilizing. Ready-to-cook segment growing. Team morale improving.' },
            { quarter: 'Q3 2025', mood: 'improving', score: 65, theme: 'Unit economics improving. New product launches energize team. Better communication.' },
            { quarter: 'Q1 2026', mood: 'steady', score: 70, theme: 'Profitability path clearer. Team retention improving. Brand strength remains high.' },
        ],
    },
    plumgoodness: {
        ambitionbox: { rating: 4.0, totalReviews: 160, recommend: 78, ceoApproval: 82, workLife: 3.7, salary: 3.4, security: 3.6, culture: 4.0, growth: 3.7,
            likes: ['Leading vegan beauty brand — proud to work here', 'Good creative culture in marketing', 'Strong brand with loyal customer base', 'Founder Shankar Prasad\'s vision is clear'],
            dislikes: ['Beauty market competition is intense', 'Need more innovation in new categories', 'Scaling operations creates challenges'],
            summary: 'Plum Goodness employees enjoy working for a values-driven beauty brand. The vegan positioning creates genuine pride. Competitive beauty market keeps everyone on their toes.'
        },
        glassdoor: { rating: 3.8, totalReviews: 130, recommend: 75, ceoApproval: 80, workLife: 3.5, salary: 3.2, security: 3.5, culture: 3.8, growth: 3.5,
            likes: ['Vegan beauty mission resonates', 'Good D2C learning opportunity', 'Customer loyalty creates motivation'],
            dislikes: ['Margins pressure in beauty', 'Competition from new entrants', 'Need better internal tools'],
            summary: 'Strong beauty brand workplace. Vegan values drive culture. Competition keeps the pace demanding.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'confident', score: 72, theme: 'INR 500Cr revenue milestone. Brand well-positioned. Team proud.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 75, theme: 'Makeup category expansion. New talent joining. Processes maturing.' },
            { quarter: 'Q3 2025', mood: 'strong', score: 78, theme: 'Market share growing in vegan beauty. Team retention high. Good culture scores.' },
            { quarter: 'Q1 2026', mood: 'thriving', score: 82, theme: 'Category leadership in vegan beauty. Better compensation. IPO conversations starting.' },
        ],
    },
    mcaffeine: {
        ambitionbox: { rating: 3.8, totalReviews: 95, recommend: 74, ceoApproval: 78, workLife: 3.6, salary: 3.3, security: 3.5, culture: 3.9, growth: 3.6,
            likes: ['Created a new category — exciting to build', 'Coffee-themed culture is fun', 'Marketing team has great creative freedom', 'Products are genuinely loved by customers'],
            dislikes: ['Scaling personal care is operationally complex', 'Need more senior leadership depth', 'Compensation could be more competitive'],
            summary: 'mCaffeine employees enjoy the category-creator narrative. Coffee culture extends to workplace. Creative marketing roles are the highlight.'
        },
        glassdoor: { rating: 3.6, totalReviews: 75, recommend: 70, ceoApproval: 74, workLife: 3.4, salary: 3.1, security: 3.3, culture: 3.7, growth: 3.4,
            likes: ['Unique product positioning', 'Good for personal care marketing career', 'Growing brand recognition'],
            dislikes: ['Competition in personal care intensifying', 'Need better processes', 'Salaries below beauty industry average'],
            summary: 'Category-creating beauty startup. Good learning but competitive pressures and compensation are areas of concern.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'growing', score: 66, theme: 'Revenue growing steadily. New product launches energize team.' },
            { quarter: 'Q2 2025', mood: 'positive', score: 70, theme: 'INR 300Cr target in sight. Marketing innovation driving growth.' },
            { quarter: 'Q3 2025', mood: 'strong', score: 74, theme: 'Brand recognition at peak. Team proud of category leadership.' },
            { quarter: 'Q1 2026', mood: 'confident', score: 78, theme: 'Profitability improving. Better compensation. Team retention strong.' },
        ],
    },
    bsc: {
        ambitionbox: { rating: 3.7, totalReviews: 140, recommend: 70, ceoApproval: 74, workLife: 3.5, salary: 3.3, security: 3.3, culture: 3.7, growth: 3.4,
            likes: ['Pioneer in men\'s grooming D2C', 'Brand recognition is strong', 'Good marketing learning opportunity', 'Diverse product range keeps work interesting'],
            dislikes: ['Competition from new brands is intense', 'Growth has slowed from early days', 'Need clearer strategic direction', 'Margins pressure affects team resources'],
            summary: 'BSC pioneered D2C men\'s grooming in India. The brand is well-established but growth moderation and competition create challenges. Good for grooming/beauty career development.'
        },
        glassdoor: { rating: 3.5, totalReviews: 110, recommend: 66, ceoApproval: 70, workLife: 3.3, salary: 3.1, security: 3.2, culture: 3.5, growth: 3.2,
            likes: ['Strong brand to have on resume', 'Men\'s grooming expertise', 'Diverse team'],
            dislikes: ['Growth has moderated', 'Competition eating market share', 'Need more innovation'],
            summary: 'Established men\'s grooming brand. Stable but facing growth challenges from competition.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'steady', score: 62, theme: 'Brand remains strong. Competition intensifying. Team focused on differentiation.' },
            { quarter: 'Q2 2025', mood: 'evolving', score: 64, theme: 'Category expansion into body care. New product launches. Team adapting.' },
            { quarter: 'Q3 2025', mood: 'improving', score: 68, theme: 'Revenue growing in new categories. Team morale improving with results.' },
            { quarter: 'Q1 2026', mood: 'positive', score: 72, theme: 'Multi-category strategy gaining traction. Better market positioning. Team more confident.' },
        ],
    },
    vahdamteas: {
        ambitionbox: { rating: 3.9, totalReviews: 85, recommend: 76, ceoApproval: 82, workLife: 3.7, salary: 3.3, security: 3.5, culture: 4.0, growth: 3.6,
            likes: ['Working for a globally recognized Indian tea brand', 'Strong founder vision for premium Indian tea', 'Good for international marketing exposure', 'Products are genuinely world-class'],
            dislikes: ['Delhi NCR location for some roles', 'Export-focused business has currency risks', 'Need more structured growth paths'],
            summary: 'Vahdam Teas employees take pride in building a global Indian brand. The premium positioning and international success create genuine workplace pride.'
        },
        glassdoor: { rating: 3.7, totalReviews: 65, recommend: 72, ceoApproval: 78, workLife: 3.5, salary: 3.1, security: 3.4, culture: 3.8, growth: 3.4,
            likes: ['Global brand exposure', 'Premium product positioning', 'Strong founder leadership'],
            dislikes: ['Compensation moderate for consumer goods', 'High expectations from small team', 'International time zones can be demanding'],
            summary: 'Unique opportunity to work for a global Indian consumer brand. Export-focused business creates interesting challenges.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'global', score: 66, theme: 'International expansion continuing. Team proud of global recognition.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 70, theme: 'New product categories launching. Matcha line doing well.' },
            { quarter: 'Q3 2025', mood: 'steady', score: 72, theme: 'Revenue growth in US market. Team gaining confidence.' },
            { quarter: 'Q1 2026', mood: 'positive', score: 76, theme: 'INR 200Cr+ revenue. India domestic market growing. Better compensation.' },
        ],
    },
    ragecoffee: {
        ambitionbox: { rating: 3.7, totalReviews: 48, recommend: 70, ceoApproval: 76, workLife: 3.5, salary: 3.2, security: 3.3, culture: 3.8, growth: 3.5,
            likes: ['Unique product — vitamin-infused coffee is exciting', 'Shark Tank visibility boosts brand', 'Young energetic team', 'Good D2C marketing learning'],
            dislikes: ['Competitive instant coffee market', 'Need more senior leadership', 'Compensation could be better'],
            summary: 'Rage Coffee offers a unique product innovation story. The vitamin-infused coffee category is exciting. Typical scaling challenges for a D2C food brand.'
        },
        glassdoor: { rating: 3.5, totalReviews: 35, recommend: 66, ceoApproval: 72, workLife: 3.3, salary: 3.0, security: 3.1, culture: 3.6, growth: 3.3,
            likes: ['Innovative product positioning', 'Shark Tank brand recognition', 'Fast-paced learning environment'],
            dislikes: ['Coffee market is intensely competitive', 'Resources stretched in scaling phase', 'Need better processes'],
            summary: 'Innovation-driven coffee startup with Shark Tank credibility. Scaling challenges and competition are the main concerns.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'energetic', score: 62, theme: 'Post Shark Tank growth. Team expanding. Product innovation continuing.' },
            { quarter: 'Q2 2025', mood: 'hustling', score: 64, theme: 'Distribution expanding. New flavors launching. Team stretched but motivated.' },
            { quarter: 'Q3 2025', mood: 'growing', score: 68, theme: 'INR 100Cr revenue target. Offline retail growing. Morale improving.' },
            { quarter: 'Q1 2026', mood: 'positive', score: 72, theme: 'Revenue milestones hit. Category awareness improving. Team retention better.' },
        ],
    },
};

// Default employee reviews for any brand not explicitly listed
const DEFAULT_EMPLOYEE_REVIEWS = {
    ambitionbox: { rating: 3.5, totalReviews: 15, recommend: 65, ceoApproval: 70, workLife: 3.5, salary: 3.0, security: 3.2, culture: 3.7, growth: 3.3,
        likes: ['Innovative product space', 'Startup energy and learning', 'Founders are accessible'],
        dislikes: ['Early-stage compensation constraints', 'Wearing many hats', 'Limited HR structure'],
        summary: 'Typical early-stage D2C startup. Mission-driven culture with growth-stage challenges.'
    },
    glassdoor: { rating: 3.3, totalReviews: 10, recommend: 60, ceoApproval: 66, workLife: 3.3, salary: 2.8, security: 3.0, culture: 3.5, growth: 3.1,
        likes: ['Learning opportunity', 'Direct impact visible', 'Flat hierarchy'],
        dislikes: ['Below market compensation', 'Resource constraints', 'Job security concerns'],
        summary: 'Early-stage startup with standard growing pains. Suits self-starters.'
    },
    moodTimeline: [
        { quarter: 'Q1 2025', mood: 'building', score: 55, theme: 'Early team building culture. Resources tight but energy high.' },
        { quarter: 'Q2 2025', mood: 'steady', score: 58, theme: 'Team finding its rhythm. Processes starting to form.' },
        { quarter: 'Q3 2025', mood: 'improving', score: 62, theme: 'Product traction improving team morale. Hiring continues.' },
        { quarter: 'Q1 2026', mood: 'positive', score: 66, theme: 'Growth visible. Team gaining confidence. Culture solidifying.' },
    ],
};

// --- Composite Scoring ---
function computeCompositeScores() {
    const scores = {};
    const signals = {};
    COMPANIES.forEach(c => {
        const gt = GOOGLE_TRENDS_DATA[c.id];
        const ec = ECOMMERCE_DATA[c.id];
        const tr = TRAFFIC_DATA[c.id];
        const so = SOCIAL_DATA[c.id];

        const googleScore = Math.min(100, (gt.change90d > 0 ? gt.change90d * 0.5 : 0) + (gt.currentIndex / gt.peak12m) * 50);
        const reviewScore = (ec.amazon.sentiment + ec.myntra.sentiment) / 2;
        const trafficScore = Math.min(100, tr.momGrowth * 2 + 50);
        const socialScore = (so.reddit.sentiment + so.instagram.sentiment + so.linkedin.sentiment) / 3;

        const composite = Math.round(
            googleScore * 0.25 + reviewScore * 0.20 + trafficScore * 0.30 + socialScore * 0.25
        );

        let signal = 'watch';
        if (composite >= 75) signal = 'breakout';
        else if (composite >= 62) signal = 'trending';
        else if (composite < 40) signal = 'declining';

        scores[c.id] = { google: Math.round(googleScore), reviews: Math.round(reviewScore), traffic: Math.round(trafficScore), social: Math.round(socialScore), composite };
        signals[c.id] = signal;
    });
    return { scores, signals };
}

const _computed = computeCompositeScores();
const COMPOSITE_SCORES = _computed.scores;
const COMPANY_SIGNALS = _computed.signals;
