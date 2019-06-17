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
   $('input[type="checkbox"]:checked').each(function(){
           var css=$(this).val();
           //$div=$div.filter('.'+css);
           filter.push('.'+css);

       //check=true;
   })

   $div.filter(filter.join(',')).show();

   //if(check==true || check==false) $div.show();
}
