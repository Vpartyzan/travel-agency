function sumSeconds(input){
  let minute, hour;

  let second = (String(input%60).length == 2) ? input%60 : '0' + input%60;

  (input >= 60) ? minute = (String(Math.floor(input/60)%60).length == 2) ? Math.floor(input/60)%60 : '0' + Math.floor(input/60)%60
    : minute = '00';

  (input >= 60*60) ? hour = (String(Math.floor(input/(60*60))%60).length == 2) ? Math.floor(input/(60*60))%60 : '0' + Math.floor(input/(60*60))%60
    : hour = '00';

  return `${hour}:${minute}:${second}`;
}



export const formatTime = time => (time && typeof time == 'number' && time >= 0) ? sumSeconds(time) : null;