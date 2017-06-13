import express = require('express');
let router = express.Router();

let providedservices =[{
  serviceID:1,
  shortDescription:"Basic Hair Cut",
  fullDescription:"Our Hair Stylest will cut and style your scalp and or facial hair to any style you request",
  cost:1500,
  ImageUrl:"haircut icon"
},
{
  serviceID:2,
  shortDescription:"Expert Syling",
  fullDescription:"Our Expert Hair Stylest shampoo and message your scalp and gently blow dry and syle your hail to your request",
  cost:3500,
  ImageUrl:"Syling icon"
},
{
  serviceID:3,
  shortDescription:"Hair Dying and Frosting",
  fullDescription:"Proffectional Hair coloring including frosting hieghtlights and grey removal including mustash and beards ",
  cost:2000,
  ImageUrl:"coloring icon"
},
{
  serviceID:4,
  shortDescription:"Fingernails and Pedicure",
  fullDescription:"Proffectional Fingernails and Toenail polishing and styling",
  cost:1500,
  ImageUrl:"nail polish icon"
}];

router.get('/providedservices', function (req ,res,next){
  res.json(providedservices);
});
router.get('/providedservices/:serviceID',function (req,res,next){
  let id = parseInt(req.params['id']);
  let proService = findproService(id);
  if (proService){
    res.json(proService);
  }else {
    res.sendStatus(404);
  }
});
function findproService(id:number){
  let matches = providedservices.filter((proService)=> {
    return proService.serviceID == id;
  });
  return matches.length ? matches[0]:null;
}
export = router ;
