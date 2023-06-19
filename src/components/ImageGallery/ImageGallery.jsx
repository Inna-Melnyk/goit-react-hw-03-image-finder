import { Component } from 'react';
import { toast } from 'react-toastify';
import { fetchGalleryPictures } from 'api';
import { ImageGalleryList } from './ImageGalleyList/ImageGalleryList';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Container, Text } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    hasMoreImages: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchImage !== this.props.searchImage) {
      this.setState({ images: [], page: 1 }, this.fetchImages);
    }
  }

  fetchImages = () => {
    const { searchImage } = this.props;
    const { page } = this.state;

    this.setState({ loading: true, hasMoreImages: false });

    fetchGalleryPictures({ query: searchImage, pageNumber: page })
      .then(data => {
        if (!data.hits.length) {
          return toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        if (data.hits.length < 12) {
          toast.warn(`That's the lest batch of pictures`);
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
          hasMoreImages: data.hits.length >= 12,
        }));
      })
      .catch(message => {
        toast.error(`Sorry, there is no more picture`);
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleLoadMoreImages = () => {
    this.fetchImages();
  };

  render() {
    const { images, hasMoreImages, loading } = this.state;
    const { searchImage } = this.props;
    return (
      <Container>
        {!images && <Text>Enter search name</Text>}

        {images && <ImageGalleryList items={images} name={searchImage} />}
        {hasMoreImages && <Button onLoadMore={this.handleLoadMoreImages} />}
        {loading && <Loader />}
      </Container>
    );
  }
}
