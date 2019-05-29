import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import * as PetsApi from '../pets-api';
import AboutPet from '../components/AboutPet/AboutPet';

const getIdFromProps = props => props.match.params.id;

class PetPage extends React.Component {
  state = {
    pet: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    this.fetchGetPet(id);
  }

  componentDidUpdate(prevProps) {
    const prevId = getIdFromProps(prevProps);
    const id = getIdFromProps(this.props);
    if (prevId !== id) {
      this.fetchGetPet(id);
    }
  }

  fetchGetPet = id => {
    PetsApi.getPet(id).then(pet => {
      if (!pet) {
        const { history } = this.props;
        history.push('/pets');
        return;
      }
      this.setState({ pet });
    });
  };

  handleBack = () => {
    const { history } = this.props;
    history.push('/pets');
  };

  render() {
    const { pet } = this.state;

    return (
      <div style={{ margin: '20px' }}>
        <Button variant="outlined" color="primary" onClick={this.handleBack}>
          Back
        </Button>
        {pet && <AboutPet {...pet} />}
      </div>
    );
  }
}

PetPage.propTypes = {
  history: PropTypes.object.isRequired,
};
export default PetPage;
