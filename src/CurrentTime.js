import React from 'react';

const CurrentTime = () => {
  const time = new Date();

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h24',
    timeStyle: 'medium'
  }

  const formattedTime = time.toLocaleDateString('pl-PL', options);

  return (
    <div>
      Current time: {formattedTime}
    </div>
  )
}

export default CurrentTime;
