import { Injectable } from '@angular/core';

export class UrlPrettyPrintService {


  static prettyPrint(urlStr: string): string {
    let url: URL;
    try {
      url = new URL(urlStr);
    } catch (e) {
      console.log(e);
      return e;
    }
    console.log(url);
    let result = `Hostname: \t${url.hostname}\n`;
    if (url.port) {
      result = result + `Port: \t${url.port}`;
    }
    if (url.pathname) {
      result = result + `Path: \t${url.pathname}\n`;
    }

    const params = url.searchParams;
    if (params) {
      result = result + `Query Param: \t`;
      const keys = params.keys();

      for (const k of keys) {
        result = result + `${k}=${params.get(k)}\n`;
      }

    }
    return result;
  }
}
