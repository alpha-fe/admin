var AppContainer = require('../containers/AppContainer');
var ChartContainer = require('../containers/ChartContainer');
var MapContainer = require('../containers/MapContainer');
var TableContainer = require('../containers/TableContainer');
var UiContainer = require('../containers/UiContainer');

module.exports = [{
    path: '/',
    component: AppContainer,
    children: [{
        path: '',
        component: ChartContainer
    }, {
        path: '/chart',
        component: ChartContainer
    },{
        path: '/map',
        component: MapContainer
    }, {
        path: '/table',
        component: TableContainer
    }, {
        path: '/ui',
        component: UiContainer
    }]
}];
