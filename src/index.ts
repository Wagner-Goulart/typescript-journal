{
  //GENERICS E DECORATORS

// CRIA UM INTERCADE QUE ACEITA UM GENERIC DO TIPO <T>
interface UserInterface<T> {
  name: string,
  age: number,
  data: T[] // DATA SERÁ DE ARRAY DE <T> 
}

// AO SE FAZER O USO DA INTERFACE É PASSADO QUE O TIPO STRING
const person: UserInterface<String> = {
  name:'Wagner',
  age: 34,
  data: ["Hello World"]
}

function persona<T extends number | string>(data: T) {
  return data
}

const p = persona("Hello World")

}

{

  function apiVersion(version : string) {
    return (target: any) => {
      Object.assign(target.prototype, {__version: version})
    }
  }

  @apiVersion("1.0.0")
  class Api {

  }


  function ObjectType(__name: string) {
    return(target: any)=>{
      Object.assign(target.prototype, {__name})
    }
  }

  function minLength(length: number){
    return (target: any, key: string)=>{
      let _value = target[key]

      const gettter = ()=> _value;
      const setter = (value: string)=> {
        if(value.length < 3) {
          throw new Error(`Exptect ${key} to have more ${length}`)
        }
        _value = value
      }

      Object.defineProperty(target, key, {
        get: gettter,
        set: setter
      })
    }
  }

  @ObjectType("user")
  class User {
    
    @minLength(3)
    name: string

    constructor(name: string){
      this.name = name
    }
  }

  const user = new User("Wagner")

  console.log(user)

}