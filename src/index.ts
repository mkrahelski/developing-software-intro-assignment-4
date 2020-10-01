import { expect } from "chai";
import "mocha";
import { SayHello } from "./hello";

//https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2
//for exmample of how to build tests

console.log("Hello!");
//only issue is I am not sure why having other files in src breaks things.

SayHello();
//specifically it was something odd that broke because functions can be imported. But maybe the test was meant to break unclear.