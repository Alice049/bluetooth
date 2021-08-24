bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    bluetooth.startTemperatureService()
    bluetooth.startLEDService()
    bluetooth.startButtonService()
    bluetooth.startIOPinService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
