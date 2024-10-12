// const arr = [<li>apple</li>, <li>banana</li>, <li>pineapple</li>];
const FruitList = ({ list = [] }) => {
  const a = list.map((item, i) => {
    return <li key={i}>{item}</li>;
  });
  return <ul>{a}</ul>;
};
export default FruitList;
