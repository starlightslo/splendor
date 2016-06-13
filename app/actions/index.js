var B = require('app/broker');

B.removeAllListeners();

require('app/actions/counter');

B.on('do', function(action) {
  B.emit(action.action, action);
});
