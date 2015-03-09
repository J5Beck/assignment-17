this["JST"] = this["JST"] || {};
this["JST"]["icon"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n\n\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["orgs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"orginization\">\n  <h3>Organizations</h3>\n    <a href=\"/tiy-tpa-js-q1-2015\"><img class=\"org-avatar\" src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\"></a>\n</div>\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["profile"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"leftside-profile\">\n  <img class=\"avatar\" src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"names\">\n    <span class=\"fullname\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n    <span class=\"username\">"
    + escapeExpression(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"login","hash":{},"data":data}) : helper)))
    + "</span>\n  </div>\n  <ul class=\"details\">\n    <li class=\"org\"><span class=\"octicon octicon-organization\"></span>&nbsp "
    + escapeExpression(((helper = (helper = helpers.company || (depth0 != null ? depth0.company : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"company","hash":{},"data":data}) : helper)))
    + "</li>\n    <li class=\"email\"><span class=\"octicon octicon-mail\"></span><a href=\"mailto:J5Beck@users.noreply.github.com\">&nbsp J5Beck@users.noreply.github.com</a></li>\n    <li><span class=\"octicon octicon-clock\"></span>&nbsp "
    + escapeExpression(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"created_at","hash":{},"data":data}) : helper)))
    + "</li>\n  </ul>\n  <div class=\"stats\">\n    <ul class=\"followers\">\n      <li>"
    + escapeExpression(((helper = (helper = helpers.followers || (depth0 != null ? depth0.followers : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"followers","hash":{},"data":data}) : helper)))
    + "</li>\n      <li class=\"follow-num\">Followers</li>\n    </ul>\n    <ul class=\"starred\"> \n      <li>"
    + escapeExpression(((helper = (helper = helpers.stars || (depth0 != null ? depth0.stars : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stars","hash":{},"data":data}) : helper)))
    + "</li>\n      <li class=\"star-num\">Starred</li>\n    </ul>\n    <ul class=\"following\"> \n      <li>"
    + escapeExpression(((helper = (helper = helpers.following || (depth0 != null ? depth0.following : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"following","hash":{},"data":data}) : helper)))
    + "</li>\n      <li class=\"following-num\">Following</li>\n    </ul>\n  </div>\n</div>\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["repo"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["repolist"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"repobox\">\n  <div class=\"repo-star-branch\">\n    <span class=\"octicon octicon-star\">&nbsp"
    + escapeExpression(((helper = (helper = helpers.stargazers_count || (depth0 != null ? depth0.stargazers_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stargazers_count","hash":{},"data":data}) : helper)))
    + "</span>\n    <span class=\"octicon octicon-git-branch\">&nbsp"
    + escapeExpression(((helper = (helper = helpers.forks_count || (depth0 != null ? depth0.forks_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"forks_count","hash":{},"data":data}) : helper)))
    + "</span>\n    <span class=\"code-type\">"
    + escapeExpression(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"language","hash":{},"data":data}) : helper)))
    + "</span>\n  </div>\n    <h3 class=\"repo-name\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n    <ul>\n      <li class=\"repo-desc\">"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</li>\n      <li class=\"repo-stats\">Updated "
    + escapeExpression(((helper = (helper = helpers.updated_at || (depth0 != null ? depth0.updated_at : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"updated_at","hash":{},"data":data}) : helper)))
    + "</li>\n    </ul>  \n</div>\n\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["starred"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <div class=\"starred\">\n    <p class=\"value\">"
    + escapeExpression(((helper = (helper = helpers.stars || (depth0 != null ? depth0.stars : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stars","hash":{},"data":data}) : helper)))
    + "</p>\n    <p class=\"text\">Starred</p>\n  </div>";
},"useData":true});