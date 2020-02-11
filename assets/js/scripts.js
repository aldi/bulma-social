$(function () {
  var all_classes = "";
  $.each($('li', '.social-class'), function (index, element) {
    all_classes += " is-" + $(element).data("code");
  });
  $('li', '.social-class').mouseenter(function () {
    var icon_name = $(this).data("code");
    if ($(this).data("icon")) {
      icon_name = $(this).data("icon");
    }
    var icon = "<span class='icon is-medium'><i class='fab fa-" + icon_name + "'></i></span>";
    $('.button', '.social-sizes').html(icon + "<span>" + $(this).data("name") + "</span");
    $('.social-icon', '.social-sizes').html(icon);
    $('.button', '.social-sizes').removeClass(all_classes);
    $('.button', '.social-sizes').addClass("is-" + $(this).data('code'));
  });
  $($('li', '.social-class')[Math.floor($('li', '.social-class').length * Math.random())]).mouseenter();
});
document.addEventListener('DOMContentLoaded', function () {
  var $highlights = getAll('.highlight');
  var itemsProcessed = 0;
  if ($highlights.length > 0) {
    $highlights.forEach(function ($el) {
      var copyEl = '<button class="button is-small bd-copy">Copy</button>';
      var expandEl = '<button class="button is-small bd-expand">Expand</button>';
      $el.insertAdjacentHTML('beforeend', copyEl);

      var $parent = $el.parentNode;
      if ($parent && $parent.classList.contains('bd-is-more')) {
        var showEl = '<button class="bd-show"><div><span class="icon"><i class="fas fa-code"></i></span> <strong>Show code</strong></div></button>';
        $el.insertAdjacentHTML('beforeend', showEl);
      } else if ($el.firstElementChild.scrollHeight > 480 && $el.firstElementChild.clientHeight <= 480) {
        $el.insertAdjacentHTML('beforeend', expandEl);
      }

      itemsProcessed++;
      if (itemsProcessed === $highlights.length) {
        addHighlightControls();
      }
    });
  }
  //start of tabs
  let tabsWithContent = (function () {
    let tabs = document.querySelectorAll('.tabs li');
    let tabsContent = document.querySelectorAll('.tab-content');

    let deactvateAllTabs = function () {
      tabs.forEach(function (tab) {
        tab.classList.remove('is-active');
      });
    };

    let hideTabsContent = function () {
      tabsContent.forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
    };

    let activateTabsContent = function (tab) {
      tabsContent[getIndex(tab)].classList.add('is-active');
    };

    let getIndex = function (el) {
      return [...el.parentElement.children].indexOf(el);
    };

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        deactvateAllTabs();
        hideTabsContent();
        tab.classList.add('is-active');
        activateTabsContent(tab);
      });
    });

    tabs[0].click();
  })();

  // end of tabs
  function addHighlightControls() {
    var $highlightButtons = getAll('.highlight .bd-copy, .highlight .bd-expand');

    $highlightButtons.forEach(function ($el) {
      $el.addEventListener('mouseenter', function () {
        $el.parentNode.classList.add('bd-is-hovering');
      });

      $el.addEventListener('mouseleave', function () {
        $el.parentNode.classList.remove('bd-is-hovering');
      });
    });

    var $highlightExpands = getAll('.highlight .bd-expand');

    $highlightExpands.forEach(function ($el) {
      $el.addEventListener('click', function () {
        $el.parentNode.firstElementChild.style.maxHeight = 'none';
      });
    });

    var $highlightShows = getAll('.highlight .bd-show');

    $highlightShows.forEach(function ($el) {
      $el.addEventListener('click', function () {
        $el.parentNode.parentNode.classList.remove('bd-is-more-clipped');
      });
    });
  }
  new ClipboardJS('.bd-copy', {
    target: function (trigger) {
      return trigger.previousElementSibling.firstElementChild;
    }
  });
  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

});