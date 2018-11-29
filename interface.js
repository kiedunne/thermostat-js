$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.turn_up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.turn_down();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temp);
  };
});
