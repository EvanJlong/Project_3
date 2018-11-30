export class Container extends React.Component {
    render() {
      return (
        <div>
          <Map google={this.props.google} />
        </div>
      )
    }
  }
