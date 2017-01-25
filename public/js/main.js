$(function () {
  var timeline = $('.timeline-expanded').slick({
    accessibility: false,
    adaptiveHeight: true,
    arrows: false,
    infinite: false,
    mobileFirst: true,
    draggable: false,
  })
  timeline.on('beforeChange', function(e, slick, current, next) {
    $('.timeline-line .dot[data-id="' + (current + 1) + '"]').removeClass('active')
    $('.timeline-line .dot[data-id="' + (next + 1) + '"]').addClass('active')
  })

  $('.timeline-line .dot').on('click', function (e) {
    timeline.slick('slickGoTo', this.dataset.id - 1)
  })

  $('.case-study-tabs a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
})

//# sourceMappingURL=main.js.map
