angular.module('eventsFilter', [])

  .filter('ampm', function() {
    return function(time) {
      if (time !== undefined){
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/);
        if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = time[0] < 12 ? 'am' : 'pm'; // Set am/pm
        time[0] = time[0] % 12 || 12; // Adjust hours
        }
      return time.join (''); // return adjusted time or original string
      }
    }
  });

  angular.module('eventsFilter').filter('addressName', function() {
    return function(address) {
      address = address.split("<br>");
      addressName = address[0];
      return addressName;
    }
  });

  angular.module('eventsFilter').filter('addressLocation', function() {
    return function(address) {
      address = address.split("<br>");
      addressLocation = address[1];
      return addressLocation;
    }
  });
