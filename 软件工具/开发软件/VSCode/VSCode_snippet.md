# VSCode snippet

### react 函数组件

```json
{
  "react-fc": {
    "scope": "typescriptreact",
    "prefix": "reactfc",
    "body": [
      "import React, { FC } from 'react';",
      "",
      "interface IProps${1:ComponentName} {",
      "}",
      "",
      "",
      "",
      "const ${1:ComponentName}: FC<IProps${1:ComponentName}> = () => {",
      "  return <></>;",
      "};",
      "",
      "export default React.memo(${1:ComponentName});"
    ],
    "description": "react 函数组件"
  }
}
```

### react ref 函数组件

```
{
  "react-frrf": {
    "scope": "typescriptreact",
    "prefix": "reactfrrf",
    "body": [
      "import React, { ForwardRefRenderFunction, useImperativeHandle } from 'react';",
      "",
      "interface IProps${1:ComponentName} {",
      "}",
      "",
      "export interface IRef${1:ComponentName} {}",
      "",
      "const ${1:ComponentName}: ForwardRefRenderFunction<IRef${1:ComponentName}, IProps${1:ComponentName}> = (props, ref) => {",
      "  useImperativeHandle(ref, () => ({}));",
      "",
      "  return <></>;",
      "};",
      "",
      "export default React.memo(React.forwardRef<IRef${1:ComponentName}, IProps${1:ComponentName}>(${1:ComponentName}));"
    ],
    "description": "react ForwardRefRenderFunction 函数组件"
  }
}

```
