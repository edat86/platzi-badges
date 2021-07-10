## Manejo de estado 15/37
Cuando manejas estados en react utilizamos `setState`, pero cuando utilizamos `setState`  lo que sucede que estamos guardando en dos lados. Estamos guardando en cada input en el `value` y en el `setState`.
Debemos cambiar nuestros input de estar en modo no controlado a controlado. Es en el value de cada input que lo que hara es leer el estado `this.state` y si queremos escribir usamos `this.setState`.
Para utilizar `state` debemos iniciarlo en el componente, esto lo podemos escribir en cualquier parte de nuestro codigo. Lo reconmendable es iniciarlo al inicio del componente `state = {}` como un objeto vacio.

## Levantamiento del estado 16/37
Levantar el estado es una técnica de React que pone el estado en una localización donde se le pueda pasar como `props` a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.

Algo interesante que le da el nombre a React es su parte de `“reactivo”` ya que cada vez que hay un cambio en el estado o en los `props` que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.

