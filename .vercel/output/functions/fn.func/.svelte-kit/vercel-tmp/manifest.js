export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DwQdwdAL.js","app":"_app/immutable/entry/app.DUi5Vi3S.js","imports":["_app/immutable/entry/start.DwQdwdAL.js","_app/immutable/chunks/entry.DuEgyixv.js","_app/immutable/chunks/runtime.BiJLf84_.js","_app/immutable/entry/app.DUi5Vi3S.js","_app/immutable/chunks/props.CWr50lrf.js","_app/immutable/chunks/runtime.BiJLf84_.js","_app/immutable/chunks/disclose-version.myX740es.js","_app/immutable/chunks/this.B3CFQPJJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
