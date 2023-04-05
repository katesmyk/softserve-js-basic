// На HTML-сторінці є посилання <a>. 
// У випадку коли, href починається на https://, 
// потрібно додати посиланню атрибут target="_blank".

// const link = document.querySelector('a');
// if(link.href.startsWith('https://')){
// 	link.setAttribute('target', '_blank');
// }



$("a").each(function(){
	 if($(this).attr("href").startsWith("https://")){
		  $(this).attr("target", "_blank");
	 }
});