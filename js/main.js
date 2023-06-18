let tabs = Array.from(document.getElementsByClassName('projectTb'));
let ProjectTabContent = Array.from(document.getElementsByClassName('ProjectTabContent'));
let hamIcon = document.getElementById('hamIcon');
let nav = document.querySelector('nav');
let closeNav = document.getElementById('closeNav');
let navItems = Array.from(document.querySelectorAll('nav a'));
let accordionItem = Array.from(document.getElementsByClassName('accordionItem'));


// آکاردئون
accordionItem.forEach((item) => {
    item.addEventListener('click', function() {
        item.nextElementSibling.classList.toggle('active');
        item.querySelector('svg').classList.toggle('active');
    })
})

// منوی موبایل
hamIcon.addEventListener('click', function() {
    nav.classList.add('active');
})
closeNav.addEventListener('click', function() {
        nav.classList.remove('active');
    })
    // منوی سایت
navItems.forEach((item) => {
    item.addEventListener('click', function() {
        navItems.forEach((all) => { all.classList.remove('active') });
        item.classList.add('active');
    })
})

// تب پروژه ها
tabs.forEach((tab) => {
        tab.addEventListener('click', function() {
            tabs.forEach((tabs) => { tabs.classList.remove('active') })
            tab.classList.add('active')
            let tabId = tab.dataset.id;
            ProjectTabContent.forEach((content) => {
                let contentId = content.dataset.id;
                if (tabId === contentId) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            })
        })
    })
    // رویداد اسکرول


(function() {
    'use strict';

    var section = document.querySelectorAll('section');
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                console.log('hi')
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            }
        }
    };
})();



// مهارت ها
$('#skils').waypoint(function() {
        $('.progress').each(function() {
            var width = $(this).data("val");
            $(this).css('width', width + '%')
        });
    }, {
        offset: '20%'
    })
    // متن متحرک
document.addEventListener('DOMContentLoaded', function() {

    Typed.new("#typed", {
        stringsElement: document.getElementById('typed-strings'),
        typeSpeed: 22,
        backDelay: 299,
        loop: false,
        contentType: 'html', // or text
        // defaults to null for infinite loop
        loopCount: null,
        callback: function() {
            foo();
        },
        resetCallback: function() {
            newTyped();
        }
    });

    var resetElement = document.querySelector('.reset');
    if (resetElement) {
        resetElement.addEventListener('click', function() {
            document.getElementById('typed')._typed.reset();
        });
    }
    // 
    Typed.new("#typed2", {
        stringsElement: document.getElementById('typed-strings2'),
        typeSpeed: 22,
        backDelay: 299,
        loop: false,
        contentType: 'html', // or text
        // defaults to null for infinite loop
        loopCount: null,
        callback: function() {
            foo();
        },
        resetCallback: function() {
            newTyped();
        }
    });

    var resetElement = document.querySelector('.reset');
    if (resetElement) {
        resetElement.addEventListener('click', function() {
            document.getElementById('typed2')._typed.reset();
        });
    }
    // 
    Typed.new("#typed3", {
        stringsElement: document.getElementById('typed-strings3'),
        typeSpeed: 22,
        backDelay: 299,
        loop: false,
        contentType: 'html', // or text
        // defaults to null for infinite loop
        loopCount: null,
        callback: function() {
            foo();
        },
        resetCallback: function() {
            newTyped();
        }
    });

    var resetElement = document.querySelector('.reset');
    if (resetElement) {
        resetElement.addEventListener('click', function() {
            document.getElementById('typed3')._typed.reset();
        });
    }
});

function newTyped() { /* A new typed object */ }

function foo() {
    console.log("Callback");
}
// انیمیش عکس درباره ما

$('#about').waypoint(function() {
    $('.aboutImg').each(function() {
        var width = $(this).data("val");
        $(this).css('width', width + '%')
    });
}, {
    offset: '20%'
})