function scuberGreetingForFeet(){
  it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
    expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
  });
  function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
      return 'This one is on me!';
    } else if (distance > 400 && distance <= 2000) {
      return 'That will be twenty bucks.';
    } else if (distance > 2000 && distance <= 2500) {
      return 'I will gladly take your thirty bucks.';
    } else {
      return 'No can do.';
    }
  }

}


function ternaryCheckCity(){
  function ternaryCheckCity(city) {
    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  }

}

function switchOnCharmFromTip(){
  function switchOnCharmFromTip(tip) {
    switch (true) {
      case (tip === 0):
        return 'No tip.';
      case (tip > 0 && tip <= 500):
        return 'Thank you so much.';
      case (tip > 500):
        return 'You are too generous!';
    }
  }

}