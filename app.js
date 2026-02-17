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
        case 'brand-lookup': /* no-op, stays as-is */ break;
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

function valuationBadge(val) {
    if (!val) return '';
    return `<span class="valuation-badge">${val}</span>`;
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
            <td>${valuationBadge(c.estValuation)}</td>
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
            <td>${valuationBadge(c.estValuation)}</td>
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
    populateCompanySelect('reviewSummaryCompanySelect');
    populateCompanySelect('ecommMoodCompanySelect');
    renderReviewSummary();
    renderEcommMoodTimeline();
    renderReviewVolumeChart('amazon');
    renderRatingTrendChart('amazon');
    renderSentimentDonut();
    renderReviewKeywords();
    renderEcommerceTable();
}

function switchEcommPlatform(platform, btn) {
    document.querySelectorAll('#panel-ecommerce .platform-toggle .platform-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderReviewVolumeChart(platform);
    renderRatingTrendChart(platform);
    renderReviewSummary();
}

// --- Review Summary Rendering ---
function renderReviewSummary() {
    const companyId = document.getElementById('reviewSummaryCompanySelect').value || COMPANIES[0].id;
    const company = COMPANIES.find(c => c.id === companyId);
    const reviewData = ECOMMERCE_DATA[companyId].reviewSummary;
    const container = document.getElementById('reviewSummaryContent');

    if (!reviewData) {
        container.innerHTML = '<div style="color:var(--text-muted); text-align:center; padding:20px;">No review summary available for this company.</div>';
        return;
    }

    // Determine active platform
    const activeBtn = document.querySelector('#panel-ecommerce .platform-toggle .platform-btn.active');
    const activePlatform = activeBtn ? activeBtn.textContent.toLowerCase().trim() : 'amazon';

    let platformsToShow = [];
    if (activePlatform === 'both') {
        platformsToShow = ['amazon', 'myntra'];
    } else if (activePlatform === 'myntra') {
        platformsToShow = ['myntra'];
    } else {
        platformsToShow = ['amazon'];
    }

    let html = '<div class="review-summary-grid">';

    platformsToShow.forEach(platform => {
        const pData = reviewData[platform];
        const platformLabel = platform === 'amazon' ? 'Amazon' : 'Myntra';
        const platformColor = platform === 'amazon' ? '#ff9900' : '#ff3f6c';

        html += `
        <div class="review-summary-platform">
            <div class="review-summary-platform-header">
                <span class="review-platform-badge" style="background: ${platformColor}20; color: ${platformColor};">${platformLabel}</span>
            </div>
            <div class="review-summary-body">
                <p class="review-summary-text">${pData.summary}</p>
                <div class="review-likes-dislikes">
                    <div class="review-column">
                        <div class="review-column-header likes-header">What consumers love</div>
                        <ul class="review-list likes-list">
                            ${pData.topLikes.map(l => `<li>${l}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="review-column">
                        <div class="review-column-header dislikes-header">What consumers dislike</div>
                        <ul class="review-list dislikes-list">
                            ${pData.topDislikes.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
    });

    html += '</div>';
    container.innerHTML = html;
}

// --- E-commerce Mood Timeline ---
function renderEcommMoodTimeline() {
    const companyId = document.getElementById('ecommMoodCompanySelect').value || COMPANIES[0].id;
    const company = COMPANIES.find(c => c.id === companyId);
    const moodData = SOCIAL_DATA[companyId]?.moodTimeline?.ecommerce;
    const container = document.getElementById('ecommMoodTimelineContent');

    if (!moodData || moodData.length === 0) {
        container.innerHTML = '<div style="color:var(--text-muted); text-align:center; padding:20px;">No mood timeline data available.</div>';
        return;
    }

    container.innerHTML = buildMoodTimeline(moodData, company.color);
}

function buildMoodTimeline(entries, color) {
    return `<div class="mood-timeline">
        ${entries.map((entry, i) => {
            const moodColor = entry.score >= 75 ? 'var(--accent-green)' :
                              entry.score >= 60 ? 'var(--accent-blue)' :
                              entry.score >= 45 ? 'var(--accent-yellow)' :
                              'var(--accent-red)';
            const isLast = i === entries.length - 1;
            return `<div class="mood-timeline-entry ${isLast ? 'mood-current' : ''}">
                <div class="mood-timeline-marker">
                    <div class="mood-dot" style="background:${moodColor};"></div>
                    ${!isLast ? '<div class="mood-line"></div>' : ''}
                </div>
                <div class="mood-timeline-content">
                    <div class="mood-timeline-header">
                        <span class="mood-quarter">${entry.quarter}</span>
                        <span class="mood-badge" style="background:${moodColor}20; color:${moodColor};">${entry.mood}</span>
                        <span class="mood-score" style="color:${moodColor};">${entry.score}/100</span>
                    </div>
                    <p class="mood-description">${entry.theme}</p>
                </div>
            </div>`;
        }).join('')}
    </div>`;
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
            <td>${valuationBadge(c.estValuation)}</td>
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
    populateCompanySelect('socialSummaryCompanySelect');
    populateCompanySelect('socialMoodCompanySelect');
    renderSocialCommentarySummary();
    renderSocialMoodTimeline();
    renderSocialMentionsChart('reddit');
    renderSocialSentimentChart();
    renderSocialFeed();
    renderSocialTable();
}

function switchSocialPlatform(platform, btn) {
    document.querySelectorAll('#panel-social .platform-toggle .platform-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSocialMentionsChart(platform);
    renderSocialCommentarySummary();
    renderSocialFeed();
}

// --- Social Commentary Summary (per-company, like e-commerce review summaries) ---
function renderSocialCommentarySummary() {
    const companyId = document.getElementById('socialSummaryCompanySelect').value || COMPANIES[0].id;
    const company = COMPANIES.find(c => c.id === companyId);
    const summaryData = SOCIAL_DATA[companyId]?.socialSummary;
    const container = document.getElementById('socialSummaryContent');

    if (!summaryData) {
        container.innerHTML = '<div style="color:var(--text-muted); text-align:center; padding:20px;">No social commentary data available.</div>';
        return;
    }

    // Determine active platform
    const activeBtn = document.querySelector('#panel-social .platform-toggle .platform-btn.active');
    const activePlatform = activeBtn ? activeBtn.textContent.toLowerCase().trim() : 'reddit';

    let platformsToShow = [];
    if (activePlatform === 'all') {
        platformsToShow = ['reddit', 'instagram', 'linkedin'];
    } else if (activePlatform === 'instagram') {
        platformsToShow = ['instagram'];
    } else if (activePlatform === 'linkedin') {
        platformsToShow = ['linkedin'];
    } else {
        platformsToShow = ['reddit'];
    }

    const platformConfig = {
        reddit: { label: 'Reddit', color: '#ff4500' },
        instagram: { label: 'Instagram', color: '#e1306c' },
        linkedin: { label: 'LinkedIn', color: '#0a66c2' },
    };

    let html = `<div class="review-summary-grid ${platformsToShow.length === 3 ? 'three-col' : ''}">`;

    platformsToShow.forEach(platform => {
        const pData = summaryData[platform];
        if (!pData) return;
        const cfg = platformConfig[platform];

        html += `
        <div class="review-summary-platform">
            <div class="review-summary-platform-header">
                <span class="review-platform-badge" style="background: ${cfg.color}20; color: ${cfg.color};">${cfg.label}</span>
            </div>
            <div class="review-summary-body">
                <p class="review-summary-text">${pData.summary}</p>
                <div class="review-likes-dislikes">
                    <div class="review-column">
                        <div class="review-column-header likes-header">What people are saying positively</div>
                        <ul class="review-list likes-list">
                            ${pData.topLikes.map(l => `<li>${l}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="review-column">
                        <div class="review-column-header dislikes-header">Concerns & criticisms</div>
                        <ul class="review-list dislikes-list">
                            ${pData.topDislikes.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
    });

    html += '</div>';
    container.innerHTML = html;
}

// --- Social Mood Timeline ---
function renderSocialMoodTimeline() {
    const companyId = document.getElementById('socialMoodCompanySelect').value || COMPANIES[0].id;
    const company = COMPANIES.find(c => c.id === companyId);
    const moodData = SOCIAL_DATA[companyId]?.moodTimeline?.social;
    const container = document.getElementById('socialMoodTimelineContent');

    if (!moodData || moodData.length === 0) {
        container.innerHTML = '<div style="color:var(--text-muted); text-align:center; padding:20px;">No mood timeline data available.</div>';
        return;
    }

    container.innerHTML = buildMoodTimeline(moodData, company.color);
}

function renderSocialMentionsChart(platform) {
    destroyChart('socialMentions');
    const companies = getFilteredCompanies().slice(0, 6);
    const ctx = document.getElementById('socialMentionsChart').getContext('2d');

    const datasets = [];
    companies.forEach(c => {
        if (platform === 'all' || platform === 'reddit') {
            const ts = SOCIAL_DATA[c.id].reddit.mentionsTrend;
            datasets.push({
                label: c.name + (platform === 'all' ? ' (Reddit)' : ''),
                data: ts.map(d => d.value),
                borderColor: c.color,
                borderWidth: 2,
                fill: false,
            });
        }
        if (platform === 'all' || platform === 'instagram') {
            const ts = SOCIAL_DATA[c.id].instagram.mentionsTrend;
            datasets.push({
                label: c.name + (platform === 'all' ? ' (IG)' : ''),
                data: ts.map(d => d.value),
                borderColor: c.color,
                borderDash: platform === 'all' ? [5, 5] : [],
                borderWidth: 2,
                fill: false,
            });
        }
        if (platform === 'all' || platform === 'linkedin') {
            const ts = SOCIAL_DATA[c.id].linkedin.mentionsTrend;
            datasets.push({
                label: c.name + (platform === 'all' ? ' (LI)' : ''),
                data: ts.map(d => d.value),
                borderColor: c.color,
                borderDash: platform === 'all' ? [2, 2] : [],
                borderWidth: 2,
                fill: false,
            });
        }
    });

    const key = platform === 'instagram' ? 'instagram' : platform === 'linkedin' ? 'linkedin' : 'reddit';
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
                    label: 'Reddit',
                    data: companies.map(c => SOCIAL_DATA[c.id].reddit.sentiment),
                    backgroundColor: 'rgba(255, 69, 0, 0.5)',
                    borderRadius: 4,
                },
                {
                    label: 'Instagram',
                    data: companies.map(c => SOCIAL_DATA[c.id].instagram.sentiment),
                    backgroundColor: 'rgba(225, 48, 108, 0.5)',
                    borderRadius: 4,
                },
                {
                    label: 'LinkedIn',
                    data: companies.map(c => SOCIAL_DATA[c.id].linkedin.sentiment),
                    backgroundColor: 'rgba(10, 102, 194, 0.5)',
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
    // Filter posts based on active platform
    const activeBtn = document.querySelector('#panel-social .platform-toggle .platform-btn.active');
    const activePlatform = activeBtn ? activeBtn.textContent.toLowerCase().trim() : 'reddit';

    let filteredPosts = SOCIAL_POSTS;
    if (activePlatform !== 'all') {
        filteredPosts = SOCIAL_POSTS.filter(p => p.source === activePlatform);
    }

    container.innerHTML = filteredPosts.map(post => {
        const sourceClass = post.source === 'reddit' ? 'source-reddit' :
                           post.source === 'linkedin' ? 'source-linkedin' : 'source-instagram';
        const sourceLabel = post.source === 'reddit' ? post.subreddit :
                           post.source === 'linkedin' ? 'LinkedIn' : 'Instagram';

        let metricsHtml = '';
        if (post.source === 'reddit') {
            metricsHtml = `<span>${post.upvotes} upvotes</span><span>${post.comments} comments</span>`;
        } else if (post.source === 'linkedin') {
            metricsHtml = `<span>${formatNumber(post.likes)} likes</span><span>${post.comments} comments</span>`;
            if (post.author) {
                metricsHtml += `<span style="color: #0a66c2;">${post.author} &middot; ${post.authorRole}</span>`;
            }
        } else {
            metricsHtml = `<span>${formatNumber(post.likes)} likes</span><span>${post.comments} comments</span>`;
        }

        return `<div class="social-post">
            <div class="social-post-header">
                <span class="social-post-source ${sourceClass}">
                    ${sourceLabel}
                </span>
                <span class="social-post-date">${post.date}</span>
            </div>
            <div class="social-post-content">${post.content}</div>
            <div class="social-post-metrics">
                ${metricsHtml}
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
        const avgSentiment = Math.round((d.reddit.sentiment + d.instagram.sentiment + d.linkedin.sentiment) / 3);
        return `<tr>
            <td><strong style="color:${c.color}">${c.name}</strong></td>
            <td>${formatNumber(d.reddit.mentions)}</td>
            <td>${formatNumber(d.instagram.mentions)}</td>
            <td>${formatNumber(d.linkedin.mentions)}</td>
            <td>${d.instagram.engagementRate}%</td>
            <td><span class="${avgSentiment > 60 ? 'trend-up' : 'trend-down'}">${avgSentiment}%</span></td>
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
            <div class="breakout-sector">${c.sectorLabel} &middot; ${c.estValuation || 'N/A'}</div>
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
            <div class="watchlist-sector">${c.sectorLabel} &middot; ${valuationBadge(c.estValuation)}</div>
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
    renderWatchlist();
}

// --- Brand Lookup ---
function quickLookup(brandName) {
    document.getElementById('brandLookupInput').value = brandName;
    performBrandLookup();
}

function performBrandLookup() {
    const input = document.getElementById('brandLookupInput').value.trim();
    if (!input) return;

    const btn = document.getElementById('brandLookupBtn');
    btn.textContent = 'Generating...';
    btn.disabled = true;

    // Simulate a loading delay
    setTimeout(() => {
        btn.textContent = 'Generate Signals';
        btn.disabled = false;
        renderBrandLookupResults(input);
    }, 1200);
}

function renderBrandLookupResults(brandName) {
    const resultsDiv = document.getElementById('brandLookupResults');
    const emptyDiv = document.getElementById('brandLookupEmpty');

    emptyDiv.style.display = 'none';
    resultsDiv.style.display = 'block';

    // Check if already tracked
    const existing = COMPANIES.find(c =>
        c.name.toLowerCase() === brandName.toLowerCase() ||
        c.website.toLowerCase().includes(brandName.toLowerCase().replace(/\s+/g, ''))
    );

    if (existing) {
        const scores = COMPOSITE_SCORES[existing.id];
        const gt = GOOGLE_TRENDS_DATA[existing.id];
        const tr = TRAFFIC_DATA[existing.id];
        const so = SOCIAL_DATA[existing.id];
        const ec = ECOMMERCE_DATA[existing.id];
        const signal = COMPANY_SIGNALS[existing.id];

        resultsDiv.innerHTML = `
            <div class="lookup-already-tracked">Already in your watchlist</div>
            ${buildBrandCard(existing.name, existing.color, existing.sectorLabel, existing.estValuation, scores, gt, tr, so, ec, signal)}
        `;
        return;
    }

    // Generate simulated data for any new brand
    const color = '#' + Math.floor(Math.random() * 0xCCCCCC + 0x333333).toString(16);
    const sectorGuess = guessSector(brandName);

    const simScores = {
        composite: Math.round(35 + Math.random() * 45),
        google: Math.round(15 + Math.random() * 60),
        reviews: Math.round(50 + Math.random() * 35),
        traffic: Math.round(30 + Math.random() * 50),
        social: Math.round(20 + Math.random() * 60),
    };
    const simGt = {
        currentIndex: simScores.google,
        change30d: Math.round(-5 + Math.random() * 40),
        change90d: Math.round(-10 + Math.random() * 60),
    };
    const simTr = {
        momGrowth: Math.round(-5 + Math.random() * 45),
        estVisits: formatNumber(Math.round(50000 + Math.random() * 800000)),
    };
    const simSo = {
        viralScore: simScores.social,
        redditMentions: Math.round(20 + Math.random() * 300),
        igMentions: Math.round(100 + Math.random() * 2000),
    };
    const simEc = {
        amazon: {
            avgRating: parseFloat((3.5 + Math.random() * 1.2).toFixed(1)),
            totalReviews: Math.round(200 + Math.random() * 5000),
            sentiment: simScores.reviews,
        },
        myntra: {
            avgRating: parseFloat((3.3 + Math.random() * 1.3).toFixed(1)),
            totalReviews: Math.round(50 + Math.random() * 2000),
            sentiment: Math.round(50 + Math.random() * 35),
        },
    };

    const strongSignals = [
        simGt.change30d > 20,
        simScores.reviews > 70,
        simTr.momGrowth > 25,
        simScores.social > 60,
    ].filter(Boolean).length;
    const signal = strongSignals >= 3 ? 'breakout' : strongSignals >= 2 ? 'trending' : simScores.composite > 45 ? 'watch' : 'declining';

    resultsDiv.innerHTML = `
        <div class="lookup-generated-label">Estimated signals for <strong>${brandName}</strong></div>
        ${buildBrandCard(brandName, color, sectorGuess, '$10-50M (Est.)', simScores, simGt, simTr, simSo, simEc, signal)}
        <div class="lookup-actions">
            <button class="btn-primary" onclick="addLookupToWatchlist('${brandName.replace(/'/g, "\\'")}', '${sectorGuess}', '${color}')">+ Add to Watchlist & Track</button>
            <span class="lookup-disclaimer">Signals are estimated based on available proxy data. Add to watchlist for ongoing tracking.</span>
        </div>
    `;
}

function buildBrandCard(name, color, sector, valuation, scores, gt, tr, so, ec, signal) {
    return `
    <div class="lookup-result-card">
        <div class="lookup-result-header">
            <div>
                <span class="lookup-brand-name" style="color:${color}">${name}</span>
                <span class="lookup-sector">${sector}</span>
            </div>
            <div style="display:flex; gap:8px; align-items:center;">
                ${valuationBadge(valuation)}
                ${signalBadge(signal)}
            </div>
        </div>

        <div class="lookup-scores-grid">
            <div class="lookup-score-card">
                <div class="lookup-score-label">Composite Score</div>
                <div class="lookup-score-value" style="color:${scores.composite > 60 ? 'var(--accent-green)' : scores.composite > 40 ? 'var(--accent-yellow)' : 'var(--accent-red)'};">${scores.composite}/100</div>
            </div>
            <div class="lookup-score-card">
                <div class="lookup-score-label">Google Trend (30d)</div>
                <div class="lookup-score-value">${trendArrow(gt.change30d)}</div>
            </div>
            <div class="lookup-score-card">
                <div class="lookup-score-label">Traffic Growth (MoM)</div>
                <div class="lookup-score-value">${trendArrow(tr.momGrowth)}</div>
            </div>
            <div class="lookup-score-card">
                <div class="lookup-score-label">Social Viral Score</div>
                <div class="lookup-score-value" style="color:var(--accent-purple);">${so.viralScore}/100</div>
            </div>
        </div>

        <div class="lookup-details-grid">
            <div class="lookup-detail-section">
                <h4>Amazon</h4>
                <div class="lookup-detail-row"><span>Rating:</span><span>${ec.amazon.avgRating}/5.0</span></div>
                <div class="lookup-detail-row"><span>Total Reviews:</span><span>${formatNumber(ec.amazon.totalReviews)}</span></div>
                <div class="lookup-detail-row"><span>Sentiment:</span><span class="${ec.amazon.sentiment > 60 ? 'trend-up' : 'trend-down'}">${ec.amazon.sentiment}%</span></div>
            </div>
            <div class="lookup-detail-section">
                <h4>Myntra</h4>
                <div class="lookup-detail-row"><span>Rating:</span><span>${ec.myntra.avgRating}/5.0</span></div>
                <div class="lookup-detail-row"><span>Total Reviews:</span><span>${formatNumber(ec.myntra.totalReviews)}</span></div>
                <div class="lookup-detail-row"><span>Sentiment:</span><span class="${ec.myntra.sentiment > 60 ? 'trend-up' : 'trend-down'}">${ec.myntra.sentiment}%</span></div>
            </div>
            <div class="lookup-detail-section">
                <h4>Social</h4>
                <div class="lookup-detail-row"><span>Reddit Mentions:</span><span>${formatNumber(so.redditMentions || so.reddit?.mentions || 0)}</span></div>
                <div class="lookup-detail-row"><span>IG Mentions:</span><span>${formatNumber(so.igMentions || so.instagram?.mentions || 0)}</span></div>
                <div class="lookup-detail-row"><span>Viral Score:</span><span>${so.viralScore}/100</span></div>
            </div>
        </div>
    </div>`;
}

function guessSector(name) {
    const lower = name.toLowerCase();
    if (/coffee|tea|food|farm|fresh|milk|delight|snack|chocolate/.test(lower)) return 'Food & Beverage';
    if (/skin|beauty|cosmetic|hair|shav|caffeine|wow|serum/.test(lower)) return 'Beauty & Personal Care';
    if (/health|ayur|vita|herb|well|fit/.test(lower)) return 'Health & Wellness';
    if (/wear|fashion|cloth|dress|shoe|bag/.test(lower)) return 'Fashion & Apparel';
    if (/home|sleep|mattress|furniture|decor/.test(lower)) return 'Home & Living';
    if (/tech|gadget|watch|phone|audio/.test(lower)) return 'Consumer Electronics';
    return 'Fashion & Apparel';
}

function addLookupToWatchlist(name, sectorLabel, color) {
    document.getElementById('newCompanyName').value = name;
    // Map sectorLabel to sector key
    const sectorMap = {
        'Food & Beverage': 'food',
        'Beauty & Personal Care': 'beauty',
        'Health & Wellness': 'health',
        'Fashion & Apparel': 'fashion',
        'Home & Living': 'home',
        'Consumer Electronics': 'electronics',
    };
    const sectorKey = sectorMap[sectorLabel] || 'fashion';
    document.getElementById('newCompanySector').value = sectorKey;
    openAddCompanyModal();
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
    const valuation = document.getElementById('newCompanyValuation').value;
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
        estValuation: valuation,
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
        reviewSummary: {
            amazon: {
                topLikes: ['Good product quality', 'Growing brand presence', 'Value for money'],
                topDislikes: ['Limited reviews so far', 'Availability can be spotty'],
                summary: `${name} is a newly tracked brand. Review data will be enriched as more customer feedback is collected.`,
            },
            myntra: {
                topLikes: ['Newly added to tracking'],
                topDislikes: ['Insufficient data yet'],
                summary: `${name} review tracking on Myntra has just started. Summary will update as data is collected.`,
            },
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
