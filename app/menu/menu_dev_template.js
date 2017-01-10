const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

module.exports = {
    devMenuTemplate : {
        label: 'Development',
        submenu: [{
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click: function() {
                BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
            }
        }, {
            label: 'Toggle DevTools',
            accelerator: 'Alt+CmdOrCtrl+I',
            click: function() {
                BrowserWindow.getFocusedWindow().toggleDevTools();
            }
        }, {
            label: 'Quit',
            accelerator: 'CmdOrCtrl+Q',
            click: function() {
                app.quit();
            }
        }]
    }
}
