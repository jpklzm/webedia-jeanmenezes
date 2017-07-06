import React from 'react';
import { render } from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import Routes from './components/routes/Routes';

import './reset.css';
import './grid.css';
import './navbar.css';
import './index.css';

OfflinePluginRuntime.install();

render(<Routes />, document.getElementById('root'));
