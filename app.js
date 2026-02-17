// =====================================================
// Consumer Trend Radar - Application Logic
// =====================================================

// --- State ---
let currentPanel = 'overview';
let currentTimeRange = '30d';
let currentSector = 'all';
let charts = {};

// --- Chart.js Defaults ---
Chart.defaults.color = '#9aa0b0';
Chart.defaults.borderColor = 'rgba(42, 45, 62, 0.6)';
Chart.defaults.font.family = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
Chart.defaults.font.size = 11;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyleWidth = 8;
Chart.defaults.plugins.legend.labels.padding = 16;
Chart.defaults.elements.line.tension = 0.35;
Chart.defaults.elements.point.radius = 2;
Chart.defaults.elements.point.hoverRadius = 5;

// --- Navigation ---
function switchPanel(panelId) {
    currentPanel = panelId;
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(`panel-${panelId}`).classList.add('active');
    document.querySelector(`[data-panel="${panelId}"]`).classList.add('active');
    initPanel(panelId);
}

function initPanel(panelId) {
    switch (panelId) {
        case 'overview': initOverview(); break;
        case 'google-trends': initGoogleTrends(); break;
        case 'ecommerce': initEcommerce(); break;
        case 'traffic': initTraffic(); break;
        case 'social': initSocial(); break;
        case 'breakout': initBreakout(); break;
        case 'watchlist': initWatchlist(); break;
    }
}

// --- Utility ---
function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

function trendArrow(value) {
    if (value > 0) return `<span class="trend-up">+${value}%</span>`;
    if (value < 0) return `<span class="trend-down">${value}%</span>`;
    return `<span class="trend-neutral">0%</span>`;
}

function signalBadge(signal) {
    const labels = {
        breakout: 'Breakout',
        trending: 'Trending',
        watch: 'Watch',
        declining: 'Declining',
    };
    return `<span class="signal-badge signal-${signal}">${labels[signal]}</span>`;
}

function getHeatmapColor(value) {
    if (value >= 80) return 'rgba(16, 185, 129, 0.6)';
    if (value >= 60) return 'rgba(16, 185, 129, 0.35)';
    if (value >= 40) return 'rgba(59, 130, 246, 0.3)';
    if (value >= 20) return 'rgba(245, 158, 11, 0.25)';
    return 'rgba(239, 68, 68, 0.2)';
}

function destroyChart(key) {
    if (charts[key]) {
        charts[key].destroy();
        delete charts[key];
    }
}

function getFilteredCompanies() {
    if (currentSector === 'all') return COMPANIES;
    return COMPANIES.filter(c => c.sector === currentSector);
}

// --- Overview Panel ---
function initOverview() {
    renderOverviewHeatmap();
    renderCompositeScoreChart();
    renderTopMovers('all');
}

function renderOverviewHeatmap() {
    const companies = getFilteredCompanies();
    const platforms = ['Google Trend', 'Amazon Reviews', 'Myntra Reviews', 'Web Traffic', 'Reddit', 'Instagram', 'Composite'];

    let html = `<table class="heatmap-table"><thead><tr><th>Company</th>`;
    platforms.forEach(p => html += `<th>${p}</th>`);
    html += `</tr></thead><tbody>`;

    companies.forEach(c => {
        const scores = COMPOSITE_SCORES[c.id];
        const ec = ECOMMERCE_DATA[c.id];
        const so = SOCIAL_DATA[c.id];
        const values = [
            scores.google,
            ec.amazon.sentiment,
            ec.myntra.sentiment,
            scores.traffic,
            so.reddit.sentiment,
            so.instagram.sentiment,
            scores.composite,
        ];
        html += `<tr><td>${c.name}</td>`;
        values.forEach(v => {
            html += `<td><span class="heatmap-cell" style="background:${getHeatmapColor(v)}">${v}</span></td>`;
        });
        html += `</tr>`;
    });

    html += `</tbody></table>`;
    document.getElementById('overviewHeatmap').innerHTML = html;
}

function renderCompositeScoreChart() {
    destroyChart('compositeScore');
    const companies = getFilteredCompanies().slice(0, 6);
    const ctx = document.getElementById('compositeScoreChart').getContext('2d');

    const datasets = companies.map(c => {
        const gt = GOOGLE_TRENDS_DATA[c.id].timeSeries;
        return {
            label: c.name,
            data: gt.slice(-12).map(d => ({ x: d.date, y: d.value })),
            borderColor: c.color,
            backgroundColor: c.color + '20',
            borderWidth: 2,
            fill: false,
        };
    });

    charts.compositeScore = new Chart(ctx, {
        type: 'line',
        data: { datasets },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.6,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: { type: 'category', grid: { display: false } },
                y: { beginAtZero: false, grid: { color: 'rgba(42, 45, 62, 0.4)' } },
            },
            plugins: {
                legend: { position: 'bottom' },
            },
        },
    });
}

function renderTopMovers(filter) {
    const companies = getFilteredCompanies();
    let filtered = companies;
    if (filter === 'up') filtered = companies.filter(c => COMPANY_SIGNALS[c.id] === 'trending' || COMPANY_SIGNALS[c.id] === 'breakout');
    if (filter === 'breakout') filtered = companies.filter(c => COMPANY_SIGNALS[c.id] === 'breakout');

    const sorted = [...filtered].sort((a, b) => COMPOSITE_SCORES[b.id].composite - COMPOSITE_SCORES[a.id].composite);

    const tbody = document.getElementById('topMoversBody');
    tbody.innerHTML = sorted.map(c => {
        const scores = COMPOSITE_SCORES[c.id];
        const gt = GOOGLE_TRENDS_DATA[c.id];
        const ec = ECOMMERCE_DATA[c.id];
        const tr = TRAFFIC_DATA[c.id];
        const so = SOCIAL_DATA[c.id];
        return `<tr>
            <td><strong style="color:${c.color}">${c.name}</strong></td>
            <td>${c.sectorLabel}</td>
            <td>${trendArrow(gt.change30d)}</td>
            <td>${ec.amazon.avgRating} / ${ec.myntra.avgRating}</td>
            <td>${trendArrow(tr.momGrowth)}</td>
            <td>${so.viralScore}/100</td>
            <td><strong>${scores.composite}</strong>/100</td>
            <td>${signalBadge(COMPANY_SIGNALS[c.id])}</td>
        </tr>`;
    }).join('');
}

function filterMovers(filter, btn) {
    document.querySelectorAll('.chart-actions .chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    renderTopMovers(filter);
}

// --- Google Trends Panel ---
function initGoogleTrends() {
    populateCompanySelect('gtCompanySelect');
    renderGoogleTrendsLineChart();
    renderGoogleTrendsCompareChart();
    renderGoogleTrendsRegionChart();
    renderRisingQueries();
    renderGoogleTrendsTable();
}

function populateCompanySelect(selectId) {
    const select = document.getElementById(selectId);
    if (select.options.length > 0) return;
    getFilteredCompanies().forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        select.appendChild(opt);
    });
}

function renderGoogleTrendsLineChart() {
    destroyChart('gtLine');
    const companyId = document.getElementById('gtCompanySelect').value || COMPANIES[0].id;
    const company = COMPANIES.find(c => c.id === companyId);
    const data = GOOGLE_TRENDS_DATA[companyId].timeSeries;
    const ctx = document.getElementById('googleTrendsLineChart').getContext('2d');

    charts.gtLine = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.date),
            datasets: [{
                label: company.name + ' Search Interest',
                data: data.map(d => d.value),
                borderColor: company.color,
                backgroundColor: company.color + '20',
                borderWidth: 2,
                fill: true,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.6,
            scales: {
                x: { grid: { display: false }, ticks: { maxTicksLimit: 12 } },
                y: { beginAtZero: false, grid: { color: 'rgba(42, 45, 62, 0.4)' } },
            },
            plugins: { legend: { display: false } },
        },
    });
}

function updateGoogleTrendsChart() {
    renderGoogleTrendsLineChart();
    renderRisingQueries();
}

function renderGoogleTrendsCompareChart() {
    destroyChart('gtCompare');
    const companies = getFilteredCompanies().slice(0, 8);
    const ctx = document.getElementById('googleTrendsCompareChart').getContext('2d');

    charts.gtCompare = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: companies.map(c => c.name),
            datasets: [{
                label: 'Current Search Index',
                data: companies.map(c => GOOGLE_TRENDS_DATA[c.id].currentIndex),
                backgroundColor: companies.map(c => c.color + '80'),
                borderColor: companies.map(c => c.color),
                borderWidth: 1,
                borderRadius: 4,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.6,
            indexAxis: 'y',
            scales: {
                x: { beginAtZero: true, grid: { color: 'rgba(42, 45, 62, 0.4)' } },
                y: { grid: { display: false } },
            },
            plugins: { legend: { display: false } },
        },
    });
}

function renderGoogleTrendsRegionChart() {
    destroyChart('gtRegion');
    const companyId = document.getElementById('gtCompanySelect').value || COMPANIES[0].id;
    const regions = GOOGLE_TRENDS_DATA[companyId].regions;
    const ctx = document.getElementById('googleTrendsRegionChart').getContext('2d');

    const labels = Object.keys(regions);
    const values = Object.values(regions);

    charts.gtRegion = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Interest by Region',
                data: values,
                backgroundColor: values.map(v =>
                    v > 70 ? 'rgba(16, 185, 129, 0.5)' :
                    v > 50 ? 'rgba(59, 130, 246, 0.5)' :
                    'rgba(245, 158, 11, 0.4)'
                ),
                borderRadius: 4,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.6,
            scales: {
                x: { grid: { display: false } },
                y: { beginAtZero: true, max: 100, grid: { color: 'rgba(42, 45, 62, 0.4)' } },
            },
            plugins: { legend: { display: false } },
        },
    });
}

function renderRisingQueries() {
    const companyId = document.getElementById('gtCompanySelect').value || COMPANIES[0].id;
    const queries = GOOGLE_TRENDS_DATA[companyId].risingQueries || [];
    const container = document.getElementById('risingQueries');

    if (queries.length === 0) {
        container.innerHTML = '<div style="color: var(--text-muted); padding: 20px; text-align: center;">No rising queries data available</div>';
        return;
    }

    container.innerHTML = queries.map(q => `
        <div class="query-item">
            <span class="query-text">${q.text}</span>
            <span class="query-growth">${q.growth}</span>
        </div>
    `).join('');
}

function renderGoogleTrendsTable() {
    const companies = getFilteredCompanies();
    const sorted = [...companies].sort((a, b) =>
        GOOGLE_TRENDS_DATA[b.id].currentIndex - GOOGLE_TRENDS_DATA[a.id].currentIndex
    );
    const tbody = document.getElementById('googleTrendsTableBody');
    tbody.innerHTML = sorted.map(c => {
        const d = GOOGLE_TRENDS_DATA[c.id];
        return `<tr>
            <td><strong style="color:${c.color}">${c.name}</strong></td>
            <td>${d.currentIndex}</td>
            <td>${trendArrow(d.change30d)}</td>
            <td>${trendArrow(d.change90d)}</td>
            <td>${d.peak12m}</td>
            <td>${d.volatility}%</td>
            <td>${signalBadge(COMPANY_SIGNALS[c.id])}</td>
        </tr>`;
    }).join('');
}

// --- E-commerce Panel ---
function initEcommerce() {
    renderReviewVolumeChart('amazon');
    renderRatingTrendChart('amazon');
    renderSentimentDonut();
    renderReviewKeywords();
    renderEcommerceTable();
}

function switchEcommPlatform(platform, btn) {
    document.querySelectorAll('.platform-toggle .platform-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderReviewVolumeChart(platform);
    renderRatingTrendChart(platform);
}

function renderReviewVolumeChart(platform) {
    destroyChart('reviewVolume');
    const companies = getFilteredCompanies().slice(0, 5);
    const ctx = document.getElementById('reviewVolumeChart').getContext('2d');

    const datasets = [];
    companies.forEach(c => {
        if (platform === 'both' || platform === 'amazon') {
            const ts = ECOMMERCE_DATA[c.id].amazon.reviewTimeSeries;
            datasets.push({
                label: c.name + (platform === 'both' ? ' (Amazon)' : ''),
                data: ts.map(d => d.value),
                borderColor: c.color,
                backgroundColor: c.color + '20',
                borderWidth: 2,
                fill: false,
            });
        }
        if (platform === 'both' || platform === 'myntra') {
            const ts = ECOMMERCE_DATA[c.id].myntra.reviewTimeSeries;
            datasets.push({
                label: c.name + (platform === 'both' ? ' (Myntra)' : ''),
                data: ts.map(d => d.value),
                borderColor: c.color,
                borderDash: platform === 'both' ? [5, 5] : [],
                backgroundColor: c.color + '10',
                borderWidth: 2,
                fill: false,
            });
        }
    });

    const labels = ECOMMERCE_DATA[companies[0].id].amazon.reviewTimeSeries.map(d => d.date);

    charts.reviewVolume = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.6,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: { grid: { display: false }, ticks: { maxTicksLimit: 8 } },
                y: { beginAtZero: true, grid: { color: 'rgba(42, 45, 62, 0.4)' } },
            },
            plugins: { legend: { position: 'bottom' } },
        },
    });
}

function renderRatingTrendChart(platform) {
    destroyChart('ratingTrend');
    const companies = getFilteredCompanies().slice(0, 5);
    const ctx = document.getElementById('ratingTrendChart').getContext('2d');

    const datasets = companies.map(c => {
        const key = platform === 'myntra' ? 'myntra' : 'amazon';
        const ts = ECOMMERCE_DATA[c.id][key].ratingTimeSeries;
        return {
            label: c.name,
            data: ts.map(d => d.value),
            borderColor: c.color,
            borderWidth: 2,
            fill: false,
        };
    });

    const labels = ECOMMERCE_DATA[companies[0].id].amazon.ratingTimeSeries.map(d => d.date);

    charts.ratingTrend = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.6,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: { grid: { display: false }, ticks: { maxTicksLimit: 8 } },
                y: { min: 3, max: 5, grid: { color: 'rgba(42, 45, 62, 0.4)' } },
            },
            plugins: { legend: { position: 'bottom' } },
        },
    });
}

function renderSentimentDonut() {
    destroyChart('sentimentDonut');
    const ctx = document.getElementById('sentimentDonutChart').getContext('2d');
    const allSentiments = getFilteredCompanies().map(c => ECOMMERCE_DATA[c.id].amazon.sentiment);
    const avg = Math.round(allSentiments.reduce((a, b) => a + b, 0) / allSentiments.length);

    charts.sentimentDonut = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [{
                data: [avg, Math.round((100 - avg) * 0.6), Math.round((100 - avg) * 0.4)],
                backgroundColor: ['rgba(16, 185, 129, 0.7)', 'rgba(107, 114, 128, 0.5)', 'rgba(239, 68, 68, 0.6)'],
                borderWidth: 0,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.4,
            cutout: '65%',
            plugins: {
                legend: { position: 'bottom' },
            },
        },
    });
}

function renderReviewKeywords() {
    const container = document.getElementById('reviewKeywords');
    const allKeywords = [...REVIEW_KEYWORDS.positive, ...REVIEW_KEYWORDS.negative, ...REVIEW_KEYWORDS.neutral];
    container.innerHTML = allKeywords.map(k =>
        `<span class="keyword-tag" style="font-size:${k.size}px; color:${k.color}; border-color:${k.color}40">${k.text}</span>`
    ).join('');
}

function renderEcommerceTable() {
    const companies = getFilteredCompanies();
    const tbody = document.getElementById('ecommerceTableBody');
    let rows = [];
    companies.forEach(c => {
        ['amazon', 'myntra'].forEach(platform => {
            const d = ECOMMERCE_DATA[c.id][platform];
            rows.push(`<tr>
                <td><strong style="color:${c.color}">${c.name}</strong></td>
                <td>${platform === 'amazon' ? 'Amazon' : 'Myntra'}</td>
                <td>${formatNumber(d.totalReviews)}</td>
                <td>${d.avgRating} / 5.0</td>
                <td>${trendArrow(Math.round(d.ratingChange * 10))}</td>
                <td>${formatNumber(d.reviewVelocity)}/wk</td>
                <td><span class="${d.sentiment >= 60 ? 'trend-up' : 'trend-down'}">${d.sentiment}%</span></td>
            </tr>`);
        });
    });
    tbody.innerHTML = rows.join('');
}

// --- Traffic Panel ---
function initTraffic() {
    populateCompanySelect('trafficCompanySelect');
    renderTrafficLineChart();
    renderTrafficSourceChart();
    renderTrafficTable();
}

function updateTrafficChart() {
    renderTrafficLineChart();
    renderTrafficSourceChart();
}

function renderTrafficLineChart() {
    destroyChart('trafficLine');
    const companies = getFilteredCompanies().slice(0, 5);
    const ctx = document.getElementById('trafficLineChart').getContext('2d');

    const datasets = companies.map(c => {
        const ts = TRAFFIC_DATA[c.id].monthlyVisits;
        return {
            label: c.name,
            data: ts.map(d => d.value),
            borderColor: c.color,
            backgroundColor: c.color + '15',
            borderWidth: 2,
            fill: false,
        };
    });

    const labels = TRAFFIC_DATA[companies[0].id].monthlyVisits.map(d => d.date);

    charts.trafficLine = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.6,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: false,
                    grid: { color: 'rgba(42, 45, 62, 0.4)' },
                    ticks: { callback: v => formatNumber(v) },
                },
            },
            plugins: { legend: { position: 'bottom' } },
        },
    });
}

function renderTrafficSourceChart() {
    destroyChart('trafficSource');
    const companyId = document.getElementById('trafficCompanySelect').value || COMPANIES[0].id;
    const sources = TRAFFIC_DATA[companyId].sources;
    const ctx = document.getElementById('trafficSourceChart').getContext('2d');

    charts.trafficSource = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(sources),
            datasets: [{
                data: Object.values(sources),
                backgroundColor: [
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(236, 72, 153, 0.7)',
                    'rgba(139, 92, 246, 0.7)',
                    'rgba(6, 182, 212, 0.7)',
                ],
                borderWidth: 0,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.4,
            cutout: '55%',
            plugins: { legend: { position: 'bottom' } },
        },
    });
}

function renderTrafficTable() {
    const companies = getFilteredCompanies();
    const sorted = [...companies].sort((a, b) => {
        const aVisits = TRAFFIC_DATA[a.id].monthlyVisits;
        const bVisits = TRAFFIC_DATA[b.id].monthlyVisits;
        return bVisits[bVisits.length - 1].value - aVisits[aVisits.length - 1].value;
    });

    const tbody = document.getElementById('trafficTableBody');
    tbody.innerHTML = sorted.map(c => {
        const d = TRAFFIC_DATA[c.id];
        const latestVisits = d.monthlyVisits[d.monthlyVisits.length - 1].value;
        return `<tr>
            <td><strong style="color:${c.color}">${c.name}</strong></td>
            <td>${formatNumber(latestVisits)}</td>
            <td>${trendArrow(d.momGrowth)}</td>
            <td>${d.bounceRate}%</td>
            <td>${d.avgDuration}</td>
            <td>${d.pagesPerVisit}</td>
            <td>${signalBadge(COMPANY_SIGNALS[c.id])}</td>
        </tr>`;
    }).join('');
}

// --- Social Panel ---
function initSocial() {
    renderSocialMentionsChart('reddit');
    renderSocialSentimentChart();
    renderSocialFeed();
    renderSocialTable();
}

function switchSocialPlatform(platform, btn) {
    document.querySelectorAll('#panel-social .platform-toggle .platform-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSocialMentionsChart(platform);
}

function renderSocialMentionsChart(platform) {
    destroyChart('socialMentions');
    const companies = getFilteredCompanies().slice(0, 6);
    const ctx = document.getElementById('socialMentionsChart').getContext('2d');

    const datasets = [];
    companies.forEach(c => {
        if (platform === 'both' || platform === 'reddit') {
            const ts = SOCIAL_DATA[c.id].reddit.mentionsTrend;
            datasets.push({
                label: c.name + (platform === 'both' ? ' (Reddit)' : ''),
                data: ts.map(d => d.value),
                borderColor: c.color,
                borderWidth: 2,
                fill: false,
            });
        }
        if (platform === 'both' || platform === 'instagram') {
            const ts = SOCIAL_DATA[c.id].instagram.mentionsTrend;
            datasets.push({
                label: c.name + (platform === 'both' ? ' (IG)' : ''),
                data: ts.map(d => d.value),
                borderColor: c.color,
                borderDash: platform === 'both' ? [5, 5] : [],
                borderWidth: 2,
                fill: false,
            });
        }
    });

    const key = platform === 'instagram' ? 'instagram' : 'reddit';
    const labels = SOCIAL_DATA[companies[0].id][key].mentionsTrend.map(d => d.date);

    charts.socialMentions = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.6,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: { grid: { display: false } },
                y: { beginAtZero: true, grid: { color: 'rgba(42, 45, 62, 0.4)' } },
            },
            plugins: { legend: { position: 'bottom' } },
        },
    });
}

function renderSocialSentimentChart() {
    destroyChart('socialSentiment');
    const companies = getFilteredCompanies().slice(0, 8);
    const ctx = document.getElementById('socialSentimentChart').getContext('2d');

    charts.socialSentiment = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: companies.map(c => c.name),
            datasets: [
                {
                    label: 'Reddit Sentiment',
                    data: companies.map(c => SOCIAL_DATA[c.id].reddit.sentiment),
                    backgroundColor: 'rgba(255, 69, 0, 0.5)',
                    borderRadius: 4,
                },
                {
                    label: 'Instagram Sentiment',
                    data: companies.map(c => SOCIAL_DATA[c.id].instagram.sentiment),
                    backgroundColor: 'rgba(225, 48, 108, 0.5)',
                    borderRadius: 4,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.6,
            scales: {
                x: { grid: { display: false } },
                y: { beginAtZero: true, max: 100, grid: { color: 'rgba(42, 45, 62, 0.4)' } },
            },
            plugins: { legend: { position: 'bottom' } },
        },
    });
}

function renderSocialFeed() {
    const container = document.getElementById('socialFeed');
    container.innerHTML = SOCIAL_POSTS.map(post => {
        const isReddit = post.source === 'reddit';
        return `<div class="social-post">
            <div class="social-post-header">
                <span class="social-post-source ${isReddit ? 'source-reddit' : 'source-instagram'}">
                    ${isReddit ? post.subreddit : 'Instagram'}
                </span>
                <span class="social-post-date">${post.date}</span>
            </div>
            <div class="social-post-content">${post.content}</div>
            <div class="social-post-metrics">
                ${isReddit
                    ? `<span>${post.upvotes} upvotes</span><span>${post.comments} comments</span>`
                    : `<span>${formatNumber(post.likes)} likes</span><span>${post.comments} comments</span>`
                }
                <span style="color: var(--accent-green);">Company: ${COMPANIES.find(c => c.id === post.company)?.name || post.company}</span>
            </div>
        </div>`;
    }).join('');
}

function renderSocialTable() {
    const companies = getFilteredCompanies();
    const sorted = [...companies].sort((a, b) => SOCIAL_DATA[b.id].viralScore - SOCIAL_DATA[a.id].viralScore);

    const tbody = document.getElementById('socialTableBody');
    tbody.innerHTML = sorted.map(c => {
        const d = SOCIAL_DATA[c.id];
        return `<tr>
            <td><strong style="color:${c.color}">${c.name}</strong></td>
            <td>${formatNumber(d.reddit.mentions)}</td>
            <td>${formatNumber(d.instagram.mentions)}</td>
            <td>${d.instagram.engagementRate}%</td>
            <td><span class="${d.reddit.sentiment > 60 ? 'trend-up' : 'trend-down'}">${d.reddit.sentiment}%</span></td>
            <td>${d.viralScore}/100</td>
            <td>${signalBadge(COMPANY_SIGNALS[c.id])}</td>
        </tr>`;
    }).join('');
}

// --- Breakout Detector ---
function initBreakout() {
    renderBreakoutCards();
    renderBreakoutScoreChart();
    renderCorrelationMatrix();
}

function renderBreakoutCards() {
    const breakoutCompanies = COMPANIES.filter(c => COMPANY_SIGNALS[c.id] === 'breakout');
    const container = document.getElementById('breakoutCards');

    if (breakoutCompanies.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align:center; color: var(--text-muted); padding: 40px;">No breakout signals detected in this period</div>';
        return;
    }

    container.innerHTML = breakoutCompanies.map(c => {
        const scores = COMPOSITE_SCORES[c.id];
        const gt = GOOGLE_TRENDS_DATA[c.id];
        const tr = TRAFFIC_DATA[c.id];
        const so = SOCIAL_DATA[c.id];

        return `<div class="breakout-card">
            <div class="breakout-card-header">
                <span class="breakout-company-name" style="color:${c.color}">${c.name}</span>
                <span class="breakout-score">${scores.composite}/100</span>
            </div>
            <div class="breakout-sector">${c.sectorLabel}</div>
            <div class="breakout-signals">
                <div class="breakout-signal-item">
                    <span class="breakout-signal-label">Google Trend (30d)</span>
                    <span class="breakout-signal-value trend-up">+${gt.change30d}%</span>
                </div>
                <div class="breakout-signal-item">
                    <span class="breakout-signal-label">Traffic Growth (MoM)</span>
                    <span class="breakout-signal-value trend-up">+${tr.momGrowth}%</span>
                </div>
                <div class="breakout-signal-item">
                    <span class="breakout-signal-label">Social Viral Score</span>
                    <span class="breakout-signal-value" style="color: var(--accent-yellow);">${so.viralScore}/100</span>
                </div>
                <div class="breakout-signal-item">
                    <span class="breakout-signal-label">Review Sentiment</span>
                    <span class="breakout-signal-value trend-up">${scores.reviews}%</span>
                </div>
            </div>
        </div>`;
    }).join('');
}

function renderBreakoutScoreChart() {
    destroyChart('breakoutScore');
    const breakoutCompanies = COMPANIES
        .filter(c => COMPANY_SIGNALS[c.id] === 'breakout' || COMPANY_SIGNALS[c.id] === 'trending')
        .slice(0, 6);
    const ctx = document.getElementById('breakoutScoreChart').getContext('2d');

    const datasets = breakoutCompanies.map(c => ({
        label: c.name,
        data: GOOGLE_TRENDS_DATA[c.id].timeSeries.slice(-12).map(d => d.value),
        borderColor: c.color,
        backgroundColor: c.color + '15',
        borderWidth: 2.5,
        fill: false,
    }));

    const labels = GOOGLE_TRENDS_DATA[breakoutCompanies[0]?.id || COMPANIES[0].id]
        .timeSeries.slice(-12).map(d => d.date);

    charts.breakoutScore = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2.2,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: { grid: { display: false } },
                y: { beginAtZero: false, grid: { color: 'rgba(42, 45, 62, 0.4)' } },
            },
            plugins: { legend: { position: 'bottom' } },
        },
    });
}

function renderCorrelationMatrix() {
    const signals = ['Google Trend', 'Amazon Rating', 'Myntra Rating', 'Web Traffic', 'Reddit Buzz', 'IG Buzz'];
    // Simulated correlation values
    const correlations = [
        [1.00, 0.42, 0.38, 0.72, 0.55, 0.61],
        [0.42, 1.00, 0.78, 0.35, 0.29, 0.31],
        [0.38, 0.78, 1.00, 0.30, 0.25, 0.34],
        [0.72, 0.35, 0.30, 1.00, 0.48, 0.52],
        [0.55, 0.29, 0.25, 0.48, 1.00, 0.67],
        [0.61, 0.31, 0.34, 0.52, 0.67, 1.00],
    ];

    function corrColor(v) {
        if (v >= 0.7) return 'rgba(16, 185, 129, 0.6)';
        if (v >= 0.5) return 'rgba(16, 185, 129, 0.35)';
        if (v >= 0.3) return 'rgba(59, 130, 246, 0.3)';
        return 'rgba(107, 114, 128, 0.2)';
    }

    let html = `<table class="heatmap-table"><thead><tr><th></th>`;
    signals.forEach(s => html += `<th>${s}</th>`);
    html += `</tr></thead><tbody>`;

    signals.forEach((row, i) => {
        html += `<tr><td>${row}</td>`;
        correlations[i].forEach(v => {
            html += `<td><span class="heatmap-cell" style="background:${corrColor(v)}">${v.toFixed(2)}</span></td>`;
        });
        html += `</tr>`;
    });

    html += `</tbody></table>`;
    document.getElementById('correlationMatrix').innerHTML = html;
}

// --- Watchlist ---
function initWatchlist() {
    renderWatchlist();
}

function renderWatchlist() {
    const companies = getFilteredCompanies();
    const sorted = [...companies].sort((a, b) => COMPOSITE_SCORES[b.id].composite - COMPOSITE_SCORES[a.id].composite);

    const container = document.getElementById('watchlistGrid');
    container.innerHTML = sorted.map(c => {
        const scores = COMPOSITE_SCORES[c.id];
        const gt = GOOGLE_TRENDS_DATA[c.id];
        const tr = TRAFFIC_DATA[c.id];
        const so = SOCIAL_DATA[c.id];
        const signal = COMPANY_SIGNALS[c.id];

        return `<div class="watchlist-card" onclick="switchPanel('overview')">
            <div class="watchlist-card-header">
                <span class="watchlist-company" style="color:${c.color}">${c.name}</span>
                ${signalBadge(signal)}
            </div>
            <div class="watchlist-sector">${c.sectorLabel}</div>
            <div class="watchlist-metrics">
                <div class="watchlist-metric">
                    <span class="watchlist-metric-label">Composite</span>
                    <span class="watchlist-metric-value">${scores.composite}/100</span>
                </div>
                <div class="watchlist-metric">
                    <span class="watchlist-metric-label">Google Trend</span>
                    <span class="watchlist-metric-value">${trendArrow(gt.change30d)}</span>
                </div>
                <div class="watchlist-metric">
                    <span class="watchlist-metric-label">Traffic MoM</span>
                    <span class="watchlist-metric-value">${trendArrow(tr.momGrowth)}</span>
                </div>
                <div class="watchlist-metric">
                    <span class="watchlist-metric-label">Social Viral</span>
                    <span class="watchlist-metric-value">${so.viralScore}/100</span>
                </div>
            </div>
        </div>`;
    }).join('');
}

function sortWatchlist(sortBy) {
    // Re-render with different sort
    renderWatchlist();
}

// --- Global Controls ---
function updateTimeRange(range) {
    currentTimeRange = range;
    initPanel(currentPanel);
}

function updateSectorFilter(sector) {
    currentSector = sector;
    document.getElementById('companyCount').textContent = getFilteredCompanies().length + ' companies';
    initPanel(currentPanel);
}

function handleSearch(query) {
    // Simple search filter — highlight matching in current panel
    const lower = query.toLowerCase();
    document.querySelectorAll('.data-table tbody tr').forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(lower) || !query ? '' : 'none';
    });
}

function openAddCompanyModal() {
    document.getElementById('addCompanyModal').classList.add('show');
}

function closeAddCompanyModal() {
    document.getElementById('addCompanyModal').classList.remove('show');
}

function addCompany() {
    const name = document.getElementById('newCompanyName').value.trim();
    if (!name) return;

    const sector = document.getElementById('newCompanySector').value;
    const url = document.getElementById('newCompanyUrl').value.trim();
    const id = name.toLowerCase().replace(/\s+/g, '');

    const sectorLabels = {
        beauty: 'Beauty & Personal Care',
        food: 'Food & Beverage',
        fashion: 'Fashion & Apparel',
        health: 'Health & Wellness',
        home: 'Home & Living',
        electronics: 'Consumer Electronics',
    };

    const colors = ['#f43f5e', '#0ea5e9', '#d946ef', '#22d3ee', '#a3e635', '#fb923c'];
    const color = colors[COMPANIES.length % colors.length];

    const newCompany = {
        id,
        name,
        sector,
        sectorLabel: sectorLabels[sector],
        website: url || `${id}.com`,
        color,
    };

    COMPANIES.push(newCompany);

    // Generate data for new company
    GOOGLE_TRENDS_DATA[id] = {
        timeSeries: generateWeeklyTimeSeries(52, 20 + Math.random() * 30, 0.3, 0.2),
        currentIndex: 0, change30d: 0, change90d: 0, peak12m: 0, volatility: 10,
        regions: {
            'Maharashtra': Math.round(40 + Math.random() * 40),
            'Karnataka': Math.round(30 + Math.random() * 40),
            'Delhi NCR': Math.round(35 + Math.random() * 40),
        },
        risingQueries: [{ text: `${name.toLowerCase()} review`, growth: '+200%' }],
    };
    const ts = GOOGLE_TRENDS_DATA[id].timeSeries;
    GOOGLE_TRENDS_DATA[id].currentIndex = ts[ts.length - 1].value;
    GOOGLE_TRENDS_DATA[id].peak12m = Math.max(...ts.map(d => d.value));

    ECOMMERCE_DATA[id] = {
        amazon: {
            totalReviews: Math.round(500 + Math.random() * 2000),
            avgRating: parseFloat((3.5 + Math.random() * 1).toFixed(1)),
            ratingChange: 0.1,
            reviewVelocity: Math.round(50 + Math.random() * 200),
            sentiment: Math.round(55 + Math.random() * 30),
            reviewTimeSeries: generateWeeklyTimeSeries(26, 50, 0.3, 0.3),
            ratingTimeSeries: generateWeeklyTimeSeries(26, 3.8, 0.05, 0.02).map(d => ({
                ...d, value: parseFloat(Math.min(5, Math.max(3, d.value / 10 + 3)).toFixed(1))
            })),
        },
        myntra: {
            totalReviews: Math.round(200 + Math.random() * 1000),
            avgRating: parseFloat((3.3 + Math.random() * 1).toFixed(1)),
            ratingChange: 0.1,
            reviewVelocity: Math.round(30 + Math.random() * 100),
            sentiment: Math.round(50 + Math.random() * 30),
            reviewTimeSeries: generateWeeklyTimeSeries(26, 30, 0.25, 0.3),
            ratingTimeSeries: generateWeeklyTimeSeries(26, 3.6, 0.04, 0.03).map(d => ({
                ...d, value: parseFloat(Math.min(5, Math.max(3, d.value / 10 + 3)).toFixed(1))
            })),
        },
    };

    TRAFFIC_DATA[id] = {
        monthlyVisits: generateTimeSeries(12, 100000 + Math.random() * 500000, 0.3, 0.2),
        bounceRate: Math.round(30 + Math.random() * 20),
        avgDuration: `${Math.floor(2 + Math.random() * 3)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
        pagesPerVisit: parseFloat((2 + Math.random() * 3).toFixed(1)),
        sources: { 'Direct': 25, 'Organic Search': 35, 'Paid Search': 15, 'Social': 12, 'Referral': 8, 'Email': 5 },
        momGrowth: Math.round(Math.random() * 30),
    };

    SOCIAL_DATA[id] = {
        reddit: {
            mentions: Math.round(50 + Math.random() * 200),
            mentionsTrend: generateWeeklyTimeSeries(12, 20, 0.4, 0.3),
            sentiment: Math.round(55 + Math.random() * 30),
            topSubreddits: ['r/india', 'r/indiashopping'],
        },
        instagram: {
            mentions: Math.round(200 + Math.random() * 1000),
            mentionsTrend: generateWeeklyTimeSeries(12, 100, 0.35, 0.25),
            sentiment: Math.round(60 + Math.random() * 25),
            engagementRate: parseFloat((2 + Math.random() * 4).toFixed(1)),
        },
        viralScore: Math.round(20 + Math.random() * 60),
    };

    COMPOSITE_SCORES[id] = calculateCompositeScore(id);
    COMPANY_SIGNALS[id] = getSignal(id);

    document.getElementById('companyCount').textContent = COMPANIES.length + ' companies';
    closeAddCompanyModal();
    document.getElementById('newCompanyName').value = '';
    document.getElementById('newCompanyUrl').value = '';
    initPanel(currentPanel);
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
    initOverview();
    document.getElementById('companyCount').textContent = COMPANIES.length + ' companies';
});
