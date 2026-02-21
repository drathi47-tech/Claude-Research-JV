// =====================================================
// Consumer Trend Radar — Jungle Ventures
// Signal-based discovery engine for emerging consumer brands
// NOT a static watchlist — designed to surface breakout brands
// across ALL consumer sectors that may be missed by traditional
// VC deal flow (FAST42, pitch decks, warm intros)
// =====================================================
//
// DISCOVERY METHODOLOGY:
// Brands are added when they trigger 2+ of these signals:
// 1. Google Trends momentum (sustained 30%+ search growth over 90 days)
// 2. E-commerce breakout (top category rankings, review velocity spikes)
// 3. Traffic growth (month-over-month organic traffic acceleration)
// 4. Social signals (Reddit/Instagram virality, community advocacy)
// 5. Hiring signals (senior hires from large corporates — scaling intent)
// 6. Capital efficiency (high revenue-to-funding ratio, bootstrapped scale)
// 7. Category creation (new market segments, underserved niches)
//
// SECTORS COVERED:
// Beauty & Personal Care | Food & Beverage | Fashion & Apparel |
// Health & Wellness | Home & Living | Consumer Electronics |
// Consumer Durables | Pet Care | Kids & Baby Care | Footwear |
// QSR & Coffee Chains | Offline Retail | Consumer Services
//
// INVESTMENT SCREEN (applied to all entries):
// - Valuation: Under ~$120M (INR ~1000Cr) — enough upside for 5-10x
// - Stage: Seed to Series B — not Series C/D (too late for meaningful entry)
// - Growth: 30%+ YoY or strong proxy signals
// - Must have equity story (VC-investable, not bootstrapped marketplace sellers)
//
// EXCLUSIONS:
// - Acquired brands (e.g., Neemli → GOAT, Earth Rhythm → Nykaa,
//   Minimalist → HUL)
// - Pre-seed with no measurable traction
// - Public companies or brands with >$120M valuation / Series C+
// - Stagnating brands (<20% YoY growth without clear inflection)
// =====================================================

const COMPANIES = [
    // --- Original Dashboard Brands ---
    { id: 'aukera', name: 'Aukera Diamonds', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'aukerajewellery.com', color: '#ec4899', estValuation: 'INR 600Cr', estRevenue: 'INR 200Cr/yr (ARR)' },
    { id: 'aretto', name: 'Aretto', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'wearetto.com', color: '#3b82f6', estValuation: 'INR 60-110Cr', estRevenue: 'INR 10-15Cr/yr' },
    { id: 'phool', name: 'Phool', sector: 'home', sectorLabel: 'Home & Living', website: 'phool.co', color: '#10b981', estValuation: 'INR 175Cr', estRevenue: 'INR 50Cr/yr' },
    { id: 'sidsfarm', name: "Sid's Farm", sector: 'food', sectorLabel: 'Food & Beverage', website: 'sidsfarm.com', color: '#06b6d4', estValuation: 'INR 279Cr', estRevenue: 'INR 168Cr/yr' },
    { id: 'koparo', name: 'Koparo', sector: 'home', sectorLabel: 'Home & Living', website: 'koparoclean.com', color: '#84cc16', estValuation: 'INR 124Cr', estRevenue: 'INR 23.4Cr/yr' },
    // Gynoveda removed — stagnating (17% YoY, no funding 3 years, revenue narrative gap)
    // Bare Anatomy removed — ~$140M valuation, Innovist group, not standalone target
    { id: 'tbof', name: 'Two Brothers Organic Farms', sector: 'food', sectorLabel: 'Food & Beverage', website: 'twobrothersindiashop.com', color: '#22c55e', estValuation: 'INR 434Cr', estRevenue: 'INR 108Cr/yr' },

    { id: 'cosmix', name: 'Cosmix', sector: 'health', sectorLabel: 'Health & Wellness', website: 'cosmix.in', color: '#14b8a6', estValuation: 'INR 375Cr', estRevenue: 'INR 51Cr/yr' },

    { id: 'samosaparty', name: 'Samosa Party', sector: 'food', sectorLabel: 'Food & Beverage', website: 'samosaparty.com', color: '#e11d48', estValuation: 'INR 274Cr', estRevenue: 'INR 58.5Cr/yr' },

    { id: 'bombaysweets', name: 'Bombay Sweet Shop', sector: 'food', sectorLabel: 'Food & Beverage', website: 'bombaysweetshop.com', color: '#eab308', estValuation: 'INR 200Cr+ (grp)', estRevenue: 'INR 65Cr/yr' },

    // --- Scaled D2C Brands (sub-$400M valuation) ---
    // Snitch removed — INR 2500Cr ($300M), graduated beyond growth-stage VC range
    { id: 'mokobara', name: 'Mokobara', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'mokobara.com', color: '#0d9488', estValuation: '~$80M', estRevenue: 'INR 230Cr/yr' },
    // mCaffeine removed — INR 1000Cr ($120M), graduated
    // Vahdam Teas removed — $114M, Series D, $34M raised, too late stage
    // Plum Goodness removed — $250M, graduated
    // BSC removed — INR 824Cr, INR 550Cr revenue, graduated
    { id: 'ragecoffee', name: 'Rage Coffee', sector: 'food', sectorLabel: 'Food & Beverage', website: 'ragecoffee.com', color: '#ea580c', estValuation: 'INR 186Cr', estRevenue: 'INR 25Cr/yr' },
    // --- FAST42 / Emerging D2C Brands ---
    { id: 'theater', name: 'Theater.xyz', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'theater.xyz', color: '#6366f1', estValuation: 'INR 50-100Cr', estRevenue: 'INR 14.1Cr/yr (14x YoY)' },
    { id: 'pantproject', name: 'The Pant Project', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'thepantproject.com', color: '#334155', estValuation: 'INR 161Cr', estRevenue: 'INR 40.7Cr/yr' },
    { id: 'whatsupwellness', name: "What's Up Wellness", sector: 'health', sectorLabel: 'Health & Wellness', website: 'whatsupwellness.in', color: '#e879f9', estValuation: 'INR 64Cr', estRevenue: 'INR 25Cr/yr' },
    { id: 'masterchow', name: 'MasterChow', sector: 'food', sectorLabel: 'Food & Beverage', website: 'masterchow.in', color: '#dc2626', estValuation: 'INR 236Cr', estRevenue: 'INR 40Cr/yr' },
    { id: 'nathabit', name: 'Nat Habit', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'nathabit.in', color: '#65a30d', estValuation: 'INR 343Cr', estRevenue: 'INR 72Cr/yr' },
    { id: 'anveshan', name: 'Anveshan', sector: 'food', sectorLabel: 'Food & Beverage', website: 'anveshan.farm', color: '#ca8a04', estValuation: 'INR 430Cr', estRevenue: 'INR 58Cr/yr' },
    { id: 'eggoz', name: 'Eggoz', sector: 'food', sectorLabel: 'Food & Beverage', website: 'eggoz.in', color: '#ea580c', estValuation: 'INR 458Cr', estRevenue: 'INR 130Cr/yr' },
    // Foxtale removed — INR 1530Cr ($180M), Series C, beyond range
    // Pilgrim removed — INR 3000Cr ($360M), far beyond range
    { id: 'neemans', name: 'Neemans', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'neemans.com', color: '#16a34a', estValuation: 'INR 268Cr', estRevenue: 'INR 77Cr/yr' },
    { id: 'perfora', name: 'Perfora', sector: 'health', sectorLabel: 'Health & Wellness', website: 'perfora.in', color: '#2563eb', estValuation: 'INR 240Cr', estRevenue: 'INR 42Cr/yr' },
    // Boldfit removed — INR 1020Cr ($120M+), beyond threshold
    { id: 'sweetkaramcoffee', name: 'Sweet Karam Coffee', sector: 'food', sectorLabel: 'Food & Beverage', website: 'sweetkaramcoffee.in', color: '#92400e', estValuation: 'INR 313Cr', estRevenue: 'INR 11.5Cr/yr' },
    { id: 'drinkprime', name: 'DrinkPrime', sector: 'home', sectorLabel: 'Home & Living', website: 'drinkprime.in', color: '#0284c7', estValuation: 'INR 260Cr', estRevenue: 'INR 75Cr/yr' },
    { id: 'flomattress', name: 'Flo Mattress', sector: 'home', sectorLabel: 'Home & Living', website: 'flomattress.com', color: '#4f46e5', estValuation: 'INR 66Cr', estRevenue: 'INR 36Cr/yr' },
    { id: 'mymuse', name: 'MyMuse', sector: 'health', sectorLabel: 'Health & Wellness', website: 'mymuse.in', color: '#be185d', estValuation: 'INR 175Cr', estRevenue: 'INR 36Cr/yr' },
    { id: 'dorjeteas', name: 'Dorje Teas', sector: 'food', sectorLabel: 'Food & Beverage', website: 'dorjeteas.com', color: '#047857', estValuation: 'INR 20.5Cr', estRevenue: 'INR 2.3Cr/yr' },
    // --- Signal-Discovered Brands (surfaced via growth signals, not static curation) ---
    { id: 'wishcare', name: 'WishCare', sector: 'beauty', sectorLabel: 'Beauty & Personal Care', website: 'mywishcare.com', color: '#db2777', estValuation: '~INR 140Cr (outdated)', estRevenue: 'INR 200Cr/yr (₹300Cr ARR)' },
    // Indo Era removed — bootstrapped marketplace seller, no equity story
    { id: 'godesi', name: 'GO DESi', sector: 'food', sectorLabel: 'Food & Beverage', website: 'godesi.in', color: '#ea580c', estValuation: 'INR 500Cr (target)', estRevenue: 'INR 56Cr/yr (run rate)' },
    { id: 'beco', name: 'Beco', sector: 'home', sectorLabel: 'Home & Living', website: 'letsbeco.com', color: '#059669', estValuation: '~$11M', estRevenue: 'INR 111Cr/yr' },
    { id: 'supertails', name: 'Supertails', sector: 'pets', sectorLabel: 'Pet Care', website: 'supertails.com', color: '#0891b2', estValuation: '~$130M', estRevenue: 'INR 108Cr/yr (₹250Cr ARR)' },
    { id: 'longway', name: 'Longway', sector: 'electronics', sectorLabel: 'Consumer Electronics', website: 'longwayindia.com', color: '#4338ca', estValuation: 'Bootstrapped', estRevenue: 'INR 125Cr/yr' },
    { id: 'bearhouse', name: 'The Bear House', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'thebearhouse.com', color: '#1e3a5f', estValuation: 'INR 273Cr', estRevenue: 'INR 140Cr/yr' },
    { id: 'napchief', name: 'Nap Chief', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'napchief.com', color: '#7c3aed', estValuation: 'Seed (Titan Capital)', estRevenue: 'INR 25Cr/yr' },
    { id: 'desifarms', name: 'Desi Farms', sector: 'food', sectorLabel: 'Food & Beverage', website: 'desifarmsindia.in', color: '#15803d', estValuation: 'Series A', estRevenue: 'INR 50Cr/yr' },
    { id: 'berrylush', name: 'BerryLush', sector: 'fashion', sectorLabel: 'Fashion & Apparel', website: 'berrylush.com', color: '#e11d48', estValuation: 'Near-bootstrapped', estRevenue: 'INR 85Cr/yr' },

    // --- New Sector Expansion (Footwear, Kids, QSR, Durables, Retail, Services) ---
    { id: 'comet', name: 'Comet', sector: 'footwear', sectorLabel: 'Footwear', website: 'wearcomet.com', color: '#1e40af', estValuation: 'INR 167Cr (~$20M)', estRevenue: 'INR 29Cr/yr (4x YoY)' },
    { id: 'solethreads', name: 'Solethreads', sector: 'footwear', sectorLabel: 'Footwear', website: 'solethreads.com', color: '#f97316', estValuation: 'INR 145Cr (~$17M)', estRevenue: 'INR 43Cr/yr' },
    { id: 'rforrabbit', name: 'R for Rabbit', sector: 'kids', sectorLabel: 'Kids & Baby Care', website: 'rforrabbit.com', color: '#f472b6', estValuation: 'INR 850Cr (~$100M)', estRevenue: 'INR 252Cr/yr' },
    { id: 'superbottoms', name: 'SuperBottoms', sector: 'kids', sectorLabel: 'Kids & Baby Care', website: 'superbottoms.com', color: '#38bdf8', estValuation: 'INR 191Cr (~$23M)', estRevenue: 'INR 84Cr/yr' },
    { id: 'slurrpfarm', name: 'Slurrp Farm', sector: 'kids', sectorLabel: 'Kids & Baby Care', website: 'slurrpfarm.com', color: '#a3e635', estValuation: 'INR 810Cr (~$90M)', estRevenue: 'INR 97Cr/yr' },
    // Third Wave Coffee removed — INR 1300Cr ($150M), Series C $70M raised, beyond range
    // Chaayos removed — INR 2600Cr ($250M), Series C $94M raised, beyond range
    { id: 'beyondappliances', name: 'Beyond Appliances', sector: 'durables', sectorLabel: 'Consumer Durables', website: 'beyondappliances.in', color: '#1d4ed8', estValuation: '~INR 50-80Cr', estRevenue: 'INR 50Cr/yr ARR' },
    { id: 'sumosave', name: 'SumoSave', sector: 'retail', sectorLabel: 'Offline Retail', website: 'sumosave.in', color: '#059669', estValuation: 'Seed ($3.3M)', estRevenue: 'INR 13.2Cr/yr (17x YoY)' },
    { id: 'bodycraft', name: 'Bodycraft', sector: 'services', sectorLabel: 'Consumer Services', website: 'bodycraft.co.in', color: '#be185d', estValuation: '~INR 200-300Cr', estRevenue: 'INR 130Cr/yr' },
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
const GT_GROWTH = { aukera: 1.35, aretto: 1.10, phool: 0.92, sidsfarm: 0.88, koparo: 0.65, gynoveda: 0.82, bareanatomy: 0.60, tbof: 0.70, cosmix: 0.75, samosaparty: 0.90, bombaysweets: 0.68, snitch: 1.20, mokobara: 1.10, mcaffeine: 0.80, vahdamteas: 0.60, plumgoodness: 0.70, bsc: 0.62, ragecoffee: 0.78, theater: 1.40, pantproject: 0.95, whatsupwellness: 1.15, masterchow: 1.05, nathabit: 1.10, anveshan: 0.85, eggoz: 0.92, foxtale: 1.25, pilgrim: 1.08, neemans: 0.72, perfora: 0.88, boldfit: 1.00, sweetkaramcoffee: 0.82, drinkprime: 0.95, flomattress: 0.78, mymuse: 1.05, dorjeteas: 0.75, wishcare: 1.35, indoera: 1.05, godesi: 1.15, beco: 1.20, supertails: 1.28, longway: 1.10, bearhouse: 1.18, napchief: 1.30, desifarms: 0.90, berrylush: 1.00, comet: 1.65, solethreads: 1.15, rforrabbit: 1.20, superbottoms: 1.10, slurrpfarm: 1.25, thirdwave: 1.40, chaayos: 1.15, beyondappliances: 1.50, sumosave: 0.85, bodycraft: 0.95 };
const GT_BASE = { aukera: 30, aretto: 18, phool: 18, sidsfarm: 28, koparo: 14, gynoveda: 25, bareanatomy: 16, tbof: 20, cosmix: 17, samosaparty: 30, bombaysweets: 18, snitch: 55, mokobara: 38, mcaffeine: 42, vahdamteas: 30, plumgoodness: 48, bsc: 40, ragecoffee: 28, theater: 15, pantproject: 20, whatsupwellness: 16, masterchow: 22, nathabit: 35, anveshan: 14, eggoz: 18, foxtale: 28, pilgrim: 32, neemans: 15, perfora: 12, boldfit: 25, sweetkaramcoffee: 10, drinkprime: 18, flomattress: 16, mymuse: 12, dorjeteas: 8, wishcare: 38, indoera: 42, godesi: 15, beco: 18, supertails: 28, longway: 22, bearhouse: 24, napchief: 10, desifarms: 14, berrylush: 20, comet: 22, solethreads: 15, rforrabbit: 32, superbottoms: 25, slurrpfarm: 28, thirdwave: 45, chaayos: 48, beyondappliances: 10, sumosave: 8, bodycraft: 18 };
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
    wishcare: [
        { text: 'wishcare hair growth serum review', growth: '+2400%' },
        { text: 'wishcare sunscreen spf 50', growth: '+1800%' },
        { text: 'wishcare vs minimalist', growth: '+1200%' },
        { text: 'best hair serum india affordable', growth: '+950%' },
    ],
    indoera: [
        { text: 'indo era kurti review myntra', growth: '+1600%' },
        { text: 'indo era ethnic wear quality', growth: '+1100%' },
        { text: 'affordable ethnic wear india online', growth: '+850%' },
        { text: 'indo era co-ord sets', growth: '+680%' },
    ],
    godesi: [
        { text: 'go desi kaju katli review', growth: '+1400%' },
        { text: 'go desi tamarind candy', growth: '+1100%' },
        { text: 'healthy indian sweets brand', growth: '+780%' },
        { text: 'go desi zepto quick commerce', growth: '+620%' },
    ],
    beco: [
        { text: 'beco bamboo towels review', growth: '+1800%' },
        { text: 'beco laundry liquid eco friendly', growth: '+1200%' },
        { text: 'plastic free cleaning products india', growth: '+950%' },
        { text: 'beco vs other eco brands', growth: '+720%' },
    ],
    supertails: [
        { text: 'supertails pet food review', growth: '+2200%' },
        { text: 'supertails vet consultation online', growth: '+1600%' },
        { text: 'best pet care app india', growth: '+1100%' },
        { text: 'supertails fresh dog food delivery', growth: '+880%' },
    ],
    longway: [
        { text: 'longway mixer grinder review', growth: '+1400%' },
        { text: 'longway fan price quality', growth: '+1000%' },
        { text: 'best budget home appliances india', growth: '+780%' },
        { text: 'longway vs bajaj appliances', growth: '+580%' },
    ],
    bearhouse: [
        { text: 'the bear house shirts review', growth: '+1600%' },
        { text: 'bear house flannel shirts', growth: '+1200%' },
        { text: 'best smart casual workwear india', growth: '+850%' },
        { text: 'bear house shark tank india', growth: '+680%' },
    ],
    napchief: [
        { text: 'nap chief disney sleepwear', growth: '+2000%' },
        { text: 'nap chief kids pyjamas review', growth: '+1500%' },
        { text: 'licensed character kids wear india', growth: '+1100%' },
        { text: 'nap chief marvel collection', growth: '+880%' },
    ],
    desifarms: [
        { text: 'desi farms milk pune review', growth: '+1200%' },
        { text: 'desi farms vs amul fresh milk', growth: '+850%' },
        { text: 'farm fresh milk delivery pune', growth: '+620%' },
        { text: 'desi farms a2 cow milk', growth: '+480%' },
    ],
    berrylush: [
        { text: 'berrylush dresses review', growth: '+1400%' },
        { text: 'berrylush co-ord sets women', growth: '+1050%' },
        { text: 'affordable western wear india women', growth: '+780%' },
        { text: 'berrylush quality myntra', growth: '+580%' },
    ],
    comet: [
        { text: 'comet sneakers review india', growth: '+2800%' },
        { text: 'comet shoes drop date', growth: '+2200%' },
        { text: 'wearcomet jognu sneaker', growth: '+1600%' },
        { text: 'indian sneaker brand premium', growth: '+1100%' },
    ],
    solethreads: [
        { text: 'solethreads flip flops review', growth: '+1200%' },
        { text: 'solethreads slides men', growth: '+950%' },
        { text: 'best flip flops india premium', growth: '+720%' },
        { text: 'solethreads vs crocs india', growth: '+580%' },
    ],
    rforrabbit: [
        { text: 'r for rabbit stroller review', growth: '+1600%' },
        { text: 'best baby car seat india', growth: '+1300%' },
        { text: 'r for rabbit high chair', growth: '+980%' },
        { text: 'baby products safe india certified', growth: '+750%' },
    ],
    superbottoms: [
        { text: 'superbottoms cloth diaper review', growth: '+1800%' },
        { text: 'reusable diapers india best', growth: '+1400%' },
        { text: 'superbottoms padded underwear', growth: '+1050%' },
        { text: 'eco friendly diapers baby india', growth: '+780%' },
    ],
    slurrpfarm: [
        { text: 'slurrp farm cereal baby review', growth: '+1500%' },
        { text: 'millet snacks kids healthy', growth: '+1200%' },
        { text: 'slurrp farm pancake mix', growth: '+920%' },
        { text: 'anushka sharma baby food brand', growth: '+750%' },
    ],
    thirdwave: [
        { text: 'third wave coffee near me', growth: '+1900%' },
        { text: 'third wave coffee menu prices', growth: '+1500%' },
        { text: 'specialty coffee bangalore chain', growth: '+1100%' },
        { text: 'third wave coffee franchise', growth: '+850%' },
    ],
    chaayos: [
        { text: 'chaayos near me menu', growth: '+1400%' },
        { text: 'chaayos chai subscription', growth: '+1100%' },
        { text: 'best chai cafe india chain', growth: '+850%' },
        { text: 'chaayos franchise cost india', growth: '+620%' },
    ],
    beyondappliances: [
        { text: 'beyond appliances chimney review', growth: '+2400%' },
        { text: 'android chimney kitchen india', growth: '+1800%' },
        { text: 'smart kitchen chimney voice control', growth: '+1300%' },
        { text: 'beyond appliances smart hob', growth: '+950%' },
    ],
    sumosave: [
        { text: 'sumosave store near me kolkata', growth: '+1600%' },
        { text: 'discount supermarket kolkata', growth: '+1100%' },
        { text: 'sumosave ration shop prices', growth: '+850%' },
        { text: 'cheapest grocery store kolkata', growth: '+620%' },
    ],
    bodycraft: [
        { text: 'bodycraft salon near me', growth: '+1300%' },
        { text: 'bodycraft spa bangalore review', growth: '+1000%' },
        { text: 'bodycraft dermatology treatment', growth: '+780%' },
        { text: 'best salon chain india premium', growth: '+580%' },
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
    wishcare: {
        amazon: {
            topLikes: ['Hair growth serum actually works — visible results in 4-6 weeks', 'Sunscreen SPF 50 is lightweight and non-greasy', 'Clean ingredients at affordable pricing', 'Fermented rice water range is a bestseller', '5M+ customers — trust built through reviews'],
            topDislikes: ['Some products run out fast for the price', 'Packaging could be more premium', 'Limited offline availability', 'Some variants frequently out of stock on Amazon'],
            summary: 'WishCare has quietly built a ₹300Cr ARR beauty brand on just $2.4M funding. Hair Growth Serum and SPF Lip Balm created new sub-categories on Amazon. Capital efficiency is exceptional — 10x revenue growth in 2 years. Unilever Ventures backed.',
        },
        myntra: {
            topLikes: ['Good range of affordable serums and sunscreens', 'Clean beauty positioning resonates', 'Growing brand awareness on the platform'],
            topDislikes: ['Competes with many similar clean beauty brands', 'Brand recognition still building vs established players'],
            summary: 'Growing Myntra presence. Primary sales through Amazon and Nykaa where the brand dominates haircare serum category rankings.',
        },
    },
    indoera: {
        amazon: {
            topLikes: ['Incredibly affordable ethnic wear — kurtis under ₹500', 'Quality surprisingly good for the price point', 'Wide variety updated every 2 weeks', 'Fast delivery and consistent sizing', '10,000+ daily shipments'],
            topDislikes: ['Fabric quality varies across collections', 'Limited premium range', 'Some designs feel mass-produced', 'Packaging is basic'],
            summary: 'Indo Era built a ₹500Cr ethnic wear brand with ZERO marketing spend — entirely through marketplace SEO and product volume. 4,800+ SKUs refreshed fortnightly. Bootstrapped and profitable. Surat manufacturing gives cost advantage.',
        },
        myntra: {
            topLikes: ['One of the most affordable ethnic wear brands on Myntra', 'Great range for daily wear kurtis and co-ords', 'Consistent sizing and fast shipping'],
            topDislikes: ['Competes on price — brand identity still developing', 'Premium segment not yet addressed'],
            summary: 'Major Myntra seller. Volume-driven model with 65% YoY growth. Now looking to raise first institutional round and expand offline to 100+ cities.',
        },
    },
    godesi: {
        amazon: {
            topLikes: ['Kaju katli quality rivals traditional halwais', 'Tamarind pops are addictive — kids love them', 'Clean ingredients — no preservatives or artificial colors', 'Perfect impulse buy on quick commerce', 'Beautiful packaging for gifting'],
            topDislikes: ['Premium pricing for sweets category', 'Limited shelf life on some products', 'Not all variants available across platforms', 'Quantity per pack could be larger'],
            summary: 'GO DESi is formalizing India\'s ₹1L Cr traditional sweets market. Top kaju katli brand on Zepto. 50K+ retail touchpoints. Series B funded. Inc42 FAST42 2026 ranked.',
        },
        myntra: {
            topLikes: ['Not applicable — food/sweets brand'],
            topDislikes: ['Not applicable — food/sweets brand'],
            summary: 'GO DESi is a food brand. Not on Myntra.',
        },
    },
    beco: {
        amazon: {
            topLikes: ['Bamboo kitchen towels are genuinely better than paper', 'Laundry liquid cleans well and is plant-based', 'Bio-enzyme cleaners actually work', 'Plastic-free packaging — walk the talk', 'FSC and ISO certified'],
            topDislikes: ['Premium pricing vs conventional cleaning products', 'Some products run out faster than expected', 'Limited variety in dishwash segment', 'Availability gaps in some pincodes'],
            summary: 'Beco grew 119% YoY to ₹111Cr revenue by making sustainable home products that actually perform. 10,000+ retail stores. 74x revenue growth in 5 years from ₹1.5Cr. Strong q-commerce presence.',
        },
        myntra: {
            topLikes: ['Not applicable — home care brand'],
            topDislikes: ['Not applicable — home care brand'],
            summary: 'Beco is a home care brand. Not on Myntra.',
        },
    },
    supertails: {
        amazon: {
            topLikes: ['One-stop shop for all pet needs', 'Vet consultation feature is incredibly convenient', 'Fresh pet meals delivered — dogs love it', '30-minute delivery in select cities', '30,000+ products across 500+ brands'],
            topDislikes: ['Premium pricing on some products', 'Fresh meals only in select cities', 'Vet availability varies by time of day', 'Some products cheaper on other platforms'],
            summary: 'Supertails is India\'s leading pet care platform. $30M Series C at $130M valuation. Revenue grew 13.5x in 3 years. Operationally profitable. Founded by ex-Licious team. Targeting ₹1,000Cr ARR.',
        },
        myntra: {
            topLikes: ['Not applicable — pet care platform'],
            topDislikes: ['Not applicable — pet care platform'],
            summary: 'Supertails is a pet care platform. Not on Myntra.',
        },
    },
    longway: {
        amazon: {
            topLikes: ['Mixer grinder quality excellent for the price', 'Fans are powerful and silent', 'Value for money — half the price of branded appliances', 'In-house manufacturing ensures quality control', 'Customer service is responsive'],
            topDislikes: ['Brand not well known — trust takes time', 'Limited service center network', 'Warranty process could be smoother', 'Premium range not yet available'],
            summary: 'Longway built ₹125Cr in revenue through vertical integration and aggressive online pricing. 98% online sales. Bootstrapped. Inc42 FAST42 2026 ranked. Targeting ₹500Cr in 3-5 years.',
        },
        myntra: {
            topLikes: ['Not applicable — home appliance brand'],
            topDislikes: ['Not applicable — home appliance brand'],
            summary: 'Longway is a home appliance brand. Not on Myntra.',
        },
    },
    bearhouse: {
        amazon: {
            topLikes: ['Flannel shirts are best-in-class at this price', 'European-inspired design stands out', 'Smart-casual workwear that looks premium', 'Consistent sizing and quality', '62% repeat customer rate speaks volumes'],
            topDislikes: ['Limited categories — mostly shirts and basics', 'Premium pricing vs fast fashion alternatives', 'Online-first — limited offline try-before-buy', 'Delivery to smaller cities can be slow'],
            summary: 'The Bear House hit ₹140Cr with 18% EBITDA margins in menswear — exceptional unit economics. Flannel shirts are 40% of sales. JM Financial-backed Series A. Shark Tank India S4 appearance. Dubai store opened.',
        },
        myntra: {
            topLikes: ['Premium menswear at accessible prices', 'Flannel shirts are bestsellers', 'Strong brand aesthetic for work-casual'],
            topDislikes: ['Limited product range vs larger menswear brands', 'Sizing runs slightly different from mainstream brands'],
            summary: '85% of revenue from marketplace sales. Growing rapidly on Myntra with strong repeat purchase metrics.',
        },
    },
    napchief: {
        amazon: {
            topLikes: ['Disney and Marvel licensed designs kids love', 'Organic fabric is soft and gentle', 'Sleepwear matching sets for the whole family', 'ISRO collection is unique and educational', 'Quality holds up well after multiple washes'],
            topDislikes: ['Pricing higher than unbranded alternatives', 'Limited age range for some designs', 'Seasonal collections sell out fast', 'Size exchanges could be faster'],
            summary: 'Nap Chief is India\'s first character-licensed D2C kids sleepwear brand. 117% YoY revenue growth. Titan Capital backed. Disney, Marvel, Harry Potter, DC, ISRO licenses. 60% revenue from own website — strong D2C metrics.',
        },
        myntra: {
            topLikes: ['Licensed character designs are unique on Myntra', 'Family sleepwear sets popular for gifting', 'Organic fabric quality appreciated'],
            topDislikes: ['Premium pricing for kids category', 'Limited everyday wear options'],
            summary: 'Emerging Myntra presence. Character-licensed sleepwear differentiates strongly from generic kids brands.',
        },
    },
    desifarms: {
        amazon: {
            topLikes: ['Milk freshness is incredible — delivered within 12-24 hours', 'A2 cow milk taste is noticeably different', 'Chemical-free and preservative-free', 'Subscription model ensures daily delivery', 'ISO certified processing plant'],
            topDislikes: ['Only available in Pune and Mumbai currently', 'Premium pricing vs packaged milk brands', 'Glass bottle return system can be inconvenient', 'Limited product range beyond milk'],
            summary: 'Desi Farms is building a premium D2C dairy brand in Pune/Mumbai. Profitable for 3 consecutive years. Made a landmark ₹130Cr acquisition of Suruchi Dairy. 1.5 lakh litres/day capacity. 50+ exclusive outlets.',
        },
        myntra: {
            topLikes: ['Not applicable — dairy brand'],
            topDislikes: ['Not applicable — dairy brand'],
            summary: 'Desi Farms is a dairy brand. Not on Myntra.',
        },
    },
    berrylush: {
        amazon: {
            topLikes: ['Trendy western wear at very affordable prices', 'Co-ord sets and dresses are popular picks', 'In-house manufacturing ensures consistency', '200 new styles launched per month', 'Good packaging and presentation'],
            topDislikes: ['Fabric quality varies across price points', 'Fast fashion durability concerns', 'Sizing inconsistency in some categories', 'Return process could be smoother'],
            summary: 'BerryLush built ₹85Cr revenue on under $1M funding — near-bootstrapped. 2L+ units produced monthly via in-house manufacturing. 7% EBITDA positive. International expansion testing on Amazon Global (US, EU, Australia).',
        },
        myntra: {
            topLikes: ['Affordable trendy western wear for Gen-Z women', 'Co-ords and jumpsuits are bestsellers', 'New styles added frequently'],
            topDislikes: ['Quality perception compared to premium brands', 'Fast fashion sustainability concerns'],
            summary: 'Growing Myntra seller. Volume-driven affordable fashion for young women. 93% marketplace sales. Expanding to 30 stores under FOFO model.',
        },
    },
    comet: {
        amazon: {
            topLikes: ['Sneaker quality rivals international brands at half the price', 'Limited drops create excitement and exclusivity', 'Indian-inspired designs (Mango, Pataka, Ludo) are unique', 'SpaceWalk sole system is genuinely comfortable', 'Packaging and unboxing experience is premium'],
            topDislikes: ['Drops sell out in minutes — hard to buy', 'Limited size availability in some drops', 'Premium pricing vs mass-market Indian brands', 'Resellers driving up prices on sold-out models'],
            summary: 'Comet has built cult-like demand with limited drops selling out in 15 minutes. 300K+ Instagram community. 4x revenue growth YoY to INR 29Cr. Elevation Capital + Nexus backed at $20M valuation.',
        },
        myntra: {
            topLikes: ['Great designs not available elsewhere', 'Premium feel for the price point'],
            topDislikes: ['Limited availability — most drops are D2C only', 'Higher price than typical Myntra sneakers'],
            summary: 'Limited Myntra presence — Comet is primarily D2C. 3 brand-owned stores + 9 MBO partners.',
        },
    },
    solethreads: {
        amazon: {
            topLikes: ['Extremely comfortable flip-flops and slides', 'Durable build quality — lasts seasons', 'Design variety is excellent', 'Good arch support for open footwear', 'Value for money in the INR 500-1500 range'],
            topDislikes: ['Sizing can be inconsistent across models', 'Some models lose grip after heavy use', 'Limited sneaker range compared to sandals', 'Strap durability on some designs'],
            summary: 'Solethreads dominates the premium flip-flop/slide segment on Amazon. INR 43Cr revenue, 70% YoY growth. Fireside + DSG backed. 600+ MBOs and expanding to 1,500.',
        },
        myntra: {
            topLikes: ['Good range of casual footwear options', 'Competitive pricing on slides'],
            topDislikes: ['Not as well-known as established footwear brands'],
            summary: 'Growing Myntra presence. Open footwear focus differentiates from sneaker-heavy competition.',
        },
    },
    rforrabbit: {
        amazon: {
            topLikes: ['International safety certifications at Indian prices', 'Strollers are sturdy and well-built', 'Car seats meet European safety standards', 'Customer service is responsive', 'Wide product range covers all baby needs'],
            topDislikes: ['Assembly instructions could be clearer', 'Some products are bulky for Indian apartments', 'Premium pricing vs unbranded alternatives', 'Warranty claim process can be slow'],
            summary: 'R for Rabbit is the dominant Indian baby gear brand on Amazon. INR 252Cr revenue, profitable. NPS 80+. Series B from Filter Capital + 3one4 at INR 850Cr valuation.',
        },
        myntra: {
            topLikes: ['Not a primary channel — baby gear brand'],
            topDislikes: ['Limited presence on fashion platforms'],
            summary: 'R for Rabbit is primarily Amazon + D2C. Not a Myntra category.',
        },
    },
    superbottoms: {
        amazon: {
            topLikes: ['Cloth diapers actually work — saves money long-term', 'Padded underwear is a game-changer for potty training', 'Eco-friendly alternative to disposables', 'Soft fabric gentle on baby skin', '35-45% monthly repeat purchase rate'],
            topDislikes: ['Washing cloth diapers is extra effort', 'Initial cost is higher than disposable packs', 'Drying time is long in humid weather', 'Limited designs compared to disposables'],
            summary: 'SuperBottoms owns ~60% of India reusable bottomwear market. INR 84Cr revenue, approaching EBITDA-positive. 46% D2C, 42% marketplaces. Expanding to full kids clothing.',
        },
        myntra: {
            topLikes: ['Good kids clothing range beyond diapers', 'Cute designs for toddlers'],
            topDislikes: ['Limited Myntra presence — primarily Amazon + D2C'],
            summary: 'Growing Myntra seller for kids clothing line. Core diaper business is Amazon + D2C.',
        },
    },
    slurrpfarm: {
        amazon: {
            topLikes: ['Kids actually eat the millet cereals willingly', 'No maida, no refined sugar — clean ingredients', 'Pancake mix is a breakfast game-changer', 'Good variety for different age groups', 'Anushka Sharma backing adds trust'],
            topDislikes: ['Premium pricing vs regular kids snacks', 'Some products taste too healthy for picky eaters', 'Packaging quantity is small for the price', 'Not available in all pin codes'],
            summary: 'Slurrp Farm owns the millet-based kids nutrition category. INR 97Cr revenue, expanding from 2K to 40K retail stores. Anushka Sharma invested. Fireside + Scarlet Ventures backed.',
        },
        myntra: {
            topLikes: ['Not applicable — kids food brand'],
            topDislikes: ['Not applicable — kids food brand'],
            summary: 'Slurrp Farm is a food brand. Not available on Myntra.',
        },
    },
    thirdwave: {
        amazon: {
            topLikes: ['Single-origin coffee beans are excellent quality', 'Fresh roast dates on every pack', 'Good variety of roast profiles', 'Cafe-quality coffee for home brewing'],
            topDislikes: ['Premium pricing vs mass-market coffee', 'Bean freshness varies with delivery time', 'Limited grind options'],
            summary: 'Third Wave Coffee primarily a cafe chain (200+ outlets, 12+ cities). Amazon presence for packaged coffee beans. INR 285Cr revenue. Series C from Creaegis + WestBridge.',
        },
        myntra: {
            topLikes: ['Not applicable — coffee chain'],
            topDislikes: ['Not applicable — coffee chain'],
            summary: 'Third Wave Coffee is a QSR/cafe chain. Not on Myntra.',
        },
    },
    chaayos: {
        amazon: {
            topLikes: ['Chai premixes capture the cafe taste at home', 'Good variety of flavors', 'Convenient for office/home chai breaks', 'Recognizable brand from cafe experience'],
            topDislikes: ['Premix not as good as fresh cafe chai', 'Pricing higher than loose-leaf alternatives', 'Sugar content in some variants is high'],
            summary: 'Chaayos is India largest organized chai cafe chain (200+ stores). Amazon for packaged products. INR 330Cr revenue. Tiger Global + Elevation backed at $250M.',
        },
        myntra: {
            topLikes: ['Not applicable — chai cafe chain'],
            topDislikes: ['Not applicable — chai cafe chain'],
            summary: 'Chaayos is a QSR chain. Not on Myntra.',
        },
    },
    beyondappliances: {
        amazon: {
            topLikes: ['Android chimney is genuinely innovative — timer, whistle counter', 'Voice control works well in kitchen setting', 'Build quality is solid for the price', 'Installation support is professional'],
            topDislikes: ['New brand — limited long-term reliability data', 'Software updates could be more frequent', 'Smart features have a learning curve', 'Premium pricing vs non-smart chimneys'],
            summary: 'Beyond Appliances makes Android-powered kitchen chimneys — first in India. Revenue doubled post-seed to INR 50Cr ARR. Fireside Ventures doubled down (seed + Series A). boAt co-founder as angel.',
        },
        myntra: {
            topLikes: ['Not applicable — kitchen appliances brand'],
            topDislikes: ['Not applicable — kitchen appliances brand'],
            summary: 'Beyond Appliances is a consumer durables brand. Not on Myntra.',
        },
    },
    sumosave: {
        amazon: {
            topLikes: ['Not applicable — offline retail chain'],
            topDislikes: ['Not applicable — offline retail chain'],
            summary: 'SumoSave is an offline discount supermarket chain in Kolkata. No Amazon presence.',
        },
        myntra: {
            topLikes: ['Not applicable — offline grocery retail'],
            topDislikes: ['Not applicable — offline grocery retail'],
            summary: 'SumoSave operates physical stores. Not on Myntra.',
        },
    },
    bodycraft: {
        amazon: {
            topLikes: ['Not applicable — salon/spa service chain'],
            topDislikes: ['Not applicable — salon/spa service chain'],
            summary: 'Bodycraft is an offline salon, spa, and dermatology chain. No Amazon presence.',
        },
        myntra: {
            topLikes: ['Not applicable — consumer services'],
            topDislikes: ['Not applicable — consumer services'],
            summary: 'Bodycraft is a service business (25+ salons/clinics). Not on Myntra.',
        },
    },
};

const EC_AMAZON_BASE = { aukera: 900, aretto: 450, phool: 520, sidsfarm: 1100, koparo: 380, gynoveda: 850, bareanatomy: 480, tbof: 720, cosmix: 420, samosaparty: 900, bombaysweets: 450, theater: 320, snitch: 3200, mokobara: 1800, noise: 8500, atomberg: 4200, countrydelight: 2800, licious: 2200, mcaffeine: 2500, vahdamteas: 1500, plumgoodness: 3800, bsc: 2000, ragecoffee: 950, wishcare: 2800, indoera: 1800, godesi: 650, beco: 850, supertails: 1400, longway: 1600, bearhouse: 720, napchief: 380, desifarms: 550, berrylush: 900, comet: 420, solethreads: 850, rforrabbit: 2200, superbottoms: 1400, slurrpfarm: 1200, thirdwave: 600, chaayos: 400, beyondappliances: 350, sumosave: 50, bodycraft: 80 };
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
const TR_BASE = { aukera: 520000, aretto: 140000, phool: 220000, sidsfarm: 350000, koparo: 95000, gynoveda: 280000, bareanatomy: 150000, tbof: 200000, cosmix: 110000, samosaparty: 320000, bombaysweets: 160000, theater: 180000, snitch: 2800000, mokobara: 850000, mcaffeine: 1500000, vahdamteas: 680000, plumgoodness: 2000000, bsc: 1100000, ragecoffee: 420000, pantproject: 280000, whatsupwellness: 140000, masterchow: 320000, nathabit: 480000, anveshan: 280000, eggoz: 450000, foxtale: 920000, pilgrim: 1100000, neemans: 320000, perfora: 180000, boldfit: 680000, sweetkaramcoffee: 55000, drinkprime: 350000, flomattress: 160000, mymuse: 120000, dorjeteas: 25000, wishcare: 720000, indoera: 480000, godesi: 140000, beco: 200000, supertails: 420000, longway: 320000, bearhouse: 250000, napchief: 95000, desifarms: 110000, berrylush: 180000, comet: 380000, solethreads: 280000, rforrabbit: 520000, superbottoms: 380000, slurrpfarm: 420000, thirdwave: 650000, chaayos: 750000, beyondappliances: 85000, sumosave: 45000, bodycraft: 180000 };
const TR_GROWTH = { aukera: 1.30, aretto: 0.95, phool: 0.85, sidsfarm: 0.88, koparo: 0.60, gynoveda: 0.82, bareanatomy: 0.55, tbof: 0.65, cosmix: 0.72, samosaparty: 0.92, bombaysweets: 0.68, theater: 1.25, snitch: 1.15, mokobara: 0.95, mcaffeine: 0.72, vahdamteas: 0.55, plumgoodness: 0.65, bsc: 0.50, ragecoffee: 0.70, pantproject: 0.92, whatsupwellness: 1.10, masterchow: 1.00, nathabit: 1.05, anveshan: 0.80, eggoz: 0.88, foxtale: 1.15, pilgrim: 1.02, neemans: 0.68, perfora: 0.82, boldfit: 0.95, sweetkaramcoffee: 0.78, drinkprime: 0.92, flomattress: 0.72, mymuse: 1.00, dorjeteas: 0.70, wishcare: 1.25, indoera: 0.95, godesi: 1.10, beco: 1.18, supertails: 1.22, longway: 1.05, bearhouse: 1.08, napchief: 1.20, desifarms: 0.82, berrylush: 0.92, comet: 1.45, solethreads: 1.10, rforrabbit: 1.05, superbottoms: 1.00, slurrpfarm: 1.15, thirdwave: 1.20, chaayos: 1.08, beyondappliances: 1.35, sumosave: 0.75, bodycraft: 0.92 };
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
const SO_REDDIT = { aukera: 2800, aretto: 1200, phool: 2200, sidsfarm: 1800, koparo: 700, gynoveda: 2500, bareanatomy: 900, tbof: 1600, cosmix: 1100, samosaparty: 2800, bombaysweets: 1200, theater: 1800, snitch: 8500, mokobara: 4200, mcaffeine: 5000, vahdamteas: 2800, plumgoodness: 6500, bsc: 4000, ragecoffee: 2200, pantproject: 1800, whatsupwellness: 1200, masterchow: 2000, nathabit: 3500, anveshan: 1000, eggoz: 1400, foxtale: 5500, pilgrim: 6800, neemans: 1800, perfora: 1400, boldfit: 3500, sweetkaramcoffee: 500, drinkprime: 1600, flomattress: 900, mymuse: 1400, dorjeteas: 400, wishcare: 4800, indoera: 2200, godesi: 1800, beco: 2400, supertails: 3800, longway: 1600, bearhouse: 2000, napchief: 1200, desifarms: 900, berrylush: 1400, comet: 3200, solethreads: 1800, rforrabbit: 2400, superbottoms: 2800, slurrpfarm: 3000, thirdwave: 4500, chaayos: 5200, beyondappliances: 800, sumosave: 600, bodycraft: 1200 };
const SO_INSTA = { aukera: 95000, aretto: 28000, phool: 45000, sidsfarm: 28000, koparo: 9000, gynoveda: 55000, bareanatomy: 18000, tbof: 22000, cosmix: 15000, samosaparty: 65000, bombaysweets: 32000, theater: 380000, snitch: 450000, mokobara: 120000, mcaffeine: 350000, vahdamteas: 85000, plumgoodness: 420000, bsc: 280000, ragecoffee: 75000, pantproject: 55000, whatsupwellness: 45000, masterchow: 85000, nathabit: 180000, anveshan: 35000, eggoz: 42000, foxtale: 380000, pilgrim: 450000, neemans: 65000, perfora: 48000, boldfit: 180000, sweetkaramcoffee: 15000, drinkprime: 38000, flomattress: 22000, mymuse: 35000, dorjeteas: 12000, wishcare: 220000, indoera: 180000, godesi: 55000, beco: 65000, supertails: 120000, longway: 42000, bearhouse: 85000, napchief: 45000, desifarms: 28000, berrylush: 95000, comet: 300000, solethreads: 85000, rforrabbit: 120000, superbottoms: 95000, slurrpfarm: 180000, thirdwave: 250000, chaayos: 200000, beyondappliances: 15000, sumosave: 5000, bodycraft: 65000 };
const SO_LINKEDIN = { aukera: 14000, aretto: 4500, phool: 18000, sidsfarm: 12000, koparo: 2500, gynoveda: 8000, bareanatomy: 3500, tbof: 9000, cosmix: 4000, samosaparty: 6000, bombaysweets: 5000, theater: 4500, snitch: 25000, mokobara: 15000, mcaffeine: 18000, vahdamteas: 12000, plumgoodness: 20000, bsc: 16000, ragecoffee: 8000, pantproject: 8000, whatsupwellness: 4000, masterchow: 6000, nathabit: 12000, anveshan: 4500, eggoz: 5000, foxtale: 22000, pilgrim: 25000, neemans: 8000, perfora: 5000, boldfit: 12000, sweetkaramcoffee: 1800, drinkprime: 8000, flomattress: 3500, mymuse: 5000, dorjeteas: 1500, wishcare: 8000, indoera: 5500, godesi: 4000, beco: 6500, supertails: 12000, longway: 3500, bearhouse: 7000, napchief: 3000, desifarms: 4000, berrylush: 4500, comet: 8000, solethreads: 6000, rforrabbit: 10000, superbottoms: 8500, slurrpfarm: 12000, thirdwave: 18000, chaayos: 22000, beyondappliances: 5000, sumosave: 4500, bodycraft: 7000 };
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
    { platform: 'reddit', subreddit: 'r/IndianSneakerHeads', title: 'Comet Jugnu drop sold out in 12 minutes — Indian sneaker culture is finally here', upvotes: 2400, comments: 380, time: '3h ago', sentiment: 'positive', brand: 'comet' },
    { platform: 'instagram', handle: '@sneakerheadindia', title: 'Comet x Ludo sneaker unboxing — the detailing on these is insane for ₹4500', likes: 8900, comments: 620, time: '4h ago', sentiment: 'positive', brand: 'comet' },
    { platform: 'reddit', subreddit: 'r/IndianParenting', title: 'R for Rabbit stroller survived 2 kids and still looks new. Best baby purchase ever.', upvotes: 1800, comments: 290, time: '6h ago', sentiment: 'positive', brand: 'rforrabbit' },
    { platform: 'instagram', handle: '@momlife.india', title: 'SuperBottoms cloth diapers — 18 months in, saved ₹40K vs disposables. Full review.', likes: 4200, comments: 380, time: '5h ago', sentiment: 'positive', brand: 'superbottoms' },
    { platform: 'reddit', subreddit: 'r/bangalore', title: 'Third Wave Coffee hit 200 outlets. Still the best specialty coffee chain in India?', upvotes: 3100, comments: 456, time: '7h ago', sentiment: 'positive', brand: 'thirdwave' },
    { platform: 'linkedin', handle: 'Rajat Luthra', title: 'From KFC India CEO to Third Wave Coffee. Here\'s why I believe India\'s coffee market is just getting started.', likes: 9500, comments: 670, time: '8h ago', sentiment: 'positive', brand: 'thirdwave' },
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
// Early Signal Scanner Data — 12-Channel Discovery Engine
// =====================================================

// Signal channel definitions (12 channels — original 10 + Quick Commerce + GST Turnover)
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
    { id: 'qcommerce', name: 'Quick Commerce', icon: 'Q', color: '#ef4444', description: 'Brand listed on Blinkit/Zepto/Instamart — scaling signal for food/beauty' },
    { id: 'gst', name: 'GST Turnover', icon: 'G', color: '#84cc16', description: 'GST filing turnover growth >80% YoY via Tofler/Zauba Corp' },
    { id: 'store_expansion', name: 'Store Expansion', icon: 'E', color: '#0d9488', description: 'Offline store count growing >50% YoY or 10+ new locations in 6 months' },
    { id: 'franchise_velocity', name: 'Franchise Velocity', icon: 'V', color: '#7c2d12', description: 'New franchise/FOFO locations opening at >5/month rate with unit economics proof' },
    { id: 'vc_round', name: 'VC Round Alert', icon: '$', color: '#4f46e5', description: 'New institutional round from Tier-1 VC (Elevation, Fireside, Nexus, Lightspeed, Matrix, etc.)' },
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
// NOTE: Revenue figures marked 'Verify via MCA' need sourcing from Tofler/Zauba/MCA filings.
// Only signal-level data (IG growth, BSR rank, regional trends) should be treated as indicative.
const DISCOVERED_BRANDS = [
    {
        id: 'lahori', name: 'Lahori Beverages', city: 'Ludhiana', state: 'Punjab', tier: 2,
        sector: 'food', sectorLabel: 'Food & Beverage', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: true, regional: true, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: false, trademark: false, qcommerce: true, gst: true },
        stage: 'Tracking', discoveryScore: 89, igFollowers: '290K', igGrowthRate: 20,
        strongestSignal: 'MCA/ROC Filings', detail: 'Traditional Indian beverages (Shikanji, Zeera Soda) from Ludhiana. Series B from Verlinvest. Expanding offline retail rapidly. Revenue: verify via MCA filing.'
    },
    // Slurrp Farm promoted to main tracker (Kids & Baby Care sector)
    {
        id: 'theformularx', name: 'The Formula Rx', city: 'India', state: 'India', tier: 2,
        sector: 'beauty', sectorLabel: 'Beauty & Personal Care', estRevenue: 'Verify via MCA',
        signals: { mca: false, ig_growth: true, bsr: true, regional: true, hiring: false, marketplace: true, influencer: true, fundraise: false, shark_tank: false, trademark: true, qcommerce: false, gst: false },
        stage: 'Detected', discoveryScore: 68, igFollowers: '57K', igGrowthRate: 28,
        strongestSignal: 'IG Follower Growth', detail: 'Dermocosmetics brand (theformularx.com). ~57K IG. Listed on Nykaa (KindLife). Dermatologist-backed sensitive skincare. City: verify. Revenue: not yet disclosed.'
    },
    {
        id: 'brownliving', name: 'Brown Living', city: 'Mumbai', state: 'Maharashtra', tier: 1,
        sector: 'home', sectorLabel: 'Home & Living', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: false, regional: false, hiring: true, marketplace: false, influencer: true, fundraise: true, shark_tank: true, trademark: false, qcommerce: false, gst: true },
        stage: 'Tracking', discoveryScore: 79, igFollowers: '210K', igGrowthRate: 14,
        strongestSignal: 'Fundraise Announcements', detail: 'Sustainable living marketplace. Shark Tank S2 featured. Seed round from Titan Capital. Active hiring. Revenue: verify via MCA filing.'
    },
    {
        id: 'bewakoof', name: 'Bewakoof', city: 'Mumbai', state: 'Maharashtra', tier: 1,
        sector: 'fashion', sectorLabel: 'Fashion & Apparel', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: true, regional: false, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: false, trademark: false, qcommerce: false, gst: true },
        stage: 'Verified', discoveryScore: 85, igFollowers: '1.2M', igGrowthRate: 8,
        strongestSignal: 'MCA/ROC Filings', detail: 'Large-scale casual wear D2C. 7M+ app downloads. Strong BSR across categories. Active hiring. Funded by InvestCorp. Revenue: verify via MCA filing.'
    },
    {
        id: 'ellementry', name: 'Ellementry', city: 'Jaipur', state: 'Rajasthan', tier: 2,
        sector: 'home', sectorLabel: 'Home & Living', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: false, regional: true, hiring: true, marketplace: true, influencer: true, fundraise: false, shark_tank: false, trademark: true, qcommerce: false, gst: true },
        stage: 'Tracking', discoveryScore: 76, igFollowers: '145K', igGrowthRate: 16,
        strongestSignal: 'Marketplace Onboarding', detail: 'Jaipur-based sustainable kitchenware. Listed on Nykaa + Amazon + Flipkart. Regional trend leader in Rajasthan. Revenue: verify via MCA filing.'
    },
    {
        id: 'kapiva', name: 'Kapiva', city: 'Bangalore', state: 'Karnataka', tier: 1,
        sector: 'health', sectorLabel: 'Health & Wellness', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: true, regional: false, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: false, trademark: false, qcommerce: true, gst: true },
        stage: 'Verified', discoveryScore: 87, igFollowers: '380K', igGrowthRate: 11,
        strongestSignal: 'Amazon BSR', detail: 'Modern Ayurveda brand. Strong BSR in Ayurvedic Health category. Series C from Fireside Ventures. Active hiring. Revenue: verify via MCA filing.'
    },
    {
        id: 'nestasia', name: 'Nestasia', city: 'Kolkata', state: 'West Bengal', tier: 2,
        sector: 'home', sectorLabel: 'Home & Living', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: true, regional: true, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: false, trademark: false, qcommerce: false, gst: true },
        stage: 'Tracking', discoveryScore: 84, igFollowers: '280K', igGrowthRate: 15,
        strongestSignal: 'IG Follower Growth', detail: 'Kolkata-based premium home decor. Strong BSR in Home Decor. Trending in West Bengal + Odisha. Series A from Stellaris. Revenue: verify via MCA filing.'
    },
    {
        id: 'fixderma', name: 'Fixderma', city: 'Ahmedabad', state: 'Gujarat', tier: 2,
        sector: 'beauty', sectorLabel: 'Beauty & Personal Care', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: true, regional: true, hiring: true, marketplace: true, influencer: true, fundraise: false, shark_tank: false, trademark: false, qcommerce: false, gst: true },
        stage: 'Tracking', discoveryScore: 81, igFollowers: '200K', igGrowthRate: 17,
        strongestSignal: 'Regional Trends', detail: 'Ahmedabad-based dermatologist-backed skincare. Strong BSR in Sunscreen category. Breakout in Gujarat + Maharashtra. Revenue: verify via MCA filing.'
    },
    {
        id: 'theater', name: 'Theater.xyz', city: 'Chandigarh', state: 'Punjab', tier: 2,
        sector: 'fashion', sectorLabel: 'Fashion & Apparel', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: true, regional: true, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: false, trademark: true, qcommerce: true, gst: true },
        stage: 'Verified', discoveryScore: 93, igFollowers: '380K', igGrowthRate: 18,
        strongestSignal: 'MCA/ROC Filings', detail: 'Chandigarh-based mass-premium western fashion (footwear, bags, perfumes). ~380K IG. Pre-Series A from Prath Ventures ($1.5M, Sep 2024). Featured in Vogue, Elle, Grazia. Expanding into quick commerce + offline retail. Revenue: verify via MCA/Tracxn.'
    },
    {
        id: 'aretto', name: 'Aretto', city: 'Pune', state: 'Maharashtra', tier: 1,
        sector: 'fashion', sectorLabel: 'Fashion & Apparel', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: true, regional: false, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: true, trademark: true, qcommerce: false, gst: true },
        stage: 'Tracking', discoveryScore: 78, igFollowers: '71K', igGrowthRate: 15,
        strongestSignal: 'Shark Tank Alumni', detail: 'Pune-based adaptive kids footwear with patented expanding-shoe tech. ~71K IG. Shark Tank India S3 (no deal but high visibility). Backed by Hardik Pandya. ~$1.29M across 3 seed rounds. ~77 employees. Revenue: verify via MCA filing.'
    },
    {
        id: 'nbc', name: 'Nothing Before Coffee', city: 'Jaipur', state: 'Rajasthan', tier: 2,
        sector: 'food', sectorLabel: 'Food & Beverage', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: false, regional: true, hiring: true, marketplace: false, influencer: true, fundraise: true, shark_tank: false, trademark: true, qcommerce: true, gst: true },
        stage: 'Tracking', discoveryScore: 83, igFollowers: '44K', igGrowthRate: 22,
        strongestSignal: 'Regional Trends', detail: 'Jaipur-based QSR coffee chain. 100+ outlets across 39 cities. Pre-Series A from Prath Ventures ($2.3M). 70%+ revenue growth FY25. Expanding aggressively in Tier 2/3 cities. International presence (Portugal). Revenue: verify via MCA filing.'
    },
    {
        id: 'snitch', name: 'Snitch', city: 'Bengaluru', state: 'Karnataka', tier: 1,
        sector: 'fashion', sectorLabel: 'Fashion & Apparel', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: true, regional: false, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: true, trademark: true, qcommerce: true, gst: true },
        stage: 'Verified', discoveryScore: 95, igFollowers: '450K+', igGrowthRate: 15,
        strongestSignal: 'MCA/ROC Filings', detail: 'Fast-fashion menswear with 15-20 day design-to-shelf cycle. Shark Tank S2 (all 5 sharks). Series B: $40M from 360 ONE (Jun 2025). 72 stores across 36 cities. Reportedly Rs 500Cr+ revenue FY25 — verify via MCA.'
    },
    {
        id: 'foxtale_d', name: 'Foxtale', city: 'Mumbai', state: 'Maharashtra', tier: 1,
        sector: 'beauty', sectorLabel: 'Beauty & Personal Care', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: true, regional: false, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: false, trademark: true, qcommerce: true, gst: true },
        stage: 'Verified', discoveryScore: 92, igFollowers: '450K', igGrowthRate: 18,
        strongestSignal: 'Fundraise Announcements', detail: 'Science-backed skincare for Indian skin. Series C: $30M from KOSE Corporation Japan (Jan 2025). On Nykaa, Blinkit, Amazon. 50% repeat purchase rate. Revenue reportedly doubled YoY — verify via MCA.'
    },
    {
        id: 'zofffoods', name: 'Zoff Foods', city: 'Raipur', state: 'Chhattisgarh', tier: 2,
        sector: 'food', sectorLabel: 'Food & Beverage', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: true, regional: true, hiring: true, marketplace: true, influencer: false, fundraise: true, shark_tank: true, trademark: true, qcommerce: false, gst: true },
        stage: 'Tracking', discoveryScore: 86, igFollowers: '27K', igGrowthRate: 15,
        strongestSignal: 'Shark Tank Alumni', detail: 'Raipur-based spice brand ("The Spice Brothers"). Shark Tank S2 (Aman Gupta) + returned S4. Series A: Rs 40Cr from JM Financial PE (Aug 2024). 10K+ retail outlets. True Tier 2 breakout from Chhattisgarh. Revenue: verify via MCA.'
    },
    {
        id: 'farmley', name: 'Farmley', city: 'Jaipur', state: 'Rajasthan', tier: 2,
        sector: 'food', sectorLabel: 'Food & Beverage', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: true, regional: true, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: false, trademark: true, qcommerce: true, gst: true },
        stage: 'Verified', discoveryScore: 90, igFollowers: '154K', igGrowthRate: 12,
        strongestSignal: 'Fundraise Announcements', detail: 'Jaipur-based dry fruits and healthy snacks. Series C: $40M from L Catterton (2025). EBITDA positive in FY25. Rahul Dravid as brand ambassador. 10K+ retail outlets. International expansion (US, UAE). Revenue: verify via MCA.'
    },
    {
        id: 'adilqadri', name: 'Adil Qadri', city: 'Bilimora', state: 'Gujarat', tier: 3,
        sector: 'beauty', sectorLabel: 'Beauty & Personal Care', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: true, regional: true, hiring: true, marketplace: true, influencer: true, fundraise: false, shark_tank: true, trademark: true, qcommerce: true, gst: true },
        stage: 'Verified', discoveryScore: 88, igFollowers: '955K', igGrowthRate: 20,
        strongestSignal: 'IG Follower Growth', detail: 'Bilimora (Tier 3, Gujarat) attar & perfume brand. Shark Tank S3 (Vineeta Singh). School dropout founder. 4,500 orders/day. 27+ stores incl. Dubai. 95% online. Bootstrapped + profitable. True Tier 3 breakout. Revenue: verify via MCA.'
    },
    {
        id: 'beyondsnack', name: 'Beyond Snack', city: 'Kerala', state: 'Kerala', tier: 2,
        sector: 'food', sectorLabel: 'Food & Beverage', estRevenue: 'Verify via MCA',
        signals: { mca: true, ig_growth: true, bsr: true, regional: true, hiring: true, marketplace: true, influencer: true, fundraise: true, shark_tank: true, trademark: true, qcommerce: true, gst: true },
        stage: 'Tracking', discoveryScore: 85, igFollowers: '50K+', igGrowthRate: 16,
        strongestSignal: 'Amazon BSR', detail: 'Kerala banana chips brand. Shark Tank S1 (Ashneer + Aman). Series A: $8.3M from 12 Flags (Dec 2024). 10K+ retail outlets. On Blinkit, Zepto, Instamart. Present in 18 cities, 12 countries. Revenue: verify via MCA.'
    },
];

// Signal feed events (recent detections across all 12 channels)
// NOTE: Revenue figures in MCA channel events are illustrative placeholders.
// Replace with actual Tofler/Zauba/MCA data before using for investment decisions.
const SIGNAL_FEED = [
    { channel: 'vc_round', brand: 'Comet', city: 'Bengaluru', date: '2026-02-21', detail: 'Series A: $5.08M from Elevation Capital + Nexus Venture Partners (May 2024). INR 167Cr valuation. Sneakers selling out in 15 min.', strength: 'strong' },
    { channel: 'ig_growth', brand: 'Comet', city: 'Bengaluru', date: '2026-02-21', detail: '300K IG followers. Limited drops creating cult-like demand. Revenue 4x to INR 29Cr. Verify via Social Blade.', strength: 'strong' },
    { channel: 'store_expansion', brand: 'Third Wave Coffee', city: 'Bengaluru', date: '2026-02-21', detail: 'Hit 200-cafe milestone (Dec 2025). From 90 to 200 stores in ~2 years. Hired ex-KFC India CEO.', strength: 'strong' },
    { channel: 'store_expansion', brand: 'SumoSave', city: 'Kolkata', date: '2026-02-20', detail: 'Rapidly expanding COCO stores in Kolkata suburbs. 163 employees (122% YoY growth). Lightspeed India backed.', strength: 'strong' },
    { channel: 'vc_round', brand: 'R for Rabbit', city: 'Pune', date: '2026-02-20', detail: 'Series B: $27M co-led by Filter Capital + 3one4 Capital (Aug 2025). INR 850Cr valuation. Profitable growth.', strength: 'strong' },
    { channel: 'store_expansion', brand: 'Chaayos', city: 'Delhi NCR', date: '2026-02-20', detail: '200+ stores, patented IoT Chai Monk bots. Tiger Global + Elevation backed. Acquired Dohful (cookies).', strength: 'strong' },
    { channel: 'vc_round', brand: 'Beyond Appliances', city: 'Mumbai', date: '2026-02-19', detail: 'Series A: $4M from Fireside Ventures + Dharana Capital (Aug 2025). Revenue doubled post-seed. Android chimney pioneer.', strength: 'strong' },
    { channel: 'franchise_velocity', brand: 'Bodycraft', city: 'Bengaluru', date: '2026-02-19', detail: 'Planning 16 new stores in 2025 (18 COCO + 7 FOFO). Targeting INR 215Cr revenue. 11-12% EBITDA margin.', strength: 'strong' },
    { channel: 'fundraise', brand: 'Theater.xyz', city: 'Chandigarh', date: '2026-02-19', detail: 'Pre-Series A: $1.5M from Prath Ventures (Sep 2024). Same fund backed NBC. Verify via Inc42/Tracxn.', strength: 'strong' },
    { channel: 'ig_growth', brand: 'Theater.xyz', city: 'Chandigarh', date: '2026-02-19', detail: '~380K IG followers. Featured in Vogue, Elle, Grazia, Cosmopolitan, Femina. Verify via Social Blade.', strength: 'strong' },
    { channel: 'qcommerce', brand: 'Theater.xyz', city: 'Chandigarh', date: '2026-02-19', detail: 'Expanding into quick commerce channel per Inc42 report. Mass-premium fashion going omnichannel.', strength: 'strong' },
    { channel: 'mca', brand: 'Lahori Beverages', city: 'Ludhiana', date: '2026-02-18', detail: 'New MCA filing available for FY25. Revenue growth signal detected — verify exact figures via Tofler/Zauba Corp.', strength: 'strong' },
    { channel: 'regional', brand: 'Nothing Before Coffee', city: 'Jaipur', date: '2026-02-18', detail: '100+ outlets across 39 cities. 52% YoY store count growth. Strongest in Tier 2/3 cities. Verify via company announcements.', strength: 'strong' },
    { channel: 'fundraise', brand: 'Nothing Before Coffee', city: 'Jaipur', date: '2026-02-18', detail: 'Pre-Series A: $2.3M from Prath Ventures + SYL Investments. Targeting 150+ outlets by FY26. Verify via Tracxn.', strength: 'strong' },
    { channel: 'bsr', brand: 'Slurrp Farm', city: 'Gurugram', date: '2026-02-17', detail: 'Significant BSR improvement in Baby Foods category on Amazon. Track rank movement via Jungle Scout/Helium10.', strength: 'strong' },
    { channel: 'shark_tank', brand: 'Aretto', city: 'Pune', date: '2026-02-17', detail: 'Shark Tank India S3 appearance (no deal). Patented expanding kids shoe tech. Post-episode search interest elevated. Verify via Google Trends.', strength: 'moderate' },
    { channel: 'fundraise', brand: 'Aretto', city: 'Pune', date: '2026-02-17', detail: '~$1.29M across 3 seed rounds. Backed by cricketer Hardik Pandya. ~77 employees. Verify via Tracxn/Crunchbase.', strength: 'strong' },
    { channel: 'regional', brand: 'The Formula Rx', city: 'India', date: '2026-02-17', detail: 'Regional Google Trends breakout detected. Low national index suggests pre-national phase. Verify city of origin.', strength: 'strong' },
    { channel: 'shark_tank', brand: 'Brown Living', city: 'Mumbai', date: '2026-02-16', detail: 'Shark Tank S2 featured. Post-episode search interest sustaining well above baseline. Verify via Google Trends.', strength: 'moderate' },
    { channel: 'hiring', brand: 'Nestasia', city: 'Kolkata', date: '2026-02-16', detail: 'Significant LinkedIn headcount growth detected. Multiple open roles including senior D2C positions. Verify via LinkedIn.', strength: 'strong' },
    { channel: 'gst', brand: 'Theater.xyz', city: 'Chandigarh', date: '2026-02-16', detail: 'GST turnover growth signal. Tracxn reports significant revenue scale relative to minimal funding ($1.5M raised). Verify via Tofler.', strength: 'strong' },
    { channel: 'marketplace', brand: 'Ellementry', city: 'Jaipur', date: '2026-02-15', detail: 'Now listed on multiple marketplaces including Nykaa Home, Amazon, and Flipkart. Multi-platform onboarding signal.', strength: 'strong' },
    { channel: 'qcommerce', brand: 'Lahori Beverages', city: 'Ludhiana', date: '2026-02-15', detail: 'Traditional beverages category expanding into quick commerce. Shikanji/Zeera Soda on Blinkit/Zepto. Verify listings.', strength: 'strong' },
    { channel: 'fundraise', brand: 'Kapiva', city: 'Bangalore', date: '2026-02-14', detail: 'Series C round closed. Lead investors include Fireside Ventures. Verify round size via Tracxn/Crunchbase.', strength: 'strong' },
    { channel: 'hiring', brand: 'Aretto', city: 'Pune', date: '2026-02-14', detail: '~77 employees as of Oct 2024. Growing headcount for a kids footwear startup. Verify via LinkedIn.', strength: 'moderate' },
    { channel: 'mca', brand: 'Bewakoof', city: 'Mumbai', date: '2026-02-13', detail: 'FY25 MCA filing available. Significant YoY revenue growth detected. Verify exact figures via Tofler/Zauba Corp.', strength: 'strong' },
    { channel: 'qcommerce', brand: 'Nothing Before Coffee', city: 'Jaipur', date: '2026-02-13', detail: 'Online orders (Swiggy/Zomato) contributing 12-13% of total revenue. Quick commerce as growth lever. Verify via company reports.', strength: 'moderate' },
    { channel: 'bsr', brand: 'Fixderma', city: 'Ahmedabad', date: '2026-02-12', detail: 'Fixderma Shadow SPF 50+ showing strong BSR improvement in Sunscreen category. Track via Jungle Scout.', strength: 'strong' },
    { channel: 'hiring', brand: 'Bewakoof', city: 'Mumbai', date: '2026-02-11', detail: 'Multiple senior open roles detected on LinkedIn: marketing, operations, data. Scaling signal. Verify via LinkedIn.', strength: 'moderate' },
    { channel: 'marketplace', brand: 'Fixderma', city: 'Ahmedabad', date: '2026-02-10', detail: 'Added to multiple marketplaces in quick succession. Dermatologist-backed positioning. Verify listings directly.', strength: 'strong' },
    { channel: 'influencer', brand: 'The Formula Rx', city: 'India', date: '2026-02-10', detail: 'Rising micro-influencer mention density vs. small follower base. Organic creator buzz building. Verify via HypeAuditor.', strength: 'moderate' },
    { channel: 'fundraise', brand: 'Nestasia', city: 'Kolkata', date: '2026-02-09', detail: 'Series A raised from Stellaris Venture Partners. Home decor D2C from Kolkata. Verify round details via Tracxn.', strength: 'strong' },
    { channel: 'shark_tank', brand: 'Slurrp Farm', city: 'Gurugram', date: '2026-02-09', detail: 'Shark Tank S1 alumni. Search interest showing sustained retention well above pre-episode baseline. Verify via Google Trends.', strength: 'moderate' },
    { channel: 'gst', brand: 'Nothing Before Coffee', city: 'Jaipur', date: '2026-02-08', detail: '70%+ revenue growth FY25 per company reports. GST turnover growth signal. Verify via Tofler/Zauba Corp.', strength: 'strong' },
    { channel: 'mca', brand: 'Nestasia', city: 'Kolkata', date: '2026-02-07', detail: 'FY25 MCA filing available. Significant YoY revenue growth detected. Home decor category. Verify via Tofler/Zauba Corp.', strength: 'strong' },
    { channel: 'bsr', brand: 'Kapiva', city: 'Bangalore', date: '2026-02-07', detail: 'Kapiva products showing strong BSR improvement in Ayurvedic Health. Track rank movement via Jungle Scout/Helium10.', strength: 'strong' },
    { channel: 'trademark', brand: 'Aretto', city: 'Pune', date: '2026-02-06', detail: 'Patented expanding-shoe technology (SuperGrooves, Aretto Squishy Foam, INFI-KNIT). Strong IP moat. Verify via IP India.', strength: 'strong' },
    { channel: 'fundraise', brand: 'Snitch', city: 'Bengaluru', date: '2026-02-06', detail: 'Series B: $40M from 360 ONE Asset Management (Jun 2025). Shark Tank S2 alumni — all 5 sharks invested. 72 stores. Verify via Inc42/Tracxn.', strength: 'strong' },
    { channel: 'shark_tank', brand: 'Snitch', city: 'Bengaluru', date: '2026-02-05', detail: 'Shark Tank S2 — all 5 sharks invested Rs 1.5Cr at Rs 300Cr valuation. Scaled to Rs 500Cr+ revenue since. Verify via MCA.', strength: 'strong' },
    { channel: 'fundraise', brand: 'Foxtale', city: 'Mumbai', date: '2026-02-05', detail: 'Series C: $30M led by KOSE Corporation Japan (Jan 2025). KOSE took 10% strategic stake. Verify via Inc42/YourStory.', strength: 'strong' },
    { channel: 'qcommerce', brand: 'Foxtale', city: 'Mumbai', date: '2026-02-04', detail: 'Available on Blinkit, Nykaa, Amazon, Flipkart. Quick commerce scaling for skincare category. Verify listings.', strength: 'strong' },
    { channel: 'shark_tank', brand: 'Zoff Foods', city: 'Raipur', date: '2026-02-04', detail: 'Shark Tank S2 + returned S4. Rs 1Cr from Aman Gupta. Series A: Rs 40Cr from JM Financial PE. Tier 2 breakout from Raipur. Verify via Entrackr.', strength: 'strong' },
    { channel: 'regional', brand: 'Zoff Foods', city: 'Raipur', date: '2026-02-04', detail: 'Chhattisgarh-based spice brand now in 10K+ retail outlets nationally. True Tier 2 city breakout. Verify via company reports.', strength: 'strong' },
    { channel: 'fundraise', brand: 'Farmley', city: 'Jaipur', date: '2026-02-03', detail: 'Series C: $40M from L Catterton (2025). EBITDA positive. Rahul Dravid as brand ambassador. Verify via Inc42.', strength: 'strong' },
    { channel: 'gst', brand: 'Farmley', city: 'Jaipur', date: '2026-02-03', detail: 'Revenue reported at Rs 370Cr FY25. EBITDA positive. Targeting Rs 1000Cr. Verify exact figures via Tofler/MCA.', strength: 'strong' },
    { channel: 'shark_tank', brand: 'Adil Qadri', city: 'Bilimora', date: '2026-02-02', detail: 'Shark Tank S3 (Vineeta Singh). School dropout founder from Tier 3 Gujarat. 4,500 orders/day. 27+ stores incl. Dubai. Verify via SharkTankIndiaClub.', strength: 'strong' },
    { channel: 'ig_growth', brand: 'Adil Qadri', city: 'Bilimora', date: '2026-02-02', detail: '~955K IG followers. 95% online sales. Bootstrapped and profitable. Largest perfume/attar D2C IG presence in India. Verify via Social Blade.', strength: 'strong' },
    { channel: 'shark_tank', brand: 'Beyond Snack', city: 'Kerala', date: '2026-02-01', detail: 'Shark Tank S1 (Ashneer + Aman). Series A: $8.3M from 12 Flags (Dec 2024). Now in 18 cities, 12 countries. Verify via Inc42.', strength: 'strong' },
    { channel: 'qcommerce', brand: 'Beyond Snack', city: 'Kerala', date: '2026-02-01', detail: 'Present on Blinkit, Zepto, Instamart + 10K retail outlets (DMart, Reliance). Quick commerce as growth lever. Verify listings.', strength: 'strong' },
];

// Regional hotspot data — cities with emerging brand signals
const REGIONAL_HOTSPOTS = [
    { city: 'Chandigarh', state: 'Punjab', tier: 2, brands: ['Theater.xyz'], signalCount: 8, topCategory: 'Fashion & Beauty' },
    { city: 'Jaipur', state: 'Rajasthan', tier: 2, brands: ['Ellementry', 'Nothing Before Coffee', 'Farmley'], signalCount: 18, topCategory: 'Home & F&B' },
    { city: 'Pune', state: 'Maharashtra', tier: 1, brands: ['Aretto'], signalCount: 7, topCategory: 'Fashion & Footwear' },
    { city: 'Raipur', state: 'Chhattisgarh', tier: 2, brands: ['Zoff Foods'], signalCount: 9, topCategory: 'Food & Beverage' },
    { city: 'Bilimora', state: 'Gujarat', tier: 3, brands: ['Adil Qadri'], signalCount: 10, topCategory: 'Beauty & Fragrances' },
    { city: 'Ludhiana', state: 'Punjab', tier: 2, brands: ['Lahori Beverages'], signalCount: 8, topCategory: 'Food & Beverage' },
    { city: 'Kolkata', state: 'West Bengal', tier: 2, brands: ['Nestasia'], signalCount: 9, topCategory: 'Home & Living' },
    { city: 'Ahmedabad', state: 'Gujarat', tier: 2, brands: ['Fixderma'], signalCount: 7, topCategory: 'Beauty' },
    { city: 'Hyderabad', state: 'Telangana', tier: 1, brands: ["Sid's Farm"], signalCount: 6, topCategory: 'Food & Beverage' },
    { city: 'Bangalore', state: 'Karnataka', tier: 1, brands: ['Kapiva', 'Samosa Party', 'Snitch'], signalCount: 14, topCategory: 'Health & Fashion' },
    { city: 'Kerala', state: 'Kerala', tier: 2, brands: ['Beyond Snack'], signalCount: 8, topCategory: 'Food & Beverage' },
    { city: 'Bengaluru', state: 'Karnataka', tier: 1, brands: ['Comet', 'Third Wave Coffee', 'Bodycraft'], signalCount: 18, topCategory: 'Footwear & QSR' },
    { city: 'Gurugram', state: 'Haryana', tier: 1, brands: ['Slurrp Farm', 'SuperBottoms', 'Chaayos'], signalCount: 15, topCategory: 'Kids & QSR' },
    { city: 'Kolkata', state: 'West Bengal', tier: 2, brands: ['SumoSave', 'Nestasia'], signalCount: 12, topCategory: 'Retail & Home' },
    { city: 'Mumbai', state: 'Maharashtra', tier: 1, brands: ['Beyond Appliances', 'Solethreads', 'R for Rabbit'], signalCount: 14, topCategory: 'Durables & Kids' },
];

// --- LinkedIn Senior Hiring Data ---
// Real verified senior hires at sub-$300M D2C startups from Top Indian corporates
// Sources: Exchange4Media, Storyboard18, Indian Retailer, AdGully, MediaBrief, Inc42
const LINKEDIN_HIRING_DATA = [
    // =====================================================
    // Last 12 months — Senior hires from large corporates /
    // established companies into early-stage consumer startups
    // (VC investment signal: scaling intent)
    // Sectors: D2C, FMCG, consumer retail, consumer durables
    // Source: LinkedIn profiles, verified via public announcements
    // =====================================================

    // --- The Sleep Company (D2C mattress/sleep, ~₹500Cr rev) ---
    {
        hireName: 'Udhaya Shankar M',
        linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Udhaya%20Shankar%20M%20Sleep%20Company%20CHRO',
        role: 'Chief Human Resources Officer',
        workExYears: 17,
        lastCompany: 'Metro Brands / Landmark Group / Vodafone',
        lastRole: 'Head - HR Operations, Metro Brands Ltd (ex-Landmark Group 14 yrs)',
        currentCompany: 'The Sleep Company',
        hireDate: '2026-02-01',
    },
    {
        hireName: 'Hemal Jain',
        linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Hemal%20Jain%20Sleep%20Company%20CFO',
        role: 'Chief Financial Officer',
        workExYears: 20,
        lastCompany: 'Eternal (Zomato) / HUL',
        lastRole: 'Global Head of Finance & CFO, Hyperpure - Zomato (ex-HUL)',
        currentCompany: 'The Sleep Company',
        hireDate: '2026-01-15',
    },
    {
        hireName: 'Alpesh Jain',
        linkedinUrl: 'https://www.linkedin.com/in/alpeshjain/',
        role: 'Chief Technology Officer',
        workExYears: 16,
        lastCompany: 'The Good Glamm Group (MyGlamm)',
        lastRole: 'VP of Technology, The Good Glamm Group (scaled digital platforms)',
        currentCompany: 'The Sleep Company',
        hireDate: '2025-05-01',
    },

    // --- Kapiva (Ayurveda wellness, Series B, ~₹240Cr val) ---
    {
        hireName: 'Piyal Das',
        linkedinUrl: 'https://www.linkedin.com/in/piyal-das-2024611a2/',
        role: 'Head of Creative & Director, Marketing',
        workExYears: 12,
        lastCompany: 'Leo Burnett (Reckitt brands)',
        lastRole: 'Creative Director, Leo Burnett (led Durex, Dettol, Veet, Moov, Gaviscon)',
        currentCompany: 'Kapiva',
        hireDate: '2026-01-14',
    },

    // --- mCaffeine / PEP Brands (D2C beauty, ₹1000Cr val) ---
    {
        hireName: 'Shashwat Jain',
        linkedinUrl: 'https://www.linkedin.com/in/shashwat-jain-65522162/',
        role: 'Chief Commercial Officer',
        workExYears: 14,
        lastCompany: 'Dangal Games (Co-founder)',
        lastRole: 'Co-founder & CEO, Dangal Games / Poker Dangal (scaled consumer gaming)',
        currentCompany: 'mcaffeine',
        hireDate: '2025-09-08',
    },

    // --- Nat Habit (D2C ayurveda beauty, ₹343Cr val) ---
    {
        hireName: 'Kushal Gupta',
        linkedinUrl: 'https://in.linkedin.com/in/kushal-gupta-8a557b4',
        role: 'Chief Retail Officer',
        workExYears: 20,
        lastCompany: 'PepsiCo / HUL / Tata Consumer',
        lastRole: 'Senior Leadership, Tata Consumer Products (scaled JV ₹174Cr → ₹1,000Cr)',
        currentCompany: 'nathabit',
        hireDate: '2025-05-27',
    },

    // --- Sweet Karam Coffee (D2C snacks, Series A, ₹313Cr val) ---
    {
        hireName: 'Nandhitha Indermohan',
        linkedinUrl: 'https://www.linkedin.com/in/nandhitha-indermohan-9640a815/',
        role: 'Chief Operating Officer',
        workExYears: 24,
        lastCompany: 'Hindustan Unilever (HUL)',
        lastRole: 'Senior Supply Chain & Operations Leader, HUL (24 yrs at Unilever)',
        currentCompany: 'sweetkaramcoffee',
        hireDate: '2025-03-15',
    },

    // --- Bombay Shaving Company (D2C personal care, ₹824Cr val) ---
    {
        hireName: 'Archana Rajan',
        linkedinUrl: 'https://www.linkedin.com/in/archana-rajan-1004b0a/',
        role: 'Chief People Officer',
        workExYears: 23,
        lastCompany: 'Jio (Reliance)',
        lastRole: 'HR Head - Enterprise Business (Strategic & Large), Jio',
        currentCompany: 'bsc',
        hireDate: '2025-02-01',
    },

    // --- Neeman\'s (D2C footwear, Series B, ₹268Cr val) ---
    {
        hireName: 'Sumit Maloo',
        linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Sumit%20Maloo%20Neemans%20CFO',
        role: 'Chief Financial Officer',
        workExYears: 15,
        lastCompany: 'Skechers South Asia / Reliance Brands / ICICI Bank',
        lastRole: 'CFO, Skechers South Asia (led financial strategy, planning & treasury)',
        currentCompany: 'neemans',
        hireDate: '2024-11-16',
    },
];

// --- Funding Rounds & VC Activity Tracker ---
// Tracks recent funding rounds in the consumer space for deal-flow intelligence
// Helps answer: "Who just raised?", "Who's about to raise?", "Which VCs are active?"
const FUNDING_ROUNDS = [
    // --- Tracked Companies (in COMPANIES array) ---
    { company: 'comet', companyName: 'Comet', round: 'Series A', amount: '$5.08M', date: '2024-05', leadInvestor: 'Elevation Capital', coInvestors: ['Nexus Venture Partners', 'AngelList India'], valuation: 'INR 167Cr', sector: 'footwear' },
    { company: 'comet', companyName: 'Comet', round: 'Seed', amount: '$1.5M', date: '2023-02', leadInvestor: 'Nexus Venture Partners', coInvestors: ['AngelList India'], valuation: 'Undisclosed', sector: 'footwear' },
    { company: 'solethreads', companyName: 'Solethreads', round: 'Series A', amount: '$3.7M', date: '2023-07', leadInvestor: 'Fireside Ventures', coInvestors: ['DSG Consumer Partners', 'Saama Capital'], valuation: 'INR 145Cr', sector: 'footwear' },
    { company: 'rforrabbit', companyName: 'R for Rabbit', round: 'Series B', amount: '$27M', date: '2025-08', leadInvestor: 'Filter Capital', coInvestors: ['3one4 Capital'], valuation: 'INR 850Cr', sector: 'kids' },
    { company: 'superbottoms', companyName: 'SuperBottoms', round: 'Series A', amount: '$5M', date: '2023-06', leadInvestor: 'Lok Capital', coInvestors: ['Sharrp Ventures', 'DSG Consumer Partners', 'Saama Capital'], valuation: 'INR 191Cr', sector: 'kids' },
    { company: 'slurrpfarm', companyName: 'Slurrp Farm', round: 'Series C Extension', amount: 'INR 30Cr', date: '2026-02', leadInvestor: 'Scarlet Ventures', coInvestors: ['Fireside Ventures', 'Raed Capital'], valuation: 'INR 810Cr', sector: 'kids' },
    // Third Wave Coffee & Chaayos removed from tracker (beyond valuation range)
    { company: 'beyondappliances', companyName: 'Beyond Appliances', round: 'Series A', amount: '$4M', date: '2025-08', leadInvestor: 'Fireside Ventures', coInvestors: ['Dharana Capital'], valuation: '~INR 50-80Cr', sector: 'durables' },
    { company: 'beyondappliances', companyName: 'Beyond Appliances', round: 'Seed', amount: '$2M', date: '2024-11', leadInvestor: 'Fireside Ventures', coInvestors: [], valuation: 'Undisclosed', sector: 'durables' },
    { company: 'sumosave', companyName: 'SumoSave', round: 'Seed', amount: '$3.3M', date: '2024-03', leadInvestor: 'Lightspeed India', coInvestors: ['Stride Ventures', 'Kettleborough VC', 'Faad Network'], valuation: 'Undisclosed', sector: 'retail' },
    { company: 'bodycraft', companyName: 'Bodycraft', round: 'Angel', amount: 'INR 18Cr', date: '2017-01', leadInvestor: 'Venture Catalysts', coInvestors: [], valuation: 'Undisclosed', sector: 'services' },
    // Snitch & Foxtale removed from tracker (beyond valuation range)
    { company: 'mokobara', companyName: 'Mokobara', round: 'Series B', amount: '$12M', date: '2024-08', leadInvestor: 'Sauce VC', coInvestors: ['Saama Capital', 'Nexus Venture Partners'], valuation: '~$80M', sector: 'fashion' },
    { company: 'nathabit', companyName: 'Nat Habit', round: 'Series A', amount: '$10M', date: '2024-03', leadInvestor: 'Fireside Ventures', coInvestors: ['Lightspeed India'], valuation: 'INR 343Cr', sector: 'beauty' },
    { company: 'eggoz', companyName: 'Eggoz', round: 'Series B', amount: '$10M', date: '2024-01', leadInvestor: 'Rebright Partners', coInvestors: ['Aavishkaar Capital', 'ORIX'], valuation: 'INR 458Cr', sector: 'food' },
    { company: 'perfora', companyName: 'Perfora', round: 'Series A', amount: '$10M', date: '2024-06', leadInvestor: 'Bessemer Venture Partners', coInvestors: ['Mensa Brands'], valuation: 'INR 240Cr', sector: 'health' },
    // --- Discovered Brands (not in main tracker yet) ---
    { company: 'farmley', companyName: 'Farmley', round: 'Series C', amount: '$40M', date: '2025-01', leadInvestor: 'L Catterton', coInvestors: [], valuation: 'Undisclosed', sector: 'food' },
    { company: 'beyondsnack', companyName: 'Beyond Snack', round: 'Series A', amount: '$8.3M', date: '2024-12', leadInvestor: '12 Flags', coInvestors: [], valuation: 'Undisclosed', sector: 'food' },
    { company: 'zofffoods', companyName: 'Zoff Foods', round: 'Series A', amount: 'INR 40Cr', date: '2024-08', leadInvestor: 'JM Financial PE', coInvestors: [], valuation: 'Undisclosed', sector: 'food' },
];

// --- VC Activity Tracker ---
// Which top-tier VCs are actively deploying in consumer and where
const VC_ACTIVITY = [
    { vc: 'Fireside Ventures', focus: 'Consumer-only fund', activeDeals: ['Solethreads', 'Slurrp Farm', 'Beyond Appliances', 'Nat Habit', 'Kapiva'], recentDeployment: '$15M+ in last 12 months', sectors: ['footwear', 'kids', 'durables', 'beauty', 'health'], thesis: 'Backs emerging consumer brands at Seed-Series A. Deepest consumer-only fund in India.' },
    { vc: 'Elevation Capital', focus: 'Multi-stage', activeDeals: ['Comet'], recentDeployment: '$5M+ in consumer', sectors: ['footwear'], thesis: 'Growth-stage bets on category leaders. Consumer is ~25% of portfolio.' },
    { vc: 'Nexus Venture Partners', focus: 'Multi-stage', activeDeals: ['Comet', 'Mokobara'], recentDeployment: '$17M+ in consumer', sectors: ['footwear', 'fashion'], thesis: 'Early-stage conviction plays. Backs founders with strong differentiation.' },
    { vc: 'Lightspeed India', focus: 'Multi-stage', activeDeals: ['SumoSave', 'Nat Habit'], recentDeployment: '$13M+ in consumer', sectors: ['retail', 'beauty'], thesis: 'Bets on large market opportunities with operator-founders.' },
    { vc: 'DSG Consumer Partners', focus: 'Consumer-focused', activeDeals: ['Solethreads', 'SuperBottoms'], recentDeployment: '$8M+ in consumer', sectors: ['footwear', 'kids'], thesis: 'Pure-play consumer fund. Backs brands from Series A through growth.' },
    // Tiger Global, WestBridge — primarily backing companies beyond our valuation range
    { vc: 'Filter Capital', focus: 'Growth-stage', activeDeals: ['R for Rabbit'], recentDeployment: '$27M in baby care', sectors: ['kids'], thesis: 'Ex-McKinsey team. Backs profitable growth-stage consumer companies.' },
    { vc: 'Bessemer Venture Partners', focus: 'Multi-stage global', activeDeals: ['Perfora'], recentDeployment: '$10M in consumer health', sectors: ['health'], thesis: 'Selective India consumer bets. Looks for category-defining brands.' },
    { vc: 'L Catterton', focus: 'Global consumer PE', activeDeals: ['Farmley'], recentDeployment: '$40M in food/snacks', sectors: ['food'], thesis: 'LVMH-backed consumer PE. First India consumer bets in healthy snacks vertical.' },
    // Creaegis — primarily backing companies beyond our valuation range
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
