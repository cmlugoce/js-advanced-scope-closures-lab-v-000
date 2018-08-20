function produceDrivingRange(blockRange) {
    return function(start, end) {
      const distance = parseInt(end) - parseInt(start);
      const difference = Math.abs(blockRange - distance);
       if (distance > blockRange) {
        return `${difference} blocks out of range`;
      } else if (distance < blockRange) {
        return `within range by ${difference}`
      }
    }
  }
   function produceTipCalculator(percent) {
    return function(amount) {
      return amount * percent
    }
  }
   function createDriver(){
    let driverId = 0
    return class {
      constructor(name) {
        this.name = name
        this.id = ++driverId;
      }
    }
  }