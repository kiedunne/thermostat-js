
describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it('Thermostat starts at 20 degrees', function() {
      expect(thermostat.temp).toEqual(20)
    });

    it('Can turn up the thermostat', function(){
      thermostat.turn_up()
      expect(thermostat.temp).toEqual(21)
    });

    it('Can turn down the thermostat', function() {
      thermostat.turn_down()
      expect(thermostat.temp).toEqual(19)
    });

    it('Can turn powersaver on and off', function() {
        thermostat.ps_switch();
        expect(thermostat.ps).toEqual(false)
    });

    it('If power saver is on, cannot go above 25 degrees', function() {
      thermostat.turn_up();
      thermostat.turn_up();
      thermostat.turn_up();
      thermostat.turn_up();
      thermostat.turn_up();
      expect(function() {
        thermostat.turn_up();
      }).toThrowError('PS max temp 25 degrees');
    });

    it('If power saver is off, cannot go above 32 degrees', function() {
      thermostat.ps_switch();
      thermostat.turn_up();
      thermostat.turn_up();
      thermostat.turn_up();
      thermostat.turn_up();
      thermostat.turn_up();
      thermostat.turn_up();
      thermostat.turn_up();
      thermostat.turn_up();
      thermostat.turn_up();
      thermostat.turn_up();
      thermostat.turn_up();
      thermostat.turn_up();
      expect(function() {
        thermostat.turn_up();
      }).toThrowError('Non-PS max temp 32 degrees');
    });

    it('Can reset thermostat', function() {
        thermostat.turn_up()
        thermostat.reset();
        expect(thermostat.temp).toEqual(20)
    });

    it('Usage recognizes low', function() {
        thermostat.turn_down()
        thermostat.turn_down()
        thermostat.turn_down()
        thermostat.check_usage()
        expect(thermostat.usage).toEqual('low')
    });

    it('Usage recognizes high', function() {
      thermostat.ps_switch();
      thermostat.turn_up()
      thermostat.turn_up()
      thermostat.turn_up()
      thermostat.turn_up()
      thermostat.turn_up()
      thermostat.turn_up()
        thermostat.check_usage()
        console.log(thermostat.temp)
        expect(thermostat.usage).toEqual('high')
    });

});
