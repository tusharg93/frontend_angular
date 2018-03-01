# My project's README


NOTE 1: After running npm install, there are few changes needed to be done for css extraction to a files instead of inlining it (using extract-text-webpack-plugin):

Open file 
     a) node_modules/@angular/compiler/src/style_url_resolver.d.ts 
        Replace  cssText: string to cssText: string = ''
     b) node_modules/@angular/compiler/src/style_url_resolver.js
        On function extractStyleUrls add cssText = cssText?cssText:''; after the function starts
     c) node_modules/@angular/compiler/bundles/compiler.umd.js
        On function extractStyleUrls add cssText = cssText?cssText:''; after the function starts


NOTE 2: For desktop lazy load is served only for client

app.browser.module.ts -
1. Do not add router-outlet Component here.
2. Routing file to be use browser-routing.module , all routing should be lazy loaded using module.
3. For new routing there should be a routing module, injection module(which contains your component and needed directive/common/pipe module)
4. New functionality needs to have a module and injected using a module if used in client. On server you can inject it directly on server-module or the app.node.module.


app.node.module.ts -
1. Router oulet which need SSR add component directly here
2. Routing file to be use server-routing.module.Check the routing here it is all using component directly for SSR
3. If a new routing is added and SSR is not need use lazy load even on server side like for parenting/admin

Make sure if any new routing is added SSR should be checked. All routing present in server-routing.module should be present in  browser-routing.module.



NOTE 3: Change name of generated files

To change these path go to webpack.client.ts
