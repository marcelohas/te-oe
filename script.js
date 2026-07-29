document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Tab Interaction
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            // Deactivate all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate clicked button
            button.classList.add('active');
            // Show targeted content
            const activeContent = document.getElementById(targetId);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });

    // 2. Chart Animation on Scroll (IntersectionObserver)
    const chartBars = document.querySelectorAll('.animate-bar');
    
    const animateChart = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const widthValue = bar.getAttribute('data-width');
                bar.style.width = widthValue;
                // Unobserve once animated
                observer.unobserve(bar);
            }
        });
    };

    const chartObserver = new IntersectionObserver(animateChart, {
        root: null, // Viewport
        threshold: 0.1 // Trigger when 10% of the bar is visible
    });

    chartBars.forEach(bar => {
        chartObserver.observe(bar);
    });

});
