// Using a transpiler
import { input } from '@angular/core';
import find from 'local-devices'

// Find all local network devices.
find().then(devices => {
  devices /*
  [
    { name: '?', ip: '192.168.0.10', mac: '...' },
    { name: '...', ip: '192.168.0.17', mac: '...' },
    { name: '...', ip: '192.168.0.21', mac: '...' },
    { name: '...', ip: '192.168.0.22', mac: '...' }
  ]
  */
})


// Find a single device by ip address.
find({ address: '192.168.0.10' }).then(device => {
  if (device) {
    console.log("FOUND");
  }
  else {
    console.log("NOT FOUND");
  }
})

// Find all devices within 192.168.0.1 to 192.168.0.25 range
find({ address: '192.168.0.1-192.168.0.25' }).then(devices => {
    devices /*
    [
      { name: '?', ip: '192.168.0.10', mac: '...' },
      { name: '...', ip: '192.168.0.17', mac: '...' },
      { name: '...', ip: '192.168.0.21', mac: '...' },
      { name: '...', ip: '192.168.0.22', mac: '...' }
    ]
    */
})

// Find all devices within /24 subnet range of 192.168.0.x
find({ address: '192.168.0.0/24' }).then(devices => {
    devices /*
    [
      { name: '?', ip: '192.168.0.10', mac: '...' },
      { name: '...', ip: '192.168.0.50', mac: '...' },
      { name: '...', ip: '192.168.0.155', mac: '...' },
      { name: '...', ip: '192.168.0.211', mac: '...' }
    ]
    */
})

// Find all devices without resolving host names (Uses 'arp -an') - this is more performant if hostnames are not needed 
// (This flag is ignored on Windows machines as 'arp -an' is not supported)
find({ skipNameResolution: true }).then(devices => {
    devices /*
    [
      { name: '?', ip: '192.168.0.10', mac: '...' },
      { name: '?', ip: '192.168.0.50', mac: '...' },
      { name: '?', ip: '192.168.0.155', mac: '...' },
      { name: '?', ip: '192.168.0.211', mac: '...' }
    ]
    */
})

// Find all devices, specifying your own path for the `arp` binary 
find({ arpPath: '/usr/sbin/arp' }).then(devices => {
    devices /*
    [
      { name: '?', ip: '192.168.0.10', mac: '...' },
      { name: '?', ip: '192.168.0.50', mac: '...' },
      { name: '?', ip: '192.168.0.155', mac: '...' },
      { name: '?', ip: '192.168.0.211', mac: '...' }
    ]
    */
})

export class QueryDevices {
  targetAddress: string = "";
  targetType: string = "";
  isAddressMatch: boolean = false;

  setAddress(input: string) {
    this.targetAddress = input;
  }
  getAddress() {
    return this.targetAddress;
  }
  setType(input: string) {
    this.targetType = input;
  }
  getType() {
    return this.targetType;
  }
  setMatch(input: boolean) {
    this.isAddressMatch = input;
  }
  getMatch() {
    return this.isAddressMatch;
  }

  evaluateMatch() {
    console.log("BEGIN EVALUATE");
    if (this.getType() == "IP") {
      find({ address: this.getAddress() }).then(device => {
        if (device) {
          console.log("FOUND : " + this.getAddress());
        }
        else {
          console.log("NOT FOUND : " + this.getAddress());
        }
      })
    }
  }
}