import { Server } from './server/server.model';

export class ServersService {
  private servers: Server[] = [
    new Server(1, 'ProductionServer', 'Online'),
    new Server(2, 'Testserver', 'offline'),
    new Server(3, 'Devserver', 'offline')
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    console.log('Id received: ' + id);
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: { name: string, status: string }) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
