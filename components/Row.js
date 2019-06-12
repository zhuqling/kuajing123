export default (props) => {
  const { list } = props;
  return (
    <div className="row-wrapper">
      {(list || []).map((item) => (
        <a title={item.alt} href={item.url}>
          {item.name}
        </a>
      ))}
    </div>
  );
};
