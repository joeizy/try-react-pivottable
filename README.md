# Trying out the `react-pivottable` package

Started as JS library. Ported to react to make it easier to use in react projects. More docs and examples on JS version but it's the same for both.

- `react-pivottable` packge on npmjs.com: https://www.npmjs.com/package/react-pivottable
- GitHub Repo: https://github.com/plotly/react-pivottable
- JS Version Examples: https://pivottable.js.org/examples/
- JS Version Docs: https://github.com/nicolaskruchten/pivottable/wiki/Parameters
- Demo Page: https://react-pivottable.js.org/

# Notes
- Package not updated for two years.
- README says "react-pivottable is part of Plotly's React Component Suite" but it's not listed on [the plotly docs pages](https://plot.ly/products/react/). Maybe deprecated.
- Still has 31,758 weekly downloads according to npmjs.com
  
  <img width="250" alt="image" src="https://user-images.githubusercontent.com/11180858/210234821-87c1ffbf-f885-4689-85b0-59f7e0656231.png">
- [Examples in react-pivottable docs are in JavaScript](https://github.com/plotly/react-pivottable/blob/master/examples/App.jsx) with React Component Classes. My tests are in Typescript with Functional/React Hooks. Project created with `npx create-react-app --template typescript`.
- [DraggableAttribute Issue on GitHub](https://github.com/plotly/react-pivottable/issues/9) - Browser Console window shows the below error. Everything still seems to function. Multiple GitHub issues but everone says it seems to still work. Will ignore.
  > `Warning: Failed prop type: The prop 'attrValues' is marked as required in 'DraggableAttribute', but its value is 'undefined'.
in DraggableAttribute (created by PivotTableUI)`
