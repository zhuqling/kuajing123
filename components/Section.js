// const Item2 = props => {
//   let {item} = props

//   return (
//     <div>
//         |<a href={item.url2}>{item.name2}</a>
//       </div>
//   )
// }

import Row from "./Row";

const TitleLink = (props) => {
  let { title } = props;
  return <h2>{title}</h2>;
};

const SectionItem = (props) => {
  let { item } = props;

  let ele2 = <div />;
  if (item.name2) {
    ele2 = (
      <div>
        | <a href={item.url2}>{item.name2}</a>
      </div>
    );
  }
  return (
    <div>
      <a href={item.url}>{item.name}</a>
      {ele2}
    </div>
  );
};

export default (props) => {
  const { title, list } = props;
  if (title) {
    return (
      <div className="section">
        <TitleLink title={title} />
        <div>
          <ul>
            {(list || []).map((item) => (
              <li key={item.name}>
                <SectionItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return <Row list={list} />;
  }
};
