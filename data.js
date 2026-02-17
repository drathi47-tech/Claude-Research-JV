// =====================================================
// Consumer Trend Radar - Sample Data
// Realistic data for Indian D2C / consumer brands
// =====================================================

const COMPANIES = [
    {
        id: 'mamaearth',
        name: 'Mamaearth',
        sector: 'beauty',
        sectorLabel: 'Beauty & Personal Care',
        website: 'mamaearth.in',
        color: '#10b981',
    },
    {
        id: 'boat',
        name: 'boAt',
        sector: 'electronics',
        sectorLabel: 'Consumer Electronics',
        website: 'boat-lifestyle.com',
        color: '#ef4444',
    },
    {
        id: 'wakefit',
        name: 'Wakefit',
        sector: 'home',
        sectorLabel: 'Home & Living',
        website: 'wakefit.co',
        color: '#3b82f6',
    },
    {
        id: 'lenskart',
        name: 'Lenskart',
        sector: 'fashion',
        sectorLabel: 'Fashion & Apparel',
        website: 'lenskart.com',
        color: '#8b5cf6',
    },
    {
        id: 'sugar',
        name: 'SUGAR Cosmetics',
        sector: 'beauty',
        sectorLabel: 'Beauty & Personal Care',
        website: 'sugarcosmetics.com',
        color: '#ec4899',
    },
    {
        id: 'noise',
        name: 'Noise',
        sector: 'electronics',
        sectorLabel: 'Consumer Electronics',
        website: 'gonoise.com',
        color: '#f97316',
    },
    {
        id: 'mokobara',
        name: 'Mokobara',
        sector: 'fashion',
        sectorLabel: 'Fashion & Apparel',
        website: 'mokobara.com',
        color: '#06b6d4',
    },
    {
        id: 'yogabar',
        name: 'Yogabar',
        sector: 'food',
        sectorLabel: 'Food & Beverage',
        website: 'yogabars.com',
        color: '#84cc16',
    },
    {
        id: 'plum',
        name: 'Plum Goodness',
        sector: 'beauty',
        sectorLabel: 'Beauty & Personal Care',
        website: 'plumgoodness.com',
        color: '#a855f7',
    },
    {
        id: 'bewakoof',
        name: 'Bewakoof',
        sector: 'fashion',
        sectorLabel: 'Fashion & Apparel',
        website: 'bewakoof.com',
        color: '#f59e0b',
    },
    {
        id: 'sleepycat',
        name: 'SleepyCat',
        sector: 'home',
        sectorLabel: 'Home & Living',
        website: 'sleepycat.in',
        color: '#6366f1',
    },
    {
        id: 'thewholetruthhfoods',
        name: 'The Whole Truth',
        sector: 'food',
        sectorLabel: 'Food & Beverage',
        website: 'thewholetruthfoods.com',
        color: '#14b8a6',
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
    const growth = c.id === 'mokobara' ? 0.8 :
                   c.id === 'wakefit' ? 0.6 :
                   c.id === 'thewholetruthhfoods' ? 0.7 :
                   c.id === 'sugar' ? 0.4 :
                   c.id === 'boat' ? 0.15 :
                   c.id === 'mamaearth' ? 0.1 :
                   c.id === 'plum' ? 0.35 :
                   Math.random() * 0.3;
    const base = c.id === 'boat' ? 72 :
                 c.id === 'lenskart' ? 65 :
                 c.id === 'mamaearth' ? 58 :
                 c.id === 'noise' ? 45 :
                 20 + Math.random() * 30;
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
    mamaearth: [
        { text: 'mamaearth vitamin c serum', growth: '+450%' },
        { text: 'mamaearth face wash review', growth: '+280%' },
        { text: 'mamaearth onion oil', growth: '+190%' },
        { text: 'mamaearth vs plum', growth: '+150%' },
        { text: 'mamaearth IPO price', growth: '+320%' },
    ],
    boat: [
        { text: 'boat airdopes 141 review', growth: '+380%' },
        { text: 'boat smartwatch under 2000', growth: '+250%' },
        { text: 'boat rockerz 450 pro', growth: '+180%' },
        { text: 'boat vs noise smartwatch', growth: '+140%' },
    ],
    mokobara: [
        { text: 'mokobara luggage review', growth: '+850%' },
        { text: 'mokobara vs american tourister', growth: '+620%' },
        { text: 'mokobara backpack', growth: '+510%' },
        { text: 'mokobara shark tank', growth: '+380%' },
        { text: 'mokobara cabin luggage', growth: '+290%' },
    ],
    wakefit: [
        { text: 'wakefit mattress review 2025', growth: '+420%' },
        { text: 'wakefit ortho mattress', growth: '+310%' },
        { text: 'wakefit vs sleepycat', growth: '+240%' },
        { text: 'wakefit sofa bed', growth: '+180%' },
    ],
    sugar: [
        { text: 'sugar cosmetics lipstick shade', growth: '+350%' },
        { text: 'sugar matte crayon review', growth: '+270%' },
        { text: 'sugar vs maybelline', growth: '+200%' },
    ],
    thewholetruthhfoods: [
        { text: 'whole truth protein bar', growth: '+680%' },
        { text: 'whole truth peanut butter', growth: '+420%' },
        { text: 'whole truth foods review', growth: '+310%' },
        { text: 'whole truth vs yoga bar', growth: '+250%' },
    ],
};
Object.keys(RISING_QUERIES).forEach(k => {
    if (GOOGLE_TRENDS_DATA[k]) {
        GOOGLE_TRENDS_DATA[k].risingQueries = RISING_QUERIES[k];
    }
});

// --- E-commerce Reviews Data ---
const ECOMMERCE_DATA = {};
COMPANIES.forEach(c => {
    const amazonBase = c.id === 'boat' ? 4200 : c.id === 'mamaearth' ? 3100 :
                       c.id === 'noise' ? 2800 : 400 + Math.random() * 1500;
    const myntraBase = c.sector === 'fashion' ? 800 + Math.random() * 1200 :
                       c.sector === 'beauty' ? 500 + Math.random() * 1000 : 100 + Math.random() * 400;

    ECOMMERCE_DATA[c.id] = {
        amazon: {
            totalReviews: Math.round(amazonBase * 8),
            avgRating: parseFloat((3.6 + Math.random() * 0.8).toFixed(1)),
            ratingChange: parseFloat((Math.random() * 0.5 - 0.1).toFixed(1)),
            reviewVelocity: Math.round(amazonBase / 4),
            sentiment: Math.round(60 + Math.random() * 25),
            reviewTimeSeries: generateWeeklyTimeSeries(26, amazonBase / 4, 0.3, 0.25),
            ratingTimeSeries: generateWeeklyTimeSeries(26, 3.8, 0.05, 0.02).map(d => ({
                ...d, value: parseFloat(Math.min(5, Math.max(3, d.value / 10 + 3)).toFixed(1))
            })),
        },
        myntra: {
            totalReviews: Math.round(myntraBase * 6),
            avgRating: parseFloat((3.5 + Math.random() * 0.9).toFixed(1)),
            ratingChange: parseFloat((Math.random() * 0.4 - 0.1).toFixed(1)),
            reviewVelocity: Math.round(myntraBase / 4),
            sentiment: Math.round(58 + Math.random() * 28),
            reviewTimeSeries: generateWeeklyTimeSeries(26, myntraBase / 4, 0.25, 0.3),
            ratingTimeSeries: generateWeeklyTimeSeries(26, 3.7, 0.04, 0.03).map(d => ({
                ...d, value: parseFloat(Math.min(5, Math.max(3, d.value / 10 + 3)).toFixed(1))
            })),
        },
    };
});

const REVIEW_KEYWORDS = {
    positive: [
        { text: 'great quality', size: 22, color: '#10b981' },
        { text: 'value for money', size: 20, color: '#10b981' },
        { text: 'fast delivery', size: 18, color: '#10b981' },
        { text: 'worth it', size: 17, color: '#10b981' },
        { text: 'premium feel', size: 16, color: '#10b981' },
        { text: 'love it', size: 19, color: '#10b981' },
        { text: 'best in class', size: 15, color: '#10b981' },
        { text: 'smooth texture', size: 14, color: '#10b981' },
        { text: 'highly recommend', size: 18, color: '#10b981' },
        { text: 'amazing product', size: 16, color: '#10b981' },
    ],
    negative: [
        { text: 'quality issues', size: 15, color: '#ef4444' },
        { text: 'late delivery', size: 14, color: '#ef4444' },
        { text: 'overpriced', size: 13, color: '#ef4444' },
        { text: 'broke quickly', size: 12, color: '#ef4444' },
        { text: 'misleading', size: 11, color: '#ef4444' },
    ],
    neutral: [
        { text: 'decent', size: 13, color: '#6b7280' },
        { text: 'average', size: 12, color: '#6b7280' },
        { text: 'okay product', size: 11, color: '#6b7280' },
    ],
};

// --- Website Traffic Data ---
const TRAFFIC_DATA = {};
COMPANIES.forEach(c => {
    const base = c.id === 'lenskart' ? 3200000 :
                 c.id === 'boat' ? 2100000 :
                 c.id === 'mamaearth' ? 1800000 :
                 c.id === 'bewakoof' ? 1400000 :
                 c.id === 'wakefit' ? 800000 :
                 c.id === 'sugar' ? 650000 :
                 c.id === 'mokobara' ? 280000 :
                 150000 + Math.random() * 500000;
    const growth = c.id === 'mokobara' ? 0.9 :
                   c.id === 'wakefit' ? 0.6 :
                   c.id === 'thewholetruthhfoods' ? 0.65 :
                   c.id === 'sugar' ? 0.4 :
                   0.05 + Math.random() * 0.3;

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
    const redditBase = c.id === 'boat' ? 120 :
                       c.id === 'mamaearth' ? 95 :
                       c.id === 'lenskart' ? 80 :
                       c.id === 'mokobara' ? 110 :
                       c.id === 'wakefit' ? 70 :
                       15 + Math.random() * 60;
    const igBase = c.id === 'sugar' ? 900 :
                   c.id === 'mamaearth' ? 850 :
                   c.id === 'boat' ? 780 :
                   c.id === 'mokobara' ? 650 :
                   c.id === 'bewakoof' ? 700 :
                   150 + Math.random() * 500;

    SOCIAL_DATA[c.id] = {
        reddit: {
            mentions: Math.round(redditBase * 3),
            mentionsTrend: generateWeeklyTimeSeries(12, redditBase, 0.4, 0.3),
            sentiment: Math.round(55 + Math.random() * 30),
            topSubreddits: ['r/IndianSkincareAddicts', 'r/india', 'r/indiashopping', 'r/IndianFashionAddicts'],
        },
        instagram: {
            mentions: Math.round(igBase * 4),
            mentionsTrend: generateWeeklyTimeSeries(12, igBase, 0.35, 0.25),
            sentiment: Math.round(60 + Math.random() * 25),
            engagementRate: parseFloat((2 + Math.random() * 5).toFixed(1)),
        },
        viralScore: Math.round(20 + Math.random() * 80),
    };
});

// --- Social Feed Posts (sample) ---
const SOCIAL_POSTS = [
    {
        source: 'reddit',
        subreddit: 'r/IndianSkincareAddicts',
        date: '2026-02-15',
        content: 'Has anyone tried the new Mamaearth Vitamin C range? Seeing it everywhere on Instagram. The serum actually seems to work better than their earlier formulation.',
        upvotes: 342,
        comments: 87,
        company: 'mamaearth',
    },
    {
        source: 'reddit',
        subreddit: 'r/india',
        date: '2026-02-14',
        content: 'Mokobara luggage review after 6 months of heavy travel. Build quality is genuinely impressive compared to American Tourister at similar price. The brand is growing fast.',
        upvotes: 891,
        comments: 234,
        company: 'mokobara',
    },
    {
        source: 'instagram',
        date: '2026-02-16',
        content: 'Unboxing my new boAt Airdopes 311 Pro - sound quality is insane for this price range. Bass is thumping and the ANC works surprisingly well. @boat.nirvana killing it!',
        likes: 4521,
        comments: 312,
        company: 'boat',
    },
    {
        source: 'reddit',
        subreddit: 'r/indiashopping',
        date: '2026-02-13',
        content: 'The Whole Truth protein bars are honestly the cleanest label product in India right now. No added sugar, no preservatives. Their peanut butter is game-changing too.',
        upvotes: 567,
        comments: 145,
        company: 'thewholetruthhfoods',
    },
    {
        source: 'instagram',
        date: '2026-02-15',
        content: 'Wakefit just launched their new ergonomic office chairs and the reviews are incredible. WFH setup complete! The mattress + chair combo is a no-brainer.',
        likes: 2834,
        comments: 189,
        company: 'wakefit',
    },
    {
        source: 'reddit',
        subreddit: 'r/IndianFashionAddicts',
        date: '2026-02-12',
        content: 'SUGAR Cosmetics has really upped their game with the new matte lip crayons. Quality rivals MAC at 1/3rd the price. Seeing them pop up in every mall now.',
        upvotes: 423,
        comments: 98,
        company: 'sugar',
    },
    {
        source: 'instagram',
        date: '2026-02-14',
        content: 'Lenskart Gold membership is such a steal. Bought 2 pairs of premium frames + lenses for under 3000. Their try-at-home is the smoothest D2C experience in India.',
        likes: 3612,
        comments: 267,
        company: 'lenskart',
    },
    {
        source: 'reddit',
        subreddit: 'r/india',
        date: '2026-02-11',
        content: 'Yogabar oats and muesli review. Taste is actually good compared to other health foods. Finding them in every Reliance/DMart now. Distribution seems to have expanded massively.',
        upvotes: 289,
        comments: 76,
        company: 'yogabar',
    },
    {
        source: 'instagram',
        date: '2026-02-13',
        content: 'Plum Goodness 10% Niacinamide serum is my new HG product. Cleared my acne scars in 3 weeks. Clean beauty that actually works! @plaboratories #PlumGoodness',
        likes: 5123,
        comments: 421,
        company: 'plum',
    },
    {
        source: 'reddit',
        subreddit: 'r/indiashopping',
        date: '2026-02-10',
        content: 'Noise ColorFit Pro 5 vs boAt Wave Call 2 - detailed comparison. Noise display is better, boAt has better call quality. Both great at the price point.',
        upvotes: 712,
        comments: 198,
        company: 'noise',
    },
];

// --- Composite / Breakout Score ---
function calculateCompositeScore(companyId) {
    const gt = GOOGLE_TRENDS_DATA[companyId];
    const ec = ECOMMERCE_DATA[companyId];
    const tr = TRAFFIC_DATA[companyId];
    const so = SOCIAL_DATA[companyId];

    // Normalize signals to 0-100
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
