var Studio = {
  getId: function(id) {
    document.getElementById(id);
  }
  pm: getId("pm");
  sm: getId("sm");
  star: getId("star");
  stor: getId("stor");
}
var s = new Studio();

s.pm.addActionListener("click" function() {
s.getId("mf").src = "music.html";
});
