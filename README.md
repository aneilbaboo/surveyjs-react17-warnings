# surveyjs-react17-warnings

```shell
yarn install
yarn test 
```
Results in warnings:
```shell
npx: installed 512 in 17.933s
 PASS  ./test.jsx
  basic test
    ✓ this produces a bunch of warnings (64 ms)

  console.warn
    Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.
    
    * Move data fetching code or side effects to componentDidUpdate.
    * If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
    * Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.
    
    Please update the following components: Survey, SurveyElementErrors, SurveyLocString, SurveyNavigation, SurveyPage, SurveyQuestion, SurveyQuestionCheckbox, SurveyQuestionCheckboxItem, SurveyRow

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:67:30)
      at warn (node_modules/react-dom/cjs/react-dom.development.js:34:5)
      at Object.<anonymous>.ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings (node_modules/react-dom/cjs/react-dom.development.js:11530:7)
      at flushRenderPhaseStrictModeWarningsInDEV (node_modules/react-dom/cjs/react-dom.development.js:23822:31)
      at commitRootImpl (node_modules/react-dom/cjs/react-dom.development.js:23005:3)
      at unstable_runWithPriority (node_modules/scheduler/cjs/scheduler.development.js:646:12)
      at runWithPriority$1 (node_modules/react-dom/cjs/react-dom.development.js:11276:10)
```
