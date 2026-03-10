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
        case 'employee': initEmployee(); break;
        case 'hiring-linkedin': initHiringLinkedin(); break;
        case 'early-signals': initEarlySignals(); break;
        case 'breakout': initBreakout(); break;
        case 'watchlist': initWatchlist(); break;
        case 'brand-lookup': /* no-op, stays as-is */ break;
        case 'founder-linkedin': /* no-op, input-driven */ break;
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

function resetPlatformToggle(panelSelector, defaultIndex) {
    const btns = document.querySelectorAll(`${panelSelector} .platform-toggle .platform-btn`);
    btns.forEach(b => b.classList.remove('active'));
    if (btns[defaultIndex]) btns[defaultIndex].classList.add('active');
}

function showNotification(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// --- Overview Panel ---
function initOverview() {
    renderOverviewKpis();
    renderOverviewHeatmap();
    renderCompositeScoreChart();
    renderTopMovers('all');
}

function renderOverviewKpis() {
    const companies = getFilteredCompanies();
    const trendingUp = companies.filter(c => COMPANY_SIGNALS[c.id] === 'trending' || COMPANY_SIGNALS[c.id] === 'breakout').length;
    const breakout = companies.filter(c => COMPANY_SIGNALS[c.id] === 'breakout').length;
    const avgSentiment = companies.length > 0 ? Math.round(companies.reduce((s, c) => s + COMPOSITE_SCORES[c.id].reviews, 0) / companies.length) : 0;
    const totalReviews = companies.reduce((s, c) => s + ECOMMERCE_DATA[c.id].amazon.totalReviews + ECOMMERCE_DATA[c.id].myntra.totalReviews, 0);

    document.getElementById('kpiTrendingUp').textContent = trendingUp;
    document.getElementById('kpiBreakout').textContent = breakout;
    document.getElementById('kpiSentiment').textContent = avgSentiment + '%';
    document.getElementById('kpiReviews').textContent = formatNumber(totalReviews);
}

function renderOverviewHeatmap() {
    const companies = getFilteredCompanies();
    const signalInfo = {
        'Google Trend': 'Combines 90-day search trend momentum (50%) with current search index relative to 12-month peak (50%). Scale: 0-100.',
        'Amazon Reviews': 'Sentiment score derived from Amazon customer review analysis — ratio of positive to negative reviews weighted by recency. Scale: 0-100.',
        'Myntra Reviews': 'Sentiment score derived from Myntra customer review analysis — ratio of positive to negative reviews weighted by recency. Scale: 0-100.',
        'Web Traffic': 'Based on month-over-month website traffic growth rate. Formula: (MoM growth % x 2) + 50, capped at 100. Scale: 0-100.',
        'Reddit': 'Sentiment score from Reddit mentions — calculated from upvote ratios, comment tone analysis, and community engagement. Scale: 0-100.',
        'Instagram': 'Sentiment score from Instagram mentions — based on comment sentiment, engagement rate, and share velocity. Scale: 0-100.',
        'Composite': 'Weighted average: Google Trend (25%) + E-commerce Reviews (20%) + Web Traffic (30%) + Social Sentiment (25%). Scale: 0-100.',
    };
    const platforms = Object.keys(signalInfo);

    let html = `<table class="heatmap-table"><thead><tr><th>Company</th>`;
    platforms.forEach(p => {
        html += `<th>${p} <span class="signal-help-icon" data-tooltip="${signalInfo[p]}">?</span></th>`;
    });
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
    const currentValue = select.value;
    select.innerHTML = '';
    const filtered = getFilteredCompanies();
    filtered.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        select.appendChild(opt);
    });
    // Preserve selection if the company is still in the filtered list
    if (filtered.some(c => c.id === currentValue)) {
        select.value = currentValue;
    }
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
    populateEcommKpiCompanySelect();
    // Reset platform toggle to default (Amazon)
    resetPlatformToggle('#panel-ecommerce', 0);
    renderEcommerceKpis();
    renderReviewSummary();
    renderEcommMoodTimeline();
    renderReviewVolumeChart('amazon');
    renderRatingTrendChart('amazon');
    renderSentimentDonut();
    renderReviewKeywords();
    renderEcommerceTable();
}

function populateEcommKpiCompanySelect() {
    const select = document.getElementById('ecommKpiCompanySelect');
    if (!select) return;
    const companies = getFilteredCompanies();
    select.innerHTML = '<option value="all">All Companies (avg)</option>' +
        companies.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
}

function renderEcommerceKpis() {
    const selectedId = document.getElementById('ecommKpiCompanySelect')?.value || 'all';

    if (selectedId !== 'all' && ECOMMERCE_DATA[selectedId]) {
        // Single brand view
        const ec = ECOMMERCE_DATA[selectedId];
        const company = COMPANIES.find(c => c.id === selectedId);
        const brandName = company ? company.name : selectedId;

        document.getElementById('kpiAmazonRating').textContent = ec.amazon.avgRating;
        document.getElementById('kpiAmazonRatingDelta').textContent = brandName;
        document.getElementById('kpiMyntraRating').textContent = ec.myntra.avgRating;
        document.getElementById('kpiMyntraRatingDelta').textContent = brandName;
        document.getElementById('kpiTotalReviews').textContent = formatNumber(ec.amazon.totalReviews + ec.myntra.totalReviews);
        document.getElementById('kpiTotalReviewsDelta').textContent = `${brandName} — Amazon + Myntra`;
        const sentiment = Math.round((ec.amazon.sentiment + ec.myntra.sentiment) / 2);
        document.getElementById('kpiEcommSentiment').textContent = sentiment + '%';
        document.getElementById('kpiEcommSentimentDelta').textContent = brandName;
    } else {
        // Aggregate view
        const companies = getFilteredCompanies();
        if (companies.length === 0) return;
        const avgAmazon = (companies.reduce((s, c) => s + ECOMMERCE_DATA[c.id].amazon.avgRating, 0) / companies.length).toFixed(1);
        const avgMyntra = (companies.reduce((s, c) => s + ECOMMERCE_DATA[c.id].myntra.avgRating, 0) / companies.length).toFixed(1);
        const totalReviews = companies.reduce((s, c) => s + ECOMMERCE_DATA[c.id].amazon.totalReviews + ECOMMERCE_DATA[c.id].myntra.totalReviews, 0);
        const avgSentiment = Math.round(companies.reduce((s, c) => s + (ECOMMERCE_DATA[c.id].amazon.sentiment + ECOMMERCE_DATA[c.id].myntra.sentiment) / 2, 0) / companies.length);

        document.getElementById('kpiAmazonRating').textContent = avgAmazon;
        document.getElementById('kpiAmazonRatingDelta').textContent = `avg across ${companies.length} companies`;
        document.getElementById('kpiMyntraRating').textContent = avgMyntra;
        document.getElementById('kpiMyntraRatingDelta').textContent = `avg across ${companies.length} companies`;
        document.getElementById('kpiTotalReviews').textContent = formatNumber(totalReviews);
        document.getElementById('kpiTotalReviewsDelta').textContent = `Amazon + Myntra combined`;
        document.getElementById('kpiEcommSentiment').textContent = avgSentiment + '%';
        document.getElementById('kpiEcommSentimentDelta').textContent = `avg across platforms`;
    }
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
    populateCompanySelect('trafficKpiCompanySelect');
    renderTrafficKpis();
    renderTrafficLineChart();
    renderTrafficSourceChart();
    renderTrafficTable();
}

function renderTrafficKpis() {
    const companyId = document.getElementById('trafficKpiCompanySelect').value;
    if (!companyId) return;
    const company = COMPANIES.find(c => c.id === companyId);
    const d = TRAFFIC_DATA[companyId];
    const visits = d.monthlyVisits;
    const latestVisits = visits[visits.length - 1].value;
    const prevVisits = visits.length >= 2 ? visits[visits.length - 2].value : latestVisits;
    const visitGrowth = prevVisits > 0 ? Math.round(((latestVisits / prevVisits) - 1) * 100) : 0;

    document.getElementById('kpiTotalVisits').textContent = formatNumber(latestVisits);
    const visitDelta = document.getElementById('kpiTotalVisitsDelta');
    visitDelta.textContent = `${visitGrowth >= 0 ? '+' : ''}${visitGrowth}% vs previous month`;
    visitDelta.className = `kpi-delta ${visitGrowth >= 0 ? 'positive' : 'negative'}`;

    document.getElementById('kpiAvgDuration').textContent = d.avgDuration;
    document.getElementById('kpiAvgDurationDelta').textContent = `${company.name}`;
    document.getElementById('kpiAvgDurationDelta').className = 'kpi-delta positive';

    document.getElementById('kpiBounceRate').textContent = d.bounceRate + '%';
    const bounceDelta = document.getElementById('kpiBounceRateDelta');
    bounceDelta.textContent = d.bounceRate < 40 ? 'Good' : d.bounceRate < 55 ? 'Average' : 'High';
    bounceDelta.className = `kpi-delta ${d.bounceRate < 40 ? 'positive' : d.bounceRate < 55 ? '' : 'negative'}`;

    document.getElementById('kpiPagesPerVisit').textContent = d.pagesPerVisit;
    document.getElementById('kpiPagesPerVisitDelta').textContent = `MoM growth: +${d.momGrowth}%`;
    document.getElementById('kpiPagesPerVisitDelta').className = 'kpi-delta positive';
}

function updateTrafficKpiCompany() {
    renderTrafficKpis();
    // Sync the chart company select and re-render source chart
    const companyId = document.getElementById('trafficKpiCompanySelect').value;
    document.getElementById('trafficCompanySelect').value = companyId;
    renderTrafficSourceChart();
}

function updateTrafficChart() {
    renderTrafficLineChart();
    renderTrafficSourceChart();
    // Sync KPI company select
    const companyId = document.getElementById('trafficCompanySelect').value;
    document.getElementById('trafficKpiCompanySelect').value = companyId;
    renderTrafficKpis();
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
    // Reset platform toggle to default (Reddit)
    resetPlatformToggle('#panel-social', 0);
    renderSocialKpis();
    renderSocialCommentarySummary();
    renderSocialMoodTimeline();
    renderSocialMentionsChart('reddit');
    renderSocialSentimentChart();
    renderSocialFeed();
    renderSocialTable();
}

function renderSocialKpis() {
    const companies = getFilteredCompanies();
    if (companies.length === 0) return;
    const totalReddit = companies.reduce((s, c) => s + SOCIAL_DATA[c.id].reddit.mentions.reduce((a, m) => a + m.value, 0), 0);
    const totalInsta = companies.reduce((s, c) => s + SOCIAL_DATA[c.id].instagram.mentions.reduce((a, m) => a + m.value, 0), 0);
    const totalLinkedin = companies.reduce((s, c) => s + SOCIAL_DATA[c.id].linkedin.mentions.reduce((a, m) => a + m.value, 0), 0);
    const avgViral = Math.round(companies.reduce((s, c) => s + SOCIAL_DATA[c.id].viralScore, 0) / companies.length);

    document.getElementById('kpiRedditMentions').textContent = formatNumber(totalReddit);
    document.getElementById('kpiRedditMentionsDelta').textContent = `total across ${companies.length} companies`;
    document.getElementById('kpiIgMentions').textContent = formatNumber(totalInsta);
    document.getElementById('kpiIgMentionsDelta').textContent = `total across ${companies.length} companies`;
    document.getElementById('kpiLinkedinMentions').textContent = formatNumber(totalLinkedin);
    document.getElementById('kpiLinkedinMentionsDelta').textContent = `total across ${companies.length} companies`;
    document.getElementById('kpiAvgViralScore').textContent = avgViral + '/100';
    document.getElementById('kpiAvgViralScoreDelta').textContent = `avg across ${companies.length} companies`;
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
            const ts = SOCIAL_DATA[c.id].reddit.mentions;
            datasets.push({
                label: c.name + (platform === 'all' ? ' (Reddit)' : ''),
                data: ts.map(d => d.value),
                borderColor: c.color,
                borderWidth: 2,
                fill: false,
            });
        }
        if (platform === 'all' || platform === 'instagram') {
            const ts = SOCIAL_DATA[c.id].instagram.mentions;
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
            const ts = SOCIAL_DATA[c.id].linkedin.mentions;
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
    const labels = SOCIAL_DATA[companies[0].id][key].mentions.map(d => d.date);

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
        filteredPosts = SOCIAL_POSTS.filter(p => p.platform === activePlatform);
    }

    container.innerHTML = filteredPosts.map(post => {
        const sourceClass = post.platform === 'reddit' ? 'source-reddit' :
                           post.platform === 'linkedin' ? 'source-linkedin' : 'source-instagram';
        const sourceLabel = post.platform === 'reddit' ? (post.subreddit || 'Reddit') :
                           post.platform === 'linkedin' ? (post.handle || 'LinkedIn') : (post.handle || 'Instagram');

        let metricsHtml = '';
        if (post.platform === 'reddit') {
            metricsHtml = `<span>${post.upvotes} upvotes</span><span>${post.comments} comments</span>`;
        } else if (post.platform === 'linkedin') {
            metricsHtml = `<span>${formatNumber(post.likes)} likes</span><span>${post.comments} comments</span>`;
        } else {
            metricsHtml = `<span>${formatNumber(post.likes)} likes</span><span>${post.comments} comments</span>`;
        }

        return `<div class="social-post">
            <div class="social-post-header">
                <span class="social-post-source ${sourceClass}">
                    ${sourceLabel}
                </span>
                <span class="social-post-date">${post.time}</span>
            </div>
            <div class="social-post-content">${post.title}</div>
            <div class="social-post-metrics">
                ${metricsHtml}
                <span style="color: var(--accent-green);">Company: ${COMPANIES.find(c => c.id === post.brand)?.name || post.brand}</span>
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
        const redditTotal = d.reddit.mentions.reduce((sum, m) => sum + m.value, 0);
        const instaTotal = d.instagram.mentions.reduce((sum, m) => sum + m.value, 0);
        const linkedinTotal = d.linkedin.mentions.reduce((sum, m) => sum + m.value, 0);
        return `<tr>
            <td><strong style="color:${c.color}">${c.name}</strong></td>
            <td>${formatNumber(redditTotal)}</td>
            <td>${formatNumber(instaTotal)}</td>
            <td>${formatNumber(linkedinTotal)}</td>
            <td>${d.instagram.engagement}%</td>
            <td><span class="${avgSentiment > 60 ? 'trend-up' : 'trend-down'}">${avgSentiment}%</span></td>
            <td>${d.viralScore}/100</td>
            <td>${signalBadge(COMPANY_SIGNALS[c.id])}</td>
        </tr>`;
    }).join('');
}

// --- Employee Reviews Panel ---
function initEmployee() {
    populateCompanySelect('employeeSummaryCompanySelect');
    populateCompanySelect('employeeMoodCompanySelect');
    // Reset platform toggle to default (AmbitionBox)
    resetPlatformToggle('#panel-employee', 0);
    renderEmployeeSummary();
    renderEmployeeMoodTimeline();
    renderEmployeeRatingChart();
    renderEmployeeRecommendChart();
    renderEmployeeTable();
}

function switchEmployeePlatform(platform, btn) {
    document.querySelectorAll('#panel-employee .platform-toggle .platform-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderEmployeeSummary();
}

function renderEmployeeSummary() {
    const companyId = document.getElementById('employeeSummaryCompanySelect').value || COMPANIES[0].id;
    const company = COMPANIES.find(c => c.id === companyId);
    const empData = typeof EMPLOYEE_REVIEWS !== 'undefined' ? EMPLOYEE_REVIEWS[companyId] : null;
    const container = document.getElementById('employeeSummaryContent');

    if (!empData) {
        container.innerHTML = '<div style="color:var(--text-muted); text-align:center; padding:20px;">No employee review data available for this company.</div>';
        return;
    }

    const activeBtn = document.querySelector('#panel-employee .platform-toggle .platform-btn.active');
    const activePlatform = activeBtn ? activeBtn.textContent.toLowerCase().trim() : 'ambitionbox';

    let platformsToShow = [];
    if (activePlatform === 'both') {
        platformsToShow = ['ambitionbox', 'glassdoor'];
    } else if (activePlatform === 'glassdoor') {
        platformsToShow = ['glassdoor'];
    } else {
        platformsToShow = ['ambitionbox'];
    }

    const platformConfig = {
        ambitionbox: { label: 'AmbitionBox', color: '#0066ff' },
        glassdoor: { label: 'Glassdoor', color: '#0caa41' },
    };

    let html = '<div class="review-summary-grid">';

    platformsToShow.forEach(platform => {
        const pData = empData[platform];
        if (!pData) return;
        const cfg = platformConfig[platform];

        html += `
        <div class="review-summary-platform">
            <div class="review-summary-platform-header" style="display:flex; justify-content:space-between; align-items:center;">
                <span class="review-platform-badge" style="background: ${cfg.color}20; color: ${cfg.color};">${cfg.label}</span>
                <div style="display:flex; gap:16px; align-items:center;">
                    <span style="font-size:20px; font-weight:700; color:${cfg.color};">${pData.rating}/5.0</span>
                    <span style="font-size:11px; color:var(--text-muted);">${pData.totalReviews} reviews</span>
                    <span style="font-size:11px; color:var(--accent-green);">${pData.recommend}% recommend</span>
                </div>
            </div>
            <div class="review-summary-body">
                <p class="review-summary-text">${pData.summary}</p>
                <div class="review-likes-dislikes">
                    <div class="review-column">
                        <div class="review-column-header likes-header">What employees love</div>
                        <ul class="review-list likes-list">
                            ${pData.likes.map(l => `<li>${l}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="review-column">
                        <div class="review-column-header dislikes-header">What employees dislike</div>
                        <ul class="review-list dislikes-list">
                            ${pData.dislikes.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
    });

    html += '</div>';
    container.innerHTML = html;
}

function renderEmployeeMoodTimeline() {
    const companyId = document.getElementById('employeeMoodCompanySelect').value || COMPANIES[0].id;
    const company = COMPANIES.find(c => c.id === companyId);
    const empData = typeof EMPLOYEE_REVIEWS !== 'undefined' ? EMPLOYEE_REVIEWS[companyId] : null;
    const moodData = empData?.moodTimeline;
    const container = document.getElementById('employeeMoodTimelineContent');

    if (!moodData || moodData.length === 0) {
        container.innerHTML = '<div style="color:var(--text-muted); text-align:center; padding:20px;">No employee mood timeline data available.</div>';
        return;
    }

    container.innerHTML = buildMoodTimeline(moodData, company.color);
}

function renderEmployeeRatingChart() {
    destroyChart('employeeRating');
    const companies = getFilteredCompanies().slice(0, 10);
    const ctx = document.getElementById('employeeRatingChart').getContext('2d');

    const ambitionData = companies.map(c => {
        const d = typeof EMPLOYEE_REVIEWS !== 'undefined' ? EMPLOYEE_REVIEWS[c.id] : null;
        return d?.ambitionbox?.rating || 0;
    });
    const glassdoorData = companies.map(c => {
        const d = typeof EMPLOYEE_REVIEWS !== 'undefined' ? EMPLOYEE_REVIEWS[c.id] : null;
        return d?.glassdoor?.rating || 0;
    });

    charts.employeeRating = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: companies.map(c => c.name),
            datasets: [
                {
                    label: 'AmbitionBox',
                    data: ambitionData,
                    backgroundColor: 'rgba(0, 102, 255, 0.5)',
                    borderRadius: 4,
                },
                {
                    label: 'Glassdoor',
                    data: glassdoorData,
                    backgroundColor: 'rgba(12, 170, 65, 0.5)',
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
                y: { beginAtZero: true, max: 5, grid: { color: 'rgba(42, 45, 62, 0.4)' } },
            },
            plugins: { legend: { position: 'bottom' } },
        },
    });
}

function renderEmployeeRecommendChart() {
    destroyChart('employeeRecommend');
    const companies = getFilteredCompanies().slice(0, 10);
    const ctx = document.getElementById('employeeRecommendChart').getContext('2d');

    const data = companies.map(c => {
        const d = typeof EMPLOYEE_REVIEWS !== 'undefined' ? EMPLOYEE_REVIEWS[c.id] : null;
        return parseInt(d?.ambitionbox?.recommend) || 0;
    });

    charts.employeeRecommend = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: companies.map(c => c.name),
            datasets: [{
                label: 'Recommend to Friend %',
                data,
                backgroundColor: companies.map(c => c.color + '70'),
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
                x: { beginAtZero: true, max: 100, grid: { color: 'rgba(42, 45, 62, 0.4)' } },
                y: { grid: { display: false } },
            },
            plugins: { legend: { display: false } },
        },
    });
}

function renderEmployeeTable() {
    const companies = getFilteredCompanies();
    const tbody = document.getElementById('employeeTableBody');

    const sorted = [...companies].sort((a, b) => {
        const aD = typeof EMPLOYEE_REVIEWS !== 'undefined' ? EMPLOYEE_REVIEWS[a.id] : null;
        const bD = typeof EMPLOYEE_REVIEWS !== 'undefined' ? EMPLOYEE_REVIEWS[b.id] : null;
        return (bD?.ambitionbox?.rating || 0) - (aD?.ambitionbox?.rating || 0);
    });

    tbody.innerHTML = sorted.map(c => {
        const d = typeof EMPLOYEE_REVIEWS !== 'undefined' ? EMPLOYEE_REVIEWS[c.id] : null;
        if (!d) return '';
        const ab = d.ambitionbox;
        const gd = d.glassdoor;
        const totalReviews = (ab?.totalReviews || 0) + (gd?.totalReviews || 0);
        const avgRecommend = ab?.recommend ? ab.recommend + '%' : 'N/A';
        const abRating = ab?.rating || '-';
        const gdRating = gd?.rating || '-';
        const ratingColor = (val) => val >= 4.0 ? 'var(--accent-green)' : val >= 3.5 ? 'var(--accent-yellow)' : 'var(--accent-red)';

        return `<tr>
            <td><strong style="color:${c.color}">${c.name}</strong></td>
            <td>${valuationBadge(c.estValuation)}</td>
            <td><span style="color:${ratingColor(abRating)};font-weight:600;">${abRating}/5.0</span></td>
            <td><span style="color:${ratingColor(gdRating)};font-weight:600;">${gdRating}/5.0</span></td>
            <td>${totalReviews}</td>
            <td><span class="${parseInt(avgRecommend) > 65 ? 'trend-up' : 'trend-down'}">${avgRecommend}</span></td>
            <td>${signalBadge(COMPANY_SIGNALS[c.id])}</td>
        </tr>`;
    }).join('');
}

// --- Hiring - LinkedIn Panel ---
function initHiringLinkedin() {
    renderHiringKpis();
    renderHiringTable();
    renderHiringSourceChart();
    renderHiringTimelineChart();
}

function renderHiringKpis() {
    if (typeof LINKEDIN_HIRING_DATA === 'undefined') return;
    const data = LINKEDIN_HIRING_DATA;
    const totalHires = data.length;
    const cxoHires = data.filter(h => h.role.startsWith('Chief') || h.role.startsWith('CXO')).length;
    const avgWorkEx = Math.round(data.reduce((s, h) => s + h.workExYears, 0) / data.length);
    const uniqueSources = new Set(data.map(h => h.lastCompany)).size;

    document.getElementById('kpiTotalHires').textContent = totalHires;
    document.getElementById('kpiCxoHires').textContent = cxoHires;
    document.getElementById('kpiAvgWorkEx').textContent = avgWorkEx + ' yrs';
    document.getElementById('kpiTopSourceCo').textContent = uniqueSources;
}

function renderHiringTable() {
    if (typeof LINKEDIN_HIRING_DATA === 'undefined') return;
    const tbody = document.getElementById('hiringLinkedinTableBody');

    // Show all hiring data — hires span companies beyond the dashboard's tracked set
    const sorted = [...LINKEDIN_HIRING_DATA].sort((a, b) => new Date(b.hireDate) - new Date(a.hireDate));

    tbody.innerHTML = sorted.map(h => {
        const company = COMPANIES.find(c => c.id === h.currentCompany);
        const companyName = company ? company.name : h.currentCompany;
        const companyColor = company ? company.color : 'var(--text-primary)';
        const dateStr = new Date(h.hireDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'short' });

        return `<tr>
            <td><a href="${h.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="hiring-linkedin-link">${h.hireName}</a></td>
            <td><span class="hiring-role-badge">${h.role}</span></td>
            <td><strong>${h.workExYears} yrs</strong></td>
            <td>${h.lastCompany}</td>
            <td><span style="color: var(--text-secondary); font-size: 12px;">${h.lastRole}</span></td>
            <td><strong style="color:${companyColor}">${companyName}</strong></td>
            <td>${dateStr}</td>
        </tr>`;
    }).join('');
}

function renderHiringSourceChart() {
    destroyChart('hiringSource');
    if (typeof LINKEDIN_HIRING_DATA === 'undefined') return;
    const ctx = document.getElementById('hiringSourceChart').getContext('2d');

    const sourceCounts = {};
    LINKEDIN_HIRING_DATA.forEach(h => {
        sourceCounts[h.lastCompany] = (sourceCounts[h.lastCompany] || 0) + 1;
    });
    const sorted = Object.entries(sourceCounts).sort((a, b) => b[1] - a[1]);
    const labels = sorted.map(s => s[0]);
    const values = sorted.map(s => s[1]);
    const colors = ['#0a66c2', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316', '#3b82f6', '#84cc16', '#d946ef', '#22c55e', '#e11d48', '#0d9488', '#6366f1', '#334155'];

    charts.hiringSource = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Hires',
                data: values,
                backgroundColor: labels.map((_, i) => colors[i % colors.length] + '70'),
                borderColor: labels.map((_, i) => colors[i % colors.length]),
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
                x: { beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: 'rgba(42, 45, 62, 0.4)' } },
                y: { grid: { display: false } },
            },
            plugins: { legend: { display: false } },
        },
    });
}

function renderHiringTimelineChart() {
    destroyChart('hiringTimeline');
    if (typeof LINKEDIN_HIRING_DATA === 'undefined') return;
    const ctx = document.getElementById('hiringTimelineChart').getContext('2d');

    const monthCounts = {};
    LINKEDIN_HIRING_DATA.forEach(h => {
        const d = new Date(h.hireDate);
        const key = d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short' });
        monthCounts[key] = (monthCounts[key] || 0) + 1;
    });

    // Sort by date
    const sortedEntries = Object.entries(monthCounts).sort((a, b) => {
        return new Date('01 ' + a[0]) - new Date('01 ' + b[0]);
    });
    const labels = sortedEntries.map(e => e[0]);
    const values = sortedEntries.map(e => e[1]);

    charts.hiringTimeline = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Senior Hires',
                data: values,
                backgroundColor: 'rgba(10, 102, 194, 0.5)',
                borderColor: '#0a66c2',
                borderWidth: 1,
                borderRadius: 4,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.6,
            scales: {
                x: { grid: { display: false } },
                y: { beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: 'rgba(42, 45, 62, 0.4)' } },
            },
            plugins: { legend: { display: false } },
        },
    });
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

// =====================================================
// Early Signal Scanner Panel
// =====================================================

function initEarlySignals() {
    renderEarlySignalKpis();
    renderDiscoveryFunnel();
    renderSignalMatrix('all');
    renderRegionalRadar();
    renderGrowthVelocityChart();
    renderConvergenceCards();
    renderSignalFeed('all');
    renderDiscoveryLeaderboard();
}

function renderEarlySignalKpis() {
    const totalSignals = SIGNAL_FEED.length;
    const convergenceBrands = DISCOVERED_BRANDS.filter(b => {
        const count = Object.values(b.signals).filter(Boolean).length;
        return count >= 3;
    });
    const tier2Cities = REGIONAL_HOTSPOTS.filter(h => h.tier >= 2);
    const pipelineBrands = DISCOVERED_BRANDS.length;

    document.getElementById('kpiNewSignals').textContent = totalSignals;
    document.getElementById('kpiNewSignalsDelta').textContent = `across 12 channels this period`;
    document.getElementById('kpiConvergence').textContent = convergenceBrands.length;
    document.getElementById('kpiConvergenceDelta').textContent = `brands in 3+ signal sources`;
    document.getElementById('kpiRegionalHotspots').textContent = tier2Cities.length;
    document.getElementById('kpiRegionalDelta').textContent = `Tier 2/3 cities active`;
    document.getElementById('kpiPipelineBrands').textContent = pipelineBrands;
    document.getElementById('kpiPipelineDelta').textContent = `in discovery funnel`;
}

function renderDiscoveryFunnel() {
    const stages = {
        'Detected': DISCOVERED_BRANDS.filter(b => b.stage === 'Detected'),
        'Verified': DISCOVERED_BRANDS.filter(b => b.stage === 'Verified'),
        'Tracking': DISCOVERED_BRANDS.filter(b => b.stage === 'Tracking'),
        'Scored': DISCOVERED_BRANDS.filter(b => b.stage === 'Scored'),
    };

    const stageColors = {
        'Detected': '#f59e0b',
        'Verified': '#3b82f6',
        'Tracking': '#8b5cf6',
        'Scored': '#10b981',
    };

    const stageDescriptions = {
        'Detected': 'Initial signal detected in 1-2 channels. Under investigation.',
        'Verified': 'Signal confirmed across 3+ channels. Data collection started.',
        'Tracking': 'Active monitoring. Data enrichment in progress.',
        'Scored': 'Fully scored and integrated into main dashboard.',
    };

    const maxCount = Math.max(...Object.values(stages).map(s => s.length), 1);
    const container = document.getElementById('discoveryFunnel');

    let html = '<div class="funnel-stages">';
    PIPELINE_STAGES.forEach((stage, i) => {
        const brands = stages[stage];
        const widthPct = Math.max(30, (brands.length / maxCount) * 100);
        const color = stageColors[stage];

        html += `
        <div class="funnel-stage">
            <div class="funnel-stage-header">
                <span class="funnel-stage-name" style="color:${color};">${stage}</span>
                <span class="funnel-stage-count" style="background:${color}20; color:${color};">${brands.length} brands</span>
            </div>
            <div class="funnel-bar-container">
                <div class="funnel-bar" style="width:${widthPct}%; background: linear-gradient(90deg, ${color}40, ${color}15);border-left:3px solid ${color};">
                    <div class="funnel-brands">
                        ${brands.map(b => `<span class="funnel-brand-tag">${b.name}</span>`).join('')}
                        ${brands.length === 0 ? `<span class="funnel-empty">No brands at this stage</span>` : ''}
                    </div>
                </div>
            </div>
            <div class="funnel-stage-desc">${stageDescriptions[stage]}</div>
        </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
}

function renderSignalMatrix(filter) {
    let brands = [...DISCOVERED_BRANDS];

    if (filter === 'convergence') {
        brands = brands.filter(b => Object.values(b.signals).filter(Boolean).length >= 3);
    } else if (filter === 'new') {
        brands = brands.filter(b => b.stage === 'Detected');
    }

    brands.sort((a, b) => b.discoveryScore - a.discoveryScore);

    let html = `<table class="heatmap-table"><thead><tr><th>Brand</th><th>City</th>`;
    SIGNAL_CHANNELS.forEach(ch => {
        html += `<th><span class="signal-channel-header" style="color:${ch.color};" data-tooltip="${ch.description}">${ch.name.split(' ')[0]}<br><span style="font-size:9px;font-weight:400;">${ch.name.split(' ').slice(1).join(' ')}</span></span></th>`;
    });
    html += `<th>Count</th><th>Score</th></tr></thead><tbody>`;

    brands.forEach(b => {
        const signalCount = Object.values(b.signals).filter(Boolean).length;
        const stageColor = b.stage === 'Detected' ? '#f59e0b' : b.stage === 'Verified' ? '#3b82f6' : b.stage === 'Tracking' ? '#8b5cf6' : '#10b981';

        html += `<tr><td><strong>${b.name}</strong><br><span style="font-size:10px;color:var(--text-muted);">${b.sectorLabel}</span></td>`;
        html += `<td><span style="font-size:11px;">${b.city}</span><br><span style="font-size:10px;color:var(--text-muted);">${b.state}</span></td>`;

        SIGNAL_CHANNELS.forEach(ch => {
            const active = b.signals[ch.id];
            if (active) {
                html += `<td><span class="signal-dot active" style="background:${ch.color};" title="${ch.name}: Active">&#10003;</span></td>`;
            } else {
                html += `<td><span class="signal-dot inactive">-</span></td>`;
            }
        });

        html += `<td><strong>${signalCount}</strong>/${SIGNAL_CHANNELS.length}</td>`;
        html += `<td><span class="signal-score-badge" style="background:${getDiscoveryScoreColor(b.discoveryScore)}20;color:${getDiscoveryScoreColor(b.discoveryScore)};">${b.discoveryScore}</span></td>`;
        html += `</tr>`;
    });

    html += `</tbody></table>`;
    document.getElementById('signalMatrix').innerHTML = html;
}

function filterSignalMatrix(filter, btn) {
    document.querySelectorAll('#panel-early-signals .chart-actions .chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    renderSignalMatrix(filter);
}

function getDiscoveryScoreColor(score) {
    if (score >= 80) return '#10b981';
    if (score >= 65) return '#3b82f6';
    if (score >= 50) return '#f59e0b';
    return '#ef4444';
}

function renderRegionalRadar() {
    const container = document.getElementById('regionalRadar');
    const sorted = [...REGIONAL_HOTSPOTS].sort((a, b) => b.signalCount - a.signalCount);

    let html = '<div class="regional-radar-grid">';
    sorted.forEach(h => {
        const tierColor = h.tier === 3 ? '#f59e0b' : h.tier === 2 ? '#8b5cf6' : '#3b82f6';
        const tierLabel = `Tier ${h.tier}`;
        const barWidth = Math.max(20, (h.signalCount / 12) * 100);

        html += `
        <div class="regional-radar-row">
            <div class="regional-info">
                <span class="regional-city">${h.city}</span>
                <span class="regional-state">${h.state}</span>
                <span class="regional-tier-badge" style="background:${tierColor}20;color:${tierColor};">${tierLabel}</span>
            </div>
            <div class="regional-bar-wrapper">
                <div class="regional-bar" style="width:${barWidth}%; background: linear-gradient(90deg, ${tierColor}50, ${tierColor}20);"></div>
                <span class="regional-signal-count">${h.signalCount} signals</span>
            </div>
            <div class="regional-brands">
                ${h.brands.map(b => `<span class="regional-brand-chip">${b}</span>`).join('')}
            </div>
            <div class="regional-category">${h.topCategory}</div>
        </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
}

function renderGrowthVelocityChart() {
    destroyChart('growthVelocity');
    const brands = [...DISCOVERED_BRANDS]
        .filter(b => b.igGrowthRate > 0)
        .sort((a, b) => b.igGrowthRate - a.igGrowthRate)
        .slice(0, 10);

    const ctx = document.getElementById('growthVelocityChart').getContext('2d');

    charts.growthVelocity = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: brands.map(b => b.name),
            datasets: [{
                label: 'IG Growth Rate (% MoM)',
                data: brands.map(b => b.igGrowthRate),
                backgroundColor: brands.map(b => {
                    if (b.igGrowthRate >= 25) return 'rgba(16, 185, 129, 0.5)';
                    if (b.igGrowthRate >= 15) return 'rgba(59, 130, 246, 0.5)';
                    return 'rgba(245, 158, 11, 0.4)';
                }),
                borderColor: brands.map(b => {
                    if (b.igGrowthRate >= 25) return '#10b981';
                    if (b.igGrowthRate >= 15) return '#3b82f6';
                    return '#f59e0b';
                }),
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
                x: {
                    beginAtZero: true,
                    grid: { color: 'rgba(42, 45, 62, 0.4)' },
                    title: { display: true, text: 'Monthly Growth %', color: '#9aa0b0', font: { size: 11 } },
                },
                y: { grid: { display: false } },
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            const brand = brands[context.dataIndex];
                            return `Followers: ${brand.igFollowers}\nCity: ${brand.city}`;
                        },
                    },
                },
            },
        },
    });
}

function renderConvergenceCards() {
    const convergenceBrands = DISCOVERED_BRANDS
        .filter(b => Object.values(b.signals).filter(Boolean).length >= 3)
        .sort((a, b) => b.discoveryScore - a.discoveryScore)
        .slice(0, 6);

    const container = document.getElementById('convergenceCards');

    if (convergenceBrands.length === 0) {
        container.innerHTML = '<div style="color:var(--text-muted);text-align:center;padding:40px;">No convergence alerts at this time.</div>';
        return;
    }

    container.innerHTML = convergenceBrands.map(b => {
        const signalCount = Object.values(b.signals).filter(Boolean).length;
        const activeSignals = SIGNAL_CHANNELS.filter(ch => b.signals[ch.id]);
        const scoreColor = getDiscoveryScoreColor(b.discoveryScore);
        const stageColor = b.stage === 'Detected' ? '#f59e0b' : b.stage === 'Verified' ? '#3b82f6' : b.stage === 'Tracking' ? '#8b5cf6' : '#10b981';

        return `
        <div class="breakout-card">
            <div class="breakout-card-header">
                <div>
                    <h4>${b.name}</h4>
                    <span style="font-size:11px; color:var(--text-muted);">${b.city}, ${b.state} &middot; ${b.sectorLabel}</span>
                </div>
                <span class="signal-score-lg" style="color:${scoreColor};">${b.discoveryScore}</span>
            </div>
            <div class="convergence-detail">${b.detail}</div>
            <div class="breakout-metrics">
                <div class="breakout-metric">
                    <span class="breakout-metric-label">Signals</span>
                    <span class="breakout-metric-value" style="color:#f59e0b;">${signalCount}/${SIGNAL_CHANNELS.length}</span>
                </div>
                <div class="breakout-metric">
                    <span class="breakout-metric-label">IG Growth</span>
                    <span class="breakout-metric-value" style="color:#e1306c;">+${b.igGrowthRate}% MoM</span>
                </div>
                <div class="breakout-metric">
                    <span class="breakout-metric-label">Revenue</span>
                    <span class="breakout-metric-value" style="color:${b.estRevenue.startsWith('Verify') || b.estRevenue.startsWith('Pre-') ? 'var(--text-muted)' : '#06b6d4'}; font-size:${b.estRevenue.startsWith('Verify') ? '10px' : '13px'};">${b.estRevenue}</span>
                </div>
                <div class="breakout-metric">
                    <span class="breakout-metric-label">Stage</span>
                    <span class="breakout-metric-value" style="color:${stageColor};">${b.stage}</span>
                </div>
            </div>
            <div class="convergence-signals">
                ${activeSignals.map(ch => `<span class="signal-channel-chip" style="background:${ch.color}20;color:${ch.color};border:1px solid ${ch.color}30;">${ch.icon} ${ch.name}</span>`).join('')}
            </div>
        </div>`;
    }).join('');
}

function renderSignalFeed(channelFilter) {
    let events = [...SIGNAL_FEED];
    if (channelFilter !== 'all') {
        events = events.filter(e => e.channel === channelFilter);
    }

    const container = document.getElementById('signalFeed');
    const channelMap = {};
    SIGNAL_CHANNELS.forEach(ch => { channelMap[ch.id] = ch; });

    container.innerHTML = events.map(e => {
        const ch = channelMap[e.channel];
        const strengthColor = e.strength === 'strong' ? '#10b981' : '#f59e0b';

        return `
        <div class="social-post signal-feed-item">
            <div class="post-header">
                <span class="signal-feed-channel" style="background:${ch.color}20;color:${ch.color};">${ch.icon} ${ch.name}</span>
                <span class="post-date">${e.date}</span>
                <span class="signal-strength-badge" style="background:${strengthColor}20;color:${strengthColor};">${e.strength}</span>
            </div>
            <div class="post-title"><strong>${e.brand}</strong> &middot; ${e.city}</div>
            <div class="post-body">${e.detail}</div>
        </div>`;
    }).join('');
}

function filterSignalFeed(channel) {
    renderSignalFeed(channel);
}

function renderDiscoveryLeaderboard() {
    const brands = [...DISCOVERED_BRANDS].sort((a, b) => b.discoveryScore - a.discoveryScore);
    const tbody = document.getElementById('discoveryLeaderboardBody');

    tbody.innerHTML = brands.map(b => {
        const signalCount = Object.values(b.signals).filter(Boolean).length;
        const scoreColor = getDiscoveryScoreColor(b.discoveryScore);
        const stageColor = b.stage === 'Detected' ? '#f59e0b' : b.stage === 'Verified' ? '#3b82f6' : b.stage === 'Tracking' ? '#8b5cf6' : '#10b981';

        return `<tr>
            <td><strong>${b.name}</strong></td>
            <td>${b.city}, ${b.state}</td>
            <td>${b.sectorLabel}</td>
            <td><strong>${signalCount}</strong>/${SIGNAL_CHANNELS.length}</td>
            <td><span style="font-size:11px;">${b.strongestSignal}</span></td>
            <td>${trendArrow(b.igGrowthRate)} <span style="font-size:10px;color:var(--text-muted);">(${b.igFollowers})</span></td>
            <td style="${b.estRevenue.startsWith('Verify') || b.estRevenue.startsWith('Pre-') ? 'color:var(--text-muted);font-size:11px;font-style:italic;' : ''}">${b.estRevenue}</td>
            <td><span class="signal-badge" style="background:${stageColor}15;color:${stageColor};border:1px solid ${stageColor}30;">${b.stage}</span></td>
            <td><span class="signal-score-badge" style="background:${scoreColor}20;color:${scoreColor};font-weight:700;">${b.discoveryScore}</span></td>
        </tr>`;
    }).join('');
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
    if (!name) {
        document.getElementById('newCompanyName').style.borderColor = 'var(--accent-red)';
        setTimeout(() => { document.getElementById('newCompanyName').style.borderColor = ''; }, 2000);
        return;
    }

    const sector = document.getElementById('newCompanySector').value;
    const url = document.getElementById('newCompanyUrl').value.trim();
    const valuation = document.getElementById('newCompanyValuation').value;
    let id = name.toLowerCase().replace(/\s+/g, '');

    // Prevent duplicate IDs
    if (COMPANIES.some(c => c.id === id)) {
        id = id + '_' + Date.now().toString(36);
    }

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
            'Tamil Nadu': Math.round(30 + Math.random() * 35),
            'Telangana': Math.round(25 + Math.random() * 30),
        },
        risingQueries: [{ text: `${name.toLowerCase()} review`, growth: '+200%' }],
    };
    const ts = GOOGLE_TRENDS_DATA[id].timeSeries;
    GOOGLE_TRENDS_DATA[id].currentIndex = ts[ts.length - 1].value;
    GOOGLE_TRENDS_DATA[id].peak12m = Math.max(...ts.map(d => d.value));
    // Compute change30d and change90d from time series (matching data.js logic)
    const vals = ts.map(d => d.value);
    const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
    GOOGLE_TRENDS_DATA[id].volatility = mean > 0 ? Math.round(
        Math.sqrt(vals.reduce((s, v) => s + (v - mean) ** 2, 0) / vals.length) / mean * 100
    ) : 10;
    if (ts.length >= 5) {
        GOOGLE_TRENDS_DATA[id].change30d = Math.round(((ts[ts.length - 1].value / ts[ts.length - 5].value) - 1) * 100);
    }
    if (ts.length >= 13) {
        GOOGLE_TRENDS_DATA[id].change90d = Math.round(((ts[ts.length - 1].value / ts[ts.length - 13].value) - 1) * 100);
    }

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
            mentions: generateWeeklyTimeSeries(26, 20, 0.4, 0.3),
            sentiment: Math.round(55 + Math.random() * 30),
            topSubreddits: ['r/india', 'r/indiashopping'],
        },
        instagram: {
            mentions: generateWeeklyTimeSeries(26, 100, 0.35, 0.25),
            sentiment: Math.round(60 + Math.random() * 25),
            engagement: parseFloat((2 + Math.random() * 4).toFixed(1)),
        },
        linkedin: {
            mentions: generateWeeklyTimeSeries(26, 50, 0.3, 0.3),
            sentiment: Math.round(62 + Math.random() * 25),
            engagement: parseFloat((2 + Math.random() * 3.5).toFixed(1)),
        },
        commentarySummary: DEFAULT_SOCIAL_SUMMARY,
        socialSummary: DEFAULT_SOCIAL_SUMMARY,
        moodTimeline: DEFAULT_MOOD_TIMELINE,
        viralScore: Math.round(20 + Math.random() * 60),
    };

    // Recompute composite scores for the new company
    const gt = GOOGLE_TRENDS_DATA[id];
    const ec = ECOMMERCE_DATA[id];
    const tr = TRAFFIC_DATA[id];
    const so = SOCIAL_DATA[id];
    const googleScore = Math.min(100, (gt.change90d > 0 ? gt.change90d * 0.5 : 0) + (gt.currentIndex / (gt.peak12m || 1)) * 50);
    const reviewScore = (ec.amazon.sentiment + ec.myntra.sentiment) / 2;
    const trafficScore = Math.min(100, tr.momGrowth * 2 + 50);
    const socialScore = (so.reddit.sentiment + so.instagram.sentiment + so.linkedin.sentiment) / 3;
    const composite = Math.round(googleScore * 0.25 + reviewScore * 0.20 + trafficScore * 0.30 + socialScore * 0.25);
    COMPOSITE_SCORES[id] = { google: Math.round(googleScore), reviews: Math.round(reviewScore), traffic: Math.round(trafficScore), social: Math.round(socialScore), composite };
    COMPANY_SIGNALS[id] = composite >= 78 ? 'breakout' : composite >= 65 ? 'trending' : composite < 40 ? 'declining' : 'watch';

    // Switch sector filter to match the new company's sector so it's visible
    const sectorSelect = document.getElementById('sectorFilter');
    if (currentSector !== 'all' && currentSector !== sector) {
        currentSector = sector;
        sectorSelect.value = sector;
    }

    document.getElementById('companyCount').textContent = getFilteredCompanies().length + ' companies';
    closeAddCompanyModal();
    // Reset all form fields
    document.getElementById('newCompanyName').value = '';
    document.getElementById('newCompanyUrl').value = '';
    document.getElementById('newCompanySector').selectedIndex = 0;
    document.getElementById('newCompanyValuation').selectedIndex = 2;
    initPanel(currentPanel);

    // Show success notification
    showNotification(`${name} added successfully`);
}

// =====================================================
// Founder LinkedIn Activity Panel
// =====================================================

function setFounderUrl(url) {
    document.getElementById('founderLinkedinUrl').value = url;
    analyzeFounderLinkedin();
}

function extractLinkedinUsername(url) {
    const match = url.match(/linkedin\.com\/in\/([^\/\?]+)/);
    return match ? match[1].toLowerCase() : null;
}

function analyzeFounderLinkedin() {
    const url = document.getElementById('founderLinkedinUrl').value.trim();
    if (!url) return;

    const username = extractLinkedinUsername(url);
    if (!username) {
        showNotification('Please enter a valid LinkedIn profile URL');
        return;
    }

    const profile = FOUNDER_LINKEDIN_PROFILES[username];
    if (!profile) {
        showNotification('Profile data not available. Demo data is available for: Arpit Beri (arpitberi)');
        return;
    }

    renderFounderLinkedinDashboard(profile);
}

function renderFounderLinkedinDashboard(profile) {
    const results = document.getElementById('founderLinkedinResults');
    results.style.display = 'block';

    // Profile info
    const initials = profile.name.split(' ').map(n => n[0]).join('');
    document.getElementById('flAvatar').textContent = initials;
    document.getElementById('flName').textContent = profile.name;
    document.getElementById('flHeadline').textContent = profile.headline;
    document.getElementById('flConnections').textContent = profile.connections + ' connections';
    document.getElementById('flFollowers').textContent = profile.followers + ' followers';

    // Calculate totals
    const totals = profile.monthly.reduce((acc, m) => ({
        posts: acc.posts + m.posts,
        likes: acc.likes + m.likesGiven,
        comments: acc.comments + m.comments,
        engagement: acc.engagement + (m.avgLikesReceived + m.avgCommentsReceived)
    }), { posts: 0, likes: 0, comments: 0, engagement: 0 });

    const avgEngagement = Math.round(totals.engagement / totals.posts);

    // Activity score (0-100 based on posting frequency + engagement)
    const postFreqScore = Math.min(totals.posts / 60 * 100, 100); // 60 posts in 6 mo = max
    const engScore = Math.min(avgEngagement / 500 * 100, 100);
    const activityScore = Math.round(postFreqScore * 0.4 + engScore * 0.6);

    // KPI cards
    document.getElementById('flTotalPosts').textContent = totals.posts;
    document.getElementById('flTotalLikes').textContent = totals.likes;
    document.getElementById('flTotalComments').textContent = totals.comments;
    document.getElementById('flAvgEngagement').textContent = formatNumber(avgEngagement);

    // Score circle
    const scoreEl = document.getElementById('flScoreValue');
    scoreEl.textContent = activityScore;
    const scoreCircle = document.getElementById('flScoreCircle');
    scoreCircle.className = 'fl-score-circle';
    if (activityScore >= 70) scoreCircle.classList.add('fl-score-high');
    else if (activityScore >= 40) scoreCircle.classList.add('fl-score-medium');
    else scoreCircle.classList.add('fl-score-low');

    // Monthly chart
    renderFlMonthlyChart(profile);

    // Monthly table
    renderFlMonthlyTable(profile, totals);

    // Engagement trend chart
    renderFlEngagementChart(profile);

    // Post type chart
    renderFlPostTypeChart(profile);

    // Topic analysis
    renderFlTopics(profile);

    // Sample posts
    renderFlPosts(profile);

    // Assessment
    renderFlAssessment(profile, totals, activityScore, avgEngagement);
}

function renderFlMonthlyChart(profile) {
    if (charts.flMonthly) charts.flMonthly.destroy();

    const labels = profile.monthly.map(m => m.month);
    charts.flMonthly = new Chart(document.getElementById('flMonthlyChart'), {
        type: 'bar',
        data: {
            labels,
            datasets: [
                {
                    label: 'Posts',
                    data: profile.monthly.map(m => m.posts),
                    backgroundColor: '#3b82f6',
                    borderRadius: 4
                },
                {
                    label: 'Likes Given',
                    data: profile.monthly.map(m => m.likesGiven),
                    backgroundColor: '#10b981',
                    borderRadius: 4
                },
                {
                    label: 'Comments',
                    data: profile.monthly.map(m => m.comments),
                    backgroundColor: '#f59e0b',
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'top' } },
            scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(42,45,62,0.6)' } },
                x: { grid: { display: false } }
            }
        }
    });
}

function renderFlMonthlyTable(profile, totals) {
    const tbody = document.getElementById('flMonthlyTable');
    tbody.innerHTML = profile.monthly.map(m => {
        const eng = m.avgLikesReceived + m.avgCommentsReceived;
        return `<tr>
            <td>${m.month}</td>
            <td>${m.posts}</td>
            <td>${m.likesGiven}</td>
            <td>${m.comments}</td>
            <td>${formatNumber(eng)}</td>
        </tr>`;
    }).join('');

    const tfoot = document.getElementById('flMonthlyTotals');
    const totalEng = profile.monthly.reduce((s, m) => s + m.avgLikesReceived + m.avgCommentsReceived, 0);
    tfoot.innerHTML = `<tr style="font-weight:600; border-top: 2px solid var(--border);">
        <td>Total</td>
        <td>${totals.posts}</td>
        <td>${totals.likes}</td>
        <td>${totals.comments}</td>
        <td>${formatNumber(totalEng)}</td>
    </tr>`;
}

function renderFlEngagementChart(profile) {
    if (charts.flEngagement) charts.flEngagement.destroy();

    const labels = profile.monthly.map(m => m.month);
    charts.flEngagement = new Chart(document.getElementById('flEngagementChart'), {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    label: 'Avg Likes Received',
                    data: profile.monthly.map(m => m.avgLikesReceived),
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59,130,246,0.1)',
                    fill: true
                },
                {
                    label: 'Avg Comments Received',
                    data: profile.monthly.map(m => m.avgCommentsReceived),
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245,158,11,0.1)',
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'top' } },
            scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(42,45,62,0.6)' } },
                x: { grid: { display: false } }
            }
        }
    });
}

function renderFlPostTypeChart(profile) {
    if (charts.flPostType) charts.flPostType.destroy();

    const labels = Object.keys(profile.postTypes);
    const data = Object.values(profile.postTypes);
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

    charts.flPostType = new Chart(document.getElementById('flPostTypeChart'), {
        type: 'doughnut',
        data: {
            labels,
            datasets: [{
                data,
                backgroundColor: colors,
                borderWidth: 0,
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: { position: 'right', labels: { padding: 12, font: { size: 11 } } }
            }
        }
    });
}

function renderFlTopics(profile) {
    const grid = document.getElementById('flTopicsGrid');
    grid.innerHTML = profile.topics.map(t => `
        <div class="fl-topic-card">
            <div class="fl-topic-header">
                <span class="fl-topic-dot" style="background: ${t.color};"></span>
                <span class="fl-topic-name">${t.name}</span>
                <span class="fl-topic-pct">${t.percentage}%</span>
            </div>
            <div class="fl-topic-bar-bg">
                <div class="fl-topic-bar" style="width: ${t.percentage}%; background: ${t.color};"></div>
            </div>
            <p class="fl-topic-desc">${t.description}</p>
        </div>
    `).join('');
}

function renderFlPosts(profile) {
    const list = document.getElementById('flPostsList');
    list.innerHTML = profile.samplePosts.map(p => `
        <div class="fl-post-item">
            <div class="fl-post-meta">
                <span class="fl-post-date">${p.date}</span>
                <span class="fl-post-type-badge">${p.type}</span>
                <span class="fl-post-topic-badge">${p.topic}</span>
            </div>
            <p class="fl-post-preview">${p.preview}</p>
            <div class="fl-post-stats">
                <span>&#9829; ${formatNumber(p.likes)} likes</span>
                <span>&#128172; ${formatNumber(p.comments)} comments</span>
            </div>
        </div>
    `).join('');
}

function renderFlAssessment(profile, totals, score, avgEng) {
    const postsPerMonth = (totals.posts / 6).toFixed(1);
    let level, levelClass, summary;

    if (score >= 70) {
        level = 'Highly Active';
        levelClass = 'fl-level-high';
        summary = `${profile.name} is a highly active LinkedIn presence. With ${postsPerMonth} posts/month and an average engagement of ${formatNumber(avgEng)} per post, they are building significant thought leadership. This level of social media involvement signals strong personal brand investment and ecosystem engagement.`;
    } else if (score >= 40) {
        level = 'Moderately Active';
        levelClass = 'fl-level-medium';
        summary = `${profile.name} maintains a moderate LinkedIn presence with ${postsPerMonth} posts/month. Engagement levels at ${formatNumber(avgEng)} per post show decent audience receptivity. There is room to increase posting frequency and engagement to strengthen thought leadership positioning.`;
    } else {
        level = 'Low Activity';
        levelClass = 'fl-level-low';
        summary = `${profile.name} has limited LinkedIn activity with only ${postsPerMonth} posts/month. With average engagement of ${formatNumber(avgEng)} per post, social media does not appear to be a priority. This may be intentional (heads-down building) or a missed opportunity for brand building.`;
    }

    const topTopic = profile.topics[0];
    const topicInsight = `Primary content focus is <strong>${topTopic.name}</strong> (${topTopic.percentage}% of posts), followed by <strong>${profile.topics[1].name}</strong> (${profile.topics[1].percentage}%) and <strong>${profile.topics[2].name}</strong> (${profile.topics[2].percentage}%).`;

    const trendMonths = profile.monthly;
    const firstHalf = trendMonths.slice(0, 3).reduce((s, m) => s + m.posts, 0);
    const secondHalf = trendMonths.slice(3).reduce((s, m) => s + m.posts, 0);
    const trendDirection = secondHalf > firstHalf ? 'increasing' : secondHalf < firstHalf ? 'decreasing' : 'steady';
    const trendInsight = `Posting activity is <strong>${trendDirection}</strong> over the 6-month period (${firstHalf} posts in first 3 months vs ${secondHalf} in last 3 months).`;

    document.getElementById('flAssessment').innerHTML = `
        <div class="fl-assessment-level ${levelClass}">
            <span class="fl-level-badge">${level}</span>
            <span class="fl-level-score">Score: ${score}/100</span>
        </div>
        <p class="fl-assessment-text">${summary}</p>
        <div class="fl-assessment-insights">
            <div class="fl-insight-item">
                <span class="fl-insight-icon">&#128202;</span>
                <p>${topicInsight}</p>
            </div>
            <div class="fl-insight-item">
                <span class="fl-insight-icon">&#128200;</span>
                <p>${trendInsight}</p>
            </div>
            <div class="fl-insight-item">
                <span class="fl-insight-icon">&#128172;</span>
                <p>The founder has given <strong>${totals.likes} likes</strong> and <strong>${totals.comments} comments</strong> on other people's content, indicating ${totals.likes + totals.comments > 200 ? 'active community engagement beyond own posts' : 'moderate networking activity on the platform'}.</p>
            </div>
        </div>
    `;
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
    initOverview();
    document.getElementById('companyCount').textContent = COMPANIES.length + ' companies';
});
