
$( document ).ready(function() {

$('.approach').hide();



  var $filterCheckboxes = $('input[type="checkbox"]');
  //$filterCheckboxes.on('change', function() { //can we just filter all the time?
$filterCheckboxes.on('change', function() { //can we just filter all the time?
    var selectedFilters = {};
    $filterCheckboxes.filter(':checked').each(function() {
      if (!selectedFilters.hasOwnProperty(this.name)) {
        selectedFilters[this.name] = [];
      }
      selectedFilters[this.name].push(this.value);
      if($(selectedFilters).prop('checked') == false){
        $('.approach').hide();
      }


    });

    // create a collection containing all of the filterable elements
    var $filteredResults = {};
    // loop over the selected filter name -> (array) values pairs
    $.each(selectedFilters, function(name, filterValues) {
      // filter each .approach element
      $filteredResults = $('.approach').filter(function() {
        var matched = false,
        currentFilterValues = $(this).data('category').split(' ');
        // loop over each category value in the current .approach's data-category
        $.each(currentFilterValues, function(_, currentFilterValue) {
          // if the current category exists in the selected filters array
          // set matched to true, and stop looping. as we're ORing in each
          // set of filters, we only need to match once
          if ($.inArray(currentFilterValue, filterValues) != -1) {
            matched = true;
            return false;
          }
        });
        // if matched is true the current .approach element is returned
        return matched;
      });
    });
    if (selectedFilters.length ==0){
      $('.approach').hide();
    }
    else{
  //  $('.approach').hide().filter($filteredResults).show();
$('.approach').hide();
($filteredResults).show();

}
  });



  function uncheckAll() {
  $("input[type='checkbox']:checked").prop('checked', false)
}
$('.clear').on('click', uncheckAll)
});
