'use strict';

function Thermostat() {
  this.temp = 20
  this.ps = true
  this.usage = 'medium'
};

  Thermostat.prototype.turn_up = function(degrees) {
    return this.temp += degrees
  };

  Thermostat.prototype.turn_up = function(degrees) {
    if(this.ps == true && (this.temp + degrees > 25)) {
      throw new Error('PS max temp 25 degrees');
  } else if(this.ps == false && (this.temp + degrees > 32)) {
      throw new Error('Non-PS max temp 32 degrees');
  }
    this.temp += degrees
  };

  Thermostat.prototype.turn_down = function(degrees) {
    return this.temp -= degrees
  };

  Thermostat.prototype.ps_switch = function() {
    this.ps = !this.ps;
  };

  Thermostat.prototype.reset = function() {
    this.temp = 20;
  }

  Thermostat.prototype.check_usage = function() {
    if(this.temp < 18) {
      this.usage = 'low';
    } else if(18 >= this.temp && this.temp <= 25 ) {
      this.usage = 'medium';
    } else {
      this.usage = 'high';
    }
  };
