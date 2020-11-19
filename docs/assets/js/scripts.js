$(function () {
  var all_classes = "";
  $.each($("li", ".social-class"), function (index, element) {
    all_classes += " is-" + $(element).data("code");
  });
  $("li", ".social-class").mouseenter(function () {
    var icon_name = $(this).data("code");
    if ($(this).data("icon")) {
      icon_name = $(this).data("icon");
    }
    var icon =
      "<span class='icon is-medium'><i class='fab fa-lg fa-" +
      icon_name +
      "'></i></span>";
    $(".button", ".social-sizes").html(
      icon + "<span>" + $(this).data("name") + "</span"
    );
    // new
    $(".text-styles-regular").html(
      "<em><code>.has-text-" + $(this).data("code") + "</code></em>"
    );
    $(".text-styles-light").html(
      "<em><code>.has-text-" + $(this).data("code") + "-light</code></em>"
    );
    $(".text-styles-dark").html(
      "<em><code>.has-text-" + $(this).data("code") + "-dark</code></em>"
    );
    $(".background-styles-regular").html(
      "<em><code>.has-background-" + $(this).data("code") + "</code></em>"
    );
    $(".background-styles-light").html(
      "<em><code>.has-background-" + $(this).data("code") + "-light</code></em>"
    );
    $(".background-styles-dark").html(
      "<em><code>.has-background-" + $(this).data("code") + "-dark</code></em>"
    );
    $(".social-icon", ".social-sizes").html(icon);
    $(".button", ".social-sizes").removeClass(all_classes);
    $(".button", ".social-sizes").addClass("is-" + $(this).data("code"));
  });
  $(
    $("li", ".social-class")[
      Math.floor($("li", ".social-class").length * Math.random())
    ]
  ).mouseenter();
});
//start of left tabs
(function () {
  let tabs = document.querySelectorAll(".left-tabs li");
  let leftTabs = document.querySelectorAll(".left-tabs-content");

  let deactivateAllTabs = function () {
    tabs.forEach(function (tab) {
      tab.classList.remove("is-active");
    });
  };

  let hideTabsContent = function () {
    leftTabs.forEach(function (tabContent) {
      tabContent.classList.remove("is-active");
    });
  };

  let activateTabsContent = function (tab) {
    leftTabs[getIndex(tab)].classList.add("is-active");
  };

  let getIndex = function (el) {
    return [...el.parentElement.children].indexOf(el);
  };

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      deactivateAllTabs();
      hideTabsContent();
      tab.classList.add("is-active");
      activateTabsContent(tab);
    });
  });

  tabs[0].click();
})();
// end of left tabs

//start of right tabs
(function () {
  let tabs = document.querySelectorAll(".right-tabs li");
  let rightTabs = document.querySelectorAll(".right-tabs-content");

  let deactivateAllTabs = function () {
    tabs.forEach(function (tab) {
      tab.classList.remove("is-active");
    });
  };

  let hideTabsContent = function () {
    rightTabs.forEach(function (tabContent) {
      tabContent.classList.remove("is-active");
    });
  };

  let activateTabsContent = function (tab) {
    rightTabs[getIndex(tab)].classList.add("is-active");
  };

  let getIndex = function (el) {
    return [...el.parentElement.children].indexOf(el);
  };

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      deactivateAllTabs();
      hideTabsContent();
      tab.classList.add("is-active");
      activateTabsContent(tab);
    });
  });

  tabs[0].click();
})();
// end of right tabs
