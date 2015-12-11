
/* Tab
   ========================================================================== */
var $tabswitch = $('#tab-switch');
var $tabctrl = $tabswitch.find('.tab-ctrl');

// set grid count
$tabctrl.addClass('grid-' + $tabctrl.find('li').length);

if($tabctrl.attr('data-role') === 'tab-switch'){
  $tabctrl.on('click', 'li', function(e){
    e.preventDefault();

    var $li = $(this);
    if(!$li.hasClass('active')){
      var $tarpanel = $($li.find('a').attr('href'));
      if($tarpanel.length > 0){
        $tarpanel.addClass('active').siblings('.tab-panel').removeClass('active');
      }

      $li.addClass('active').siblings('li').removeClass('active');
    }
  });
}
