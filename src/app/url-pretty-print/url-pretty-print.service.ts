import { Injectable } from '@angular/core';

export class UrlPrettyPrintService {


  static prettyPrint(urlStr: String): String {
    let url: URL;
    try {
      // TODO: this does not work if http or https is not present, use regex instead?
      url = new URL(urlStr.valueOf());
    } catch (e) {
      console.log(e);
      return e;
    }
    // console.log(url);
    let result = `Hostname: \t${url.hostname}\n`;
    if (url.port) {
      result = result + `Port: \t\t${url.port}`;
    }
    if (url.pathname) {
      result = result + `Path: \t\t${url.pathname}\n`;
    }

    const params = url.searchParams;
    if (params) {
      result = result + `Query Param: \n`;

      // console.log(maxKeyLength);
      for (const k of params.keys()) {
        console.log(`"${params.get(k)}"`);

        result = result + `${k}\t = ${params.get(k)}\n`;
      }

    }
    return result;
  }
}
