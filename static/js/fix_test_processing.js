document.addEventListener('DOMContentLoaded', function() {
    // إذا كان هناك زر بدء الاختبار، أضف مستمع حدث للنقر
    const startTestButtons = document.querySelectorAll('a[href*="start_test"]');

    if (startTestButtons.length > 0) {
        startTestButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault(); // منع السلوك الافتراضي

                // إضافة حالة التحميل
                button.disabled = true;
                button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> جاري بدء الاختبار...';

                // الانتقال إلى صفحة الاختبار
                window.location.href = button.href;
            });
        });
    }

    // التعامل مع تحميل الاختبار
    if (window.location.href.includes('/student/tests/take/') || window.location.href.includes('/attempt/')) {
        // تحسين معالجة تحميل الاختبار
        const processingIndicator = document.querySelector('.test-processing');
        if (processingIndicator) {
            processingIndicator.style.display = 'none';
        }

        // تفعيل الأزرار
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.disabled = false;
        });

        // تحديث الصفحة إذا لم يتم تحميل المحتوى
        setTimeout(() => {
            const questionContainer = document.querySelector('.question-container');
            if (!questionContainer) {
                window.location.reload();
            }
        }, 2000);
    }
});