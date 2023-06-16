import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from 'Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery searchImage={this.state.imageName} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
