
# Magical Motion 👟

*Mount And Unmount Your React Component In A More Magical Way*


## Installation

Install magical-motion with npm 

```bash
  npm install magical-motion
```
or

Install magical-motion with yarn 

```bash
  yarn add magical-motion
```
    
## Usage/Examples

```javascript
import { useState } from 'react'
import Motion from 'magical-motion'

export const Box = () => {
    const [message, setMessage] = useState('mount animation running')
    return (
    <Motion
    key={message}
    animate={{opacity:1}}
    initial={{opacity:0}}
    onFinish={ ()=>{
        setMessage('Finished  animation')
      }}
    >{message}</Motion>
  )
}
```


## API Reference

#### Bare Minimum

```javascript
 <Motion 
    initial={{opacity:0}}>
    Hello world
 </Motion>
```

| Parameter | Type     | Description                | Required               |
| :-------- | :------- | :------------------------- |:------------------------- |
| `initial` | `object` | the initial state of your animation, accepts any css prop, any properties here reset to animate | **Required**. `false`     |

#### Full Api

| Parameter   | Type     | Description                | Required               |
| :--------   | :------- | :------------------------- |:------------------------- |
| `as`   | `string || custom component` | allows to render `<Motion/>` component as any html element or a custom react element                                  |  **Required**. `false`    |
| `initial`   | `object` | the initial state of your animation, accepts any css prop, any properties here reset to animate prop                                  |  **Required**. `false`    |
| `animate`   | `object` | from initial state Motion component moves to animate,accepts any css prop, at the end of animation all props are set as default value | **Required**. `false`     |
| `animate`   | `object` | from initial state Motion component moves to animate,accepts any css prop, at the end of animation all props are set as default value | **Required**. `false`     |
| `configure` | `object` | controls the feel of `<Motion/>` spring animation like, stiffness,or FPS                                                              | **Required**. `false`     |
| `transitions` | `object` | controls animation properties like delay before animation start, iterations and direction                                           | **Required**. `false`     |
| `onFinish` | `function` | a callback function that runs after animation                                           | **Required**. `false`     |

#### Default Configuration

```javascript
  <Motion
    as='main'
    initial={{ x:0,y:0 }}
    animate={{ x:0,y:0 }}
    configure={{
      stiffness: 100,
      mass: 1,
      damping:10,
      FPS: 150
    }}
    transitions={{}}
    onFinish={()=> console.log(' spring animation completed')}
  >
    
  </Motion>
```


## Roadmap

- polyfill ✅

- support initial animation state ✅
- support rendered animation state ✅
- support exit animation state ❌
- support option to generate more frames ✅
- support callback function during animation state ✅


## TODO

- ability to pause animation after a certain duration
- condition to pause animation
- ability to wait till or wait until a condition is met before render
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@86_Magical](https://www.github.com/86Magical)

