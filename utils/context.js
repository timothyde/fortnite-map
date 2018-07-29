import challenges from './challenges';

const AppContext = React.createContext();

class AppProvider extends React.Component {
  state = {
    challenges: challenges({ week: 3 }),
    week: 3,
    selectWeek: (week) => {
      this.setState({
        challenges: challenges({ week }),
        week
      });
    }
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export { AppContext as default, AppProvider }