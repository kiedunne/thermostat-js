
  $(document).ready(function() {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    })
    var thermostat = new Thermostat();
     updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.turn_up();
     updateTemperature();
    });

  $('#temperature-down').click(function() {
    thermostat.turn_down();
     updateTemperature();
    });

   $('#reset').click(function() {
     thermostat.reset();
      updateTemperature();
   });

   $('#ps_on').click(function() {
     thermostat.ps_on();
     $('#power-saving-status').text('powersaver on')
      updateTemperature();
   });

   $('#ps_off').click(function() {
     thermostat.ps_off();
     $('#power-saving-status').text('powersaver off')
      updateTemperature();
   });

   function updateTemperature() {
     $('#temperature').text(thermostat.temp);
     thermostat.check_usage();
     $('#temperature').attr('class', thermostat.usage);
     $('#temperature').text(thermostat.temp);
  };

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    });
  });
});
