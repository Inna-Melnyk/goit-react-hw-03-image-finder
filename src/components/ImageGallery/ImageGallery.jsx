import { Component } from 'react';
import { toast } from 'react-toastify';
import { fetchGalleryPictures } from 'api';
import { ImageGalleryList } from './ImageGalleyList/ImageGalleryList';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Container, Text } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    searchName: '',
    images: null,
    page: 1,
    loading: false,
    loadbutton: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImage !== this.props.searchImage) {
      this.setState({
        loading: true,
        page: 1,
        images: null,
        loadbutton: false,
      });

      fetchGalleryPictures({ query: this.props.searchImage })
        .then(data => {
          if (data.hits.length === 0 || data === undefined) {
            toast.error(
              'Sorry, there are no images matching your search query. Please try again.'
            );
            this.setState({
              loading: false,
              loadbutton: false,
            });
            return;
          }
          if (data.hits.length < 12) {
            return this.setState({
              loadbutton: false,
              loading: false,
            });
          }
          this.setState({
            searchName: this.props.searchImage,
            images: data.hits,
            loading: false,
            loadbutton: true,
          });
        })
        .catch(message => {
          toast.error(`Sorry, there is no more picture`);
          this.setState({
            loadbutton: false,
            loading: false,
          });
        });
    }

    if (prevState.page !== this.state.page) {
      fetchGalleryPictures({
        query: this.state.searchName,
        pageNumber: this.state.page,
      })
        .then(data => {
          if (data.hits.length < 12) {
            toast.warn(`That's the lest batch of pictures`);
            return this.setState(prevState => {
              return {
                images: [...prevState.images, ...data.hits],
                loading: false,
                loadbutton: false,
              };
            });
          }

          this.setState(prevState => {
            return {
              images: [...prevState?.images, ...data.hits],
              loading: false,
              loadbutton: true,
            };
          });
        })
        .catch(() => {
          toast.error(`Sorry, there is no more picture`);
          this.setState({
            loadbutton: false,
            loading: false,
          });
        });
    }
  }

  handleLoadMoreImages = () => {
    this.setState(prevState => {
      return {
        loading: true,
        page: prevState.page + 1,
        loadbutton: false,
      };
    });
  };

    render() {
        const { images, loadbutton, loading } = this.state;
        const { searchImage } = this.props;
    return (
      <Container>
        {!images && <Text>Enter search name</Text>}

        {images && (
          <ImageGalleryList
            items={images}
            name={searchImage}
          />
        )}
        {loadbutton && (
          <Button onLoadMore={this.handleLoadMoreImages} />
        )}
        {loading && <Loader />}
      </Container>
    );
  }
}
