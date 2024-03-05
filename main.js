<script type="text/javascript">
  $('[data-tgreviews="scroll"]').on('click', function(event) {
       event.preventDefault();
     $('#tab-tgr_reviews').prop('checked', true);
  var top = 0;
     if ('form' === $(this).data('target')) {
      $('.tgreviews__form').each(function() {
   top = $(this).offset().top;
 });
  if (!top) {
    top = $('form[name="tgreviews"]').offset().top;
   }
} else {
      top = $('.x-product-description').offset().top;
 }
      $("html, body").animate({ scrollTop: top }, 1000);
 });
</script>
