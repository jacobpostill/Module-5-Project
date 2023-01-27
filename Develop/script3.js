let clickEvent = (e) => {
    console.log(e.save);
  }
  for(var i = 0; i < save.length; i++) {
    save[i].addEventListener('click', clickEvent)
  };
