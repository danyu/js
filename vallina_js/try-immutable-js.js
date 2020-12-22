const { Map } = require('immutable@4.0.0-rc.9');
Map({ a: 1, b: 2 }).mapKeys(x => x.toUpperCase());