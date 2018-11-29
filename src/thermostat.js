'use strict';

function Thermostat() {
  this.temp = 20
  this.ps = true
  this.usage = 'medium'
};

  Thermostat.prototype.turn_up = function() {
    return this.temp += 1
  };

  Thermostat.prototype.turn_up = function() {
    if(this.ps == true && (this.temp + 1 > 25)) {
      throw new Error('PS max temp 25 degrees');
  } else if(this.ps == false && (this.temp + 1 > 32)) {
      throw new Error('Non-PS max temp 32 degrees');
  }
    this.temp += 1
  };

  Thermostat.prototype.turn_down = function() {
    return this.temp -= 1
  };

  Thermostat.prototype.ps_switch = function() {
    this.ps = !this.ps;
  };

  Thermostat.prototype.ps_on = function() {
    this.ps = true;
  };

  Thermostat.prototype.ps_off = function() {
    this.ps = false;
  };

  Thermostat.prototype.reset = function() {
    this.temp = 20;
  }

  Thermostat.prototype.check_usage = function() {
    if(this.temp <= 18) {
      this.usage = 'low';
    } else if(this.temp >18 && this.temp < 25 ) {
      this.usage = 'medium';
    } else {
      this.usage = 'high';
    }
  };
