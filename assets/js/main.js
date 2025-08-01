// سكريبت لظهور البنر ببطء (تأكد من وجود #bannerBox في الصفحة الحالية)
window.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("bannerBox");
    if (banner) { // التأكد من وجود العنصر
        banner.style.opacity = "1";
        banner.style.transform = "translateY(0)";
    }
});

// سكريبت وظيفة قائمة الهامبرغر
function toggleMenu() {
    var links = document.getElementById('hamburger-links');
    // التبديل بين 'flex' و 'none'
    links.style.display = (links.style.display === 'flex') ? 'none' : 'flex';
}

// إغلاق القائمة عند الضغط خارجها
document.addEventListener('click', function(event) {
    var menu = document.getElementById('hamburger-links');
    var button = document.querySelector('.hamburger-button');
    if (menu && button) {
        if (menu.style.display === 'flex') {
            // إذا لم يكن النقر داخل القائمة ولم يكن على زر القائمة
            if (!menu.contains(event.target) && !button.contains(event.target)) {
                menu.style.display = 'none';
            }
        }
    }
});

// إضافة هذا الجزء لضمان إخفاء القائمة عند تغيير حجم الشاشة (عند التحول من جوال إلى ديسكتوب مثلاً)
window.addEventListener('resize', function() {
    var links = document.getElementById('hamburger-links');
    if (window.innerWidth > 768) { // إذا كانت الشاشة أكبر من 768px (متوسط حجم الجوال)
        if (links) {
            links.style.display = 'none'; // أخفي قائمة الهامبرغر
        }
    }
});
