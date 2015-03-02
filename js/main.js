$(function() {
  var api = new Github("J5Beck");
   api.loadAll(renderAll);

});


// function icon(name) {
//   return JST.icon({icon: name});
// }

// $(function() {

  
//   var renderRepos = function(data) {
      
//       var sorted = _.sortBy(data, "stargazer_count").reverse() ; 
//       var topFive = sorted.slice(0,5);
//       _.each(topFive, function(data) {
//         $(".repos").append( JST.repo(data) );
//       });

//     }
// });

// var g = new Github("J5Beck");
// g.loadAll(function(data) {
//   renderRepos(data.repos);
// });

//renderOrgs(data.orgs)

// var Github = (function() {

//  function Github(name) {
//    this.username = name;

//    var apiBase = "https://api.github.com/users/";

//    this.endpoints = {
//      repos: apiBase + this.username + "/repos",
//      user: apiBase + this.username,
//      orgs: apiBase + this.username + "/orgs",
//      starred: apiBase + this.username + "/starred?per_page=100",
//    }
//  }

//  Github.prototype = {
//    hitApi: function(url, cb) {
//      $.ajax(url, {
//        data: {
//          access_token: "54e651d0fadcf7df9085df7f938d09003c58aac2"
//        },
//        success: function(data) {
//          cb(data);
//        },
//        error: function() {
//          console.log("Error loading", url);
//        }
//      });
//    },

//    repos: function(cb) {
//      this.hitApi(this.endpoints.repos, cb);
//    },

//    orgs: function(cb) {
//      this.hitApi(this.endpoints.orgs, cb);
//    },

//    starred: function(cb) {
//      this.hitApi(this.endpoints.starred, cb);
//    },

//    user: function(cb) {
//      this.hitApi(this.endpoints.user, cb);
//    },

//    loadAll: function(cb) {
//      // calls callback with hash of data like below

//      var dataGroups = {};

//      var afterCB = _.after(4, cb);

//      // 1 getting repos
//      this.repos(function(data){
//        dataGroups.repos = data;
//        afterCB(dataGroups);
//      });

//      // 2 getting orgs
//      this.orgs(function(data){
//        dataGroups.orgs = data;
//        afterCB(dataGroups);
//      });

//      // 3 getting user
//      this.user(function(data){
//        dataGroups.user = data;
//        afterCB(dataGroups);
//      });

//      // 4 getting starred
//      this.starred(function(data){
//        dataGroups.starred = data;
//        afterCB(dataGroups);
//      });
//    }

//  }

//  return Github

// })();