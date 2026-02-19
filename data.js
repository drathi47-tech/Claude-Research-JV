// =====================================================
// Consumer Trend Radar - Sample Data
// Sub-$400M emerging D2C / consumer brands in India
// FAST42-ranked + scaled D2C + early-stage
// Focused on breakout investment opportunities
// =====================================================
//
// SELECTION CRITERIA:
// - Minimum 30% YoY growth across composite signals (Google Trends,
//   E-commerce reviews, website traffic, social sentiment)
// - Exception: Brands below 30% growth are included ONLY if they show
//   breakout social signals (viral content, community-driven advocacy,
//   or exceptional sentiment momentum)
// - Acquired brands are excluded (e.g., Neemli Naturals → GOAT,
//   Earth Rhythm → Nykaa)
// - Pre-seed brands with no measurable traction are excluded
// =====================================================

const COMPANIES = [
    // --- Original Dashboard Brands ---
    { id: 'wakao', name: 'Wakao Foods', sector: 'food', sectorLabel: 'Food & Beverage', website: 'wakaofoods.com', color: '#f59e0b', estValuation: '~INR 3.6Cr', estRevenue: 'INR 1-1.5Cr/yr' },
    { id: 'aukera', name: 'Aukera Diamonds', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'aukerajewellery.com', color: '#ec4899', estValuation: 'INR 600Cr', estRevenue: 'INR 200Cr/yr (ARR)' },
    { id: 'aretto', name: 'Aretto', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'wearetto.com', color: '#3b82f6', estValuation: 'INR 60-110Cr', estRevenue: 'INR 10-15Cr/yr' },
    { id: 'phool', name: 'Phool', sector: 'home', sectorLabel: 'Home & Living', website: 'phool.co', color: '#10b981', estValuation: 'INR 175Cr', estRevenue: 'INR 50Cr/yr' },
    { id: 'sidsfarm', name: "Sid's Farm", sector: 'food', sectorLabel: 'Food & Beverage', website: 'sidsfarm.com', color: '#06b6d4', estValuation: 'INR 279Cr', estRevenue: 'INR 168Cr/yr' },
    { id: 'koparo', name: 'Koparo', sector: 'home', sectorLabel: 'Home & Living', website: 'koparoclean.com', color: '#84cc16', estValuation: 'INR 124Cr', estRevenue: 'INR 23.4Cr/yr' },
    { id: 'gynoveda', name: 'Gynoveda', sector: 'health', sectorLabel: 'Health & Wellness', website: 'gynoveda.com', color: '#d946ef', estValuation: 'INR 254Cr', estRevenue: 'INR 67Cr/yr' },
    { id: 'bareanatomy', name: 'Bare Anatomy', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'bareanatomy.com', color: '#a855f7', estValuation: '~$140M', estRevenue: 'INR 299Cr/yr (Innovist)' },
    { id: 'tbof', name: 'Two Brothers Organic Farms', sector: 'food', sectorLabel: 'Food & Beverage', website: 'twobrothersindiashop.com', color: '#22c55e', estValuation: 'INR 434Cr', estRevenue: 'INR 108Cr/yr' },

    { id: 'cosmix', name: 'Cosmix', sector: 'health', sectorLabel: 'Health & Wellness', website: 'cosmix.in', color: '#14b8a6', estValuation: 'INR 375Cr', estRevenue: 'INR 51Cr/yr' },

    { id: 'samosaparty', name: 'Samosa Party', sector: 'food', sectorLabel: 'Food & Beverage', website: 'samosaparty.com', color: '#e11d48', estValuation: 'INR 274Cr', estRevenue: 'INR 58.5Cr/yr' },

    { id: 'bombaysweets', name: 'Bombay Sweet Shop', sector: 'food', sectorLabel: 'Food & Beverage', website: 'bombaysweetshop.com', color: '#eab308', estValuation: 'INR 200Cr+ (grp)', estRevenue: 'INR 65Cr/yr' },

    // --- Scaled D2C Brands (sub-$400M valuation) ---
    { id: 'snitch', name: 'Snitch', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'snitch.co.in', color: '#f43f5e', estValuation: 'INR 2500Cr', estRevenue: 'INR 520Cr/yr' },
    { id: 'mokobara', name: 'Mokobara', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'mokobara.com', color: '#0d9488', estValuation: '~$80M', estRevenue: 'INR 230Cr/yr' },
    { id: 'mcaffeine', name: 'mCaffeine', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'mcaffeine.com', color: '#78350f', estValuation: 'INR 1000Cr', estRevenue: 'INR 239Cr/yr' },
    { id: 'vahdamteas', name: 'Vahdam Teas', sector: 'food', sectorLabel: 'Food & Beverage', website: 'vahdamindia.com', color: '#059669', estValuation: '$114M', estRevenue: 'INR 268Cr/yr' },
    { id: 'plumgoodness', name: 'Plum Goodness', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'plumgoodness.com', color: '#7c3aed', estValuation: '$250M', estRevenue: 'INR 419Cr/yr' },
    { id: 'bsc', name: 'Bombay Shaving Company', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'bombayshavingcompany.com', color: '#0369a1', estValuation: 'INR 824Cr+', estRevenue: 'INR 550Cr/yr (RR)' },
    { id: 'ragecoffee', name: 'Rage Coffee', sector: 'food', sectorLabel: 'Food & Beverage', website: 'ragecoffee.com', color: '#ea580c', estValuation: 'INR 186Cr', estRevenue: 'INR 25Cr/yr' },
    // --- FAST42 / Emerging D2C Brands ---
    { id: 'theater', name: 'Theater.xyz', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'theater.xyz', color: '#6366f1', estValuation: 'INR 50-100Cr', estRevenue: 'INR 14.1Cr/yr (14x YoY)' },
    { id: 'pantproject', name: 'The Pant Project', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'thepantproject.com', color: '#334155', estValuation: 'INR 161Cr', estRevenue: 'INR 40.7Cr/yr' },
    { id: 'houseofem5', name: 'House of EM5', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'houseofem5.in', color: '#a16207', estValuation: 'INR 10Cr', estRevenue: 'INR 20Cr/yr' },
    { id: 'whatsupwellness', name: "What's Up Wellness", sector: 'health', sectorLabel: 'Health & Wellness', website: 'whatsupwellness.in', color: '#e879f9', estValuation: 'INR 64Cr', estRevenue: 'INR 25Cr/yr' },
    { id: 'masterchow', name: 'MasterChow', sector: 'food', sectorLabel: 'Food & Beverage', website: 'masterchow.in', color: '#dc2626', estValuation: 'INR 236Cr', estRevenue: 'INR 40Cr/yr' },
    { id: 'nathabit', name: 'Nat Habit', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'nathabit.in', color: '#65a30d', estValuation: 'INR 343Cr', estRevenue: 'INR 72Cr/yr' },
    { id: 'anveshan', name: 'Anveshan', sector: 'food', sectorLabel: 'Food & Beverage', website: 'anveshan.farm', color: '#ca8a04', estValuation: 'INR 430Cr', estRevenue: 'INR 58Cr/yr' },
    { id: 'eggoz', name: 'Eggoz', sector: 'food', sectorLabel: 'Food & Beverage', website: 'eggoz.in', color: '#ea580c', estValuation: 'INR 458Cr', estRevenue: 'INR 130Cr/yr' },
    { id: 'foxtale', name: 'Foxtale', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'foxtale.in', color: '#c026d3', estValuation: 'INR 1530Cr', estRevenue: 'INR 206Cr/yr' },
    { id: 'pilgrim', name: 'Pilgrim', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'discoverpilgrim.com', color: '#0891b2', estValuation: 'INR 3000Cr', estRevenue: 'INR 204Cr/yr' },
    { id: 'neemans', name: 'Neemans', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'neemans.com', color: '#16a34a', estValuation: 'INR 268Cr', estRevenue: 'INR 77Cr/yr' },
    { id: 'perfora', name: 'Perfora', sector: 'health', sectorLabel: 'Health & Wellness', website: 'perfora.in', color: '#2563eb', estValuation: 'INR 240Cr', estRevenue: 'INR 42Cr/yr' },
    { id: 'boldfit', name: 'Boldfit', sector: 'health', sectorLabel: 'Health & Wellness', website: 'boldfit.in', color: '#b91c1c', estValuation: 'INR 1020Cr', estRevenue: 'INR 140Cr/yr' },
    { id: 'sweetkaramcoffee', name: 'Sweet Karam Coffee', sector: 'food', sectorLabel: 'Food & Beverage', website: 'sweetkaramcoffee.in', color: '#92400e', estValuation: 'INR 313Cr', estRevenue: 'INR 11.5Cr/yr' },
    { id: 'drinkprime', name: 'DrinkPrime', sector: 'home', sectorLabel: 'Home & Living', website: 'drinkprime.in', color: '#0284c7', estValuation: 'INR 260Cr', estRevenue: 'INR 75Cr/yr' },
    { id: 'flomattress', name: 'Flo Mattress', sector: 'home', sectorLabel: 'Home & Living', website: 'flomattress.com', color: '#4f46e5', estValuation: 'INR 66Cr', estRevenue: 'INR 36Cr/yr' },
    { id: 'mymuse', name: 'MyMuse', sector: 'health', sectorLabel: 'Health & Wellness', website: 'mymuse.in', color: '#be185d', estValuation: 'INR 175Cr', estRevenue: 'INR 36Cr/yr' },
    { id: 'dorjeteas', name: 'Dorje Teas', sector: 'food', sectorLabel: 'Food & Beverage', website: 'dorjeteas.com', color: '#047857', estValuation: 'INR 20.5Cr', estRevenue: 'INR 2.3Cr/yr' },
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
const GT_GROWTH = { wakao: 0.85, aukera: 1.35, aretto: 1.10, phool: 0.92, sidsfarm: 0.88, koparo: 0.65, gynoveda: 0.82, bareanatomy: 0.60, tbof: 0.70, cosmix: 0.75, samosaparty: 0.90, bombaysweets: 0.68, snitch: 1.20, mokobara: 1.10, mcaffeine: 0.80, vahdamteas: 0.60, plumgoodness: 0.70, bsc: 0.62, ragecoffee: 0.78, theater: 1.40, pantproject: 0.95, houseofem5: 1.40, whatsupwellness: 1.15, masterchow: 1.05, nathabit: 1.10, anveshan: 0.85, eggoz: 0.92, foxtale: 1.25, pilgrim: 1.08, neemans: 0.72, perfora: 0.88, boldfit: 1.00, sweetkaramcoffee: 0.82, drinkprime: 0.95, flomattress: 0.78, mymuse: 1.05, dorjeteas: 0.75 };
const GT_BASE = { wakao: 12, aukera: 30, aretto: 18, phool: 18, sidsfarm: 28, koparo: 14, gynoveda: 25, bareanatomy: 16, tbof: 20, cosmix: 17, samosaparty: 30, bombaysweets: 18, snitch: 55, mokobara: 38, mcaffeine: 42, vahdamteas: 30, plumgoodness: 48, bsc: 40, ragecoffee: 28, theater: 15, pantproject: 20, houseofem5: 10, whatsupwellness: 16, masterchow: 22, nathabit: 35, anveshan: 14, eggoz: 18, foxtale: 28, pilgrim: 32, neemans: 15, perfora: 12, boldfit: 25, sweetkaramcoffee: 10, drinkprime: 18, flomattress: 16, mymuse: 12, dorjeteas: 8 };
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
    aukera: [
        { text: 'aukera lab grown diamond review', growth: '+2400%' },
        { text: 'lab grown diamond jewellery india', growth: '+1800%' },
        { text: 'aukera diamonds bangalore', growth: '+1500%' },
        { text: 'aukera vs natural diamond', growth: '+950%' },
    ],
    aretto: [
        { text: 'aretto growing shoes review', growth: '+1600%' },
        { text: 'expandable kids shoes india', growth: '+1200%' },
        { text: 'aretto shark tank india', growth: '+980%' },
        { text: 'shoes that grow with kids', growth: '+750%' },
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
    cosmix: [
        { text: 'cosmix superfood blends', growth: '+880%' },
        { text: 'adaptogen powder india', growth: '+720%' },
        { text: 'cosmix sleep blend review', growth: '+580%' },
        { text: 'ashwagandha latte mix', growth: '+420%' },
    ],
    samosaparty: [
        { text: 'samosa party frozen samosa', growth: '+1500%' },
        { text: 'gourmet frozen snacks india', growth: '+1100%' },
        { text: 'samosa party review bangalore', growth: '+780%' },
        { text: 'best frozen samosa online', growth: '+580%' },
    ],
    bombaysweets: [
        { text: 'bombay sweet shop mithai', growth: '+780%' },
        { text: 'artisanal indian sweets online', growth: '+620%' },
        { text: 'bombay sweet shop review', growth: '+480%' },
        { text: 'premium mithai delivery', growth: '+350%' },
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
    theater: [
        { text: 'theater xyz clothing review', growth: '+2800%' },
        { text: 'theater xyz chandigarh fashion', growth: '+2100%' },
        { text: 'mass premium western wear india', growth: '+1600%' },
        { text: 'theater xyz vogue feature', growth: '+1200%' },
    ],
    pantproject: [
        { text: 'pant project custom pants review', growth: '+1200%' },
        { text: 'best chinos india made to order', growth: '+850%' },
        { text: 'pant project sizing', growth: '+680%' },
        { text: 'custom bottom wear brand india', growth: '+520%' },
    ],
    nathabit: [
        { text: 'nat habit ubtan review', growth: '+1800%' },
        { text: 'nat habit hair oil ayurvedic', growth: '+1400%' },
        { text: 'fresh beauty products india', growth: '+980%' },
        { text: 'nat habit vs forest essentials', growth: '+720%' },
    ],
    masterchow: [
        { text: 'masterchow chilli oil review', growth: '+1500%' },
        { text: 'best asian sauces india', growth: '+1100%' },
        { text: 'masterchow noodles taste', growth: '+780%' },
        { text: 'ready to cook chinese sauces', growth: '+580%' },
    ],
    foxtale: [
        { text: 'foxtale vitamin c serum review', growth: '+2200%' },
        { text: 'foxtale sunscreen spf', growth: '+1600%' },
        { text: 'foxtale vs minimalist skincare', growth: '+1200%' },
        { text: 'best indian skincare brand 2025', growth: '+880%' },
    ],
    pilgrim: [
        { text: 'pilgrim retinol serum review', growth: '+1400%' },
        { text: 'pilgrim hair care range', growth: '+1050%' },
        { text: 'pilgrim vs mamaearth', growth: '+820%' },
        { text: 'vegan beauty products india', growth: '+620%' },
    ],
    boldfit: [
        { text: 'boldfit protein shaker review', growth: '+1100%' },
        { text: 'boldfit gym accessories india', growth: '+850%' },
        { text: 'best fitness accessories amazon', growth: '+680%' },
        { text: 'boldfit resistance bands', growth: '+520%' },
    ],
    drinkprime: [
        { text: 'drinkprime water purifier review', growth: '+1600%' },
        { text: 'drinkprime subscription cost', growth: '+1200%' },
        { text: 'water purifier rental india', growth: '+900%' },
        { text: 'drinkprime vs livpure', growth: '+650%' },
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
    aukera: {
        amazon: {
            topLikes: ['Lab-grown diamonds are visually indistinguishable from mined ones', 'IGI certification adds trust and confidence', 'Buyback guarantee is a strong differentiator', 'Stunning designs — especially the polki collection', 'Ethical and sustainable — no mining involved'],
            topDislikes: ['Higher price point than fashion jewellery brands', 'Limited online-only options — most designs need store visit', 'Resale value perception vs natural diamonds', 'Delivery timelines for custom pieces are long'],
            summary: 'Aukera is riding the lab-grown diamond wave in India. Revenue exploded from INR 5Cr to INR 200Cr ARR in 2 years. Peak XV-backed. The IGI certification and buyback guarantee build trust in a category where it matters most.',
        },
        myntra: {
            topLikes: ['Premium jewellery brand on Myntra is refreshing', 'Lab-grown diamond awareness growing'],
            topDislikes: ['Limited selection compared to their own stores', 'Fine jewellery needs try-before-buy'],
            summary: 'Early Myntra presence focused on entry-level pieces. Most sales happen through their 13 owned stores across Bangalore, Delhi NCR, and Hyderabad.',
        },
    },
    aretto: {
        amazon: {
            topLikes: ['Shoes actually grow with the child — genius concept', 'Saves money — one pair covers 3 sizes', 'Memory foam insole is very comfortable for kids', 'Patented SuperGrooves technology works as claimed', 'Appeared on Shark Tank India — adds credibility'],
            topDislikes: ['Price is higher than regular kids shoes (INR 1699-2899)', 'Limited style options — only 9 styles', 'Sizing guidance could be clearer', 'Durability over the full growth cycle needs more data'],
            summary: 'Aretto has cracked a genuine pain point — kids outgrowing shoes every 3-4 months. The expanding sole technology (up to 18mm / 3 sizes) is patented. Shark Tank India Season 3 boosted visibility. Hardik Pandya is an investor.',
        },
        myntra: {
            topLikes: ['Innovative concept stands out in kids footwear', 'Great gifting option for parents'],
            topDislikes: ['Limited color/style range compared to established kids brands', 'Need more customer reviews to build trust'],
            summary: 'Growing Myntra presence. Parents discovering through Shark Tank are converting online. The expandable shoe concept sells itself once understood.',
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
    theater: {
        amazon: {
            topLikes: ['Design-led pieces feel premium and distinctive', 'Mass-premium pricing makes designer fashion accessible', 'Chandigarh-origin brand with a unique aesthetic', 'Vogue and Elle features validate the brand credibility'],
            topDislikes: ['Limited product range — still expanding categories', 'Sizing can be inconsistent across collections', 'Delivery outside metros can be slow', 'Premium pricing compared to fast fashion alternatives'],
            summary: 'Theater.xyz has carved a niche in design-led mass-premium western fashion. The Vogue/Elle features and 380K Instagram following indicate strong brand resonance. Revenue grew 14x YoY to INR 14.1Cr in FY24. Prath Ventures-backed with $1.5M Pre-Series A.',
        },
        myntra: {
            topLikes: ['Unique designs stand out from typical Myntra fare', 'Premium western wear at accessible price points', 'Growing brand with strong visual identity'],
            topDislikes: ['Limited SKUs on platform', 'New brand — needs more reviews for trust building', 'Return window could be longer'],
            summary: 'Early Myntra presence building momentum. The design-first positioning differentiates from mass fashion brands on the platform.',
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
    pantproject: {
        amazon: {
            topLikes: ['Custom fit is genuinely different — pants fit perfectly', 'Fabric quality is excellent for the price point', 'Wide range of styles from formals to cargos', 'Easy online measurement system'],
            topDislikes: ['Delivery takes 7-10 days for custom orders', 'Return process for custom items is tricky', 'Limited awareness outside metros', 'Size guide could be more intuitive'],
            summary: 'The Pant Project has cracked the custom bottom-wear segment with a digital-first approach. The "250+ styles" range and custom sizing drive high customer satisfaction and repeat rates.',
        },
        myntra: {
            topLikes: ['Good quality chinos at reasonable price', 'Ready-to-wear options growing', 'Comfortable stretch fabrics'],
            topDislikes: ['Custom option not available on Myntra', 'Limited visibility vs bigger brands'],
            summary: 'Growing Myntra presence with ready-to-wear range. The custom pant proposition is stronger on their own site.',
        },
    },
    nathabit: {
        amazon: {
            topLikes: ['Ubtan face pack shows visible results in 2 weeks', 'Products are genuinely fresh — short expiry proves it', 'Hair oils are incredibly effective for growth', 'No preservatives gives peace of mind'],
            topDislikes: ['Short shelf life means need to use fast', 'Some products arrive damaged due to natural packaging', 'Premium pricing for ayurvedic category', 'Limited availability in Tier-2 cities'],
            summary: 'Nat Habit has built a cult following around fresh, preservative-free ayurvedic beauty. The "made fresh to order" model is a genuine differentiator. 52% repeat rate speaks volumes.',
        },
        myntra: {
            topLikes: ['Growing ayurvedic beauty section on Myntra', 'Product quality matches the hype', 'Unique packaging stands out'],
            topDislikes: ['Freshness guarantee harder on marketplace', 'Need more SKU availability'],
            summary: 'Rapidly growing Myntra presence. The ayurvedic positioning aligns with Myntra\'s clean beauty push.',
        },
    },
    foxtale: {
        amazon: {
            topLikes: ['Vitamin C serum shows visible brightening in 3 weeks', 'Sunscreen is non-greasy and works under makeup', 'Products designed for Indian skin types specifically', 'Dermat-backed formulations build trust'],
            topDislikes: ['Limited product range currently', 'Pricing is premium vs drugstore brands', 'Packaging could be more travel-friendly', 'Some products pill under makeup'],
            summary: 'Foxtale has rapidly captured the dermat-backed skincare segment. 350+ skin type micro-segmentation drives personalized recommendations. Strong D2C growth with expanding marketplace presence.',
        },
        myntra: {
            topLikes: ['Clean effective skincare on Myntra', 'Good alternative to imports', 'Sunscreen range is excellent'],
            topDislikes: ['Newer brand needs more reviews', 'Limited shade range'],
            summary: 'Fast-growing Myntra beauty brand. Dermat-backed positioning drives trust.',
        },
    },
    masterchow: {
        amazon: {
            topLikes: ['Chilli oil is addictive — restaurant quality at home', 'Sauces make authentic Asian cooking effortless', 'No MSG or artificial additives', 'Noodles have great texture — not like Maggi'],
            topDislikes: ['Expensive for condiments category', 'Sauces run out fast with regular use', 'Some varieties too spicy for mild palates', 'Availability inconsistent on Amazon'],
            summary: 'MasterChow has created the premium Asian condiments category in India. The chilli oil is a viral hero product. 90% online sales with growing offline retail presence.',
        },
        myntra: {
            topLikes: ['Not applicable — food brand'],
            topDislikes: ['Not applicable — food brand'],
            summary: 'MasterChow is a food brand. Not on Myntra.',
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

const EC_AMAZON_BASE = { wakao: 280, aukera: 900, aretto: 450, phool: 520, sidsfarm: 1100, koparo: 380, gynoveda: 850, bareanatomy: 480, tbof: 720, cosmix: 420, samosaparty: 900, bombaysweets: 450, theater: 320, snitch: 3200, mokobara: 1800, noise: 8500, atomberg: 4200, countrydelight: 2800, licious: 2200, mcaffeine: 2500, vahdamteas: 1500, plumgoodness: 3800, bsc: 2000, ragecoffee: 950 };
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
const TR_BASE = { wakao: 45000, aukera: 520000, aretto: 140000, phool: 220000, sidsfarm: 350000, koparo: 95000, gynoveda: 280000, bareanatomy: 150000, tbof: 200000, cosmix: 110000, samosaparty: 320000, bombaysweets: 160000, theater: 180000, snitch: 2800000, mokobara: 850000, mcaffeine: 1500000, vahdamteas: 680000, plumgoodness: 2000000, bsc: 1100000, ragecoffee: 420000, pantproject: 280000, houseofem5: 65000, whatsupwellness: 140000, masterchow: 320000, nathabit: 480000, anveshan: 280000, eggoz: 450000, foxtale: 920000, pilgrim: 1100000, neemans: 320000, perfora: 180000, boldfit: 680000, sweetkaramcoffee: 55000, drinkprime: 350000, flomattress: 160000, mymuse: 120000, dorjeteas: 25000 };
const TR_GROWTH = { wakao: 0.90, aukera: 1.30, aretto: 0.95, phool: 0.85, sidsfarm: 0.88, koparo: 0.60, gynoveda: 0.82, bareanatomy: 0.55, tbof: 0.65, cosmix: 0.72, samosaparty: 0.92, bombaysweets: 0.68, theater: 1.25, snitch: 1.15, mokobara: 0.95, mcaffeine: 0.72, vahdamteas: 0.55, plumgoodness: 0.65, bsc: 0.50, ragecoffee: 0.70, pantproject: 0.92, houseofem5: 1.30, whatsupwellness: 1.10, masterchow: 1.00, nathabit: 1.05, anveshan: 0.80, eggoz: 0.88, foxtale: 1.15, pilgrim: 1.02, neemans: 0.68, perfora: 0.82, boldfit: 0.95, sweetkaramcoffee: 0.78, drinkprime: 0.92, flomattress: 0.72, mymuse: 1.00, dorjeteas: 0.70 };
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
    aukera: {
        reddit: {
            summary: 'Aukera is a frequent topic in r/india and r/IndianJewellery threads. Lab-grown diamond awareness is surging. Users debate Aukera vs natural diamonds — most agree the value proposition is compelling. The IGI certification and buyback guarantee are cited as trust builders.',
            topLikes: ['Lab-grown diamonds at fraction of mined diamond cost', 'IGI certification adds genuine trust', 'Buyback guarantee removes purchase anxiety', 'Store experience in Bangalore is premium'],
            topDislikes: ['Resale value perception vs natural diamonds', 'Limited online-only purchasing options', 'Most designs need in-store visit', 'Still building brand recognition outside metros'],
        },
        instagram: {
            summary: 'Aukera\'s Instagram showcases stunning jewellery photography and lab-grown diamond education. The Queen\'s Reserve Polki Collection went viral. Engagement rates are high — especially among 25-40 year old women planning weddings.',
            topLikes: ['Jewellery photography is stunning', 'Lab-grown diamond education content', 'Polki collection announcement went viral', 'Wedding jewellery content drives aspirational engagement'],
            topDislikes: ['Content could show more everyday styling', 'Need more diverse model representation', 'Price-point content is unclear on Instagram'],
        },
        linkedin: {
            summary: 'Aukera is a LinkedIn darling — the Peak XV-backed lab-grown diamond disruption story resonates strongly. Posts about 5Cr to 200Cr ARR growth in 2 years get massive engagement from VCs and D2C founders.',
            topLikes: ['Explosive growth story inspires founders', 'Peak XV backing validates opportunity', 'Lab-grown diamond market insights', 'Omnichannel strategy discussion'],
            topDislikes: ['Growth numbers sometimes feel too good to verify', 'Need more unit economics transparency'],
        },
    },
    aretto: {
        reddit: {
            summary: 'Aretto appears in parenting threads on r/india and r/IndianParenting. The expanding shoe concept is genuinely novel — parents share their experiences. Shark Tank India appearance drove a spike in discussions. Cost savings vs regular shoes is the key selling point.',
            topLikes: ['Genius concept — shoes grow with kids', 'Saves money over buying new shoes every 3 months', 'Shark Tank India validation builds trust', 'Memory foam insole comfort for active kids'],
            topDislikes: ['Higher upfront price than regular kids shoes', 'Limited styles — only 9 options', 'Need more sizing guidance', 'Durability data over full growth cycle is limited'],
        },
        instagram: {
            summary: 'Aretto\'s Instagram uses kid-focused content showing the expanding shoe technology in action. Unboxing videos and side-by-side growth demonstrations perform best. Parent testimonials drive trust. Shark Tank clips are top-performing content.',
            topLikes: ['Shoe expansion demo videos are fascinating', 'Kid-focused content is adorable and shareable', 'Parent testimonials build trust', 'Shark Tank content drives discovery'],
            topDislikes: ['Need more style variety to showcase', 'Content can be too product-demo heavy', 'Limited lifestyle/activity context for kids'],
        },
        linkedin: {
            summary: 'Aretto is discussed in sustainability and kid-tech innovation threads. The patented expanding sole technology and Hardik Pandya investment generate interest. Startup founders follow the Shark Tank to growth journey.',
            topLikes: ['Patented technology is genuinely innovative', 'Sustainability angle — fewer shoes in landfills', 'Hardik Pandya investment adds buzz', 'Shark Tank India success story'],
            topDislikes: ['Scale questions remain at seed stage', 'International expansion plans seem aggressive for current stage'],
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
    theater: {
        reddit: { summary: 'Theater.xyz is gaining attention on r/IndianFashionAdvice as a design-led western wear brand from Chandigarh. The mass-premium positioning and Vogue/Elle features drive aspirational discussions. 14x YoY revenue growth is frequently cited.', topLikes: ['Design aesthetic is distinctly unique — not another fast fashion brand', 'Mass-premium pricing makes designer fashion accessible', 'Chandigarh origin story resonates beyond metros', 'Vogue and Elle features add credibility'], topDislikes: ['Limited product range still expanding', 'Availability outside their website is limited', 'Premium pricing compared to Zara/H&M alternatives'] },
        instagram: { summary: 'Instagram is Theater.xyz\'s primary discovery channel with 380K followers. The visual-first brand identity, editorial-style shoots, and Vogue/Elle feature reposts drive high engagement. Fashion influencer collaborations are growing rapidly.', topLikes: ['Editorial-quality brand photography', '380K followers with strong engagement', 'Vogue/Elle features reposted widely', 'Design-first aesthetic stands out in feeds'], topDislikes: ['Need more diverse model representation', 'Limited behind-the-scenes content', 'Could show more styling/occasion content'] },
        linkedin: { summary: 'Theater.xyz founders share the design-led mass-premium fashion brand journey. The 14x YoY revenue growth and Prath Ventures $1.5M Pre-Series A generate strong VC circle engagement.', topLikes: ['14x YoY revenue growth is compelling', 'Prath Ventures backing adds credibility', 'Design-led D2C fashion brand story'], topDislikes: ['Very early stage — scale questions remain', 'Need more operational transparency'] },
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
    nathabit: {
        reddit: { summary: 'Nat Habit is a Reddit darling on r/IndianSkincareAddicts and r/IndianProducts. The ubtan and hair oil reviews are overwhelmingly positive. Users share before/after photos regularly.', topLikes: ['Ubtan results are visible and fast', 'Fresh products with no preservatives', 'Hair oils genuinely effective', 'Ayurvedic approach feels safer'], topDislikes: ['Short shelf life is inconvenient', 'Premium pricing for naturals', 'Product packaging could be better'] },
        instagram: { summary: 'Nat Habit\'s Instagram features fresh ingredient content and real customer transformations. The "made fresh" narrative drives strong engagement.', topLikes: ['Fresh ingredient showcase content', 'Real transformation results', 'Ayurvedic education content'], topDislikes: ['Content can feel repetitive', 'Need more diverse product showcases'] },
        linkedin: { summary: 'Founders share D2C brand-building insights. The preservative-free beauty model is discussed as category innovation.', topLikes: ['Fresh-to-order beauty model is novel', 'Growth metrics are impressive'], topDislikes: ['Limited business model transparency'] },
    },
    mcaffeine: {
        reddit: { summary: 'mCaffeine dominates the coffee personal care niche on social media. The body scrub has become a viral sensation with user transformation content. Strong presence across all platforms.', topLikes: ['Coffee body scrub results are visible', 'Brand has created an entirely new category', 'Packaging is Instagram-worthy', 'Good for gifting'], topDislikes: ['Some products too harsh for sensitive skin', 'Caffeine skincare claims need more backing', 'Products run out fast'] },
        instagram: { summary: 'Instagram is the brand\'s strongest channel with massive engagement on transformation content. User-generated scrub routines go viral regularly.', topLikes: ['Transformation content drives engagement', 'Coffee aesthetic is unique and consistent', 'User-generated content is abundant'], topDislikes: ['Content focused too heavily on scrub range', 'Need more diverse product content'] },
        linkedin: { summary: 'mCaffeine founder shares D2C beauty brand building insights. The journey from niche to scale is a popular case study.', topLikes: ['Category creation in personal care', 'Scale without heavy discounting'], topDislikes: ['Limited thought leadership beyond brand'] },
    },
    foxtale: {
        reddit: { summary: 'Foxtale is rapidly gaining traction on r/IndianSkincareAddicts. Vitamin C serum and sunscreen are most discussed. Users appreciate the dermat-backed formulations designed for Indian skin.', topLikes: ['Vitamin C serum shows real results', 'Sunscreen works great under makeup', 'Formulated specifically for Indian skin', 'Dermatologist backing builds trust'], topDislikes: ['Limited product range currently', 'Premium pricing vs pharmacy brands', 'Newer brand — needs more long-term reviews'] },
        instagram: { summary: 'Foxtale Instagram features dermat content creators and before/after skin results. The clean, clinical aesthetic differentiates from cluttered beauty feeds.', topLikes: ['Dermat collaborations add credibility', 'Before/after content is compelling', 'Clean clinical aesthetic'], topDislikes: ['Need more diverse skin type representation', 'Content can feel too clinical'] },
        linkedin: { summary: 'Founder Romita shares beauty brand building insights. The data-driven approach to skincare formulation is discussed in D2C circles.', topLikes: ['Science-backed beauty narrative', 'D2C growth metrics are impressive'], topDislikes: ['Limited behind-the-scenes content'] },
    },
    masterchow: {
        reddit: { summary: 'MasterChow chilli oil has become a viral sensation on r/IndianFood and r/IndianProducts. Users share recipes and rate sauces. The "restaurant quality at home" narrative drives recommendations.', topLikes: ['Chilli oil is genuinely addictive', 'Sauces make Asian cooking easy', 'Clean ingredients — no MSG', 'Noodle quality is excellent'], topDislikes: ['Expensive for condiments', 'Sauces run out too fast', 'Some varieties too spicy'] },
        instagram: { summary: 'Recipe content featuring MasterChow products performs exceptionally well. Food blogger collaborations drive discovery. Chilli oil unboxing/reviews are popular.', topLikes: ['Recipe content is shareable', 'Chilli oil reviews go viral', 'Food blogger partnerships are authentic'], topDislikes: ['Need more everyday cooking content', 'Limited vegetarian recipe focus'] },
        linkedin: { summary: 'Founders share the ready-to-cook market opportunity in India. Asian food category creation discussed in FMCG investor circles.', topLikes: ['Category creation narrative', 'Fund-raising journey insights'], topDislikes: ['Limited operational transparency'] },
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
    theater: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'discovery', score: 45, theme: 'Early buyers discovering design-led western wear from Chandigarh. Vogue feature drives first wave of curious shoppers. Product quality exceeds expectations at mass-premium pricing.' },
            { quarter: 'Q2 2025', mood: 'accelerating', score: 62, theme: 'Revenue growing 14x YoY. Repeat customers emerging. Elle feature adds momentum. Design aesthetic creating word-of-mouth among fashion-conscious millennials.' },
            { quarter: 'Q3 2025', mood: 'explosive', score: 78, theme: 'Prath Ventures $1.5M Pre-Series A validates opportunity. Product range expanding. Instagram driving 60%+ of discovery. Category expansion into accessories.' },
            { quarter: 'Q1 2026', mood: 'breakout', score: 88, theme: 'Revenue trajectory towards INR 50Cr+ run rate. Brand becoming synonymous with design-led mass-premium in India. Multi-city pop-ups planned.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'niche', score: 40, theme: 'Small but passionate following on Instagram. Chandigarh fashion community strong advocates. Limited national awareness.' },
            { quarter: 'Q2 2025', mood: 'buzzing', score: 58, theme: 'Vogue and Elle features shared widely on social media. Fashion influencers discovering the brand. Instagram followers crossing 200K.' },
            { quarter: 'Q3 2025', mood: 'viral', score: 75, theme: '380K Instagram followers. Fashion bloggers creating organic content. LinkedIn fundraise story gets attention. Reddit fashion threads recommending.' },
            { quarter: 'Q1 2026', mood: 'iconic', score: 85, theme: 'Social media driving majority of revenue. Brand becoming an Instagram fashion discovery. LinkedIn growth story inspires D2C founders.' },
        ],
    },
    aukera: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'discovery', score: 55, theme: 'Early buyers intrigued by lab-grown diamonds. IGI certification builds confidence. Store experience in Bangalore drives conversions. Online discovery, offline purchase pattern emerging.' },
            { quarter: 'Q2 2025', mood: 'accelerating', score: 70, theme: 'Peak XV investment announced. Revenue hitting INR 30Cr+ run-rate. Polki collection launch creates buzz. Buyback guarantee removing purchase anxiety.' },
            { quarter: 'Q3 2025', mood: 'explosive', score: 85, theme: 'Revenue crosses INR 100Cr ARR. 13 stores operational. Wedding season drives massive demand. Lab-grown diamond awareness reaching mainstream.' },
            { quarter: 'Q1 2026', mood: 'breakout', score: 92, theme: 'INR 200Cr ARR milestone. Brand becoming synonymous with lab-grown diamonds in India. Repeat purchases and referrals driving organic growth. Expansion to new cities.' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'niche', score: 48, theme: 'Lab-grown diamond discussions confined to jewellery forums. Instagram showcasing product but limited reach. LinkedIn founder posts gaining traction.' },
            { quarter: 'Q2 2025', mood: 'buzzing', score: 65, theme: 'Peak XV funding announcement goes viral on LinkedIn. Instagram jewellery content gaining followers. Reddit debates natural vs lab-grown diamonds heat up.' },
            { quarter: 'Q3 2025', mood: 'mainstream', score: 80, theme: 'Wedding content drives Instagram virality. LinkedIn growth story shared widely in VC circles. Reddit becoming a recommendation channel for lab-grown diamonds.' },
            { quarter: 'Q1 2026', mood: 'iconic', score: 90, theme: 'Social media is primary discovery channel. Bridal jewellery content gets millions of views. LinkedIn growth case study for D2C luxury. Community advocacy organic and sustained.' },
        ],
    },
    aretto: {
        ecommerce: [
            { quarter: 'Q1 2025', mood: 'curious', score: 50, theme: 'Parents discovering expanding shoe concept. Shark Tank India appearance creates initial trial. Technology claims are tested — most parents pleased with results.' },
            { quarter: 'Q2 2025', mood: 'convinced', score: 62, theme: 'Repeat buyers emerging as shoes actually grow. Word-of-mouth among parent communities strong. Memory foam comfort praised by kids and parents alike.' },
            { quarter: 'Q3 2025', mood: 'advocating', score: 72, theme: 'Parent testimonials driving conversions. School-season demand spikes. Gifting use case growing. Limited styles is the main complaint.' },
            { quarter: 'Q1 2026', mood: 'growing', score: 78, theme: 'Revenue growing 70-80% YoY. New styles launched. International expansion planned. Brand becoming the default answer to "kids outgrow shoes too fast."' },
        ],
        social: [
            { quarter: 'Q1 2025', mood: 'viral demo', score: 55, theme: 'Shark Tank clip goes viral. Shoe expansion demo videos shared widely. Parents tagging friends in comments. Reddit parenting threads discuss.' },
            { quarter: 'Q2 2025', mood: 'community', score: 65, theme: 'Parent communities on Instagram sharing real-use reviews. Reddit threads recommending for "smart kids shoe" queries. Hardik Pandya investment adds credibility.' },
            { quarter: 'Q3 2025', mood: 'trusted', score: 73, theme: 'User-generated content growing organically. Back-to-school content driving engagement. LinkedIn featuring as kid-tech innovation.' },
            { quarter: 'Q1 2026', mood: 'established', score: 80, theme: 'Organic social advocacy from parents. Instagram a key discovery channel. LinkedIn international expansion story gaining attention.' },
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
const SO_REDDIT = { wakao: 800, aukera: 2800, aretto: 1200, phool: 2200, sidsfarm: 1800, koparo: 700, gynoveda: 2500, bareanatomy: 900, tbof: 1600, cosmix: 1100, samosaparty: 2800, bombaysweets: 1200, theater: 1800, snitch: 8500, mokobara: 4200, mcaffeine: 5000, vahdamteas: 2800, plumgoodness: 6500, bsc: 4000, ragecoffee: 2200, pantproject: 1800, houseofem5: 600, whatsupwellness: 1200, masterchow: 2000, nathabit: 3500, anveshan: 1000, eggoz: 1400, foxtale: 5500, pilgrim: 6800, neemans: 1800, perfora: 1400, boldfit: 3500, sweetkaramcoffee: 500, drinkprime: 1600, flomattress: 900, mymuse: 1400, dorjeteas: 400 };
const SO_INSTA = { wakao: 12000, aukera: 95000, aretto: 28000, phool: 45000, sidsfarm: 28000, koparo: 9000, gynoveda: 55000, bareanatomy: 18000, tbof: 22000, cosmix: 15000, samosaparty: 65000, bombaysweets: 32000, theater: 380000, snitch: 450000, mokobara: 120000, mcaffeine: 350000, vahdamteas: 85000, plumgoodness: 420000, bsc: 280000, ragecoffee: 75000, pantproject: 55000, houseofem5: 18000, whatsupwellness: 45000, masterchow: 85000, nathabit: 180000, anveshan: 35000, eggoz: 42000, foxtale: 380000, pilgrim: 450000, neemans: 65000, perfora: 48000, boldfit: 180000, sweetkaramcoffee: 15000, drinkprime: 38000, flomattress: 22000, mymuse: 35000, dorjeteas: 12000 };
const SO_LINKEDIN = { wakao: 3000, aukera: 14000, aretto: 4500, phool: 18000, sidsfarm: 12000, koparo: 2500, gynoveda: 8000, bareanatomy: 3500, tbof: 9000, cosmix: 4000, samosaparty: 6000, bombaysweets: 5000, theater: 4500, snitch: 25000, mokobara: 15000, mcaffeine: 18000, vahdamteas: 12000, plumgoodness: 20000, bsc: 16000, ragecoffee: 8000, pantproject: 8000, houseofem5: 2000, whatsupwellness: 4000, masterchow: 6000, nathabit: 12000, anveshan: 4500, eggoz: 5000, foxtale: 22000, pilgrim: 25000, neemans: 8000, perfora: 5000, boldfit: 12000, sweetkaramcoffee: 1800, drinkprime: 8000, flomattress: 3500, mymuse: 5000, dorjeteas: 1500 };
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
    { platform: 'reddit', subreddit: 'r/IndianJewellery', title: 'Aukera lab-grown diamond ring review — INR 200Cr ARR brand. Is it worth it vs natural?', upvotes: 1480, comments: 312, time: '12h ago', sentiment: 'positive', brand: 'aukera' },
    { platform: 'linkedin', handle: 'Sustainability Today', title: 'How Phool.co is turning temple waste into vegan leather — a circular economy masterclass', likes: 4200, comments: 189, time: '5h ago', sentiment: 'positive', brand: 'phool' },
    { platform: 'instagram', handle: '@parentinghacks.in', title: 'Aretto expanding shoes — bought size 11, now fitting size 13! Genius kids shoes from Shark Tank', likes: 3400, comments: 285, time: '7h ago', sentiment: 'positive', brand: 'aretto' },
    { platform: 'reddit', subreddit: 'r/organicfarming', title: 'Two Brothers Organic Farms A2 ghee — expensive but is it worth it? My honest take', upvotes: 920, comments: 234, time: '10h ago', sentiment: 'mixed', brand: 'tbof' },
    { platform: 'linkedin', handle: 'Kishore Indukuri', title: 'From IT consulting to dairy farming — 8 years of building Sid\'s Farm. Here\'s what I learned about D2C dairy.', likes: 8500, comments: 567, time: '1d ago', sentiment: 'positive', brand: 'sidsfarm' },
    { platform: 'instagram', handle: '@wellnessblogger', title: 'Cosmix Sleep Blend 30-day challenge — here\'s what happened to my insomnia', likes: 2340, comments: 198, time: '9h ago', sentiment: 'positive', brand: 'cosmix' },
    { platform: 'reddit', subreddit: 'r/bangalore', title: 'Just tried Samosa Party for the first time. Rs 50 for a samosa seemed crazy but wow.', upvotes: 1560, comments: 312, time: '14h ago', sentiment: 'positive', brand: 'samosaparty' },
    { platform: 'linkedin', handle: 'D2C Insider', title: 'Gynoveda built a Rs 100Cr brand by talking about periods — the power of community-first commerce', likes: 3800, comments: 234, time: '1d ago', sentiment: 'positive', brand: 'gynoveda' },
    { platform: 'instagram', handle: '@mumbaimunchies', title: 'Bombay Sweet Shop Diwali box unboxing — artisanal mithai at its finest', likes: 4100, comments: 267, time: '5h ago', sentiment: 'positive', brand: 'bombaysweets' },
    { platform: 'reddit', subreddit: 'r/IndianFashionAdvice', title: 'Snitch haul review — 8 items for Rs 4000. Here\'s what\'s worth it and what\'s not.', upvotes: 3200, comments: 478, time: '3h ago', sentiment: 'positive', brand: 'snitch' },
    { platform: 'instagram', handle: '@travelwithstyle', title: 'Mokobara cabin bag survived 15 flights — still looks brand new. My honest review.', likes: 8900, comments: 567, time: '6h ago', sentiment: 'positive', brand: 'mokobara' },
    { platform: 'linkedin', handle: 'Siddharth Dungarwal', title: 'From Rs 0 to Rs 500Cr revenue — bootstrapped. No VC money. Here\'s the Snitch story.', likes: 12000, comments: 890, time: '8h ago', sentiment: 'positive', brand: 'snitch' },
    { platform: 'reddit', subreddit: 'r/IndianSkincareAddicts', title: 'Foxtale Vitamin C serum 45-day results. Indian skin, real results.', upvotes: 2800, comments: 345, time: '5h ago', sentiment: 'positive', brand: 'foxtale' },
    { platform: 'instagram', handle: '@skincarejunkie', title: 'mCaffeine coffee body scrub — 30 day before/after. My skin has never been this smooth.', likes: 15000, comments: 1200, time: '2h ago', sentiment: 'positive', brand: 'mcaffeine' },
    { platform: 'linkedin', handle: 'Dhruv Toshniwal', title: 'From textile family legacy to D2C disruption. How The Pant Project hit INR 40Cr revenue in 4 years.', likes: 6500, comments: 478, time: '1d ago', sentiment: 'positive', brand: 'pantproject' },
    { platform: 'reddit', subreddit: 'r/IndianFood', title: 'MasterChow chilli oil has ruined all other chilli oils for me. Review inside.', upvotes: 1800, comments: 290, time: '10h ago', sentiment: 'positive', brand: 'masterchow' },
    { platform: 'instagram', handle: '@beautyfinds', title: 'Plum Vitamin C serum 60-day review — visible brightening results. Before and after photos.', likes: 7200, comments: 445, time: '4h ago', sentiment: 'positive', brand: 'plumgoodness' },
    { platform: 'linkedin', handle: 'D2C Insider', title: 'Mokobara raised $12M Series B. The luggage D2C play is working. Here\'s why investors are excited.', likes: 5600, comments: 345, time: '12h ago', sentiment: 'positive', brand: 'mokobara' },
    { platform: 'reddit', subreddit: 'r/IndianSkincareAddicts', title: 'Nat Habit ubtan changed my skin in 2 weeks — no preservatives, fresh delivery. Review.', upvotes: 2100, comments: 380, time: '7h ago', sentiment: 'positive', brand: 'nathabit' },
    { platform: 'instagram', handle: '@wellnessdiaries', title: 'What\'s Up Wellness Sleep Gummies — finally sleeping 7+ hours. 30-day honest review.', likes: 4200, comments: 310, time: '4h ago', sentiment: 'positive', brand: 'whatsupwellness' },
    { platform: 'linkedin', handle: 'FAST42 by Inc42', title: 'House of EM5 from INR 69L to INR 20Cr in 2 years. The bootstrapped luxury fragrance story.', likes: 5800, comments: 402, time: '6h ago', sentiment: 'positive', brand: 'houseofem5' },
    { platform: 'reddit', subreddit: 'r/IndianProducts', title: 'DrinkPrime water purifier subscription vs buying — 6 month cost comparison. Worth it?', upvotes: 1600, comments: 240, time: '8h ago', sentiment: 'positive', brand: 'drinkprime' },
    { platform: 'instagram', handle: '@fitnessjunkie.in', title: 'Boldfit gym accessories haul — resistance bands, shaker, yoga mat. All under Rs 2000!', likes: 3800, comments: 245, time: '5h ago', sentiment: 'positive', brand: 'boldfit' },
    { platform: 'reddit', subreddit: 'r/IndianFashionAdvice', title: 'Neemans wool sneakers 6-month review. Sustainable footwear that actually lasts?', upvotes: 1400, comments: 190, time: '11h ago', sentiment: 'positive', brand: 'neemans' },
    { platform: 'instagram', handle: '@ragecoffeeofficial', title: 'New Irish Hazelnut Rage Coffee. Instant coffee that doesn\'t taste instant. Available now.', likes: 3400, comments: 210, time: '9h ago', sentiment: 'positive', brand: 'ragecoffee' },
    { platform: 'instagram', handle: '@vogueindia', title: 'Theater.xyz is the Chandigarh-born brand redefining mass-premium fashion. 14x revenue growth. The future of Indian design.', likes: 12500, comments: 890, time: '3h ago', sentiment: 'positive', brand: 'theater' },
    { platform: 'reddit', subreddit: 'r/IndianFashionAdvice', title: 'Theater.xyz — found this brand through Vogue India. Design quality is insane for the price. Anyone else tried them?', upvotes: 2400, comments: 345, time: '6h ago', sentiment: 'positive', brand: 'theater' },
    { platform: 'linkedin', handle: 'D2C Insider', title: 'Theater.xyz raised $1.5M Pre-Series A from Prath Ventures. 14x YoY revenue growth. Chandigarh fashion going national.', likes: 7200, comments: 520, time: '8h ago', sentiment: 'positive', brand: 'theater' },
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
    aukera: {
        ambitionbox: { rating: 4.4, totalReviews: 48, recommend: 88, ceoApproval: 92, workLife: 4.0, salary: 3.8, security: 4.0, culture: 4.5, growth: 4.4,
            likes: ['Explosive growth — INR 5Cr to 200Cr ARR in 2 years', 'Peak XV backing signals strong future', 'Premium luxury brand building is exciting', 'Retail + tech hybrid role variety'],
            dislikes: ['Hypergrowth pace can be exhausting', 'New stores opening constantly — relocation pressure', 'Processes still catching up with growth speed'],
            summary: 'Aukera is one of the fastest-growing D2C brands. Employees are energized by the explosive growth story. Peak XV backing provides stability. The pace of 13 stores in 2 years means constant change.'
        },
        glassdoor: { rating: 4.2, totalReviews: 36, recommend: 85, ceoApproval: 90, workLife: 3.8, salary: 3.7, security: 3.9, culture: 4.3, growth: 4.3,
            likes: ['Working in luxury lab-grown diamonds feels cutting-edge', 'Founder vision for INR 1000Cr brand is motivating', 'Good compensation for D2C startup'],
            dislikes: ['Store expansion pace strains operations team', 'Weekend work expected in retail roles', 'Need better work-life balance policies'],
            summary: 'High-growth environment with genuine luxury positioning. Operations team faces the most strain from rapid expansion. Compensation is competitive for D2C sector.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'exciting', score: 72, theme: 'Early team riding the growth wave. Store openings keep energy high. Founder vision inspires.' },
            { quarter: 'Q2 2025', mood: 'accelerating', score: 80, theme: 'Peak XV funding boosts confidence. New hires joining rapidly. Team proud of brand building.' },
            { quarter: 'Q3 2025', mood: 'intense', score: 78, theme: 'Hypergrowth brings operational challenges. Processes being built while scaling. Team resilient.' },
            { quarter: 'Q1 2026', mood: 'thriving', score: 85, theme: 'INR 200Cr ARR achievement celebrated. HR processes maturing. Clear career paths emerging.' },
        ],
    },
    aretto: {
        ambitionbox: { rating: 4.0, totalReviews: 22, recommend: 78, ceoApproval: 82, workLife: 3.8, salary: 3.3, security: 3.5, culture: 4.2, growth: 3.9,
            likes: ['Working on genuinely innovative patented product', 'Shark Tank India visibility boosted team pride', 'Small team means direct impact on decisions', 'Hardik Pandya investment adds excitement'],
            dislikes: ['Seed-stage salary constraints', 'Pune location limits some talent access', 'Small team means wearing many hats', 'International expansion plans add uncertainty'],
            summary: 'Aretto employees are passionate about the patented expanding shoe technology. Shark Tank validation and Hardik Pandya investment boost morale. Typical seed-stage compensation challenges.'
        },
        glassdoor: { rating: 3.8, totalReviews: 16, recommend: 75, ceoApproval: 80, workLife: 3.7, salary: 3.1, security: 3.3, culture: 4.0, growth: 3.7,
            likes: ['Product innovation is genuinely exciting', 'Team of 77 people — growing fast', 'Founders are accessible and hands-on'],
            dislikes: ['Seed-stage budget constraints', 'Need better HR structure as team grows', 'Work-life balance needs attention during growth phase'],
            summary: 'Innovation-driven culture. The patented technology gives employees pride in their work. Growing pains at 77-person stage are expected.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'energized', score: 65, theme: 'Shark Tank appearance brings visibility. Team excited about growing orders. Resources still tight.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 70, theme: 'Revenue growing 70-80% YoY. New hires joining. Hardik Pandya investment boosts team morale.' },
            { quarter: 'Q3 2025', mood: 'confident', score: 74, theme: 'Product-market fit validated. International expansion discussions begin. Team scaling to 77.' },
            { quarter: 'Q1 2026', mood: 'ambitious', score: 78, theme: 'UAE/Singapore expansion plans energize team. New styles launched. Brand gaining mainstream recognition.' },
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
    theater: {
        ambitionbox: { rating: 4.0, totalReviews: 18, recommend: 78, ceoApproval: 84, workLife: 3.8, salary: 3.2, security: 3.3, culture: 4.3, growth: 3.7,
            likes: ['Design-first culture is inspiring and creatively fulfilling', 'Explosive 14x growth makes every day exciting', 'Chandigarh-based — great work-life vs metro startups', 'Founders have a clear design vision'],
            dislikes: ['Very early stage — processes still forming', 'Small team means wearing many hats', 'Compensation is startup-level', 'Need more structured career paths'],
            summary: 'Theater.xyz offers a design-led creative environment with explosive growth energy. Chandigarh location is a unique perk. Early-stage challenges around compensation and structure are typical.'
        },
        glassdoor: { rating: 3.8, totalReviews: 12, recommend: 75, ceoApproval: 82, workLife: 3.7, salary: 3.0, security: 3.1, culture: 4.1, growth: 3.5,
            likes: ['Working for a Vogue/Elle-featured brand is exciting', 'Creative freedom in design decisions', 'Rapid growth creates learning opportunities'],
            dislikes: ['Early stage means limited benefits', 'Need more senior leadership hires', 'Scaling challenges as growth accelerates'],
            summary: 'Creative startup with strong design DNA. The 14x growth pace is exhilarating but brings typical early-stage growing pains.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'excited', score: 65, theme: 'Small team riding design wave. Revenue growing fast. Creative energy high.' },
            { quarter: 'Q2 2025', mood: 'accelerating', score: 72, theme: 'Vogue feature energizes team. New hires joining. Brand recognition growing.' },
            { quarter: 'Q3 2025', mood: 'proud', score: 80, theme: 'Prath Ventures funding validates mission. Team expansion. Media coverage boosts morale.' },
            { quarter: 'Q1 2026', mood: 'ambitious', score: 86, theme: 'Revenue trajectory exciting. National expansion planned. Team confident in brand vision.' },
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
    pantproject: {
        ambitionbox: { rating: 4.1, totalReviews: 35, recommend: 80, ceoApproval: 85, workLife: 4.0, salary: 3.5, security: 3.6, culture: 4.2, growth: 3.8,
            likes: ['Textile heritage family brings deep industry knowledge', 'Fast-growing D2C brand with clear vision', 'Strong brand-building culture', 'Wharton + SAIC founder duo is inspiring'],
            dislikes: ['Small team means wearing many hats', 'Scaling custom operations is complex', 'Need more structured processes'],
            summary: 'The Pant Project combines textile family legacy with D2C innovation. Employees appreciate the clear vision and heritage expertise. Typical early-stage scaling challenges.'
        },
        glassdoor: { rating: 3.9, totalReviews: 28, recommend: 76, ceoApproval: 82, workLife: 3.8, salary: 3.3, security: 3.5, culture: 4.0, growth: 3.6,
            likes: ['Exciting D2C fashion brand to work for', 'Founders bring textile industry credibility', 'Omnichannel strategy is well thought out'],
            dislikes: ['Series A stage — limited resources', 'Need more senior hires', 'Work-life can blur during launches'],
            summary: 'Good D2C fashion workplace with strong founders. Series A stage means growth opportunities but limited resources.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'energetic', score: 68, theme: 'Post Series A. Team expanding. Retail store launches exciting the team.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 72, theme: 'Revenue hitting targets. Omnichannel strategy working. Culture solidifying.' },
            { quarter: 'Q3 2025', mood: 'confident', score: 76, theme: 'INR 40Cr revenue. FAST42 recognition boosting morale. Clear growth trajectory.' },
            { quarter: 'Q1 2026', mood: 'ambitious', score: 80, theme: 'Targeting INR 100Cr. Team confident in the brand. Retail expansion accelerating.' },
        ],
    },
    nathabit: {
        ambitionbox: { rating: 4.0, totalReviews: 65, recommend: 78, ceoApproval: 82, workLife: 3.8, salary: 3.4, security: 3.6, culture: 4.1, growth: 3.7,
            likes: ['Mission-driven brand in ayurvedic beauty', 'Fast growth creates career opportunities', 'Fresh product model is genuinely innovative', 'Strong customer love motivates team'],
            dislikes: ['Fresh-to-order operations are complex', 'Rapid scaling creating process gaps', 'Compensation below BPC industry standard'],
            summary: 'Nat Habit employees are proud of building a genuinely differentiated brand. The fresh-to-order model is challenging operationally but rewarding. Series B growth phase.'
        },
        glassdoor: { rating: 3.8, totalReviews: 52, recommend: 74, ceoApproval: 80, workLife: 3.6, salary: 3.2, security: 3.5, culture: 3.9, growth: 3.5,
            likes: ['Innovative preservative-free beauty model', 'Strong brand with 52% repeat rate', 'Good learning in D2C operations'],
            dislikes: ['Operations complexity is high', 'Need better compensation benchmarking', 'Rapid hiring affecting culture'],
            summary: 'Rewarding workplace for beauty-tech enthusiasts. Operational complexity of fresh products is both a challenge and differentiator.'
        },
        moodTimeline: [
            { quarter: 'Q1 2025', mood: 'ambitious', score: 70, theme: 'Series B funded. Team expanding. INR 100Cr ARR target in sight.' },
            { quarter: 'Q2 2025', mood: 'growing', score: 74, theme: 'Retail expansion beginning. New product lines launching. Team energized.' },
            { quarter: 'Q3 2025', mood: 'strong', score: 78, theme: 'Revenue growth on track. Brand becoming household name. Employee pride high.' },
            { quarter: 'Q1 2026', mood: 'excellent', score: 82, theme: 'FAST42 recognition. Targeting INR 350Cr. Clear path to EBITDA profitability.' },
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

// =====================================================
// Early Signal Scanner Data — 10-Channel Discovery Engine
// =====================================================

// Signal channel definitions
const SIGNAL_CHANNELS = [
    { id: 'mca', name: 'MCA/ROC Filings', icon: 'M', color: '#10b981', description: 'Ministry of Corporate Affairs revenue filings showing >100% YoY growth' },
    { id: 'ig_growth', name: 'IG Follower Growth', icon: 'I', color: '#e1306c', description: 'Instagram follower growth velocity >15% MoM with <500K total' },
    { id: 'bsr', name: 'Amazon BSR', icon: 'A', color: '#ff9900', description: 'Best Seller Rank movement from >500 to <100 within 90 days' },
    { id: 'regional', name: 'Regional Trends', icon: 'R', color: '#8b5cf6', description: 'Google Trends regional index >40 in Tier 2/3 with national <15' },
    { id: 'shark_tank', name: 'Shark Tank Alumni', icon: 'S', color: '#dc2626', description: 'Post-episode search spike sustaining >60% of peak after 90 days' },
    { id: 'hiring', name: 'LinkedIn Hiring', icon: 'L', color: '#0a66c2', description: 'Company growing from <20 to >50 employees in 6 months' },
    { id: 'trademark', name: 'Trademark Registry', icon: 'T', color: '#f97316', description: 'New IP India filing + website + >1K IG within 6 months' },
    { id: 'marketplace', name: 'Marketplace Onboarding', icon: 'P', color: '#d946ef', description: 'Brand appearing on 2+ marketplaces (Nykaa, Purplle, etc.) in 3 months' },
    { id: 'influencer', name: 'Micro-Influencer Density', icon: 'F', color: '#06b6d4', description: '>10 unique creator mentions in 30 days with <100K brand followers' },
    { id: 'fundraise', name: 'Fundraise Announcements', icon: '$', color: '#22c55e', description: 'First institutional round (Seed/Angel) raised in last 6 months' },
];

// Discovery pipeline stages
const PIPELINE_STAGES = ['Detected', 'Verified', 'Tracking', 'Scored'];

// Early signal data for EXISTING tracked companies (signals they exhibited before being tracked)
const EARLY_SIGNALS_TRACKED = {};
COMPANIES.forEach(c => {
    const signalCount = Math.floor(Math.random() * 5) + 2;
    const allChannels = SIGNAL_CHANNELS.map(ch => ch.id);
    const shuffled = allChannels.sort(() => Math.random() - 0.5);
    const activeChannels = shuffled.slice(0, signalCount);
    EARLY_SIGNALS_TRACKED[c.id] = {
        signals: {},
        stage: 'Scored',
        discoveryScore: COMPANIES.indexOf(c) < 10 ? Math.round(70 + Math.random() * 25) : Math.round(40 + Math.random() * 45),
    };
    SIGNAL_CHANNELS.forEach(ch => {
        EARLY_SIGNALS_TRACKED[c.id].signals[ch.id] = activeChannels.includes(ch.id);
    });
});

// NEW brands discovered by the scanner (not yet in COMPANIES — pan-India, Tier 2/3 cities)
const DISCOVERED_BRANDS = [
    {
        id: 'lahori', name: 'Lahori Beverages', city: 'Ludhiana', state: 'Punjab', tier: 2,
        sector: 'food', sectorLabel: 'Food & Beverage', estRevenue: 'INR 120Cr/yr',
        signals: { mca: true, ig_growth: true, bsr: true, regional: true, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: false, trademark: false },
        stage: 'Tracking', discoveryScore: 89, igFollowers: '290K', igGrowthRate: 20,
        strongestSignal: 'MCA/ROC Filings', detail: 'Traditional Indian beverages (Shikanji, Zeera Soda) from Ludhiana. Revenue 4x in 2 years to INR 120Cr. Now in 50K+ retail outlets. Series B from Verlinvest.'
    },
    {
        id: 'letsdressup', name: "Let's Dress Up", city: 'Surat', state: 'Gujarat', tier: 2,
        sector: 'fashion', sectorLabel: 'Fashion & Apparel', estRevenue: 'INR 40Cr/yr',
        signals: { mca: true, ig_growth: true, bsr: false, regional: true, hiring: true, marketplace: true, influencer: true, fundraise: false, shark_tank: false, trademark: true },
        stage: 'Tracking', discoveryScore: 82, igFollowers: '180K', igGrowthRate: 22,
        strongestSignal: 'IG Follower Growth', detail: 'Surat-based ethnic fusion wear. 180K IG with 22% MoM growth. Trending in Gujarat + Rajasthan before national.'
    },
    {
        id: 'slurrpfarm', name: 'Slurrp Farm', city: 'Gurugram', state: 'Haryana', tier: 2,
        sector: 'food', sectorLabel: 'Food & Beverage', estRevenue: 'INR 110Cr/yr',
        signals: { mca: true, ig_growth: true, bsr: true, regional: false, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: true, trademark: false },
        stage: 'Verified', discoveryScore: 91, igFollowers: '450K', igGrowthRate: 12,
        strongestSignal: 'Amazon BSR', detail: 'Kids nutrition brand. Top-10 BSR in Baby Foods. Shark Tank S1 alumni. Revenue 3x in 18 months. 8 open roles on LinkedIn.'
    },
    {
        id: 'theformularx', name: 'The Formula Rx', city: 'Chandigarh', state: 'Punjab', tier: 2,
        sector: 'beauty', sectorLabel: 'Beauty & Personal Care', estRevenue: 'INR 8Cr/yr',
        signals: { mca: false, ig_growth: true, bsr: true, regional: true, hiring: false, marketplace: true, influencer: true, fundraise: false, shark_tank: false, trademark: true },
        stage: 'Detected', discoveryScore: 68, igFollowers: '95K', igGrowthRate: 28,
        strongestSignal: 'IG Follower Growth', detail: 'Chandigarh-based clinical skincare. 95K IG growing at 28% MoM. Regional trend breakout in Punjab + Haryana. Just listed on Nykaa.'
    },
    {
        id: 'auracrafts', name: 'Aura Crafts', city: 'Jaipur', state: 'Rajasthan', tier: 2,
        sector: 'home', sectorLabel: 'Home & Living', estRevenue: 'INR 15Cr/yr',
        signals: { mca: true, ig_growth: true, bsr: false, regional: true, hiring: false, marketplace: false, influencer: true, fundraise: false, shark_tank: false, trademark: true },
        stage: 'Detected', discoveryScore: 62, igFollowers: '72K', igGrowthRate: 19,
        strongestSignal: 'Regional Trends', detail: 'Jaipur artisan home decor brand. Trending heavily in Rajasthan + Gujarat on Google Trends. 40+ micro-influencer collabs in 30 days.'
    },
    {
        id: 'brownliving', name: 'Brown Living', city: 'Mumbai', state: 'Maharashtra', tier: 1,
        sector: 'home', sectorLabel: 'Home & Living', estRevenue: 'INR 25Cr/yr',
        signals: { mca: true, ig_growth: true, bsr: false, regional: false, hiring: true, marketplace: false, influencer: true, fundraise: true, shark_tank: true, trademark: false },
        stage: 'Tracking', discoveryScore: 79, igFollowers: '210K', igGrowthRate: 14,
        strongestSignal: 'Fundraise Announcements', detail: 'Sustainable living marketplace. Shark Tank S2. Seed round from Titan Capital. 6 new hires in 3 months. Brown Living model is marketplace + own brand.'
    },
    {
        id: 'happyrationals', name: 'Happy Rationals', city: 'Kochi', state: 'Kerala', tier: 2,
        sector: 'health', sectorLabel: 'Health & Wellness', estRevenue: 'INR 5Cr/yr',
        signals: { mca: false, ig_growth: true, bsr: true, regional: true, hiring: false, marketplace: true, influencer: true, fundraise: false, shark_tank: false, trademark: true },
        stage: 'Detected', discoveryScore: 65, igFollowers: '48K', igGrowthRate: 32,
        strongestSignal: 'IG Follower Growth', detail: 'Kerala-based adaptogen brand. 48K IG but growing at 32% MoM. Top-50 BSR in Herbal Supplements. Trending in Kerala + Karnataka.'
    },
    {
        id: 'bewakoof', name: 'Bewakoof', city: 'Mumbai', state: 'Maharashtra', tier: 1,
        sector: 'fashion', sectorLabel: 'Fashion & Apparel', estRevenue: 'INR 350Cr/yr',
        signals: { mca: true, ig_growth: true, bsr: true, regional: false, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: false, trademark: false },
        stage: 'Verified', discoveryScore: 85, igFollowers: '1.2M', igGrowthRate: 8,
        strongestSignal: 'MCA/ROC Filings', detail: 'INR 350Cr revenue. 7M+ app downloads. Strong BSR across multiple categories. 15 open roles. Recent INR 60Cr round from InvestCorp.'
    },
    {
        id: 'ellementry', name: 'Ellementry', city: 'Jaipur', state: 'Rajasthan', tier: 2,
        sector: 'home', sectorLabel: 'Home & Living', estRevenue: 'INR 20Cr/yr',
        signals: { mca: true, ig_growth: true, bsr: false, regional: true, hiring: true, marketplace: true, influencer: true, fundraise: false, shark_tank: false, trademark: true },
        stage: 'Tracking', discoveryScore: 76, igFollowers: '145K', igGrowthRate: 16,
        strongestSignal: 'Marketplace Onboarding', detail: 'Jaipur-based sustainable kitchenware. Now on Nykaa + Amazon + Flipkart. 145K IG. Regional trend leader in Rajasthan.'
    },
    {
        id: 'kapiva', name: 'Kapiva', city: 'Bangalore', state: 'Karnataka', tier: 1,
        sector: 'health', sectorLabel: 'Health & Wellness', estRevenue: 'INR 200Cr/yr',
        signals: { mca: true, ig_growth: true, bsr: true, regional: false, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: false, trademark: false },
        stage: 'Verified', discoveryScore: 87, igFollowers: '380K', igGrowthRate: 11,
        strongestSignal: 'Amazon BSR', detail: 'Modern Ayurveda brand. Top-5 BSR in Ayurvedic Health. INR 200Cr revenue. Series C from Fireside Ventures. 12 new hires.'
    },
    {
        id: 'nestasia', name: 'Nestasia', city: 'Kolkata', state: 'West Bengal', tier: 2,
        sector: 'home', sectorLabel: 'Home & Living', estRevenue: 'INR 45Cr/yr',
        signals: { mca: true, ig_growth: true, bsr: true, regional: true, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: false, trademark: false },
        stage: 'Tracking', discoveryScore: 84, igFollowers: '280K', igGrowthRate: 15,
        strongestSignal: 'IG Follower Growth', detail: 'Kolkata-based premium home decor. 280K IG. Top-30 BSR in Home Decor. Trending in West Bengal + Odisha. Series A from Stellaris.'
    },
    {
        id: 'fixderma', name: 'Fixderma', city: 'Ahmedabad', state: 'Gujarat', tier: 2,
        sector: 'beauty', sectorLabel: 'Beauty & Personal Care', estRevenue: 'INR 60Cr/yr',
        signals: { mca: true, ig_growth: true, bsr: true, regional: true, hiring: true, marketplace: true, influencer: true, fundraise: false, shark_tank: false, trademark: false },
        stage: 'Tracking', discoveryScore: 81, igFollowers: '200K', igGrowthRate: 17,
        strongestSignal: 'Regional Trends', detail: 'Ahmedabad-based dermatologist-backed skincare. 200K IG. Top-20 BSR Sunscreen. Breakout in Gujarat + Maharashtra. 8 open roles.'
    },
    {
        id: 'curedose', name: 'CureDose', city: 'Lucknow', state: 'Uttar Pradesh', tier: 2,
        sector: 'health', sectorLabel: 'Health & Wellness', estRevenue: 'INR 3Cr/yr',
        signals: { mca: false, ig_growth: true, bsr: false, regional: true, hiring: false, marketplace: false, influencer: true, fundraise: false, shark_tank: false, trademark: true },
        stage: 'Detected', discoveryScore: 52, igFollowers: '22K', igGrowthRate: 35,
        strongestSignal: 'IG Follower Growth', detail: 'Lucknow-based Ayurvedic wellness brand. 22K IG growing at 35% MoM. Trending in UP + MP. Brand new — trademark filed Dec 2025.'
    },
    {
        id: 'truebasics', name: 'TrueBasics', city: 'Indore', state: 'Madhya Pradesh', tier: 2,
        sector: 'health', sectorLabel: 'Health & Wellness', estRevenue: 'INR 30Cr/yr',
        signals: { mca: true, ig_growth: true, bsr: true, regional: true, hiring: false, marketplace: true, influencer: false, fundraise: false, shark_tank: false, trademark: false },
        stage: 'Verified', discoveryScore: 72, igFollowers: '110K', igGrowthRate: 13,
        strongestSignal: 'Amazon BSR', detail: 'Indore-based nutraceuticals. Top-15 BSR in Multivitamins. Revenue doubled YoY. Strong in MP + Rajasthan before national.'
    },
    {
        id: 'terracasa', name: 'Terra Casa', city: 'Pondicherry', state: 'Tamil Nadu', tier: 3,
        sector: 'home', sectorLabel: 'Home & Living', estRevenue: 'INR 2Cr/yr',
        signals: { mca: false, ig_growth: true, bsr: false, regional: true, hiring: false, marketplace: false, influencer: true, fundraise: false, shark_tank: false, trademark: true },
        stage: 'Detected', discoveryScore: 48, igFollowers: '18K', igGrowthRate: 38,
        strongestSignal: 'Micro-Influencer Density', detail: 'Pondicherry artisan ceramic brand. 18K IG but 38% MoM growth. 15 creator collabs in 30 days. Trending in TN + Kerala.'
    },
];

// Signal feed events (recent detections across all 10 channels)
const SIGNAL_FEED = [
    { channel: 'mca', brand: 'Lahori Beverages', city: 'Ludhiana', date: '2026-02-18', detail: 'MCA filing shows INR 120Cr revenue (FY25), up from INR 30Cr (FY23). 4x growth in 2 years. Traditional Indian beverage category leader.', strength: 'strong' },
    { channel: 'ig_growth', brand: 'Terra Casa', city: 'Pondicherry', date: '2026-02-18', detail: 'IG followers jumped from 11K to 18K in 45 days (38% MoM). Handmade ceramics trending.', strength: 'moderate' },
    { channel: 'bsr', brand: 'Slurrp Farm', city: 'Gurugram', date: '2026-02-17', detail: 'Amazon BSR moved from #82 to #7 in Baby Foods category in 60 days.', strength: 'strong' },
    { channel: 'regional', brand: 'The Formula Rx', city: 'Chandigarh', date: '2026-02-17', detail: 'Google Trends index 62 in Punjab/Haryana but only 8 nationally. Regional breakout detected.', strength: 'strong' },
    { channel: 'shark_tank', brand: 'Brown Living', city: 'Mumbai', date: '2026-02-16', detail: 'Post S2 episode search interest at 72% of peak after 90 days. Sustained demand signal.', strength: 'moderate' },
    { channel: 'hiring', brand: 'Nestasia', city: 'Kolkata', date: '2026-02-16', detail: 'LinkedIn headcount grew from 28 to 65 in 5 months. 8 open roles including Head of D2C.', strength: 'strong' },
    { channel: 'trademark', brand: 'CureDose', city: 'Lucknow', date: '2026-02-15', detail: 'IP India trademark filed Dec 2025. Website live + 22K IG within 3 months. New entrant.', strength: 'moderate' },
    { channel: 'marketplace', brand: 'Ellementry', city: 'Jaipur', date: '2026-02-15', detail: 'Now listed on Nykaa Home, Amazon, and Flipkart. 3 marketplace onboardings in 2 months.', strength: 'strong' },
    { channel: 'influencer', brand: 'Aura Crafts', city: 'Jaipur', date: '2026-02-14', detail: '42 unique micro-influencer mentions in 30 days. Brand has only 72K followers. High creator density.', strength: 'strong' },
    { channel: 'fundraise', brand: 'Kapiva', city: 'Bangalore', date: '2026-02-14', detail: 'Series C closed at INR 250Cr from Fireside Ventures + Aavishkaar. Ayurveda category leader.', strength: 'strong' },
    { channel: 'ig_growth', brand: 'Happy Rationals', city: 'Kochi', date: '2026-02-13', detail: 'IG followers: 36K → 48K in 30 days (32% MoM). Adaptogen brand from Kerala gaining traction.', strength: 'strong' },
    { channel: 'mca', brand: 'Bewakoof', city: 'Mumbai', date: '2026-02-13', detail: 'FY25 revenue INR 350Cr, up from INR 220Cr. 59% YoY growth. Approaching profitability.', strength: 'strong' },
    { channel: 'bsr', brand: 'Fixderma', city: 'Ahmedabad', date: '2026-02-12', detail: 'Fixderma Shadow SPF 50+ moved to #3 in Sunscreen category. From #45 in 90 days.', strength: 'strong' },
    { channel: 'regional', brand: 'Let\'s Dress Up', city: 'Surat', date: '2026-02-12', detail: 'Google Trends index 55 in Gujarat, 42 in Rajasthan, but only 12 nationally. Pre-national breakout.', strength: 'strong' },
    { channel: 'hiring', brand: 'Bewakoof', city: 'Mumbai', date: '2026-02-11', detail: '15 open roles: Performance Marketing Lead, Warehouse Ops Manager, Senior Data Analyst. Scaling signal.', strength: 'moderate' },
    { channel: 'ig_growth', brand: 'CureDose', city: 'Lucknow', date: '2026-02-11', detail: 'IG: 0 → 22K in 3 months from scratch. Fastest early-stage growth in health category this quarter.', strength: 'moderate' },
    { channel: 'marketplace', brand: 'Fixderma', city: 'Ahmedabad', date: '2026-02-10', detail: 'Added to Purplle and 1mg within same month. Now on 4 marketplaces. Dermatologist-backed positioning.', strength: 'strong' },
    { channel: 'influencer', brand: 'The Formula Rx', city: 'Chandigarh', date: '2026-02-10', detail: '18 micro-influencer posts in 30 days. Brand at only 95K followers. Organic creator buzz building.', strength: 'moderate' },
    { channel: 'fundraise', brand: 'Nestasia', city: 'Kolkata', date: '2026-02-09', detail: 'Series A at INR 75Cr from Stellaris Venture Partners. Home decor D2C from Kolkata scaling nationally.', strength: 'strong' },
    { channel: 'shark_tank', brand: 'Slurrp Farm', city: 'Gurugram', date: '2026-02-09', detail: 'Shark Tank S1 alumni. Search interest still at 68% of peak episode after 2 years. Strong retention.', strength: 'moderate' },
    { channel: 'regional', brand: 'Aura Crafts', city: 'Jaipur', date: '2026-02-08', detail: 'Google Trends index 48 in Rajasthan, 35 in Gujarat, only 10 nationally. Tier 2 breakout.', strength: 'moderate' },
    { channel: 'trademark', brand: 'Terra Casa', city: 'Pondicherry', date: '2026-02-08', detail: 'Trademark filed Nov 2025. Website launched Dec 2025. IG account Jan 2026. Full brand build in 3 months.', strength: 'moderate' },
    { channel: 'mca', brand: 'Nestasia', city: 'Kolkata', date: '2026-02-07', detail: 'FY25 revenue INR 45Cr, up from INR 18Cr. 150% YoY growth. Home decor category outlier.', strength: 'strong' },
    { channel: 'bsr', brand: 'Kapiva', city: 'Bangalore', date: '2026-02-07', detail: 'Kapiva Dia Free Juice at #2 in Ayurvedic Health. From #35 in 45 days. Seasonal spike + organic demand.', strength: 'strong' },
    { channel: 'ig_growth', brand: 'Let\'s Dress Up', city: 'Surat', date: '2026-02-06', detail: 'IG: 148K → 180K in 30 days (22% MoM). Ethnic fusion from Surat gaining national traction.', strength: 'strong' },
];

// Regional hotspot data — cities with emerging brand signals
const REGIONAL_HOTSPOTS = [
    { city: 'Chandigarh', state: 'Punjab', tier: 2, brands: ['Theater.xyz', 'The Formula Rx'], signalCount: 8, topCategory: 'Fashion & Beauty' },
    { city: 'Jaipur', state: 'Rajasthan', tier: 2, brands: ['Aura Crafts', 'Ellementry'], signalCount: 12, topCategory: 'Home & Living' },
    { city: 'Ludhiana', state: 'Punjab', tier: 2, brands: ['Lahori Beverages'], signalCount: 8, topCategory: 'Food & Beverage' },
    { city: 'Surat', state: 'Gujarat', tier: 2, brands: ["Let's Dress Up"], signalCount: 6, topCategory: 'Fashion' },
    { city: 'Kolkata', state: 'West Bengal', tier: 2, brands: ['Nestasia'], signalCount: 9, topCategory: 'Home & Living' },
    { city: 'Kochi', state: 'Kerala', tier: 2, brands: ['Happy Rationals'], signalCount: 5, topCategory: 'Health & Wellness' },
    { city: 'Ahmedabad', state: 'Gujarat', tier: 2, brands: ['Fixderma'], signalCount: 7, topCategory: 'Beauty' },
    { city: 'Lucknow', state: 'Uttar Pradesh', tier: 2, brands: ['CureDose'], signalCount: 4, topCategory: 'Health' },
    { city: 'Indore', state: 'Madhya Pradesh', tier: 2, brands: ['TrueBasics'], signalCount: 5, topCategory: 'Health' },
    { city: 'Pondicherry', state: 'Tamil Nadu', tier: 3, brands: ['Terra Casa'], signalCount: 4, topCategory: 'Home & Living' },
    { city: 'Hyderabad', state: 'Telangana', tier: 1, brands: ["Sid's Farm"], signalCount: 6, topCategory: 'Food & Beverage' },
    { city: 'Bangalore', state: 'Karnataka', tier: 1, brands: ['Kapiva', 'Samosa Party'], signalCount: 11, topCategory: 'Health & Food' },
];

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
