namespace NodeAuth.services {

  export class proService{
    private proServiceResource;

    public listproService(){
      return this.proServiceResource.query();
    }
    public getproService(id){
      return this.proServiceResource.query({id:id});
    }
    constructor($resource:ng.resource.IResourceService){
      this.proServiceResource =$resource('/Providerservices/Providerservices/:servieID');
    }
  }

  angular.module('NodeAuth').service('ProService',proService)

}
