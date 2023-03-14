    function distanceFromHqInBlocks(pickupLocation) {
        const hqLocation = 42;
        return Math.abs(pickupLocation - hqLocation);
      }

      function distanceFromHqInFeet(pickupLocation) {
        const feetPerBlock = 264;
        const blocks = distanceFromHqInBlocks(pickupLocation);
        return blocks * feetPerBlock;
    }
    
    function distanceTravelledInFeet(start, stop) {
        const feetPerBlock = 264;
        const distanceTravelled = Math.abs(stop - start);
        return distanceTravelled * feetPerBlock;
    }

    function calculatesFarePrice(startB, stopB) {
        const distanceInFeet = distanceTravelledInFeet(startB, stopB)
        if (distanceInFeet <= 400) {
            return 0;
        }
        else if (distanceInFeet >= 400 && distanceInFeet <= 2000) {
            return (distanceInFeet - 400) * 0.02;
        }
        else if (distanceInFeet >= 2000 && distanceInFeet <= 2500) {
            return 25;
        }
        else {
            return `cannot travel that far`;
        }
    }
        