export default class Nav extends React.Component {
  state = {
    current: 0
  };

  handleClick = (e) => {
    this.setState({ current: e });
  };

  render() {
    const { menus, items } = this.props;
    return (
      <div className="card">
        <div className="nav-wrap">
          <ul className="nav">
            {(menus || []).map((menu, idx) => (
              <li
                key={menu.name}
                className={idx === this.state.current ? "current" : null}
                onClick={this.handleClick.bind(this, idx)}
              >
                {menu.name}
              </li>
            ))}
          </ul>
        </div>
        {(items || []).map((item, idx) => (
          <div
            className={
              "nav-panel " + (idx === this.state.current ? "current" : "")
            }
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
}
