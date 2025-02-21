// 在生成卡片的代码段中加入条件判断
websiteData.forEach(item => {
    const card = document.createElement(item.isAnnouncement ? 'div' : 'a');
    card.className = 'site-card';
    
    if(item.isAnnouncement) {
        card.innerHTML = `
            <h2 class="announcement-title">公告</h2>
            <p class="announcement-content">${item.description}</p>
        `;
    } else {
        card.innerHTML = `
            <img src="${item.preview}" class="preview-image">
            <h2 class="site-title">${item.title}</h2>
            <!-- 保留原有其他元素 -->
        `;
    }
    container.appendChild(card);
});