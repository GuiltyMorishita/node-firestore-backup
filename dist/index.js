'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_options) {
  var options = Object.assign({}, _options, { databaseStartPath: '' });

  _firebaseAdmin2.default.initializeApp({
    credential: _firebaseAdmin2.default.credential.applicationDefault()
  });

  try {
    _mkdirp2.default.sync(options.backupPath);
  } catch (error) {
    throw new Error('Unable to create backup path \'' + options.backupPath + '\': ' + error);
  }

  options.database = _firebaseAdmin2.default.firestore();
  var backupClient = new _firestore.FirestoreBackup(options);
  return backupClient.backup();
};

var _firebaseAdmin = require('firebase-admin');

var _firebaseAdmin2 = _interopRequireDefault(_firebaseAdmin);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _firestore = require('./firestore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }