import { useCoffeeContext } from "../context/CoffeeContext"; 

const SetCoffeeBean = ({ coffeeBeans }) => {
  const { setCoffeeBean } = useCoffeeContext();
  //debugger
  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        onChange={ (e) => setCoffeeBean(e.target.key) }
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;