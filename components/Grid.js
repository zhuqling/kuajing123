export default (props) => {
  const { list } = props;
  return (
    <div className="card">
      <div className="grid-wrapper">
        <div className="grid-inner">
          {(list || []).map((item) => (
            <div>
              <a title={item.alt} href={item.url}>
                {item.name}
              </a>{" "}
              {/* <br />
              <a href={item.url2}>{item.name2}</a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
