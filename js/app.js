var renderAll = function(data) {

  var reposData   = data.repos;
  var userData    = data.user;
  var orgsData    = data.orgs;  
  var starredData = data.starred;

  var renderUser = function() {
    var userTemplate = JST["profile"];
    userData.stars = starredData.length;

    $(".leftside-container").html(userTemplate(userData));   
   };

  var renderOrg = function() {
    var userTemplate = JST["orgs"];
      $(".leftside-container").append(userTemplate(orgsData[0]));
   };

  var renderRepo = function(repo) {
    var repoTemplate = JST["repolist"];

    var $el = $(".main");
        $el.append(repoTemplate(repo));
  };

  var renderRepos = function() {
    _.each(reposData, function(repo){
      renderRepo(repo)
 
    });
  };

  renderUser();
  renderOrg();
  renderRepos();

}