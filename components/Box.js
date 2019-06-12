export default (props) => {
  const { list } = props;
  return (
    <div className="box-wrap">
      {(list || []).map((item) => (
        <div className="box-item">
          <a title={item.alt} href={item.url}>
            <div className="box-item__name">{item.name}</div>
            <div className="box-item__desc">{item.desc}</div>
          </a>{" "}
          {/* <br />
              <a href={item.url2}>{item.name2}</a> */}
        </div>
      ))}
    </div>
  );
};
