
var RepositoryGroup = (function() {
  var template = JST["repotab"];

  function RepositoryGroup(data) {
    this.data = data;
  }

  RepositoryGroup.prototype = {

    render: function() {
      return $( template(this.data) );
    }
  }
  return RepositoryGroup;

});