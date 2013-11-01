
/*
 * http://g.tbcdn.cn/wt/public/x.y.z/config.js
 **/
(function(){
	if (KISSY.Config.debug) {
		var srcPath = "../";
		KISSY.config({
			packages:[
				{
					name:"public",
					path:srcPath,
					charset:"utf-8",
					ignorePackageNameInUri:true,
					debug:true
				}
			]
		});
	} else {
		KISSY.config({
			packages: [
				{
					name: 'public',
					// 发布到线上时需要带上版本号
					path: 'http://g.tbcdn.cn/wt/public/x.y.z',
					ignorePackageNameInUri: true
				}
			]
		});
	}
})();
