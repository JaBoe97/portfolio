/* lightbox */
function closeLightbox() {
  $("#lightbox-container").css("display", "none");
  $("body").css("overflow", "auto");
}

/* onclick events for product images to be sent to live pages */

function openLiveSiteNotification() {
  window.location = "https://jaboe97.github.io/notifications_page";
}

function openLiveSiteResultSummary() {
  window.location = "https://jaboe97.github.io/result_summary_component";
}

function openLiveSiteFourCard() {
  window.location = "https://jaboe97.github.io/four_card_feature_section";
}

function openLiveSiteECommerce() {
  window.location = "https://jaboe97.github.io/ecommerce_product_page";
}

/* dropdown info-box for CV */

function toggleSemesterProjectInfoBox() {
  $("#semesterProject").toggleClass("displayed");
  $("#practicleSemester").removeClass("displayed");
  $("#thesis").removeClass("displayed");
}

function togglePracticleSemesterInfoBox() {
  $("#practicleSemester").toggleClass("displayed");
  $("#semesterProject").removeClass("displayed");
  $("#thesis").removeClass("displayed");
}

function toggleThesisInfoBox() {
  $("#thesis").toggleClass("displayed");
  $("#semesterProject").removeClass("displayed");
  $("#practicleSemester").removeClass("displayed");
}
