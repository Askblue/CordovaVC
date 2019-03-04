// Empty constructor
function vcplugin() {}

// The function that passes work along to native shells
VCPlugin.prototype.show = function(serverName, userMail, passWord, personalID, successCallback, errorCallback) {
  var options = {};
  options.serverName = serverName;
  options.userMail = userMail;
  options.passWord = passWord;
  options.personalID = personalID;

  cordova.exec(successCallback, errorCallback, 'vcplugin', 'show', [options]);
}

// Installation constructor that binds VCPlugin to window
vcplugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.vcplugin = new vcplugin();
  return window.plugins.vcplugin;
};

cordova.addConstructor(vcplugin.install);
