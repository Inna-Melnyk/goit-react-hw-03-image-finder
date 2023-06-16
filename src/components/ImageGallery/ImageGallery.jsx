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

  componentDidUpdate(prevProps, _) {
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
    }
    
    componentWillUnmount
  handleLoadMoreImages = () => {
    const nextPage = this.state.page + 1;

    this.setState({
      loading: true,
      page: nextPage,
      loadbutton: false,
    });

    fetchGalleryPictures({ query: this.state.searchName, pageNumber: nextPage })
      .then(data => {
        if (data.hits.length < 12) {
          toast.warn(`That's the lest batch of pictures`);
          return this.setState({
            loadbutton: false,
            loading: false,
          });
        }

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data.hits],
            loading: false,
            loadbutton: true,
          };
        });
      })
      .catch(message => {
        toast.error(`Sorry, there is no more picture`);
        this.setState({
          loadbutton: false,
          loading: false,
        });
      });
    };
    

  render() {
    return (
      <Container>
        {!this.state.images && <Text>Enter search name</Text>}

        {this.state.images && (
          <ImageGalleryList
            items={this.state.images}
            name={this.props.searchImage}
          />
        )}
        {this.state.loadbutton && (
          <Button onLoadMore={this.handleLoadMoreImages} />
        )}
        {this.state.loading && <Loader />}
      </Container>
    );
  }
}
