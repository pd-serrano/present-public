import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { publicIp, publicIpv4, publicIpv6 } from 'public-ip';
import find from 'local-devices';

@Component({
  selector: 'app-checkinconnect',
  standalone: false,
  
  templateUrl: './checkinconnect.component.html',
  styleUrl: './checkinconnect.component.css'
})
export class CheckinconnectComponent implements OnInit {
  async ngOnInit() {
    this.evaluateMatch();
    this.setAddressRemote("IPv4 : " + 
      (await publicIpv4({
        fallbackUrls: [
          'https://ifconfig.co/ip'
        ]
      })) + " - IPv6 : " + 
      (await publicIpv6({
        fallbackUrls: [
          'https://ifconfig.co/ip'
        ]
      })));
  }

  targetAddress: string = "";
  targetAddressRemote: string = "";
  targetType: string = "";
  isAddressMatch: boolean = false;

  setAddress(input: string) {
    this.targetAddress = input;
  }
  getAddress() {
    return this.targetAddress;
  }
  setAddressRemote(input: string) {
    this.targetAddressRemote = input;
  }
  getAddressRemote() {
    return this.targetAddressRemote;
  }
  setType(input: string) {
    this.targetType = input;
  }
  getType() {
    return this.targetType;
  }
  setMatch() {
    this.isAddressMatch = this.evaluateMatch();
  }
  getMatch() {
    return this.isAddressMatch;
  }

  evaluateMatch() {
    console.log("BEGIN EVALUATE");
    console.log("This device: " + this.getAddress());
    console.log("Teacher's device: " + this.getAddressRemote());
    if (this.getAddress() == this.getAddressRemote())
      return true;
    else
      return false;
  }
// COMMENTED CODE BELOW cannot work in browser environment, will fallback to public IP for now
/*  evaluateMatch() {
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
   */
}
