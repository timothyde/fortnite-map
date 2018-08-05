import challenges, { defaultWeek } from './challenges';

const AppContext = React.createContext();

class AppProvider extends React.Component {
  state = {
    challenges: challenges({ week: defaultWeek }),
    week: defaultWeek,
    selectWeek: (week) => {
      this.setState({
        challenges: challenges({ week }),
        week
      });
    },
    highlightedChallengeIds: [],
    setHighlighted: (highlightedChallengeIds) => {
      this.setState({
        highlightedChallengeIds
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