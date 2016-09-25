# angular2-quickstart
Setup Angular Project with required Files and directories

Steps to setup custom dist or output directory.

1. Change dist directory mapping in systemjs.config.js
    app: 'app'    --->    app: 'dist'

2. Add outDir in the tsconfig.json

    "outDir" : "dist"

3. run npm start


Building blocks in Angluar 2:

1. Components
      - Encapsulates the template, data and the behaviour of a view.
      - app.component.ts is the root component
      - components contains components
      - sample components - navibar components, sidebar components, content components etc.
      - A component is a plain typescript class.
      - Components are completely decoupled with DOM.

            export class SampleComponent{

                sampleName: string,

                setSampleName(value){

                }
            }



2. Routers
3. Binding
4.
