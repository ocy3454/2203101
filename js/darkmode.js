var Link = {
  setColor: function (color){
    var alist = document.querySelectiorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = {
  setColor: function(color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value == '다크모드') {
    Body.setBackgroundColor('gray');
    Body.setColor("white");
    self.value = '라이트모드';
    Link.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('gray');
    self.value = '다크모드';
    Link.setColor('blue');
  }
}
