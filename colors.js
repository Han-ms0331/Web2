function night_mode(self){
  var target = document.querySelector('body');
  var i;
  if(self.value === 'night')
  {
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value ='day';

    var a_tags = document.querySelectorAll('a');
    for(i=0;i<a_tags.length;i++)
    {
      a_tags[i].style.color='powderblue';

    }
  }
  else{
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value ='night';

    var a_tags = document.querySelectorAll('a');
    for(i=0;i<a_tags.length;i++)
    {
      a_tags[i].style.color='blue';

    }
  }
}
