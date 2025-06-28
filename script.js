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
    // التبديل بين 'block' و 'none'
    links.style.display = (links.style.display === 'block') ? 'none' : 'block';
}

// إغلاق القائمة عند الضغط خارجها
document.addEventListener('click', function(event) {
    var menu = document.getElementById('hamburger-links');
    var button = document.querySelector('.hamburger-button');
    // التأكد من وجود القائمة والزر قبل التعامل معهما
    if (menu && button) {
        if (menu.style.display === 'block') {
            // إذا لم يكن النقر داخل القائمة ولم يكن على زر القائمة
            if (!menu.contains(event.target) && !button.contains(event.target)) {
                menu.style.display = 'none';
            }
        }
    }
});
