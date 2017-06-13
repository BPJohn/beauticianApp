namespace NodeAuth{

  export class serviceProController {
    public proService;
     public message = 'Hello from the ProController';

    constructor(private ServicePro:NodeAuth.services.proService){
      this.proService = this.proService.listproService();
    }
  }
}
