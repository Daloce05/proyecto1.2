
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs);

    var tabLinks = document.querySelectorAll('.tabs a');
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = link.getAttribute('href').substring(1);
            var targetContent = document.getElementById(targetId);

            var allContents = document.querySelectorAll('.card-content > div');
            allContents.forEach(function(content) {
                content.style.display = 'none';
            });

            targetContent.style.display = 'block';
        });
    });
});
