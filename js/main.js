// 導航欄功能
document.addEventListener('DOMContentLoaded', function() {
    // 行動裝置菜單切換
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.setAttribute('aria-expanded', 
                this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });
    }
    
    // 點擊導航連結時關閉行動裝置菜單
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // 設置當前年份
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // 表單提交處理（前端示例）
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 獲取表單數據
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Github pages限制 無法在後端實現
            console.log('表單數據:', data);
            
            // 顯示ERROR
            alert('目前因Github pages限制 目前還尚未實現');
            
            // 清空表單
            this.reset();
        });
    }
    
    // 導航欄滾動效果
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 向下滾動時隱藏導航欄
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        // 在頂部時移除陰影
        if (scrollTop === 0) {
            navbar.style.boxShadow = 'none';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 作品集卡片點擊效果 - 擴充式展示
    // 作品集卡片開合功能
    function initPortfolioCards() {
        const cardLinks = document.querySelectorAll('.card-link');
        
        cardLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const card = this.closest('.portfolio-card');
                
                // 關閉其他已打開的卡片
                document.querySelectorAll('.portfolio-card').forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('open')) {
                        otherCard.classList.remove('open');
                    }
                });
                
                // 切換當前卡片狀態
                card.classList.toggle('open');
            });
        });
        
        // 點擊卡片外部關閉
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.portfolio-card')) {
                document.querySelectorAll('.portfolio-card.open').forEach(card => {
                    card.classList.remove('open');
                });
            }
        });
    }

    // 頁面載入完成後初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPortfolioCards);
    } else {
        initPortfolioCards();
    }
    
    // 動態載入圖片效果
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                imageObserver.unobserve(img);
            }
        });
    });
    
    // 如果有大量圖片，可以添加 data-src 屬性並啟用此功能
    // document.querySelectorAll('img[data-src]').forEach(img => {
    //     imageObserver.observe(img);
    // });
    
    // 技術標籤交互效果
    // document.querySelectorAll('.tech-tag, .tech-tag-large').forEach(tag => {
    //     tag.addEventListener('click', function() {
    //         const tech = this.textContent;
    //         alert(`你點擊了 ${tech} 技術標籤。這可以連結到相關項目或詳細說明。`);
    //     });
    // });

    // 專案詳情展開
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // 如果不是點擊鏈接，則顯示更多詳情
            if (!e.target.closest('.card-link')) {
                const title = this.querySelector('.card-title').textContent;
                const desc = this.querySelector('.card-description').textContent;
                
                // 實際應用中可以顯示模態框或導向詳情頁
                console.log(`專案: ${title}\n描述: ${desc}`);
            }
        });
    });

    // 技術技能進度條動畫
    const observerOptions = {
        threshold: 0.5
    };

    const techObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const levelBars = entry.target.querySelectorAll('.tech-level-bar');
                levelBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.transition = 'width 1.5s ease-in-out';
                        bar.style.width = width;
                    }, 300);
                });
                techObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 觀察技術棧區域
    const techSection = document.querySelector('.tech');
    if (techSection) {
        techObserver.observe(techSection);
    }

    // 表單項目類型改變事件
    const projectTypeSelect = document.getElementById('projectType');
    if (projectTypeSelect) {
        projectTypeSelect.addEventListener('change', function() {
            const messageTextarea = document.getElementById('message');
            const examples = {
                'crawler': '請提供目標網站URL、需要抓取的數據類型、更新頻率等詳細信息。',
                'automation': '請描述當前工作流程、希望自動化的環節、使用的工具/平台等。',
                'llm': '請說明應用場景、需要的功能、現有數據/知識庫情況等。',
                'analysis': '請描述數據來源、分析目標、期望的輸出格式等。',
                'other': '請詳細描述您的需求或遇到的技術問題。'
            };
            
            if (this.value && examples[this.value]) {
                messageTextarea.placeholder = examples[this.value];
            }
        });
    }

});


// 頭像縮放功能
document.addEventListener('DOMContentLoaded', function() {
    const avatarImage = document.getElementById('avatarImage');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const resetZoomBtn = document.getElementById('resetZoomBtn');
    const uploadHint = document.getElementById('uploadHint');
    
    let currentScale = 1;
    const maxScale = 3;
    const minScale = 0.5;
    const scaleStep = 0.1;
    
    // 如果元素存在才執行
    if (avatarImage) {
        // 放大
        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', function() {
                if (currentScale < maxScale) {
                    currentScale += scaleStep;
                    updateAvatarScale();
                }
            });
        }
        
        // 縮小
        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', function() {
                if (currentScale > minScale) {
                    currentScale -= scaleStep;
                    updateAvatarScale();
                }
            });
        }
        
        // 還原
        if (resetZoomBtn) {
            resetZoomBtn.addEventListener('click', function() {
                currentScale = 1;
                updateAvatarScale();
            });
        }
        
        // 點擊頭像切換放大/縮小（可選功能）
        avatarImage.addEventListener('click', function(e) {
            e.stopPropagation();
            // 點擊時稍微放大
            currentScale = currentScale === 1 ? 1.5 : 1;
            updateAvatarScale();
        });
        
        // 上傳提示點擊（模擬上傳功能）
        // if (uploadHint) {
        //     uploadHint.addEventListener('click', function(e) {
        //         e.stopPropagation();
        //         alert('在實際應用中，這裡會觸發文件選擇對話框來上傳新的大頭照。');
        //         // 實際代碼可能是：
        //         // const input = document.createElement('input');
        //         // input.type = 'file';
        //         // input.accept = 'image/*';
        //         // input.click();
        //     });
        // }
        
        // 更新縮放比例
        function updateAvatarScale() {
            avatarImage.style.transform = `scale(${currentScale})`;
            
            // 更新按鈕狀態
            if (zoomInBtn) {
                zoomInBtn.disabled = currentScale >= maxScale;
            }
            if (zoomOutBtn) {
                zoomOutBtn.disabled = currentScale <= minScale;
            }
        }
        
        // 初始化按鈕狀態
        updateAvatarScale();
    }
    
    // 鍵盤快捷鍵支持（可選）
    document.addEventListener('keydown', function(e) {
        if (avatarImage && document.activeElement.tagName !== 'INPUT') {
            if (e.key === '+' || e.key === '=') {
                e.preventDefault();
                if (currentScale < maxScale) {
                    currentScale += scaleStep;
                    updateAvatarScale();
                }
            } else if (e.key === '-' || e.key === '_') {
                e.preventDefault();
                if (currentScale > minScale) {
                    currentScale -= scaleStep;
                    updateAvatarScale();
                }
            } else if (e.key === '0') {
                e.preventDefault();
                currentScale = 1;
                updateAvatarScale();
            }
        }
    });

    // 經歷圖片預覽
    document.querySelectorAll('.exp-view-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // 防止觸發卡片其他點擊事件
            const expCard = this.closest('.experience-card');
            const expImg = expCard.querySelector('.exp-img');
            const expTitle = expCard.querySelector('h4').textContent;
            const expType = expCard.querySelector('.exp-type').textContent;
            const expDesc = expCard.querySelector('.exp-desc').textContent;
            
            // 創建經歷預覽模態框
            const modal = document.createElement('div');
            modal.className = 'exp-modal';
            modal.innerHTML = `
                <div class="exp-modal-content">
                    <button class="exp-modal-close">&times;</button>
                    <div class="exp-modal-header">
                        <h3>${expTitle}</h3>
                    </div>
                    <div class="exp-modal-body">
                        <div class="exp-modal-img-container">
                            <img src="${expImg.src}" alt="${expTitle}" class="exp-modal-img">
                        </div>
                        <div class="exp-modal-info">
                            <p class="exp-modal-org">${expCard.querySelector('.exp-org').textContent}</p>
                            <p class="exp-modal-desc">${expDesc}</p>
                            <div class="exp-modal-details">
                                <div>
                                    <i class="far fa-calendar"></i>
                                    <span>${expCard.querySelector('.exp-date').textContent.replace(' ', '')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="exp-modal-actions">
                        <button class="exp-modal-close-btn">
                            <i class="fas fa-times"></i> 關閉
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // 關閉模態框函數
            const closeModal = () => {
                if (modal.parentNode) {
                    document.body.removeChild(modal);
                    document.body.style.overflow = 'auto';
                }
            };
            
            // 關閉按鈕事件
            modal.querySelector('.exp-modal-close').addEventListener('click', closeModal);
            modal.querySelector('.exp-modal-close-btn').addEventListener('click', closeModal);
            
            // 點擊背景關閉
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
            
            // 下載圖片功能
            // modal.querySelector('.exp-modal-download').addEventListener('click', function() {
            //     const imgSrc = expImg.src;
            //     const fileName = imgSrc.split('/').pop();
                
            //     // 創建臨時連結下載圖片
            //     const link = document.createElement('a');
            //     link.href = imgSrc;
            //     link.download = fileName || 'experience-image.jpg';
            //     document.body.appendChild(link);
            //     link.click();
            //     document.body.removeChild(link);
                
            //     alert(`已開始下載: ${fileName}`);
            // });
            
            // ESC鍵關閉
            const handleEscKey = (e) => {
                if (e.key === 'Escape') closeModal();
            };
            document.addEventListener('keydown', handleEscKey);
            
            // 清理事件監聽器
            modal.addEventListener('close', () => {
                document.removeEventListener('keydown', handleEscKey);
            });
        });
    });

});

// 證照圖片點擊預覽
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.cert-view-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const certImg = this.closest('.cert-img-container').querySelector('.cert-img');
            const certTitle = this.closest('.cert-card').querySelector('h4').textContent;
            
            // 創建預覽模態框
            const modal = document.createElement('div');
            modal.className = 'cert-modal';
            modal.innerHTML = `
                <div class="cert-modal-content">
                    <button class="cert-modal-close">&times;</button>
                    <h3>${certTitle}</h3>
                    <img src="${certImg.src}" alt="${certTitle}">
                    <p>點擊圖片外部或×按鈕關閉</p>
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden'; // 防止背景滾動
            
            // 關閉模態框
            const closeModal = () => {
                document.body.removeChild(modal);
                document.body.style.overflow = 'auto';
            };
            
            modal.querySelector('.cert-modal-close').addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
        });
    });
});