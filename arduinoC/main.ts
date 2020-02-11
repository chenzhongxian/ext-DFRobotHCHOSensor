//% color="#2F6869" iconWidth=40 iconHeight=40
namespace HCHOSensor {
    
    //% block="HCHO sensor initliallize pin [SSER] RX [SSRXD] TX [SSTXD]" blockType="command"
    //% SSER.shadow="dropdown" SSER.options="SSER"
    //% SSTXD.shadow="dropdown" SSTXD.options="SSTXD"
    //% SSRXD.shadow="dropdown" SSRXD.options="SSRXD"
    export function beginSoftSerial(parameter: any, block: any) {
        let sser = "hcho" + parameter.SSER.code;
        let tx = parameter.SSTXD.code;
        let rx = parameter.SSRXD.code;
        Generator.addInclude("includeHCHO", "#include <DFRobotHCHOSensor.h>");
        Generator.addInclude("includesoftSerial", "#include <SoftwareSerial.h>");
        Generator.addObject("softSerialObject", "SoftwareSerial", `${sser}(${rx}, ${tx});`);
        Generator.addObject("HCHOObject" + sser, "DFRobotHCHOSensor", `hchoSensor(&${sser});`);
        Generator.addSetup("HCHOSerialSetup" + sser, `${sser}.begin(9600);`);
        Generator.addSetup("HCHOSerialListen" + sser, `${sser}.listen();`);
    }

    //% block="HCHO sensor initliallize pin [SER] RX [RXD] TX [TXD]" blockType="command"
    //% SER.shadow="dropdown" SER.options="SER"
    //% RXD.shadow="dropdown" RXD.options="RXD"
    //% TXD.shadow="dropdown" TXD.options="TXD"
    export function beginSerial(parameter: any, block: any) {
        let ser = parameter.SER.code;
        let rx = parameter.RXD.code;
        let tx = parameter.TXD.code;
        Generator.addInclude("includeHCHO", "#include <DFRobotHCHOSensor.h>");
        Generator.addObject("HCHOObject" + ser, "DFRobotHCHOSensor", `hchoSensor(&${ser});`);
        if (Generator.board === 'arduino') {
            Generator.addSetup("HCHOSerialSetup", `${ser}.begin(9600);`);
        } else if (Generator.board === 'arduinonano') {
            Generator.addSetup("HCHOSerialSetup", `${ser}.begin(9600);`);
        } else if (Generator.board === 'leonardo') {
            Generator.addSetup("HCHOSerialSetup", `${ser}.begin(9600);`);
        } else if (Generator.board === 'mega2560') {
            Generator.addSetup("HCHOSerialSetup", `${ser}.begin(9600);`);
        } else if (Generator.board === 'arduinounor3') {
            Generator.addSetup("HCHOSerialSetup", `${ser}.begin(9600);`);
        } else if (Generator.board === 'microbit') {
            Generator.addSetup("HCHOSerialSetup", `${ser}.begin(9600, ${rx}, ${tx});`);
        } else if (Generator.board === 'esp32') {
            Generator.addSetup("HCHOSerialSetup", `${ser}.begin(9600, ${rx}, ${tx});`);
        }
    }

    //% block="HCHO sensor available" blockType="boolean"
    export function available() {
        Generator.addCode("hchoSensor.available() > 0");
    }

    //% block="Read HCHO sensor value (UART Mode)" blockType="reporter"
    export function uartReadPPM() {
        Generator.addCode("hchoSensor.uartReadPPM()");
    }

    //% block="Read HCHO sensor value pin [APIN] (DAC Mode)" blockType="reporter"
    //% APIN.shadow="dropdown" APIN.options="APIN"
    export function dacReadPPM(parameter: any, block: any) {
        let ax = parameter.APIN.code;
        Generator.addInclude("includeHCHO", "#include <DFRobotHCHOSensor.h>");
        if (Generator.board === 'arduino') {
            Generator.addObject("HCHOObject" + ax, "DFRobotHCHOSensor", `hchoSensor${ax}(${ax}, 5.0);`);
        } else if (Generator.board === 'arduinounor3') {
            Generator.addObject("HCHOObject" + ax, "DFRobotHCHOSensor", `hchoSensor${ax}(${ax}, 5.0);`);
        } else if (Generator.board === 'arduinonano') {
            Generator.addObject("HCHOObject" + ax, "DFRobotHCHOSensor", `hchoSensor${ax}(${ax}, 5.0);`);
        } else if (Generator.board === 'leonardo') {
            Generator.addObject("HCHOObject" + ax, "DFRobotHCHOSensor", `hchoSensor${ax}(${ax}, 5.0);`);
        } else if (Generator.board === 'mega2560') {
            Generator.addObject("HCHOObject" + ax, "DFRobotHCHOSensor", `hchoSensor${ax}(${ax}, 5.0);`);
        } else {
            Generator.addObject("HCHOObject" + ax, "DFRobotHCHOSensor", `hchoSensor${ax}(${ax}, 3.3);`);
        }
        Generator.addCode(`hchoSensor${ax}.dacReadPPM()`);
    }
}
