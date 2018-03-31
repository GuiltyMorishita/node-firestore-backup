/* @flow */

import Firebase from 'firebase-admin'

import fs from 'fs'
import mkdirp from 'mkdirp'

import { FirestoreBackup } from './firestore'
import type { BackupOptions } from './types'

export default function(_options: BackupOptions) {
  const options = Object.assign({}, _options, {databaseStartPath: ''})

  Firebase.initializeApp({
    credential: Firebase.credential.applicationDefault()
  })

  try {
    mkdirp.sync(options.backupPath)
  } catch (error) {
    throw new Error('Unable to create backup path \'' + options.backupPath + '\': ' + error)
  }

  options.database = Firebase.firestore()
  const backupClient = new FirestoreBackup(options)
  return backupClient.backup()
}
