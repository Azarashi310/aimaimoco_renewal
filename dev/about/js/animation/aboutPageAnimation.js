export default class AboutPageAnimation{
	constructor($targets){
		this.$targets = $targets;
		this.targetList = {};
	}
	init(){
		$.each(this.$targets,()=>{
			console.log(this);
		});
		$(window).on('scroll',this,this.triggerAnimation);
	}
	triggerAnimation(){

	}
}