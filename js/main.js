function icon(name) {
  return JST.icon({icon: name});
}

$(function() {

  var url = "https://api.github.com/users/J5Beck/repos";

  $.ajax(url, {

    success: function(data) {
      
      var sorted = _.sortBy(data, "stargazer_count").reverse() ; 
      var topFive = sorted.slice(0,5);
      _.each(topFive, function(data) {
        $(".repos").append( JST.repo(data) );
      });

    }

  });

});