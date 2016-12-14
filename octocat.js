function octocat(n,a){
  this.name=n;
  this.arms=a;

  this.slap=function(){
    for(a=0;a<this.arms;a++)
    console.log("slap");
  };
}
var joey= new octocat("joey",5);
var phil= new octocat("phil",2);
var peter= new octocat("peter",17);
