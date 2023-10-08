function distanceFromHqInBlocks(someValue) {
    
    const hqStreet = 42;
    
    return Math.abs(someValue - hqStreet);
  }
  
  function distanceFromHqInFeet(someValue) {
    
    const blocks = distanceFromHqInBlocks(someValue);
    
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    
    const blocks = Math.abs(destination - start);
    
    return blocks * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
   
    if (distanceInFeet <= 400) {
      return 0;
    }
    
    else if (distanceInFeet <= 2000) {
      
      return (distanceInFeet - 400) * 0.02;
    }
    
    else if (distanceInFeet <= 2500) {
      
      return 25;
    }
    
    else {
      return 'cannot travel that far';
    }
  }
  