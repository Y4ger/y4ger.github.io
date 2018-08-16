/* jshint esversion: 6 */

const balls = document.querySelectorAll('.ball');

const start = () => {
  balls.forEach((ball) => {
    // Slide in
    const count = (Math.floor((Math.random() * 10) + 1)) * 100;
    ball.animate([{
      height: '90%',
      width: '36px',
      filter: 'blur(6px)',
      transform: 'translateX(1000px)'
    }, {
      height: '90%',
      width: '36px',
      display: 'block',
      filter: 'blur(0px)',
      transform: 'translateX(0px)',
    }, ], {
      delay: count,
      duration: 1500,
      iterations: 1,
      fill: 'forwards',
      ease: 'ease-in'
    });

    // change color and become square
    ball.animate([{
      borderRadius: '100%'
    }, {
      borderRadius: '2px 7px 7px 2px'
    }, ], {
      delay: 1500 + count,
      duration: 800,
      iterations: 1,
      fill: 'forwards',
      ease: 'ease-out'
    });


    //grow and set fixed length
    const speed = Math.floor((Math.random() * 500) + 1);
    if (ball.classList.contains('ball-75')) {
      ball.animate([{
        width: '36px',
        transformOrigin: 'left',
      }, {
        width: '98%',
        transformOrigin: 'left',
      }, ], {
        duration: speed + 1500,
        iterations: 1,
        delay: 2500 + count,
        fill: 'forwards',
        direction: 'alternate',
        ease: 'ease-in-out'
      });
    } else if (ball.classList.contains('ball-50')) {
      ball.animate([{
        width: '36px',
        transformOrigin: 'left',
      }, {
        width: '98%',
        transformOrigin: 'left',
      }, {
        width: '65.2%',
        transformOrigin: 'left',
      }, ], {
        duration: speed + 1500,
        iterations: 1,
        delay: 2500 + count,
        fill: 'forwards',
        direction: 'alternate',
        ease: 'ease-in-out'
      });
    } else if (ball.classList.contains('ball-25')) {
      ball.animate([{
        width: '36px',
        transformOrigin: 'left',
      }, {
        width: '98%',
        transformOrigin: 'left',
      }, {
        width: '32.4%',
        transformOrigin: 'left',
      }, ], {
        duration: speed + 1500,
        iterations: 1,
        delay: 2500 + count,
        fill: 'forwards',
        direction: 'alternate',
        ease: 'ease-in-out'
      });
    }
  });
};

start();