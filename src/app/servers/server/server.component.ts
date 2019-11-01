import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Server } from './server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;
  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    console.log('Received the below params in URL.');
    console.log(this.activatedRoute.snapshot.params);
    console.log('id:' + this.activatedRoute.snapshot.params['id']);
    const idReceived: number = parseInt(this.activatedRoute.snapshot.params['id']);
    this.server = this.serversService.getServer(idReceived);
    console.log(typeof idReceived);
    console.log('Received the Object from Server service.' + this.server);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(parseInt(params['id']));
    });
  }

}
