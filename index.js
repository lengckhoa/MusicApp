/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
// AppRegistry.registerComponent(...);
import { PlaybackService } from './service';

// This needs to go right after you register the main component of your app

TrackPlayer.registerPlaybackService(() => PlaybackService);

// TrackPlayer.registerPlaybackService(() => require('./service'));

AppRegistry.registerComponent(appName, () => App);
