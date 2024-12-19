import { makeAutoObservable } from "mobx";

class LocationStore {
  locations = [
    { id: 1, name: "testenter.ru_01" },
    { id: 2, name: "testenter.ru_02" },
    { id: 3, name: "testenter.ru_03" },
    { id: 4, name: "testenter.ru_04" },
  ];

  environments = [
    { id: 1, name: "Test_192.168.220.157", locationID: 1 },
    { id: 2, name: "Test_192.168.220.158", locationID: 2 },
    { id: 3, name: "Test_192.168.220.159", locationID: 1 },
    { id: 4, name: "Test_192.168.220.160", locationID: 3 },
    { id: 5, name: "Test_192.168.220.161", locationID: 3 },
    { id: 6, name: "Test_192.168.220.162", locationID: 4 },
  ];

  servers = [
    { locationID: 1, servers: "MPTEST43, MPTEST42", status: "active" },
    { locationID: 2, servers: "MPTEST41, MPTEST40", status: "inactive" },
    { locationID: 3, servers: "MPTEST39, MPTEST38", status: "active" },
    { locationID: 4, servers: "MPTEST37, MPTEST36", status: "testing" },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  getEnvironmentsByLocation(locationID: number) {
    return this.environments.filter((env) => env.locationID === locationID);
  }

  getServersByLocation(locationID: number) {
    const server = this.servers.find((srv) => srv.locationID === locationID);
    return server ? server.servers : "Нет данных";
  }

  getServerStatus(locationID: number) {
    const server = this.servers.find((srv) => srv.locationID === locationID);
    return server ? server.status : "Неизвестно";
  }
}

export const locationStore = new LocationStore();
