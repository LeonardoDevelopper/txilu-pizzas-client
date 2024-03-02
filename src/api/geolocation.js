export function toRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  // Função para calcular a distância entre dois pontos usando a fórmula Haversine
 export  function haversineDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // raio da Terra em quilômetros
    var dLat = toRadians(lat2 - lat1);
    var dLon = toRadians(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c;
    return (distance)
  }

  export function max()
  {

  }

  export function min(array)
  {
    var min = 0;
    for (let i = 0; i < array.length; i++) {
        if(i == 0)
            min = array[i];
        if(array[i].distance < min)
            min = array[i];
    }
    return min;
    
  }