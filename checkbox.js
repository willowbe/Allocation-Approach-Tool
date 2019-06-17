$(document).ready(function(){
    $('#approaches div').show();

    $('input[type="checkbox"]').click(function(){
        select()
    })
});

function select()
{
   $('#approaches div').hide();

   var $div=$('#approaches div');
   var check=false;
   var filter = [];

   $('ul').each(function()
   {
     filter = [];
     check = false;

     $(this).find('input[type="checkbox"]:checked').each(function()
     {
           var css=$(this).val();
           filter.push('.'+css);
           check = true;
     });

     if (check)
     {
       $div = $div.filter(filter.join(','));
     }
   })

   $div.show();
}
