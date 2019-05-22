import React from 'react';
import * as PetsApi from '../pets-api';
import Title from '../components/Title';
import GalleryPets from '../components/GalleryPets/GalleryPets';

class PetsPage extends React.Component {
  state = {
    pets: [],
  };

  componentDidMount() {
    PetsApi.getPets().then(data => {
      this.setState({ pets: data });
    });
  }

  render() {
    const { pets } = this.state;
    return (
      <div>
        <Title>Available pets</Title>
        <GalleryPets pets={pets} />
      </div>
    );
  }
}
export default PetsPage;
