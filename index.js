var _ = require('underscore-contrib');

module.exports = function(obj) {
  'use strict';
  return {
    push: function(valueName, arrayName) {
      if (!_.isObject(obj)) {
        throw new TypeError('Object is required for this function.');
      }
      if (!_(obj).hasPath(valueName)) {
        return _(obj).getPath(arrayName) || [];
      }
      return _.cons(_(obj).getPath(valueName), _(obj).getPath(arrayName) || []);  
    }
  };
};