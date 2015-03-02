var ProfileGroup = (function() {
  var template = JST["profile"];

  function ProfileGroup(data) {
    this.data = data;
  }

  ProfileGroup.prototype = {

    render: function() {
      return $( template(this.data) );
    }
  }
  return ProfileGroup;

});